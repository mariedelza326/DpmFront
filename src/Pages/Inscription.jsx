import React, { useState } from "react";
import Navigation from "../Components/Navigation";

const Inscription = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    fonction: "",
    service: "",
    email: "",
    password: "",
    acceptConditions: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navigation />
      <div className="inscription-container">
        <img src="../media/axime.jpeg" alt="" className="documentation" />
        <div className="inscription-form">
          <h2>Inscription</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Fonction"
                name="fonction"
                value={formData.fonction}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="acceptConditions"
                name="acceptConditions"
                checked={formData.acceptConditions}
                onChange={handleCheckboxChange}
                required
              />
              <p htmlFor="acceptConditions">
                J'accepte les conditions de confidentialité
              </p>
            </div>
            <button type="submit" className="bouton">
              Valider
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inscription;
