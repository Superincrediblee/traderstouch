'use client';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import SwipeableTextMobileStepper from '@/component/carousel';
import Link from 'next/link';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const home = `https://res.cloudinary.com/dbrouaob4/image/upload/v1714413337/Traders_Touch_Contractors_3_20240427_123855_0002_yucwiu.png`;
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/*  Hero section */}
        <Grid container sx={{ padding: { xs: 3, sm: 10 } }} direction="column">
          <Grid item>
            <Typography
              variant="h1"
              sx={{
                color: /* '#54595f' */ '#001CAD',
                fontFamily: 'Fauna One',
                fontSize: { xs: '1.7rem', md: '4rem' },
                fontWeight: 900,
                textTransform: 'capitalize',
                lineHeight: '1.1em',
              }}
            >
              Transforming Spaces, Building Dreams, Delivering Excellence!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 3,
                color: 'black',
                fontFamily: 'Open Sans',
                fontSize: { xs: '13px', md: '17px' },
                lineHeight: '1.6em',
              }}
            >
              We provide the most thorough, comprehensive, and professional
              facility Maintenance.
            </Typography>
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
                  bgcolor: '#001CAD',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  borderColor: '#001CAD',
                  borderRadius: '35px',
                  boxShadow: '-7px 13px 56px 0px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'black',
                    borderColor: 'black',
                  },
                }}
                endIcon={<ExpandMoreIcon />}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Our Services
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* Next section */}
        <Grid
          container
          columnSpacing={6}
          sx={{
            width: { xs: '100%', sm: '100%' },
            margin: { xs: '0 auto', sm: 'auto' },
          }}
        >
          <Grid
            container
            item
            xs={12}
            sm={6}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item xs={12} sm={3} sx={{ marginLeft: { xs: 0, sm: 8 } }}>
              <Avatar
                sx={{
                  bgcolor: '#001CAD',
                  width: { xs: 50, md: 100 },
                  height: { xs: 50, md: 100 },
                  fontSize: { xs: '25px', md: '50px' },
                }}
              >
                <FaPhone />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={3} md={4} sx={{ p: { xs: 2, md: 0 } }}>
              <Typography variant="body2" component="div">
                Have a question?
              </Typography>
              <Typography
                sx={{
                  textDecoration: 'none', // Removes underline
                  color: 'inherit', // Inherits color from parent element
                }}
                variant="body2"
                component="a"
                href="tel:+14706450172"
              >
                Call us now +1 4706450172
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item xs={12} sm={3}>
              <Avatar
                sx={{
                  bgcolor: '#001CAD',
                  width: { xs: 50, md: 100 },
                  height: { xs: 50, md: 100 },
                  fontSize: { xs: '25px', md: '50px' },
                }}
              >
                <FaEnvelopeOpenText />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={3} md={4} sx={{ p: { xs: 2, md: 0 } }}>
              <Typography component="div">Get a Quote</Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: 1.6,
                  fontFamily: 'rosario',
                  color: 'black',
                  textDecoration: 'none',
                }}
                component="a"
                href="malto:traderstouchcontractor@yahoo.com"
              >
                Drop us an email
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 7 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              color: '#000000',
              fontFamily: 'Montserrat',
              fontSize: '44px',
              fontWeight: 700,
              textTransform: 'uppercase',
              lineHeight: '1.25em',
              letterSpacing: ' 3px',
              marginBottom: 4,
            }}
          >
            Services
          </Typography>
          <Box
            sx={{
              width: '50px',
              height: '3px',
              bgcolor: 'black',
              margin: '0 auto',
            }}
          >
            <Divider />
          </Box>
          <Typography
            variant="h6"
            align="center"
            sx={{
              marginTop: 4,
              color: '#242424',
              fontFamily: 'Montserrat',
              fontSize: '16p',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: ' 4px',
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            PROVIDING NATIONAL-LEVEL PLUMBING, ELECTRICAL, HVAC, AND HANDYMAN
            SERVICES
          </Typography>
          <Container maxwidth="xl">
            <Grid container spacing={1} sx={{ marginTop: '40px' }}>
              <Grid item xs={12} sm={4} md={4}>
                <Paper
                  elevation={8}
                  sx={{
                    maxWidth: '100%',
                    '&:hover': {
                      boxShadow: '-7px 13px 56px 0px rgba(0, 0, 0, 0.4)',
                      borderColor: '-7px 13px 56px 0px rgba(0, 0, 0, 0.4)',
                      cursor: 'pointer', // Optional: Change cursor on hover
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={home}
                      alt="Image description"
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      Your Trusted Maintenance Partner
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper
                  elevation={8}
                  sx={{
                    maxWidth: '100%',
                    '&:hover': {
                      boxShadow: '-7px 13px 56px 0px rgba(0, 0, 0, 0.4)',
                      borderColor: '-7px 13px 56px 0px rgba(0, 0, 0, 0.4)',
                      cursor: 'pointer', // Optional: Change cursor on hover
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={home}
                      alt="Image description"
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      Specialized Services, Superior Result
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper
                  elevation={8}
                  sx={{
                    maxWidth: '100%',
                    '&:hover': {
                      boxShadow: '-7px 13px 56px 0px rgba(0, 0, 0, 0.4)',
                      borderColor: '-7px 13px 56px 0px rgba(0, 0, 0, 0.4)',
                      cursor: 'pointer', // Optional: Change cursor on hover
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={home}
                      alt="Image description"
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      Efficient Solutions, Expert Service
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ overflowX: 'hidden' }}>
            <Container maxWidth="xl">
              <Grid container>
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      /* maxWidth: { xs: '100%', md: '100%' }, */
                      bgcolor: 'black',
                    }}
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <Box
                      sx={{
                        padding: { xs: 1, md: '80px 100px 20px 100px' },
                        marginTop: 7,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          bgcolor: '#001CAD',
                          color: 'black',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          sx={{
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: { xs: '18px', md: '28px' },
                            lineHeight: { xs: 1, md: 1.5 },
                            color: 'white',
                          }}
                        >
                          Quality Craftmanship Guaranteed
                        </Button>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        padding: { xs: 1, md: '8px 100px 20px 100px' },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'white',
                        }}
                      >
                        Stay Cool with Traders Touch HVAC Services! Keep your
                        home comfortable all year round with our expert HVAC
                        solutions. Get in touch to upgrade your system today!
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      /* maxWidth: { xs: '100%', md: '100%' }, */
                      bgcolor: 'black',
                    }}
                    data-aos="fade-left"
                    data-aos-offset="250"
                    data-aos-easing="ease-in-sine"
                  >
                    <Box
                      sx={{
                        padding: { xs: 1, md: '80px 100px 20px 100px' },
                        marginTop: 7,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          bgcolor: '#001CAD',
                          color: 'black',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          sx={{
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: { xs: '18px', md: '28px' },
                            lineHeight: { xs: 1, md: 1.5 },
                            color: 'white',
                          }}
                        >
                          Excellence In Every Detail
                        </Button>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        padding: { xs: 1, md: '8px 100px 20px 100px' },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'white',
                        }}
                      >
                        Illuminate Your Space with Traders Touch Contractors!
                        Experience top-notch electrical services that brighten
                        your surroundings. Contact us today for a consultation
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} xl={6}>
                    <Paper
                      elevation={5}
                      sx={{
                        /* maxWidth: { xs: '100%', md: '100%' }, */
                        bgcolor: 'black',
                      }}
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                    >
                      <Box
                        sx={{
                          padding: { xs: 1, md: '80px 100px 20px 100px' },
                          marginTop: 7,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            bgcolor: '#001CAD',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Button
                            sx={{
                              textTransform: 'none',
                              fontWeight: 700,
                              fontSize: { xs: '18px', md: '28px' },
                              lineHeight: { xs: 1, md: 1.5 },
                              color: 'white',
                            }}
                          >
                            Expertise You Can Trust
                          </Button>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          padding: { xs: 1, md: '8px 100px 20px 100px' },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'white',
                          }}
                        >
                          Transform Your Space with Traders Touch Contractors!
                          Elevate your property with our exceptional services.
                          Schedule a consultation today and lets bring your
                          vision to life!
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box>
            <SwipeableTextMobileStepper />
          </Box>
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
                Welcome to Traders Touch Contractors, your premier destination
                for top-notch facility maintenance services! Specializing in
                electrical, plumbing, HVAC, and handyman services, we pride
                ourselves on delivering efficient solutions to all your
                maintenance needs. With a skilled workforce of technicians, we
                are dedicated to providing quality workmanship and excellent
                service to our clients across Georgia, Tennessee, and Alabama.
                At Traders Touch Contractors, our watchword is efficiency, and
                our mission is to exceed your expectations with every project.
                Experience the difference with Traders Touch Contractors – where
                excellence meets efficiency in facility maintenance. Contact us
                today to discover how we can transform your maintenance
                challenges into solutions!
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
      </Box>
    </ThemeProvider>
  );
}
