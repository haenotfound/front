import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import BaseButton from "../../../components/button/BaseButton";

const BackToListButton = () => {
  return (
    <Link to="/community">
      <S.GoToList>
        <BaseButton
          type="button"
          size="bttxt"
          shape="rounded"
          variant="solid"
          backgroundColor="primary"
          color="white"
          padding="medium"
          style={{ width: "100px", height: "38px" }}
        >
          목록보기
        </BaseButton>
      </S.GoToList>
    </Link>
  );
};

export default BackToListButton;
