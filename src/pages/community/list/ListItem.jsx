import React, { useMemo } from "react";
import S from "./style";
import { formatRelativeTime } from "../../../utils/formatDate";
import { Link } from "react-router-dom";

const ListItem = ({ post }) => {
  const {
    id,
    title,
    content,
    author,
    region,
    createdAt,
    readCount,
    commentCount,
    likeCount,
    bookmarkCount,
    imageSrc,
  } = post;

  const relativeTime = useMemo(
    () => formatRelativeTime(createdAt),
    [createdAt],
  );

  return (
    <S.ListItemWrap to={`/community/detail/${id}`}>
      <S.Left>
        <S.ListTitle>{title}</S.ListTitle>
        <S.ListContent>{content?.replace(/\s+/g, " ")}</S.ListContent>

        <S.Meta>
          <S.MetaText>{region} |</S.MetaText>
          <S.MetaText>{author} |</S.MetaText>
          <S.MetaText>{relativeTime}</S.MetaText>
        </S.Meta>

        <S.CountItemWrap>
          <S.CountItem>
            <S.Icon src="/assets/images/icons/hits.png" alt="조회" />
            <S.Count>{readCount}</S.Count>
          </S.CountItem>
          <S.CountItem>
            <S.Icon src="/assets/images/icons/comment.png" alt="댓글" />
            <S.Count>{commentCount}</S.Count>
          </S.CountItem>
          <S.CountItem>
            <S.Icon src="/assets/images/icons/like.png" alt="좋아요" />
            <S.Count>{likeCount}</S.Count>
          </S.CountItem>
          <S.CountItem>
            <S.Icon src="/assets/images/icons/bookmark.png" alt="북마크" />
            <S.Count>{bookmarkCount}</S.Count>
          </S.CountItem>
        </S.CountItemWrap>
      </S.Left>

      <S.Right>
        <S.Thumb src={imageSrc} alt="" loading="lazy" />
      </S.Right>
    </S.ListItemWrap>
  );
};

export default ListItem;
