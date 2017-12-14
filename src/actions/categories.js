import generateId from 'lib/generateId';

export const TypeKeys = {
  ADD: 'ADD_CATEGORY',
  REMOVE: 'REMOVE_CATEGORY',
  NAME: 'SET_CATEGORY_NAME'
};

export const addCategory = category => {
  const id = category.id || generateId(typeof category === 'string' ? category : category.name);

  return {
    type: TypeKeys.ADD,
    category: typeof category === 'string' ? { name: category, id } : { ...category, id }
  };
};

export const removeCategory = id => ({
  type: TypeKeys.REMOVE,
  id
});

export const nameCategory = (id, name) => ({
  type: TypeKeys.NAME,
  id,
  name
});
