import React, { useEffect, useRef, useState } from "react";
import S from "./style";
import Icon from "../../components/icon/Icon";
import { useLocationContext } from "../../context/LocationContext";
import loadKakaoMaps from "../../utils/loadKakaoMaps";
import { fetchFacilities } from "../../api/safetyScoreApi";

const DEFAULT_CENTER = { latitude: 37.5665, longitude: 126.978 };

// 활성 상태 공용 스타일 (배경 파랑 + 텍스트 흰색)
const ACTIVE_BG = "#5B7CFA";
const activeStyle = (active) => ({
  backgroundColor: active ? ACTIVE_BG : "transparent",
  color: active ? "#fff" : "inherit",
});
// 검정 PNG 아이콘을 흰색으로 만들어주는 CSS filter
const iconWhiteFilter = (active) => ({
  filter: active ? "brightness(0) invert(1)" : "none",
});

// CCTV 마커용 SVG (빨간 원 배경 + 흰 카메라)
const CCTV_MARKER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
  <circle cx="14" cy="14" r="12.5" fill="#FF3B30" stroke="white" stroke-width="2"/>
  <rect x="7.5" y="11" width="13" height="8" rx="1.2" fill="white"/>
  <circle cx="14" cy="15" r="2.6" fill="#FF3B30"/>
  <rect x="10.5" y="9" width="4" height="2" fill="white"/>
</svg>
`.trim();
const CCTV_MARKER_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(CCTV_MARKER_SVG)}`;

// 가로등 마커용 SVG (노란 원 배경 + 가로등 모양)
const LAMP_MARKER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10.5" fill="#FFB300" stroke="white" stroke-width="2"/>
  <rect x="10.5" y="10" width="3" height="9" rx="0.5" fill="white"/>
  <path d="M7 6 L17 6 L15.5 9 L8.5 9 Z" fill="white"/>
</svg>
`.trim();
const LAMP_MARKER_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(LAMP_MARKER_SVG)}`;

const SafetyScoreMap = () => {
  const { selectedLocation } = useLocationContext();
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const cctvMarkersRef = useRef([]);
  const lampMarkersRef = useRef([]);
  const [error, setError] = useState("");
  const [showCctv, setShowCctv] = useState(false);
  const [showLamp, setShowLamp] = useState(false);
  // 원위치 버튼: 클릭하면 잠깐 active 효과
  const [recenterFlash, setRecenterFlash] = useState(false);

  // 1) 지도 생성/갱신
  useEffect(() => {
    let cancelled = false;

    loadKakaoMaps()
      .then((kakao) => {
        if (cancelled || !containerRef.current) return;

        const lat = selectedLocation
          ? Number(selectedLocation.latitude)
          : DEFAULT_CENTER.latitude;
        const lng = selectedLocation
          ? Number(selectedLocation.longitude)
          : DEFAULT_CENTER.longitude;
        const center = new kakao.maps.LatLng(lat, lng);

        if (!mapRef.current) {
          mapRef.current = new kakao.maps.Map(containerRef.current, {
            center,
            level: 4,
          });
        } else {
          mapRef.current.setCenter(center);
        }

        if (selectedLocation) {
          if (markerRef.current) {
            markerRef.current.setPosition(center);
          } else {
            markerRef.current = new kakao.maps.Marker({
              position: center,
              map: mapRef.current,
            });
          }
        } else if (markerRef.current) {
          markerRef.current.setMap(null);
          markerRef.current = null;
        }

        setTimeout(() => mapRef.current?.relayout(), 0);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "지도를 불러오지 못했습니다.");
      });

    return () => {
      cancelled = true;
    };
  }, [selectedLocation]);

  // 공통: 시설 마커 fetch + 그리기
  const drawFacilityMarkers = async ({
    type,
    show,
    markersRef,
    markerSrc,
    size,
  }) => {
    const removeAll = () => {
      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];
    };

    if (!show || !selectedLocation) {
      removeAll();
      return;
    }

    try {
      const res = await fetchFacilities({
        type,
        latitude: Number(selectedLocation.latitude),
        longitude: Number(selectedLocation.longitude),
      });
      if (!mapRef.current || !window.kakao?.maps) return;

      removeAll();
      const kakao = window.kakao;
      const points = res?.data ?? [];
      const imageSize = new kakao.maps.Size(size, size);
      const imageOption = { offset: new kakao.maps.Point(size / 2, size / 2) };
      const markerImage = new kakao.maps.MarkerImage(
        markerSrc,
        imageSize,
        imageOption,
      );

      markersRef.current = points.map((p) => {
        const pos = new kakao.maps.LatLng(
          Number(p.latitude),
          Number(p.longitude),
        );
        return new kakao.maps.Marker({
          position: pos,
          map: mapRef.current,
          image: markerImage,
          title: type,
        });
      });
    } catch (err) {
      console.error(`${type} 좌표 조회 실패:`, err);
    }
  };

  // 2) CCTV 마커
  useEffect(() => {
    drawFacilityMarkers({
      type: "cctv",
      show: showCctv,
      markersRef: cctvMarkersRef,
      markerSrc: CCTV_MARKER_SRC,
      size: 28,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCctv, selectedLocation]);

  // 3) 가로등 마커
  useEffect(() => {
    drawFacilityMarkers({
      type: "streetlight",
      show: showLamp,
      markersRef: lampMarkersRef,
      markerSrc: LAMP_MARKER_SRC,
      size: 24,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLamp, selectedLocation]);

  // "원위치" 버튼: 잠깐 active 효과 + 중심 이동
  const handleRecenter = () => {
    if (!mapRef.current || !selectedLocation || !window.kakao?.maps) return;
    const kakao = window.kakao;
    const next = new kakao.maps.LatLng(
      Number(selectedLocation.latitude),
      Number(selectedLocation.longitude),
    );
    mapRef.current.setCenter(next);

    setRecenterFlash(true);
    setTimeout(() => setRecenterFlash(false), 800);
  };

  const toggleCctv = () => setShowCctv((prev) => !prev);
  const toggleLamp = () => setShowLamp((prev) => !prev);

  return (
    <S.SafetyScoreMap>
      <S.MapCanvas ref={containerRef} />
      {!selectedLocation && !error && (
        <S.MapEmpty>지역을 선택하면 지도가 표시돼요.</S.MapEmpty>
      )}
      {error && <S.MapEmpty>{error}</S.MapEmpty>}

      <S.MapFilter>
        <S.MapFilterItem onClick={handleRecenter}>
          <S.MapFilterItemIcon style={activeStyle(recenterFlash)}>
            <Icon
              name="location-black"
              size="small"
              style={iconWhiteFilter(recenterFlash)}
            />
            원위치
          </S.MapFilterItemIcon>
        </S.MapFilterItem>
        <S.MapFilterItem>
          <S.MapFilterItemIcon
            onClick={toggleCctv}
            style={activeStyle(showCctv)}
          >
            <Icon
              name="camera-black"
              size="small"
              style={iconWhiteFilter(showCctv)}
            />
            CCTV 표시
          </S.MapFilterItemIcon>
          <S.MapFilterItemIcon
            onClick={toggleLamp}
            style={activeStyle(showLamp)}
          >
            <Icon
              name="lamp-black"
              size="small"
              style={iconWhiteFilter(showLamp)}
            />
            가로등 표시
          </S.MapFilterItemIcon>
        </S.MapFilterItem>
      </S.MapFilter>
    </S.SafetyScoreMap>
  );
};

export default SafetyScoreMap;
