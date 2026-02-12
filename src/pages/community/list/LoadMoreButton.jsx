import React from "react";
import S from "./style";
import IconButton from "../../../components/button/IconButton";

const LoadMoreButton = ({ onClick }) => {
  return (
        <S.Button>
          <IconButton
            iconName="plus-gray"
            iconSize="xsmall"
            iconColor="gray03"
            border="gray03"
            borderWidth="medium"
            color="gray05"
            size="medium"
            shape="pill"
            padding="medium"
            backgroundColor="white"
            onClick={onClick}
            style={{ width: "108px", height: "38px" }}
          >
            더보기
          </IconButton>
        </S.Button>
  );
};

export default LoadMoreButton;