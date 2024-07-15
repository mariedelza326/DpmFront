import React, { useState, useEffect } from "react";

const CarouselItem = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="CarouselItem">
      <div
        className="CarouselItem-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="CarouselItem-item" key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="CarouselItem-image"
            />
            <div className="CarouselItem-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselItem;
