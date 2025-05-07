import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import League from './pages/League';
import Shop from './pages/Shop';
import Benefits from './pages/Benefits';
import Regulations from './pages/Regulations';
import GettingALicence from './pages/GettingALicence';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Board from './pages/Board';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* Desktop: sidebar fixed, Mobile: sidebar flows above footer */}
      {!isMobile && <Sidebar />}
      <div style={{ flex: 1, marginRight: !isMobile ? 320 : 0 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/league" element={<League />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/gettingalicence" element={<GettingALicence />} />
          <Route path="/board" element={<Board />} />
        </Routes>
        {isMobile && <Sidebar />}
        <Footer />
      </div>
    </div>
  );
};

export default App;