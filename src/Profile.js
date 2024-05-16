// src/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';

const Profile = () => {
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