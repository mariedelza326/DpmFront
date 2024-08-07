import React, { useState } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import FAQ from "../Components/Faq";

const Contact = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navigation />
      <div className="contactez">
        <img src="../media/sea.jpg" alt="" className="documentation" />
        <div className="documentation-content">
          <h1 className="btne">contact</h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="header">
          <div className="title-bar"></div>
          <h1 className="dpms">Comment pouvons-nous vous aider ?</h1>
          <p>Nous sommes à votre écoute pour répondre à tous vos besoins.</p>
        </div>
        <div className="card-containerio">
          <Card
            icon="📞"
            title="Téléphone"
            text="33 849 98 83 - 33 849 99 25"
          />
          <Card icon="📧" title="Email" text="dpm@mpem.gouv.sn" />
          <Card
            icon="🏠"
            title="Adresse"
            text="Sphères ministérielles de Diamniadio"
          />
        </div>
        <div className="black-square"></div>
        <h4>Nous Joindre</h4>
        <p className="mpd">
          Nous répondrons à votre message dans les plus brefs délais. Les champs
          obligatoires sont indiqués avec *.
        </p>
        <Form />
      </div>
      <div className="map">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sph%C3%A8res%20minist%C3%A9rielles%20de%20Diamniadio+(Direction%20des%20P%C3%AAches%20Maritime.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">Sphères ministérielles de Diamniadio</a>
        </iframe>
      </div>
      <div className="voir"></div>
      <FAQ />

      <Footer />
    </>
  );
};

const Card = ({ icon, title, text }) => {
  return (
    <div className="card">
      <span className="icon">{icon}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telephone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneRegex = /^(70|75|76|77|78)\d{7}$/;
    if (!phoneRegex.test(formData.telephone)) {
      setErrorMessage(
        "Numéro de telephone incorrect veuillez saisir le bon Numéro merci !!"
      );
      setShowErrorPopup(true);
      return;
    }
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/message/",
        formData
      );
      console.log("Message sent successfully:", response.data);
      setFormData({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        message: "",
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Error sending message. Please try again.");
      setShowErrorPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
    setErrorMessage("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div
            className={`input-container ${
              focusedField === "prenom" ? "focused" : ""
            }`}
          >
            <input
              type="text"
              name="prenom"
              required
              value={formData.prenom}
              onChange={handleChange}
              onFocus={() => handleFocus("prenom")}
              onBlur={handleBlur}
            />
            <label>Prénom *</label>
          </div>
          <div
            className={`input-container ${
              focusedField === "nom" ? "focused" : ""
            }`}
          >
            <input
              type="text"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              onFocus={() => handleFocus("nom")}
              onBlur={handleBlur}
            />
            <label>Nom *</label>
          </div>
        </div>
        <div className="form-row">
          <div
            className={`input-container ${
              focusedField === "email" ? "focused" : ""
            }`}
          >
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
            <label>Email *</label>
          </div>
          <div
            className={`input-container ${
              focusedField === "telephone" ? "focused" : ""
            }`}
          >
            <input
              type="tel"
              name="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              onFocus={() => handleFocus("telephone")}
              onBlur={handleBlur}
            />
            <label>Téléphone *</label>
          </div>
        </div>
        <div
          className={`input-container textarea ${
            focusedField === "message" ? "focused" : ""
          }`}
        >
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
          ></textarea>
          <label>Message *</label>
        </div>
        <button type="submit" className="bout">
          Envoyer
        </button>
      </form>
      {showPopup && <SuccessPopup onClose={closePopup} />}
      {showErrorPopup && (
        <ErrorPopup message={errorMessage} onClose={closeErrorPopup} />
      )}
    </div>
  );
};

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="success-popup">
      <div className="success-popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="success-icon">✔</div>
        <h2>Message envoyé avec succès!</h2>
        <p>Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    </div>
  );
};

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="error-popup">
      <div className="error-popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2>Erreur</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Contact;
