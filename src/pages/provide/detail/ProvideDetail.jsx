import React from "react";
import { Link, useParams } from "react-router-dom";
import PostDetailHeader from "./PostDetailHeader";
import PostContentCard from "./PostContentCard";
import BaseButton from "../../../components/button/BaseButton";
import S from "./style";
import { mockPosts } from "../../../mock/mockPosts";

const ProvideDetail = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const data = mockPosts.find((post) => post.id === numericId);

  if (!data) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <S.ProvideDetailContainer>
      <PostDetailHeader
        postId={data.id}
        category={data.category}
        title={data.title}
        createdAt={data.createdAt}
        readCount={data.readCount}
        likeCount={data.likeCount}
        bookmarkCount={data.bookmarkCount}
      />

      <PostContentCard contentHtml={data.contentHtml} />

      <Link to="/provide">
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
    </S.ProvideDetailContainer>
  );
};

export default ProvideDetail;