import React from 'react';

const Header = ({ onImportYouTube }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Blaash</h1>
      <button onClick={onImportYouTube} style={styles.button}>
        Import from YouTube
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Header;
