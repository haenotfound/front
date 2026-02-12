import React, { useEffect, useMemo, useState } from "react";
import RegionNoticeBanner from "./RegionNoticeBanner";
import FilterPanel from "./FilterPanel";
import CommunityListWrap from "./CommunityListWrap";
import LoadMoreButton from "./LoadMoreButton";
import S from "./style";
import { mockCommunity } from "../../../mock/mockCommunity";

const pageSize = 6
const defaultFilters = { sort: "최신순", keyword: "" }

const CommunityList = () => {
  const [posts] = useState(mockCommunity);
  const [region, setRegion] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);

  // localStorage에 저장된 region 불러옴
  useEffect(() => {
    const savedRegion = localStorage.getItem("region");
    if (savedRegion) {
      setRegion(savedRegion);
    }
  }, []);

  // 로컬 필터링/정렬
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // 1) 검색어: 제목이나 본문에 일치하는 내용 검색
    const kw = (filters.keyword || "").trim().toLowerCase();
    if (kw) {
      result = result.filter((p) => {
        const title = (p.title || "").toLowerCase();
        const contentText = (p.content || "").toLowerCase();
        return title.includes(kw) || contentText.includes(kw);
      });
    }

    // 2) 정렬
    switch (filters.sort) {
      case "최신순":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "조회수순":
        result.sort((a, b) => (b.readCount ?? 0) - (a.readCount ?? 0));
        break;
      case "스크랩순":
        result.sort((a, b) => (b.bookmarkCount ?? 0) - (a.bookmarkCount ?? 0));
        break;
      case "좋아요순":
        result.sort((a, b) => (b.likeCount ?? 0) - (a.likeCount ?? 0));
        break;
      case "댓글순":
        result.sort((a, b) => (b.commentCount ?? 0) - (a.commentCount ?? 0));
        break;
      default:
        break;
    }

    return result;
  }, [posts, filters]);

  // 필터링 적용 + 현재 페이지 기준 화면에 보이는 게시글 목록
  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, page * pageSize)
  }, [filteredPosts, page])

  // 필터/검색 적용, 페이지 리셋
  const handleApplyFilters = (nextFilters) => {
    setFilters(nextFilters)
    setPage(1)
  }

  // 더보기
  const hasMore = visiblePosts.length < filteredPosts.length
  const handleLoadMore = () => {
    if(!hasMore) return
    setPage((prev) => prev + 1)
  }

  return (
    <S.CommunityListContainer>
      커뮤니티 리스트 페이지
      <RegionNoticeBanner region={region} />
      <FilterPanel onApply={handleApplyFilters} />
      <CommunityListWrap posts={visiblePosts} />
      {hasMore && <LoadMoreButton onClick={handleLoadMore} />}
    </S.CommunityListContainer>
  );
};

export default CommunityList;
