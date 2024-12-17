
import React from 'react';
import { NavLink } from 'react-router-dom';

const StoreNavBar: React.FC = () => {
  return (
    <nav className="store-nav">
      <ul>
        <li><NavLink to="/store#drones">Drones</NavLink></li>
        <li><NavLink to="/store#drone-parts">Drone Parts</NavLink></li>
        <li><NavLink to="/store#radios">Radios</NavLink></li>
        <li><NavLink to="/store#radio-accessories">Radio Accessories</NavLink></li>
        <li><NavLink to="/store#batteries">Batteries</NavLink></li>
        <li><NavLink to="/store#chargers">Chargers</NavLink></li>
        <li><NavLink to="/store#goggles">Goggles</NavLink></li>
        <li><NavLink to="/store#general-accessories">General Accessories</NavLink></li>
      </ul>
    </nav>
  );
};

export default StoreNavBar;