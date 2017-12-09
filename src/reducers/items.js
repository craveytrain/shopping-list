import { TypeKeys } from 'actions/items';
import generateId from 'lib/generateId';

const item = (state, action) => {
  // this is not the droid you are looking for
  // works because ADD_ITEM isn't passed a state
  if (state && state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case TypeKeys.ADD:
      return {
        name: action.item.name,
        id: action.item.id || generateId(action.item.name),
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
        category: action.category
      };

    default:
  }

  // otherwise, just return the state
  return state;
};

const items = (state = [], action) => {
  switch (action.type) {
    case TypeKeys.SET:
      return action.items;

    case TypeKeys.ADD:
      return [
        ...state,
        item(undefined, action)
      ];

    case TypeKeys.REMOVE:
      return state.filter(f => f.id !== action.id);

    case TypeKeys.TOGGLE:
    case TypeKeys.NAME:
    case TypeKeys.CATEGORIZE:
      return state.map(i => item(i, action));

    default:
  }

  // otherwise, just return the state
  return state;
};

export default items;
