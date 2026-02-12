import React from "react";
import Card from "./Card";
import S from "./style";

const CardGrid = ({
  posts = [],
  columns = 4,
  gap = 30,
  marginTop = 0,
  paddingX = 0,
  }) => {
  return (
    <S.CardGrid
      $columns={columns}
      $gap={gap}
      $marginTop={marginTop}
      $paddingX={paddingX}
    >
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </S.CardGrid>
  );
};

export default CardGrid;
