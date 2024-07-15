import React from "react";

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project-title"> Projets</h1>
      <div className="project-cards">
        <a href="#projets-en-cours" className="project-card-link">
          <div className="project-card">
            <div className="icon-container">
              <i className="fas fa-tasks project-icon"></i>
            </div>
            <div className="project-info">
              <h2>Projets en cours</h2>
              <p>
                Les projets actuels de la direction des pêches maritimes visent
                à moderniser les infrastructures et promouvoir la pêche durable.
              </p>
            </div>
          </div>
        </a>
        <a href="#projets-en-instance" className="project-card-link">
          <div className="project-card">
            <div className="icon-container">
              <i className="fas fa-hourglass-half project-icon"></i>
            </div>
            <div className="project-info">
              <h2>Projets en instance</h2>
              <p>
                Les projets en instance de la direction des pêches maritimes
                portent sur la modernisation des infrastructures et la promotion
                de la pêche durable.
              </p>
            </div>
          </div>
        </a>
        <a href="#projets-termines" className="project-card-link">
          <div className="project-card">
            <div className="icon-container">
              <i className="fas fa-check-circle project-icon"></i>
            </div>
            <div className="project-info">
              <h2>Projets terminés</h2>
              <p>
                La direction des pêches maritimes a récemment achevé des projets
                pour restaurer les écosystèmes côtiers, adopter des pratiques de
                pêche sélective et améliorer la sécurité maritime.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
