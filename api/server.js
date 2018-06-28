const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const db = require('./db.js');

const app = express();
const { 
  addNote,
  deleteNote,
  getAllNotes,
  updatePosition,
  updateSize,
} = db;

db.connect();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/notes/:id', (req, res) => {
  const { id } = req.params;
  const requestedAll = (id.match(/all/i) !== null);
  if (requestedAll) {
    getAllNotes().then((data) => {
      res.json(data);
    }).catch((err) => {
      throw err;
    });
  } else {
    res.json({
      'err': 'this api currently only accepts "all" for note id',
    });
  }
});

app.post('/notes', (req, res) => {
  addNote(req.body).then((id) => {
    res.json({ id });
  }).catch((err) => {
    res.json({ status: 'FAIL' });
  });
});

app.patch('/notes/:id/position', (req, res) => {
  updatePosition(req.params.id, req.body.position).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(500);
  });
});

app.patch('/notes/:id/size', (req, res) => {
  updateSize(req.params.id, req.body).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(500);
  });
});

app.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id);
  res.sendStatus(200);
});

app.set('port', process.env.PORT || 9002);

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
