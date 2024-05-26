// src/ProjectGrid.js

import React from 'react';
import { Link } from 'react-router-dom';
import techIconPaths from './techIcons';
import './ProjectGrid.css';

const ProjectGrid = ({ projects }) => {
  return (
    <div className="project-grid-container">
      <div className="project-grid-header">
        <h1>Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
            <div className="project-item">
                <Link to={`/projects/${project.id}`}>
                    <div className="project-image">
                        <img
                            src={require(`./assets/images/${project.title.toLowerCase()}/${project.images[0].image.split('/').pop()}`)}
                            alt={project.title}
                        />
                        <div className="project-overlay">
                            <div className="project-title">{project.title}</div>
                            <div className="project-description">{project.synopsis}</div>
                            <div className="technology-icons">
                                {project.technologies_used.map(tech => (
                                    <img key={tech.name}
                                         src={require(`./assets/images/tech_icons/${techIconPaths[tech.name]}`)}
                                         alt={tech.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;