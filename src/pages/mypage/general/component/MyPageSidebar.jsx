import React from "react";
import { NavLink } from "react-router-dom";

// 마이페이지 사이드바
const MyPageSidebar = () => {
  return (
    <aside style={sidebarStyles.sidebar}>
      <nav style={sidebarStyles.menu}>
        <NavItem
          to="/mypage"
          label="프로필"
          icon="/assets/images/icons/mypage-profile.png"
          activeIcon="/assets/images/icons/mypage-profile-active.png"
          end
        />

        <NavItem
          to="/mypage/my-activity"
          label="내 활동"
          icon="/assets/images/icons/mypage-myactivity.png"
          activeIcon="/assets/images/icons/mypage-myactivity-active.png"
        />

        <NavItem
          to="/mypage/area"
          label="지역"
          icon="/assets/images/icons/mypage-myarea.png"
          activeIcon="/assets/images/icons/mypage-myarea-active.png"
        />

        <NavItem
          to="/mypage/notify"
          label="알림"
          icon="/assets/images/icons/mypage-notify.png"
          activeIcon="/assets/images/icons/mypage-notify-active.png"
        />

        <NavItem
          to="/mypage/setting"
          label="설정"
          icon="/assets/images/icons/mypage-setting.png"
          activeIcon="/assets/images/icons/mypage-setting-active.png"
        />
      </nav>
    </aside>
  );
};

// 메뉴 카테고리
const NavItem = ({ to, label, icon, activeIcon, end }) => {
  return (
    <NavLink to={to} end={end} style={navStyle}>
      {({ isActive }) => {
        return (
          <>
            <img
              src={isActive ? activeIcon : icon}
              alt=""
              style={sidebarStyles.icon}
            />
            <span>{label}</span>
          </>
        );
      }}
    </NavLink>
  );
};

// NavLink 활성화 스타일링
const navStyle = ({ isActive }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "19px",
    padding: "12px 16px",
    borderRadius: "8px",
    color: isActive ? "#3461F5" : "#6B7280",
    fontWeight: isActive ? 600 : 400,
    textDecoration: "none",
    fontSize: "18px",
    transition: "all 0.2s ease",
  };
};

const sidebarStyles = {
  sidebar: {
    width: "200px",
    minHeight: "calc(100vh - 80px)",
    backgroundColor: "#FFFFFF",
    borderRight: "1px solid #E6E8EC",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "40px",
    boxSizing: "border-box",
    flexShrink: 0,
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
    paddingLeft: "35px",
    boxSizing: "border-box",
  },
  icon: {
    width: "26px",
    height: "26px",
    objectFit: "contain",
  },
};

export default MyPageSidebar;
