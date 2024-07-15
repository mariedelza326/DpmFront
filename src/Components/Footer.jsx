import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="section-footer">
        <div className="pre-footer">
          <div className="pre-footer-content">
            <div className="pre-footer-text">
              <h2>Besoin d'aide ?</h2>
              <p>Découvrez comment nous pouvons vous aider</p>
            </div>
            <button className="contact-button" onClick={handleContactClick}>
              Contactez-nous
            </button>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-section">
            {/* <img src="/logo.png" alt="Logo" className="footer-logo" /> */}
            <h2 className="footer-title">A propos</h2>
            <p className="footer-text">
              La direction des pêches maritimes gère durablement les ressources
              halieutiques, soutenant les pêcheurs et protégeant les écosystèmes
              marins.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61553113512678&mibextid=LQQJ4d"
                className="footer-social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="#" className="footer-social-icon">
              <i className="fab fa-twitter"></i>
            </a> */}
              <a href="#" className="footer-social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Tags populaires </h2>
            <ul className="footer-links">
              <li>
                <NavLink
                  to="/projet"
                  activeClassName="active"
                  className="footer-link"
                >
                  Projet & Programme
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/legislation"
                  activeClassName="active"
                  className="footer-link"
                >
                  Legislation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/docummente"
                  activeClassName="active"
                  className="footer-link"
                >
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="footer-link"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="footer-link"
                >
                  Accueil
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Rester en contact </h2>
            <div className="footer-contact">
              <a href="#" className="footer-contact-icon">
                <i className="fas fa-phone"></i>
                33 849 98 83 - 33 849 99 25
              </a>
              <a href="#" className="footer-contact-icon">
                <i className="fas fa-envelope"></i>
                dpm@mpem.gouv.sn
              </a>
              <a href="#" className="footer-contact-icon">
                <i className="fas fa-map-marker-alt"></i>
                Sphères ministérielles de Diamniadio
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Liens Utiles</h2>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.jica.go.jp/english/"
                  className="footer-link"
                >
                  JICA
                </a>
              </li>
              <li>
                <a href="https://www.usaid.gov" className="footer-link">
                  USAID
                </a>
              </li>
              <li>
                <a href="https://europa.eu" className="footer-link">
                  Union Européenne
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  CLPA
                </a>
              </li>
              <li>
                <a href="https://www.worldbank.org" className="footer-link">
                  Banque mondiale
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <div className="footer-section footer-copyright">
          <p>
            &copy; 2024 Direction des Pêches maritimes. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
