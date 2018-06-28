import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory as history } from "react-router-3";
import { Provider } from 'react-redux';
import store from '../store.js';

import Board from './components/Board.jsx';

const App = () => {

  const redirectHome = () => {
    history.push('/home/');
    return null;
  }

  
  return (
    <Router history={history}>
      <Route
        component={redirectHome}
        path="/"
      />
      <Route
        component={Board}
        path="/:notebook"
      />
    </Router>
  );
  
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));

export default App;