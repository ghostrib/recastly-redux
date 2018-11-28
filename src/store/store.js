import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

let store = createStore(rootReducer);
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
