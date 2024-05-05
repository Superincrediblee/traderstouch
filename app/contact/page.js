'use client';
import { Box, Button, Typography } from '@mui/material';
import { PiPhoneCall } from 'react-icons/pi';
import { PiAddressBookLight } from 'react-icons/pi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h2"
        paddingTop={10}
        textAlign="center"
        data-aos="fade-down"
      >
        Contact Us
      </Typography>
      <Typography variant="div" textAlign="center" padding={4}>
        2376 candler ste b decatur ga 30032
      </Typography>
      <Box
        sx={{
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          padding: '5',
        }}
      >
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          href="tel:+14706450172"
          endIcon={<PiPhoneCall />}
          data-aos="zoom-in-up"
          data-aos-once="true"
        >
          Call Us{' '}
        </Button>
        <Button
          variant="outlined"
          sx={{
            mr: 2,
            bgcolor: 'red',
            color: 'white',
            '&:hover': { color: 'black' },
          }}
          href="mailto:traderstouchcontractor@yahoo.com"
          endIcon={<PiAddressBookLight />}
          data-aos="zoom-in-up"
          data-aos-once="true"
        >
          Email Us{' '}
        </Button>
      </Box>
    </Box>
  );
}
