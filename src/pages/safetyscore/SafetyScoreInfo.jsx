import React from "react";
import S from "./style";
import IconButton from "../../components/button/IconButton";
import { useLocationContext } from "../../context/LocationContext";

// 점수에 따라 표정 이미지 선택 (face1: 매우 좋음 ~ face4: 좋지 않음)
const pickFaceImage = (score) => {
  if (score == null) return "face1.png";
  if (score >= 80) return "face1.png";
  if (score >= 60) return "face2.png";
  if (score >= 40) return "face3.png";
  return "face4.png";
};

const SafetyScoreInfo = ({ scoreData, loading }) => {
  const { selectedLocation, selectLocation, openLocationModal } =
    useLocationContext();
  const displayAddress =
    selectedLocation?.address || "지역을 선택해 주세요";

  const score = scoreData?.score;
  const safetyMessage = scoreData?.safetyMessage || "지역을 선택하면 안전점수가 표시돼요.";
  const rankingPercentile = scoreData?.rankingPercentile;
  const faceImage = pickFaceImage(score);

  // "지역 저장하기" 버튼 → 즐겨찾기에 추가
  const handleSaveFavorite = async () => {
    if (!selectedLocation) return;
    try {
      await selectLocation({
        ...selectedLocation,
        saveAsFavorite: true,
      });
      alert("즐겨찾기에 저장되었습니다.");
    } catch (err) {
      alert(err?.message || "저장에 실패했습니다.");
    }
  };

  return (
    <S.SafetyScoreInfo>
      <S.SafetyScoreInfoBox>
        <S.SafetyScoreInfoBoxHeader>
          {displayAddress}
        </S.SafetyScoreInfoBoxHeader>
        <S.SafetyScoreInfoBoxTitle>
          우리 동네는 얼마나 안전할까요?
        </S.SafetyScoreInfoBoxTitle>
        <S.SafetyScoreInfoBoxButtons>
          <IconButton
            iconName="location-black"
            iconSize="small"
            color="black"
            size="medium"
            shape="rounded"
            padding="smallMedium"
            backgroundColor="white"
            border="white"
            borderWidth="medium"
            onClick={openLocationModal}
          >
            지역 변경하기
          </IconButton>
          <IconButton
            iconName="bookmarks"
            iconSize="small"
            color="black"
            size="medium"
            shape="rounded"
            padding="smallMedium"
            backgroundColor="white"
            border="white"
            borderWidth="medium"
            onClick={handleSaveFavorite}
          >
            지역 저장하기
          </IconButton>
        </S.SafetyScoreInfoBoxButtons>
      </S.SafetyScoreInfoBox>
      <S.SafetyScoreBox>
        <S.Scorebox>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/${faceImage}`}
            alt="face"
          />
          <span>{score != null ? `${score}점` : loading ? "..." : "-"}</span>
        </S.Scorebox>
        <S.ScoreboxContent>
          <S.ScoreboxContentTitle>{safetyMessage}</S.ScoreboxContentTitle>
          <S.ScoreboxContentSubtitle>
            {rankingPercentile != null
              ? `전국 평균 대비 상위 ${rankingPercentile}%에 드는 지역이에요.`
              : "지역을 선택하면 순위가 표시돼요."}
          </S.ScoreboxContentSubtitle>
        </S.ScoreboxContent>
      </S.SafetyScoreBox>
    </S.SafetyScoreInfo>
  );
};

export default SafetyScoreInfo;
