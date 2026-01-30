import React, { useState } from "react";
import styled from "styled-components";
// 공통 컴포넌트
import MyPageTitle from "../component/MyPageTitle.jsx";
import MyAreaTabs from "./MyAreaTabs";
import FavoriteAreas from "./FavoriteAreas";
import RecentAreas from "./RecentAreas";

// 마이페이지_내 지역 관리 페이지
const MyRegionPage = () => {
  const [activeTab, setActiveTab] = useState("favorite");

  return (
    <Page>
      {/* 타이틀 및 설명 */}
      <MyPageTitle title="지역" description="지역 정보를 확인하세요" />

      {/* 지역 전환 탭 (즐겨찾기, 최근 본 지역) */}
      <MyAreaTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* 활성화된 탭에 따른 리스트 렌더링 */}
      <ContentSection>
        {activeTab === "favorite" ? <FavoriteAreas /> : <RecentAreas />}
      </ContentSection>
    </Page>
  );
};

const Page = styled.div`
  padding: 28px 32px 40px;
`;

const ContentSection = styled.div`
  margin-top: 10px;
`;

export default MyRegionPage;
