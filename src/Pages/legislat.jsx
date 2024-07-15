import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Vogue from "../Components/Vogue";
import Footer from "../Components/Footer";
import axios from "axios";

const Legislat = () => {
  const [legislations, setLegislations] = useState([]);

  useEffect(() => {
    const fetchLegislations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/legislations/"
        );
        setLegislations(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des législations:",
          error
        );
      }
    };
    fetchLegislations();
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
  };

  return (
    <>
      <Navigation />
      <div className="legislat-container">
        <div className="legislat-header">
          <h2>Législation En Vigueur</h2>
          <p>
            La Direction des Pêches Maritimes (DPM) applique plusieurs lois pour
            gérer durablement les ressources halieutiques. Ces lois incluent des
            quotas de pêche, des périodes de fermeture, des zones protégées, des
            règlements de licences de pêche, des mesures contre la pêche
            illégale, et la protection des aires marines sensibles. Le Code de
            Conduite pour une Pêche Responsable encourage des pratiques durables
            et respectueuses de l'environnement.
          </p>
        </div>
        <div className="legislat-grid">
          {legislations.map((legislation) => (
            <div className="legislat-card" key={legislation.id}>
              <Link
                to={`/legislation/${legislation.id}`}
                className="legislat-link"
              >
                {/* <div
                  className={`legislat-icon fas fa-${getIconForType(
                    legislation.type
                  )}`}
                ></div> */}
                <h3 className="legislat-title">{legislation.titre}</h3>
                <p className="legislat-description">
                  {truncateDescription(legislation.description)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const getIconForType = (type) => {
  switch (type) {
    case "decret":
      return "fish";
    case "arrete":
      return "water";
    case "loi":
      return "anchor";
    case "convention":
      return "ship";
    case "protocole":
      return "globe";
    default:
      return "file-alt";
  }
};

export default Legislat;
