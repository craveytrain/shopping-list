import generateId from 'lib/generateId';

export const TypeKeys = {
  ADD: 'ADD_ITEM',
  REMOVE: 'REMOVE_ITEM',
  TOGGLE: 'TOGGLE_ITEM',
  NAME: 'NAME_ITEM',
  CATEGORIZE: 'CATEGORIZE_ITEM'
};

export const addItem = item => {
  const id = item.id || generateId(typeof item === 'string' ? item : item.name);

  return {
    type: TypeKeys.ADD,
    item: typeof item === 'string' ? { name: item, id } : { ...item, id }
  };
};

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

export const categorizeItem = (id, categoryId) => ({
  type: TypeKeys.CATEGORIZE,
  id,
  categoryId
});
