export interface Category {
  name: string;
  id?: string;
}

export enum TypeKeys {
  SET = 'SET_CATEGORIES',
  ADD = 'ADD_CATEGORY',
  REMOVE = 'REMOVE_CATEGORY',
  NAME = 'SET_CATEGORY_NAME',
}

interface SetCategoriesAction {
  type: TypeKeys.SET;
  categories: Category[];
  id?: string; // TODO: ghost prop to pass typechecking
}

interface AddCategoryAction {
  type: TypeKeys.ADD;
  category: Category;
  id?: string; // TODO: ghost prop to pass typechecking
}

interface RemoveCategoryAction {
  type: TypeKeys.REMOVE;
  id: string;
}

interface NameCategoryAction {
  type: TypeKeys.NAME;
  id: string;
  name: string;
}

export type ActionTypes =
  | SetCategoriesAction
  | AddCategoryAction
  | RemoveCategoryAction
  | NameCategoryAction;

export const setCategories = (categories: Category[]): SetCategoriesAction => ({
    type: TypeKeys.SET,
    categories
});

export const addCategory = (category: Category): AddCategoryAction => ({
  type: TypeKeys.ADD,
  category
});

export const removeCategory = (id: string): RemoveCategoryAction => ({
  type: TypeKeys.REMOVE,
  id
});

export const nameCategory = (id: string, name: string): NameCategoryAction => ({
  type: TypeKeys.NAME,
  id,
  name
});
