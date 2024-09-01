// src/pages/AboutUs.js

import React from 'react';
import { Grid, Box, Typography, Button, Container, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import DrawerAppBar from '../components/DrawerAppBar';
import Footer from '../components/Footer';
import { Facebook, Instagram, GitHub } from '@mui/icons-material';

const AboutUs = () => {
  return (
    <>
      <DrawerAppBar title="DiscoverGo" backgroundColor="primary" />
      <Container sx={{ my: 4 }}>
        <Grid container spacing={4} minHeight="80vh">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: '32px',
                  lineHeight: '40px',
                  fontWeight: 700,
                  mb: 2,
                  color: theme => theme.palette.primary.main,
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontWeight: 400,
                  mb: 3,
                }}
              >
                DiscoverGo is your gateway to unforgettable travel experiences. Our platform is designed to help adventurers and explorers discover unique destinations, plan seamless trips, and immerse themselves in the world's diverse cultures. From breathtaking landscapes to hidden gems, DiscoverGo provides you with all the tools and insights needed to make your journey truly memorable.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Explore More
              </Button>
              <Box sx={{ mt: 2 }}>
                <IconButton
                  href="https://www.facebook.com/DiscoverGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/DiscoverGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ ml: 1 }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://github.com/DiscoverGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ ml: 1 }}
                >
                  <GitHub />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                maxWidth: '100%',
                borderRadius: 2,
                boxShadow: 3,
                mb: 4,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                
                alt="DiscoverGo"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: '20px',
                    lineHeight: '28px',
                    fontWeight: 700,
                    mb: 1,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: '14px',
                    lineHeight: '22px',
                    fontWeight: 400,
                  }}
                >
                  At DiscoverGo, our vision is to inspire people to explore the world with confidence and curiosity. We strive to make every journey unique, enriching, and sustainable by providing trusted guidance, innovative tools, and a vibrant community of fellow travelers. Your next adventure awaits with DiscoverGo.
                </Typography>
              </CardContent>
            </Card>
            {/* Add the Google Maps card with a dark mode style */}
            <Box sx={{ width: '100%', height: '400px', mt: 4 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.2175744110264!2d3.489805215406136!3d32.48882508111282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1285a5d15c6a699d%3A0xd8d2e2d8b683430e!2sGhardaia%2C%20Algeria!5e0!3m2!1sen!2sus!4v1679617405681!5m2!1sen!2sus&maptype=roadmap&style=feature:administrative.country%7Celement:labels%7Cvisibility:simplified&style=feature:administrative.province%7Celement:labels%7Cvisibility:simplified&style=feature:administrative.locality%7Celement:labels%7Cvisibility:simplified&style=feature:administrative.neighborhood%7Celement:labels%7Cvisibility:simplified&style=feature:poi%7Celement:labels%7Cvisibility:simplified&style=feature:poi.business%7Celement:labels%7Cvisibility:simplified&style=feature:road%7Celement:labels%7Cvisibility:simplified&style=feature:transit%7Celement:labels%7Cvisibility:simplified&style=feature:water%7Celement:labels%7Cvisibility:simplified"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 2 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Ghardaia"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
