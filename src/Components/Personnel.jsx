import React, { useState } from "react";

const tabs = [
  {
    title: "Directeur",
    people: [
      {
        id: 1,
        name: "Mr Diene Faye",
        job: "Directeur de la Direction des Peches Maritime",
        photo: "../media/dg7.jpeg",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    ],
  },
  {
    title: "Equipes",
    people: [
      {
        id: 1,
        name: "Mrs Gnagna Diop",
        job: "Secretariat",
        photo: "../media/sea.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 2,
        name: "Mr Moussa Cisse",
        job: "Bureau de Gestion",
        photo: "../media/sailing.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 3,
        name: "Mr Pape Amadou Thiam ",
        job: "Bureau Courier",
        photo: "../media/entete.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 4,
        name: "Mr Daouda Gueye",
        job: "Centre de Peche de Mission",
        photo: "../media/fish.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 5,
        name: "Mrs Fatima Kane ",
        job: "Bureau Legislation",
        photo: "../media/jelly.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 6,
        name: " Mr Malang Sadio ",
        job: "Bureau Legislation",
        photo: "../media/unreal.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 7,
        name: "Mr Moustapha Diop ",
        job: "Bureau Informatique",
        photo: "../media/turtle.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 8,
        name: "Mrs Mariama Dioh",
        job: "Bureau de la Documentation de l'information et de la communication",
        photo: "../media/mari.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 9,
        name: "Mrs Aminata Ndiaye ",
        job: "Bureau Suivi Evaluation",
        photo: "../media/boat.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 10,
        name: "Mr Coumba Ndoffene Diouf ",
        job: "Bureau de l'Amenagement des peches ",
        photo: "../media/beach.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 11,
        name: "Mrs Aissatou Fall Ndoye",
        job: "Bureau de l'Environnement et des Changements Climatiques",
        photo: "../media/ocean1.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 12,
        name: "Mrs Mame Diarra Loum",
        job: "Bureau des Statistiques",
        photo: "../media/ocean2.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 13,
        name: "Mr Sidiya Diouf ",
        job: "Division de la Peche Artisanal",
        photo: "../media/ocean3.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 14,
        name: "Mr Mbaye Ndialou Seck",
        job: "Bureau de l'immatriculation des permis de peches",
        photo: "../media/ocean4.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 15,
        name: "Mrs Amy Gueye",
        job: "Bureau d'Appui aux Organisations Professionnelles",
        photo: "../media/ocean6.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 16,
        name: "Mrs Elizabeth Mbaye  ",
        job: "Bureau d'Appui aux Activites du Genre et de l'Equite",
        photo: "../media/ocean7.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 17,
        name: "Mr Idrissa Yaya Dieme ",
        job: "Bureau de la Gouvernance Locale",
        photo: "../media/ocean8.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 18,
        name: "Mr Ibrahima Diouf  ",
        job: "Division de la peche industrielle",
        photo: "../media/ocean9.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 19,
        name: "Mr Modou Mbengue  ",
        job: "Bureau des Autorisations de Peche",
        photo: "../media/ocean10.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 20,
        name: "Mr Edouard Mendy ",
        job: "Bureau de Suivie de la Production",
        photo: "../media/ocean11.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 21,
        name: "Mr Amie Gueye",
        job: "Bureau des Organisations des Peches ",
        photo: "../media/ocean12.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 22,
        name: "Mr Assane Sow ",
        job: "Division de la Valorisation des Produits de la Peches Artisanal ",
        photo: "../media/ocean12.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 23,
        name: "Mr Abdou Diop",
        job: "Bureau des Infrastructures de la Peche Maritime",
        photo: "../media/ocean12.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 24,
        name: "Mrs Hortence K.Diatta",
        job: "Bureau des Organisations des Peches ",
        photo: "../media/ocean12.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        id: 25,
        name: "Mr Marc Emilien Coly ",
        job: "Bureau de Suivi de la Valorisation des Produits de la Peche ",
        photo: "../media/ocean12.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    ],
  },
  {
    title: "Chefs de région",
    people: [
      {
        id: 1,
        name: "Mr Amadou Lamine Diagne",
        job: "SRPS Saint-louis",
        photo: "../media/mer1.jpg",
        linkedin: "https://linkedin.com/in/chef1",
      },
      {
        id: 2,
        name: "Mr Cherif Sambou ",
        job: "SRPS Louga",
        photo: "../media/mer2.jpg",
        linkedin: "https://linkedin.com/in/chef2",
      },
      {
        id: 3,
        name: "Mr Ismaila Ndiaye",
        job: "SRPS Dakar",
        photo: "../media/mer3.jpg",
        linkedin: "https://linkedin.com/in/chef3",
      },
      {
        id: 4,
        name: "Mr Ibrahima Lo",
        job: "SRPS Thies",
        photo: "../media/mer4.jpg",
        linkedin: "https://linkedin.com/in/chef4",
      },
      {
        id: 5,
        name: "Mr Famara Niassy",
        job: "SRPS Fatick",
        photo: "../media/mer5.jpg",
        linkedin: "https://linkedin.com/in/chef5",
      },
      {
        id: 6,
        name: "Mr Abdoulaye Ndep Sene",
        job: "SRPS Kaolack",
        photo: "../media/mer6.jpg",
        linkedin: "https://linkedin.com/in/chef6",
      },
      {
        id: 7,
        name: "Mr Abdoulaye Diedhiou",
        job: "SRPS Ziguinchor",
        photo: "../media/mer7.jpg",
        linkedin: "https://linkedin.com/in/chef7",
      },
    ],
  },
];

const PersonnelPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCarouselIndex(0);
  };

  const handlePrevClick = () => {
    setCarouselIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCarouselIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(tabs[activeTab].people.length / 3) - 1)
    );
  };

  const renderCards = () => {
    const people = tabs[activeTab].people;
    if (activeTab === 0) {
      return (
        <div className="single-card">
          {people.map((person) => (
            <div key={person.id} className="card">
              <div className="photo">
                <img src={person.photo} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.job}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          ))}
        </div>
      );
    } else {
      const startIndex = carouselIndex * 3;
      const endIndex = startIndex + 3;
      const visiblePeople = people.slice(startIndex, endIndex);

      return (
        <div className="carousel">
          <button
            className="nav-button prev"
            onClick={handlePrevClick}
            disabled={carouselIndex === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="cards">
            {visiblePeople.map((person) => (
              <div key={person.id} className="card">
                <div className="photo">
                  <img src={person.photo} alt={person.name} />
                </div>
                <h3>{person.name}</h3>
                <p>{person.job}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            ))}
          </div>
          <button
            className="nav-button next"
            onClick={handleNextClick}
            disabled={endIndex >= people.length}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="personnel-page">
      <h1>GOUVERNANCE</h1>
      <p>
        La clé de voûte du développement de la Direction des Pêches Maritimes
        repose sur une équipe hautement performante et une gouvernance
        respectant les plus hauts standards internationaux. Grâce à une vision
        stratégique et une gestion rigoureuse, la Direction des Pêches Maritimes
        s'engage à promouvoir une pêche durable et responsable. Notre équipe,
        composée de professionnels expérimentés et dévoués, travaille sans
        relâche pour assurer la préservation des ressources maritimes, la
        protection de l'environnement marin et le développement économique des
        communautés côtières. En adoptant des pratiques de gestion transparentes
        et inclusives, nous visons à renforcer la confiance et la collaboration
        avec tous nos partenaires et parties prenantes..
      </p>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {renderCards()}
    </div>
  );
};

export default PersonnelPage;
