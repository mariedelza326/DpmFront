import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DetailsMission = () => {
  return (
    <>
      <Navigation />
      <div className="page">
        <img src="../media/dg6.jpeg" alt="" className="profilia" />
        <div className="titles">
          <h1>Qui sommes nous!</h1>
        </div>
        <div className="contentes">
          <section className="mission">
            <h2>I. Notre Mission</h2>
            <p>
              La Direction des Pêches Maritimes (DPM) est chargée de la mise en
              œuvre de la politique de l'État en matière de pêche maritime. Ses
              missions, définies par le Décret n°1255 du 23 août 2011 et son
              fonctionnement organisé selon l'Arrêté ministériel n°02466 du 19
              avril 2006, comprennent diverses responsabilités.
            </p>
            <p>
              Elle élabore et met en œuvre la politique de pêche maritime,
              développant des stratégies et des plans d'action pour garantir une
              exploitation durable des ressources marines tout en préservant les
              écosystèmes.
            </p>
            <p>
              La DPM gère les ressources halieutiques en surveillant et en
              régulant les stocks de poissons pour assurer une pêche durable,
              appliquant des quotas et des mesures de conservation lorsque
              nécessaire.
            </p>
            {/* Ajoutez d'autres paragraphes ici */}
          </section>

          <section className="organisation">
            <h2>II. Organisation</h2>
            <p>
              L'organisation de la Direction des Pêches Maritimes (DPM), telle
              que définie par l'Arrêté ministériel n°02466 du 19 avril 2006,
              reflète la complexité et l'ampleur de ses responsabilités dans la
              gestion de la pêche maritime.
            </p>
            <p>
              La DPM est généralement structurée en plusieurs divisions ou
              départements, chacun étant chargé de domaines spécifiques liés à
              la gestion et à la réglementation de la pêche.
            </p>
            {/* Ajoutez d'autres paragraphes ici */}
          </section>

          <section className="activites">
            <h2>III. Nos Activités</h2>
            <p>
              Pour vous fournir une vue d'ensemble de nos activités, voici une
              analyse de nos services et de leur rôle dans la prestation de nos
              services :
            </p>
            <p>
              Nous sommes structurés en plusieurs divisions ou départements,
              chacun étant dédié à des aspects spécifiques de notre prestation
              de services. Ces divisions comprennent souvent des équipes
              spécialisées dans des domaines tels que le service à la clientèle,
              le développement produit, la recherche et le développement, le
              marketing et la communication, les opérations, ainsi que la
              gestion administrative et financière.
            </p>
            {/* Ajoutez d'autres paragraphes ici */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsMission;
