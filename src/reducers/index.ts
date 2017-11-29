import { combineReducers } from 'redux';
import * as reduceReducers from 'reduce-reducers';
import { SET_STATE } from 'actions';
import items from './items';
import categories from './categories';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...action.state
      };

    default:
  }

  // otherwise, just return the state
  return state;
};

export default reduceReducers(
  combineReducers({
    items,
    categories
  }),
  reducer
);
