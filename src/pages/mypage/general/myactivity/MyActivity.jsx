import React, { useState } from "react";
import MyPageTitle from "../component/MyPageTitle.jsx";
import MyPageTabMenu from "../component/MyPageTabMenu.jsx";
// 탭별 컴포넌트
import MyPosts from "./MyPosts";
import MyComments from "./MyComments";
import CommentsOnMyPosts from "./CommentsOnMyPosts";
import BookmarkedPosts from "./BookmarkedPosts";
import LikedPosts from "./LikedPosts";

// 마이페이지_내 활동 메인페이지
// 각 탭을 클릭하여 게시글, 댓글, 스크랩, 좋아요 목록을 전환하여 확인 가능
const MyActivity = () => {
  const tabs = [
    { id: "posts", label: "내 글" },
    { id: "comments", label: "내 댓글" },
    { id: "postComments", label: "내 글의 댓글" },
    { id: "scraps", label: "스크랩한 글" },
    { id: "likes", label: "좋아요한 글" },
  ];

  const [activeTab, setActiveTab] = useState("posts");

  // 활성화된 탭에 따라 해당 리스트 컴포넌트 렌더링
  const renderTab = () => {
    switch (activeTab) {
      case "comments":
        return <MyComments />;
      case "postComments":
        return <CommentsOnMyPosts />;
      case "scraps":
        return <BookmarkedPosts />;
      case "likes":
        return <LikedPosts />;
      case "posts":
      default:
        return <MyPosts />;
    }
  };

  return (
    <div style={styles.page}>
      {/* 상단 타이틀 */}
      <MyPageTitle title="내 활동" 
      description="내 활동 내역을 확인하세요"
      />

      {/* 탭 메뉴 */}
      <MyPageTabMenu tabs={tabs} 
      activeId={activeTab} 
      onChange={setActiveTab} 
      />

      {/* 동적 리스트 렌더링 영역 */}
      <div style={styles.contentArea}>
        {renderTab()}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "28px 32px 40px",
  },
};

export default MyActivity;
