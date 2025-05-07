import React from 'react';
import EventCalendar from './EventCalendar';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: 300, background: 'var(--dark-gray)', color: 'var(--white)', padding: '1.5rem', borderLeft: '2px solid var(--darker-blue)', position: 'fixed', right: 0, top: 0, height: '100vh', overflowY: 'auto', zIndex: 1000 }}>
      <h2 style={{ color: 'var(--lighter-blue)' }}>Current Events</h2>
      <ul style={{ marginBottom: '2rem' }}>
        <li><b>Every Wednesday:</b> Training/Practice<br />Uncle Gabe's Friendship Center, 6pm–9pm</li>
        <li><b>Alternating Sundays:</b> Training/Practice<br />The Fort Smith Recreation Center Gym, 3:30pm–5pm</li>
        
      </ul>
      <h2 style={{ color: 'var(--lighter-blue)' }}>Event Calendar</h2>
      <EventCalendar />
    </aside>
  );
};

export default Sidebar;
