import React, { useEffect, useState } from "react";
import S from "./style";

const PostDetailHeader = ({
  postId,
  category,
  title,
  createdAt,
  readCount = 0,
  likeCount = 0,
  bookmarkCount = 0,
}) => {
  // 좋아요, 북마크 기능 - 버튼: 아이콘
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const [localBookmarkCount, setLocalBookmarkCount] = useState(bookmarkCount);

  useEffect(() => {
    setLocalLikeCount(likeCount);
    setLocalBookmarkCount(bookmarkCount);
  }, [postId, likeCount, bookmarkCount]);

  const handleToggleLike = async () => {
    try {
      const res = await fetch(`http://localhost:10000/provide/${postId}/like`, {
        method: "POST",
      });

      if (!res.ok) throw new Error("좋아요 실패");

      const data = await res.json();

      setIsLiked(data.isLiked);

      setLocalLikeCount((prev) =>
        data.isLiked ? prev + 1 : Math.max(0, prev - 1),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleBookmark = async () => {
    try {
      const res = await fetch(
        `http://localhost:10000/provide/${postId}/bookmark`,
        {
          method: "POST",
        },
      );

      if (!res.ok) throw new Error("북마크 실패");

      const data = await res.json();

      setIsBookmarked(data.isBookmarked);

      setLocalBookmarkCount((prev) =>
        data.isBookmarked ? prev + 1 : Math.max(0, prev - 1),
      );
    } catch (err) {
      console.error(err);
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
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
        <S.Date>{createdAt}</S.Date>
      </S.PostTitle>

      <S.CountItemWrap>
        <S.CountItem>
          <S.Icon src="/assets/images/icons/hits.png" alt="조회" />
          <S.Count>{readCount}</S.Count>
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
      </S.CountItemWrap>
    </S.PostHeader>
  );
};

export default PostDetailHeader;
