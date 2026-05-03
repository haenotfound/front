import React, { useState } from "react";
import S from "./style";
import BaseButton from "../../../components/button/BaseButton";
import { createComment } from "../../../api/community";

const CommentComposer = ({ postId, onCreate }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    const trimmed = value.trim();
    if (!trimmed) {
      alert("내용을 입력하세요.");
      return;
    }

    try {
      const newComment = await createComment(postId, trimmed);

      onCreate?.(newComment);

      setValue("");
    } catch (e) {
      console.error(e);
      alert("댓글 작성 실패");
    }
  };

  return (
    <S.CommentComposerContainer>
      <S.CommentAuthor>
        <S.ProfileBox>
          <S.ProfileImg
            src="/assets/images/icons/user-profile.png"
            alt="댓글 작성자 프로필"
          />
        </S.ProfileBox>
        <S.CommentAuthorName>내 닉네임</S.CommentAuthorName>
      </S.CommentAuthor>

      <S.CommentInput>
        <S.CommentText
          placeholder="댓글을 작성해 주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={1}
        />

        <BaseButton
          type="button"
          size="bttxt"
          shape="rounded"
          variant="solid"
          backgroundColor="gray03"
          color="black"
          padding="medium"
          onClick={handleSubmit}
          style={{ width: "54px", height: "32px" }}
        >
          입력
        </BaseButton>
      </S.CommentInput>
    </S.CommentComposerContainer>
  );
};

export default CommentComposer;