import React from 'react';
import air65 from '../assets/product-images/betafpv-air65-brushless-whoop-w-elrs-2.4ghz-freestyle-image-1.webp';

const League: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
      <h1>About the League</h1>
      <h2 style={{ color: '#00A9D1', marginTop: '0.5rem' }}>Structure, Values, and Events</h2>
      <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
        Thebacha FPV Racing League is a community-driven organization focused on safe, inclusive, and innovative FPV drone racing. We provide a structured environment for learning, competition, and fun, while upholding the highest standards of safety and sportsmanship.
      </p>
      <img src={air65} alt="FPV League Drone" style={{ width: '100%', maxWidth: 300, borderRadius: 8, margin: '1rem 0' }} />

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Our Values</h2>
        <ul>
          <li>Safety and regulatory compliance</li>
          <li>Inclusivity and respect for all members</li>
          <li>Skill development and mentorship</li>
          <li>Community engagement and outreach</li>
          <li>Transparency and good governance</li>
        </ul>
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>How We Operate</h2>
        <ul>
          <li>Annual membership with affordable fees and financial support for those in need</li>
          <li>Regular meetings, workshops, and training sessions</li>
          <li>Organized races, both competitive and beginner-friendly</li>
          <li>Fundraising and community service activities</li>
          <li>Open communication and member participation in decision-making</li>
        </ul>
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Events & Races</h2>
        <p>
          We host a variety of events throughout the year, including:
        </p>
        <ul>
          <li>League races (timed and streamed live)</li>
          <li>Beginner and youth events</li>
          <li>Workshops on drone building, safety, and piloting</li>
          <li>Community outreach and demonstration days</li>
        </ul>
      </section>

      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Member Responsibilities</h2>
        <ul>
          <li>Respect all members and their equipment</li>
          <li>Follow all safety guidelines during races and practice sessions</li>
          <li>Maintain your drones and equipment in good working condition</li>
          <li>Participate in league events and meetings regularly</li>
          <li>Abide by the decisions of the league officials</li>
        </ul>
      </section>
    </div>
  );
};

export default League;