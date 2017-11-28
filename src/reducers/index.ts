import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { SET_STATE } from 'actions';
import items from './items';

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
    items
  }),
  reducer
);
