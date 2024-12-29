import React from 'react';
import { useDrag } from 'react-dnd';

const PlaylistCard = ({ playlist, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'playlist',
    item: { id: playlist.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      onClick={() => onClick(playlist.id)}
      style={{
        ...styles.card,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img src={playlist.thumbnail} alt={playlist.name} style={styles.image} />
      <h3 style={styles.name}>{playlist.name}</h3>
    </div>
  );
};

const styles = {
  card: {
    width: '200px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '4px',
  },
  name: {
    marginTop: '10px',
    fontSize: '16px',
  },
};

export default PlaylistCard;
