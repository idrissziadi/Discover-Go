import React from 'react';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

const SiteCard = ({ site }) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: theme.spacing(2) 
      }}
    >
      <CardMedia
        sx={{ 
          height: 140 
        }}
        image={site.imageUrl || '/path/to/default-image.jpg'}
        title={site.name}
      />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          {site.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {site.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SiteCard;
