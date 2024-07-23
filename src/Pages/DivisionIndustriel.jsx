import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DivisionIndustriel = () => {
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
      "La Division de la Pêche Industrielle s'engage à promouvoir une gestion durable des ressources marines tout en soutenant l'essor économique du secteur. Nos missions principales incluent la gestion des stocks halieutiques, la surveillance et le contrôle des activités de pêche, la recherche pour améliorer les techniques et réduire les impacts environnementaux, la promotion de pratiques durables et le soutien au développement économique des communautés côtières. En travaillant ensemble, nous visons à assurer une exploitation responsable des océans, contribuant ainsi à la sécurité alimentaire mondiale et à la préservation de la biodiversité marine.",
    organisation:
      "L'organisation de la Division de la Pêche Industrielle est structurée de manière efficace pour répondre aux défis de la gestion durable des ressources marines et à la promotion du développement économique du secteur. Elle comprend des équipes dédiées à la gestion des stocks halieutiques, à la surveillance et au contrôle des activités de pêche, à la recherche et au développement, à la promotion de pratiques durables, ainsi qu'au soutien au développement économique des communautés côtières. Cette organisation permet une coordination efficace des efforts pour assurer une exploitation responsable des océans et contribuer à la sécurité alimentaire mondiale, tout en préservant la biodiversité marine.",
    realisations:
      "La réalisation des missions de la Division de la Pêche Industrielle repose sur une approche collaborative et stratégique. À travers une coordination étroite entre ses différents départements, la Division met en œuvre des actions concrètes telles que la mise en place de quotas de pêche, la surveillance régulière des activités en mer, la recherche et le développement de nouvelles techniques durables, la sensibilisation des acteurs de l'industrie et des communautés côtières, ainsi que le soutien financier et logistique aux projets de développement. Cette approche proactive permet de garantir une exploitation responsable des ressources marines tout en favorisant la croissance économique et la préservation de l'environnement marin.",
    activites:
      "Les activités de la Division de la Pêche Industrielle sont diverses et complémentaires, visant à atteindre ses objectifs de gestion durable des ressources marines et de développement économique. Parmi ces activités figurent la collecte et l'analyse de données sur les stocks halieutiques, la surveillance des navires de pêche pour garantir le respect des réglementations, la recherche et l'innovation pour améliorer les pratiques de pêche et réduire les impacts environnementaux, la sensibilisation des acteurs de l'industrie et des communautés locales aux enjeux de durabilité, ainsi que le financement et l'appui aux projets de développement des infrastructures et des capacités. Grâce à ces activités variées et bien coordonnées, la Division contribue de manière significative à assurer une exploitation responsable des océans tout en stimulant la prospérité économique des régions côtières.",
    projets:
      "Les projets de la Division de la Pêche Industrielle sont conçus pour répondre aux défis spécifiques de la gestion des ressources marines et du développement économique dans les régions côtières. Parmi ces projets, on retrouve des initiatives visant à évaluer et à surveiller les stocks halieutiques, à mettre en œuvre des plans de gestion durable, à développer et à promouvoir l'utilisation de techniques de pêche respectueuses de l'environnement, à sensibiliser les acteurs de l'industrie et les communautés locales aux enjeux de durabilité, ainsi qu'à soutenir le développement des infrastructures portuaires et des capacités locales. Ces projets sont réalisés en collaboration avec des partenaires nationaux et internationaux et sont essentiels pour assurer une exploitation responsable des ressources marines tout en favorisant la croissance économique et le bien-être des populations dépendantes de la pêche.",
    autres:
      "Dans le cadre de ses activités, la Division de la Pêche Industrielle entreprend également diverses initiatives pour renforcer ses efforts en matière de gestion des ressources marines et de développement économique. Parmi ces initiatives figurent la formation et le renforcement des capacités des acteurs de l'industrie et des communautés côtières, la mise en place de partenariats avec des organisations nationales et internationales, la recherche de financements pour soutenir ses projets et programmes, ainsi que la participation à des conférences et des forums pour partager les meilleures pratiques et les leçons apprises. Ces initiatives complémentaires jouent un rôle crucial dans la réalisation de la vision de la Division pour une pêche industrielle durable et prospère, contribuant ainsi à la préservation des écosystèmes marins et au bien-être des populations qui en dépendent.",
  };

  return (
    <>
      <Navigation />
      <div className="division">
        <img src="./media/industrielle.jpg" alt="" className="profilia" />
        <div className="titlee">
          <h2>Division de la Pêche industrielle</h2>
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

export default DivisionIndustriel;
