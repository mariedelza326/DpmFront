import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DetailAbrogee = () => {
  const [abrogees, setAbrogees] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAbrogees = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/abrogees/${id}/`
        );
        setAbrogees(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de la législation:",
          error
        );
      }
    };

    fetchAbrogees();
  }, [id]);

  if (!abrogees) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="legislation-detail">
        <h1>{abrogees.type_display}</h1>
        <h2>{abrogees.titre}</h2>
        <p className="date">
          Date de publication : {abrogees.date_publication}
        </p>
        <div className="description">{abrogees.description}</div>
        {abrogees.fichier_pdf && (
          <div className="pdf-section">
            <h3>Document PDF</h3>
            <a
              href={abrogees.fichier_pdf}
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

export default DetailAbrogee;
