const mongoose = require('mongoose');
const { MONGO_URI } = require('../config.js');
const Note = require('./models/note.js');

mongoose.Promise = Promise;

module.exports = {

  addNote: function(noteObj) {
    delete noteObj._id;
    const note = new Note(noteObj);
    return note.save().then((document) => {
      return document._id;
    }).catch((err) => {
      throw err;
    });
  },

  connect: function() {
    mongoose.connect(MONGO_URI).then((db) => {
      console.log('Successfully connected to mongo');
    }).catch((err) => {
      throw err;
    });
  },

  deleteNote: function(id) {
    Note.findByIdAndRemove(id).exec();
  },

  getAllNotes: function() {
    return Note.find({});
  },

  updatePosition: function(id, pos) {
    return Note.findOneAndUpdate({ _id: id }, { position: pos });
  },

  updateSize: function(id, obj) {
    const { dimensions } = obj;
    return Note.findOneAndUpdate({ _id: id }, { dimensions });
  }

}