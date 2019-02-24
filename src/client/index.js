import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Wrapper from './src/views/Wrapper';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Wrapper />
  </Router>,
  document.getElementById('root')
);