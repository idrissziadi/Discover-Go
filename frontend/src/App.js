// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import Theme from './Theme'; // Adjust the path as necessary
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Home/>  
    </ThemeProvider>
  );
}

export default App;
