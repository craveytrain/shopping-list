import { Item } from 'actions/items';
import { Category } from 'actions/categories';

const items = [
  {
    name: 'Steak',
    id: 'steak',
    checked: false,
    category: 'meat'
  },
  {
    name: 'Potatoes',
    id: 'potatoes',
    checked: false,
    category: 'produce'
  }
];

const categories = [
  {
    name: 'Meat',
    id: 'meat'
  },
  {
    name: 'Produce',
    id: 'produce'
  }
];

export interface State {
  items: Item[];
  categories: Category[];
}

export default {
  items,
  categories
};
