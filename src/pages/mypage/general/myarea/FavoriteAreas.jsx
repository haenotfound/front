import React from "react";
import styled from "styled-components";
import RegionCard from "./RegionCard";

// 마이페이지_사용자 관심 지역 목록
const FavoriteAreas = () => {
  // 관심 지역 데이터 (추후 API 연동 가능)
  const favoriteRegions = [
    {
      id: 1,
      name: "서울특별시 구로구 가리봉동",
      score: 70,
      linkText: "바로보기",
    },
  ];

  return (
    <CardList>
      {favoriteRegions.map((item) => (
        <RegionCard
          key={item.id}
          name={item.name}
          score={item.score}
          linkText={item.linkText}
          onLinkClick={() => {}}
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

export default FavoriteAreas;
