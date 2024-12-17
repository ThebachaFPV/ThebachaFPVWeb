import React from 'react';

const League: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)' }}>
      <h1>League Page</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Rules</h2>
        <p>All members must adhere to the following rules:</p>
        <ul>
          <li>Respect all members and their equipment.</li>
          <li>Follow all safety guidelines during races and practice sessions.</li>
          <li>Maintain your drones and equipment in good working condition.</li>
          <li>Participate in league events and meetings regularly.</li>
          <li>Abide by the decisions of the league officials.</li>
        </ul>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Fees</h2>
        <p>Membership fees are $100 per year. These fees cover expenses such as administration, rentals, and other operational costs.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Fundraising</h2>
        <p>Members will be required to participate in fundraising activities to support the club. Funds raised will be used for purchasing club equipment and other necessary items.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Store Discount</h2>
        <p>All members receive a 20% discount in our online store. This discount applies to all items, including drones, parts, and accessories.</p>
        <p>All profits from the store will go towards league expenses.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Races</h2>
        <p>We organize league races that are timed and streamed live. Members are encouraged to participate and showcase their skills. These races are a great opportunity to compete and improve your flying abilities.</p>
      </section>
    </div>
  );
};

export default League;