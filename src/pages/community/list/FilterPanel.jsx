import React, { useState, useEffect } from "react";
import S from "./style";
import BaseButton from "../../../components/button/BaseButton";

const sortOptions = ["최신순", "조회수순", "스크랩순", "좋아요순", "댓글순"];

const FilterPanel = ({ onApply }) => {
  const [sort, setSort] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [appliedKeyword, setAppliedKeyword] = useState("");

  const handleReset = () => {
    setSort("최신순");
    setKeyword("");
    setAppliedKeyword("");
    onApply?.({ sort: "최신순", keyword: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = keyword.trim();
    setAppliedKeyword(trimmed);
    onApply?.({ sort, keyword: trimmed });
  };

  useEffect(() => {
    onApply?.({ sort, keyword: appliedKeyword });
  }, [sort]);

  const filterButton = ({ label, active, onClick }) => (
    <BaseButton
      type="button"
      size="12px"
      shape="pill"
      variant="solid"
      backgroundColor={active ? "primary" : "gray02"}
      color={active ? "white" : "black"}
      border="none"
      padding="smallMedium"
      font="semiBold"
      onClick={onClick}
    >
      {label}
    </BaseButton>
  );

  return (
    <S.FilterPanelSection>
      <form onSubmit={handleSubmit}>
        <S.FilterRow>
          <S.FilterLabel>필터</S.FilterLabel>
          <S.FilterButtons>
            {sortOptions.map((opt) => (
              <React.Fragment key={opt}>
                {filterButton({
                  label: opt,
                  active: sort === opt,
                  onClick: () => setSort(opt),
                })}
              </React.Fragment>
            ))}
          </S.FilterButtons>
        </S.FilterRow>

        <S.FilterRow>
          <S.FilterLabel>검색어</S.FilterLabel>
          <S.SearchInput>
            <S.SearchBox
              placeholder="검색어 입력"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </S.SearchInput>
        </S.FilterRow>

        <S.SearchActions>
          <BaseButton
            type="button"
            size="bttxt"
            shape="rounded"
            variant="solid"
            backgroundColor="gray03"
            color="black"
            padding="medium"
            onClick={handleReset}
            style={{ width: "80px", height: "32px" }}
          >
            초기화
          </BaseButton>

          <BaseButton
            type="submit"
            size="bttxt"
            shape="rounded"
            variant="solid"
            backgroundColor="primary"
            color="white"
            padding="medium"
            style={{ width: "80px", height: "32px" }}
          >
            검색
          </BaseButton>
        </S.SearchActions>
      </form>
    </S.FilterPanelSection>
  );
};

export default FilterPanel;