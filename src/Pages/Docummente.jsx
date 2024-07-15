import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import FeaturesCarousel from "../Components/Features";
import CarouselWrap from "../Components/CarouselWrap";
const Docummente = () => {
  const [newsData, setNewsData] = useState([]);
  const [activeLink, setActiveLink] = useState("link1");
  const [cardsToShow, setCardsToShow] = useState(3);
  const initialCardsToShow = 3;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rapports/")
      .then((response) => {
        const sortedData = response.data.sort(
          (a, b) => new Date(b.date_publication) - new Date(a.date_publication)
        );
        setNewsData(sortedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setCardsToShow(initialCardsToShow);
  };

  const handleShowMore = () => {
    setCardsToShow(cardsToShow + 9000);
  };

  const handleShowLess = () => {
    setCardsToShow(initialCardsToShow);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <>
      <Navigation />
      <div className="documente-page">
        <img src="../media/mari.jpg" alt="" className="documente" />
        <div className="documente-content">
          <h1> De quoi il s'agit? </h1>
          <p>
            La Direction des Pêches Maritime s'engage à préserver et gérer
            durablement les ressources marines. En collaboration avec divers
            partenaires, nous promouvons une pêche responsable et équilibrée,
            tout en soutenant les communautés côtières et en favorisant le
            développement économique marin. Rejoignez-nous pour un avenir
            maritime durable.
          </p>
        </div>
      </div>
      <div className="docmente">
        <h2>Explorer La Documentation</h2>
      </div>
      <div className="links-container">
        <div className="link" onClick={() => handleLinkClick("link1")}>
          Rapports Statiques
        </div>
        <div className="link" onClick={() => handleLinkClick("link3")}>
          Categories
        </div>
        <div className="link" onClick={() => handleLinkClick("link4")}>
          Politiques & Strategies
        </div>
      </div>
      {activeLink === "link1" && (
        <div className="card-container">
          {newsData.slice(0, cardsToShow).map((item, index) => (
            <div className="card-item" key={index}>
              <img src={item.image} alt={item.titre} />
              <h2>{item.titre}</h2>
              <p>{truncateDescription(item.description, 7)}</p>
              <p>
                <i className="fas fa-calendar"></i>{" "}
                {new Date(item.date_publication).toLocaleDateString()}
              </p>

              <Link
                to={`/documentdetails/${item.id}`}
                className="more-info-btn"
              >
                En savoir plus <span className="arrow-icon">→</span>
              </Link>
            </div>
          ))}
          <div className="buttons-container">
            {cardsToShow < newsData.length && (
              <button className="see-more-btn" onClick={handleShowMore}>
                Les plus Anciens<span>&#x2192;</span>
              </button>
            )}
            {cardsToShow > initialCardsToShow && (
              <button className="see-less-btn" onClick={handleShowLess}>
                Les plus recents<span>&#x2192;</span>
              </button>
            )}
          </div>
        </div>
      )}
      {activeLink === "link3" && (
        <div className="flex-layout">
          <h1 className="title">Catégorie : MESA</h1>
          <div className="flex-container">
            <div className="box">
              <a href="#" className="texte-link">
                MESA – CEDEAO
              </a>
            </div>
            <div className="box">
              <a href="#" className="texte-link">
                MESA Quatrième Trimestre 2018
              </a>
            </div>
            <div className="box">
              <a href="#" className="texte-link">
                MESA Troisième Trimestre 2018
              </a>
            </div>
          </div>
          <div className="flex-container">
            <div className="box">
              <a href="#" className="texte-link">
                MESA Deuxième Trimestre 2018
              </a>
            </div>
            <div className="box">
              <a href="#" className="texte-link">
                MESA Premier Trimestre 2018
              </a>
            </div>
            <div className="box">
              <a href="#" className="texte-link">
                MESA Décembre 2017
              </a>
            </div>
          </div>
          <div className="flex-container">
            <div className="box">
              <a href="#" className="texte-link">
                MESA Novembre 2017
              </a>
            </div>
            <div className="box">
              <a href="#" className="texte-link">
                MESA Octobre 2017
              </a>
            </div>
            <div className="box">
              <a href="#" className="texte-link">
                MESA Septembre 2017
              </a>
            </div>
          </div>
        </div>
      )}
      {activeLink === "link4" && (
        <div className="custom-container">
          <section className="first-section">
            <div className="custom-content">
              <h2 className="custom-title">Politiques</h2>
              <p className="custom-text">
                La Direction des Pêches Maritimes s'engage à promouvoir la
                durabilité des ressources marines, assurer une gestion efficace
                des pêches et soutenir les communautés côtières. Nos politiques
                visent à protéger les écosystèmes marins tout en maximisant les
                bénéfices économiques et sociaux des pêches. Nous adoptons une
                approche écosystémique pour gérer les ressources, en veillant à
                ce que les activités de pêche ne compromettent pas la capacité
                des écosystèmes à se renouveler. Cela inclut la mise en œuvre de
                quotas de capture basés sur des données scientifiques,
                l'interdiction de la pêche dans certaines zones protégées et la
                promotion de pratiques de pêche sélectives.
              </p>
            </div>
            <div className="custom-image">
              <img src="../media/boate.jpg" alt="Image1" />
            </div>
          </section>
          <section className="second-section">
            <div className="custom-image">
              <img src="../media/sailing.jpg" alt="Image2" />
            </div>
            <div className="custom-content">
              <h2 className="custom-title">Stratégies</h2>
              <p className="custom-text">
                Pour mettre en œuvre nos politiques, nous avons élaboré des
                stratégies spécifiques. Nous investissons dans le renforcement
                des capacités de surveillance et de contrôle des activités de
                pêche, utilisant des technologies avancées comme le suivi par
                satellite des navires et la mise en place de systèmes de
                contrôle électronique des captures. Nous améliorons nos systèmes
                de collecte et d'analyse des données sur les stocks de poissons,
                les captures et les efforts de pêche. En collaboration avec des
                institutions de recherche, nous menons des études régulières
                pour évaluer l'état des ressources marines et adapter nos
                politiques.
              </p>
            </div>
          </section>
        </div>
      )}
      <FeaturesCarousel />
      <CarouselWrap />
      <Footer />
    </>
  );
};

export default Docummente;
