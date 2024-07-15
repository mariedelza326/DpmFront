import React from "react";

const Division = () => {
  return (
    <div className="app">
      <div className="divisionne">
        <h1>Divisions</h1>
      </div>
      <div className="container">
        <a href="/divisionindustriel" className="card-link">
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url('./media/industrielle.jpg')` }}
            ></div>
            <h4>Division de la Pêche industrielle</h4>
            <p>
              La Division de la Pêche industrielle est notamment chargée, en
              relation avec les structures concernées : de suivre l’application
              de la réglementation en matière de pêche industrielle ;
              d’accompagner les professionnels et d’appuyer les organisations
              professionnelles de la pêche industrielle ; de suivre la
              production et les débarquements ; d’instruire les dossiers de
              demandes d’autorisation de…
            </p>
          </div>
        </a>
        <a href="/divisionartisanal" className="card-link">
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url('./media/artisanale.jpg')` }}
            ></div>
            <h4> Division de la Pêche artisanale </h4>
            <p>
              La Division de la Pêche artisanale est notamment chargée, en
              relation avec les structures concernées : de suivre l’application
              de la réglementation en matière de pêche artisanale ; de suivre la
              gestion du carburant et du matériel de pêche ; d’instruire et de
              délivrer les permis de pêche et cartes de métiers ; de suivre…
            </p>
          </div>
        </a>
        <a href="/divisionpeche" className="card-link">
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url('./media/amenagement.jpg')` }}
            ></div>
            <h4>Division de l’Aménagement des Pêches </h4>
            <p>
              La Division de l’Aménagement des Pêches est notamment chargée, en
              relation avec les structures concernées : d’assurer l’aménagement
              et la gestion des pêcheries exploitées conformément aux plans
              d’aménagement et plans de gestion ; d’assurer la coordination, la
              conception et la mise en œuvre des mesures d’aménagement et de
              gestion des pêches ; de faire l’analyse, le traitement et la…
            </p>
          </div>
        </a>
        <a href="/divisionvalorisation" className="card-link">
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url('./media/sea.jpg')` }}
            ></div>
            <h4>
              Division de la Valorisation des Produits de la Pêche artisanale
            </h4>
            <p>
              La Division de la Valorisation des Produits de la Pêche artisanale
              est notamment chargée, en relation avec les structures concernées
              : de promouvoir la valorisation des produits de la pêche
              artisanale...
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Division;
