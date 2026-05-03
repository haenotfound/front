import React from "react";
import ReplyItem from "./ReplyItem";
import S from "./style";

const ReplyThread = ({ replies = [] }) => {
  if (!replies.length) return null;

  return (
    <S.ReplyThreadContainer>
      {replies.map((reply) => (
        <div id={`reply-${reply.id}`} key={reply.id}>
          <ReplyItem reply={reply} />
        </div>
      ))}
    </S.ReplyThreadContainer>
  );
};

export default ReplyThread;
