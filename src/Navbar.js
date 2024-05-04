// src/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './assets/robrobot_logo_half.png';

const MyNavbar = ({ projects }) => {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="#home" className="ml-3">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#about">RobRobot</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <NavDropdown title="Project Portfolio" id="basic-nav-dropdown">
            {projects.map(project => (
              <NavDropdown.Item key={project.id} href={`#project-${project.id}`}>
                {project.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;