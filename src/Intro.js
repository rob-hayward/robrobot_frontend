// Intro.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';
import './Intro.css';

const Intro = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/profiles/`)
      .then(response => {
        if (response.data.length > 0) {
          setProfile(response.data[0]);
        }
      })
      .catch(error => console.error('There was an error fetching the profile!', error));
  }, []);

  return (
    <div className="intro-section">
      {profile.intro ? (
        <div>
          <p>an ever-learning programmer in development</p>
          <p>
            <span className="passionate">passionate</span> tech building
            <span className="plus-sign"> +</span>
            <span className="relentless"> relentless</span> problem solving with an
          </p>
          <p>
            <span className="make-it-work">"I can make this work"</span> mindset
          </p>
          <p>Bringing ideas to life with <span className="organised">organised</span> <span className="plus-sign"> +</span> <span className="efficient">efficient</span> code</p>
        </div>
      ) : (
        <p>Loading intro...</p>
      )}
    </div>
  );
};

export default Intro;