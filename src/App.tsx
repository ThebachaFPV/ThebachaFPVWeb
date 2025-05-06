import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import League from './pages/League';
import Store from './pages/Store';
import Benefits from './pages/Benefits';
import Regulations from './pages/Regulations';
import GettingALicence from './pages/GettingALicence';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: 320 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/league" element={<League />} />
          <Route path="/store" element={<Store />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/gettingalicence" element={<GettingALicence />} />
        </Routes>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;