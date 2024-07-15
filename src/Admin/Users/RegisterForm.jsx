import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 1rem;
    padding: 1.5rem;
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 2rem;
  animation: ${rotate} 10s linear infinite;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.8rem;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #495057;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease, transform 0.3s ease;

    &:focus {
      outline: none;
      border-color: #28a745;
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
      transform: scale(1.02);
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const Message = styled.div`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
`;

const SuccessMessage = styled(Message)`
  background-color: #d4edda;
  color: #155724;
`;

const ErrorMessage = styled(Message)`
  background-color: #f8d7da;
  color: #721c24;
`;

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });

  const validateForm = () => {
    if (!username || !email || !phone_number || !password || !confirmPassword) {
      setMessage({
        type: "error",
        content: "Tous les champs sont obligatoires.",
      });
      return false;
    }

    if (!/^[7][0578]\d{7}$/.test(phone_number)) {
      setMessage({
        type: "error",
        content:
          "Le numéro de téléphone doit commencer par 70, 75, 76, 77 ou 78 et contenir 9 chiffres.",
      });
      return false;
    }

    if (password !== confirmPassword) {
      setMessage({
        type: "error",
        content: "Les mots de passe ne correspondent pas.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage({ type: "", content: "" });

    if (!validateForm()) return;

    const data = {
      username,
      email,
      phone_number,
      password,
    };

    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          content: `Inscription réussie avec succès. Bonjour ${username} !`,
        });
        // Réinitialiser le formulaire
        setUsername("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage({
          type: "error",
          content:
            result.message || "Une erreur est survenue lors de l'inscription.",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        content: "Une erreur est survenue lors de la connexion au serveur.",
      });
    }
  };

  return (
    <FormContainer>
      <Logo src="../media/dpm.png" alt="Logo" />
      <Title>Inscription</Title>
      {message.content &&
        (message.type === "success" ? (
          <SuccessMessage>{message.content}</SuccessMessage>
        ) : (
          <ErrorMessage>{message.content}</ErrorMessage>
        ))}
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone_number">Numéro de téléphone :</label>
          <input
            id="phone_number"
            type="tel"
            value={phone_number}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="confirm_password">Confirmer le mot de passe :</label>
          <input
            id="confirm_password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">S'inscrire</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default RegisterForm;
