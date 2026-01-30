import React from "react";

// 마이페이지_내가 작성한 게시글 목록
const MyPosts = () => {
  const myActivities = [
    {
      id: 1,
      title: "역삼친구 모여라❤️",
      summary:
        "이사온지 얼마 되지 않은 3개월차 자취생입니다! 본가는 광주이고 회사가 선릉입니다~~ 맛집이나 취미 생활 함께할 분들 구해요! 같이 볼링치고 치맥할 분 구해요. 같이 놀아요!",
      region: "역삼동",
      date: "25.12.28",
      likes: 2,
      comments: 7,
      hits: 30,
      bookmarks: 7,
    },
  ];

  return (
    <section style={styles.cardList}>
      {myActivities.map((item) => (
        <article key={item.id} style={styles.card}>
          <h4 style={styles.cardTitle}>{item.title}</h4>
          <p style={styles.cardSummary}>{item.summary}</p>

          <div style={styles.cardFooter}>
            {/* 지역 및 작성일 정보 */}
            <div style={styles.meta}>
              <span>{item.region}</span>
              <span style={styles.dot} />
              <span>{item.date}</span>
            </div>

            {/* 좋아요, 댓글, 조회, 북마크*/}
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
    whiteSpace: "pre-line",
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

export default MyPosts;
