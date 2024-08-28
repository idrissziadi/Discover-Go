// Theme.jsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define the theme options
export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#c6502e',
    },
    secondary: {
      main: '#95c391',
    },
    text: {
      primary: '#2e383f',
      secondary: '#2e383f',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
};

// Create the theme using the options
const Theme = createTheme(themeOptions);

export default Theme ; 
