import { TypeKeys, Filters, ActionTypes } from 'actions/filters';

const filters = (state: Filters = {}, action: ActionTypes): Filters => {
  switch (action.type) {
    case TypeKeys.VISIBILITY:
      return {
        ...state,
        visibility: action.visibility
      };

    default:
  }

  // otherwise, just return the state
  return state;
};

export default filters;
