import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.Footer = styled.footer`
  width: 100%;
  background-color: ${({theme}) => theme.PALLETE.background.white};
`;

S.FooterInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  height: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

S.Logo = styled.div`
  margin-bottom: 40px;
`;


S.Img = styled.img`
  width: ${({width}) => width || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || '100%'};
`;

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight:inherit;
`;


export default S;