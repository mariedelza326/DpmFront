import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

const Copoa = () => {
  const [projet, setProjects] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/projets/${id}/`
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'actualité:", error);
      }
    };

    fetchProjects();
  }, [id]);

  if (!projet) {
    return <div>veuillez patienter...</div>;
  }
  return (
    <>
      <Navigation />
      <div className="actualite-detail">
        <header className="actualite-header">
          <h1 className="actualite-title">{projet.titre}</h1>
          <p className="actualite-date">{projet.date_debut}</p>
        </header>
        <img src={projet.image} alt="Actualité" className="actualite-image" />
        <div className="actualite-content">
          <p>{projet.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Copoa;
