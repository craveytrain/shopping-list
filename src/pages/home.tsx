import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>

    <ul>
      <li><Link to="/lists">Lists</Link></li>
      <li><Link to="/lists/groceries">Groceries</Link></li>
    </ul>
  </div>
);

export default Home;
