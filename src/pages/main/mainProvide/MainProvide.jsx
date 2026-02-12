import React from "react";
import S from "./style";
import Title from "../../../components/title/Title";
import IconButton from "../../../components/button/IconButton";
import { Link } from "react-router-dom";
import { mockPosts } from "../../../mock/mockPosts";
import CardGrid from "../../../components/provideBox/CardGrid";

const MainProvide = () => {
  return (
    <S.ProvideContainer>
      <S.ProvideInner>
        <S.TitleContainer>
          <Title
            highlightText="강남구 역삼동"
            text="자취 정보"
            iconName="search"
            iconSize="xlarge"
            subtitle="내가 찾던 자취 정보가 한 곳에!"
          />
          <Link to="/provide">
            <IconButton
              border="primary"
              borderWidth="medium"
              iconName="plus-white"
              iconSize="xsmall"
              color="white"
              padding="smallMedium"
              shape="pill"
              font="bttxt"
              variant="primary"
              backgroundColor="primary"
            >
              전체보기
            </IconButton>
          </Link>
        </S.TitleContainer>

        <S.ProvideGrid>
          <CardGrid
            posts={mockPosts.slice(0, 4)}
            columns={4}
            gap={30}
            marginTop={0}
            paddingX={0}
          />
        </S.ProvideGrid>
      </S.ProvideInner>
    </S.ProvideContainer>
  );
};

export default MainProvide;
