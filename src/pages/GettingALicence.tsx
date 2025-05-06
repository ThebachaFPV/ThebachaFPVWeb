import React from 'react';

const GettingALicence: React.FC = () => {
  return (
    <div style={{ padding: '2rem', color: 'var(--white)', maxWidth: 900, margin: '0 auto' }}>
      <h1>How to Get Your Canadian Drone Pilot Licence</h1>
      <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
        To fly drones weighing 250g or more in Canada, you must have a Transport Canada drone pilot certificate. Here’s how to get started:
      </p>
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Steps to Certification</h2>
        <ol>
          <li>Review the <a href="/regs/Canada_Basic_Pilot_Certificate_Requirements.md" target="_blank" rel="noopener noreferrer">Basic Pilot Certificate Requirements</a>.</li>
          <li>Study using the following resources:
            <ul>
              <li><a href="/regs/Canada_Basic_Pilot_Study_Checklist.md" target="_blank" rel="noopener noreferrer">Study Checklist</a></li>
              <li><a href="/regs/Canada_Basic_Pilot_Study_Resources.md" target="_blank" rel="noopener noreferrer">Study Resources</a></li>
              <li><a href="/regs/Canada_Basic_Pilot_Study_TOC_Additions.md" target="_blank" rel="noopener noreferrer">Additional Topics</a></li>
            </ul>
          </li>
          <li>Take the online exam on the <a href="https://tc.canada.ca/en/aviation/drone-safety/find-drone-pilot-certificate-exam" target="_blank" rel="noopener noreferrer">Transport Canada website</a>.</li>
          <li>Once you pass, print and carry your certificate when flying.</li>
        </ol>
      </section>
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Waivers</h2>
        <p>
          If you are under 18, you will need a parent or guardian to sign a waiver. Download the appropriate form:
        </p>
        <ul>
          <li><a href="/foundations/waivers/adult.md" target="_blank" rel="noopener noreferrer">Adult Waiver</a></li>
          <li><a href="/foundations/waivers/minor.md" target="_blank" rel="noopener noreferrer">Minor Waiver</a></li>
        </ul>
      </section>
    </div>
  );
};

export default GettingALicence;
