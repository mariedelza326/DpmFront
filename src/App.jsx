import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Presentation from "./Pages/Presentation";
import Projet from "./Pages/Projet";
import Contact from "./Pages/Contact";
import Legislation from "./Pages/Legislation";
import Docummente from "./Pages/Docummente";
import Notfound from "./Pages/Notfound";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import DetailsMission from "./Pages/DetailsMission";
import DivisionIndustriel from "./Pages/DivisionIndustriel";
import DivisionArtisanal from "./Pages/DivisionArtisanal";
import DivisionPeche from "./Pages/DivisionPeche";
import DivisionValorisation from "./Pages/DivisionValorisation";
import PecheArtisanal from "./Pages/PecheArtisanal";
import PecheIndustriel from "./Pages/PecheInsdustriel";
import CarteMareyeur from "./Pages/CarteMareyeur";
import Immatriculation from "./Pages/Immatriculation";
import DetailsAcutalite from "./Pages/DetailsAcutalite";
import ScrollToTop from "./Components/ScrollTop";
import DetailsProgramme from "./Pages/DetailProgramme";
import DocumentDetails from "./Pages/DetailsDocumente";
import FeaturesCarousel from "./Components/Features";
import RegisterForm from "./Admin/Users/RegisterForm";
import LoginForm from "./Admin/Users/LoginForm";
import Dashboard from "./Admin/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtecteRoute";
import PrivateRoute from "./Components/ProtecteRoute";
// import Copoa from "./Components/Copoa";
import LegislationAbrogee from "./Pages/DetailsLegislation";
import LegislationVigueur from "./Pages/DetailsAbrogee";
import Copoa from "./Components/Copoa";
import LegislationDetail from "./Pages/DetailsLegislation";
import Legislat from "./Pages/legislat";
import Abrogee from "./Pages/Abrogee";
import DetailAbrogee from "./Pages/DetailsAbrogee";
import Accueil from "./Pages/Accueil";

const usePageTitle = (defaultTitle) => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Présentation",
      "/projet": "Projet",
      "/connexion": "Connexion",
      "/inscription": "Inscription",
      "/contact": "Contact",
      "/legislation": "Législation",
      "/docummente": "Document",
    };
    const path = location.pathname;
    document.title = titles[path] || defaultTitle;
  }, [location, defaultTitle]);
};

const App = () => {
  return (
    <BrowserRouter>
      <PageTitleUpdater defaultTitle="Direction des peches maritime" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legislation" element={<Legislation />} />
        <Route path="/legislation" element={<Legislation />} />
        <Route path="/legislation/:id" element={<LegislationDetail />} />
        <Route path="/docummente" element={<Docummente />} />
        <Route path="/detailsmission" element={<DetailsMission />} />
        <Route path="/divisionindustriel" element={<DivisionIndustriel />} />
        <Route path="/divisionartisanal" element={<DivisionArtisanal />} />
        <Route path="/divisionpeche" element={<DivisionPeche />} />
        <Route path="/pecheartisanal" element={<PecheArtisanal />} />
        <Route path="/pecheindustriel" element={<PecheIndustriel />} />
        <Route path="/cartemareyeur" element={<CarteMareyeur />} />
        <Route path="/immatriculation" element={<Immatriculation />} />
        <Route path="/detailactualite/:id" element={<DetailsAcutalite />} />
        <Route path="/detailshistorique/:id" element={<Copoa />} />
        <Route path="/detailsprogramme/:id" element={<DetailsProgramme />} />
        <Route path="/documentdetails/:id" element={<DocumentDetails />} />
        <Route path="/features" element={<FeaturesCarousel />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoute>
              <RegisterForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={Dashboard} />}
        />
        <Route
          path="/divisionvalorisation"
          element={<DivisionValorisation />}
        />
        <Route path="/legislationabrogee" element={<LegislationAbrogee />} />
        <Route path="/legislationvigueur" element={<LegislationVigueur />} />
        <Route path="/legislat" element={<Legislat />} />
        <Route path="/abrogee" element={<Abrogee />} />
        <Route path="/detailsabrogee/:id" element={<DetailAbrogee />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

const PageTitleUpdater = ({ defaultTitle }) => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Présentation",
      "/projet": "Projet",
      "/connexion": "Connexion",
      "/inscription": "Inscription",
      "/detailsmission": "DetailsMission",
      "/contact": "Contact",
      "/legislation": "Législation",
      "/docummente": "Document",
      "/divisionindustriel": "DivisionIndustriel",
      "/divisionartisanal": "DivisionArtisanal",
      "/divisionpeche": "DivisionPeche",
      "/divisionvalorisation": "DivisionValorisation",
      "/pecheartisanal": "PecheArtisanal",
      "/pecheindustriel": "PecheIndustriel",
      "/cartemareyeur": "CarteMareyeur",
      "/immatriculation": "Immatriculation",
      "/detailactualite/:id": "DetailsAcutalite",
      "/detailsprogramme/:id": "DetailsProgramme",
      "/documentdetails/:id": "DocumentDetails",
      "/dashboard": "Dashboard",
      "/register": "RegisterForm",
      "/login": "LoginForm",
      "/legislationabrogee": "LegislationAbrogee",
      "/legislationvigueur": "LegislationVigueur",
      "/detailshistorique/:id": "Copoa",
      "/legislat": "Legislat",
      "/abrogee": "Abrogee",
      "/detailsabrogee/:id": "DetailAbrogee",
      "/accueil": "Accueil",
    };
    const path = location.pathname;
    document.title = titles[path] || defaultTitle;
  }, [location, defaultTitle]);

  return null;
};

export default App;
