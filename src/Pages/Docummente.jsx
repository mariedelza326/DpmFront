import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import FeaturesCarousel from "../Components/Features";
import CarouselWrap from "../Components/CarouselWrap";
import DiscoveryAccordion from "../Components/Accordion";

const Docummente = () => {
  const [newsData, setNewsData] = useState([]);
  const [activeLink, setActiveLink] = useState("link5");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        <h2>L'Univers de la Pêche </h2>
      </div>
      <div className="links-container">
        <div
          className={`link ${activeLink === "link5" ? "active" : ""}`}
          onClick={() => handleLinkClick("link5")}
        >
          Zones de pêche
        </div>
        <div
          className={`link ${activeLink === "link1" ? "active" : ""}`}
          onClick={() => handleLinkClick("link1")}
        >
          Rapports Statiques
        </div>
        <div
          className={`link ${activeLink === "link3" ? "active" : ""}`}
          onClick={() => handleLinkClick("link3")}
        >
          Calendrier des saisons de pêche
        </div>

        <div
          className={`link ${activeLink === "link4" ? "active" : ""}`}
          onClick={() => handleLinkClick("link4")}
        >
          Espèces protégées
        </div>
      </div>
      {activeLink === "link1" && (
        <div className="card-container">
          {currentItems.map((item, index) => (
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
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo; Précédent
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Suivant &raquo;
            </button>
          </div>
        </div>
      )}
      {activeLink === "link3" && (
        <div className="fishing-calendar">
          <h2>Calendrier des saisons de pêche</h2>
          <div className="season-grid">
            <div className="season-card">
              <h3>Printemps</h3>
              <p>Mars - Mai</p>
              <ul>
                <li>Thiof (Mérou blanc)</li>
                <li>Sardinelle</li>
                <li>Dorade royale</li>
              </ul>
            </div>
            <div className="season-card">
              <h3>Été</h3>
              <p>Juin - Août</p>
              <ul>
                <li>Thon</li>
                <li>Espadon</li>
                <li>Barracuda</li>
              </ul>
            </div>
            <div className="season-card">
              <h3>Automne</h3>
              <p>Septembre - Novembre</p>
              <ul>
                <li>Capitaine</li>
                <li>Sole</li>
                <li>Carpe rouge</li>
              </ul>
            </div>
            <div className="season-card">
              <h3>Hiver</h3>
              <p>Décembre - Février</p>
              <ul>
                <li>Pageot</li>
                <li>Mérou noir</li>
                <li>Rouget</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {activeLink === "link5" && (
        <div className="fishing-zones">
          <h2>Zones de pêche au Sénégal</h2>
          <div className="zone-info">
            <div className="zone authorized">
              <h3>Zones autorisées</h3>
              <ul>
                <li>Zone Économique Exclusive (ZEE) du Sénégal</li>
                <li>Eaux territoriales (12 milles nautiques)</li>
                <li>Certaines zones côtières réglementées</li>
              </ul>
            </div>
            <div className="zone unauthorized">
              <h3>Zones non autorisées</h3>
              <ul>
                <li>Aires Marines Protégées (AMP)</li>
                <li>Zones de reproduction des poissons</li>
                <li>Certaines zones côtières sensibles</li>
              </ul>
            </div>
          </div>
          <div className="docomente">
            <h2>Attention aux zones interdit!</h2>
          </div>
          <div className="penalties">
            <h3>Sanctions pour pêche illégale</h3>
            <ul>
              <li>Amendes pouvant aller jusqu'à 1 milliard de FCFA</li>
              <li>Confiscation du navire et des équipements</li>
              <li>Retrait de la licence de pêche</li>
              <li>Peines d'emprisonnement pour les cas graves</li>
            </ul>
          </div>
        </div>
      )}
      {activeLink === "link4" && (
        <div className="protected-species">
          <h2>Espèces marines protégées au Sénégal</h2>
          <p className="espece">
            Ces espèces sont protégées par des lois nationales et
            internationales en raison de leur vulnérabilité et de la nécessité
            de préserver la biodiversité marine. La protection de ces espèces
            implique des mesures de conservation telles que l'interdiction de la
            chasse, de la capture et de la vente, ainsi que la mise en place de
            zones marines protégées et de programmes de sensibilisation.
          </p>
          <div className="species-grid">
            <div className="species-card">
              <img src="./media/tortue.jpg" alt="Tortue marine" />
              <h3>Tortues marines</h3>
              <p>
                Les tortues marines jouent un rôle crucial dans l'écosystème
                marin. Toutes les espèces sont protégées pour préserver leur
                population en déclin.
              </p>
            </div>
            <div className="species-card">
              <img src="./media/lamantin.jpeg" alt="Lamantin" />
              <h3>Lamantin d'Afrique</h3>
              <p>
                Le lamantin d'Afrique, Trichechus senegalensis, est une espèce
                vulnérable dont la protection est essentielle pour maintenir
                l'équilibre de son habitat.
              </p>
            </div>
            <div className="species-card">
              <img src="./media/Dauphins.jpeg" alt="Dauphin" />
              <h3>Dauphins</h3>
              <p>
                Les dauphins, avec leur intelligence remarquable, sont protégés
                pour éviter leur capture et exploitation abusive. Toutes les
                espèces sont protégées.
              </p>
            </div>
            <div className="species-card">
              <img src="./media/Hippocampes.jpeg" alt="Hippocampe" />
              <h3>Hippocampes</h3>
              <p>
                Les hippocampes, fascinantes créatures marines, sont entièrement
                protégées afin de préserver leur fragile habitat et assurer leur
                survie pour les générations futures.
              </p>
            </div>
          </div>
        </div>
      )}
      <FeaturesCarousel />
      <DiscoveryAccordion />

      <div className="voir"></div>
      <Footer />
    </>
  );
};

export default Docummente;
