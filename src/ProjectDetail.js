// src/ProjectDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageModal from './ImageModal';
import './App.css';
import './ProjectDetail.css';


const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openImageModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = () => {
    const prevIndex = (selectedImageIndex - 1 + project.images.length) % project.images.length;
    setSelectedImageIndex(prevIndex);
  };

  const showNextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % project.images.length;
    setSelectedImageIndex(nextIndex);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <div className="project-images">
        {project.images.map((image, index) => {
          const imagePath = require(`./assets/images/${project.title.toLowerCase()}/${image.image.split('/').pop()}`);
          return (
            <img
              key={index}
              src={imagePath}
              alt={`${project.title} - ${index + 1}`}
              onClick={() => openImageModal(index)}
            />
          );
        })}
      </div>
      <div className="project-section">
        <p><strong>Overview:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: project.overview }} />
        <p><strong>Key Features:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: project.key_features }} />
        <p><strong>Technical Stack:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: project.technical_stack }} />
        <p><strong>Role and Contribution:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: project.role_and_contribution }} />
        <p><strong>Challenges and Solutions:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: project.challenges_solutions }} />
        <p><strong>Future Plans:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: project.future_plans }} />
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
      {selectedImageIndex !== null && (
        <ImageModal
          imagePath={require(`./assets/images/${project.title.toLowerCase()}/${project.images[selectedImageIndex].image.split('/').pop()}`)}
          onClose={closeImageModal}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </div>
  );
};

export default ProjectDetail;