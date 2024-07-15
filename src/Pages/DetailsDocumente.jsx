import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DocumentDetails = () => {
  const [document, setDocument] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/rapports/${id}`)
      .then((response) => setDocument(response.data))
      .catch((error) => console.error("Error fetching document:", error));
  }, [id]);

  const handleDownload = () => {
    if (document && document.fichier_pdf) {
      window.open(document.fichier_pdf, "_blank");
    }
  };

  if (!document) return <div>Loading...</div>;

  return (
    <>
      <Navigation />
      <div className="document-details">
        <div className="document-header">
          <h1>{document.titre}</h1>
          <p className="publication-date">
            <i className="fas fa-calendar"></i>{" "}
            {new Date(document.date_publication).toLocaleDateString()}
          </p>
        </div>
        <div className="document-content">
          <div className="document-image">
            {document.image && (
              <img src={document.image} alt={document.titre} />
            )}
          </div>
          <div className="document-text">
            <p>{document.description}</p>
          </div>
        </div>
        <div className="document-footer">
          {document.fichier_pdf && (
            <button onClick={handleDownload} className="download-btn">
              <i className="fas fa-download"></i> Télécharger le rapport
            </button>
          )}
          <Link to="/docummente" className="back-btn">
            <i className="fas fa-arrow-left"></i> Retour aux documents
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocumentDetails;
