const BASE_URL = "http://localhost:10000/community";

// 공통 fetch 함수 (에러 처리 포함)
const request = async (url, options = {}) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "API 요청 실패");
  }

  return res.json();
};

// 게시글 목록 조회
export const getPosts = async ({ page, pageSize, sort, keyword }) => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("pageSize", pageSize);

  if (sort) params.append("sort", sort);
  if (keyword) params.append("keyword", keyword);

  return request(`${BASE_URL}/posts?${params.toString()}`);
};

// 게시글 상세 조회
export const getPostDetail = async (postId) => {
  return request(`${BASE_URL}/${postId}`);
};

// 게시글 좋아요
export const toggleLikePost = async (postId) => {
  return request(`${BASE_URL}/${postId}/like`, {
    method: "POST",
  });
};

// 게시글 북마크
export const toggleBookmarkPost = async (postId) => {
  return request(`${BASE_URL}/${postId}/bookmark`, {
    method: "POST",
  });
};

// 댓글 목록
export const getComments = async ({ postId }) => {
  return request(`${BASE_URL}/${postId}/comments`);
};

// 댓글 작성
export const createComment = async (postId, content) => {
  const res = await fetch(`${BASE_URL}/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  return res.json();
};

// 댓글 좋아요
export const toggleLikeComment = async (commentId) => {
  return request(`${BASE_URL}/comments/${commentId}/like`, {
    method: "POST",
  });
};

// 답글 작성
export const createReply = async (commentId, content) => {
  const res = await fetch(`${BASE_URL}/comments/${commentId}/replies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  return res.json();
};

// 답글 좋아요
export const toggleLikeReply = async (replyId) => {
  return request(`${BASE_URL}/replies/${replyId}/like`, {
    method: "POST",
  });
};

// 신고 (게시글 / 댓글 / 답글 공통)
export const reportTarget = async (type, id, reason) => {
  let url = "";

  if (type === "post") url = `${BASE_URL}/${id}/report`;
  if (type === "comment") url = `${BASE_URL}/comments/${id}/report`;
  if (type === "reply") url = `${BASE_URL}/replies/${id}/report`;

  return request(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reason }),
  });
};
