// src/ProjectDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageModal from './ImageModal';
import './App.css';
import './ProjectDetail.css';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    return <div>Loading project...</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <h1>{project.title}</h1>
        <div className="project-detail-grid">
          <div className="project-detail-section">
            <p className="project-detail-subtitle">Overview</p>
            <div dangerouslySetInnerHTML={{ __html: project.overview }} />
          </div>
          <img
            className="project-detail-image"
            src={require(`./assets/images/${project.title.toLowerCase()}/${project.images[0].image.split('/').pop()}`)}
            alt={`${project.title} - 1`}
            onClick={() => openImageModal(0)}
          />
          <img
            className="project-detail-image"
            src={require(`./assets/images/${project.title.toLowerCase()}/${project.images[1].image.split('/').pop()}`)}
            alt={`${project.title} - 2`}
            onClick={() => openImageModal(1)}
          />
          <div className="project-detail-section">
            <p className="project-detail-subtitle">Key Features</p>
            <div dangerouslySetInnerHTML={{ __html: project.key_features }} />
          </div>
          <div className="project-detail-section">
            <p className="project-detail-subtitle">Technical Stack</p>
            <div dangerouslySetInnerHTML={{ __html: project.technical_stack }} />
          </div>
          <img
            className="project-detail-image"
            src={require(`./assets/images/${project.title.toLowerCase()}/${project.images[2].image.split('/').pop()}`)}
            alt={`${project.title} - 3`}
            onClick={() => openImageModal(2)}
          />
          <img
            className="project-detail-image"
            src={require(`./assets/images/${project.title.toLowerCase()}/${project.images[3].image.split('/').pop()}`)}
            alt={`${project.title} - 4`}
            onClick={() => openImageModal(3)}
          />
          <div className="project-detail-section">
            <p className="project-detail-subtitle">Role and Contribution</p>
            <div dangerouslySetInnerHTML={{__html: project.role_and_contribution}}/>

          </div>
        </div>
        <div className="project-detail-section">
          <p className="project-detail-subtitle">Challenges and Solutions</p>
          <div dangerouslySetInnerHTML={{__html: project.challenges_solutions}}/>
        </div>
        <div className="project-detail-section">
        <p className="project-detail-subtitle">Future Plans</p>
          <div dangerouslySetInnerHTML={{ __html: project.future_plans }} />
        </div>
        <div className="project-detail-section git-repository-section">
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