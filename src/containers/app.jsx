import React from 'react';
import AddItem from 'containers/item-add';
import VisibleItemList from 'containers/visible-item-list';
import ListTabBar from 'components/list-tabbar';

const App = () => (
  <div>
    <ListTabBar />
    <VisibleItemList />
    <AddItem />
  </div>
);

export default App;
