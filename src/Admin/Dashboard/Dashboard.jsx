import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import RegisterForm from "../Users/RegisterForm";

const Dashboard = ({ username }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("actualites");
  const [data, setData] = useState([]);
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    if (activeTab === "inscription") {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/${activeTab}/`
      );
      setData(response.data);
      await updateCounts();
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Une erreur est survenue lors du chargement des données.");
    } finally {
      setLoading(false);
    }
  };

  const updateCounts = async () => {
    const newCounts = {};
    const tabs = [
      "actualites",
      "accords",
      "projets",
      "programmes",
      "journal",
      "rapports",
      "features",
      "message",
      "commentaires",
      "personnel",
      "director-messages",
      "statistics",
    ];

    for (const tab of tabs) {
      try {
        const response = await axios.get(`http://localhost:8000/api/${tab}/`);
        newCounts[tab] = response.data.length;
      } catch (error) {
        console.error(`Error fetching count for ${tab}:`, error);
        newCounts[tab] = 0;
      }
    }

    setCounts(newCounts);
  };

  const handleAdd = () => {
    setFormData({});
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/${activeTab}/${id}/`);
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
      setError("Une erreur est survenue lors de la suppression de l'élément.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key] || "");
        }
      }

      if (editingId) {
        await axios.put(
          `http://localhost:8000/api/${activeTab}/${editingId}/`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        await axios.post(
          `http://localhost:8000/api/${activeTab}/`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      setShowForm(false);
      fetchData();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        `Une erreur est survenue lors de l'enregistrement des données: ${
          error.response?.data
            ? JSON.stringify(error.response.data)
            : error.message
        }`
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const renderForm = () => {
    if (!showForm) return null;

    let fields;
    switch (activeTab) {
      case "actualites":
      case "director-messages":
        fields = [
          { name: "titre", type: "text" },
          { name: "contenu", type: "text" },
          { name: "image", type: "file" },
        ];
        break;
      case "accords":
        fields = [
          { name: "title", type: "text" },
          { name: "image", type: "file" },
          { name: "date_debut", type: "date" },
          { name: "date_fin", type: "date" },
        ];
        break;
      case "projets":
        fields = [
          { name: "titre", type: "text" },
          { name: "subtitle", type: "text" },
          { name: "description", type: "text" },
          { name: "image", type: "file" },
          { name: "date_debut", type: "date" },
          { name: "date_fin", type: "date" },
        ];
        break;
      case "programmes":
        fields = [
          { name: "nom", type: "text" },
          { name: "subtitle", type: "text" },
          { name: "description", type: "text" },
          { name: "image", type: "file" },
          { name: "date_creation", type: "date" },
        ];
        break;
      case "journal":
        fields = [
          { name: "titre", type: "text" },
          { name: "video", type: "file" },
        ];
        break;
      case "rapports":
        fields = [
          { name: "titre", type: "text" },
          { name: "image", type: "file" },
          { name: "description", type: "text" },
          { name: "fichier_pdf", type: "file" },
        ];
        break;
      case "features":
        fields = [
          { name: "title", type: "text" },
          { name: "image", type: "file" },
          { name: "description", type: "text" },
          { name: "order", type: "number" },
        ];
        break;
      case "message":
        fields = [
          { name: "prenom", type: "text" },
          { name: "nom", type: "text" },
          { name: "email", type: "email" },
          { name: "telephone", type: "tel" },
          { name: "message", type: "text" },
        ];
        break;
      case "personnel":
        fields = [
          { name: "name", type: "text" },
          { name: "job", type: "text" },
          { name: "photo", type: "file" },
          { name: "linkedin", type: "url" },
          {
            name: "category",
            type: "select",
            options: ["directeur", "equipes", "chefs_de_region"],
          },
        ];
        break;
      case "statistics":
        fields = [
          { name: "name", type: "text" },
          { name: "value", type: "number" },
          { name: "description", type: "text" },
        ];
        break;
      default:
        fields = [];
    }

    return (
      <div style={styles.formOverlay}>
        <div style={styles.formContainer}>
          <button style={styles.closeButton} onClick={() => setShowForm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3>
            {editingId ? "Modifier" : "Ajouter"} {activeTab}
          </h3>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name} style={styles.formGroup}>
                <label htmlFor={field.name}>{field.name}</label>
                {field.type === "file" ? (
                  <input
                    type="file"
                    id={field.name}
                    name={field.name}
                    onChange={handleInputChange}
                    accept={
                      field.name === "video"
                        ? "video/*"
                        : field.name === "fichier_pdf"
                        ? ".pdf"
                        : "image/*"
                    }
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Sélectionner une catégorie</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleInputChange}
                    required
                  />
                )}
              </div>
            ))}
            <button type="submit" style={styles.submitButton}>
              {editingId ? "Modifier" : "Ajouter"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (loading) {
      return <div>Chargement...</div>;
    }

    if (error) {
      return <div style={styles.error}>{error}</div>;
    }

    if (activeTab === "inscription") {
      return <RegisterForm />;
    }

    return (
      <div style={styles.contentList}>
        <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
        {activeTab !== "message" && activeTab !== "commentaires" && (
          <button style={styles.addButton} onClick={handleAdd}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter
          </button>
        )}
        <ul>
          {data.map((item) => (
            <li key={item.id} style={styles.listItem}>
              {activeTab === "message" ? (
                <div>
                  <div style={styles.messageHeader}>
                    <strong>De: </strong>
                    {item.prenom} {item.nom} - {item.email} - {item.telephone}
                  </div>
                  <div style={styles.messageContent}>
                    <strong>Message: </strong> {item.message}
                  </div>
                </div>
              ) : activeTab === "commentaires" ? (
                <div>
                  <div style={styles.commentHeader}>
                    <div>
                      <strong>Auteur: </strong>
                      {item.prenom} {item.nom}
                    </div>
                    <div>
                      <strong>Email: </strong>
                      {item.email}
                    </div>
                  </div>
                  <div style={styles.commentContent}>
                    <strong>Commentaire: </strong> {item.contenu}
                  </div>
                </div>
              ) : activeTab === "personnel" ? (
                <div>
                  <strong>{item.name}</strong> - {item.job} ({item.category})
                </div>
              ) : activeTab === "statistics" ? (
                <div>
                  <strong>{item.name}</strong> - {item.value}
                  <p>{item.description}</p>
                </div>
              ) : (
                item.titre || item.title || item.nom
              )}
              {activeTab !== "message" && activeTab !== "commentaires" && (
                <div style={styles.actionButtons}>
                  <button onClick={() => handleEdit(item)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const navItems = [
    "actualites",
    "accords",
    "projets",
    "programmes",
    "journal",
    "rapports",
    "features",
    "message",
    "commentaires",
    "personnel",
    "director-messages",
    "statistics",
    "inscription",
  ];

  return (
    <div style={styles.dashboard}>
      <nav style={styles.nav}>
        <ul style={styles.navItems}>
          {navItems.map((item) => (
            <li
              key={item}
              style={{
                ...styles.navItem,
                ...(activeTab === item ? styles.activeNavItem : {}),
              }}
              onClick={() => setActiveTab(item)}
            >
              {item === "director-messages"
                ? "Messages du directeur"
                : item.charAt(0).toUpperCase() + item.slice(1)}
              <span style={styles.count}>{counts[item] || 0}</span>
            </li>
          ))}
        </ul>
        <div style={styles.logout} onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Deconnexion
        </div>
      </nav>
      <main style={styles.main}>
        <div style={styles.welcome}>
          <h1>Bienvenue, {username}!</h1>
        </div>
        {renderContent()}
      </main>
      {renderForm()}
    </div>
  );
};

const styles = {
  dashboard: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f0f2f5",
    margin: 0,
    padding: 0,
  },
  nav: {
    backgroundColor: "#4a90e2",
    color: "#fff",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "100%",
  },
  navItems: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    width: "100%",
    justifyContent: "flex-start",
  },
  navItem: {
    margin: "5px",
    cursor: "pointer",
    position: "relative",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
    whiteSpace: "nowrap",
  },
  activeNavItem: {
    fontWeight: "bold",
    backgroundColor: "#3a7bd5",
  },
  count: {
    backgroundColor: "#e74c3c",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "12px",
    padding: "2px 5px",
    position: "absolute",
    top: "-10px",
    right: "-10px",
  },
  logout: {
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "800",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
    marginTop: "10px",
    alignSelf: "flex-end",
    color: "#E71C23",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
  welcome: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  contentList: {
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "15px",
    borderBottom: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s",
  },
  actionButtons: {
    display: "flex",
    gap: "10px",
  },
  editButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  addButton: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
    transition: "background-color 0.3s",
  },
  formOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "400px",
    position: "relative",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
  },
  submitButton: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  error: {
    color: "#e74c3c",
    marginBottom: "20px",
  },
  messageHeader: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  messageContent: {
    marginTop: "5px",
  },
  commentHeader: {
    marginBottom: "10px",
  },
  commentContent: {
    marginTop: "10px",
  },
  formOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "500px",
    maxWidth: "90%",
    position: "relative",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    overflowY: "auto",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
    color: "#333",
    transition: "color 0.3s",
  },
  closeButtonHover: {
    color: "#e74c3c",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  formGroupLabel: {
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  },
  formGroupInput: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
    color: "#333",
    outline: "none",
    transition: "border-color 0.3s",
  },
  formGroupInputFocus: {
    borderColor: "#4a90e2",
  },
  submitButton: {
    backgroundColor: " #192a56",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  submitButtonHover: {
    backgroundColor: "#357abd",
  },
  error: {
    color: "#e74c3c",
    marginBottom: "20px",
    fontSize: "14px",
  },
};

export default Dashboard;
