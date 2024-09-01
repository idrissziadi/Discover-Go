// LoginPage.js
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
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Theme from './../Theme';
import backgroundImage from './../assets/back.png';
import axios from 'axios'; // Assurez-vous d'avoir installé axios pour les requêtes API.

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (values.email.length < 10) {
    errors.email = 'Email must be at least 10 characters long';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 5) {
    errors.password = 'Password must be at least 5 characters long';
  }

  return errors;
};

const LoginPage = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: values.email, // Assurez-vous que l'API attend les bons champs
        password: values.password,
      });
  
      // Si le token est généré, le stocker dans le localStorage avec les autres informations
      if (response.data.token) {
        console.log("token : " , response.data.token);
        
        // Stockage du token et des informations de l'utilisateur dans le localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify({
          id: response.data.user.id,
          email: response.data.user.email,
          username: response.data.user.username
        }));
        
        navigate('/home'); // Rediriger l'utilisateur après la connexion
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
    } finally {
      setSubmitting(false);
    }
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
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.contrastText,
                fontSize: '4rem',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                animation: 'textAnimation 6s ease-in-out infinite',
              }}
            >
              Discover Go
            </Typography>
            <style>
              {`
                @keyframes textAnimation {
                  0% {
                    opacity: 0;
                    transform: translateY(-10px);
                  }
                  50% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                  100% {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                }
              `}
            </style>
          </Box>

          <Paper
            elevation={12}
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: theme.shape.borderRadius,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              animation: 'formAnimation 0.5s ease-out',
              position: 'relative',
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
            {errorMessage && (
              <Typography color="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={validate}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
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
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
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
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: '20px' }}
                    color="primary"
                    disabled={isSubmitting}
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
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
