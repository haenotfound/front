import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addFavoriteLocation,
  addRecentLocation,
  fetchFavoriteLocations,
  fetchRecentLocations,
} from "../api/locationApi";
import { useAuth } from "./AuthContext";

const LocationContext = createContext(null);

const STORAGE_KEY = "selected_location";

// 새로고침 시 마지막으로 선택한 지역을 유지하기 위해 localStorage 사용
const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const saveToStorage = (value) => {
  try {
    if (value) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // ignore
  }
};

export const LocationProvider = ({ children }) => {
  const { isLogin } = useAuth();

  // 현재 선택된 지역 { address, latitude, longitude }
  const [selectedLocation, setSelectedLocationState] = useState(loadFromStorage);
  const [recentList, setRecentList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  // 지역 선택 모달 (전역) - 어떤 페이지/컴포넌트에서든 open/close 가능
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const openLocationModal = useCallback(() => setIsLocationModalOpen(true), []);
  const closeLocationModal = useCallback(() => setIsLocationModalOpen(false), []);

  const setSelectedLocation = useCallback((location) => {
    setSelectedLocationState(location);
    saveToStorage(location);
  }, []);

  // 최근 본 지역 목록 새로고침
  const refreshRecent = useCallback(async () => {
    if (!isLogin) {
      setRecentList([]);
      return;
    }
    try {
      const res = await fetchRecentLocations();
      setRecentList(res?.data ?? []);
    } catch (err) {
      console.error("최근 본 지역 조회 실패:", err);
    }
  }, [isLogin]);

  // 즐겨찾기 목록 새로고침
  const refreshFavorites = useCallback(async () => {
    if (!isLogin) {
      setFavoriteList([]);
      return;
    }
    try {
      const res = await fetchFavoriteLocations();
      setFavoriteList(res?.data ?? []);
    } catch (err) {
      console.error("즐겨찾기 지역 조회 실패:", err);
    }
  }, [isLogin]);

  // 지역을 선택했을 때 호출:
  // 1) Context 상태 업데이트 (즉시 반영)
  // 2) 백엔드에 최근 본 지역으로 저장
  // 3) saveAsFavorite=true 면 즐겨찾기로도 저장
  const selectLocation = useCallback(
    async ({ address, latitude, longitude, saveAsFavorite = false }) => {
      const next = { address, latitude, longitude };
      console.log("[selectLocation] 새 지역 set:", next);
      setSelectedLocation(next);

      if (!isLogin) return next;

      try {
        await addRecentLocation({ address, latitude, longitude });
        await refreshRecent();
      } catch (err) {
        console.error("최근 본 지역 저장 실패:", err);
      }

      if (saveAsFavorite) {
        try {
          await addFavoriteLocation({ address, latitude, longitude });
          await refreshFavorites();
        } catch (err) {
          console.error("즐겨찾기 저장 실패:", err);
        }
      }

      return next;
    },
    [isLogin, refreshRecent, refreshFavorites, setSelectedLocation],
  );

  // 로그인 상태가 바뀔 때마다 목록 다시 가져오기
  useEffect(() => {
    refreshRecent();
    refreshFavorites();
  }, [refreshRecent, refreshFavorites]);

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        selectLocation,
        recentList,
        favoriteList,
        refreshRecent,
        refreshFavorites,
        isLocationModalOpen,
        openLocationModal,
        closeLocationModal,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const ctx = useContext(LocationContext);
  if (!ctx)
    throw new Error("useLocationContext must be used within LocationProvider");
  return ctx;
};
