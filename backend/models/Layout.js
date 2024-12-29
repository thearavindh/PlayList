const mongoose = require('mongoose');

const layoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  layout: { type: Array, required: true },
});

module.exports = mongoose.model('Layout', layoutSchema);
