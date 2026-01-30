import React from "react";

// 마이페이지 헤더
const MyPageHeader = () => {
  return (
    <header style={headerStyles.bar}>
      {/* 로고 영역 */}
      <div style={headerStyles.logoArea}>
        <button type="button" style={headerStyles.btn}>
          <img
            src="/assets/images/logo.png"
            alt="로고"
            style={headerStyles.img}
          />
        </button>
      </div>

      {/* 프로필 영역 */}
      <div style={headerStyles.profileArea}>
        <div style={headerStyles.profileCircle}>
          <img
            src="/assets/images/icons/user-profile.png"
            alt="P"
            style={headerStyles.pIcon}
          />
        </div>
        <span style={headerStyles.nickname}>프로자취러</span>
      </div>
    </header>
  );
};

const headerStyles = {
  bar: {
    width: "100%",
    height: "99px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  logoArea: {
    width: "200px",
    minWidth: "200px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "40px",
    boxSizing: "border-box",
    borderRight: "1px solid #E6E8EC",
  },
  profileArea: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "198px",
    alignItems: "center",
    gap: "12px",
    borderBottom: "1px solid #E6E8EC",
    boxSizing: "border-box",
  },
  btn: {
    border: "none",
    background: "none",
    padding: 0,
    cursor: "pointer",
  },
  img: { height: "23px", width: "auto" },
  profileCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pIcon: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
  },
  nickname: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#0B1215",
  },
};

export default MyPageHeader;
