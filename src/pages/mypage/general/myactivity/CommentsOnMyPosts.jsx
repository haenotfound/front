import React from "react";

// 마이페이지_내 게시글에 달린 댓글 목록
const CommentsOnMyPosts = () => {
  const myActivities = [
    {
      id: 1,
      title: "홈프로텍터",
      summary: "팥보다 슈크림이 더 맛있어요! 추천드립니다 ㅋㅋ",
      region: "역삼동",
      date: "25.12.28",
      likes: 1,
      comments: 0,
    },

    {
      id: 2,
      title: "리오",
      summary:
        "사고가 발생했다는 소식에 마음이 쓰이네요. 무엇보다 인명 피해 없이 잘 마무리되어야 할 텐데요. 모두 안전 운전하시길 바랍니다. 모두 안전운전하시길..",
      region: "역삼동",
      date: "25.12.28",
      likes: 1,
      comments: 0,
    },
  ];

  return (
    <section style={styles.cardList}>
      {myActivities.map((item) => (
        <article key={item.id} style={styles.card}>
          <div style={styles.titleRow}>
            {/* 유저 정보 및 게시글 제목 영역 */}
            <span style={styles.profilePlaceholder} aria-hidden="true" />
            <h4 style={styles.cardTitle}>{item.title}</h4>
          </div>

          <p style={styles.cardSummary}>{item.summary}</p>
          
          <div style={styles.cardFooter}>
            {/* 게시물 메타 정보 */}
            <div style={styles.meta}>
              <span>{item.region}</span>
              <span style={styles.dot} />
              <span>{item.date}</span>
            </div>

            {/* 인터랙션(좋아요, 댓글만 표시) */}
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
    margin: 0,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "0 0 10px",
  },

  profilePlaceholder: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    border: "1px solid #D1D5DB",
    flexShrink: 0,
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

export default CommentsOnMyPosts;
