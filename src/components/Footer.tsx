import React from 'react';
import { Link } from 'react-router-dom';
import ContactLink from './ContactLink';

// Neither of these is typed by hand any more. The footer carried
// "© 2025" and "Last modified: Oct 26, 2025" into November 2026 — both over a
// year stale, for the same reason the event calendar was: a date that only
// changes when a person remembers to change it will eventually be wrong, and
// nothing will report it.
const buildDate = new Date(__BUILD_DATE__);

const Footer: React.FC = () => {
  return (
    <footer >
      <p>&copy; {buildDate.getFullYear()} Thebacha FPV Racing League. All rights reserved. <span style={{ fontSize: 'smaller' }}>| <Link to="/shop" style={{ color: 'inherit', textDecoration: 'underline' }}>Shop</Link></span></p>
      <p style={{ marginTop: '0.25rem' }}>
        <ContactLink subject="Website enquiry">Contact us</ContactLink>
      </p>
      <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--white)' }}>
        Last modified:{' '}
        {buildDate.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}
      </div>
      <p>Our organization is grateful for ongoing support from </p>
      <a href='https://www.nwtrpa.org&referred-by=thebachafpv.org' target='_blank'><img src="/assets/sponsors/NWTRPA-Logo.png" alt="Parks and Recreation Logo" style={{ maxWidth: '300px', height: 'auto' }} /></a>
      <br />

      <a href='https://www.nwtrpa.org/activate-nt&referred-by=thebachafpv.org' target='_blank'><img src="/assets/sponsors/activateNT-logo.jpg" alt="ActivateNT Logo" style={{ maxWidth: '200px', height: 'auto' }} /></a>

    </footer>
  );
};

export default Footer;