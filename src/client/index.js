import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Wrapper from './src/views/Wrapper';
// import configureStore from '../client/services/store/configureStore';
// import routes from './routes';

// const preloadedState = window.__PRELOADED_STATE__;

// delete window.__PRELOADED_STATE__;

// const store = configureStore(preloadedState);

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Wrapper />
  </Router>,
  document.getElementById('root')
);