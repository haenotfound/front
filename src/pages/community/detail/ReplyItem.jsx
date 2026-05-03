import React, { useState, useEffect } from "react";
import S from "./style";
import ReportModal from "./ReportModal";
import { formatRelativeTime } from "../../../utils/formatDate";
import { toggleLikeReply } from "../../../api/community";

const ReplyItem = ({ reply }) => {
  const [isLiked, setIsLiked] = useState(reply.isLiked || false);
  const [likeCount, setLikeCount] = useState(reply.likeCount || 0);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleOpenReport = () => setIsReportOpen(true);
  const handleCloseReport = () => setIsReportOpen(false);

  useEffect(() => {
    setLikeCount(reply.likeCount || 0);
    setIsLiked(reply.isLiked || false);
  }, [reply]);

const handleLike = async () => {
  try {
    const res = await toggleLikeReply(reply.id);

    setIsLiked(res.isLiked);
    setLikeCount(res.likeCount);
  } catch (e) {
    console.error(e);
    alert("좋아요 실패");
  }
};

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";

  return (
    <>
      <S.ReplyItem>
        <S.ProfileBox>
          <S.ProfileImg
            src={
              reply.author.profileImage ||
              "/assets/images/icons/user-profile.png"
            }
            alt={`${reply.author.nickname} 프로필`}
          />
        </S.ProfileBox>

        <S.CommentBubble>
          <S.CommentTop>
            <S.WritedCommentAuthor>
              {reply.author.nickname}
            </S.WritedCommentAuthor>

            <S.CommentRight>
              <S.CommentTime>
                <span>{formatRelativeTime(reply.createdAt)}</span>
                <S.CommentSirenIcon
                  src="/assets/images/icons/siren.png"
                  alt="신고"
                  onClick={handleOpenReport}
                  style={{ cursor: "pointer" }}
                />
              </S.CommentTime>

              <S.CommentIconGroup>
                <S.CommentIconButton type="button" onClick={handleLike}>
                  <S.CommentLikeIcon src={likeIcon} />
                  <S.CommentCountText>{likeCount}</S.CommentCountText>
                </S.CommentIconButton>
              </S.CommentIconGroup>
            </S.CommentRight>
          </S.CommentTop>

          <S.WritedCommentText>{reply.content}</S.WritedCommentText>
        </S.CommentBubble>
      </S.ReplyItem>

      {isReportOpen && (
        <ReportModal
          onClose={handleCloseReport}
          targetType="reply"
          targetId={reply.id}
          author={reply.author.nickname}
        />
      )}
    </>
  );
};

export default ReplyItem;