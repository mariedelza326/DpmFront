import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const Immatriculation = () => {
  return (
    <>
      <Navigation />
      <div className="pagee">
        <img src="../media/DSC17.jpg" alt="" className="profilia" />
        <div className="titrere">
          <h2>Immatriculation d’embarcation de type artisanal</h2>
        </div>
        <div className="contentees">
          <div className="section01">
            <h2>I. Cadre juridique de l’immatriculation</h2>
            <p>
              Tenant compte des mutations intervenues dans le secteur, le
              gouvernement du Sénégal à travers le Ministère chargé de la pêche
              a fait adopter en 1998 une nouvelle Loi 98- 32 portant Code de la
              pêche maritime et son décret d’application qui consacre à son
              article 54, les conditions de marquages des navires de pêche. En
              application de l’article 54 visé ci- dessus et en marge de la
              préparation du programme national d’immatriculation informatisée,
              un nouveau arrêté n°1718 du 19 mars 2007 portant immatriculation
              et marquage des pirogues de type artisanal a été approuvé et signé
              par le Ministre chargé de la pêche suite à une large concertation
              avec les acteurs concernés.
            </p>
          </div>
          <div className="section02">
            <h2>II. Immatriculation d’une nouvelle embarcation </h2>
            <p>
              Toute nouvelle acquisition d’une embarcation de type artisanal
              destiné à la pêche, au transport et au loisir doit faire l’objet
              de demande d’autorisation préalable en utilisant le modèle de
              formulaire annexe 2 de l’arrêté n°1718 du 19 mars 2007. La demande
              d’autorisation est dûment signée par le requérant et déposée
              auprès du Chef de poste de contrôle de sa localité qui le transmet
              au Bureau d’ Immatriculation de la région avec un bordereau.
              L’autorisation émise par le Bureau immatriculation est un pré
              requis à la visite technique qui précède l’immatriculation dans le
              système.
            </p>
          </div>
          <div className="section03">
            <h2>III.Immatriculation d’une ancienne embarcation</h2>
            <p>
              Une ancienne embarcation jamais immatriculée dans le système doit
              faire une visite technique qui constitue le pré requis de son
              immatriculation. Le requérant fait la demande sous forme de
              formulaire (Annexe 3 de l’arrêté 1718 du 19 mars 2007) dument
              rempli par le Chef de Poste de contrôle de son ressort qui le
              transmet au Bureau d’immatriculation après avis favorable de la
              commission de visite technique.
            </p>
          </div>
          <div className="section02">
            <h2>IV. Modification</h2>
            <p>
              Elle vise à intégrer dans le fichier de chaque embarcation, tout
              changement lié aux caractéristiques physiques de la pirogue, aux
              équipements de sécurité à bord, au port d’attache, de moteur,
              d’engin de pêche. Ces changements sont portés sur le fichier
              individuel de la portée sur demande du propriétaire à l’aide du
              formulaire (Annexe 5 de l’arrêté 1718 du 19 mars 2007) dûment
              rempli et signé par le Poste de contrôle. Cette demande est
              transmise au bureau immatriculation de la région et doit portée la
              signature du requérant sous réserve d’une nullité.
            </p>
          </div>
          <div className="section03">
            <h2>V.Radiation </h2>
            <p>
              Elle vise à assurer un équilibre entre la base de données des
              immatriculations dans le système et la réalité du parc piroguier
              sur le terrain. En effet, pour des causes de vente (changement de
              propriétaire hors région d’immatriculation notamment, de perte
              physique et de destruction) la pirogue visée fait l’objet d’une
              radiation. La procédure de radiation est enclenchée par le
              propriétaire de l’embarcation qui fait la déclaration auprès du
              Chef de poste de contrôle du ressort qui remplit le formulaire
              dédié (Annexe 6 de l’arrêté 1718 du 19 mars 2007) qui doit porter
              la signature de ce dernier et du requérant avec à l’appui d’un
              certificat de vente authentifié. Un certificat de radiation
              sanctionne la procédure et la pirogue est radiée de la base des
              registres de l’immatriculation de la région. Ce certificat
              constitue un pré requis pour une ré – immatriculation de
              l’embarcation dans une autre région.s.
            </p>
          </div>
          <div className="section02">
            <h2>VI.Visite technique d’une embarcation de type artisanal</h2>
            <p>
              Elle vise à s’assurer de l’existence physique de la pirogue visée
              tout en veillant au respect des conditions minimales de sécurité
              relatif à l’état de la coque, à l’état des joints, à l’existence
              et à l’état des membrures, à l’état des marques si la pirogue est
              déjà immatriculée et à l’état des moteurs (Principal ou
              secondaire). Elle est effectuée par une commission de visite
              technique constituée du Chef de poste de contrôle qui assure le
              secrétariat, d’un représentant des pêcheurs et d’un charpentier.
              Ces deux derniers sont élus par leurs pairs. Cette visite
              technique peut être initiale ou de renouvellement. Pour ce dernier
              cas, elle intervient tous les ans pour assurer la fiabilité du
              fichier des immatriculations. Les décisions sont collégiales et
              peuvent faire l’objet de recours auprès du Chef de service
              régional des pêches et de la surveillance dont la décision est
              définitive.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Immatriculation;
