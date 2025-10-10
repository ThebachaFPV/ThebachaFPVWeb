import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Import the PNG logo

const NavBar: React.FC = () => {
  console.log('NavBar rendered');
  return (
    <nav>
      <img className='nav-logo' src={logo} alt="League Logo" />  {/* Use the PNG logo */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wx">Weather</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/league">League</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/regulations">Regulations</Link></li>
        <li><Link to="/gettingalicence">Getting a Licence</Link></li>
        <li><Link to="/board">Board</Link></li>
        {/* Removed Store link */}
      </ul>
    </nav>
  );
};

export default NavBar;