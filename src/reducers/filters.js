import { TypeKeys } from 'actions/filters';

const filters = (state = {}, action) => {
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
