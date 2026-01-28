import styled from "styled-components";

export const iconMap = {
  like: "like.png",
  comment: "comment.png",
  hits: "hits.png",
  "bookmark-view": "bookmark-view.png",
  "bookmark-active": "bookmark-active.png",
  "arrow-right": "arrow-right.png",
  search: "search.png",
  house: "house.png",
  "plus-gray": "plus-gray.png",
};

const sizeMap = {
  xsmall: "12px",
  small: "16px",
  medium: "20px",
  large: "24px",
};

export const IconImage = styled.img`
  width: ${({ size }) => sizeMap[size] || size || "20px"};
  height: ${({ size }) => sizeMap[size] || size || "20px"};
  object-fit: contain;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : "none")};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;
