// 안전점수 관련 API 호출 함수 모음

const BASE_URL = "http://localhost:10000";

const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || "요청 처리에 실패했습니다.";
    throw new Error(message);
  }
  return data;
};

// 안전점수 계산 요청
export const calculateSafeScore = async ({ address, latitude, longitude }) => {
  const res = await fetch(`${BASE_URL}/safe-score/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ address, latitude, longitude }),
  });
  return handleResponse(res);
};

// 내가 최근 조회한 안전점수 목록
export const fetchRecentSafeScores = async () => {
  const res = await fetch(`${BASE_URL}/safe-score/recent`, {
    method: "GET",
    credentials: "include",
  });
  return handleResponse(res);
};

// 항목별 시설 좌표 (지도 마커용)
// type: "cctv" 등
export const fetchFacilities = async ({ type, latitude, longitude }) => {
  const params = new URLSearchParams({
    type,
    lat: String(latitude),
    lng: String(longitude),
  });
  const res = await fetch(`${BASE_URL}/safe-score/facilities?${params}`, {
    method: "GET",
    credentials: "include",
  });
  return handleResponse(res);
};
