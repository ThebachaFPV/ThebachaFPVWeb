import React from 'react';
import avatarPlaceholder from '../assets/avatar-placeholder.png';
import badge from '../assets/badge.png';

const Membership: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
      <h1>Membership & Associate Membership</h1>
      <h2 style={{ color: '#00A9D1', marginTop: '0.5rem' }}>Join Our Community</h2>
      <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
        Thebacha FPV Racing League welcomes everyone—pit helpers, spotters, IT techs,
         mentors, coaches, parents, and more. Associate Membership is open to all who want to support,
         learn, or participate in the league. Full members are pilots, and non- pilots are Associate Members but all are valued 
         contributors to our community.
      </p>
      <img src={badge} alt="League Badge" style={{ width: '350px', borderRadius: 8, margin: '1rem 0' }} />
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Associate Membership Benefits</h2>
        <ul>
          <li>Access to all league events, races, and workshops</li>
          <li>Mentorship and training for all skill levels</li>         
          <li>Opportunities to help shape the league’s future</li>
          <li>Be part of a safe, inclusive, and innovative community</li>
        </ul>
      </section>
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Full Membership Benefits</h2>
        All benefits of Associate Membership plus:
        <ul>
          <li>Membership in <a href="https://www.maac.ca/">MAAC</a></li>          
          <li>Access to league Rentals</li>
          <li>Fly at our league Training/Practices/Events</li>
          <li>Mentoring and training for licencing</li>

        </ul>
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Associate Membership Roles</h2>
        <ul>          
          <li>Pit Helpers</li>
          <li>Spotters</li>
          <li>IT/Technical Support</li>
          <li>Mentors & Coaches</li>
          <li>Parents & Guardians</li>
          <li>General Volunteers</li>
        </ul>


      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Full Membership Roles</h2>
        <ul>          
          <li>Pilots - (see progression below)</li>
        </ul>
      </section>



      
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Pilot Progression Pathway</h2>
        <ol>
          <li><b>Simulator Training & Evaluation:</b> All aspiring pilots start here to build safe habits and basic skills.</li>
          <li><b>Basic FPV Skills Training & Evaluation:</b> Hands-on learning and assessment of core FPV flying skills.</li>
          <li><b>Indoor Participation:</b> After passing the above, members can join indoor race and freestyle practices/events.</li>
          <li><b>Basic RPAS Certificate:</b> With league mentorship, members prepare for and write the Transport Canada online exam. This is required for flying drones 250g+ outdoors in races/events.</li>
        </ol>
        <p>Not everyone will become a pilot, but everyone can contribute and participate in the league.</p>
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>How to Join</h2>
        <p>
          Becoming a member is easy! Simply contact us or attend one of our events to get started. Annual Associate membership is $50 and full is $100, which helps cover league expenses and supports our community programs.
        </p>
        <img src={avatarPlaceholder} alt="New Member" style={{ width: '80px', borderRadius: '50%', margin: '1rem 0' }} />
      </section>


    </div>
  );
};

export default Membership;