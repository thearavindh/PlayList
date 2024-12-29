import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const sendOtp = (email) => {
  return axios.post(`${API_URL}/auth/send-otp`, { email });
};

export const verifyOtp = (email, otp) => {
  return axios.post(`${API_URL}/auth/verify-otp`, { email, otp });
};

export const fetchYouTubePlaylists = (token) => {
  return axios.get(`${API_URL}/youtube/playlists`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const fetchVideos = (playlistId) => {
  return axios.get(`${API_URL}/youtube/videos/${playlistId}`);
};
