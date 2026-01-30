import React from "react";
import { Outlet } from "react-router-dom";
import MyPageHeader from "./component/MyPageHeader.jsx";
import MyPageSidebar from "./component/MyPageSidebar.jsx";

// 마이페이지 전체 레이아웃
// 헤더 + (사이드바, 메인 콘텐츠) 구조
const GeneralMyPageLayout = () => {
  return (
    <div style={layoutStyles.wrapper}>
      {/* 마이페이지 상단 공통 헤더 */}
      <MyPageHeader />

      <div style={layoutStyles.bottomContainer}>
        {/* 왼쪽 사이드바 메뉴 */}
        <MyPageSidebar />

        {/* 페이지 내용 교체 영역 */}
        <main style={layoutStyles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const layoutStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
  },

  bottomContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch', 
    width: '100%',
  },
  
  mainContent: {
    flex: 1,
    padding: '40px',
    backgroundColor: '#FFFFFF',
  },
};

export default GeneralMyPageLayout;