/* eslint-disable default-case */
import { combineReducers } from 'redux';
import { omit } from 'lodash';
import { TypeKeys } from 'actions/categories';

const category = (state, action) => {
  switch (action.type) {
    case TypeKeys.ADD:
      return action.category;

    case TypeKeys.NAME:
      return {
        ...state,
        name: action.name
      };
  }

  // otherwise, just return the state
  return state;
};

const categoriesById = (state = {}, action) => {
  switch (action.type) {
    case TypeKeys.ADD:
      return {
        ...state,
        [action.category.id]: category(undefined, action)
      };

    case TypeKeys.REMOVE:
      return omit(state, [ action.id ]);

    case TypeKeys.NAME:
      return {
        ...state,
        [action.id]: category(state[action.id], action)
      };
  }

  // otherwise, just return the state
  return state;
};

const allCategories = (state = [], action) => {
  switch (action.type) {
    case TypeKeys.ADD:
      return [
        ...state,
        action.category.id
      ];

    case TypeKeys.REMOVE:
      return state.filter(id => id !== action.id);
  }

  // otherwise, just return the state
  return state;
};

export default combineReducers({
  byId: categoriesById,
  allIds: allCategories
});
