// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import LogoImage from './assets/robrobot_logo_half.png';
import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="App">
      <MyNavbar projects={projects} />

      <div className="logo-section text-center mt-5">
        <img src={LogoImage} alt="Logo"/>
      </div>

      <div className="container mt-5">
        <Profile id="about" />
      </div>
      <div className="container my-5">
        <Projects projects={projects} />
      </div>
      <div className="container my-5">
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
