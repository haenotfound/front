import React from "react";
import MyPageTabMenu from "../component/MyPageTabMenu.jsx";

// 마이페이지_지역 섹션용 서브 탭 메뉴
const MyAreaTabs = ({ activeTab, onChange }) => {
  // 지역 섹션 전용 탭 데이터
  const tabs = [
    { id: "favorite", label: "즐겨찾기 지역" },
    { id: "recent", label: "최근 본 지역" },
  ];

  return <MyPageTabMenu tabs={tabs} activeId={activeTab} onChange={onChange} />;
};

export default MyAreaTabs;
