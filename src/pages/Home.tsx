import React from 'react';
import logo from '../assets/logo.png';  // Import the PNG logo

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img src={logo} alt="League Logo" style={{ width: '300px', marginBottom: '2rem' }} />
      <h1>Welcome to Thebacha FPV Racing League</h1>
      <p>
        Thebacha FPV Racing League is dedicated to providing a thrilling and competitive environment for FPV drone racing enthusiasts. 
        Join us to experience the excitement of high-speed drone racing, improve your skills, and connect with fellow racers.
      </p>
    </div>
  );
};

export default Home;