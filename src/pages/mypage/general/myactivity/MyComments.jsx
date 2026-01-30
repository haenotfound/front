import React from "react";

// 마이페이지_내가 작성한 댓글 목록
const MyComments = () => {
  const myComments = [
    {
      id: 1,
      title: "홈플러스 앞 붕어빵 가게",
      summary:
        "이천원이면 너무 이득이네요! 겨울이 가기 전에 사먹어야겠어요. 감사합니다 😊",
      region: "역삼동",
      date: "25.12.28",
      likes: 2,
      comments: 1,
    },

    {
      id: 2,
      title: "오늘 아침7시 중심상가 도로교통ㅠㅠ",
      summary:
        "정보 감사합니다. 너무 막혀서 확인해보니 사고가 난 것 같더라고요.. 모두 안전운전입니다.",
      region: "역삼동",
      date: "25.12.21",
      likes: 3,
      comments: 1,
    },
  ];

  return (
    <section style={styles.cardList}>
      {myComments.map((item) => (
        <article key={item.id} style={styles.card}>
          <h4 style={styles.cardTitle}>{item.title}</h4>
          <p style={styles.cardSummary}>{item.summary}</p>

          <div style={styles.cardFooter}>
            {/* 위치 및 작성일 */}
            <div style={styles.meta}>
              <span>{item.region}</span>
              <span style={styles.dot} />
              <span>{item.date}</span>
            </div>

            {/* 댓글 및 좋아요 */}
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

export default MyComments;
