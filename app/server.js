const express = require('express');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, './public');
const DIST_DIR = path.join(PUBLIC_DIR, './dist');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const INDEX_FILE = path.join(PUBLIC_DIR, './index.html');

const app = express();

app.set('port', process.env.PORT || 9001);
app.use('/dist', express.static(DIST_DIR));
app.use('/images', express.static(IMAGES_DIR));

app.get('/', (req, res) => {
  res.sendFile(INDEX_FILE);
});

app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`);
});