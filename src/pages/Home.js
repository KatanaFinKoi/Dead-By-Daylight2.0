// need to update the content list to redirect to sections using a different method

const Home = () => {   
  return (
    <div className="home">
        <header id="header-container"> 
            <div id="page-header">
                <h1><strong>Survivor & Killer Profiles: Unlock the Secrets of Dead by Daylight's Characters</strong></h1>
                <h2>Table of Contents:</h2>
                <ul id="content-list">
                    <li><a href="#intro">Intro</a></li>
                    <li> <a href="#killer-bios">Killer Bios</a></li>
                    <li><a href="#survivor-bios">Survivor Bios</a></li>
                    <li><a href="#lore-deep-dive">Lore Deep Dive</a></li>
                </ul>
            </div>
        </header> 
    </div>
    
  );
}

export default Home;