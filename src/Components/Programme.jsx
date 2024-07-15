import React from "react";

const Programme = () => {
  return (
    <div className="programme-container">
      <h1 className="programme-title"> Programme</h1>
      <div className="programme-cards">
        <a href="#activites-en-cours" className="programme-card-link">
          <div className="programme-card">
            <div className="icon-container">
              <i className="fas fa-calendar-alt programme-icon"></i>
            </div>
            <div className="programme-info">
              <h2>FFPA</h2>
              <p>
                Découvrez nos activités en cours et rejoignez-nous pour
                contribuer à notre mission.
              </p>
            </div>
          </div>
        </a>
        <a href="#activites-planifiees" className="programme-card-link">
          <div className="programme-card">
            <div className="icon-container">
              <i className="fas fa-calendar-plus programme-icon"></i>
            </div>
            <div className="programme-info">
              <h2>Subvention Moteurs HB</h2>
              <p>
                Consultez notre calendrier pour connaître nos activités prévues
                et réservez votre place dès maintenant.
              </p>
            </div>
          </div>
        </a>
        <a href="#activites-terminees" className="programme-card-link">
          <div className="programme-card">
            <div className="icon-container">
              <i className="fas fa-calendar-check programme-icon"></i>
            </div>
            <div className="programme-info">
              <h2>Activités terminées</h2>
              <p>
                Parcourez nos activités passées pour voir ce que nous avons
                accompli et en apprendre davantage sur nos succès.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Programme;
