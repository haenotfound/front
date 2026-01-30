import React from 'react';

// 페이지 상단 타이틀
const MyPageTitle = ({ title, description }) => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      {/* 설명글이 존재할 때만 렌더링 될 예정 */}
      {description ? <p style={styles.description}>{description}</p> : null}
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '20px',
  },

  title: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#0B1215',
    letterSpacing: '-0.02em',
    margin: 0,
  },

  description: {
    fontSize: '18px',
    fontWeight: 400,
    color: '#8D8D8D',
    margin: 0,
  },
};

export default MyPageTitle;
