import React from "react";
import Navigation from "../Components/Navigation";
import Project from "../Components/Project";
import Programme from "../Components/Programme";
import Footer from "../Components/Footer";
import Historique from "../Components/Historique";
import HistoriqueProgramme from "./HistoriqueProgramme";
import Menu from "./CardMenu";

const NewDetail = () => {
  return (
    <>
      <Navigation />
      <section className="hero">
        <img src="../media/dg2.jpeg" alt="" className="profile" />
        <div className="hero-content">
          <h1>NewDetails & Programmes</h1>
          <p>
            La Direction des Pêches Maritimes œuvre à la gestion durable des
            ressources halieutiques à travers des NewDetails innovants et des
            programmes de conservation, assurant ainsi la prospérité économique
            et la préservation des écosystèmes marins.
          </p>
        </div>
      </section>
      <div className="boxes">
        <div className="box">
          <h2>NewDetails</h2>
          <p>
            La Direction des Pêches Maritimes déploie une gamme variée de
            NewDetails visant à promouvoir la durabilité des ressources marines.
            Ces initiatives comprennent la mise en place de plans de gestion des
            stocks, le développement de l'aquaculture durable, le renforcement
            des capacités des pêcheurs et des communautés côtières, la
            modernisation de la flotte de pêche, la recherche scientifique pour
            une meilleure compréhension des écosystèmes marins, et des efforts
            pour améliorer la commercialisation et l'exportation des produits de
            la pêche.
          </p>
        </div>
        <div className="box">
          <h2>Programmes</h2>
          <p>
            Les programmes de la Direction des Pêches Maritimes se concentrent
            sur le renforcement des capacités des pêcheurs, la promotion de
            l'aquaculture durable, la recherche scientifique pour la gestion des
            ressources halieutiques, la modernisation des infrastructures
            portuaires et la valorisation commerciale des produits de la mer,
            dans le but d'assurer une exploitation responsable des écosystèmes
            marins et de soutenir les communautés côtières dépendantes de la
            pêche.
          </p>
        </div>
      </div>
      <Historique />
      {/* <Project />
      <Programme /> */}
      <Menu />
      <HistoriqueProgramme />
      <Footer />
    </>
  );
};

export default NewDetail;
