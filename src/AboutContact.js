// AboutContact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutContact = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/profiles/')
            .then(response => {
                if (response.data.length > 0) {
                    setProfile(response.data[0]);
                }
            })
            .catch(error => console.error('There was an error fetching the profile!', error));
    }, []);

    return (
        <div className="about-contact-section">
            <div className="container mt-5">
                <h2>About</h2>
                {profile.bio ? (
                    <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
                ) : (
                    <p>Loading bio...</p>
                )}
            </div>
            <div className="container mt-5">
                <h2>Contact</h2>
                {/* Add your contact form here */}
            </div>
        </div>
    );
};

export default AboutContact;