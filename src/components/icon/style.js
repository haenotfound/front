import styled, { css } from "styled-components";

// 아이콘 맵
export const iconMap = {
  bookmark: "bookmark.png",
  "bookmark-active": "bookmark-active.png",
  "bookmark-view": "bookmark-view.png",
  camera: "camera.png",
  comment: "comment.png",
  "down-arrow": "down-arrow.png",
  hits: "hits.png",
  like: "like.png",
  "like-active": "like-active.png",
  "mypage-myactivity": "mypage-myactivity.png",
  "mypage-myactivity-active": "mypage-myactivity-active.png",
  "mypage-myarea": "mypage-myarea.png",
  "mypage-myarea-active": "mypage-myarea-active.png",
  "mypage-notify": "mypage-notify.png",
  "mypage-notify-active": "mypage-notify-active.png",
  "mypage-profile": "mypage-profile.png",
  "mypage-profile-active": "mypage-profile-avtive.png",
  "mypage-setting": "mypage-setting.png",
  "mypage-setting-active": "mypage-setting-active.png",
  "plus-gray": "plus-gray.png",
  "plus-white": "plus-white.png",
  "user-profile": "user-profile.png",
};

// Icon 스타일 컴포넌트
export const IconImage = styled.img`
  display: block;
  width: ${({ size }) => {
    if (typeof size === "number") return `${size}px`;
    const sizes = { xsmall: "12px", small: "16px", medium: "20px", large: "24px" };
    return sizes[size] || sizes.medium;
  }};
  height: ${({ size }) => {
    if (typeof size === "number") return `${size}px`;
    const sizes = { xsmall: "12px", small: "16px", medium: "20px", large: "24px" };
    return sizes[size] || sizes.medium;
  }};
  object-fit: contain;
  flex-shrink: 0;
  ${({ color, theme }) =>
    color === "white"
      ? "filter: brightness(0) invert(1);"
      : color === "black"
      ? "filter: brightness(0);"
      : color === "primary"
      ? css`
          filter: brightness(0) saturate(100%) ${theme.PALLETE.primary};
        `
      : ""}
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
  ${({ onClick }) => onClick && "cursor: pointer;"}
`;
