import { combineReducers } from 'redux';

import items from './items';
import categories from './categories';
import filters from './filters';

export default combineReducers({
  categories,
  items,
  filters
});
