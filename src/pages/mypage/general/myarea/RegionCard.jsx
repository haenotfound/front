import React from 'react';
import styled from 'styled-components';

// 마이페이지_지역 카드
// (최근 본 지역, 관심 지역 공통 사용)
const RegionCard = ({ name, score, lastChecked, linkText, onLinkClick }) => {
  return (
    <Card>
      <CardLeft>
        {/* 지역명 */}
        <RegionName>{name}</RegionName>

        <MetaGroup>
          {score !== undefined ? (
            <MetaText>
              안전점수 <ScoreText>{score}점</ScoreText>
            </MetaText>
          ) : null}

          {lastChecked ? (
            <MetaText>
              마지막 확인 <HighlightText>{lastChecked}</HighlightText>
            </MetaText>
          ) : null}
        </MetaGroup>
      </CardLeft>

      {/* 우측 링크 버튼 */}
      <LinkText role="button" tabIndex={0} onClick={onLinkClick} onKeyDown={() => {}}>
        <span>{linkText}</span>
        <ArrowIcon aria-hidden>&gt;</ArrowIcon>
      </LinkText>
    </Card>
  );
};

const Card = styled.article`
  width: 701px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  background-color: #f2f4f7;
  border-radius: 16px;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RegionName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #0b1215;
`;

const MetaText = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const ScoreText = styled.span`
  color: #ff3b30;
  font-weight: 700;
`;

const HighlightText = styled.span`
  color: #ff3b30;
  font-weight: 700;
`;

const LinkText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #9ca3af;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
`;

const ArrowIcon = styled.span`
  font-size: 14px;
`;

export default RegionCard;
