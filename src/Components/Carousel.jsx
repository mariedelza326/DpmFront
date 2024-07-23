import React, { useState, useEffect } from "react";
import axios from "axios";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [accords, setAccords] = useState([]);

  useEffect(() => {
    const fetchAccords = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/accords/");
        console.log("Données reçues:", response.data);
        setAccords(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des accords:", error);
      }
    };

    fetchAccords();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % accords.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [accords.length]);

  const handlePreviousClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + accords.length) % accords.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % accords.length);
  };

  return (
    <>
      <div className="infos">
        <h1>Activités</h1>
      </div>
      <div className="carousele">
        <div className="carousel-inner">
          {accords.map((accord, index) => (
            <div
              key={accord.id}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${accord.image})` }}
            >
              <div className="carousel-text">
                <h3>{accord.title}</h3>
                <div className="date-container">
                  <span className="date-debut">Début: {accord.date_debut}</span>
                  <span className="date-fin">Fin: {accord.date_fin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-prev" onClick={handlePreviousClick}>
          &#10094;
        </button>
        <button className="carousel-next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Carousel;
