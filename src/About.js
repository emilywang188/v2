import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import RestaurantIcon from '@mui/icons-material/Restaurant';

// Example image import, replace with your image path
import MyImage from './assets/ramen.jpg';

export default function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh', // Full height of the viewport
        p: 2,
        mt: 0,
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
                fontSize: '2.2rem',
              }}
            >
              About Me!
            </Typography>
            <img
              src={MyImage}
              alt="Emily"
              style={{
                width: '100%',
                maxWidth: '300px',
                objectFit: 'cover',
              }}
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {/* Icons */}
              <HomeIcon /> <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1rem',
                  ml: 1,
                  mr: 0,
                  color: '#424242',
                  textAlign: 'left', // Align text to the left
                }}
              >
                westmont, il
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              {/* Icons */}
              <CakeIcon /> <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1rem',
                  ml: 1,
                  mr: 0,
                  color: '#424242',
                  textAlign: 'left', // Align text to the left
                }}
              >
                november 3
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              {/* Icons */}
              <RestaurantIcon /> <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1rem',
                  ml: 1,
                  mr: 0,
                  color: '#424242',
                  textAlign: 'left', // Align text to the left
                }}
              >
                ramen! (see image)
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
              height: '100%',
              mt: 5,
            }}
          >
            <Box sx={{ maxWidth: '500px' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1.1rem',
                  mb: 3,
                  mt: 10,
                  color: 'black',
                  textAlign: 'left', // Align text to the left
                }}
              >
                Hi! Nice to meet you :D
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1.1rem',
                  mb: 3,
                  color: 'black',
                  textAlign: 'left', // Align text to the left
                }}
              >
                I’m Emily Wang, and I’m currently a junior studying computer science at Brown University in lovely Providence, Rhode Island. My interests lie in all aspects of designing user experiences that are welcoming, comfortable, and reliable.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1.1rem',
                  mb: 3,
                  color: 'black',
                  textAlign: 'left', // Align text to the left
                }}
              >
                I am an incoming software engineering intern at Ace Hardware, and am currently working on mobile app development as an RA at Brown’s Computational Cognitive Development Lab.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1.1rem',
                  mb: 3,
                  color: 'black',
                  textAlign: 'left', // Align text to the left
                }}
              >
                When I’m not coding, I love making silly illustrations, crocheting little creatures and gadgets, and playing anime music on the violin.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'TT Chocolates',
                  fontSize: '1.1rem',
                  mb: 3,
                  color: 'black',
                  textAlign: 'left', // Align text to the left
                }}
              >
                Thanks for stopping by!
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Retrograde',
                  color: '#9661B1',
                  mb: 2,
                  fontSize: '2.2rem',
                  textAlign: 'left',
                }}
              >
                Keep in touch!
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Icons */}
                <Box
                component="a"
                href="https://www.linkedin.com/in/emily-mt-wang"
                target="_blank"
                rel="noopener"
                  sx={{
                    textDecoration: 'none',
                    color: '#424242',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s ease', // Smooth color transition
                    '&:hover': {
                      color: '#72428a', // Darker on hover
                    },
                  }}
                >
                  <IconButton disableRipple
                    sx={{
                      color: 'inherit', // Inherit color from parent Box
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'TT Chocolates',
                      fontSize: '1rem',
                      ml: 1,
                      mr: 5,
                      color: 'inherit', // Inherit color from parent Box
                      textAlign: 'left', // Align text to the left
                    }}
                  >
                    emilywang188
                  </Typography>
                </Box>
                <Box
                component="a"
                href="mailto:emilywang188@gmail.com"
                target="_blank"
                rel="noopener"
                  sx={{
                    color: '#424242',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s ease', // Smooth color transition
                    '&:hover': {
                      color: '#72428a', // Darker on hover
                    },
                  }}
                >
                  <IconButton disableRipple
                    sx={{
                      color: 'inherit', // Inherit color from parent Box
                    }}
                  >
                    <GoogleIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'TT Chocolates',
                      fontSize: '1rem',
                      ml: 1,
                      color: 'inherit', // Inherit color from parent Box
                      textAlign: 'left', // Align text to the left
                    }}
                  >
                    emilywang188@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
                <Box
                component="a"
                href="https://github.com/emilywang188"
                target="_blank"
                rel="noopener"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#424242',
                    transition: 'color 0.3s ease', // Smooth color transition
                    '&:hover': {
                      color: '#72428a', // Darker on hover
                    },
                  }}
                >
                  <IconButton disableRipple
                    sx={{
                      color: 'inherit', // Inherit color from parent Box
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'TT Chocolates',
                      fontSize: '1rem',
                      ml: 1,
                      textAlign: 'left', // Align text to the left
                      transition: 'color 0.3s ease', // Smooth color transition
                    }}
                  >
                    emilywang188
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}