// src/components/KillerBio/KillerBio.js
import React from 'react';
// import './KillerBio.css';

const Bio = ({ id, name, bio }) => {
  return (
    <div className="bios" id={`${id}-bio`}>
      <h3>{name}</h3>
      <div className="block-of-text">
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Bio;