import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer >
      <p>&copy; 2025 Thebacha FPV Racing League. All rights reserved. <span style={{ fontSize: 'smaller' }}>| <Link to="/shop" style={{ color: 'inherit', textDecoration: 'underline' }}>Shop</Link></span></p>
      <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--white)' }}>Last modified: May 15, 2025</div>
      <p>Our organization is grateful for ongoing support from </p>
      <a href='https://www.nwtrpa.org&referred-by=thebachafpv.org' target='_blank'><img src="/assets/sponsors/NWTRPA-Logo.png" alt="Parks and Recreation Logo" style={{ maxWidth: '300px', height: 'auto' }} /></a>
      <br />

      <a href='https://www.nwtrpa.org/activate-nt&referred-by=thebachafpv.org' target='_blank'><img src="/assets/sponsors/activateNT-logo.jpg" alt="ActivateNT Logo" style={{ maxWidth: '200px', height: 'auto' }} /></a>

    </footer>
  );
};

export default Footer;