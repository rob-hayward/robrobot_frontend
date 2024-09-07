import React from 'react';
import { Link } from 'react-router-dom';
import config from './config';
import './ProjectGrid.css';

const ProjectGrid = ({ projects }) => {
  const getImageSrc = (imagePath, isTechIcon = false) => {
    if (imagePath.startsWith('http') || imagePath.startsWith('/media/')) {
      // This is a media file from the backend
      return imagePath.startsWith('http') ? imagePath : `${config.API_BASE_URL}${imagePath}`;
    } else if (isTechIcon) {
      // This is a tech icon, use a direct path
      return `/assets/images/tech_icons/${imagePath.toLowerCase().replace(/ /g, '_')}_icon.png`;
    } else {
      // This is a static file from the frontend
      try {
        return require(`./assets/images/${imagePath}`);
      } catch {
        console.error(`Failed to load image: ${imagePath}`);
        return ''; // or a placeholder image URL
      }
    }
  };

  return (
    <div className="project-grid-container">
      <div className="project-grid-header">
        <h1>Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <Link to={`/projects/${project.id}`}>
              <div className="project-image">
                <img
                  src={getImageSrc(project.images[0].image)}
                  alt={project.title}
                />
                <div className="project-overlay">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.synopsis}</div>
                  <div className="technology-icons">
                    {project.technologies_used.map(tech => (
                      <img key={tech.name}
                           src={getImageSrc(tech.name, true)}
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