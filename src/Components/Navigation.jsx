import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const handleMenuIconClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar");
      if (window.scrollY > 50) {
        sidebar.classList.add("scrolled");
      } else {
        sidebar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="id">
        <div className="idcontenent">
          <NavLink to="/" activeClassName="active">
            <img src="/media/dpm.png" alt="profil" className="profil" />
          </NavLink>
        </div>
      </div>
      <div className="menu-icon" onClick={handleMenuIconClick}>
        <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <div className={`navigation ${showMenu ? "show-menu" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/accueil" activeClassName="active">
              Presentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/projet" activeClassName="active">
              Projet & Programme
            </NavLink>
          </li>
          <li>
            <NavLink to="/legislation" activeClassName="active">
              Legislation
            </NavLink>
          </li>
          <li>
            <NavLink to="/docummente" activeClassName="active">
              Decouverte
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.facebook.com/profile.php?id=61553113512678&mibextid=LQQJ4d">
              <i className="fab fa-facebook-f"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
