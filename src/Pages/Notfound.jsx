import React from "react";
import { NavLink } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="notfound">
      <div className="notfoundcontent">
        <h1>404?</h1>
        <h3>Oups !! Desole cette page n'existe pas !!</h3>
        <NavLink to="/">
          <i className="fas fa-home"></i>
          Accueil
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
