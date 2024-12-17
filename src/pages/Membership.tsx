import React from 'react';
import avatarPlaceholder from '../assets/avatar-placeholder.png';  // Placeholder avatar image

const Membership: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)' }}>
      <h1>Membership Page</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Membership Rules and Fees</h2>
        <p>Details about membership rules and fees go here.</p>
      </section>
      
      <section>
        <h2>Current Members</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div  style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatarPlaceholder} alt="Franco Nogarin" style={{ width: '100px', height: '100px', marginRight: '1rem' }} />
            <div className = 'member-profile'>
              <h3>Franco Nogarin (55 Yrs) aka SpyD</h3>
              <p>Main Drones: DJI Mini Pro 3, BetaFPV Air75</p>
              <p>Pilot - Since 2009 - any drone any mode.</p>
              <p>League Drone: BetaFPV Air75 freestyle</p>
              <p>Main Radio: Radiomaster 4in1 ELRS</p>
              <p>Main Goggles: Walksnail Avatar X + TBS Fusion</p>
            </div>
          </div>
          
          <div  style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatarPlaceholder} alt="Riel Burke" style={{ width: '100px', height: '100px', marginRight: '1rem' }} />
            <div className = 'member-profile'>
              <h3>Riel Burke (39 Yrs) aka CHAPPiE_FPV</h3>
              <p>Main Drones: main freestyle drone 5 inch rig -tbs source one V3 frame , speedy bee stacked  f4 50 amp esc, T motors 1750 kv , rush tank vtx , TBS nano Rx,</p>
              <p>Pilot - Since 2016 - any drone any mode.</p>
              <p>League Drone: BetaFPV Air65 freestyle</p>
              <p>Main Radio: Radiomaster Boxer ELRS with Crossfire</p>
              <p>Main Goggles: Fat Shark Dominator</p>
            </div>
          </div>
          
          <div  style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatarPlaceholder} alt="Avery Tetso" style={{ width: '100px', height: '100px', marginRight: '1rem' }} />
            <div className = 'member-profile'>
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