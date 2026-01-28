import React from 'react';

const TabMenu = ({ tabs = [], activeId, onChange }) => {
  return (
    <nav style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange && onChange(tab.id)}
            style={{
              ...styles.buttonBase,
              ...(isActive ? styles.buttonActive : styles.buttonInactive),
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '24px',
    borderBottom: '1px solid #E6E8EC',
    marginBottom: '40px',
  },
  buttonBase: {
    padding: '10px 2px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'inherit',
  },
  buttonActive: {
    width: '120px',
    color: '#2563EB',
    borderBottom: '2.5px solid #2563EB',
  },
  buttonInactive: {
    color: '#B5B5B5',
    borderBottom: '2px solid transparent',
  },
};

export default TabMenu;
