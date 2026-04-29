// 카카오 지도 SDK 로딩 유틸
// - 페이지 전체에서 한 번만 로드되도록 promise 캐싱
// - window.kakao가 이미 있으면 즉시 resolve

const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_MAP_KEY;
const SCRIPT_ID = "kakao-map-script";

let kakaoLoadPromise = null;

const loadKakaoMaps = () => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("window is undefined"));
  }

  if (window.kakao && window.kakao.maps) {
    return Promise.resolve(window.kakao);
  }

  if (kakaoLoadPromise) return kakaoLoadPromise;

  kakaoLoadPromise = new Promise((resolve, reject) => {
    const sanitizedKey = (KAKAO_APP_KEY || "").trim();
    if (!sanitizedKey) {
      reject(new Error("Kakao Maps API key is missing"));
      return;
    }

    const ensureLoaded = () => {
      if (!window.kakao || !window.kakao.maps) {
        reject(new Error("Kakao Maps is not available after script load."));
        return;
      }
      window.kakao.maps.load(() => resolve(window.kakao));
    };

    const expectedSrc = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${sanitizedKey}&autoload=false&libraries=services`;
    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) {
      if (window.kakao && window.kakao.maps) {
        ensureLoaded();
        return;
      }
      existingScript.addEventListener("load", ensureLoaded);
      existingScript.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = expectedSrc;
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    script.onload = ensureLoaded;
    script.onerror = () => reject(new Error("Failed to load Kakao Maps script."));
    document.head.appendChild(script);
  });

  return kakaoLoadPromise;
};

export default loadKakaoMaps;
