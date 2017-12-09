export const TypeKeys = {
  SET: 'SET_CATEGORIES',
  ADD: 'ADD_CATEGORY',
  REMOVE: 'REMOVE_CATEGORY',
  NAME: 'SET_CATEGORY_NAME'
};

export const setCategories = categories => ({
  type: TypeKeys.SET,
  categories
});

export const addCategory = category => ({
  type: TypeKeys.ADD,
  category
});

export const removeCategory = id => ({
  type: TypeKeys.REMOVE,
  id
});

export const nameCategory = (id, name) => ({
  type: TypeKeys.NAME,
  id,
  name
});
