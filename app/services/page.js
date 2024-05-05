'use client';
import { Box, Typography } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box sx={{ marginTop: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
        }}
      >
        <Typography variant="h3" data-aos="fade-down">
          Services
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            padding: { xs: 3, md: 10 },
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            bgcolor: '#e1f5fe',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                padding: 3,
                color: '#001CAD',
                fontSize: { xs: 20, sm: 22, md: 28, lg: 32 },
              }}
            >
              Electrical Sevices
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: 3, fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }}
              data-aos="flip-left"
            >
              Illuminate your space with our expert electrical services. From
              installations to repairs, our skilled technicians ensure your
              electrical systems are safe and efficient. Experience seamless
              service and reliable solutions with Traders Touch Contractors.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: 3, md: 10 },
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            /*   flexDirection: { xs: 'column', md: 'row' }, */
            flexDirection: 'row-reverse',
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                padding: 3,
                color: '#001CAD',
                fontSize: { xs: 20, sm: 22, md: 28, lg: 32 },
              }}
            >
              Plumbing Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: 3, fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }}
              data-aos="flip-right"
            >
              Say goodbye to leaks and clogs with our professional plumbing
              services. Our experienced team handles everything from repairs to
              installations, ensuring your plumbing systems are in top
              condition. Trust Traders Touch Contractors for expert
              plumbing solutions.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: 3, md: 10 },
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            bgcolor: '#e1f5fe',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                padding: { xs: 3, md: 10 },
                color: '#001CAD',
                fontSize: { xs: 20, sm: 22, md: 28, lg: 32 },
              }}
            >
              Handy Man
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: 3, fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }}
              data-aos="flip-left"
            >
              Need a helping hand? Our handyman services have you covered. From
              minor repairs to general maintenance, our skilled handymen tackle
              every task with precision and care. Trust Traders Touch
              Contractors for all your handyman needs.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: 3, md: 10 },
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',

            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                padding: { xs: 3, md: 10 },
                color: '#001CAD',
                fontSize: { xs: 20, sm: 22, md: 28, lg: 32 },
              }}
            >
              HVAC
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: 3, fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }}
              data-aos="flip-right"
            >
              Stay Cool with Traders Touch HVAC Services! Keep your home
              comfortable all year round with our expert heating ventilation and
              air conditioning solutions. Get in touch to upgrade
              your system today!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
