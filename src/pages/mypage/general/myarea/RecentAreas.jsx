import React from 'react';
import styled from 'styled-components';
import RegionCard from './RegionCard';

// 마이페이지_최근 본 지역 리스트
const RecentAreas = () => {
  // 최근 본 지역 데이터 (나중에 API 연결 예정)
  const recentRegions = [
    {
      id: 1,
      name: '서울특별시 관악구 신림동',
      score: 60,
      linkText: '다시보기',
    },
  ];
  // 상세페이지 이동 핸들러
  const handleLinkClick = (name) => {
    const encodedName = encodeURIComponent(name);
    window.location.href = `/region/${encodedName}`;
  };

  return (
    <CardList>
      {recentRegions.map((item) => (
        <RegionCard
          key={item.id}
          name={item.name}
          score={item.score}
          linkText={item.linkText}
          // 카드 클릭 시 상세페이지로 이동
          onLinkClick={() => handleLinkClick(item.name)}
        />
      ))}
    </CardList>
  );
};

const CardList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export default RecentAreas;