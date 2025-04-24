// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KillerBios from './pages/KillerBios';
import SurvivorBios from './pages/SurvivorBios';
import LoreDeepDive from './pages/LoreDeepDive';
import './assets/styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/killer-bios" element={<KillerBios />} />
          <Route path="/survivor-bios" element={<SurvivorBios />} />
          <Route path="/lore-deep-dive" element={<LoreDeepDive />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;