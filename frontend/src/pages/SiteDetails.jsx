import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  Typography, Box, Paper, Breadcrumbs, Link, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
  TextField
} from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'leaflet/dist/leaflet.css';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@mui/icons-material/Close';

import L from 'leaflet';



// Styles personnalisés
const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  boxShadow: theme.shadows[8],
  maxWidth: '100%',
  margin: 'auto',
}));

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 12,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  width: '100%',
  maxWidth: 900,
  margin: 'auto',
  '.carousel .slide': {
    background: theme.palette.grey[200],
  },
}));

const MapWrapper = styled(Box)({
  width: '100%',
  height: '400px',
  borderRadius: 12,
  overflow: 'hidden',
  margin: 'auto',
});

const EventDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.background.default,
    borderRadius: 16,
  },
}));

const ReviewCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  width: '100%',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

const CommentList = styled('div')({
  marginTop: 16,
  borderTop: '1px solid #ddd',
  paddingTop: 16,
});

const CommentItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
}));

function SiteDetails() {
  const { sitename } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { site, category, subcategory } = location.state || {};
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleSubcategoryClick = () => {
    navigate('/home', { state: { selectedCategoryy: category, selectedSubcategoryy: subcategory } });
  };

  const handleCategoryClick = () => {
    navigate('/home', { state: { selectedCategoryy: category } });
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  // Animation for the page
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <NavBar onHomeClick={handleHomeClick} />

      <StyledWrapper>
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
          {category && (
            <Link
              component="button"
              underline="hover"
              color="primary"
              onClick={handleCategoryClick}
            >
              {category.name}
            </Link>
          )}
          {subcategory && (
            <Link
              component="button"
              underline="hover"
              color="primary"
              onClick={handleSubcategoryClick}
            >
              {subcategory.name}
            </Link>
          )}
          <Typography color="textPrimary">{sitename}</Typography>
        </Breadcrumbs>

        <animated.div style={fadeIn}>
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
                
                {/* Enhanced Carousel */}
                {site.images && site.images.length > 0 && (
                  <StyledCarousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                    {site.images.map((img, index) => (
                      <div key={index}>
                        <Image src={img} alt={`Image ${index + 1}`} />
                      </div>
                    ))}
                  </StyledCarousel>
                )}

                {/* Map with additional controls */}
                {site.location && (
                  <MapWrapper>
                    <MapContainer center={site.location} zoom={13} scrollWheelZoom={false}>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={site.location}>
                        <Popup>{sitename}</Popup>
                      </Marker>
                    </MapContainer>
                  </MapWrapper>
                )}

                {/* Reviews Section */}
                <Box mt={3}>
                  <Typography variant="h6" color="textPrimary">
                    Avis
                  </Typography>
                  <ReviewCard>
                    <Typography variant="h6" color="textPrimary">
                      Note : 4.5/5
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      "Un endroit fantastique à visiter ! Les installations sont excellentes et le personnel est très accueillant."
                    </Typography>
                  </ReviewCard>
                  <ReviewCard>
                    <Typography variant="h6" color="textPrimary">
                      Note : 4/5
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      "Belle expérience, mais quelques améliorations pourraient être apportées dans le service client."
                    </Typography>
                  </ReviewCard>
                </Box>

                {/* Comments Section */}
                <CommentList>
                  <Typography variant="h6" color="textPrimary">
                    Commentaires
                  </Typography>
                  <CommentItem>
                    <Typography variant="body1" color="textSecondary">
                      <strong>Jean Dupont:</strong> Super endroit ! Très agréable.
                    </Typography>
                  </CommentItem>
                  <CommentItem>
                    <Typography variant="body1" color="textSecondary">
                      <strong>Marie Martin:</strong> Je recommande vivement !
                    </Typography>
                  </CommentItem>
                </CommentList>

                {/* Comment Form */}
                <Box mt={3}>
                  <Typography variant="h6" color="textPrimary">
                    Laissez un Commentaire
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Votre commentaire"
                    sx={{ marginBottom: 2 }}
                  />
                  <Button variant="contained" color="primary">
                    Soumettre
                  </Button>
                </Box>

                {/* Events Button */}
                {site.events && site.events.length > 0 && (
                  <Box mt={3}>
                    <Button variant="contained" color="secondary" onClick={handleDialogOpen}>
                      Voir les Événements
                    </Button>
                  </Box>
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
              </>
            )}
          </StyledPaper>
        </animated.div>
      </StyledWrapper>

      {/* Event Dialog */}
      {site.events && site.events.length > 0 && (
        <EventDialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
          <DialogTitle>
            Événements
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box>
              {site.events.map((event, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="h6" color="textPrimary">
                    {event.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {event.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Fermer
            </Button>
          </DialogActions>
        </EventDialog>
      )}

      <Footer />
    </>
  );
}

export default SiteDetails;
