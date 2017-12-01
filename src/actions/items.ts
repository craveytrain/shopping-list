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
  TOGGLE = 'TOGGLE_ITEM',
  NAME = 'NAME_ITEM',
  CATEGORIZE = 'CATEGORIZE_ITEM'
}

export interface SetItemsAction {
  type: TypeKeys.SET;
  items: Item[];
  id?: string; // TODO: ghost prop to pass typechecking
}

export interface AddItemAction {
  type: TypeKeys.ADD;
  item: Item;
  id?: string; // TODO: ghost prop to pass typechecking
}

export interface RemoveItemAction {
  type: TypeKeys.REMOVE;
  id: string;
}

export interface ToggleItemAction {
  type: TypeKeys.TOGGLE;
  id: string;
}

export interface NameItemAction {
  type: TypeKeys.NAME;
  id: string;
  name: string;
}

export interface CategorizeItemAction {
  type: TypeKeys.CATEGORIZE;
  id: string;
  category: string;
}

export type ActionTypes =
  | SetItemsAction
  | AddItemAction
  | RemoveItemAction
  | ToggleItemAction
  | NameItemAction
  | CategorizeItemAction;

export const setItems = (items: Item[]): SetItemsAction => ({
  type: TypeKeys.SET,
  items
});

export const addItem = (item: Item): AddItemAction => ({
  type: TypeKeys.ADD,
  item: typeof item === 'string' ? { name: item } : item
});

export const removeItem = (id: string): RemoveItemAction => ({
  type: TypeKeys.REMOVE,
  id
});

export const toggleItem = (id: string): ToggleItemAction => ({
  type: TypeKeys.TOGGLE,
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
