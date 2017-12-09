import { extname, resolve } from 'path';
import { readFileSync } from 'fs';
import express from 'express';
import React from 'react';
import morgan from 'morgan';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import template from './template';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import state from 'data/state';

import App from 'containers/app';
import reducer from 'reducers';

const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 3001;

const store = createStore(
  reducer,
  state
);

const app = express();
app.use(morgan('dev'));

let manifest;
let normalizeAssets;

if (env === 'production') {
  // tslint:disable-next-line no-var-requires
  const { dest } = require('../webpack.common');
  manifest = JSON.parse(readFileSync(resolve(__dirname, '..', dest, 'manifest.json'), 'utf-8'));
}
else {
  // tslint:disable-next-line no-var-requires
  const config = require('../webpack.dev');
  const compiler = webpack(config);
  // Serve static files
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    serverSideRender: true
  }));

  // HMR
  app.use(webpackHotMiddleware(compiler));

  normalizeAssets = (assets) => Object.keys(assets).reduce((obj, chunk) => {
    assets[chunk].forEach((file) => {
      obj[`${chunk}${extname(file)}`] = file;
    });

    return obj;
  }, {});
}

// This is fired every time the server side receives a request
app.use((req, res) => {
  const context = {};

  if (env !== 'production') {
    manifest = normalizeAssets(res.locals.webpackStats.toJson().assetsByChunkName);
  }

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(template({
    html,
    assets: manifest,
    state: store.getState()
  }));
});

app.listen(port);
