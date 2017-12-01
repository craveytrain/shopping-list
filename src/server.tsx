import * as path from 'path';
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
import config from '../webpack.config';

import state from 'data/state';

import App from 'containers/app';
import reducer from 'reducers';

const compiler = webpack(config);

const view = fs.readFileSync(path.join(__dirname, 'views', 'layout.ejs'), 'utf-8');
const layout = compile(view);

const store = createStore(
  reducer,
  state
);

const app = express();
app.use(morgan('dev'));
const port = 3001;

// Serve static files
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// This is fired every time the server side receives a request
app.use((req: any, res: any) => {
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(layout({
    html,
    state: serialize(store.getState())
  }));
});

app.listen(port);
