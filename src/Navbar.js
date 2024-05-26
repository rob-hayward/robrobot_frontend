// src/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './assets/robrobot_logo.png';

const MyNavbar = ({ projects }) => {
  return (
    <Navbar expand="lg" fixed="top">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <div className="navbar-name-wrapper">
            <span className="navbar-name">Rob Hayward</span>
            <br />
            <span className="navbar-subtitle">
              <span>programming</span> <span>+</span> <span>development</span>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">home</Nav.Link>
            <NavDropdown title="projects" id="projects-dropdown" className="nav-dropdown">
              {projects.map(project => (
                <NavDropdown.Item key={project.id} as={Link} to={`/projects/${project.id}`} className="nav-dropdown-item">
                  {project.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="nav-link">about + contact</Nav.Link>
            <Nav.Link as={Link} to="/cv" className="nav-link">cv</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;