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
          <div className="section01">
            <h2>I.Catégories </h2>
            <p>
              <li>le permis A pour la pêche à pied</li>
              <li>le permis B pour les pirogues de 0 à 13 mètres</li>
              <li>le permis C pour les pirogues de plus de 13 mètres</li>
              Toute personne physique ou morale de nationalité sénégalaise ou
              étrangère. Trois catégories d’acteurs peuvent prétendre au permis
              : Le pêcheur à pieds La pirogue de 0 à 13 mètres La pirogue de
              plus de 13 mètres Quand demander à obtenir un permis de pêche
              artisanale ? Le permis de pêche artisanale est accordé pour la
              période allant du 1er janvier au 31 décembre. Il doit être validé
              chaque année.
            </p>
          </div>
          <div className="section02">
            <h2>II.Documents à Fournir ?</h2>
            <p>
              <li>Un formulaire à remplir de demande de permis</li>
              <li>
                Une photocopie de la pièce d’identification pour les pêcheurs à
                pieds
              </li>
              <li>
                Une photocopie de la carte d’immatriculation pour les pirogues
              </li>
            </p>
          </div>
          <div className="section03">
            <h2>III. le coût ?</h2>
            <p>
              Les redevances du permis de pêche artisanale sont fixées à des
              montants forfaitaires annuels répartis comme suit :
              <li>Catégorie A : 5 000 FCFA pour les pêcheurs à pieds</li>
              <li>Catégorie B : 15 000 FCFA pour les pirogues de 0 à 13 m</li>
              <li>
                Catégorie C : 25 000 FCFA pour les pirogues de plus de 13 m
              </li>
              Pour les ressortissants des pays africains pêchant en dehors de
              tout accord de leur pays avec le Sénégal. Les redevances sont
              fixées ainsi qu’il suit :
              <li>Catégorie A : 100 000 FCFA pour les pêcheurs à pieds</li>
              <li>Catégorie B : 200 000 FCFA pour les pirogues de 0 à 13 m</li>
              <li>
                Catégorie C : 300 000 FCFA pour les pirogues de plus de 13 m
              </li>
              Le paiement de la redevance est effectué sur la base d’une
              déclaration comprenant les renseignements ci-après :
              <li>L’identité et les caractéristiques de la pirogue</li>
              <li>L’identité et l’adresse complète du propriétaire</li>
              <li>Le type de permis et le montant de la redevance.</li>
            </p>
          </div>
          <div className="section02">
            <h2>IV. la nature de la pièce délivrée ?</h2>
            <p>
              Un permis de pêche délivré par le chef du service régional des
              pêches et de la surveillance. Le délai de délivrance est de 7
              jours.
            </p>
          </div>
          <div className="section03">
            <h2>V.Comment renouveler ?</h2>
            <p>
              Une fois le permis délivré, il est renouvelable chaque année du
              1er janvier au 31 décembre sur acquittement de la quittance
              délivrée à cet effet par les services compétents.
            </p>
          </div>
          <div className="section02">
            <h2>VI.Que faire en cas de perte ou de vol ?</h2>
            <p>
              <li>
                Faire une déclaration de perte au niveau de la gendarmerie ou du
                commissariat de police
              </li>
              <li>
                Déposer la déclaration de perte auprès des services régionaux
                des pêches et de la surveillance pour l’établissement d’un
                duplicata.
              </li>
            </p>
          </div>
          <div className="section03">
            <h2>VII.Où s’adresser ?</h2>
            <p>
              S'adresser aux Services régionaux des pêches et de la
              surveillance. Pour en savoir plus…
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
              Les services à contacter:
              <li>Ministère de l’Economie maritime</li>
              <li>Direction des Pêches maritimes (DPM)</li>
              <li>
                Direction de la Protection et de la Surveillance des pêches
                (DPSP)
              </li>
              <li>Services régionaux de pêche</li>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsMission;
