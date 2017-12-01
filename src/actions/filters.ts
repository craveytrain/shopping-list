export type Visability = 'SHOW_ALL' | 'SHOW_CHECKED' | 'SHOW_UNCHECKED';

export interface Filters {
  visibility?: Visability;
}

export enum TypeKeys {
  VISIBILITY = 'VISIBILITY_FILTER'
}

interface VisibilityFilter {
  type: TypeKeys.VISIBILITY;
  visibility: Visability;
}

export type ActionTypes = VisibilityFilter;

export const visibilityFilter = (visibility: Visability): VisibilityFilter => ({
  type: TypeKeys.VISIBILITY,
  visibility
});
