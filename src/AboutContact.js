// src/AboutContact.js
import React from 'react';
import Profile from './Profile';
import Contact from './Contact';
import './AboutContact.css';

const AboutContact = () => {
    return (
        <div className="about-contact-container">
            <div className="about-contact-grid">
                <Profile />
                <Contact />
            </div>
        </div>
    );
};

export default AboutContact;