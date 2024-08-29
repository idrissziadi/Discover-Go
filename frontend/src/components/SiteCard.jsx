import React from 'react';
import { Card, CardContent, CardMedia, Typography, useTheme, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

// Style du Card avec des animations
const AnimatedCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

// Style du CardMedia pour ajouter des animations sur l'image
const AnimatedCardMedia = styled(CardMedia)({
  height: 140,
  transition: 'transform 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

// Style du bouton avec un effet d'élévation
const AnimatedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[5],
  },
}));

const SiteCard = ({ site, selectedCategory, selectedSubcategory }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/site-details/${site.name}`, { state: { site: site, category: selectedCategory, subcategory: selectedSubcategory } });
  };

  return (
    <AnimatedCard>
      <AnimatedCardMedia
        image={site.imageUrl || './../assets/back.png'}
        title={site.name}
      />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          {site.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: theme.spacing(2) }}>
          {site.description}
        </Typography>
        <AnimatedButton
          variant="contained"
          color="primary"
          onClick={handleViewMore}
        >
          View More
        </AnimatedButton>
      </CardContent>
    </AnimatedCard>
  );
};

export default SiteCard;
