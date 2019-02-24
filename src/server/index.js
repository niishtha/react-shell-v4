import '@babel/polyfill';
import express from 'express';
import path from 'path';
import React from 'react';
import { RouterContext, match } from 'react-router';
// import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import html from '../html';
import categories from './Categories';

const app = express();

app.use('/clarisights/dist/client', express.static('dist/client'));
app.use('/serviceWorker.js', express.static('dist/client/serviceWorker.js'));

app.get('/categories-data', (req, res, next) => {
  const categoriesData = categories.getCategoriesData();
  res.send(categoriesData);
});

app.use('*', (req, res) => {
  res.send(html())
});

app.listen(8000, () => {
  console.log('another-react-shell is running as development on port 8000');
});