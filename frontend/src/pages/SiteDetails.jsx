import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  Typography, Box, Paper, Breadcrumbs, Link, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
  TextField, Grid
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

// Custom Styles
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

const VideoWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 aspect ratio
  borderRadius: 12,
  overflow: 'hidden',
  margin: 'auto',
  background: '#000',
});

const Video = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 12,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  margin: 'auto',
  '.carousel .slide': {
    background: theme.palette.grey[200],
  },
}));

const MapWrapper = styled(Box)({
  width: '100%',
  height: '300px',
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

function SiteDetails() {
  const { sitename } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { site, category, subcategory } = location.state || {};
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState('');


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
  const handleSubmitReview = async () => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    const siteId = site.id; // Ensure this is correctly defined
  
    try {
      const response = await fetch('http://localhost:5000/api/reviews', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ siteId, comment, rating }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Review added:', result);
        // Optionally, you might want to update the UI or show a success message
        setComment('');
        setRating('');
      } else {
        console.error('Failed to add review');
        // Handle error response
      }
    } catch (error) {
      console.error('Error adding review:', error);
      // Handle request error
    }
  };
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
          <Grid container spacing={3}>
            {/* Left side: Information and Map */}
            <Grid item xs={12} md={6}>
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
                    
                    {site.address && (
                      <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Adresse :</strong> {site.address}
                      </Typography>
                    )}

                    {site.history && (
                      <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Historique :</strong> {site.history}
                      </Typography>
                    )}

                    {site.latitude && site.longitude && (
                      <MapWrapper>
                        <MapContainer
                          center={[parseFloat(site.latitude), parseFloat(site.longitude)]}
                          zoom={13}
                          style={{ height: "100%", width: "100%" }}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          />
                          <Marker position={[parseFloat(site.latitude), parseFloat(site.longitude)]}>
                            <Popup>
                              {site.name}<br />{site.address}
                            </Popup>
                          </Marker>
                        </MapContainer>
                      </MapWrapper>
                    )}

                    <Box mt={3}>
                      <SectionTitle variant="h6" color="textPrimary">
                        Avis
                      </SectionTitle>
                      {site.Reviews && site.Reviews.length > 0 ? (
                        site.Reviews.map((review) => (
                          <ReviewCard key={review.id}>
                            <Typography variant="h6" color="textPrimary">
                              Note : {review.rating}/5
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                              {review.comment}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              - {review.User.username}
                            </Typography>
                          </ReviewCard>
                        ))
                      ) : (
                        <Typography variant="body1" color="textSecondary">
                          Aucun avis disponible.
                        </Typography>
                      )}
                    </Box>

                    <Box mt={3}>
                      <SectionTitle variant="h6" color="textPrimary">
                        Laissez un Commentaire
                      </SectionTitle>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Votre commentaire"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        sx={{ marginBottom: 2 }}
                      />
                      <TextField
                        fullWidth
                        type="number"
                        variant="outlined"
                        placeholder="Votre note (1-5)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        sx={{ marginBottom: 2 }}
                      />
                      <Button variant="contained" color="primary" onClick={handleSubmitReview}>
                        Soumettre
                      </Button>
                    </Box>


                    {site.Events && site.Events.length > 0 && (
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
            </Grid>

            {/* Right side: Video Carousel */}
            <Grid item xs={12} md={6}>
              {site && site.Images && site.Images.length > 0 && (
                <StyledCarousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                  {site.Images.map((videoUrl, index) => (
                    <div key={index}>
                      <VideoWrapper>
                        <Video controls>
                          <source src={videoUrl.imageUrl} type="video/mp4" />
                          Votre navigateur ne supporte pas la balise vidéo.
                        </Video>
                      </VideoWrapper>
                    </div>
                  ))}
                </StyledCarousel>
              )}
            </Grid>
          </Grid>
        </animated.div>

        <EventDialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>
            <Typography variant="h6">Événements</Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {/* Map of events */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Fermer
            </Button>
          </DialogActions>
        </EventDialog>
      </StyledWrapper>

      <Footer />
    </>
  );
}

export default SiteDetails;
