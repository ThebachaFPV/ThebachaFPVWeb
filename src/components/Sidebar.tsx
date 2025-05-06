import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: 300, background: 'var(--dark-gray)', color: 'var(--white)', padding: '1.5rem', borderLeft: '2px solid var(--darker-blue)', position: 'fixed', right: 0, top: 0, height: '100vh', overflowY: 'auto', zIndex: 1000 }}>
      <h2 style={{ color: 'var(--lighter-blue)' }}>Current Events</h2>
      <ul style={{ marginBottom: '2rem' }}>
        <li><b>Every Wednesday:</b> Training/Practice<br />Uncle Gabe's Friendship Center, 6pm–9pm</li>
        <li><b>May 11, 2025:</b> Training/Practice<br />The Fort Smith Recreation Center Gym, 2pm–5pm</li>
        <li><b>May 25, 2025:</b> Training/Practice<br />The Fort Smith Recreation Center Gym, 2pm–5pm</li>
        <li><b>June 8, 2025:</b> Training/Practice<br />The Fort Smith Recreation Center Gym, 2pm–5pm</li>
        <li><b>June 22, 2025:</b> Training/Practice<br />The Fort Smith Recreation Center Gym, 2pm–5pm</li>
      </ul>
      <h2 style={{ color: 'var(--lighter-blue)' }}>Event Calendar</h2>
      <div style={{ background: 'var(--darker-blue)', padding: '1rem', borderRadius: 8, textAlign: 'center' }}>
        <p>Event calendar coming soon.</p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'var(--darker-blue)', color: 'var(--white)', fontSize: '0.9rem', padding: '0.5rem 1rem', textAlign: 'center', borderTop: '1px solid var(--lighter-blue)' }}>
        Last modified: May 6, 2025
      </div>
    </aside>
  );
};

export default Sidebar;
