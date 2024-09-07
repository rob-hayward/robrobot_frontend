import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectGrid.css';

const ProjectGrid = ({ projects }) => {
  const getImageSrc = (project, imagePath) => {
    try {
      return require(`./assets/images/${project.title.toLowerCase()}/${imagePath.split('/').pop()}`);
    } catch (error) {
      console.error(`Failed to load image: ${imagePath}`, error);
      return ''; // or a placeholder image URL
    }
  };

  const getTechIconSrc = (techName) => {
    try {
      return require(`./assets/images/tech_icons/${techName.toLowerCase().replace(/ /g, '_')}_icon.png`);
    } catch (error) {
      console.error(`Failed to load tech icon: ${techName}`, error);
      return ''; // or a placeholder icon URL
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
                  src={getImageSrc(project, project.images[0].image)}
                  alt={project.title}
                />
                <div className="project-overlay">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.synopsis}</div>
                  <div className="technology-icons">
                    {project.technologies_used.map(tech => (
                      <img
                        key={tech.name}
                        src={getTechIconSrc(tech.name)}
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