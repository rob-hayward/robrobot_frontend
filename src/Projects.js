// src/Projects.js
import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Projects = ({ projects }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const openImageModal = (imageIndex, project) => {
    setSelectedImageIndex(imageIndex);
    setCurrentProject(project);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
    setCurrentProject(null);
  };

  const showPrevImage = () => {
    if (currentProject) {
      const prevIndex = (selectedImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
      setSelectedImageIndex(prevIndex);
    }
  };

  const showNextImage = () => {
    if (currentProject) {
      const nextIndex = (selectedImageIndex + 1) % currentProject.images.length;
      setSelectedImageIndex(nextIndex);
    }
  };

  return (
      <div>
        {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="project-anchor">
              <h1>{project.title}</h1>
              <div className="project-images">
                {project.images.map((image, index) => {
                  const imagePath = require(`./assets/images/${project.title.toLowerCase()}/${image.image.split('/').pop()}`);
                  return (
                      <img
                          key={index}
                          src={imagePath}
                          alt={`${project.title} - ${index + 1}`}
                          onClick={() => openImageModal(index, project)}
                      />
                  );
                })}
              </div>
              <div className="project-section">
                <p><strong>Overview:</strong></p>
                <div dangerouslySetInnerHTML={{__html: project.overview}}/>
                <p><strong>Key Features:</strong></p>
                <div dangerouslySetInnerHTML={{__html: project.key_features}}/>
                <p><strong>Technical Stack:</strong></p>
                <div dangerouslySetInnerHTML={{__html: project.technical_stack}}/>
                <p><strong>Role and Contribution:</strong></p>
                <div dangerouslySetInnerHTML={{__html: project.role_and_contribution}}/>
                <p><strong>Challenges and Solutions:</strong></p>
                <div dangerouslySetInnerHTML={{__html: project.challenges_solutions}}/>
                <p><strong>Future Plans:</strong></p>
                <div dangerouslySetInnerHTML={{__html: project.future_plans}}/>
                {project.web_link && (
                    <p>
                      <strong>Web Link:</strong> <a href={project.web_link}>{project.web_link}</a>
                    </p>
                )}
                {project.git_repo_links.map((repo, index) => (
                    <p key={index}>
                      <strong>Git Repository {index + 1}:</strong>{' '}
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </p>
                ))}
              </div>
            </div>
        ))}

        {selectedImageIndex !== null && currentProject && (
            <ImageModal
                imagePath={require(`./assets/images/${currentProject.title.toLowerCase()}/${currentProject.images[selectedImageIndex].image.split('/').pop()}`)}
                onClose={closeImageModal}
                onPrev={showPrevImage}
                onNext={showNextImage}
            />
        )}
      </div>
  );
};

export default Projects;