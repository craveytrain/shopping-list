import { TypeKeys } from 'actions/categories';
import generateId from 'lib/generateId';

const category = (state, action) => {
  // this is not the droid you are looking for
  // works because ADD_CATEGORY isn't passed a state
  if (state && state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case TypeKeys.ADD:
      return {
        name: action.category.name,
        id: generateId(action.category.name)
      };

    case TypeKeys.NAME:
      return {
        ...state,
        name: action.name
      };

    default:
  }

  // otherwise, just return the state
  return state;
};

const categories = (state = [], action) => {
  switch (action.type) {
    case TypeKeys.SET:
      return action.categories;

    case TypeKeys.ADD:
      return [
        ...state,
        category(undefined, action)
      ];

    case TypeKeys.REMOVE:
      return state.filter(f => f.id !== action.id);

    case TypeKeys.NAME:
      return state.map(i => category(i, action));

    default:
  }

  // otherwise, just return the state
  return state;
};

export default categories;
