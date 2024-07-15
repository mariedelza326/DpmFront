import React, { useState } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

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
          <h1 className="dpms">Que pouvons-nous faire pour vous?</h1>
          <p>Nous serons ravis de répondre à vos besoins.</p>
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telephone") {
      // Permet uniquement les chiffres
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Vérification de la longueur du numéro de téléphone
    if (formData.telephone.length < 9) {
      alert("Le numéro de téléphone doit contenir au moins 9 chiffres.");
      return;
    }
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
      alert("Error sending message. Please try again.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="prenom"
            placeholder="Prénom *"
            required
            value={formData.prenom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nom"
            placeholder="Nom *"
            required
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone * "
            required
            value={formData.telephone}
            onChange={handleChange}
            pattern="\d*"
            minLength="9"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message *"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bout">
          Envoyer
        </button>
      </form>
      {showPopup && <SuccessPopup onClose={closePopup} />}
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

export default Contact;
