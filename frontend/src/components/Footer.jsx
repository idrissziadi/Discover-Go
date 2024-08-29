// src/components/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme => theme.palette.grey[900],
        color: theme => theme.palette.common.white,
        padding: '16px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: 400,
        }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        |
        <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
