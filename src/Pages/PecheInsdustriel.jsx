import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const PecheInsdustriel = () => {
  return (
    <>
      <Navigation />
      <div className="pagee">
        <img src="../media/are1.jpeg" alt="" className="profilia" />
        <div className="titrere">
          <h2>Licence de Pêche industrielle</h2>
        </div>
        <div className="contentees">
          <div className="section01">
            <h2>I.Comment obtenir une licence de pêche?</h2>
            <p>
              L’exercice de la pêche industrielle, dans les eaux maritimes sous
              juridiction sénégalaise est subordonné à la possession d’une
              licence de pêche en cours de validité, délivrée par le ministre
              chargé de la Pêche maritime, après avis de la commission
              consultative d’attribution des licences. Il existe quatre types de
              licences à l’intérieur desquelles existent des options de pêche :
              Licence de pêche démersale côtière Licence de pêche démersale
              profonde Licence de pêche pélagique côtière Licence de pêche
              pélagique hauturière
            </p>
          </div>
          <div className="section02">
            <h2>II.Qui peut obtenir une licence de pêche ? </h2>
            <p>
              Toute personne physique ou morale de nationalité sénégalaise ou
              étrangère. Trois catégories de navires peuvent prétendre à une
              licence de pêche : puceLes navires battant pavillon sénégalais
              puceLes navires étrangers affrétés par les sociétés sénégalaises
              puceLes navires battant pavillon d’un Etat avec lequel le Sénégal
              est lié par un accord. Quand demander à obtenir une licence de
              pêche ? :La demande peut être initiée à tout moment.
            </p>
          </div>
          <div className="section03">
            <h2>III.Quels sont les documents à fournir ?</h2>
            <p>
              <li>
                Une demande de licence adressée au ministre chargé de la pêche
              </li>
              <li>Les statuts de la société ou le registre de commerce</li>
              <li>Les caractéristiques techniques du navire</li>
              <li>puceL’acte de nationalité du navire</li>
              <li>
                Le formulaire de demande de licence dûment renseigné (à
                télécharger ici)
              </li>
            </p>
          </div>
          <div className="section02">
            <h2>III.Quel est le coût ?</h2>
            <p>
              Pas de frais pour le dépôt des demandes de licence. Toutefois,
              après avis favorable du ministre chargé de la Pêche maritime et
              après que l’armateur ait accompli les formalités administratives
              requises, notamment, par la délivrance de l’acte de nationalité
              sénégalaise du navire et l’attestation d’inscription au registre
              des navires de pêche industrielle délivrée par la direction de la
              Protection et de la Surveillance des Pêches. Un bulletin de
              liquidation est délivré à l’armateur pour payer la redevance de
              licence auprès du receveur des Domaines. Le coût de la licence est
              fonction du type de pêche et du tonnage jauge brute du navire.
            </p>
          </div>
          <div className="section03">
            <h2>IV.La Nature et le délai de la pièce délivrée? </h2>
            <p>
              Après paiement de la redevance, une licence, signée par le
              ministre chargé de la Pêche maritime, est délivrée à
              l’armateur.Les autorisations de pêche sont accordées pour une
              période de 6 mois, renouvelables une fois, pour permettre à
              l’armateur d’accomplir les formalités administratives requises.
            </p>
          </div>
          <div className="section02">
            <h2>V.Comment renouveler ?</h2>
            <p>
              Une fois, la licence délivrée, elle est renouvelable chaque année.
              Même procédure que les demandes de nouvelles licences, à
              l’exception de la saisine de la commission consultative
              d’attribution des licences de pêche. L’armateur retire la fiche de
              renouvellement de licence auprès de la direction des Pêches
              maritimes. Cette fiche doit être visée par les différents services
              impliqués (direction de la Marine marchande, direction de la
              Protection et de la Surveillance des pêches, direction des Pêches
              maritimes).
            </p>
          </div>
          <div className="section03">
            <h2>VI.Que faire en cas de perte ou de vol ? </h2>
            <p>
              Faire une déclaration de perte au niveau de la gendarmerie ou du
              commissariat de police et déposer la déclaration de perte auprès
              de la direction des Pêches maritimes.
            </p>
          </div>
          <div className="section02">
            <h2>VII.Où s’adresser ?</h2>
            <p>
              Bureau des licences de la Direction des Pêches maritimes. Pour en
              savoir plus… Direction des Pêches Maritimes. Les services à
              contacter
              <li>
                Direction de la Protection et de la Surveillance des pêches
                (DPSP)
              </li>
              <li>Direction des Pêches maritimes (DPM)</li>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PecheInsdustriel;
