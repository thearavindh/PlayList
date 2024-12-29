import React, { useState } from 'react';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';
import PlaylistPanel from '../components/PlaylistPanel';

const dummyPlaylists = [
  { id: 1, name: 'Playlist 1', thumbnail: '/thumbnail1.jpg' },
  { id: 2, name: 'Playlist 2', thumbnail: '/thumbnail2.jpg' },
  { id: 3, name: 'Playlist 3', thumbnail: '/thumbnail3.jpg' },
];

const dummyVideos = [
  { id: 1, title: 'Video 1', thumbnail: '/video1.jpg' },
  { id: 2, title: 'Video 2', thumbnail: '/video2.jpg' },
  { id: 3, title: 'Video 3', thumbnail: '/video3.jpg' },
];

const Home = () => {
  const [playlists, setPlaylists] = useState(dummyPlaylists);
  const [videos, setVideos] = useState([]);

  const handleImportYouTube = () => {
    alert('YouTube playlists imported!');
  };

  const handlePlaylistClick = (id) => {
    setVideos(dummyVideos);
  };

  return (
    <div style={styles.container}>
      <Header onImportYouTube={handleImportYouTube} />
      <div style={styles.content}>
        <div style={styles.playlists}>
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onClick={handlePlaylistClick}
            />
          ))}
        </div>
        <PlaylistPanel videos={videos} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
  playlists: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    gap: '10px',
  },
};

export default Home;
