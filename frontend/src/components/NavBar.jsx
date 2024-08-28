import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, useTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1 }} // Styling using sx
        >
          Discover Go
        </Typography>
        <IconButton 
          edge="end" 
          color="inherit" 
          sx={{ 
            marginLeft: theme.spacing(2), 
            width: 40, // Set width for uniform size
            height: 40 // Set height for uniform size
          }}
        >
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ width: 40, height: 40 }} />
        </IconButton>
        <IconButton 
          edge="end" 
          color="inherit" 
          sx={{ 
            marginLeft: theme.spacing(2), 
            width: 40, // Set width for uniform size
            height: 40 // Set height for uniform size
          }}
        >
          <SettingsIcon sx={{ fontSize: 30 }} /> {/* Adjust the font size to match Avatar */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
