import React from 'react';

const PlaylistPanel = ({ videos }) => {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Videos</h2>
      <ul style={styles.list}>
        {videos.map((video) => (
          <li key={video.id} style={styles.item}>
            <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
            <span>{video.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  panel: {
    width: '300px',
    padding: '20px',
    borderLeft: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  title: {
    marginBottom: '10px',
    fontSize: '18px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  thumbnail: {
    width: '50px',
    marginRight: '10px',
  },
};

export default PlaylistPanel;
