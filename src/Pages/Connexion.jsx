import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Menu from "./CardMenu";
const Connexion = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navigation />
      <div className="connexion-container">
        <img src="../media/axios.jpeg" alt="" className="documentation" />
        <div className="image-container">
          <img src="./media/dpm.png" alt="Image" className="image" />
        </div>
        <h2 className="title">Se Connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              className="input"
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="input"
              required
            />
          </div>
          <button type="submit" className="buttone">
            Soumettre
          </button>
        </form>
        <a href="#" className="forgot-password">
          Mot de passe oublié ?
        </a>
      </div>
      <div className="inscrit">
        <p>
          Vous n'avez pas de compte?
          <a href="/inscription" className="inscrit-link">
            S'inscrire
          </a>
        </p>
      </div>
      <Menu />
      <Footer />
    </>
  );
};

export default Connexion;
