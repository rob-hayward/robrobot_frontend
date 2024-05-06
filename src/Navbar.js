// src/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = ({ projects }) => {
  return (
    <Navbar expand="lg" fixed="top">
      <div className="navbar-content">
        <Navbar.Brand href="#" className="navbar-brand">
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
            <Nav.Link href="#" className="nav-link">home</Nav.Link>
            <NavDropdown title="projects" id="projects-dropdown" className="nav-dropdown">
              {projects.map(project => (
                <NavDropdown.Item key={project.id} href={`#project-${project.id}`} className="nav-dropdown-item">
                  {project.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#" className="nav-link">about + contact</Nav.Link>
            <Nav.Link href="#" className="nav-link">cv</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;