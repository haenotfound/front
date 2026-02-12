import styled from "styled-components";

const S = {};

S.ProvideContainer = styled.section`
  width: 100%;
  background: ${({theme}) => theme.PALLETE.background.white};
  padding: 100px 0;
`;

S.ProvideInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 20px;
`;

S.TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

S.ProvideGrid = styled.div`
  width: 100%
`;

S.ProvideWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export default S;