import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturesCarousel = () => {
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/features/");
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };
    fetchFeatures();
  }, []);

  const openPopup = (feature) => {
    setSelectedFeature(feature);
  };

  const closePopup = () => {
    setSelectedFeature(null);
  };

  return (
    <>
      <div className="divisionne">
        <h1>Conseils et Techniques de Pêche</h1>
      </div>
      <div className="features-carousel">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div
                className="feature-card"
                style={{ backgroundImage: `url(${feature.image})` }}
                onClick={() => openPopup(feature)}
              >
                <h3>{feature.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {selectedFeature && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{selectedFeature.title}</h2>
            <p>{selectedFeature.description}</p>
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturesCarousel;
