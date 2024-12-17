import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/league">League</Link></li>
        <li><Link to="/store">Store</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;