import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Division from "../Components/Division";
const DivisionPeche = () => {
  return (
    <>
      <Navigation />
      <div className="division">
        <img src="./media/amenagement.jpg" alt="" className="profilia" />
        <div className="titlee">
          <h2>Division de l’Aménagement des Pêches</h2>
        </div>
        <div className="dpm">
          {/* <div className="circle">
            <img src="./media/industrielle.jpg" alt="Image" />
          </div> */}

          <div className="textes">
            <div className="texte1">
              <h1>I.Mission</h1>
              <p>
                La Division de l’Aménagement des Pêches a pour mission
                principale d'élaborer et de mettre en œuvre des plans de gestion
                durable des pêcheries. Elle vise à protéger les écosystèmes
                marins, à optimiser l'utilisation des ressources halieutiques et
                à assurer la viabilité économique des secteurs de la pêche. La
                Division travaille à équilibrer les besoins économiques, sociaux
                et environnementaux pour une exploitation durable.
              </p>
            </div>
            <div className="texte1">
              <h1>II.Organisation</h1>
              <p>
                L'organisation de la Division de l’Aménagement des Pêches est
                structurée pour répondre efficacement aux défis de la gestion
                des ressources halieutiques. Elle comprend des départements
                spécialisés dans l'analyse scientifique, la planification des
                pêcheries, la réglementation et la mise en œuvre des politiques.
                Cette structure permet une coordination optimale pour atteindre
                les objectifs de conservation et de développement.
              </p>
            </div>
          </div>
          <div className="textes">
            <div className="texte1">
              <h1>III.Realisations</h1>
              <p></p>
              La Division de l’Aménagement des Pêches a accompli plusieurs
              réalisations importantes. Elle a établi des plans de gestion des
              pêches pour diverses espèces, contribuant à la préservation des
              stocks halieutiques. Elle a aussi amélioré les systèmes de
              surveillance et de contrôle, réduisant ainsi les pratiques de
              pêche illégales. Des campagnes de restauration des habitats marins
              ont été menées avec succès, revitalisant les écosystèmes côtiers.
              En outre, la Division a renforcé les compétences des pêcheurs
              grâce à des programmes de formation continue, améliorant leur
              connaissance des pratiques durables et de la réglementation en
              vigueur.
            </div>
            <div className="texte1">
              <h1>IV.Activites</h1>
              <p>
                Les activités de la Division de l’Aménagement des Pêches
                incluent la collecte et l'analyse de données sur les stocks de
                poissons, l'évaluation des impacts environnementaux des
                pratiques de pêche, la conception et la mise en œuvre de plans
                de gestion, la régulation des efforts de pêche et la formation
                des pêcheurs sur les pratiques durables. Ces activités assurent
                une gestion informée et adaptable des ressources halieutiques.
              </p>
            </div>
          </div>
          <div className="textes">
            <div className="texte1">
              <h1>V.Projets</h1>
              <p>
                La Division de l’Aménagement des Pêches mène divers projets
                visant à améliorer la durabilité et la rentabilité des
                pêcheries. Ces projets incluent la restauration des habitats
                marins, le développement de nouvelles techniques de pêche
                respectueuses de l’environnement, la mise en place de systèmes
                de suivi et de traçabilité des captures, et le renforcement des
                capacités des organisations de pêcheurs à travers des formations
                et des soutiens logistiques.
              </p>
            </div>
            <div className="texte1">
              <h1>VI.Autres</h1>
              <p>
                En plus de ses activités et projets, la Division de
                l’Aménagement des Pêches s’engage dans d'autres initiatives
                telles que la recherche de financements pour soutenir ses
                programmes, la collaboration avec des organisations nationales
                et internationales, et la participation à des conférences et des
                forums pour échanger sur les meilleures pratiques et les
                innovations en matière de gestion des pêches.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DivisionPeche;
