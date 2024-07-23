import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Timeline = ({
  onCircleClick,
  activeIndex,
  currentPage,
  totalPages,
  onPageChange,
  projects,
}) => {
  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProjects = projects.slice(startIndex, endIndex);

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
        {displayedProjects.map((project, index) => (
          <div key={index} className="timeline-item">
            <h6 className="cercle-title">
              <span>{project.subtitle}</span>
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

const Historique = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/projets/");
        setProjects(response.data);
        if (response.data.length > 0) {
          setSelectedProject(response.data[0]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timer);
  }, [selectedProject]);

  const handleCircleClick = (index) => {
    setSelectedProject(projects[index]);
    setActiveIndex(index);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const truncateDescription = (description, wordLimit = 90) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="app-container">
      <h1 className="app-title"> Projets</h1>
      <Timeline
        onCircleClick={handleCircleClick}
        activeIndex={activeIndex}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        projects={projects}
      />
      {selectedProject && (
        <div className={`story-display ${fade ? "fade" : ""}`}>
          <h2 className="project-title">{selectedProject.titre}</h2>
          <div className="project-dates">
            <span className="date-debut">
              Début: {selectedProject.date_debut}
            </span>
            <span className="date-fin">Fin: {selectedProject.date_fin}</span>
          </div>
          <div className="project-content">
            <img
              src={selectedProject.image}
              alt={selectedProject.titre}
              className="project-image"
            />
            <p className="project-description">
              {truncateDescription(selectedProject.description)}
            </p>
          </div>
          <Link
            to={`/detailshistorique/${selectedProject.id}`}
            className="savoir-plus-link"
          >
            <button className="savoirplus">En savoir plus</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Historique;
