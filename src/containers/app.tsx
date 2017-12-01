import * as React from 'react';
import AddItem from 'containers/item-add';
import VisibleItemList from 'containers/visible-item-list';
import ItemToolbar from 'components/item-toolbar';

const App = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <ItemToolbar />
  </div>
);

export default App;
