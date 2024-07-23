import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const LegislationDetail = () => {
  const [legislation, setLegislation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchLegislationDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/legislations/${id}/`
        );
        setLegislation(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de la législation:",
          error
        );
      }
    };

    fetchLegislationDetail();
  }, [id]);

  if (!legislation) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="legislation-detail">
        <h2>{legislation.titre}</h2>
        <p className="date">
          Date de publication : {legislation.date_publication}
        </p>
        <div className="description">{legislation.description}</div>
        {legislation.fichier_pdf && (
          <div className="pdf-section">
            <h3>Document PDF</h3>
            <a
              href={legislation.fichier_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Voir ou télécharger le PDF
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LegislationDetail;
