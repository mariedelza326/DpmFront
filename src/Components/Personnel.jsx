import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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
    { title: "Équipes", category: "equipes" },
    { title: "SRPS", category: "chefs_de_region" },
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
        <motion.div
          className="governance-single-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentTabPersonnel.map((person) => (
            <GovernancePersonCard key={person.id} person={person} />
          ))}
        </motion.div>
      );
    } else {
      const startIndex = carouselIndex * 3;
      const endIndex = startIndex + 3;
      const visiblePeople = currentTabPersonnel.slice(startIndex, endIndex);

      return (
        <div className="governance-carousel">
          <button
            className="governance-nav-button prev"
            onClick={handlePrevClick}
            disabled={carouselIndex === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <motion.div
            className="governance-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {visiblePeople.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GovernancePersonCard person={person} />
              </motion.div>
            ))}
          </motion.div>
          <button
            className="governance-nav-button next"
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
    <div className="governance-personnel-page">
      <motion.h1
        className="governance-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GOUVERNANCE
      </motion.h1>
      <motion.p
        className="governance-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
      </motion.p>
      <motion.div
        className="governance-tabs"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`governance-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </motion.div>
      {renderCards()}
    </div>
  );
};

const GovernancePersonCard = ({ person }) => (
  <motion.div
    className="governance-card"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="governance-photo">
      <img src={person.photo} alt={person.name} />
    </div>
    <h3 className="governance-name">{person.name}</h3>
    <p className="governance-job">{person.job}</p>
    <a
      className="governance-linkedin"
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i>
    </a>
  </motion.div>
);

export default PersonnelPage;
