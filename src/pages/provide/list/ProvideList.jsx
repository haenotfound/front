import React, { useState, useEffect, useMemo } from "react";
import RegionNoticeBanner from "./RegionNoticeBanner";
import FilterPanel from "./FilterPanel";
import IconButton from "../../../components/button/IconButton";
import S from "./style";
import { mockPosts } from "../../../mock/mockPosts";
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

  // localStorage에 저장된 region 불러오기
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

  // ProvideList 첫 진입 시 초기 데이터 로드 (mock)
  useEffect(() => {
    setPosts(mockPosts);
    setHasMore(mockPosts.length > pageSize);
  }, []);

  // 로컬 필터링/정렬
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // 1) 카테고리
    const selectedCategories = filters.category || ["전체"];
    if (!selectedCategories.includes("전체")) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // 2) 검색어: 제목이나 본문에 일치하는 내용 검색
    const kw = (filters.keyword || "").trim().toLowerCase();
    if (kw) {
      result = result.filter((p) => {
        const title = (p.title || "").toLowerCase();
        const contentText = stripHtml(p.contentHtml || "").toLowerCase();
        return title.includes(kw) || contentText.includes(kw);
      });
    }

    // 3) 정렬
    switch (filters.sort) {
      case "최신순":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "스크랩순":
        result.sort((a, b) => (b.bookmarkCount ?? 0) - (a.bookmarkCount ?? 0));
        break;
      case "좋아요순":
        result.sort((a, b) => (b.likeCount ?? 0) - (a.likeCount ?? 0));
        break;
      default:
        break;
    }

    return result;
  }, [posts, filters]);

  // 필터/검색 적용, 페이지 리셋
  const handleApplyFilters = (nextFilters) => {
    setFilters(nextFilters);
    setPage(1);
  };

  // 더보기
  const handleLoadMore = () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const visiblePosts = filteredPosts.slice(0, page * pageSize);

  useEffect(() => {
    setHasMore(page * pageSize < filteredPosts.length);
  }, [filteredPosts, page]);

  return (
    <S.ProvideListContainer>
      <RegionNoticeBanner region={region} />
      <FilterPanel onApply={handleApplyFilters} />
      <CardGrid
        posts={visiblePosts}
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
