import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

const DetailsProgramme = () => {
  const [programme, setProgramme] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProgramme = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/programmes/${id}/`
        );
        setProgramme(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du programme:", error);
      }
    };
    fetchProgramme();
  }, [id]);

  if (!programme) {
    return <div>Veuillez patienter...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="programme-detail">
        <header className="programme-header">
          <h1 className="programme-title">{programme.nom}</h1>
          <p className="programme-date">{programme.date_creation}</p>
        </header>
        <img
          src={programme.image}
          alt={programme.nom}
          className="programme-image"
        />
        <div className="programme-content">
          <p>{programme.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsProgramme;
