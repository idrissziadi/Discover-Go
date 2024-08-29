import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Avatar,
  InputAdornment,
  IconButton,
  Paper,
  Link,
  Divider,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import Theme from './../Theme'; // Importer le thème
import backgroundImage from './../assets/back.png'; // Assurez-vous que l'image est dans ce chemin

const LoginPage = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate(); // Hook pour la navigation

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Redirige vers la page d'inscription
  };

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'backgroundAnimation 20s ease-in-out infinite',
          '@keyframes backgroundAnimation': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
            '100%': { transform: 'scale(1)' },
          },
        }}
      >
        <Container component="main" maxWidth="xs">
          <Paper
            elevation={12}
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: theme.shape.borderRadius,
              backgroundColor: 'rgba(255, 255, 255, 0.9)', // Papier légèrement transparent
              backdropFilter: 'blur(15px)', // Flou de fond
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              animation: 'formAnimation 0.5s ease-out',
              position: 'relative', // Positionnement relatif pour les éléments superposés
              '@keyframes formAnimation': {
                '0%': { opacity: 0, transform: 'translateY(-50px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color={theme.palette.text.primary}>
              Sign In
            </Typography>
            <Divider sx={{ my: 2, width: '100%', backgroundColor: theme.palette.divider }} />
            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                placeholder="Enter your username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary, // Label color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.divider, // Border color
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main, // Border color on hover
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.divider,
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: '20px' }} // Rounded button
                color="primary"
              >
                Sign In
              </Button>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Link
                    href="#"
                    onClick={handleSignUpClick}
                    variant="body2"
                    sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
