import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListOfLists from 'components/list-of-lists';
import List from 'components/list';

const Lists = () => (
  <Switch>
    <Route exact path="/lists" component={ListOfLists} />
    <Route path="/lists/:list" component={List} />
  </Switch>
);

export default Lists;
