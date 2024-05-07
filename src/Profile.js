// src/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
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
        <div className="profile-section">
            {profile.bio ? (
                <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;