import React from 'react';
import S from './style';
import Title from '../../../components/title/Title';
import SafetyScoreItem from './SafetyScoreItem';
import BaseButton from '../../../components/button/BaseButton';
import { Link } from 'react-router-dom';

const MainSafetyScore = () => {
  return (
    <S.SafetyScoreContainer>
      <S.SafetyScoreInner>
        <S.TitleContainer>
          <Title 
            parts={[
              { text: "우리 동네, 얼마나" },
              { text: "안전", highlight: true },
              { text: "할까?" }
            ]}
            iconName="house" 
            iconSize="xlarge"
            subtitle="다음의 정보를 바탕으로 동네 안전 점수를 분석합니다." 
          />
        </S.TitleContainer>
        <S.SafetyScoreGrid>
          <SafetyScoreItem 
            image="safety-score-item2.png" 
            title="CCTV 정보"
            description="주변 CCTV를 탐색하고 정보를 분석합니다."
          />
          <SafetyScoreItem image="safety-score-item1.png" 
            title="가로등 정보"
            description="주변 가로등을 탐색하고 정보를 분석합니다."
          />
          <SafetyScoreItem image="safety-score-item2.png" 
            title="범죄주의구간 정보"
            description="범죄주의구간을 탐색하고 정보를 분석합니다."
          />
          <SafetyScoreItem image="safety-score-item2.png" 
            title="보안시설 정보"
            description="주변 보안시설을 탐색하고 정보를 분석합니다."
          />
        </S.SafetyScoreGrid>
          <S.SafetyScoreButtonContainer>
            <Link to="/safety-score">
              <BaseButton 
                shape="pill" 
                fontSize="h3" 
                padding="mediumLarge"
                color="white"
                fontWeight="bold"
                lineHeight="h3"
              >
                안전점수 분석하기
              </BaseButton>
            </Link>
          </S.SafetyScoreButtonContainer>
      </S.SafetyScoreInner>
    </S.SafetyScoreContainer>
  );
};

export default MainSafetyScore;