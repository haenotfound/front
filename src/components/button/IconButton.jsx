import React from "react";
import BaseButton from "./BaseButton";
import Icon from "../icon/Icon.jsx";
import { ButtonContent } from "./style";

// 사용 예시:
// <IconButton icon="" iconName="" iconPosition="" iconSize="" iconColor="" size="" shape="" variant="" border="" font="" color="" backgroundColor="">
//   버튼 텍스트 (선택)
// </IconButton>
//
// Props:
// - icon: 아이콘 이미지 src (png 등)
// - iconName: Icon 컴포넌트 name
// - iconPosition: "left" | "right" (기본: "left")
// - iconSize: 아이콘 크기
// - iconColor: 아이콘 색상
// - backgroundColor: BaseButton과 동일
// - 나머지: BaseButton props (size, shape, variant, border, font, color 등) 그대로 전달
const IconButton = ({
  icon,
  iconName,
  iconPosition = "left",
  iconSize,
  iconColor,
  backgroundColor,
  children,
  ...props
}) => {
  if (!children && (icon || iconName)) {
    return (
      <BaseButton {...props} backgroundColor={backgroundColor}>
        <Icon name={iconName} src={icon} size={iconSize} color={iconColor} />
      </BaseButton>
    );
  }

  if (children && (icon || iconName)) {
    return (
      <BaseButton {...props} backgroundColor={backgroundColor}>
        <ButtonContent $iconPosition={iconPosition}>
          <Icon name={iconName} src={icon} size={iconSize} color={iconColor} />
          <span>{children}</span>
        </ButtonContent>
      </BaseButton>
    );
  }

  return (
    <BaseButton {...props} backgroundColor={backgroundColor}>
      {children}
    </BaseButton>
  );
};

export default IconButton;
