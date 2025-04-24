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
        // Rest of paragraphs...
      ]
    },
    {
      id: 'wraith',
      name: 'The Wraith',
      bio: [
        "Philip Ojomo came to this country without anything than hope for a new beginning. He was happy as he got offered a job at Autohaven Wreckers. A small scrap yard where bribed cops turned a blind eye for the somewhat shady business that took place.",
        // Rest of paragraphs...
      ]
    },
    // Add other killers...
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