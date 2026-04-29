import React from "react";
import S from "./style";
import ScoreByCategory from "./ScoreByCategory";
import Icon from "../../components/icon/Icon";

const SafetyScoreList = ({ scoreData }) => {
  const cctvScore = scoreData?.cctvScore ?? 0;
  const streetlightScore = scoreData?.streetlightScore ?? 0;
  const policeScore = scoreData?.policeScore ?? 0;
  const crimeProneScore = scoreData?.crimeProneScore ?? 0;

  const cctvCount = scoreData?.cctvCount ?? 0;
  const streetlightCount = scoreData?.streetlightCount ?? 0;
  const policeCount = scoreData?.policeCount ?? 0;
  const crimeProneCount = scoreData?.crimeProneCount ?? 0;

  return (
    <>
      <S.SafetyScoreTitleCenter>항목별 점수</S.SafetyScoreTitleCenter>
      <S.ScoreByCategoryContainer>
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-cctv.png`}
          alt="cctv"
          title="CCTV"
          score={cctvScore}
        />
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-lamp.png`}
          alt="가로등"
          title="가로등"
          score={streetlightScore}
        />
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-police.png`}
          alt="경찰시설"
          title="경찰시설"
          score={policeScore}
        />
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-crime.png`}
          alt="범죄주의구간"
          title="범죄주의구간"
          score={crimeProneScore}
        />
      </S.ScoreByCategoryContainer>
      <S.SafetyScoreListContent>
        <S.SafetyScoreListContentTitle>
          이 점수는 왜 이렇게 나왔나요?
        </S.SafetyScoreListContentTitle>
        <S.SafetyScoreListContentList>
          <li>
            <Icon name="pin" /> CCTV {cctvCount}개
          </li>
          <li>
            <Icon name="pin" /> 가로등 {streetlightCount}개
          </li>
          <li>
            <Icon name="pin" /> 경찰시설 {policeCount}개
          </li>
          <li>
            <Icon name="pin" /> 범죄주의구간 {crimeProneCount}곳
          </li>
        </S.SafetyScoreListContentList>
      </S.SafetyScoreListContent>
    </>
  );
};

export default SafetyScoreList;
