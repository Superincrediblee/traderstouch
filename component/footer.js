'use client';
import { Box, Grid, Typography } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="body2" paddingTop={2} textAlign="center">
            &copy; &nbsp; Traders Touch Contractors
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
