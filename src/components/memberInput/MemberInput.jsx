import React from "react";
import S from "./style";

const MemberInput = ({ placeholderText, type, ...rest }) => {
  return (
    <S.MemberInputField
      type={type}
      placeholder={placeholderText}
      {...rest}
    ></S.MemberInputField>
  );
};

export default MemberInput;
