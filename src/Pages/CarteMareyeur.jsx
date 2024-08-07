import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const CarteMareyeur = () => {
  return (
    <>
      <Navigation />
      <div className="pagee">
        <img src="../media/are2.jpeg" alt="" className="profilia" />
        <div className="titrere">
          <h2>Carte de Mareyeur</h2>
        </div>
        <div className="contentees">
          <div className="info-section">
            <h2>I.Catégorie de cartes </h2>
            <p>
              <li>
                la carte de mareyeur 1ère catégorie destinée aux
                pêcheurs-mareyeurs
              </li>
              <li>la carte de mareyeur 2ème catégorie</li>
              <li>
                la carte de mareyeur 3ème catégorie destinée au micro-mareyage
              </li>
              Toute personne physique ou morale de nationalité sénégalaise ou
              étrangère peut bénéficier de la carte de mareyeur. La carte de
              mareyeur est annuelle et est accordée pour la période allant du
              1er janvier au 31 décembre. Elle doit être validé chaque année.
            </p>
          </div>
          <div className="info-section">
            <h2>II.Quels sont les documents à fournir ? </h2>
            <p>
              <li>Deux (2) photos d’identité</li>
              <li>Une (1) copie légalisée de la Carte Nationale d’Identité</li>
              <li>
                Un (1) Extrait de Casier judiciaire datant de moins de trois (3)
                mois
              </li>
              <li>Une copie (1) copie légalisée du Registre de commerce</li>
              <li>Une Quittance de paiement au Trésor public</li>
            </p>
          </div>
          <div className="info-section">
            <h2>III.Quel est le coût ?</h2>
            <p>
              Le paiement s’effectue au Trésor public et est réparti comme suit
              :<li>la carte de mareyeur 1ère catégorie : 20 000 FCFA</li>
              <li>la carte de mareyeur 2ème catégorie : 30 000 FCFA</li>
              <li>la carte de micro-mareyeur : 10 000 FCFA</li>
            </p>
          </div>
          <div className="info-section">
            <h2>IV.la nature de la pièce délivrée ?</h2>
            <p>
              Une carte de mareyeur est délivrée par la Direction des Pêches
              Maritimes. Quel est le délai de délivrance ? 7 jours maximum.
            </p>
          </div>
          <div className="info-section">
            <h2>V.Comment renouveler ? </h2>
            <p>
              Une fois la carte de mareyeur délivrée, Elle est renouvelable
              chaque année du 1er janvier au 31 Mars sur acquittement de la
              quittance délivrée à cet effet par les services compétents.
            </p>
          </div>
          <div className="info-section">
            <h2>VI.Que faire en cas de perte ou de vol ?</h2>
            <p>
              Faire une déclaration de perte au niveau de la gendarmerie ou du
              commissariat de police Déposer la déclaration de perte auprès des
              services régionaux des pêches et de la surveillance pour
              l’établissement d’un duplicata.
            </p>
          </div>
          <div className="info-section">
            <h2>VII.Où s’adresser ? </h2>
            <p>
              Services régionaux des pêches et de la surveillance ou Postes de
              contrôle des pêches. Pour en savoir plus… Direction des pêches
              maritimes, 1, Rue Joris BP 289 Dakar – Tél. 33 823 01 37 Services
              régionaux des pêches et de la surveillance Postes de contrôle des
              Pêches et de la Surveillance Les services à contacter Ministère de
              l’Economie Maritime Direction des Pêches maritimes (DPM) Services
              régionaux des Pêches Postes de contrôle des Pêches et de la
              Surveillance Texte de référence Décret N°2009-1226 du 04 Novembre
              2009 relative à l’exercice de la profession de mareyeur
            </p>
          </div>
        </div>
      </div>
      <div className="voir"></div>
      <Footer />
    </>
  );
};

export default CarteMareyeur;
