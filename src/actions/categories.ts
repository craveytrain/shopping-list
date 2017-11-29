export interface CategoryProps {
  name: string;
  id?: string;
}

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const setCategories = (categories: CategoryProps[]) => ({
  type: SET_CATEGORIES,
  categories
});

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const addCategory = (category: CategoryProps) => ({
  type: ADD_CATEGORY,
  category
});

export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const removeCategory = (id: string) => ({
  type: REMOVE_CATEGORY,
  id
});

export const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
export const setCategoryName = (id: string, name: string) => ({
  type: SET_CATEGORY_NAME,
  id,
  name
});
