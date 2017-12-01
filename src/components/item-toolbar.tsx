import * as React from 'react';

import FilterLink from 'containers/filter-link';

const ItemToolbar = () => (
  <p>Show:
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_CHECKED">Checked</FilterLink>
    <FilterLink filter="SHOW_UNCHECKED">Unchecked</FilterLink>
  </p>
);

export default ItemToolbar;
