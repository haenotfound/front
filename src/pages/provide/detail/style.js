import styled, { keyframes } from "styled-components";

const S = {};

// ProvideDetail

S.ProvideDetailContainer = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 30px;
`;

S.GoToList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-bottom: 100px;
`;

// PostDetailHeader

S.PostHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 140px 0 16px;
`;

S.PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

S.Category = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.PALLETE.primary};
`;

S.Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extraBold};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
`;

S.Date = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #b5b5b5;
`;

S.CountItemWrap = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-top: 4px;
`;

S.CountItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

S.IconButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  transition: transform 120ms ease;

  &:active {
    transform: scale(0.9);
  }
`;

const pop = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.25); }
  100% { transform: scale(1); }
`;

S.Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: block;

  &.pop {
    animation: ${pop} 220ms ease;
  }
`;

S.Count = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #b5b5b5;
`;

// PostContentCard

S.PostContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 18px 0;
`;

S.TopLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 18px;
`;

S.BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-top: 18px;
`;

S.PostContent = styled.div`
  min-height: 520px;
  p {
    margin: 0 0 12px;
    line-height: 1.6;
  }
`;

export default S;
