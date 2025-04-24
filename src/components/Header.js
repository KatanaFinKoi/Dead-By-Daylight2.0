// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header id="header-container">
      <div id="page-header">
        <h1><strong>Survivor & Killer Profiles: Unlock the Secrets of Dead by Daylight's Characters</strong></h1>
        <h2>Table of Contents:</h2>
        <ul id="content-list">
          <li><Link to="/">Intro</Link></li>
          <li><Link to="/killer-bios">Killer Bios</Link></li>
          <li><Link to="/survivor-bios">Survivor Bios</Link></li>
          <li><Link to="/lore-deep-dive">Lore Deep Dive</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;