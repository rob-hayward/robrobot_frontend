// src/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './assets/robot_logo_simple.png';

const MyNavbar = ({ projects }) => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" style={{ width: '40px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
