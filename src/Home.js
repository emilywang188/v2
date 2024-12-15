import * as React from 'react';
import { Box, Typography } from '@mui/material';
import HomeGrid from './HomeGrid';
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        const element = document.getElementById('home');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div>
            <Box id="home" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HomeGrid />
            </Box>
            <Box id="work" sx={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
                <Typography variant="h2">Work Section</Typography>
            </Box>
        </div>
    );
}

export default Home;