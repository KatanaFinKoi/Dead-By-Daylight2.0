// src/components/Header/Header.js
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  return (
    <header id="header-container">
      <div id="header">
        <ul id="header-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Intro">Intro</Link></li>
          <li><Link to="/killer-bios">Killer Bios</Link></li>
          <li><Link to="/survivor-bios">Survivor Bios</Link></li>
          <li><Link to="/lore-deep-dive">Lore Deep Dive</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;