import {
  SET_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  CHECK_ITEM,
  UNCHECK_ITEM,
  SET_TITLE,
  SET_CATEGORY
} from 'actions/items';
import generateId from 'lib/generateId';

export interface ActionProps {
  type: string;
  item?: object;
  id?: string;
  name?: string;
  category?: string;
}

const item = (state: object, action: ActionProps) => {
  // this is not the droid you are looking for
  // works because ADD_ITEM isn't passed a state
  if (state && state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case ADD_ITEM:
      return {
        name: action.item,
        id: generateId(action.item),
        checked: false
      };

    case CHECK_ITEM:
      return {
        ...state,
        checked: true
      };

    default:
  }

  // otherwise, just return the state
  return state;
};

const items = (state = [], action: object) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items;

    case ADD_ITEM:
      return [
        ...state,
        item(undefined, action)
      ];

    case REMOVE_ITEM:
      return state.filter(f => f.id !== action.id);

    case CHECK_ITEM:
      return state.map(i => item(i, action));

    default:
  }

  // otherwise, just return the state
  return state;
};

export default items;
