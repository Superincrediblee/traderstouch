'use client';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  styled,
} from '@mui/material';
import { RiMenu2Line } from 'react-icons/ri';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const MenuBox = styled(Box)({
  display: 'flex',
  gap: 10,
  color: 'black',
  marginLeft: { xs: 0, sm: 100, md: 200 },
});

const navItems = [
  { text: 'Home', Link: '' },
  { text: 'About', Link: 'about' },
  { text: 'Services', Link: 'services' },
  { text: 'Contact Us', Link: 'contact' },
];
export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (index) => {
    setActiveIndex(index);
    const link = navItems[index].Link;
    router.push(`/${link}`);
    // Perform your button click action here
  };
  const home = `https://res.cloudinary.com/dbrouaob4/image/upload/v1714413337/Traders_Touch_Contractors_3_20240427_123855_0002_yucwiu.png`;
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              textAlign: 'center',

              borderBottom: '1px solid grey',
              ...(item === navItems[0] && { borderTop: '2px black solid' }),
            }}
          >
            <Link
              href={`/${item.Link}`}
              style={{
                textDecoration: 'none',
                color: 'black',

                width: '100%',
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: 'center',
                  /*      borderBottom: '1px solid grey',
                  ...(item === navItems[0] && { borderTop: '2px black solid' }), */

                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                <Grid container direction={'row'} justifyContent="left">
                  <ListItemText primary={item.text} />
                </Grid>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ top: 'auto', bgcolor: 'white', boxShadow: 'none' }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', marginLeft: { xs: 'none', sm: 20 } }}>
            <Image
              src={home}
              alt="Image description"
              width={200}
              height={200}
            />
          </Box>
          <MenuBox sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Link key={item.text} href={`/${item.Link}`}>
                <Button
                  sx={{
                    fontSize: '18px',
                    borderRadius: 0,
                    color: activeIndex === index ? 'white' : 'black', // Active color
                    bgcolor: activeIndex === index ? 'grey' : 'white', // Active background
                    borderBottom:
                      activeIndex === index ? '4px solid black' : 'none', // Active bottom border
                    transition: 'all 0.2s ease-in-out', // Smooth transition
                    '&:hover': {
                      // Hover style for non-active buttons
                      backgroundColor:
                        activeIndex === index ? 'grey' : '#f2f2f2', // Adjust hover color
                      color: activeIndex === index ? 'white' : 'black',
                      borderBottom:
                        activeIndex === index ? '4px solid black' : 'none', // Active bottom border
                    },
                  }}
                  onClick={() => handleClick(index)}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </MenuBox>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: 'none' },
          }}
        >
          {mobileOpen ? <IoMdCloseCircleOutline /> : <RiMenu2Line />}
        </IconButton>
      </Box>
      <nav>
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },

            '& .MuiDrawer-paper': {
              // Target the Drawer paper
              transition: 'all 0.3s ease-in-out', // Add smooth transition
              boxShadow: 'none',
              top: 250,
            },
            '& .MuiBackdrop-root': {
              display: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
