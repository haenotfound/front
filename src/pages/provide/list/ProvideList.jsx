import React, { useState, useEffect } from "react";
import RegionNoticeBanner from "./RegionNoticeBanner";
import FilterPanel from "./FilterPanel";
import IconButton from "../../../components/button/IconButton";
import S from "./style";
import CardGrid from "../../../components/provideBox/CardGrid";

const pageSize = 16;

const defaultFilters = { category: ["전체"], sort: "최신순", keyword: "" };

// 검색용으로 게시글 본문 내용 정리
const stripHtml = (html = "") =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const ProvideList = () => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const savedRegion = localStorage.getItem("region");
    if (savedRegion) {
      setRegion(savedRegion);
    }
  }, []);

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);

  const fetchPosts = async (page, filters) => {
    try {
      setLoading(true);

      const query = new URLSearchParams({
        page,
        pageSize: 16,
        sort:
          filters.sort === "최신순"
            ? "latest"
            : filters.sort === "좋아요순"
              ? "like"
              : "bookmark",
        keyword: filters.keyword || "",
        category: filters.category.includes("전체")
          ? ""
          : filters.category
              .map((c) => {
                if (c === "생활정보") return "LIFE_INFO";
                if (c === "정부 지원 사업") return "GOVERNMENT_SUPPORT";
                if (c === "주거·계약") return "HOUSING_CONTRACT";
                if (c === "안전·치안") return "SAFETY";
                return "OTHER";
              })
              .join(","),
        region: region || "",
      });

      const response = await fetch(
        `http://localhost:10000/provide/posts?${query}`,
      );

      const data = await response.json();

      if (page === 1) {
        setPosts(data.data);
      } else {
        setPosts((prev) => [...prev, ...data.data]);
      }

      setHasMore(data.meta.hasMore);
    } catch (error) {
      console.error("에러 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1, filters);
  }, [filters]);

  // 필터
  const handleApplyFilters = (nextFilters) => {
    setFilters(nextFilters);
    setPage(1);
  };

  // 더보기
  const handleLoadMore = () => {
    if (loading || !hasMore) return;

    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, filters);
  };

  return (
    <S.ProvideListContainer>
      <RegionNoticeBanner region={region} />
      <FilterPanel onApply={handleApplyFilters} />

      <CardGrid
        posts={posts.map((p) => ({
          ...p,
          imageSrc: p.thumbnailUrl,
        }))}
        columns={4}
        gap={30}
        marginTop={50}
        paddingX={24}
      />

      {hasMore && (
        <S.Button>
          <IconButton
            iconName="plus-gray"
            iconSize="xsmall"
            iconColor="gray03"
            border="gray03"
            borderWidth="medium"
            color="gray05"
            size="medium"
            shape="pill"
            padding="medium"
            backgroundColor="white"
            onClick={handleLoadMore}
            disabled={loading}
            style={{ width: "108px", height: "38px" }}
          >
            {loading ? "불러오는 중..." : "더보기"}
          </IconButton>
        </S.Button>
      )}
    </S.ProvideListContainer>
  );
};

export default ProvideList;
