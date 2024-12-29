const Playlist = require('../models/Playlist');

exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find(); 
    res.status(200).json(playlists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching playlists' });
  }
};

exports.createPlaylist = async (req, res) => {
  const { title, thumbnail } = req.body;

  try {
    const newPlaylist = new Playlist({ title, thumbnail });
    await newPlaylist.save();
    res.status(201).json(newPlaylist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating playlist' });
  }
};

exports.saveLayout = async (req, res) => {
  const { layout } = req.body; 

  try {
    const playlist = await Playlist.findOne({ _id: req.params.id });

    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    playlist.layout = layout;
    await playlist.save();

    res.status(200).json({ message: 'Layout saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving layout' });
  }
};

exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching playlist' });
  }
};
