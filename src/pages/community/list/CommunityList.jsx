import React, { useEffect, useMemo, useState, useRef } from "react";
import RegionNoticeBanner from "./RegionNoticeBanner";
import FilterPanel from "./FilterPanel";
import CommunityListWrap from "./CommunityListWrap";
import LoadMoreButton from "./LoadMoreButton";
import S from "./style";
import { getPosts } from "../../../api/community";
const pageSize = 6;
const defaultFilters = { sort: "최신순", keyword: "" };

const CommunityList = () => {
  const [posts, setPosts] = useState([]);
  const [region, setRegion] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);
  const [hasMore, setHasMore] = useState(true);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);
  const bottomRef = useRef(null);

  // localStorage에 저장된 region 불러옴
  useEffect(() => {
    const savedRegion = localStorage.getItem("region");
    if (savedRegion) {
      setRegion(savedRegion);
    }
  }, []);

  // 커뮤니티 post 불러옴
  useEffect(() => {
    const fetchPosts = async () => {
      if (!region) return;
      if (loading) return;
      setLoading(true);

      try {
        const res = await getPosts({
          page,
          pageSize,
          sort: filters.sort,
          keyword: filters.keyword,
        });

        if (page === 1) {
          setPosts(res.data);
        } else {
          setPosts((prev) => [...prev, ...res.data]);
        }
        if (res.data.length < pageSize) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, filters, region]);

  useEffect(() => {
    if (!isAutoScroll) return;
    if (!hasMore) return;
    if (loading) return;

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (bottomRef.current) {
      observerRef.current.observe(bottomRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [isAutoScroll, hasMore, loading]);

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
  const visiblePosts = filteredPosts;

  // 필터/검색 적용, 페이지 리셋
  const handleApplyFilters = (nextFilters) => {
    setFilters(nextFilters);
    setPage(1);
    setPosts([]);
    setHasMore(true);
  };

  // 더보기
  const handleLoadMore = () => {
    if (!hasMore) return;
    setPage((prev) => prev + 1);
    setIsAutoScroll(true);
  };

  return (
    <S.CommunityListContainer>
      커뮤니티 리스트 페이지
      <RegionNoticeBanner region={region} />
      <S.BlockWrapper isBlocked={!region}>
        <FilterPanel onApply={handleApplyFilters} />
        <CommunityListWrap posts={visiblePosts} />
        {!isAutoScroll && hasMore && (
          <LoadMoreButton onClick={handleLoadMore} disabled={loading} />
        )}
        {isAutoScroll && hasMore && (
          <div ref={bottomRef} style={{ height: "1px" }} />
        )}
      </S.BlockWrapper>
    </S.CommunityListContainer>
  );
};

export default CommunityList;
