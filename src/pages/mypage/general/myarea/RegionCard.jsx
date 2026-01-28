import React from 'react';
import styled from 'styled-components';

const RegionCard = ({ name, score, lastChecked, linkText, onLinkClick }) => {
  return (
    <Card>
      <CardLeft>
        <RegionName>{name}</RegionName>
        {score !== undefined ? (
          <MetaText>
            안전점수 <ScoreText>{score}점</ScoreText>
          </MetaText>
        ) : (
          <MetaText>
            마지막 확인 <HighlightText>{lastChecked}</HighlightText>
          </MetaText>
        )}
      </CardLeft>
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
