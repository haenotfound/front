import React from "react";
import S from "./style";

const PostContentCard = ({ post }) => {
  if (!post) return null;

  const { author, authorProfile, imageSrc, content } = post;

  return (
    <S.ContentCardContainer>
      <S.Author>
        <S.ProfileBox>
          <S.ProfileImg src={authorProfile} alt={`${author} 프로필`} />
        </S.ProfileBox>
        <S.AuthorName>{author}</S.AuthorName>
      </S.Author>

        <S.ThumbBox>
          <S.ThumbImg src={imageSrc} alt="커뮤니티 썸네일" loading="lazy" />
        </S.ThumbBox>

          <S.ContentText>{content}</S.ContentText>
    </S.ContentCardContainer>
  );
};

export default PostContentCard;
