// src/pages/KillerBios.js
import React from 'react';
import Bio from '../components/BioLogic';
import BackToTop from '../components/BackToTop/BackToTop';

const SurvivorBios = () => {
  // You could store this data in a separate file or fetch from an API
  const survivors = [
    {
      id: 'dwight',
      name: 'Dwight Fairfield',
      bio: [
        "Dwight was geeky and scrawny through high school. He always wanted to be one of the cool kids, but somehow never had the charisma. He tried out for the football team but was cut, the basketball team didn't even take a look, and his grades were distinctly below average. One weekend, on a team-building exercise from his dead-end job, Dwight's boss led them deep into the woods before breaking out his family recipe moonshine. Dwight remembered taking the first sip before waking up late the next morning all alone. During the night, the others had abandoned him. Once again, the laughing stock of the community Dwight tried to hike his way out of the woods. That was the last anyone ever heard of Dwight Fairfield.",
        "Dwight isn't the typical guy you think of when someone says \"Survivor\". He lacks that certain pizzazz and without his glasses, he's more or less blind. But as the sun sets and the woods come alive, Dwight clasps to his rat race life, making sure that he'll live to see another day even though something unimaginable is after him. Dwight won't stop. He'll survive no matter what. As others spent hours being seen in high school. He spent hours becoming invisible and avoiding danger. And it doesn't matter if it's dangers in the hallway or dangers in the woods. Survival is key. As other employees panic when terror infects them, Dwight makes use of his disturbing teen experience. The tables have now turned and now others need to follow to Dwight's firm directions if they are to survive as he knows how to disappear."
      ]
    },
    {
      id: 'meg',
      name: 'Meg Thomas',
      bio: [
        "Perhaps it was her mother that had instilled the fierce streak in her or maybe it was her father that left them when she was a baby. Meg excelled at schoolwork but she was off the rails. Fortunately, an athletics coach encouraged her to channel her misspent energy on the track. She motivated herself into becoming a high school star and earned a scholarship to college. When her mother fell ill, Meg decided to give up her chance at college to care for the woman who had raised her. One summer's day, on a long run deep in the woods, Meg vanished. Search as they did, they never found her body.",
        "Meg is one of those who is just simply filled with energy. Unfocused and uncontrollable energy that had to come out. As a kid it came through rowdiness and rebellion. Someone had to focus Meg before something went terribly wrong. Fortunately, someone did. She started to run. Maybe from something undefined that fueled her energy. So to run equaled life. But to run now might attract those beings that crave the pain of others. But as she runs from something, instead of towards it, she understands something. She understands that speed is not of the essence. It’s reaching that finish line. Rather last but still breathing. She deludes whatever is out there as she glides through obstacles and fear, thus managing to stay alive."
      ]
    },
    {
      id: 'claudette',
      name: 'Claudette Morel',
      bio: [
        "From the day that her parents gave Claudette her first science kit, she loved experiments. Her single-minded pursuit lead to an early scholarship at a great college. It was a huge decision to leave Montreal, but the chance was too good to pass up. Her introverted nature means that chat rooms and forums are now her best source of social interaction. Her new favourite activity is to answer botany questions for others under her new moniker of Science Girl. One evening, during a long bus ride back from the city, Claudette took a stroll that would change her life. It only took a minute for her to get completely disoriented in the thick woods. She never found her way back. Her forum only started to wonder where she was a week after she stopped posting.",
        "Claudette is not the outgoing type. Her brilliance provided her with a social handicap and she has fled the real world for chat rooms and forums. Botany and studies fill her life and even though she yearns for something else - it won’t come via a modem. Being thrown into a real-life situation can feel awkward and forced. But as she is used to shutting out the world, she suddenly finds hope in this inexplicable darkness that is slowly devouring her. A plant. A tree. A bush. Simple greenery that might save a life. She hides within and amongst them. Her knowledge and skills flourish as gruesomeness roams free around her."
      ]
    },
    {
      id: 'jake',
      name: 'Jake Park',
      bio: [
        "Growing up the son of a wealthy CEO was always going to put pressure on Jake Park. When his brother graduated with honours from Yale, the pressure on Jake intensified. Jake just wasn't the academic type, but his father never really understood his refusal to embrace the expensive education he lavished upon him. Eventually, Jake rebelled by dropping out of school entirely. Now, Jake lives off the grid on the edge of the woods. It's been years since he spoke to his father but his mother checks in once in a while. It was she, who eventually called the police. The cops said he got lost in the woods and a search party looked for days, but gave up as bad weather rolled in. Despite passionate pleas from his mother, they never resumed the search and Jake went down in history as another casualty of the woods.",
        "Jake's destiny was set even inside his mother's womb. Heir to wealth, noble manners and caretaker of the family reputation and legacy. During torture it's not pain that breaks a man, it's immense pressure. And Jake couldn't handle any more pressure. Instead he sought the opposite of fine dining and maids. He left the grid and ended up with a forest as closest neighbour. A self made outsider, Jake understands nature. He's not there to tame something - rather him becoming feral. Remove the brutal Killers that seek out blood to drain and Jake would feel just at home. No Wi-Fi. No Fortune-500 companies. No father or mother. Years away from modern life has given Jake a new feel for problems. Pain is just an obstacle that hinders you from getting fed. No matter what is hunting you, you need to stay one step ahead. Struggle, blend in, adapt. Just don’t make it easy for others to erase you from the Earth's surface."
      ]
    },
    {
      id: 'nea',
      name: 'Nea Karlsson',
      bio: [
        "Nea is of Swedish descent, a tagger and a bit of a troublemaker. She started rebelling when she was 16, she dyed her hair black and cut it in a way she liked it. In her early teens, her parents thought she lacked that thing that makes everyone else \"normal\". She may have gone too far when her friends, not thinking well, dared her to tag the old asylum. She was never seen again, and now tries her best to survive the Entity's dangers.",
        "Nea grew up in the small town of Hjo in Sweden. She had a happy childhood even though her mom and dad worked hard. As the opportunity to move to the US became a reality she started acting out. Her parents didn’t really pick up on this as a reaction to their move. Nea was forced to leave her friends and life behind. Nea shied away from what her parents considered “normal”. Instead she took refuge in skate parks, and her tag “Mashtyx” was seen more or less all over her new hometown, and Nea made a sport out of tagging government buildings. Finally Nea’s parents became used to Nea disappearing for a few days on end. As she’s nimble and almost catlike, she’s able to evade deadly dangers. Years on skateboards has proven worthy training. And keeping her head down, avoiding the fuzz can be applied to all dangers. The only question is whether she has some interest in not giving up."
      ]
    },
    {
      id: 'laurie',
      name: 'Laurie Strode',
      bio: [
        "You never know what really matters in life until you've realised it might end soon. Laurie is one of those who just wants a quiet life in the suburbs, hanging out with friends, family and maybe go on a date or two. Laurie is a typical teenager. You could pass her on the street and not think twice. She does her homework and is liked by her friends, teachers and family. A simple night of babysitting turns into something that will forever change the course of her young life. A knife swooshing through the air. Screams from afar. Noises that plays tricks with her mind. But not Laurie, she’s made of something stronger. Something that won't give up."
      ]
    },
    {
      id: 'ace',
      name: 'Ace Visconti',
      bio: [
        "Ace Visconti is one charming guy. With his sharp Italian looks, grey-streaked hair and silver tongue, he could pass for an ageing 50's movies star. His heart has always belonged to the cards. From his roots as a poor boy in Argentina, he gambled, scammed, seduced and smooth-talked his way to a life of luxury as a high roller in the land of opportunity. Despite money always having a way of slipping through his fingers, Ace always figured he could win more. He never fulfilled that ambition; eventually he racked up too many debts with the wrong kind of people. And when they finally came to collect, Ace was nowhere to be found. No one knew who tipped him off or where he fled to, but anyone who knew Ace Visconti can agree on one thing. He will survive: against all odds."
      ]
    },
    {
      id: 'bill',
      name: 'Bill Overbeck',
      bio: [
        "It took two tours in Vietnam, a handful of medals, a knee full of shrapnel, and an honourable discharge to get William \"Bill\" Overbeck to stop fighting and try to live a peaceful life. He hated it. After decades spent drifting aimlessly through dead end jobs, Bill went in for a routine surgery and woke up to find the world he knew was gone. A plague was turning normal people into mindless killing machines. Naturally, the first thing he did was fight his way home and put on his uniform. Making his way through rural ghost towns and pitch-black forests, he found other Survivors, and together they fled from the infected hordes. In the end, Bill sacrificed himself to ensure their safety. His body was never found. Bill was left for dead. No one knows that he still has the only thing he ever wanted: an enemy to fight."
      ]
    },
    {
      id: 'feng',
      name: 'Feng Min',
      bio: [
        "Feng Min was a young girl when she first picked up computer games, and she was instantly hooked. The brand new worlds enchanted her with colours, sounds and explosions – a chance to be somewhere else, or someone else. Her parents saw no wrong with a few minutes in front of the screen, but as minutes turned into hours and sometimes days, they finally decided to pull the plug and force Feng Min to put more efforts into her studies.",
        "She felt smothered by her parents who refused to see the potential of a future in games, so she left home and spent her time in internet cafes and LAN parties where the old rules didn't apply. She spent hours playing, streaming, competing to rise to the top. Her parents became what she called \"holiday parents\" as she never saw them outside the holidays, and she became the black sheep of a one-child-family. In the gaming world, however, she finally found respect. Nicknamed the \"Shining Lion,\" she was invited to join a prestigious e-sports team and to live in their dorms, where she found a sanctuary free of the misconceptions and prejudice she had felt from her parents and the non-gaming world.",
        "Feng Min pushed her limits to prove she was the best. Sleep was less important to her than training. At the top of her game, she filled stadiums with fans who adored her. But it couldn't last forever; the pressure to be the best grew stronger and stronger. She pushed herself too far, slept too little, and her performance began to slip. She started to lose. At night, she would stay up, tormented by the thought of disappointing her parents… and her fans.",
        "She spiralled out of control and fell into a pattern of self-destruction. She started wandering the streets and visiting bars, where no one knew of E-Sports, waking up in places she didn't remember. One day she woke up somewhere completely different… in a never-ending nightmare. Feng Min did not despair. As she learned more about the challenge she was up against, she realised this was what she had been training for her entire life. Now, she was going to win."
      ]
    }
  ];
  

  return (
    <main>
      <section id="survivor-bios">
        <h2><strong>The Survivors</strong></h2>
        {survivors.map(survivor => (
          <Bio 
            key={survivor.id}
            id={survivor.id}
            name={survivor.name}
            bio={survivor.bio}
          />
        ))}
      </section>
      <BackToTop />
    </main>
  );
};

export default SurvivorBios;