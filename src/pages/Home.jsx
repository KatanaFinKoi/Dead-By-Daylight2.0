// need to update the content list to redirect to sections using a different method
import { Link } from 'react-router-dom';


const Home = () => {   
  return (
    <div className="home">
        <header id="home-header-container"> 
            <div id="home-header">
                <h1><strong>Survivor & Killer Profiles: Unlock the Secrets of Dead by Daylight's Characters</strong></h1>
                <h2>Table of Contents:</h2>
                <ul id="content-list">
                  <li><Link to="/intro">Intro</Link></li>
                  <li><Link to="/killer-bios">Killer Bios</Link></li>
                  <li><Link to="/survivor-bios">Survivor Bios</Link></li>
                  <li><Link to="/lore-deep-dive">Lore Deep Dive</Link></li>
                </ul>
            </div>
        </header> 
    </div>
    
  );
}

export default Home;