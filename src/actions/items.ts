export interface Item {
  name: string;
  id?: string;
  checked?: boolean;
  category?: string;
}

export enum TypeKeys {
  SET = 'SET_ITEMS',
  ADD = 'ADD_ITEM',
  REMOVE = 'REMOVE_ITEM',
  CHECK = 'CHECK_ITEM',
  UNCHECK = 'UNCHECK_ITEM',
  NAME = 'NAME_ITEM',
  CATEGORIZE = 'CATEGORIZE_ITEM',
}

interface SetItemsAction {
  type: TypeKeys.SET;
  items: Item[];
  id?: string; // TODO: ghost prop to pass typechecking
}

interface AddItemAction {
  type: TypeKeys.ADD;
  item: Item;
  id?: string; // TODO: ghost prop to pass typechecking
}

interface RemoveItemAction {
  type: TypeKeys.REMOVE;
  id: string;
}

interface CheckItemAction {
  type: TypeKeys.CHECK;
  id: string;
}

interface UncheckItemAction {
  type: TypeKeys.UNCHECK;
  id: string;
}

interface NameItemAction {
  type: TypeKeys.NAME;
  id: string;
  name: string;
}

interface CategorizeItemAction {
  type: TypeKeys.CATEGORIZE;
  id: string;
  category: string;
}

export type ActionTypes =
  | SetItemsAction
  | AddItemAction
  | RemoveItemAction
  | CheckItemAction
  | UncheckItemAction
  | NameItemAction
  | CategorizeItemAction;

export const setItems = (items: Item[]): SetItemsAction => ({
  type: TypeKeys.SET,
  items
});

export const addItem = (item: Item): AddItemAction => ({
  type: TypeKeys.ADD,
  item
});

export const removeItem = (id: string): RemoveItemAction => ({
  type: TypeKeys.REMOVE,
  id
});

export const checkItem = (id: string): CheckItemAction => ({
  type: TypeKeys.CHECK,
  id
});

export const uncheckItem = (id: string): UncheckItemAction => ({
  type: TypeKeys.UNCHECK,
  id
});

export const nameItem = (id: string, name: string): NameItemAction => ({
  type: TypeKeys.NAME,
  id,
  name
});

export const categorizeItem = (id: string, category: string): CategorizeItemAction => ({
  type: TypeKeys.CATEGORIZE,
  id,
  category
});
