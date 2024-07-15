import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Actualites = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/actualites/")
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="actualites">
      <header>
        <h1>Actualités</h1>
      </header>
      <Slider {...settings}>
        {newsData.map((news) => (
          <div key={news.id} className="card">
            <a href={`/detailactualite/${news.id}`}>
              <div className="image-container">
                <img src={news.image} alt={news.titre} />
                <div className="date">
                  {new Date(news.date_publication).toLocaleDateString()}
                </div>
              </div>
              <div className="card-content">
                <h2>{news.titre}</h2>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Actualites;
