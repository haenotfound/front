import React, { useMemo } from "react";
import S from "./style";
import Icon from "../../../components/icon/Icon";
import Title from "../../../components/title/Title";
import BaseButton from "../../../components/button/BaseButton";
import { Link } from "react-router-dom";

const RegionNoticeBanner = ({ region }) => {
  const isRegionSet = Boolean(region);

  const displayRegion = useMemo(() => {
    if (!region) return "";
    const parts = region.trim().split(/\s+/);
    if (parts.length >= 3) return parts.slice(0, 3).join(" ");
    return region;
  }, [region]);

  return (
    <S.BannerContainer>
      <S.BannerTitle>
        <S.TitleRow>
          <Title
            highlightText={isRegionSet ? displayRegion : ""}
            text="커뮤니티"
            iconName="coffee"
            iconSize="xlarge"
            subtitle="우리 동네 사람들과 정보 공유"
          />
          <Link to="/community/write">
            <BaseButton
              type="submit"
              size="h6"
              shape="pill"
              variant="solid"
              backgroundColor="primary"
              color="white"
              padding="medium"
              style={{ width: "86px", height: "40px" }}
            >
              글 작성
            </BaseButton>
          </Link>
        </S.TitleRow>
      </S.BannerTitle>

      <S.RegionNoticeContainer>
        {!isRegionSet ? (
          <>
            <S.RegionNoticeBox>
              <S.RegionNotice>
                <Icon name="pin" size="xsmall"></Icon>
                <S.RegionText>아직 지역이 설정되지 않았어요</S.RegionText>
              </S.RegionNotice>
              <S.ChangeRegion to="/select-location">
                내 지역 설정하기 →
              </S.ChangeRegion>
            </S.RegionNoticeBox>
            <S.SubText>
              커뮤니티는 우리 동네 사람들과 정보를 나누는 공간이에요.
              <br /> 지역을 설정해야 참여할 수 있어요.
            </S.SubText>
          </>
        ) : (
          <>
            <S.RegionNoticeBox>
              <S.RegionNotice>
                <Icon name="pin" size="xsmall"></Icon>
                <span>현재 지역: {displayRegion}</span>
              </S.RegionNotice>
              <S.ChangeRegion to="/select-location">
                지역 변경하기 →
              </S.ChangeRegion>
            </S.RegionNoticeBox>
            <S.SubText>{displayRegion} 이웃들과 이야기를 나눠보세요.</S.SubText>
          </>
        )}
      </S.RegionNoticeContainer>
    </S.BannerContainer>
  );
};

export default RegionNoticeBanner;
