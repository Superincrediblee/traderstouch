'use client';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
  styled,
} from '@mui/material';
import { PiPhoneCall } from 'react-icons/pi';
import { PiAddressBookLight } from 'react-icons/pi';
import { FaEnvelope } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
const SocialBox = styled(Box)({
  display: 'flex',
  gap: 6,
  color: 'black',
  marginLeft: 40,
});
const IconBox = styled(Box)({
  display: 'flex',
  gap: 4,
  color: 'black',
  marginRight: 30,
});
const IconBoxSm = styled(Box)({
  display: 'flex',
  gap: 4,
  color: 'black',
  marginLeft: 'auto',
});
export default function Appbar() {
  const home = `https://res.cloudinary.com/dbrouaob4/image/upload/v1714413337/Traders_Touch_Contractors_3_20240427_123855_0002_yucwiu.png`;
  return (
    <Box flexGrow="1">
      <AppBar
        position="static"
        sx={{
          bgcolor: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '4px solid black',
            padding: '1px 1px',
          }}
        >
          <SocialBox sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              component="a"
              href="malto:traderstouchcontractor@yahoo.com"
            >
              {' '}
              <FaEnvelope sx={{ marginRight: 2 }} />
              traderstouchcontractor@yahoo.com
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              component="a"
              href="tel:+14706450172"
            >
              <IoIosCall sx={{ marginRight: 2 }} />
              24/7 Customer care
            </Typography>
          </SocialBox>
          <IconBox sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton size="medium" href="tel:+14706450172">
              <PiPhoneCall />
            </IconButton>
            <IconButton
              size="medium"
              href="mailto:traderstouchcontractor@yahoo.com"
            >
              <PiAddressBookLight />
            </IconButton>
          </IconBox>
          <IconBoxSm sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton href="tel:+14706450172">
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                }}
              >
                <PiPhoneCall />
              </Avatar>
            </IconButton>
            <IconButton href="mailto:traderstouchcontractor@yahoo.com">
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                }}
              >
                <PiAddressBookLight />
              </Avatar>
            </IconButton>
          </IconBoxSm>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
