import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Division from "../Components/Division";
const DivisionArtisanal = () => {
  return (
    <>
      <Navigation />
      <div className="division">
        <img src="./media/artisanale.jpg" alt="" className="profilia" />
        <div className="titlee">
          <h2>Division de la Pêche Artisanale</h2>
        </div>
        <div className="dpm">
          {/* <div className="circle">
            <img src="./media/industrielle.jpg" alt="Image" />
          </div> */}

          <div className="textes">
            <div className="texte1">
              <h1>I.Mission</h1>
              <p>
                La Division de la Pêche Artisanale a pour mission principale de
                soutenir les pêcheurs artisans dans leurs activités tout en
                préservant les ressources marines pour les générations futures.
                Elle vise à promouvoir des pratiques de pêche durables, à
                garantir la sécurité alimentaire des populations locales et à
                contribuer au développement socio-économique des communautés
                côtières.
              </p>
            </div>
            <div className="texte1">
              <h1>II.Organisation</h1>
              <p>
                L'organisation de la Division de la Pêche Artisanale est
                structurée de manière à répondre efficacement aux besoins
                spécifiques des pêcheurs artisans et des communautés locales.
                Elle comprend des départements dédiés à la gestion des licences
                de pêche, à la surveillance des activités de pêche, au
                développement des infrastructures et des capacités, à la
                formation professionnelle, ainsi qu'à la sensibilisation et à la
                communication.
              </p>
            </div>
          </div>
          <div className="textes">
            <div className="texte1">
              <h1>III.Realisations</h1>
              <p>
                La Division de la Pêche Artisanale a accompli plusieurs
                réalisations significatives. Elle a réussi à mettre en place un
                système efficace de gestion des licences de pêche artisanale,
                permettant une meilleure régulation et traçabilité des activités
                de pêche. Elle a aussi renforcé les capacités des pêcheurs à
                travers des programmes de formation, améliorant ainsi leurs
                compétences et leurs connaissances en matière de pratiques
                durables.
              </p>
            </div>
            <div className="texte1">
              <h1>IV.Activites</h1>
              <p>
                Les activités de la Division de la Pêche Artisanale incluent la
                délivrance et le suivi des licences de pêche, la surveillance
                régulière des zones de pêche pour assurer le respect des
                réglementations, la formation des pêcheurs aux techniques de
                pêche durables, la sensibilisation des communautés locales aux
                enjeux de conservation marine, ainsi que le soutien aux
                initiatives de développement économique et social dans les zones
                côtières.
              </p>
            </div>
          </div>
          <div className="textes">
            <div className="texte1">
              <h1>V.Projets</h1>
              <p>
                La Division de la Pêche Artisanale met en œuvre divers projets
                visant à améliorer les conditions de travail et les revenus des
                pêcheurs artisans, à promouvoir des techniques de pêche
                respectueuses de l'environnement, à renforcer les organisations
                de pêcheurs et à développer les infrastructures portuaires et
                les marchés locaux.
              </p>
            </div>
            <div className="texte1">
              <h1>VI.Autres</h1>
              <p>
                En plus de ses activités et projets, la Division de la Pêche
                Artisanale s'engage dans d'autres initiatives telles que la
                recherche de financements pour soutenir ses programmes, la
                collaboration avec des organisations partenaires nationales et
                internationales, ainsi que la participation à des événements et
                des forums pour partager les meilleures pratiques et les leçons
                apprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DivisionArtisanal;
