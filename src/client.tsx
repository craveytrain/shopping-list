import * as React from 'react';
import { hydrate } from 'react-dom';
/*import { createStore } from 'redux';*/
/*import { Provider } from 'react-redux';*/
import App from 'containers/app';
import { BrowserRouter } from 'react-router-dom';
/*import counterApp from './reducers';*/

/*const { lists } = require('data');*/

// Grab the state from a global variable injected into the server-generated HTML
/*const preloadedState = window.__PRELOADED_STATE__;*/

// Allow the passed state to be garbage-collected
/*delete window.__PRELOADED_STATE__;*/

// Create Redux store with initial state
/*const store = createStore(counterApp, preloadedState);*/

/*hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);*/
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);