import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/gallery/")
      .then((response) => {
        setGalleryData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

  const handleViewLess = () => {
    setDisplayCount(8);
  };

  return (
    <div className="gallery">
      <header>
        <h1>Gallery</h1>
      </header>
      <div className="tabs">
        {galleryData.map((category, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className="images-container">
        {galleryData.length > 0 && (
          <div className="images">
            {galleryData[activeTab].images
              .slice(0, displayCount)
              .map((image, index) => (
                <div key={index} className="image-item">
                  <img
                    src={image.image}
                    alt={image.title}
                    onClick={() => handleImageClick(image.image)}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="button-container">
        {galleryData.length > 0 &&
          galleryData[activeTab].images.length > displayCount && (
            <button className="gallery-button" onClick={handleViewMore}>
              Voir plus
            </button>
          )}
        {displayCount > 8 && (
          <button className="gallery-button" onClick={handleViewLess}>
            Voir moins
          </button>
        )}
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedImage} alt="" />
            <a href={selectedImage} download className="download-btn">
              Télécharger
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
