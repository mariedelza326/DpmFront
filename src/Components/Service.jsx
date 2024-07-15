import React from "react";

const Service = () => {
  return (
    <div className="containere">
      <header className="headere">
        <h1 className="title">SERVICES AUX USAGERS</h1>
        <p className="description">
          La Direction des pêche maritime offrent un soutien administratif,
          technique, et social aux acteurs, favorisant la conformité
          réglementaire et la durabilité de l'industrie. Ils incluent la gestion
          des licences, la formation aux pratiques durables, et l'entretien des
          infrastructures portuaires.
        </p>
      </header>
      <div className="icon-section">
        <a href="/pecheartisanal" className="icon-link">
          <div className="icon-box">
            <i className="icon" style={{ color: " #264653" }}>
              🐟
            </i>
            <h2 className="icon-title">Permis de Pêche artisanale </h2>
            <p className="icon-description">
              L’exercice de la pêche artisanale, dans les eaux sous juridiction
              sénégalaise est soumis à l’obligation d’obtenir un permis de pêche
              délivré par les chefs des services régionaux de la pêche et de la
              surveillance. Le permis de pêche est réparti en 3 catégories : le
              permis A pour la pêche à pied le permis B pour pour les pirogues
              de 0 à 13 mètres le permis C pour les pirogues ...
            </p>
          </div>
        </a>
        <a href="/pecheindustriel" className="icon-link">
          <div className="icon-box">
            <i className="icon" style={{ color: " #264653" }}>
              🎣
            </i>
            <h2 className="icon-title"> Licence de Pêche industrielle </h2>
            <p className="icon-description">
              Comment obtenir une licence de pêche L’exercice de la pêche
              industrielle, dans les eaux maritimes sous juridiction sénégalaise
              est subordonné à la possession d’une licence de pêche en cours de
              validité, délivrée par le ministre chargé de la Pêche maritime,
              après avis de la commission consultative d’attribution des
              licences. Il existe quatre types de licences…
            </p>
          </div>
        </a>
        <a href="/cartemareyeur" className="icon-link">
          <div className="icon-box">
            <i className="icon" style={{ color: " #264653" }}>
              🚤
            </i>
            <h2 className="icon-title">Carte de Mareyeur </h2>
            <p className="icon-description">
              L’exercice de la profession de mareyeur est soumis à l’obligation
              d’obtenir une carte de mareyeur. Il existe trois (3) types de
              catégorie de cartes : la carte de mareyeur 1ère catégorie destinée
              aux pêcheurs-mareyeursla carte de mareyeur 2ème catégoriela carte
              de mareyeur 3ème catégorie destinée au micro-mareyageToute
              personne physique ou morale de nationalité sénégalaise ou
              étrangère…
            </p>
          </div>
        </a>
        <a href="/immatriculation" className="icon-link">
          <div className="icon-box">
            <i className="icon" style={{ color: " #264653" }}>
              ⚓
            </i>
            <h2 className="icon-title">
              Immatriculation d’embarcation de type artisanal
            </h2>
            <p className="icon-description">
              Procédures administratives d’immatriculation d’une embarcation de
              type artisanal1. Cadre juridique de l’immatriculationTenant compte
              des mutations intervenues dans le secteur, le gouvernement du
              Sénégal à travers le Ministère chargé de la pêche a fait adopter
              en 1998 une nouvelle Loi 98- 32 portant...
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Service;
