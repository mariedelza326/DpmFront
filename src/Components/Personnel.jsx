import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonnelPage = () => {
  const [personnel, setPersonnel] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/personnel/"
        );
        setPersonnel(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchPersonnel();
  }, []);

  const tabs = [
    { title: "Directeur", category: "directeur" },
    { title: "Equipes", category: "equipes" },
    { title: "Chefs de région", category: "chefs_de_region" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCarouselIndex(0);
  };

  const handlePrevClick = () => {
    setCarouselIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    const currentTabPersonnel = personnel.filter(
      (person) => person.category === tabs[activeTab].category
    );
    setCarouselIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(currentTabPersonnel.length / 3) - 1)
    );
  };

  const renderCards = () => {
    const currentTabPersonnel = personnel.filter(
      (person) => person.category === tabs[activeTab].category
    );

    if (tabs[activeTab].category === "directeur") {
      return (
        <div className="single-card">
          {currentTabPersonnel.map((person) => (
            <div key={person.id} className="card">
              <div className="photo">
                <img src={person.photo} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.job}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          ))}
        </div>
      );
    } else {
      const startIndex = carouselIndex * 3;
      const endIndex = startIndex + 3;
      const visiblePeople = currentTabPersonnel.slice(startIndex, endIndex);

      return (
        <div className="carousel">
          <button
            className="nav-button prev"
            onClick={handlePrevClick}
            disabled={carouselIndex === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="cards">
            {visiblePeople.map((person) => (
              <div key={person.id} className="card">
                <div className="photo">
                  <img src={person.photo} alt={person.name} />
                </div>
                <h3>{person.name}</h3>
                <p>{person.job}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            ))}
          </div>
          <button
            className="nav-button next"
            onClick={handleNextClick}
            disabled={endIndex >= currentTabPersonnel.length}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="personnel-page">
      <h1>GOUVERNANCE</h1>
      <p>
        La clé de voûte du développement de la Direction des Pêches Maritimes
        repose sur une équipe hautement performante et une gouvernance
        respectant les plus hauts standards internationaux. Grâce à une vision
        stratégique et une gestion rigoureuse, la Direction des Pêches Maritimes
        s'engage à promouvoir une pêche durable et responsable. Notre équipe,
        composée de professionnels expérimentés et dévoués, travaille sans
        relâche pour assurer la préservation des ressources maritimes, la
        protection de l'environnement marin et le développement économique des
        communautés côtières. En adoptant des pratiques de gestion transparentes
        et inclusives, nous visons à renforcer la confiance et la collaboration
        avec tous nos partenaires et parties prenantes.
      </p>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {renderCards()}
    </div>
  );
};

export default PersonnelPage;
