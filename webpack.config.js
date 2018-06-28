
const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.join(__dirname, '/app/client');
const DIST_DIR = path.join(__dirname, '/app/public/dist');

module.exports = {
  context: __dirname + '/',
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'app-client.js'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2']
        },
      },
    ],
  }
};
