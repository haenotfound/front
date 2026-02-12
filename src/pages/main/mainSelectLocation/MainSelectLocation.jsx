import React, { useState, useMemo } from "react";
import S from "./style";
import Title from "../../../components/title/Title";
import { BaseButton } from '../../../components/button/style';


// TODO: 나중에 실제 한국 지역 데이터로 교체
// 데이터 구조: { 시도: { 구군: [동들] } }
const locationData = {};

const MainSelectLocation = () => {
  const [selectedSido, setSelectedSido] = useState("");
  const [selectedGugun, setSelectedGugun] = useState("");
  const [selectedDong, setSelectedDong] = useState("");
  const [saveLocation, setSaveLocation] = useState(false);

  // 선택된 시도에 해당하는 구군 리스트
  const gugunList = useMemo(() => {
    if (!selectedSido || !locationData[selectedSido]) return [];
    return Object.keys(locationData[selectedSido]);
  }, [selectedSido]);

  // 선택된 구군에 해당하는 동 리스트
  const dongList = useMemo(() => {
    if (
      !selectedSido ||
      !selectedGugun ||
      !locationData[selectedSido]?.[selectedGugun]
    )
      return [];
    return locationData[selectedSido][selectedGugun];
  }, [selectedSido, selectedGugun]);

  // 시도 선택 핸들러
  const handleSidoChange = (e) => {
    const sido = e.target.value;
    setSelectedSido(sido);
    setSelectedGugun(""); // 구군 초기화
    setSelectedDong(""); // 동 초기화
  };

  // 구군 선택 핸들러
  const handleGugunChange = (e) => {
    const gugun = e.target.value;
    setSelectedGugun(gugun);
    setSelectedDong(""); // 동 초기화
  };

  // 동 선택 핸들러
  const handleDongChange = (e) => {
    setSelectedDong(e.target.value);
  };

  // 선택된 지역 표시 텍스트
  const locationText = useMemo(() => {
    const parts = [];
    if (selectedSido) parts.push(selectedSido);
    if (selectedGugun) parts.push(selectedGugun);
    if (selectedDong) parts.push(selectedDong);
    return parts.length > 0 ? parts.join(" ") : "지역을 선택해주세요";
  }, [selectedSido, selectedGugun, selectedDong]);

  // const test = [
  //   {
  //     value: selectedSido,
  //     onChange: handleSidoChange,
  //     disabled: !selectedSido,
  //     options: {
  //       label: "시/도 선택",
  //       options: gugunList,
  //     },
  //   },
  //   {
  //     value: selectedSido,
  //     onChange: handleSidoChange,
  //     disabled: !selectedSido,
  //     options: {
  //       label: "시/도 선택",
  //       options: gugunList,
  //     },
  //   },
  //   {
  //     value: selectedSido,
  //     onChange: handleSidoChange,
  //     disabled: !selectedSido,
  //     options: {
  //       label: "시/도 선택",
  //       options: gugunList,
  //     },
  //   },
  // ];

  return (
    <>
      <S.SelectLocationContainer>
        <S.SelectLocationInner>
          <S.SelectLocationTitle>
            <Title
              iconName="pin"
              iconSize="xlarge"
              highlightText="우리 동네"
              text="지역 선택하기"
              subtitle="지도에서 지역을 선택해서 맞춤형 정보를 한 눈에!"
            />
          </S.SelectLocationTitle>
          <S.SelectLocationWrap>
            <S.SelectLocationMap>
              현재 위치 설정할수있게 카카오톡 api 사용하기
            </S.SelectLocationMap>
            <S.SelectLocationContent>
              <S.FormTitle>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/icons/local-pin.png`}
                  alt="pin"
                />
                현재 선택된 지역은 <br />
                <span>{locationText}</span>
                입니다.
              </S.FormTitle>
              <S.FormSelect>
                {/* {test.map((item) => (
                  <S.Select
                    value={item.value}
                    onChange={item.onChange}
                    disabled={item.disabled}
                  >
                    <option value="">{item.options.label}</option>
                    {item.options.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))} */}
                  {/* </S.Select>
                ))} */}
                <S.Select value={selectedSido} onChange={handleSidoChange}>
                  <option value="">시/도 선택</option>
                  {/* 나중에 실제 시도 데이터로 교체 */}
                  {/* {Object.keys(locationData).map((sido) => (
                    <option key={sido} value={sido}>{sido}</option>
                  ))} */}
                </S.Select>
                <S.Select
                  value={selectedGugun}
                  onChange={handleGugunChange}
                  disabled={!selectedSido}
                >
                  <option value="">구/군 선택</option>
                  {gugunList.map((gugun) => (
                    <option key={gugun} value={gugun}>
                      {gugun}
                    </option>
                  ))}
                </S.Select>
                <S.Select
                  value={selectedDong}
                  onChange={handleDongChange}
                  disabled={!selectedGugun}
                >
                  <option value="">동 선택</option>
                  {dongList.map((dong) => (
                    <option key={dong} value={dong}>
                      {dong}
                    </option>
                  ))}
                </S.Select>
              </S.FormSelect>
              <S.CheckboxContainer>
                <S.Checkbox
                  type="checkbox"
                  id="saveLocation"
                  checked={saveLocation}
                  onChange={(e) => setSaveLocation(e.target.checked)}
                />
                <S.CheckboxLabel htmlFor="saveLocation">
                  선택한 지역 저장하기
                </S.CheckboxLabel>
              </S.CheckboxContainer>
              <S.ButtonContainer>
                <BaseButton
                  shape="pill"
                  fontSize="h3"
                  padding="fullWidth"
                  color="white"
                  fontWeight="bold"
                  lineHeight="h3"
                >
                  이 지역으로 보기
                </BaseButton>
              </S.ButtonContainer>
            </S.SelectLocationContent>
          </S.SelectLocationWrap>
        </S.SelectLocationInner>
      </S.SelectLocationContainer>
    </>
  );
};

export default MainSelectLocation;
