// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import Intro from './Intro';
import ProjectGrid from './ProjectGrid';
import ProjectDetail from './ProjectDetail';
import AboutContact from './AboutContact';
import Footer from './Footer';

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
    <Router>
      <div className="App">
        <MyNavbar projects={projects} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <div className="container mt-5">
                  <Intro />
                </div>
                <div className="container my-5">
                  <ProjectGrid projects={projects} />
                </div>
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
            <Route path="/about" element={<AboutContact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;