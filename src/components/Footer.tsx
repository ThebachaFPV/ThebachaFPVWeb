import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer >
      <p>&copy; 2025 Thebacha FPV Racing League. All rights reserved. <span style={{fontSize: 'smaller'}}>| <a href="/shop" style={{color: 'inherit', textDecoration: 'underline'}}>Shop</a></span></p>
      <div style={{fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--white)'}}>Last modified: May 6, 2025</div>
    </footer>
  );
};

export default Footer;