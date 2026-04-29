import React from "react";
import S from "./style";
import BaseButton from "../button/BaseButton.jsx";
import { useAuth } from "../../context/AuthContext";
import { useLocationContext } from "../../context/LocationContext";
const Header = () => {
  const { isLogin, logout } = useAuth();
  const { openLocationModal } = useLocationContext();

  return (
    <S.HeaderContainer className="header">
      <S.HeaderInner className="header-inner">
        <S.HeaderLeft>
          <S.Logo>
            <S.Link to="/">
              <S.Img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt="자취연구소"
                maxWidth={156}
              />
            </S.Link>
          </S.Logo>

          <S.HeaderMenus>
            <S.Link to="/provide">정보제공</S.Link>
            <S.Link to="/community">커뮤니티</S.Link>
            <S.Link to="/safety-score">안전점수</S.Link>
          </S.HeaderMenus>
        </S.HeaderLeft>

        <S.HeaderMenus>
          <S.Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              openLocationModal();
            }}
          >
            지역선택
          </S.Link>
          {isLogin ? (
            <S.Link to="#" onClick={logout}>
              로그아웃
            </S.Link>
          ) : (
            <S.Link to="/login">로그인</S.Link>
          )}
          <BaseButton
            padding="small"
            shape="pill"
            color="white"
            backgroundColor="primary"
            size="h5"
            fontWeight="extraBold"
            lineHeight="h1"
          >
            {isLogin ? (
              <S.Link to="/mypage">마이페이지</S.Link>
            ) : (
              <S.Link to="/join">회원가입</S.Link>
            )}
          </BaseButton>
        </S.HeaderMenus>
      </S.HeaderInner>
    </S.HeaderContainer>
  );
};

export default Header;
