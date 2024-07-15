import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Comments from "../Components/Commentaire";

const DetailsActualite = () => {
  const [actualite, setActualite] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchActualite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/actualites/${id}/`
        );
        setActualite(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'actualité:", error);
      }
    };

    fetchActualite();
  }, [id]);

  if (!actualite) {
    return <div>Veuillez patienter...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="documente-pagemarie">
        <img src={actualite.image} alt="" className="documentemarie" />
        <div className="contentamarie">
          <h1>{actualite.titre}</h1>
        </div>
      </div>
      <div className="actualite-detail">
        <header className="actualite-header">
          <h1 className="actualite-title">{actualite.titre}</h1>
          <p className="actualite-date">
            {new Date(actualite.date_publication).toLocaleDateString()}
          </p>
        </header>
        <img
          src={actualite.image}
          alt={actualite.contenu}
          className="actualite-image"
        />
        <div
          className="actualite-content"
          dangerouslySetInnerHTML={{ __html: actualite.contenu }}
        />
        <Comments actualiteId={id} />
        <Footer />
      </div>
    </>
  );
};

export default DetailsActualite;
