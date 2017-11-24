import * as React from 'react';
import { Link } from 'react-router-dom';
const { lists } = require('data');

const ListOfLists = () => (
  <div>
    <ul>
      {lists.map((list: any) => <li key={list.id}><Link to={`/lists/${list.id}`}>{list.title}</Link></li>)}
    </ul>
  </div>
);

export default ListOfLists;
