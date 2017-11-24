import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import { compile } from 'ejs';
import * as React from 'react';
import * as morgan from 'morgan';
import { StaticRouter } from 'react-router-dom';
/*import { createStore } from 'redux';*/
/*import { Provider } from 'react-redux';*/
/*import counterApp from './reducers';*/
import App from 'containers/app';
import { renderToString } from 'react-dom/server';

const view = fs.readFileSync(path.join(__dirname, 'views', 'layout.ejs'), 'utf-8');
const layout = compile(view);

const app = express();
app.use(morgan('dev'));
const port = 3001;

// This is fired every time the server side receives a request
app.use((req: any, res: any) => {
  const context = {};
  // Create a new Redux store instance
  /*const store = createStore(counterApp);*/

   // Render the component to a string
  /*const html = renderToString(
     <Provider store={store}>
       <App />
     </Provider>
   );*/
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

   // Grab the initial state from our Redux store
  /*const preloadedState = store.getState();*/

   // Send the rendered page back to the client
  /*res.send(renderFullPage(html, preloadedState));*/
  res.send(layout({html}));
});

app.listen(port);
