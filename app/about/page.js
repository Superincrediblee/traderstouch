'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Container maxWidth="xl" sx={{ marginTop: 7, bgcolor: 'grey' }}>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              padding: { xs: 3, md: 10 },
              color: 'white',
              fontSize: { xs: 20, sm: 22, md: 28, lg: 32 },
            }}
            data-aos="fade-down"
          >
            Traders Touch Contractors
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              padding: 3,
              fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
              color: 'white',
            }}
          >
            Welcome to Traders Touch Contractors, your premier destination for
            top-notch facility maintenance services! Specializing in electrical,
            plumbing, HVAC, and handyman services, we pride ourselves on
            delivering efficient solutions to all your maintenance needs. With a
            skilled workforce of technicians, we are dedicated to providing
            quality workmanship and excellent service to our clients across
            Georgia, Tennessee, and Alabama. At Traders Touch Contractors, our
            watchword is efficiency, and our mission is to exceed your
            expectations with every project. Experience the difference with
            Traders Touch Contractors – where excellence meets efficiency in
            facility maintenance. Contact us today to discover how we can
            transform your maintenance challenges into solutions!
          </Typography>
        </Box>
        <Box sx={{ padding: 3 }}>
          <Link href="/services">
            <Button
              variant="contained"
              size="large"
              sx={{
                marginTop: 3,
                fontFamily: 'Open Sans',
                fontSize: { md: '18px' },
                fontWeight: 'medium',
                letterSpacing: '0.8px',
                bgcolor: 'white',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'white',
                textDecoration: 'none', // Removes underline
                color: 'inherit',
                borderRadius: '35px',
                color: 'black',
                '&:hover': {
                  bgcolor: 'white',
                  color: 'black',
                  borderColor: 'black',
                },
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Our Services
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
