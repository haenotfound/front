import React from "react";
import S from "./style";

const PostContentCard = ({ post }) => {
  if (!post) return null;

  return (
    <S.ContentCardContainer>
      <S.Author>
        <S.ProfileBox>
          <S.ProfileImg
            src={
              post.author.profileImage ||
              "/assets/images/icons/user-profile.png"
            }
            alt={`${post.author.nickname} 프로필`}
          />
        </S.ProfileBox>
        <S.AuthorName>{post.author.nickname}</S.AuthorName>
      </S.Author>

      {/* 이미지 있을 때만 */}
      {post.images?.length > 0 && (
        <S.ThumbBox>
          <S.ThumbImg
            src={post.images[0]}
            alt="커뮤니티 이미지"
            loading="lazy"
          />
        </S.ThumbBox>
      )}

      <S.ContentText dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </S.ContentCardContainer>
  );
};

export default PostContentCard;
