export const SET_ITEMS = 'SET_ITEMS';
export const setItems = (items: object[]) => ({
  type: SET_ITEMS,
  items
});

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item: object) => ({
  type: ADD_ITEM,
  item
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = (id: string) => ({
  type: REMOVE_ITEM,
  id
});

export const CHECK_ITEM = 'CHECK_ITEM';
export const checkItem = (id: string) => ({
  type: CHECK_ITEM,
  id
});

export const UNCHECK_ITEM = 'UNCHECK_ITEM';
export const uncheckItem = (id: string) => ({
  type: UNCHECK_ITEM,
  id
});

export const SET_ITEM_NAME = 'SET_ITEM_NAME';
export const setItemName = (id: string, name: string) => ({
  type: SET_ITEM_NAME,
  id,
  name
});

export const SET_ITEM_CATEGORY = 'SET_ITEM_CATEGORY';
export const setItemCategory = (id: string, category: string) => ({
  type: SET_ITEM_CATEGORY,
  id,
  category
});
