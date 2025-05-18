import Header from '../components/Header';

const Intro = () => {
    return (
        <div>
            <Header />
            <div id="intro">
                <h2><strong>What is Dead by Daylight?</strong></h2>
                <p>
                    Dead by Daylight is an asymmetrical multiplayer horror game where four players each assume the role of a 
                    determined survivor and one player takes on the role of a bloodthirsty killer. The survivors must collaborate 
                    to repair generators and unlock an exit gate all while evading capture. The killer's goal is to hunt down the 
                    survivors and sacrifice them on a sacrificial hook to appease a mysterious entity.
                </p>
            </div>
        </div>
        );
}

export default Intro;
