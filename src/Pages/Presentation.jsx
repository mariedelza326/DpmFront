import React, { useEffect, useRef } from "react";
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
import SubscriptionPage from "../Components/SearchBar";
import JournalCarousel from "../Components/Journal";
import PersonnelPage from "../Components/Personnel";

const Presentation = () => {
  const numberRefs = useRef([]);

  const scrollToContent = () => {
    const content = document.querySelector(".homecontent");
    content.scrollIntoView({ behavior: "smooth" });
  };

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

    numberRefs.current.forEach(updateCount);
  }, []);

  return (
    <div className="home">
      <Navigation />
      <div className="homecontent">
        <CarouselDpm />
      </div>
      <div className="marie">
        <div className="banner">
          <div className="number-container">
            <span
              className="number"
              data-target="40"
              ref={(el) => (numberRefs.current[0] = el)}
            >
              +0
            </span>
            <p>Licence de Pêche industrielle</p>
          </div>
          <div className="number-container">
            <span
              className="number"
              data-target="20"
              ref={(el) => (numberRefs.current[1] = el)}
            >
              +0
            </span>
            <p>Immatriculation d’embarcation</p>
          </div>
          <div className="number-container">
            <span
              className="number"
              data-target="42.58"
              ref={(el) => (numberRefs.current[2] = el)}
            >
              +0
            </span>
            <p>permis de pêches artisanales</p>
          </div>
          <div className="number-container">
            <span
              className="number"
              data-target="1601"
              ref={(el) => (numberRefs.current[3] = el)}
            >
              +0
            </span>
            <p>cartes mareyeurs</p>
          </div>
        </div>
      </div>
      <Actualites />
      <ProcessWeFollow />
      <Division />
      <Service />
      <Partenaire />
      <Carousel />
      <PersonnelPage />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Presentation;
