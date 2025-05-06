import React from 'react';
import avatarPlaceholder from '../assets/avatar-placeholder.png';
import badge from '../assets/badge.png';

const Membership: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
      <h1>Membership</h1>
      <h2 style={{ color: '#00A9D1', marginTop: '0.5rem' }}>Join Our Community</h2>
      <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
        Thebacha FPV Racing League welcomes everyone—pit helpers, spotters, IT techs, mentors, coaches, parents, and more. Membership is open to all who want to support, learn, or participate in the league. Not all members are pilots, but all are valued contributors to our community.
      </p>
      <img src={badge} alt="League Badge" style={{ width: '400px', borderRadius: 8, margin: '1rem 0' }} />

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Membership Benefits</h2>
        <ul>
          <li>Access to all league events, races, and workshops</li>
          <li>Mentorship and training for all skill levels</li>
          <li>Discounts on equipment through our online store</li>
          <li>Opportunities to help shape the league’s future</li>
          <li>Be part of a safe, inclusive, and innovative community</li>
        </ul>
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Membership Roles</h2>
        <ul>
          <li>Pilots (see progression below)</li>
          <li>Pit Helpers</li>
          <li>Spotters</li>
          <li>IT/Technical Support</li>
          <li>Mentors & Coaches</li>
          <li>Parents & Guardians</li>
          <li>General Volunteers</li>
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
          Becoming a member is easy! Simply contact us or attend one of our events to get started. Annual membership is $100, which helps cover league expenses and supports our community programs. Scholarships and fee waivers are available for youth and those in need—no one is turned away due to financial barriers.
        </p>
        <img src={avatarPlaceholder} alt="New Member" style={{ width: '80px', borderRadius: '50%', margin: '1rem 0' }} />
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Current Members</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Franco Nogarin */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatarPlaceholder} alt="Franco Nogarin" style={{ width: '100px', height: '100px', marginRight: '1rem' }} />
            <div className='member-profile'>
              <h3>Franco Nogarin (55 Yrs) aka SpyD</h3>
              <p>Main Drones: DJI Mini Pro 3, BetaFPV Air75</p>
              <p>Pilot - Since 2009 - any drone any mode.</p>
              <p>League Drone: BetaFPV Air75 freestyle</p>
              <p>Main Radio: Radiomaster 4in1 ELRS</p>
              <p>Main Goggles: Walksnail Avatar X + TBS Fusion</p>
            </div>
          </div>
          {/* Riel Burke */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatarPlaceholder} alt="Riel Burke" style={{ width: '100px', height: '100px', marginRight: '1rem' }} />
            <div className='member-profile'>
              <h3>Riel Burke (39 Yrs) aka CHAPPiE_FPV</h3>
              <p>Main Drones: 5 inch freestyle rig, TBS Source One V3, Speedy Bee F4, T Motors 1750kv, Rush Tank VTX, TBS Nano Rx</p>
              <p>Pilot - Since 2016 - any drone any mode.</p>
              <p>League Drone: BetaFPV Air65 freestyle</p>
              <p>Main Radio: Radiomaster Boxer ELRS with Crossfire</p>
              <p>Main Goggles: Fat Shark Dominator</p>
            </div>
          </div>
          {/* Avery Tetso */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatarPlaceholder} alt="Avery Tetso" style={{ width: '100px', height: '100px', marginRight: '1rem' }} />
            <div className='member-profile'>
              <h3>Avery Tetso (13 Yrs) aka The Kid</h3>
              <p>Main Drones: DJI Avata, BetaFPV Air65</p>
              <p>Pilot - Since 2023 - any drone any mode.</p>
              <p>League Drone: BetaFPV Air65 freestyle</p>
              <p>Main Radio: ???</p>
              <p>Main Goggles: ???</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;