import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BaseButton from '../button/BaseButton.jsx';

const Header = () => {
  return (
    <S.HeaderContainer className='header'>
      <S.HeaderInner className='header-inner'>
        <S.HeaderLeft>  
          <S.Logo>
            <S.Link to="/">
              <S.Img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="자취연구소" maxWidth={156}/>
            </S.Link>
          </S.Logo>
          <S.HeaderMenus>
            <S.Link to="/provide">정보제공</S.Link>
            <S.Link to="/community">커뮤니티</S.Link>
            <S.Link to="/safety-score">안전점수</S.Link>
          </S.HeaderMenus>
        </S.HeaderLeft>
        <S.HeaderMenus>
            <S.Link to="/select-location">지역선택</S.Link>
            <S.Link to="/login">로그인</S.Link>
            <BaseButton 
              padding="small" 
              shape="pill" 
              color='white' 
              backgroundColor="primary"
              size="h5"
              fontWeight="extraBold"
              lineHeight="h1"
            >
              <S.Link to="/join">회원가입</S.Link>
            </BaseButton>
        </S.HeaderMenus>
      </S.HeaderInner>
    </S.HeaderContainer>
  );
};

export default Header;