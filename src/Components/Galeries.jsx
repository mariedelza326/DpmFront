import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages =
    galleryData.length > 0
      ? galleryData[activeTab].images.slice(indexOfFirstImage, indexOfLastImage)
      : [];

  const totalPages =
    galleryData.length > 0
      ? Math.ceil(galleryData[activeTab].images.length / imagesPerPage)
      : 0;

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
            onClick={() => {
              setActiveTab(index);
              setCurrentPage(1);
            }}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className="images-container">
        {galleryData.length > 0 && (
          <div className="images">
            {currentImages.map((image, index) => (
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
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} / {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <div className="voir"></div>
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
