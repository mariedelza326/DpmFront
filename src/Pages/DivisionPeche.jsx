import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DivisionPeche = () => {
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
      "La Division de l'Aménagement des Pêches a pour mission principale d'élaborer et de mettre en œuvre des plans de gestion durable des pêcheries. Elle vise à protéger les écosystèmes marins, à optimiser l'utilisation des ressources halieutiques et à assurer la viabilité économique des secteurs de la pêche. La Division travaille à équilibrer les besoins économiques, sociaux et environnementaux pour une exploitation durable.",
    organisation:
      "L'organisation de la Division de l'Aménagement des Pêches est structurée pour répondre efficacement aux défis de la gestion des ressources halieutiques. Elle comprend des départements spécialisés dans l'analyse scientifique, la planification des pêcheries, la réglementation et la mise en œuvre des politiques. Cette structure permet une coordination optimale pour atteindre les objectifs de conservation et de développement.",
    realisations:
      "La Division de l'Aménagement des Pêches a accompli plusieurs réalisations importantes. Elle a établi des plans de gestion des pêches pour diverses espèces, contribuant à la préservation des stocks halieutiques. Elle a aussi amélioré les systèmes de surveillance et de contrôle, réduisant ainsi les pratiques de pêche illégales. Des campagnes de restauration des habitats marins ont été menées avec succès, revitalisant les écosystèmes côtiers. En outre, la Division a renforcé les compétences des pêcheurs grâce à des programmes de formation continue, améliorant leur connaissance des pratiques durables et de la réglementation en vigueur.",
    activites:
      "Les activités de la Division de l'Aménagement des Pêches incluent la collecte et l'analyse de données sur les stocks de poissons, l'évaluation des impacts environnementaux des pratiques de pêche, la conception et la mise en œuvre de plans de gestion, la régulation des efforts de pêche et la formation des pêcheurs sur les pratiques durables. Ces activités assurent une gestion informée et adaptable des ressources halieutiques.",
    projets:
      "La Division de l'Aménagement des Pêches mène divers projets visant à améliorer la durabilité et la rentabilité des pêcheries. Ces projets incluent la restauration des habitats marins, le développement de nouvelles techniques de pêche respectueuses de l'environnement, la mise en place de systèmes de suivi et de traçabilité des captures, et le renforcement des capacités des organisations de pêcheurs à travers des formations et des soutiens logistiques.",
    autres:
      "En plus de ses activités et projets, la Division de l'Aménagement des Pêches s'engage dans d'autres initiatives telles que la recherche de financements pour soutenir ses programmes, la collaboration avec des organisations nationales et internationales, et la participation à des conférences et des forums pour échanger sur les meilleures pratiques et les innovations en matière de gestion des pêches.",
  };

  return (
    <>
      <Navigation />
      <div className="division">
        <img src="./media/amenagement.jpg" alt="" className="profilia" />
        <div className="titlee">
          <h2>Division de l'Aménagement des Pêches</h2>
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

export default DivisionPeche;
