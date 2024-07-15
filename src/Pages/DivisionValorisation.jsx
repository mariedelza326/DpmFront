import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Division from "../Components/Division";
const DivisionValorisation = () => {
  return (
    <>
      <Navigation />
      <div className="division">
        <img src="./media/sea.jpg" alt="" className="profilia" />
        <div className="titlee">
          <h2>
            Division de la Valorisation des Produits de la Pêche artisanale
          </h2>
        </div>
        <div className="dpm">
          {/* <div className="circle">
            <img src="./media/industrielle.jpg" alt="Image" />
          </div> */}

          <div className="textes">
            <div className="texte1">
              <h1>I.Mission</h1>
              <p>
                La Division de la Valorisation des Produits de la Pêche
                Artisanale a pour mission de maximiser la valeur ajoutée des
                produits de la pêche artisanale. Elle vise à développer des
                techniques de transformation innovantes, à améliorer la qualité
                et la traçabilité des produits, et à créer des opportunités de
                marché pour les pêcheurs artisans, contribuant ainsi à leur
                développement économique et à la sécurité alimentaire.
              </p>
            </div>
            <div className="texte1">
              <h1>II.Organisation</h1>
              <p>
                L'organisation de la Division de la Valorisation des Produits de
                la Pêche Artisanale est structurée pour répondre aux besoins
                spécifiques de la valorisation des produits marins. Elle
                comprend des départements spécialisés dans la recherche et le
                développement, la formation et le renforcement des capacités, la
                qualité et la traçabilité des produits, ainsi que la promotion
                et la commercialisation.
              </p>
            </div>
          </div>
          <div className="textes">
            <div className="texte1">
              <h1>III.Realisations</h1>
              <p>
                La Division de la Valorisation des Produits de la Pêche
                Artisanale a accompli plusieurs réalisations importantes. Elle a
                mis en place des centres de transformation et de conditionnement
                équipés de technologies modernes, améliorant ainsi la qualité et
                la durée de conservation des produits. Elle a développé des
                labels de qualité reconnus, augmentant la confiance des
                consommateurs et la demande pour les produits artisanaux. Des
                formations ont été dispensées aux pêcheurs et aux
                transformateurs, leur permettant d'adopter des pratiques plus
                efficaces et durables. En outre, la Division a réussi à ouvrir
                de nouveaux marchés pour les produits de la pêche artisanale,
                tant au niveau national qu’international, augmentant ainsi les
                revenus des pêcheurs artisans.
              </p>
            </div>
            <div className="texte1">
              <h1>IV.Activites</h1>
              <p>
                Les activités de la Division de la Valorisation des Produits de
                la Pêche Artisanale incluent le développement et la diffusion de
                techniques de transformation des produits de la pêche, la
                formation des pêcheurs et des transformateurs sur les meilleures
                pratiques, l'assurance de la qualité et de la traçabilité des
                produits, la mise en place de chaînes de valeur efficaces, ainsi
                que la promotion des produits sur les marchés locaux et
                internationaux.
              </p>
            </div>
          </div>
          <div className="textes">
            <div className="texte1">
              <h1>V.Projets</h1>
              <p>
                La Division de la Valorisation des Produits de la Pêche
                Artisanale mène divers projets visant à améliorer la
                transformation et la commercialisation des produits de la pêche
                artisanale. Ces projets incluent la création de centres de
                transformation modernes, le développement de labels de qualité,
                la mise en place de systèmes de traçabilité, la formation des
                acteurs de la chaîne de valeur, et l’organisation de campagnes
                de promotion pour sensibiliser les consommateurs à la valeur des
                produits artisanaux.
              </p>
            </div>
            <div className="texte1">
              <h1>VI.Autres</h1>
              <p>
                En plus de ses activités et projets, la Division de la
                Valorisation des Produits de la Pêche Artisanale s’engage dans
                d'autres initiatives telles que la recherche de financements
                pour soutenir ses programmes, la collaboration avec des
                organisations nationales et internationales, et la participation
                à des foires et salons professionnels pour promouvoir les
                produits de la pêche artisanale.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DivisionValorisation;
