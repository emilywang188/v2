import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Example image import, replace with your image path
import MyImage from './assets/self_portrait.png';

export default function HomeGrid() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh', // Full height of the viewport
        p: 2,
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Retrograde',
                color: '#9661B1',
                mb: 2,
              }}
            >
              Hi, I'm Emily!
            </Typography>
            <Typography
            variant="body1"
            sx={{
                fontFamily: 'TT Chocolates',
                fontSize: '1.4rem',
                mb: 3,
                color: 'black',
                maxWidth: '400px', // Limit the width of the text
            }}
            >
            I’m a junior at Brown studying software engineering and user experience design.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Icons */}
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/emily-mt-wang"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/emilywang188"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:emilywang188@gmail.com"
              >
                <GoogleIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img
              src={MyImage}
              alt="Emily"
              style={{
                width: '100%',
                maxWidth: '550px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
