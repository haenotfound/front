import React, { useEffect, useState } from "react";
import ReplyComposer from "./ReplyComposer";
import ReplyThread from "./ReplyThread";
import S from "./style";

const CommentItem = ({ comment }) => {
  const {
    id,
    author,
    authorProfile,
    content,
    createdAt,
    likeCount = 0,
    replyCount = 0,
    replies = [],
  } = comment;

  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);

  useEffect(() => {
    setIsLiked(false);
  }, [id]);

  const handleToggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLocalLikeCount((c) => Math.max(0, c - 1));
    } else {
      setIsLiked(true);
      setLocalLikeCount((c) => c + 1);
    }
  };

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <S.CommentWrap>
        <S.ProfileBox>
          <S.ProfileImg src={authorProfile} alt={`${author} 프로필`} />
        </S.ProfileBox>

        <S.CommentBubble>
          <S.CommentTop>
            <S.WritedCommentAuthor>{author}</S.WritedCommentAuthor>

            <S.CommentRight>
              <S.CommentTime>{createdAt}</S.CommentTime>

              <S.CommentIconGroup>
                <S.CommentIconButton type="button" onClick={handleToggleLike}>
                  <S.CommentLikeIcon
                    className={isLiked ? "pop" : ""}
                    src={likeIcon}
                    alt="좋아요"
                  />
                  <S.CommentCountText>{localLikeCount}</S.CommentCountText>
                </S.CommentIconButton>
                <S.CommentCountItem>
                  <S.CommentCountIcon
                    src="/assets/images/icons/comment.png"
                    alt="답글"
                  />
                  <S.CommentCountText>{replyCount}</S.CommentCountText>
                </S.CommentCountItem>
                <S.CommentIconButton type="button" onClick={handleToggleOpen}>
                  <S.ReplyOpenIcon
                    src="/assets/images/icons/down-arrow.png"
                    alt="펼치기"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </S.CommentIconButton>
              </S.CommentIconGroup>
            </S.CommentRight>
          </S.CommentTop>

          <S.WritedCommentText>{content}</S.WritedCommentText>
        </S.CommentBubble>
      </S.CommentWrap>

      {isOpen && (
        <S.ReplySection>
          <ReplyComposer />
          <ReplyThread replies={replies} />
        </S.ReplySection>
      )}
    </div>
  );
};

export default CommentItem;
