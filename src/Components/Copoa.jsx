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
    return <div className="loading">Veuillez patienter...</div>;
  }

  return (
    <div className="copoa-container">
      <Navigation />
      <main className="projet-detail">
        <header className="projet-header">
          <h1 className="projet-title">{projet.titre}</h1>
          <p className="projet-date">{projet.date_debut}</p>
        </header>
        <div className="projet-image-container">
          <img src={projet.image} alt={projet.titre} className="projet-image" />
        </div>
        <div className="projet-content">
          <p>{projet.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Copoa;
