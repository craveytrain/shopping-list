export const TypeKeys = {
  VISIBILITY: 'VISIBILITY_FILTER'
};

export const visibilityFilter = visibility => ({
  type: TypeKeys.VISIBILITY,
  visibility
});
