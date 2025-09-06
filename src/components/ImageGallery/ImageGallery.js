import { useState, useEffect, useCallback } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./ImageGallery.css";

const ImageGallery = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  // Keyboard navigation when modal is open
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showPrev, showNext]);

  return (
    <div className="gallery-container">
      <ScrollMenu>
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </ScrollMenu>

      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="nav-btn left" onClick={showPrev}>
              ‹
            </button>
            <img src={images[selectedIndex]} alt="Enlarged view" />
            <button className="nav-btn right" onClick={showNext}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
