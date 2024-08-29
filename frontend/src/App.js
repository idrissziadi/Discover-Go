// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez les composants nécessaires
import Theme from './Theme'; // Ajustez le chemin si nécessaire
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SiteDetails from './pages/SiteDetails';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Page d'accueil */}
          <Route path="/home" element={<Home />} /> {/* Page Home */}
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/site-details/:sitename' element={<SiteDetails/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
