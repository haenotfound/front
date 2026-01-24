import React from 'react';
import S from './style';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInner>
        <S.Logo>
          <S.Link to="/">
            <S.Img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="자취연구소" maxWidth={156}/>
          </S.Link>
        </S.Logo>
      </S.FooterInner>
    </S.Footer>
  );
};

export default Footer;