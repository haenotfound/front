import React, { useEffect, useState } from "react";
import { formatRelativeTime } from "../../../utils/formatDate";
import S from "./style";
import ReportModal from "./ReportModal";
import { toggleLikePost, toggleBookmarkPost } from "../../../api/community";

const PostDetailHeader = ({ post }) => {
  const {
    id,
    title,
    createdAt,
    author,
    readCount,
    commentCount,
    likeCount,
    bookmarkCount,
  } = post;

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const [localBookmarkCount, setLocalBookmarkCount] = useState(bookmarkCount);
  const [isReportOpen, setIsReportOpen] = useState(false);

  useEffect(() => {
    setIsLiked(post.isLiked);
    setIsBookmarked(post.isBookmarked);
    setLocalLikeCount(likeCount);
    setLocalBookmarkCount(bookmarkCount);
  }, [post]);

  const handleToggleLike = async () => {
    try {
      await toggleLikePost(post.id);

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

  const handleToggleBookmark = async () => {
    try {
      await toggleBookmarkPost(post.id);

      if (isBookmarked) {
        setIsBookmarked(false);
        setLocalBookmarkCount((c) => Math.max(0, c - 1));
      } else {
        setIsBookmarked(true);
        setLocalBookmarkCount((c) => c + 1);
      }
    } catch (e) {
      console.error(e);
      alert("북마크 실패");
    }
  };

  const handleOpenReport = () => setIsReportOpen(true);
  const handleCloseReport = () => setIsReportOpen(false);

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";
  const bookmarkIcon = isBookmarked
    ? "/assets/images/icons/bookmark-active.png"
    : "/assets/images/icons/bookmark.png";

  return (
    <>
      <S.PostHeader>
        <S.PostTitle>
          <S.Title>{title}</S.Title>
          <S.DateAndAuthor>
            {formatRelativeTime(createdAt)}
            <span> | {author.nickname}</span>
          </S.DateAndAuthor>
        </S.PostTitle>

        <S.CountItemWrap>
          <S.CountItem>
            <S.Icon src="/assets/images/icons/hits.png" alt="조회" />
            <S.Count>{readCount}</S.Count>
          </S.CountItem>
          <S.CountItem>
            <S.Icon src="/assets/images/icons/comment.png" alt="댓글" />
            <S.Count>{commentCount}</S.Count>
          </S.CountItem>
          <S.IconButton $active={isLiked} onClick={handleToggleLike}>
            <S.Icon
              className={isLiked ? "pop" : ""}
              src={likeIcon}
              alt="좋아요"
            />
            <S.Count>{localLikeCount}</S.Count>
          </S.IconButton>
          <S.IconButton $active={isBookmarked} onClick={handleToggleBookmark}>
            <S.Icon
              className={isBookmarked ? "pop" : ""}
              src={bookmarkIcon}
              alt="북마크"
            />
            <S.Count>{localBookmarkCount}</S.Count>
          </S.IconButton>
          <S.CountItem>
            <S.IconButton onClick={handleOpenReport}>
              <S.Icon src="/assets/images/icons/siren.png" alt="신고" />
            </S.IconButton>
          </S.CountItem>
        </S.CountItemWrap>
      </S.PostHeader>
      {isReportOpen && (
        <ReportModal
          onClose={handleCloseReport}
          targetType="post"
          targetId={id}
          author={author.nickname}
        />
      )}
    </>
  );
};

export default PostDetailHeader;
