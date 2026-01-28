import React from 'react';

const PageHeader = ({ title, description }) => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
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

export default PageHeader;
