import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const CarouselWrap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/director-messages/"
        );
        setCarouselItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (carouselItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [carouselItems]);

  if (carouselItems.length === 0) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <div className="carousel-wrap">
      <h2 className="carousel-title">Mots du Directeur</h2>
      <div className="carousel-container">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={carouselItems[currentIndex].image}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="carousel-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
