import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./ImageGallery.css";

const ImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="gallery-container">
      <ScrollMenu>
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(src)}>
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </ScrollMenu>

      {/* Modal for Enlarged View */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
