import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import ProcessWeFollow from "../Components/Process";
import Carousel from "../Components/Carousel";
import Division from "../Components/Division";
import Service from "../Components/Service";
import Partenaire from "../Components/Partenaire";
import Gallery from "../Components/Galeries";
import Footer from "../Components/Footer";
import Actualites from "../Components/Actualites";
import CarouselDpm from "../Components/CarouselDpm";
import CarouselWrap from "../Components/CarouselWrap";

const Presentation = () => {
  const numberRefs = useRef([]);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/statistics/"
        );
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };
    fetchStatistics();
  }, []);

  useEffect(() => {
    const updateCount = (el) => {
      const target = parseFloat(el.getAttribute("data-target"));
      const count = parseFloat(el.innerText.replace("+", ""));
      const speed = 800;
      const increment = target / speed;
      if (count < target) {
        el.innerText = `+${(count + increment).toFixed(2)}`;
        setTimeout(() => updateCount(el), 10);
      } else {
        el.innerText = `+${target}`;
      }
    };

    numberRefs.current.forEach((el) => {
      if (el) updateCount(el);
    });
  }, [statistics]);

  return (
    <div className="home">
      <Navigation />
      <div className="homecontent">
        <CarouselDpm />
      </div>
      <div className="marie">
        <div className="banner">
          {statistics.map((stat, index) => (
            <div className="number-container" key={stat.name}>
              <span
                className="number"
                data-target={stat.value}
                ref={(el) => (numberRefs.current[index] = el)}
              >
                +0
              </span>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
      <CarouselWrap />
      <Actualites />
      <Service />
      <Carousel />
      <Partenaire />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Presentation;
