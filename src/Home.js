import * as React from 'react';
import { Box } from '@mui/material';
import HomeGrid from './HomeGrid';
import WorkGrid from './WorkGrid';
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
            
            <Box id="work" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <WorkGrid />
            </Box>
        </div>
    );
}

export default Home;