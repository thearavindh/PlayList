const express = require('express');
const { getPlaylists, saveLayout, addPlaylist } = require('./controllers/playlistController');

const router = express.Router();

router.get('/', getPlaylists);

router.post('/save-layout', saveLayout);

router.post('/add', addPlaylist);

module.exports = router;
