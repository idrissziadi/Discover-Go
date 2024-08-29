// SignUpPage.js
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
import * as Yup from 'yup';
import Theme from './../Theme'; // Importer le thème
import backgroundImage from './../assets/back.png'; // Assurez-vous que l'image est dans ce chemin

// Validation Schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  username: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const SignUpPage = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignInClick = () => {
    navigate('/login');
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
          {/* Texte animé */}
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
              padding: 6, // Augmenter la taille du formulaire
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
              Sign Up
            </Typography>
            <Divider sx={{ my: 2, width: '100%', backgroundColor: theme.palette.divider }} />
            <Formik
              initialValues={{ email: '', username: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // Handle form submission
                console.log(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <Field name="email">
                    {({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
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
                    )}
                  </Field>
                  <ErrorMessage name="email">
                    {(msg) => (
                      <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>

                  <Field name="username">
                    {({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
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
                    )}
                  </Field>
                  <ErrorMessage name="username">
                    {(msg) => (
                      <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>

                  <Field name="password">
                    {({ field }) => (
                      <TextField
                        {...field}
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
                    )}
                  </Field>
                  <ErrorMessage name="password">
                    {(msg) => (
                      <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: '20px' }} // Rounded button
                    color="primary"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link
                  href="#"
                  onClick={handleSignInClick}
                  variant="body2"
                  sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SignUpPage;
