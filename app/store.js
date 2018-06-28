import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers/notesReducer.js';

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
