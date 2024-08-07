import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const DetailsMission = () => {
  return (
    <>
      <Navigation />
      <div className="pagee">
        <img src="../media/are.jpeg" alt="" className="profilia" />
        <div className="titrere">
          <h2>Permis de Pêche artisanale</h2>
        </div>
        <div className="contentees">
          <section className="info-section">
            <h2>I. Catégories</h2>
            <ul>
              <li>Permis A pour la pêche à pied</li>
              <li>Permis B pour les pirogues de 0 à 13 mètres</li>
              <li>Permis C pour les pirogues de plus de 13 mètres</li>
            </ul>
            <p>
              Toute personne physique ou morale de nationalité sénégalaise ou
              étrangère. Le permis de pêche artisanale est accordé pour la
              période allant du 1er janvier au 31 décembre. Il doit être validé
              chaque année.
            </p>
          </section>

          <section className="info-section">
            <h2>II. Documents à Fournir</h2>
            <ul>
              <li>Un formulaire à remplir de demande de permis</li>
              <li>
                Une photocopie de la pièce d'identification pour les pêcheurs à
                pieds
              </li>
              <li>
                Une photocopie de la carte d'immatriculation pour les pirogues
              </li>
            </ul>
          </section>

          <section className="info-section">
            <h2>III. Le Coût</h2>
            <h3>Redevances pour les nationaux :</h3>
            <ul>
              <li>Catégorie A : 5 000 FCFA pour les pêcheurs à pieds</li>
              <li>Catégorie B : 15 000 FCFA pour les pirogues de 0 à 13 m</li>
              <li>
                Catégorie C : 25 000 FCFA pour les pirogues de plus de 13 m
              </li>
            </ul>
            <h3>Redevances pour les ressortissants africains :</h3>
            <ul>
              <li>Catégorie A : 100 000 FCFA pour les pêcheurs à pieds</li>
              <li>Catégorie B : 200 000 FCFA pour les pirogues de 0 à 13 m</li>
              <li>
                Catégorie C : 300 000 FCFA pour les pirogues de plus de 13 m
              </li>
            </ul>
          </section>

          <section className="info-section">
            <h2>IV. Nature de la Pièce Délivrée</h2>
            <p>
              Un permis de pêche délivré par le chef du service régional des
              pêches et de la surveillance. Le délai de délivrance est de 7
              jours.
            </p>
          </section>

          <section className="info-section">
            <h2>V. Comment Renouveler</h2>
            <p>
              Une fois le permis délivré, il est renouvelable chaque année du
              1er janvier au 31 décembre sur acquittement de la quittance
              délivrée à cet effet par les services compétents.
            </p>
          </section>

          <section className="info-section">
            <h2>VI. En Cas de Perte ou de Vol</h2>
            <ol>
              <li>
                Faire une déclaration de perte au niveau de la gendarmerie ou du
                commissariat de police
              </li>
              <li>
                Déposer la déclaration de perte auprès des services régionaux
                des pêches et de la surveillance pour l'établissement d'un
                duplicata
              </li>
            </ol>
          </section>

          <section className="info-section">
            <h2>VII. Où s'adresser</h2>
            <p>
              S'adresser aux Services régionaux des pêches et de la
              surveillance.
            </p>
            <h3>Pour en savoir plus :</h3>
            <ul>
              <li>
                Direction des pêches maritimes, Sphères ministérielles de
                Diamniadio
              </li>
              <li>
                Direction de la Protection et de la Surveillance des pêches
              </li>
              <li>
                Service régional des pêches et de la surveillance, Mermoz Dakar
              </li>
            </ul>
            <h3>Les services à contacter :</h3>
            <ul>
              <li>Ministère de l'Economie maritime</li>
              <li>Direction des Pêches maritimes (DPM)</li>
              <li>
                Direction de la Protection et de la Surveillance des pêches
                (DPSP)
              </li>
              <li>Services régionaux de pêche</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="voir"></div>
      <Footer />
    </>
  );
};

export default DetailsMission;
