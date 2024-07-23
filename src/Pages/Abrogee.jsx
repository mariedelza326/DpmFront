import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import axios from "axios";

const Abrogee = () => {
  const [abrogees, setAbrogees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAbrogees, setFilteredAbrogees] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchAbrogees = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/abrogees/");
        setAbrogees(response.data);
        setFilteredAbrogees(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des législations:",
          error
        );
      }
    };
    fetchAbrogees();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = abrogees.filter((abrogee) =>
        abrogee.titre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAbrogees(results);
      setNoResults(results.length === 0);
    } else {
      setFilteredAbrogees(abrogees);
      setNoResults(false);
    }
  }, [searchTerm, abrogees]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
  };

  return (
    <>
      <Navigation />
      <div className="legislat-container">
        <img src="../media/note.jpg" alt="" className="profilee" />
        <div className="legislat-header">
          <h2>Législation Abrogée</h2>
          <p>
            La Direction des Pêches Maritimes a régulièrement révisé ses
            régulations pour répondre aux évolutions du secteur. Parmi les
            textes législatifs abrogés figurent des lois et décrets antérieurs
            qui ont été mis à jour ou remplacés pour mieux encadrer la gestion
            durable des ressources marines. Ces abrogations ont permis
            d'harmoniser les pratiques réglementaires avec les nouvelles normes
            environnementales et de conservation, assurant ainsi une gestion
            plus efficace et équitable des activités de pêche et de préservation
            des écosystèmes marins.
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher par type de législation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        {noResults ? (
          <div className="no-results-message">
            <h3>Aucun résultat trouvé</h3>
            <p>
              Nous n'avons trouvé aucune législation correspondant à votre
              recherche.
            </p>
          </div>
        ) : (
          <div className="legislat-grid">
            {filteredAbrogees.map((abrogee) => (
              <div className="legislat-card" key={abrogee.id}>
                <Link
                  to={`/detailsabrogee/${abrogee.id}`}
                  className="legislat-link"
                >
                  {/* <div
                    className={`legislat-icon fas fa-${getIconForType(
                      abrogee.type
                    )}`}
                  ></div> */}
                  <h3 className="legislat-title">{abrogee.titre}</h3>
                  <p className="legislat-description">
                    {truncateDescription(abrogee.description)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

const getIconForType = (type) => {
  switch (type) {
    case "decret":
      return "fish";
    case "arrete":
      return "water";
    case "loi":
      return "anchor";
    case "convention":
      return "ship";
    case "protocole":
      return "globe";
    default:
      return "file-alt";
  }
};

export default Abrogee;
