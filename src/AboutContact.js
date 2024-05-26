import React from 'react';
import Profile from './Profile';
import Contact from './Contact';
import profilePic from './assets/images/profile_pic_circle.png'; // Import the profile picture
import './AboutContact.css';

const AboutContact = () => {
    return (
        <div className="about-contact-container">
            <img src={profilePic} alt="Profile" className="profile-picture"/> {/* Add the profile picture */}
            <div className="about-contact-grid">
                <Profile />
                <Contact />
            </div>
        </div>
    );
};

export default AboutContact;
