import React, { useEffect, useState } from "react";
import ReplyComposer from "./ReplyComposer";
import ReplyThread from "./ReplyThread";
import S from "./style";
import ReportModal from "./ReportModal";
import { formatRelativeTime } from "../../../utils/formatDate";
import { createReply, toggleLikeComment } from "../../../api/community";

const CommentItem = ({ comment }) => {
  const {
    id,
    author,
    content,
    createdAt,
    likeCount = 0,
    replies = [],
  } = comment;

  const [isOpen, setIsOpen] = useState(false);
  const [isReplyWriting, setIsReplyWriting] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const [localReplies, setLocalReplies] = useState(replies);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [newReplyId, setNewReplyId] = useState(null);

  const handleOpenReport = () => setIsReportOpen(true);
  const handleCloseReport = () => setIsReportOpen(false);

  const hasReply = (localReplies?.length ?? 0) > 0;

  useEffect(() => {
    setIsLiked(false);
  }, [id]);

  useEffect(() => {
    if (!hasReply) setIsOpen(false);
  }, [hasReply]);

  useEffect(() => {
    if (!newReplyId) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(`reply-${newReplyId}`);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

        setNewReplyId(null);
      }
    });
  }, [localReplies, newReplyId]);

  const handleToggleLike = async () => {
    try {
      await toggleLikeComment(id);

      if (isLiked) {
        setIsLiked(false);
        setLocalLikeCount((c) => Math.max(0, c - 1));
      } else {
        setIsLiked(true);
        setLocalLikeCount((c) => c + 1);
      }
    } catch (e) {
      console.error(e);
      alert("좋아요 실패");
    }
  };

  const handleReplyClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsReplyWriting(true);
    } else {
      setIsReplyWriting((prev) => !prev);
    }
  };

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";

  return (
    <div>
      <S.CommentWrap>
        <S.ProfileBox>
          <S.ProfileImg
            src={author.profileImage || "/assets/images/icons/user-profile.png"}
            alt={`${author.nickname} 프로필`}
          />
        </S.ProfileBox>

        <S.CommentBubble>
          <S.CommentTop>
            <S.WritedCommentAuthor>{author.nickname}</S.WritedCommentAuthor>

            <S.CommentRight>
              <S.CommentTime>
                <span>{formatRelativeTime(createdAt)}</span>
                <S.CommentSirenIcon
                  src="/assets/images/icons/siren.png"
                  alt="신고"
                  onClick={handleOpenReport}
                  style={{ cursor: "pointer" }}
                />
              </S.CommentTime>

              <S.CommentIconGroup>
                <S.CommentIconButton type="button" onClick={handleToggleLike}>
                  <S.CommentLikeIcon
                    className={isLiked ? "pop" : ""}
                    src={likeIcon}
                  />
                  <S.CommentCountText>{localLikeCount}</S.CommentCountText>
                </S.CommentIconButton>

                <S.CommentIconButton type="button" onClick={handleReplyClick}>
                  <S.CommentCountIcon
                    src="/assets/images/icons/comment.png"
                    alt="답글"
                  />
                  <S.CommentCountText>{localReplies.length}</S.CommentCountText>
                </S.CommentIconButton>

                {hasReply && (
                  <S.CommentIconButton type="button" onClick={handleToggleOpen}>
                    <S.ReplyOpenIcon
                      src="/assets/images/icons/down-arrow.png"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </S.CommentIconButton>
                )}
              </S.CommentIconGroup>
            </S.CommentRight>
          </S.CommentTop>

          <S.WritedCommentText>{content}</S.WritedCommentText>
        </S.CommentBubble>
      </S.CommentWrap>

      {isOpen && (
        <S.ReplySection>
          {isReplyWriting && (
            <ReplyComposer
              onSubmit={async (content) => {
                try {
                  const newReply = await createReply(id, content);
                  setNewReplyId(newReply.id);
                  setLocalReplies((prev) => [...prev, newReply]);
                  setIsReplyWriting(false);
                } catch (e) {
                  console.error(e);
                  alert("답글 작성 실패");
                }
              }}
            />
          )}

          <ReplyThread replies={localReplies} />
        </S.ReplySection>
      )}

      {isReportOpen && (
        <ReportModal
          onClose={handleCloseReport}
          targetType="comment"
          targetId={id}
          author={author.nickname}
        />
      )}
    </div>
  );
};

export default CommentItem;
