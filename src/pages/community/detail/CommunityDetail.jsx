import React, { useEffect, useState } from "react";
import PostDetailHeader from "./PostDetailHeader";
import PostContentCard from "./PostContentCard";
import CommentComposer from "./CommentComposer";
import CommentThread from "./CommentThread";
import BackToListButton from "./BackToListButton";
import S from "./style";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../../api/community";

const CommunityDetail = () => {
  const { id } = useParams();
  const postId = Number(id);

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getPostDetail(postId);
        setPost(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchDetail();
  }, [postId]);

  const increaseCommentCount = () => {
    setPost((prev) => ({
      ...prev,
      commentCount: prev.commentCount + 1,
    }));
  };

  if (!post) return <div>로딩 중...</div>;

  return (
    <S.CommunityDetailContainer>
      <PostDetailHeader post={post} />
      <PostContentCard post={post} />
      <CommentThread postId={post.id} onAddComment={increaseCommentCount} />
      <BackToListButton />
    </S.CommunityDetailContainer>
  );
};

export default CommunityDetail;
