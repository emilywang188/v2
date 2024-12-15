import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Work', 'About'];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    if (page === 'About') {
        navigate('/about');
    } else {
        navigate('/');
        setTimeout(() => {
            document.getElementById(page.toLowerCase()).scrollIntoView({ behavior: 'smooth'})
        }, 100);
    }
  };


  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'transparent', // Transparent app bar
        boxShadow: 'none', // Remove shadow
        color: 'black', // Default text color
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo or Icon */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Retrograde', // Apply Retrograde font
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#9661B1', // Purple color for the logo
              textDecoration: 'none',
            }}
          >
            {'<em>'}
          </Typography>

          {/* Navigation Buttons */}
          <Box
            sx={{
              flexGrow: 1, // Takes up available space
              display: 'flex',
              justifyContent: 'flex-end', // Align items to the right
            }}
          >
            {pages.map((page) => (
              <Button disableRipple
                onClick={() => handleNavigation(page)}
                key={page}
                sx={{
                  my: 2,
                  mx: 1, // Optional spacing between buttons
                  fontFamily: 'Retrograde',
                  color: '#9661B1',
                  textTransform: 'none', // Prevent uppercase conversion
                  fontSize: '1.5rem', // 
                  transition: 'color 0.3s ease', // Smooth color transition
                  '&:hover': {
                    color: '#72428a', // Darker on hover
                    backgroundColor: 'transparent', // Remove background color
                  },
                  '&:active': {
                    color: '#441e57', // Even darker on click
                    backgroundColor: 'transparent', // Remove background color
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
