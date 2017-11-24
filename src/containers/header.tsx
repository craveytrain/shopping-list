import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lists">Lists</Link></li>
        <li><Link to="/lists/groceries">Groceries</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
