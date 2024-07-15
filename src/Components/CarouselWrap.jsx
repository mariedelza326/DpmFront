import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarouselWrap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      image: "../media/dg7.jpeg",
      title:
        "Message de Diene Faye, Directeur de la Direction des peches Maritime",
      content:
        "Chers collaborateurs, notre entreprise a toujours mis l'innovation au cœur de sa stratégie. Cette année, nous allons redoubler d'efforts pour créer un environnement de travail encore plus stimulant et productif... ",
    },
    {
      image: "../media/dg3.jpeg",
      title:
        "Mot de Diene Faye , Directeur de la Direction des Peches Maritime",
      content:
        "L'excellence opérationnelle est notre priorité. Je suis fière de l'engagement dont chacun d'entre vous fait preuve au quotidien. Ensemble, nous allons relever les défis qui nous attendent et atteindre de nouveaux sommets...",
    },
    {
      image: "../media/liguria.jpg",
      title:
        "Perspective de Diene Faye , Directeur de la Direction des Peches Maritime",
      content:
        "L'innovation est le moteur de notre croissance. Cette année, nous lançons plusieurs projets ambitieux qui vont révolutionner notre industrie. Votre créativité et votre expertise seront essentielles pour mener à bien ces initiatives...",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrap">
      <h2 className="carousel-title">Mots du Directeur</h2>
      <div className="carousel-container">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="carousel-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.img
              src={carouselItems[currentIndex].image}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
            />
            <motion.div
              className="carousel-content"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <h3>{carouselItems[currentIndex].title}</h3>
              <p>{carouselItems[currentIndex].content}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselWrap;
