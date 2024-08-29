import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box, Paper, Breadcrumbs, Link, Container, Divider } from '@mui/material';
import NavBar from '../components/NavBar'; // Importer NavBar depuis le répertoire components
import Footer from '../components/Footer'; // Importer Footer depuis le répertoire components
import { styled } from '@mui/system';

// Styles personnalisés
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  maxWidth: 800,
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 8,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

function SiteDetails() {
  const { sitename } = useParams(); 
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const { site, category, subcategory } = location.state || {}; 

  const handleSubcategoryClick = () => {
    navigate('/home', { state: { selectedCategoryy: category, selectedSubcategoryy: subcategory } });
  };

  const handleCategoryClick = () => {
    navigate('/home', { state: { selectedCategoryy: category } });
  };
  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <>
      {/* NavBar importée depuis components */}
      <NavBar onHomeClick={handleHomeClick} />

      <StyledContainer maxWidth="md">
        {/* Breadcrumbs pour la navigation */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
          {category && (
            <Link
            component="button"
            underline="hover"
            color="inherit"
            onClick={handleCategoryClick}
          >
            {category.name}
          </Link>
          )}
          {subcategory && (
            <Link
              component="button"
              underline="hover"
              color="inherit"
              onClick={handleSubcategoryClick}
            >
              {subcategory.name}
            </Link>
          )}
          <Typography color="textPrimary">{sitename}</Typography>
        </Breadcrumbs>

        {/* Contenu principal avec animation */}
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom>
            Détails du Site
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Nom du Site : {sitename}
          </Typography>

          {site && (
            <>
              <Typography variant="body1" color="textSecondary" paragraph>
                {site.description}
              </Typography>
              <Image src={site.imageUrl || './../assets/back.png'} alt={site.name} />
            </>
          )}

          {category && (
            <Typography variant="h6" color="textSecondary">
              Catégorie : {category.name}
            </Typography>
          )}

          {subcategory && (
            <Typography variant="body1" color="textSecondary">
              Sous-catégorie : {subcategory.name}
            </Typography>
          )}
        </StyledPaper>
      </StyledContainer>

      {/* Footer importé depuis components */}
      <Footer />
    </>
  );
}

export default SiteDetails;
