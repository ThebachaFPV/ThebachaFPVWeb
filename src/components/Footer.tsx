import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer >
      <p>&copy; 2025 Thebacha FPV Racing League. All rights reserved. <span style={{fontSize: 'smaller'}}>| <Link to="/shop" style={{color: 'inherit', textDecoration: 'underline'}}>Shop</Link></span></p>
      <div style={{fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--white)'}}>Last modified: May 15, 2025</div>
    </footer>
  );
};

export default Footer;