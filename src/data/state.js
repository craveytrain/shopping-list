export const items = {
  byId: {
    steak: {
      id: 'steak',
      name: 'Steak',
      checked: false,
      categoryId: 'meat'
    },
    potatoes: {
      id: 'potatoes',
      name: 'Potatoes',
      checked: false,
      categoryId: 'produce'
    }
  },
  allIds: [ 'steak', 'potatoes' ]
};

export const categories = {
  byId: {
    meat: {
      id: 'meat',
      name: 'Meat'
    },
    produce: {
      id: 'produce',
      name: 'Produce'
    }
  },
  allIds: [ 'meat', 'produce' ]
};

export default {
  items,
  categories,
  filters: {
    visibility: 'SHOW_ALL'
  }
};
