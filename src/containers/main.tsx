import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from 'pages/lists';
import Home from 'pages/home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/lists" component={ListPage}/>
    </Switch>
  </main>
);

export default Main;
