import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
 0% { transform: scale(1); }
 50% { transform: scale(1.05); }
 100% { transform: scale(1); }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 480px) {
    max-width: 100%;
    margin: 1rem;
    padding: 1.5rem;
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 2rem;
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.8rem;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
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
    transition: border-color 0.3s ease;
    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    const data = { username, password };
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token); // Stockage du token
        navigate("/dashboard");
      } else {
        setError(result.message || "Identifiants incorrects");
      }
    } catch (error) {
      console.error(error);
      setError("Une erreur s'est produite");
    }
  };

  return (
    <FormContainer>
      <Logo src="../media/dpm.png" alt="Logo" />
      <Title>Connexion</Title>
      <StyledForm onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">Se connecter</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default LoginForm;
