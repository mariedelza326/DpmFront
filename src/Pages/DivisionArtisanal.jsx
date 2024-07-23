import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DivisionArtisanal = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { title: "I. Mission", id: "mission", icon: "🎯" },
    { title: "II. Organisation", id: "organisation", icon: "🏢" },
    { title: "III. Réalisations", id: "realisations", icon: "🏆" },
    { title: "IV. Activités", id: "activites", icon: "🚢" },
    { title: "V. Projets", id: "projets", icon: "📊" },
    { title: "VI. Autres", id: "autres", icon: "✨" },
  ];

  const sectionContent = {
    mission:
      "La Division de la Pêche Artisanale a pour mission principale de soutenir les pêcheurs artisans dans leurs activités tout en préservant les ressources marines pour les générations futures. Elle vise à promouvoir des pratiques de pêche durables, à garantir la sécurité alimentaire des populations locales et à contribuer au développement socio-économique des communautés côtières.",
    organisation:
      "L'organisation de la Division de la Pêche Artisanale est structurée de manière à répondre efficacement aux besoins spécifiques des pêcheurs artisans et des communautés locales. Elle comprend des départements dédiés à la gestion des licences de pêche, à la surveillance des activités de pêche, au développement des infrastructures et des capacités, à la formation professionnelle, ainsi qu'à la sensibilisation et à la communication.",
    realisations:
      "La Division de la Pêche Artisanale a accompli plusieurs réalisations significatives. Elle a réussi à mettre en place un système efficace de gestion des licences de pêche artisanale, permettant une meilleure régulation et traçabilité des activités de pêche. Elle a aussi renforcé les capacités des pêcheurs à travers des programmes de formation, améliorant ainsi leurs compétences et leurs connaissances en matière de pratiques durables.",
    activites:
      "Les activités de la Division de la Pêche Artisanale incluent la délivrance et le suivi des licences de pêche, la surveillance régulière des zones de pêche pour assurer le respect des réglementations, la formation des pêcheurs aux techniques de pêche durables, la sensibilisation des communautés locales aux enjeux de conservation marine, ainsi que le soutien aux initiatives de développement économique et social dans les zones côtières.",
    projets:
      "La Division de la Pêche Artisanale met en œuvre divers projets visant à améliorer les conditions de travail et les revenus des pêcheurs artisans, à promouvoir des techniques de pêche respectueuses de l'environnement, à renforcer les organisations de pêcheurs et à développer les infrastructures portuaires et les marchés locaux.",
    autres:
      "En plus de ses activités et projets, la Division de la Pêche Artisanale s'engage dans d'autres initiatives telles que la recherche de financements pour soutenir ses programmes, la collaboration avec des organisations partenaires nationales et internationales, ainsi que la participation à des événements et des forums pour partager les meilleures pratiques et les leçons apprises.",
  };

  return (
    <>
      <Navigation />
      <div className="division">
        <img src="./media/artisanale.jpg" alt="" className="profilia" />
        <div className="titlee">
          <h2>Division de la Pêche Artisanale</h2>
        </div>
        <div className="dpm">
          <div className="section-buttons">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`section-button ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="icon">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
          <div className="section-content">
            {activeSection && (
              <div className="active-section">
                <h2>{sections.find((s) => s.id === activeSection).title}</h2>
                <p>{sectionContent[activeSection]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DivisionArtisanal;
