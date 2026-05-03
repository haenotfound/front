import React, { useState } from "react";
import S from "./style";
import BaseButton from "../../../components/button/BaseButton";

const ReplyComposer = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const trimmed = value.trim();
    if (!trimmed) {
      alert("내용을 입력하세요.");
      return;
    }

    try {
      setIsSubmitting(true);

      await onSubmit?.(trimmed);

      setValue("");
    } catch (e) {
      console.error(e);
      alert("답글 작성 실패");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.ReplyComposerContainer>
      <S.ProfileBox>
        <S.ProfileImg
          src="/assets/images/icons/user-profile.png"
          alt="답글 작성자 프로필"
        />
      </S.ProfileBox>

      <S.ReplyInput>
        <S.ReplyText
          placeholder="답글을 작성해 주세요"
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
          disabled={isSubmitting}
          style={{ width: "54px", height: "32px" }}
        >
          입력
        </BaseButton>
      </S.ReplyInput>
    </S.ReplyComposerContainer>
  );
};

export default ReplyComposer;