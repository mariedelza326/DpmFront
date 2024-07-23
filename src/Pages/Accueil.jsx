import React from "react";
import Navigation from "../Components/Navigation";
import SubscriptionPage from "../Components/SearchBar";
import ProcessWeFollow from "../Components/Process";
import Carousel from "../Components/Carousel";
import Division from "../Components/Division";
import Service from "../Components/Service";
import Partenaire from "../Components/Partenaire";
import Gallery from "../Components/Galeries";
import Footer from "../Components/Footer";
import Actualites from "../Components/Actualites";
import CarouselDpm from "../Components/CarouselDpm";
import JournalCarousel from "../Components/Journal";
import PersonnelPage from "../Components/Personnel";

const Accueil = () => {
  return (
    <>
      <Navigation />
      <section className="herodpm">
        <img src="../media/peche.jpg" alt="" className="profit" />
      </section>
      <ProcessWeFollow />
      <SubscriptionPage />

      <Division />
      <PersonnelPage />
      <Footer />
    </>
  );
};

export default Accueil;
