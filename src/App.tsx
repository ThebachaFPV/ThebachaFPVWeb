import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import League from './pages/League';
import Store from './pages/Store';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/league" element={<League />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;