import React from 'react';
import { Grid, Typography, Box, Button, CardMedia, CardContent, Card } from '@mui/material';
import DrawerAppBar from '../components/DrawerAppBar';
import Carousel from 'react-material-ui-carousel';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard'; // Custom component for showcasing destinations
import image1 from '../assets/back.png'; // Example images
import image2 from '../assets/back.png';
import image3 from '../assets/back.png';

const LandingPage = () => {
  const carouselItems = [
    { image: image1, title: "Welcome to DiscoverGO", description: "Explore the world's most beautiful destinations with us." },
    { image: image2, title: "Adventure Awaits", description: "Find unique tours and unforgettable experiences." },
    { image: image3, title: "Discover Hidden Gems", description: "Travel beyond the ordinary and explore the extraordinary." },
  ];

  return (
    <Grid container direction="column" sx={{ minHeight: '100vh', backgroundColor: theme => theme.palette.background.default }}>

      {/* Header Section */}
      <Grid item>
        <DrawerAppBar title="DiscoverGO" backgroundColor="primary" />
      </Grid>

      {/* Carousel Section */}
      <Grid item xs>
        <Carousel>
          {carouselItems.map((item, index) => (
            <Box key={index} sx={{ position: 'relative', height: '400px' }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  opacity: 0.9,
                  filter: 'brightness(1.1)'
                }}
              />
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>{item.title}</Typography>
                <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>{item.description}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>Explore Now</Button>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Grid>

      {/* Popular Destinations Section */}
      <Grid item xs sx={{ paddingBottom: { xs: '40px', md: '100px' } }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={9.8}>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '24px',
                    lineHeight: '36px',
                    fontWeight: 700,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  Popular Destinations
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {/* Destination cards */}
                  <Grid item xs={12} sm={6} md={4}>
                    <DestinationCard image={image1} title={"Paris"} subTitle={"Experience the City of Light"} route="/destinations/paris" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <DestinationCard image={image2} title={"New York"} subTitle={"Discover the Big Apple"} route="/destinations/newyork" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <DestinationCard image={image3} title={"Sydney"} subTitle={"Explore the Land Down Under"} route="/destinations/sydney" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Featured Tours Section */}
      <Grid item xs sx={{ backgroundColor: theme => theme.palette.grey[200], padding: '60px 0' }}>
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 4, textAlign: 'center', color: theme => theme.palette.primary.main }}>
              Featured Tours
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>European Highlights</Typography>
                    <Typography sx={{ mt: 2 }}>Discover the best of Europe in this comprehensive tour.</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>Tropical Adventure</Typography>
                    <Typography sx={{ mt: 2 }}>Experience the beauty of tropical islands.</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>African Safari</Typography>
                    <Typography sx={{ mt: 2 }}>Join us for an unforgettable safari adventure.</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Testimonials Section */}
      <Grid item xs sx={{ padding: '60px 0' }}>
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700}>Emma</Typography>
                <Typography sx={{ mt: 2 }}>“DiscoverGO made our vacation unforgettable. Highly recommend!”</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700}>John</Typography>
                <Typography sx={{ mt: 2 }}>“The variety of tours and destinations is amazing. Great service!”</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Subscription Section */}
      <Grid item xs sx={{ backgroundColor: theme => theme.palette.primary.main, padding: '60px 0', textAlign: 'center' }}>
        <Typography variant="h5" color="white" fontWeight={700}>Subscribe to our Newsletter</Typography>
        <Typography color="white" sx={{ mt: 2 }}>Get the latest travel deals and updates delivered to your inbox.</Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 4 }}>Subscribe Now</Button>
      </Grid>

      {/* Latest Blog Posts Section */}
      <Grid item xs sx={{ padding: '60px 0', backgroundColor: theme => theme.palette.grey[100] }}>
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 4, textAlign: 'center', color: theme => theme.palette.primary.main }}>
              Latest Blog Posts
            </Typography>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700}>Top 10 Destinations for 2024</Typography>
                <Typography sx={{ mt: 2 }}>Find out which places are trending this year.</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700}>Travel Tips for Families</Typography>
                <Typography sx={{ mt: 2 }}>Make the most of your family vacation with these tips.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Top Rated Tours Section */}
      <Grid item xs sx={{ padding: '60px 0' }}>
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={9.8}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 4, textAlign: 'center', color: theme => theme.palette.primary.main }}>
              Top Rated Tours
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>Italy Gourmet Tour</Typography>
                    <Typography sx={{ mt: 2 }}>Indulge in the finest Italian cuisine and wine.</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>Japan Culture Journey</Typography>
                    <Typography sx={{ mt: 2 }}>Explore Japan's rich history and culture.</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>Alaskan Wilderness</Typography>
                    <Typography sx={{ mt: 2 }}>Witness the untouched beauty of Alaska.</Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
