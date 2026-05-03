import React, { useState, useEffect } from "react";
import S from "./style";
import BaseButton from "../../../components/button/BaseButton";

const categoryOptions = [
  "전체",
  "생활정보",
  "정부 지원 사업",
  "주거·계약",
  "안전·치안",
  "기타",
];
const sortOptions = ["최신순", "스크랩순", "좋아요순"];

const FilterPanel = ({ onApply }) => {
  const [category, setCategory] = useState(["전체"]);
  const [sort, setSort] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [appliedKeyword, setAppliedKeyword] = useState("");

  const ALL = "전체";
  const nonAllCategories = categoryOptions.filter((c) => c !== ALL);

  const applyNow = (
    nextCategory = category,
    nextSort = sort,
    nextKeyword = appliedKeyword,
  ) => {
    onApply?.({
      category: nextCategory,
      sort: nextSort,
      keyword: nextKeyword,
    });
  };

  const toggleCategory = (clicked) => {
    setCategory((prev) => {
      const ALL = "전체";
      const nonAllCategories = categoryOptions.filter((c) => c !== ALL);

      let next;

      if (clicked === ALL) {
        next = [ALL];
      } else {
        const hasAll = prev.includes(ALL);

        if (hasAll) {
          next = [clicked];
        } else {
          next = prev.includes(clicked)
            ? prev.filter((c) => c !== clicked)
            : [...prev, clicked];

          if (next.length === 0) next = [ALL];

          const allSelected = nonAllCategories.every((c) => next.includes(c));
          if (allSelected) next = [ALL];
        }
      }

      applyNow(next, sort, appliedKeyword);

      return next;
    });
  };

  const handleReset = () => {
    setCategory(["전체"]);
    setSort("최신순");
    setKeyword("");
    setAppliedKeyword("");
    onApply?.({ category: ["전체"], sort: "최신순", keyword: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = keyword.trim();
    setAppliedKeyword(trimmed);
    onApply?.({ category, sort, keyword: trimmed });
  };

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
          <S.FilterLabel>자취 정보 분류</S.FilterLabel>
          <S.FilterButtons>
            {categoryOptions.map((opt) => (
              <React.Fragment key={opt}>
                {filterButton({
                  label: opt,
                  active: category.includes(opt),
                  onClick: () => toggleCategory(opt),
                })}
              </React.Fragment>
            ))}
          </S.FilterButtons>
        </S.FilterRow>

        <S.FilterRow className="FilterRow">
          <S.FilterLabel>필터</S.FilterLabel>
          <S.FilterButtons>
            {sortOptions.map((opt) => (
              <React.Fragment key={opt}>
                {filterButton({
                  label: opt,
                  active: sort === opt,
                  onClick: () => {
                    setSort(opt);
                    applyNow(category, opt, appliedKeyword);
                  },
                })}
              </React.Fragment>
            ))}
          </S.FilterButtons>
        </S.FilterRow>

        <S.FilterRow className="FilterRow">
          <S.FilterLabel>검색어</S.FilterLabel>
          <S.SearchInput>
            <S.SearchBox
              className="SearchBox"
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
