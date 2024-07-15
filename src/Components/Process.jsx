import React from "react";
import { Link } from "react-router-dom";

const ProcessWeFollow = () => {
  return (
    <>
      <div className="info">
        <h1>Qui sommes nous!!</h1>
      </div>
      <div className="process-we-follow">
        <div className="section">
          <div className="icon-circle">
            <i className="benefits__icon fas fa-flask"></i>
          </div>
          <div>
            <h2 className="section-title">Notre Mission</h2>
            <p className="section-text">
              La DPM est chargée de la mise en œuvre de la politique de l’État
              en matière de pêche maritime. Ses missions sont fixées par le
              Décret n°1255 du 23 août 2011 portant organisation du Ministère.
              Son organisation et fonctionnement par l’Arrêté ministériel
              n°02466 du 19 avril 2006.La DPM est notamment chargée : de
              l’élaboration et de…
            </p>
            <Link to="/detailsmission">
              <button className="en-savoir-plus">
                En savoir plus <i className="fas fa-plus"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="section">
          <div className="icon-circle">
            <i className="benefits__icon fas fa-leaf"></i>
          </div>
          <div>
            <h2 className="section-title">Notre Organisation</h2>
            <p className="section-text">
              La Direction des Pêches Maritimes réalise ses différentes missions
              au travers de plusieurs divisions et bureaux. Division pêche
              artisanale Division pêche industrielle Division gestion et
              aménagement Bureaux rattachés Bureau des ressources humaines
              Bureau du courrier Bureau de gestion Bureau de la documentation et
              de l’information Bureau de la législation et du suivi des accords
              de…
            </p>
            <Link to="/detailsmission">
              <button className="en-savoir-plus">
                En savoir plus <i className="fas fa-plus"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="section">
          <div className="icon-circle">
            <i className="benefits__icon fas fa-seedling"></i>
          </div>
          <div>
            <h2 className="section-title">Nos Activites</h2>
            <p className="section-text">
              Centrées autour de la gestion durable des ressources halieutiques,
              avec notamment : la révision du Code de la pêche l’élaboration et
              la mise en œuvre de plans d’aménagement des pêcheries la maitrise
              du parc piroguier à travers l’Immatriculation informatisée des
              pirogues Organisation des acteurs la contribution à l’ajustement
              des capacités de pêche (test) et la reconversion…
            </p>
            <Link to="/detailsmission">
              <button className="en-savoir-plus">
                En savoir plus <i className="fas fa-plus"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessWeFollow;
