import * as React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'containers/app';
import { BrowserRouter } from 'react-router-dom';
import reducer from 'reducers';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = (window as any).__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete (window as any).__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(
  reducer,
  preloadedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
