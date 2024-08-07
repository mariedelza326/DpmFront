import React, { useState } from "react";

const DiscoveryAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Statistiques de la pêche au Sénégal",
      content:
        "La pêche est un secteur clé de l'économie sénégalaise. En 2023, elle représentait environ 3.2% du PIB et employait plus de 600 000 personnes directement ou indirectement. Les captures annuelles moyennes s'élèvent à environ 500 000 tonnes, dont 80% proviennent de la pêche artisanale.",
    },
    {
      title: "Système de surveillance des pêches",
      content:
        "La DPM a mis en place un système de surveillance maritime moderne, comprenant des patrouilleurs, des avions de reconnaissance et un système de suivi par satellite (VMS). Ce dispositif permet de lutter efficacement contre la pêche illégale, non déclarée et non réglementée (INN) dans les eaux sénégalaises.",
    },
    {
      title: "Gestion des licences de pêche",
      content:
        "La Direction gère l'octroi des licences de pêche pour les navires nationaux et étrangers. Le processus implique une évaluation rigoureuse des demandes, tenant compte de l'état des stocks halieutiques et des quotas établis. En 2023, environ 250 licences ont été délivrées pour la pêche industrielle.",
    },
    {
      title: "Programmes de formation",
      content:
        "La DPM organise régulièrement des formations pour les acteurs du secteur. Ces programmes couvrent des sujets tels que les techniques de pêche durables, la sécurité en mer, la gestion des coopératives de pêche et la valorisation des produits halieutiques. En 2023, plus de 5000 pêcheurs ont bénéficié de ces formations.",
    },
    {
      title: "Aires Marines Protégées",
      content:
        "En collaboration avec le Ministère de l'Environnement, la DPM participe à la gestion des Aires Marines Protégées (AMP) du Sénégal. Le pays compte actuellement 9 AMP couvrant une superficie totale de plus de 1 700 km². Ces zones jouent un rôle crucial dans la préservation de la biodiversité marine et la régénération des stocks de poissons.",
    },
  ];

  return (
    <section className="discovery-accordion">
      <h2>Découvrez les actions de la Direction des Pêches Maritimes</h2>
      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <div
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <button
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="accordion-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryAccordion;
