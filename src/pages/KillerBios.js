// src/pages/KillerBios.js
import React from 'react';
import Bio from '../components/BioLogic';
import BackToTop from '../components/BackToTop/BackToTop';

const KillerBios = () => {
  // You could store this data in a separate file or fetch from an API
  const killers = [
    {
      id: 'trapper',
      name: 'The Trapper',
      bio: [
        "Evan MacMillan idolised his father. It wasn't just that he was heir to a great fortune, it was the way he ran the estate. Raised under his firm hand, Evan had taken to running the workforce with an iron hand. Production was always high and the MacMillan Estate prospered under father and son.",
        "As Archie MacMillan's mental health slowly disintegrated, Evan protected him from the herd who wanted a piece of the fortune. No matter what his father asked of him, Evan would do.",
        "When Archie MacMillan finally snapped, Evan became his enforcer in what would become known as the worst mass murder in modern history. They never proved that Evan lead over a hundred men into those dark tunnels before detonating the explosives and sealing them to their fate. The tale of the MacMillan Estate is a tale of wealth and power gone very wrong.",
        "How many victims fell to the hands of father and son is unknown. No record is ever made of what became of Evan MacMillan. His father is another unsolved puzzle, found trapped in the locked basement of his own warehouse - starved and abandoned."
      ]
    },
    {
      id: 'wraith',
      name: 'The Wraith',
      bio: [
        "Philip Ojomo came to this country without anything than hope for a new beginning. He was happy as he got offered a job at Autohaven Wreckers. A small scrap yard where bribed cops turned a blind eye for the somewhat shady business that took place.",
        "Ojomo didn't care. He had seen criminal activity up close in his homeland and as long as he didn't get involved, he let things be. He just fixed cars and handled the crusher. Something he did really well. A car went in and a small, metallic cube came out.",
        "It was not until one gloomy day that he, just by accident, saw some blood coming from one of the un-crushed cars. As he opened the trunk he found a young man, gagged and with tied hands with panic filled eyes. Ojomo freed the man who managed to run ten feet before Ojomo's boss stopped him and slit his throat. As Ojomo demanded answers he got explained to him that he'd been nothing more than a simple executioner as more or less every car had a soul in them as this was a \"service\" the scrap yard provided to certain \"clients\".",
        "Ojomo snapped and went ballistic. He threw his boss in the crusher and let it slowly compress, as the head stuck out, Ojomo grabbed it and pulled head and spine out of the body. Then he left and was never seen again."
      ]
    },
    {
      id: 'hillbilly',
      name: 'The Hillbilly',
      bio: [
        "The son of wealthy landowners Max Thompson Sr. and Evelyn Thompson, this unnamed boy was an unwanted child born to savage parents. Hideously disfigured, he was shut away from society. So ashamed of their son, they bricked him off into a room and fed him through a hole in the wall. When the boy escaped, he took his revenge savagely and terribly, slaughtering the parents that had tortured him instead of raising him.",
        "After the deed was done, he continued to live his life at the farm, taking out his deranged violence on the animals that were allowed to run free. As he finally broke free from his shackles he ran through the cornfields, chasing and slaughtering whatever he could find. They never found the bodies of Max and Evelyn, but they did find tortured and disembowelled animals all over the farm.",
        "Coldwind Farm was quickly settled and the land split up and sold off. There was never a buyer for the farmhouse. Perhaps it was the sound of the chainsaw you could hear throughout those hot summer nights."
      ]
    },
    {
      id: 'nurse',
      name: 'The Nurse',
      bio: [
        "Sally Smithson came to town with dreams of children's feet and laughter in a wooden home built by her husband Andrew. But life came not with smiles but with plans of destruction. Andrew worked as a lumberjack - a job with its perils. One day, Andrew's foreman had to pay Sally a visit, forever changing her life. She was alone.",
        "Without food on the table and no other option, Sally had to find a way, but the only employment she could get was at the Crotus Prenn Asylum. Nobody sought employment there unless they were in dire need. Just like Sally. Without any education, she started at the bottom, doing the hard night shift.",
        "Over the years, her mind had reached its limits, two decades of seeing horrid things that violate the eyes. Memories that are re-played every night. Being abused verbally and physically, by people without limits. Sally saw insanity from the outside, just to catch it herself.",
        "Finally she could not take it any more and concepts of purification emerged inside her. She did what she felt was necessary. As the morning staff arrived one day in September - they found over fifty dead patients, lifeless, in their bed along four staff members, also dead.",
        "Only Sally had survived the night, but her mind was gone, rocking back and forth non-stop. Exactly what happened is only known by her, but it seems that some of them had been choked as they had marks around their necks. They got her into an ambulance, but that ambulance never reached the hospital. It was found crashed in a nearby wood, all the staff dead and Sally nowhere to be found."
      ]
    },
    {
      id: 'shape',
      name: 'The Shape',
      bio: [
        "Some humans are simply bad seeds. Seeds infused with a distilled and pure form of evil.",
        "Michael Myers is one of those seeds. He had no issues with causing the pain of others. Instead, it was exactly what he sought. But even life can be tough on those with minds filled with terror. The difference is just how one goes about to solve those problems. For Michael, he had to kill to find some inner peace. As he took his sister’s life, the police found a silent boy dressed as a clown at the scene.",
        "When one stumbles upon a growing fire, one does not pour gasoline on it. But this was an action taken by officials that had no idea how it would shape this demon in the boy's body. Sending Michael to a mental institution was a feeble attempt to save the child. Unsuccessful therapy and nightly screams just made him even more introverted and deranged.",
        "People hoped that Michael Myers would end up a parenthesis, soon to be forgotten and buried, a failure that soon were to rot away. But then...he escaped."
      ]
    },
    {
      id: 'hag',
      name: 'The Hag',
      bio: [
        "Lisa Sherwood grew up in a quiet village, mainly isolated from the rest of civilisation. The people of the hamlet were kind and the elders kept old traditions alive, often keeping the peace by personally settling the ever-rare disputes. Lisa was particularly fond of the charms they taught her to draw for safety and good fortune. One night, as she was walking home through the woods, a terrible storm struck without warning. Howling winds whipped at her hair as she stumbled through the swamp, her rain-drenched dress plastered to her skin. In the slick, wet mud she lost her footing, careening backwards and striking her head against rock. Slipping in and out of consciousness, she strained to identify the dark shapes approaching her from between the trees. That's the last thing she could remember.",
        "Her kidnappers kept her chained to the wall in a flooded cellar. Though dimly lit, she could see others whose large open wounds swarmed with flies. It took merely a day before they returned, carving chunks from the prisoners' bodies with rusted blades, consuming their very flesh down to the bone. Most she saw did not survive long once the cannibals targeted them but somehow, deep within, Lisa persisted. Starved, infected, and mutilated after several weeks of torture, her gaunt arms became loose in their shackles. She pulled hard, the metal tearing through skin and muscle until she was free. Her flesh oozed viscous yellow pus and bones were visible beneath gangrenous wounds. She could go no further. Delirious, she thought of home; she thought of the elders. With her dying breath, she etched the symbols they had taught her into the floor using what remained of her fingers. Almost in response, a dark hunger stirred inside her. It yearned for blood. In oath, she chose vengeance.",
        "The village's search party eventually brought them to an old shack in a swamp. Inside, its previous inhabitants had been viciously dismembered and devoured by an unidentifiable animal. In the cellar, amid rotting corpses and disconnected flesh, the elders’ charms were scrawled in blood on the floor. Lisa’s body was not among the bodies and was never found. The village was never the same again."
      ]
    },
    {
      id: 'doctor',
      name: 'The Doctor',
      bio: [
        "From an early age, Herman Carter understood the human psyche. To analyse and de-construct something as powerful as the brain intrigued him. He was an apt pupil and gained the attention of his teachers. He excelled in high-school and was published in \"Partisan\" — a psychology gazette. Within a year, Carter was fast-tracked into Yale's advanced neuroscience programme, really a front for the CIA. Brainpower is a must if you're about to conquer the world and demolish foes across the pond. The CIA understood this, so interrogation and intelligence became their number one priority. All they needed were brilliant people — like Carter.",
        "Carter and other top-tier recruits were transferred off-campus and into a secret black site facility in Illinois known as Léry's Memorial Institute. A protégé craves a mentor, and that's where Dr Otto Stamper stepped in, who taught Carter that information is everything and knowledge is power. He was given all instruments needed, a guiding hand, and more or less everything he asked for. He never realised that sunlight had started to become so scarce, that he too was kept in the dark. Because knowledge doesn't only give you power, it also transforms you into a threat.",
        "To extract information was his mission. Dr Stamper encouraged Carter to go further and not to consider this a normal medical facility — no eyes were watching them, there were no rules to abide. The agency just pointed Carter in the right direction, then he started to take a few steps back as he saw how Carter could walk on his own. Docile test subjects were exchanged for real, live spies. People that played a role in the troubles outside the facility. Carter shouldered this new role — Project Awakening took form, and on paper Carter described it as \"experimental interrogation\". It was approved and over a few months, nobody knocked on his door. Screams and moans filled the corridor outside his lab, but wars skew people and what they accept — as long as the enemy is kept at bay. The fluorescent lights flickered more and more often. Electro-convulsive Treatment became a standard dish on the menu. Prisoners held at the facility begged the guards to take them to any other lab but Carter's. Rumours were disregarded in the beginning.",
        "Over the years, Carter became known as The Doctor and no one ever questioned if he had even held a medical certificate or even what happened to the prisoners after they had given up their information. It was only after the Léry's Memorial Institute went silent for a week that they finally uncovered the true horror of what had happened there.",
        "Carter's experimental information extraction had turned to horrific and bizarre torture. Patients and prisoners were found dead or in vegetative states with all types of head trauma. In his office, they found the most terrible discovery of all. Dr Stamper himself, his head peeled open and an array of electrodes and sensors inserted into his still working, but annihilated brain. There was no sign of Herman \"The Doctor\" Carter, but his research papers suggested that he had been using the prisoners as part of awful ECT experiments as he searched for the panacea of mind control.",
        "The government didn't want to know. The black site was condemned and all knowledge of the Léry's Memorial Institute redacted forever."
      ]
    },
    {
      id: 'huntress',
      name: 'The Huntress',
      bio: [
        "As soon as Anna was able to walk, her mother started teaching her how to survive a harsh, solitary life in the northern woods. Living in such an extremely remote and dangerous area required skill and resilience. When sunlight became too dim for productive activities, they would take refuge in their house, a sturdy old cabin constructed to resist the toughest winters. Close to the hearth’s warmth, Anna would rest in her mother's arms, surrounded by the few wooden toys and masks she had crafted for her. Drifting off to sleep with stories and lullabies, she dreamt happy dreams, ignorant of the events that would soon change everything.",
        "Anna and her mother were stalking a great elk through the woods. They knew it was dangerous prey, but it had been a particularly difficult winter and they were almost out of food. The spectre of starvation frightened them more than any forest creature. Without warning, the elk reared, bellowed and charged at Anna. She was paralysed with fear as the whole world seemed to shake under the immense beast’s pounding hooves. The elk was close enough for Anna to see the murderous fury in its eyes when her mother threw herself in its path, axe in hand. A blood-curdling scream escaped from her lips as the elk impaled her upon its antlers and hoisted her into the air. With all her strength, she brought her axe down on its head again and again while it tried to shake her loose. With a sickening crack, the antlers snapped and Anna’s mother was free. The beast collapsed.",
        "Anna was too small to move her mother’s broken body, so she sat with her in the clearing where she had fallen. To distract her from the dying elk’s cries, Anna’s mother held her and hummed her favourite lullaby. They stayed like that, the huntress and the elk getting quieter and colder, until Anna was alone in the silent forest. Eventually she stood up and started the long walk back home.",
        "Still a child, she knew just enough about life in the frozen forest to survive. She followed her instincts and became one with the wild. She got older and stronger and practised her hunt. As she grew into a dangerous predator, her humanity became a half-remembered dream.",
        "She widened her territory and lived off her hunts. She worked her way up through squirrels, hares, mink and foxes. Eventually she grew tired of them and hunted more dangerous animals like wolves and bears. When unsuspecting travellers came through her woods, she discovered her new favourite prey: humans. Unlucky souls who strayed into her territory were slaughtered like any other animal. She liked to collect their tools and colourful garments and especially toys when there were little ones. But she could never bring herself to kill the little girls.",
        "Girls she would take back to her house, deep in the woods. They were precious, and looking at them woke up something deep in her heart. She craved the closeness of a loved one, a child of her own. Among the pillaged wooden toys, dolls and story books she couldn't read, the girls would be tied by the neck with a rough and chafing rope fastened firmly to the wall. She couldn't let them wander off, or they would surely die outside.",
        "Every time, the girls would waste away and die of cold or starvation or sickness. Every time, it plunged Anna deeper into pain and sorrow and madness. She was compelled to try again, and started raiding the nearest villages to slaughter families and kidnap their daughters. She wore one of the animal masks her mother crafted for her so many years earlier to try to calm the frightened children. Villagers spread the legend of a half-beast lurking in Red Forest: The Huntress, who killed men and ate little girls.",
        "War eventually came to the forest. German soldiers began to pass through, on the march to attack the collapsing Russian Empire. During these dark times, there were no more travellers. The villagers had abandoned their homes, and no more little ones to be found; only soldiers. Many of them were found with violent axe wounds. Whole groups disappeared mysteriously. Once the war was over, the rumours of The Huntress disappeared with it, engulfed by the Red Forest."
      ]
    }
  ];

  return (
    <main>
      <section id="killer-bios">
        <h2><strong>The Killers</strong></h2>
        {killers.map(killer => (
          <Bio 
            key={killer.id}
            id={killer.id}
            name={killer.name}
            bio={killer.bio}
          />
        ))}
      </section>
      <BackToTop />
    </main>
  );
};

export default KillerBios;