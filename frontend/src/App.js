import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Theme from './Theme';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SiteDetails from './pages/SiteDetails';
import Settings from './pages/Settings';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  // Fonction pour vérifier la présence du token dans le localStorage
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };
  

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Page d'accueil */}
          <Route path="/login" element={<LoginPage />} /> {/* Page de connexion */}
          <Route path="/signup" element={<SignUpPage />} /> {/* Page d'inscription */}
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />
          

          {/* Routes protégées */}
          <Route
            path="/home"
            element={isAuthenticated() ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/site-details/:sitename"
            element={isAuthenticated() ? <SiteDetails /> : <Navigate to="/login" replace />}
          />
          <Route 
            path="/settings" 
            element={isAuthenticated() ? <Settings /> : <Navigate to="/login" replace />}
          
          />

          {/* Redirection pour les URL incorrectes */}
          <Route path="*" element={<Navigate to="/" replace />} /> {/* Route catch-all */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
