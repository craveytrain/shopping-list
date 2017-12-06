import { extname, resolve } from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as React from 'react';
import * as morgan from 'morgan';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import template from './template';
import * as webpack from 'webpack';
import * as  webpackDevMiddleware from 'webpack-dev-middleware';
import * as  webpackHotMiddleware from 'webpack-hot-middleware';

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

let manifest: any;
let normalizeAssets: (assets: any) => any;

if (env === 'production') {
  // tslint:disable-next-line no-var-requires
  const { dest } = require('../webpack.common');
  manifest = JSON.parse(fs.readFileSync(resolve(__dirname, '..', dest, 'manifest.json'), 'utf-8'));
} else {
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

  normalizeAssets = (assets: any): any => Object.keys(assets).reduce((obj: any, chunk: string): any => {
    assets[chunk].forEach((file: string) => {
      obj[`${chunk}${extname(file)}`] = file;
    });

    return obj;
  }, {});
}

// This is fired every time the server side receives a request
app.use((req: any, res: any) => {
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
