import React from "react";

// 마이페이지_북마크한 게시글 목록
const BookmarkedPosts = () => {
  const myComments = [
    {
      id: 1,
      title: "당근 택배거래 사기조심 하세요!!",
      summary:
        "티파니 목걸이 팔려고 올려둔거 채팅 왔는데 택배거래 유도하길래 택배거래 어렵다고 하니 탈퇴했어요 !",
      region: "서초동",
      date: "25.12.28",
      likes: 3,
      comments: 5,
      hits: 43,
      bookmarks: 3,
    },

    {
      id: 2,
      title: "강아지 잃어버리신 분 있나요?",
      summary: "청담 중흥 s클래스 6단지인데 강아지가 혼자 다니더라고요",
      region: "청담동",
      date: "25.12.21",
      likes: 8,
      comments: 8,
      hits: 21,
      bookmarks: 9,
    },
  ];

  return (
    <section style={styles.cardList}>
      {myComments.map((item) => (
        <article key={item.id} style={styles.card}>
          <h4 style={styles.cardTitle}>{item.title}</h4>
          <p style={styles.cardSummary}>{item.summary}</p>

          {/* 게시글 정보(지역, 날짜) */}
          <div style={styles.cardFooter}>
            <div style={styles.meta}>
              <span>{item.region}</span>
              <span style={styles.dot} />
              <span>{item.date}</span>
            </div>

            {/* 통계 정보 (좋아요, 댓글, 조회, 북마크) */}
            <div style={styles.counts}>
              <span style={styles.countItem}>
                <img
                  src="/assets/images/icons/like.png"
                  alt="좋아요"
                  style={styles.icon}
                />
                {item.likes}
              </span>

              <span style={styles.countItem}>
                <img
                  src="/assets/images/icons/comment.png"
                  alt="댓글"
                  style={styles.icon}
                />
                {item.comments}
              </span>

              <span style={styles.countItem}>
                <img
                  src="/assets/images/icons/hits.png"
                  alt="조회"
                  style={styles.icon}
                />
                {item.hits}
              </span>

              <span style={styles.countItem}>
                <img
                  src="/assets/images/icons/bookmark-view.png"
                  alt="북마크"
                  style={styles.icon}
                />
                {item.bookmarks}
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

const styles = {
  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  card: {
    borderRadius: "16px",
    border: "1px solid #D9D9D9",
    padding: "24px 26px",
    backgroundColor: "#FFFFFF",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#0B1215",
    margin: "0 0 10px",
  },

  cardSummary: {
    fontSize: "14px",
    color: "#666666",
    margin: "0 0 18px",
    lineHeight: 1.5,
  },

  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#B5B5B5",
    fontSize: "14px",
  },

  meta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  dot: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    backgroundColor: "#D1D5DB",
    display: "inline-block",
  },

  counts: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  icon: {
    width: "16px",
    height: "16px",
    display: "block",
  },

  countItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
};

export default BookmarkedPosts;
