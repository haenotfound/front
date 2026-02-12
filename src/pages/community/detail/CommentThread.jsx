import React from "react";
import S from "./style";
import CommentItem from "./CommentItem";

const CommentThread = ({ comments = [] }) => {
  return (
    <S.CommentThreadContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </S.CommentThreadContainer>
  );
};

export default CommentThread;
