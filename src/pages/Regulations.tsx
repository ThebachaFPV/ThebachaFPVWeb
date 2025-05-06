import React from 'react';

const Regulations: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
      <h1>Canadian Drone Regulations</h1>
      <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
        Flying drones in Canada is regulated by Transport Canada. All pilots must follow the rules for safe and legal operation. Below are key resources and summaries to help you understand your responsibilities as a drone pilot.
      </p>
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Key Regulations</h2>
        <ul>
          <li>All drones 250g or heavier require registration and a pilot certificate.</li>
          <li>Sub-250g drones have fewer restrictions but must still be flown safely and legally.</li>
          <li>Flying over people, near airports, or in controlled airspace is restricted.</li>
          <li>Indoor drone use is not regulated, but safety is still important.</li>
        </ul>
      </section>
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Resources</h2>
        <ul>
          <li><a href="/regs/Canada_Basic_Pilot_Certificate_Requirements.md" target="_blank" rel="noopener noreferrer">Basic Pilot Certificate Requirements</a></li>
          <li><a href="/regs/Canada_Sub250g_Drone_Laws.md" target="_blank" rel="noopener noreferrer">Sub-250g Drone Laws</a></li>
          <li><a href="/regs/Canada_Sub250g_Indoor_Drone_Laws.md" target="_blank" rel="noopener noreferrer">Indoor Drone Laws</a></li>
          <li><a href="/regs/Canada_Drone_250g_to_1kg_Private_Property.md" target="_blank" rel="noopener noreferrer">250g-1kg Drones on Private Property</a></li>
          <li><a href="https://tc.canada.ca/en/aviation/drone-safety" target="_blank" rel="noopener noreferrer">Transport Canada Drone Safety</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Regulations;
