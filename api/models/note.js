const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: String,
  position: Object, // e.g. { x: 300, y: 1000 }
  dimensions: Object, // e.g. { height: 250, width: 300 }
  tags: {
    type: Array,
    default: [],
  },
  parent: String,
  notebook: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Note', noteSchema);
