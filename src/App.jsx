// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Intro from './pages/Intro.jsx';
import KillerBios from './pages/KillerBios.jsx';
import SurvivorBios from './pages/SurvivorBios.jsx';
import LoreDeepDive from './pages/LoreDeepDive.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/killer-bios" element={<KillerBios />} />
          <Route path="/survivor-bios" element={<SurvivorBios />} />
          <Route path="/lore-deep-dive" element={<LoreDeepDive />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;