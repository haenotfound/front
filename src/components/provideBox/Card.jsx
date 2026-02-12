import React from "react";
import S from "./style";
import { formatDate } from "../../utils/formatDate";

const Card = ({ post }) => {
  if (!post) return null;
  const { id, category = "", title = "", createdAt = "", imageSrc = "" } = post;

  return (
    <S.CardLink to={`/provide/detail/${id}`} aria-label={`${title} 상세 보기`}>
      <S.CardWrap>
        <S.Thumbnail>
          <S.ThumbnailImg
            src={imageSrc || "/assets/images/provide-default.png"}
            alt={`${category} 썸네일`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/provide-default.png";
            }}
          />
          <S.Category
            type="button"
            size="12px"
            shape="pill"
            variant="solid"
            backgroundColor="primary"
            color="white"
            border="none"
            padding="smallMedium"
            font="semiBold"
          >
            {category}
          </S.Category>
        </S.Thumbnail>

        <S.CardBody>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardFooter>
            <S.DateText>{formatDate(createdAt)}</S.DateText>
          </S.CardFooter>
        </S.CardBody>
      </S.CardWrap>
    </S.CardLink>
  );
};

export default Card;
