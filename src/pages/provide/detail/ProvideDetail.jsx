import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostDetailHeader from "./PostDetailHeader";
import PostContentCard from "./PostContentCard";
import BaseButton from "../../../components/button/BaseButton";
import S from "./style";
import { formatDate } from "../../../utils/formatDate";

const ProvideDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:10000/provide/${id}`);

        if (!res.ok) {
          throw new Error("API 요청 실패");
        }

        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <S.ProvideDetailContainer>
      <PostDetailHeader
        postId={post.id}
        category={post.category}
        title={post.title}
        createdAt={formatDate(post.createdAt)}
        readCount={post.readCount}
        likeCount={post.likeCount}
        bookmarkCount={post.bookmarkCount}
        isLiked={post.isLiked}
        isBookmarked={post.isBookmarked}
      />

      <PostContentCard contentHtml={post.contentHtml} />

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