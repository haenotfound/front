import styled from "styled-components";

const S = {};

S.SafetyScoreContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.PALLETE.background.white};
  `;

S.SafetyScoreInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 180px 0 80px;
`;

S.SafetyScoreTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  color: ${({ theme }) => theme.PALLETE.black};
  display: flex;
  align-items: center;
  gap: 20px;
`;

S.SafetyScoreMap = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.PALLETE.gray.greyscale01};
  border-radius: 20px;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
`;

S.MapCanvas = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

S.MapEmpty = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  pointer-events: none;
`;

S.MapFilter = styled.div`
  position: absolute;
  top: 28px;
  left: 28px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 24px;
`;

S.MapFilterItem = styled.div`
  border-radius: 8px;
  display: flex;
  background-color: ${({ theme }) => theme.PALLETE.white};
  cursor: pointer;
  overflow: hidden;

  
  & >:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale02};
  }
  `;

S.MapFilterItemIcon = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 8px;
  padding: 10px 12px;

  &:active {
    background-color: ${({ theme }) => theme.PALLETE.primary};
    color: ${({ theme }) => theme.PALLETE.white};
  }
`;

S.SafetyScoreInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 60px;
`;

S.SafetyScoreInfoBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.PALLETE.primaryLight};
  border-radius: 20px;
  padding: 40px;
`;

S.SafetyScoreInfoBoxHeader = styled.div`
font-size: ${({ theme }) => theme.FONT_SIZE.h2};
font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
line-height: ${({ theme }) => theme.FONT_LINE.h2};
color: ${({ theme }) => theme.PALLETE.black};
margin-bottom:7px;
`;

S.SafetyScoreInfoBoxTitle = styled.h3`
  margin-bottom: 20px;
`;

S.SafetyScoreInfoBoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.SafetyScoreBox = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.PALLETE.border.light};
  border-radius: 20px;
  padding: 40px;
  background: ${({ theme }) => theme.PALLETE.white};
  display: flex;
  align-items: center;
  gap: 30px;
`;

S.Scorebox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.PALLETE.primaryAlpha80};
  border-radius: 20px;
  padding: 40px 50px;
  color: ${({ theme }) => theme.PALLETE.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  max-width: 240px;
  gap: 10px;
`;

S.ScoreboxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

S.ScoreboxContentTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
`;

S.ScoreboxContentSubtitle = styled.i`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
`;

S.SafetyScoreTitleCenter = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  color: ${({ theme }) => theme.PALLETE.black};
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
`;

S.ScoreByCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

S.CategotyImage = styled.div`
  width: 140px;
  height: 140px;
  line-height: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

S.CategotyContent = styled.div`
width: 100%;
  flex: 1;
  padding: 30px;
  padding-right: 60px;
`;
S.CategotyContentTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
`;

S.CategotyContentScore = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
`;

S.ScoreGaugeWrapper = styled.div`
  width: 100%;
  min-width: 240px;
  height: 10px;
  background-color: ${({ theme }) => theme.PALLETE.secondary};
  border-radius: 10px;
  margin-top: 20px;
`;

S.ScoreGaugeFill = styled.div`
  width: ${({ $percent }) => $percent ?? 0}%;
  height: 100%;
  background-color: ${({ $percent }) =>
    $percent >= 70 ? "#27C840" : $percent >= 40 ? "#FEBC2F" : "#FF5F57"};
  border-radius: 10px;
  transition: width 0.6s ease;
`;

S.SafetyScoreListContent = styled.div`
  background-color: ${({ theme }) => theme.PALLETE.secondary};
  padding: 40px;
  max-width: 740px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 60px;
`;

S.SafetyScoreListContentTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
  text-align: center;
  margin-bottom: 20px;
`;

S.SafetyScoreListContentList = styled.ul`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.semiBold};
    line-height: ${({ theme }) => theme.FONT_LINE.h4};
    color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
  }
`;



export default S;