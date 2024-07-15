import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const JournalCarousel = () => {
  const [journals, setJournals] = useState([]);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/journal/");
        setJournals(response.data);
      } catch (error) {
        console.error("Error fetching journals:", error);
      }
    };
    fetchJournals();
  }, []);

  const openFullscreenVideo = (videoSrc) => {
    setFullscreenVideo(videoSrc);
  };

  const closeFullscreenVideo = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div className="divisionne">
        <h1>Infos Maritimes</h1>
      </div>
      <div className="journal-carousel">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          observer={true}
          observeParents={true}
        >
          {journals.map((journal) => (
            <SwiperSlide key={journal.id}>
              <div
                className="journal-card"
                onClick={() => openFullscreenVideo(journal.video)}
              >
                <video muted loop>
                  <source src={journal.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="journal-overlay">
                  <h2>{journal.titre}</h2>
                  <div className="play-icon">
                    <i className="fas fa-play"></i>
                  </div>
                  <p>
                    {new Date(journal.date_publication).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {fullscreenVideo && (
        <div
          className="fullscreen-video-overlay"
          onClick={(e) => e.stopPropagation()}
        >
          <video ref={videoRef} src={fullscreenVideo} autoPlay controls>
            Your browser does not support the video tag.
          </video>
          <button className="close-button" onClick={closeFullscreenVideo}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default JournalCarousel;
