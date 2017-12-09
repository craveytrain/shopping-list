export const TypeKeys = {
  SET: 'SET_ITEMS',
  ADD: 'ADD_ITEM',
  REMOVE: 'REMOVE_ITEM',
  TOGGLE: 'TOGGLE_ITEM',
  NAME: 'NAME_ITEM',
  CATEGORIZE: 'CATEGORIZE_ITEM'
};

export const setItems = items => ({
  type: TypeKeys.SET,
  items
});

export const addItem = item => ({
  type: TypeKeys.ADD,
  item: typeof item === 'string' ? { name: item } : item
});

export const removeItem = id => ({
  type: TypeKeys.REMOVE,
  id
});

export const toggleItem = id => ({
  type: TypeKeys.TOGGLE,
  id
});

export const nameItem = (id, name) => ({
  type: TypeKeys.NAME,
  id,
  name
});

export const categorizeItem = (id, category) => ({
  type: TypeKeys.CATEGORIZE,
  id,
  category
});
