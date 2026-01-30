import React from "react";

// 마이페이지_좋아요 게시글 목록
const LikedPosts = () => {
  const myComments = [
    {
      id: 1,
      title: "인천으로 이사가야하는데 쉽지 않네요 😂",
      summary:
        "역삼동에서 산지 어언 3년이 되어가는데 이직을 하게 되어서 인천으로 출근을 하게 됐습니다.. 지금 전세집을 올해 3월에 재계약해서 아직 계약기간은 많이 남았지, 방을 내놓긴했는데...",
      region: "역삼동",
      date: "25.12.28",
      likes: 2,
      comments: 7,
      hits: 30,
      bookmarks: 7,
    },

    {
      id: 2,
      title: "'소소한 행동' 우유팩 수거 자원순환 자원봉사 👍",
      summary:
        "우유팩 수거 자원순환 봉사 활동을 하면서 그 작은 팩 하나가 다시 새로운 종이로 태어나 어느 누군가에게 필요로 쓰일 수 있다는 사실을 새삼 알게 되었습니다.",
      region: "역삼동",
      date: "25.12.21",
      likes: 2,
      comments: 7,
      hits: 30,
      bookmarks: 7,
    },
  ];

  return (
    <section style={styles.cardList}>
      {myComments.map((item) => (
        <article key={item.id} style={styles.card}>
          <h4 style={styles.cardTitle}>{item.title}</h4>
          <p style={styles.cardSummary}>{item.summary}</p>
          
          <div style={styles.cardFooter}>
            {/* 위치 및 날짜 정보 */}
            <div style={styles.meta}>
              <span>{item.region}</span>
              <span style={styles.dot} />
              <span>{item.date}</span>
            </div>

            {/* 피드백 카운트 영역 */}
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

export default LikedPosts;
