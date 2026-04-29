import React, { useEffect, useState } from "react";
import S from "./style";
import IconButton from "../../components/button/IconButton";
import SafetyScoreMap from "./SafetyScoreMap";
import SafetyScoreInfo from "./SafetyScoreInfo";
import SafetyScoreList from "./SafetyScoreList";
import { useLocationContext } from "../../context/LocationContext";
import { calculateSafeScore } from "../../api/safetyScoreApi";

const SafetyScore = () => {
  const { selectedLocation, openLocationModal } = useLocationContext();
  const displayAddress =
    selectedLocation?.address || "지역을 선택해 주세요";

  console.log("[SafetyScore render] selectedLocation=", selectedLocation);

  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedLocation?.address) {
      setScoreData(null);
      return;
    }
    let isCancelled = false;
    const fetchScore = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await calculateSafeScore({
          address: selectedLocation.address,
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        });
        if (!isCancelled) setScoreData(res?.data ?? null);
      } catch (err) {
        if (!isCancelled) setError(err?.message || "안전점수 조회 실패");
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    fetchScore();
    return () => {
      isCancelled = true;
    };
  }, [selectedLocation]);

  return (
    <S.SafetyScoreContainer>
      <S.SafetyScoreInner>
        <S.SafetyScoreTitle>
          <span>{displayAddress}</span>
          <IconButton
            iconName="location-white"
            iconSize="xsmall"
            color="white"
            size="medium"
            shape="rounded"
            padding="smallMedium"
            backgroundColor="primary"
            border="primary"
            borderWidth="medium"
            onClick={openLocationModal}
          >
            지역 선택하기
          </IconButton>
        </S.SafetyScoreTitle>
        <SafetyScoreMap />
        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}
        <SafetyScoreInfo scoreData={scoreData} loading={loading} />
        <SafetyScoreList scoreData={scoreData} />
      </S.SafetyScoreInner>
    </S.SafetyScoreContainer>
  );
};

export default SafetyScore;
