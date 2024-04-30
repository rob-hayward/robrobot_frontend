// src/ImageModal.js
import React from 'react';

const ImageModal = ({ imagePath, onClose, onPrev, onNext }) => {
  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <img src={imagePath} alt="Large" />
        <div className="image-modal-controls">
          <button className="prev-btn" onClick={onPrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next-btn" onClick={onNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;