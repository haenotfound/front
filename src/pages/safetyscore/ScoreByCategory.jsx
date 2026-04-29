import React, { useEffect, useRef, useState } from "react";
import S from "./style";

const ScoreByCategory = ({ image, alt, title, score = 0, maxScore = 100 }) => {
  const targetPercent = Math.min(Math.round((score / maxScore) * 100), 100);

  // 그래프가 화면에 들어왔는지 여부
  const [isVisible, setIsVisible] = useState(false);
  // 실제 게이지 width(%)
  const [displayPercent, setDisplayPercent] = useState(0);

  const wrapperRef = useRef(null);

  // 1) IntersectionObserver - 한 번이라도 보였으면 isVisible=true
  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // 2) score 또는 isVisible 변경 시 애니메이션 트리거
  // - 처음 보이는 순간: 0 → targetPercent
  // - 점수가 바뀌면: 0으로 리셋 → 다음 tick에 새 targetPercent (다시 차오름)
  useEffect(() => {
    if (!isVisible) return;
    setDisplayPercent(0);
    const timer = requestAnimationFrame(() => {
      setDisplayPercent(targetPercent);
    });
    return () => cancelAnimationFrame(timer);
  }, [isVisible, targetPercent]);

  return (
    <S.ScoreByCategoryContainer ref={wrapperRef}>
      <S.CategotyImage>
        <img src={image} alt={alt || title} />
      </S.CategotyImage>
      <S.CategotyContent>
        <S.CategotyContentTitle>{title}</S.CategotyContentTitle>
        <S.CategotyContentScore>{targetPercent}점</S.CategotyContentScore>
        <S.ScoreGaugeWrapper>
          <S.ScoreGaugeFill $percent={displayPercent} />
        </S.ScoreGaugeWrapper>
      </S.CategotyContent>
    </S.ScoreByCategoryContainer>
  );
};

export default ScoreByCategory;
