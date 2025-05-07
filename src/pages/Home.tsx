import React from 'react';
import logo from '../assets/logo.png';
import badge from '../assets/badge.png';
import avatarPlaceholder from '../assets/avatar-placeholder.png';
import air75 from '../assets/product-images/betafpv-air75-brushless-whoop-_image-1.webp';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <img src={logo} alt="League Logo" className="home-logo" style={{ width: '520px', marginBottom: '1.5rem', borderRadius: '12px' }} />
      <h1>Thebacha FPV Racing League</h1>
      <h2 style={{ color: '#00A9D1', marginTop: '0.5rem' }}>Community. Education. Innovation.</h2>
      <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
        Thebacha FPV Racing League is a non-profit organization dedicated to building a vibrant, inclusive, and safe community for FPV drone racing in Northern Canada. We focus on education, skill development, and responsible drone use, while fostering connections between members, partners, and the broader community.
      </p>

      {/* About Us Section - Use badge as a symbol of community/achievement */}
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>About Us</h2>
        <p>
          Our league is more than just racing. We provide technical education, mentorship, and opportunities for all ages and skill levels. We are committed to sustainable growth, safety, and regulatory compliance, and we work closely with local organizations, schools, and stakeholders to advance drone technology and STEM learning in the North.
        </p>
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
        <img src={badge} className="home-badge" alt="League Badge" style={{  borderRadius: 8, margin: '1rem 0' }} />
        </div>
      </section>

      {/* How to Join Section - Use avatar placeholder to represent new members */}
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>How to Join</h2>
        <p>
          Interested in becoming a member? We welcome everyone, from beginners to experienced pilots. Visit our Membership page to learn about benefits, requirements, and how to get started. We offer training, events, and a supportive environment for all.
        </p>
        <img src={avatarPlaceholder} alt="New Member" style={{ width: '100px', borderRadius: '50%', margin: '1rem 0' }} />
      </section>

      {/* For Partners & Funders Section - No image, unless you provide a suitable one */}
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>For Partners & Funders</h2>
        <p>
          We collaborate with schools, local businesses, and funding agencies to expand access to drone technology and STEM education. Our programs are designed to benefit youth, promote innovation, and strengthen community ties. Contact us to learn how you can support or partner with us.
        </p>
      </section>

      {/* Resources Section - Use a drone image from product images */}
      <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
        <h2>Resources</h2>
        <p>
          We provide guides, safety information, and links to Canadian drone regulations. Explore our Resources section for everything you need to fly safely and legally, and to get the most out of your FPV experience.
        </p>
        <img src={air75} alt="FPV Drone" style={{ width: '100%', maxWidth: 300, borderRadius: 8, margin: '1rem 0' }} />
      </section>
    </div>
  );
};

export default Home;