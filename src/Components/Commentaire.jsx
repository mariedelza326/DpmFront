import React, { useState } from "react";
import axios from "axios";

const Comments = ({ actualiteId }) => {
  const [newComment, setNewComment] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/commentaires/", {
        actualite: actualiteId,
        contenu: newComment,
        nom: nom,
        email: email,
      });
      setNewComment("");
      setNom("");
      setEmail("");
      setShowPopup(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du commentaire:", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="comments-section">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <div className="popup-content">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <p>Merci de nous avoir laissé un commentaire !</p>
            </div>
          </div>
        </div>
      )}
      <div className="commone">
        <h3>Votre avis compte</h3>
        <p className="mention">
          Partagez vos pensées et impressions avec nous. Votre adresse e-mail ne
          sera pas publiée.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Votre nom complet *"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email *"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Partagez votre expérience ici... *"
          required
        />
        <button type="submit">Envoyer mon commentaire</button>
      </form>
    </div>
  );
};

export default Comments;
