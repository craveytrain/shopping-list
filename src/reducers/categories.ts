import {
  SET_CATEGORIES,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_CATEGORY_NAME,
  CategoryProps
} from 'actions/categories';
import generateId from 'lib/generateId';

export interface ActionProps {
  type: string;
  categories?: CategoryProps[];
  category?: CategoryProps;
  id?: string;
  name?: string;
}

const category = (state: object, action: ActionProps) => {
  // this is not the droid you are looking for
  // works because ADD_CATEGORY isn't passed a state
  if (state && state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case ADD_CATEGORY:
      return {
        name: action.category.name,
        id: generateId(action.category.name)
      };

    case SET_CATEGORY_NAME:
      return {
        ...state,
        name: action.name
      };

    default:
  }

  // otherwise, just return the state
  return state;
};

const categories = (state = [], action: object) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;

    case ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ];

    case REMOVE_CATEGORY:
      return state.filter(f => f.id !== action.id);

    case SET_CATEGORY_NAME:
      return state.map(i => category(i, action));

    default:
  }

  // otherwise, just return the state
  return state;
};

export default categories;
