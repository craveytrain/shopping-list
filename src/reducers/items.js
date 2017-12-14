/* eslint-disable default-case */
import { combineReducers } from 'redux';
import { omit } from 'lodash';
import { TypeKeys } from 'actions/items';

const item = (state, action) => {
  switch (action.type) {
    case TypeKeys.ADD:
      return {
        ...action.item,
        checked: false
      };

    case TypeKeys.TOGGLE:
      return {
        ...state,
        checked: !state.checked
      };

    case TypeKeys.NAME:
      return {
        ...state,
        name: action.name
      };

    case TypeKeys.CATEGORIZE:
      return {
        ...state,
        categoryId: action.categoryId
      };
  }

  // otherwise, just return the state
  return state;
};

const itemsById = (state = {}, action) => {
  switch (action.type) {
    case TypeKeys.ADD:
      return {
        ...state,
        [action.item.id]: item(undefined, action)
      };

    case TypeKeys.REMOVE:
      return omit(state, [ action.id ]);

    case TypeKeys.TOGGLE:
    case TypeKeys.NAME:
    case TypeKeys.CATEGORIZE:
      return {
        ...state,
        [action.id]: item(state[action.id], action)
      };
  }

  // otherwise, just return the state
  return state;
};

const allItems = (state = [], action) => {
  switch (action.type) {
    case TypeKeys.ADD:
      return [
        ...state,
        action.item.id
      ];

    case TypeKeys.REMOVE:
      return state.filter(id => id !== action.id);
  }

  // otherwise, just return the state
  return state;
};

export default combineReducers({
  byId: itemsById,
  allIds: allItems
});
