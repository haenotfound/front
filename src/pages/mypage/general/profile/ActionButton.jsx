import React from 'react';

const ActionButton = ({
  primaryText = '저장하기',
  secondaryText = '취소하기',
  onPrimary,
  onSecondary,
}) => {
  return (
    <div style={styles.container}>
      <button type="button" onClick={onSecondary} style={styles.secondaryButton}>
        {secondaryText}
      </button>
      <button type="button" onClick={onPrimary} style={styles.primaryButton}>
        {primaryText}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    marginTop: '8px',
  },
  primaryButton: {
    height: '43px',
    width: '30px',
    padding: '0 18px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#2F5FFF',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  secondaryButton: {
    height: '40px',
    padding: '0',
    borderRadius: '6px',
    backgroundColor: '#FFFFFF',
    color: '#8D8D8D',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default ActionButton;
