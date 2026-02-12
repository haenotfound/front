import React, { useEffect, useState } from "react";
import { formatDateTime } from "../../../utils/formatDate";
import S from "./style";

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

  // 좋아요, 북마크 기능 - 버튼: 아이콘
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const [localBookmarkCount, setLocalBookmarkCount] = useState(bookmarkCount);

  useEffect(() => {
    setIsLiked(false);
    setIsBookmarked(false);
    setLocalLikeCount(likeCount);
    setLocalBookmarkCount(bookmarkCount);
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

  const handleToggleBookmark = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      setLocalBookmarkCount((c) => Math.max(0, c - 1));
    } else {
      setIsBookmarked(true);
      setLocalBookmarkCount((c) => c + 1);
    }
  };

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";
  const bookmarkIcon = isBookmarked
    ? "/assets/images/icons/bookmark-active.png"
    : "/assets/images/icons/bookmark.png";

  return (
    <S.PostHeader>
      <S.PostTitle>
        <S.Title>{title}</S.Title>
        <S.DateAndAuthor>
          {formatDateTime(createdAt)}
          <span> | {author}</span>
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
          <S.Icon className={isLiked ? "pop" : ""} src={likeIcon} alt="좋아요" />
          <S.Count>{localLikeCount}</S.Count>
        </S.IconButton>
        <S.IconButton $active={isBookmarked} onClick={handleToggleBookmark}>
          <S.Icon className={isBookmarked ? "pop" : ""} src={bookmarkIcon} alt="북마크" />
          <S.Count>{localBookmarkCount}</S.Count>
        </S.IconButton>
      </S.CountItemWrap>
    </S.PostHeader>
  );
};

export default PostDetailHeader;
