import React from "react";
import { IconImage, iconMap } from "./style";

// 사용 예시:
// <Icon name="" src="" size="" color="" rotate="" onClick="" alt="" />
//
// Props:
// - name: iconMap에 정의된 아이콘 이름 (예: "bookmark", "like", "plus-gray" 등)
// - src: 직접 이미지 경로 지정 (name보다 우선)
// - size: "xsmall" | "small" | "medium" | "large" | 숫자(px) (기본: "medium")
// - color: "white" | "black" | "primary" | undefined
// - rotate: 회전 각도 (숫자, deg)
// - onClick: 클릭 핸들러 함수
// - alt: 이미지 alt 텍스트 (기본: name 또는 "icon")
const Icon = ({ name, src, size = "medium", color, rotate, onClick, alt, ...props }) => {
  const getPath = () => {
    if (src) {
      return src.startsWith("/") || src.startsWith("http")
        ? src
        : `${process.env.PUBLIC_URL}/assets/images/icons/${src}`;
    }
    if (name) {
      const fileName = iconMap[name] || name;
      return `${process.env.PUBLIC_URL}/assets/images/icons/${fileName}`;
    }
    return null;
  };

  const path = getPath();
  if (!path) return null;

  return (
    <IconImage
      src={path}
      alt={alt || name || "icon"}
      size={size}
      color={color}
      rotate={rotate}
      onClick={onClick}
      {...props}
    />
  );
};

export default Icon;
