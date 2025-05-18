import Header from '../components/Header';

const Intro = () => {
    return (
        <div>
            <Header />
            <div>
                <h2><strong>What is Dead by Daylight?</strong></h2>
                <div id="intro">
                    <p>
                        Dead by Daylight is an asymmetrical multiplayer horror game developed by Behaviour Interactive. In each match, one player takes on the role of a ruthless Killer, while four other players become Survivors trying to escape. The Survivors must work together to repair generators and open exit gates, all while evading the Killer who hunts them down relentlessly.
                    </p>
                    <p>                    
                        Each Killer and Survivor has unique abilities, perks, and playstyles, often inspired by iconic horror franchises such as Halloween, Stranger Things, Silent Hill, Resident Evil, and more. Survivors play in third-person, enhancing their situational awareness, while Killers play in first-person for a more immersive hunting experience.
                    </p>
                    <p>
                        With a growing roster of characters, a variety of eerie maps, and frequent content updates, Dead by Daylight delivers a tense, thrilling experience where every match is a deadly game of cat and mouse.
                    </p>
                </div>
            </div>
        </div>
        );
}

export default Intro;
