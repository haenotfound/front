import styled from "styled-components";
import { Link } from "react-router-dom";
import BaseButton from "../button/BaseButton";

const S = {};

S.CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  gap: ${({ $gap }) => `${$gap}px`};
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  width: 100%;
  padding: 0 ${({ $paddingX }) => `${$paddingX}px`};
  box-sizing: border-box;
`;

S.CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  min-width: 0;
`;

S.CardWrap = styled.article`
  width: 100%;
  min-width: 0;
  background: #fff;
  border-radius: 18px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.06);
  transition:
    transform 140ms ease,
    box-shadow 140ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
  }
`;

S.Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #fff;
  overflow: hidden;
`;

S.ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

S.Category = styled(BaseButton)`
  position: absolute;
  top: 12px;
  left: 12px;
`;

S.CardBody = styled.div`
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

S.CardTitle = styled.h3`
  margin: 8px 5px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.48;
  color: #0B1215;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: calc(16px * 1.48);
`;

S.CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

S.DateText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: #8d8d8d;
  padding: 0 5px;
`;

export default S;