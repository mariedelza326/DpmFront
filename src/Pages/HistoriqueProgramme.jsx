import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Timeline = ({
  onCircleClick,
  activeIndex,
  currentPage,
  totalPages,
  onPageChange,
  programmes,
}) => {
  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProgrammes = programmes.slice(startIndex, endIndex);

  return (
    <div className="timeline-container">
      <button
        className="nav-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &lt;
      </button>
      <div className="timeline">
        {displayedProgrammes.map((programme, index) => (
          <div key={index} className="timeline-item">
            <h6 className="cercle-title">
              <span>{programme.subtitle}</span>
            </h6>
            <div
              className={`cercle ${
                activeIndex === startIndex + index ? "active" : ""
              }`}
              onClick={() => onCircleClick(startIndex + index)}
            ></div>
          </div>
        ))}
      </div>
      <button
        className="nav-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        &gt;
      </button>
    </div>
  );
};

const HistoriqueProgramme = () => {
  const [programmes, setProgrammes] = useState([]);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/programmes/"
        );
        setProgrammes(response.data);
        if (response.data.length > 0) {
          setSelectedProgramme(response.data[0]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des programmes:", error);
      }
    };
    fetchProgrammes();
  }, []);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timer);
  }, [selectedProgramme]);

  const handleCircleClick = (index) => {
    setSelectedProgramme(programmes[index]);
    setActiveIndex(index);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(programmes.length / itemsPerPage);

  const truncateDescription = (description, wordLimit = 90) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="app-container">
      <h1 className="app-tite">Programmes</h1>
      <Timeline
        onCircleClick={handleCircleClick}
        activeIndex={activeIndex}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        programmes={programmes}
      />
      {selectedProgramme && (
        <div className={`story-display ${fade ? "fade" : ""}`}>
          <h2 className="programme-title">{selectedProgramme.nom}</h2>
          <div className="programme-date">
            <span>Mise en place le: {selectedProgramme.date_creation}</span>
          </div>
          <div className="programme-content">
            <img
              src={selectedProgramme.image}
              alt={selectedProgramme.nom}
              className="programme-image"
            />
            <p className="programme-description">
              {truncateDescription(selectedProgramme.description)}
            </p>
          </div>
          <Link
            to={`/detailsprogramme/${selectedProgramme.id}`}
            className="savoir-plus-link"
          >
            <button className="savoirplus">
              En savoir plus <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HistoriqueProgramme;
