import { getSkeletonUtilityClass } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function WorkGrid() {
    const skills = ["React", "JavaScript", "TypeScript", "C", "C++", "Python", "Java", "React Native", "HTML", "CSS"];
    const tools = ["SQLite", "Expo", "Figma", "Node.js", "Firebase", "JUnit", "Playwright", "VSCode", "GitHub"];

    return (
        <div>
            <Box
            sx={{
            minHeight: '100vh',
            p: 2,
            pt: 30,
            }}
            >
                <Typography variant="h2" sx={{
                        fontFamily: 'Retrograde',
                        color: '#9661B1',
                        fontSize: 45,
                        mb: 5,
                        textAlign: 'left' }}>Featured Work</Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>    
                    <Typography variant="h4" sx={{ mr: 3, fontFamily: 'TT Chocolates', fontSize: 23}}>SKILLS:</Typography>
                    {skills.map((skill) => (
                        <Box key={skill} sx={{ minWidth: 40, ml: 1, border: '1px solid black', p: 0.8, pl: 1.8, pr: 1.8, borderRadius: 3 }}>
                            <Typography variant="body1" sx={{ fontFamily: 'TT Chocolates', fontSize: 16}}>
                                {skill}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ mr: 3, fontFamily: 'TT Chocolates', fontSize: 23}}>TOOLS:</Typography>
                    {tools.map((tool) => (
                        <Box key={tool} sx={{ minWidth: 40, ml: 1, border: '1px solid black', p: 0.8, pl: 2, pr: 2, borderRadius: 3 }}>
                            <Typography variant="body1" sx={{ fontFamily: 'TT Chocolates', fontSize: 16}}>
                                {tool}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

        </div>

    )
}