import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Import the PNG logo

const NavBar: React.FC = () => {
  return (
    <nav>
      <img className='nav-logo' src={logo} alt="League Logo"  />  {/* Use the PNG logo */}
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