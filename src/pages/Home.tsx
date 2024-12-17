import React from 'react';
import Membership from './Membership'; // Correct relative path

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Membership />
    </div>
  );
};

export default Home;