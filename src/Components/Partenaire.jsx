import React from "react";

const Partenaire = () => {
  const items = [
    {
      title: "Banque Mondial",
      imageUrl: "../media/BM.jpg",
      link: "https://www.worldbank.org",
    },
    {
      title: "JICA",
      imageUrl: "../media/JICA.jpg",
      link: "https://www.jica.go.jp/english/",
    },
    {
      title: "Union Européenne",
      imageUrl: "../media/LOGO.jpg",
      link: "https://europa.eu",
    },
    {
      title: "USAID",
      imageUrl: "../media/USAID.jpg",
      link: "https://www.usaid.gov",
    },
  ];

  return (
    <div className="contain">
      <header>
        <h1>Partenaires</h1>
        <p>
          En tant que Direction des Pêches Maritimes, nos partenariats avec la
          Banque Mondiale, l'Union Européenne, la JICA et l'USAID renforcent nos
          initiatives de développement durable. Ensemble, nous améliorons la
          gestion des ressources marines, la formation des pêcheurs et les
          infrastructures portuaires pour un avenir maritime prospère. Grâce à
          ces collaborations stratégiques, nous créons un impact positif durable
          sur les communautés côtières.
        </p>
      </header>
      <div className="items-container">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="item">
            <div className="image-container">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partenaire;
