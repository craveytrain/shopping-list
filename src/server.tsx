import { join, basename, extname } from 'path';
import * as fs from 'fs';
import * as express from 'express';
import { compile } from 'ejs';
import * as React from 'react';
import * as morgan from 'morgan';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import * as serialize from 'serialize-javascript';
import * as webpack from 'webpack';
import * as  webpackDevMiddleware from 'webpack-dev-middleware';
import * as  webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev';

import state from 'data/state';

import App from 'containers/app';
import reducer from 'reducers';

const env = process.env.NODE_ENV || 'development';

const compiler = webpack(config);

const view = fs.readFileSync(join(__dirname, 'views', 'layout.ejs'), 'utf-8');
const layout = compile(view);

const store = createStore(
  reducer,
  state
);

const app = express();
app.use(morgan('dev'));
const port = 3001;

let manifest: any;
let normalizeAssets: (assets: any) => any;

if (env === 'production') {
  manifest = fs.readFileSync(join(config.output.path, 'manifest.json'), 'utf-8');
} else {
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

  res.send(layout({
    html,
    assets: manifest,
    state: serialize(store.getState())
  }));
});

app.listen(port);
