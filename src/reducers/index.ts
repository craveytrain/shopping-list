import { combineReducers } from 'redux';

import items from './items';
import categories from './categories';
import filters from './filters';

import { Category } from 'actions/categories';
import { Filters } from 'actions/filters';
import { Item } from 'actions/items';

export interface State {
  categories: Category[];
  filters: Filters;
  items: Item[];
}

export default combineReducers({
  categories,
  filters,
  items
});
