import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Intro from './pages/Intro.jsx';
import KillerBios from './pages/KillerBios.jsx';
import SurvivorBios from './pages/SurvivorBios.jsx';
import LoreDeepDive from './pages/LoreDeepDive.jsx';
import './index.css';
import { useEffect } from 'react';
import logoUrl from './assets/other-images/logo.png';

function App() {
    useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = logoUrl;
    document.head.appendChild(link);

    return () => {
      const links = document.querySelectorAll('link[rel="icon"]');
      links.forEach(link => document.head.removeChild(link));
    };
  }, []);

  return (
    <Router basename="/Dead-By-Daylight2.0">
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