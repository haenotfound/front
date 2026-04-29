// 백엔드 location 관련 API 호출 함수 모음
// JWT는 httpOnly 쿠키이므로 fetch 옵션에 credentials: "include" 필수.

const BASE_URL = "http://localhost:10000";

const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || "요청 처리에 실패했습니다.";
    throw new Error(message);
  }
  return data;
};

// 최근 본 지역 추가
export const addRecentLocation = async ({ address, latitude, longitude }) => {
  const res = await fetch(`${BASE_URL}/location/recent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ address, latitude, longitude }),
  });
  return handleResponse(res);
};

// 최근 본 지역 목록 (최신 5개)
export const fetchRecentLocations = async () => {
  const res = await fetch(`${BASE_URL}/location/recent`, {
    method: "GET",
    credentials: "include",
  });
  return handleResponse(res);
};

// 즐겨찾기 지역 추가
export const addFavoriteLocation = async ({
  address,
  latitude,
  longitude,
  si,
  gu,
  dong,
}) => {
  const res = await fetch(`${BASE_URL}/location/favorite`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ address, latitude, longitude, si, gu, dong }),
  });
  return handleResponse(res);
};

// 즐겨찾기 지역 목록
export const fetchFavoriteLocations = async () => {
  const res = await fetch(`${BASE_URL}/location/favorite`, {
    method: "GET",
    credentials: "include",
  });
  return handleResponse(res);
};

// 즐겨찾기 지역 삭제
export const deleteFavoriteLocation = async (id) => {
  const res = await fetch(`${BASE_URL}/location/favorite/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return handleResponse(res);
};
