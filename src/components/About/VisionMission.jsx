import React from 'react';
import {Box, Container, Grid, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const StyledPaper = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'side'
})(({ theme, side }) => ({
    padding: theme.spacing(4),
    height: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        [side === 'right' ? 'right' : 'left']: 0,
        width: '4px',
        height: '100%',
        background: '#FF7F1E',
    }
}));


const IconWrapper = styled(Box)(() => ({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#E6EAF3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
}));

const Title = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    fontSize: '36px',
    lineHeight: '40px',
    textAlign: 'center',
    marginBottom: '16px',
}));

const SubTitle = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: 800,
    margin: '0 auto 48px',
    lineHeight: '28px',
    fontFamily: 'Poppins, sans-serif',
}));

const SectionTitle = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontSize: '24px',
    marginBottom: '16px',
    fontFamily: 'Montserrat',
}));

const Description = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '16px',
    lineHeight: '1.6',
    fontFamily: 'Poppins, sans-serif',
}));

const sections = [
    {
        title: "Our Vision",
        icon: <VisibilityIcon sx={{ fontSize: 32, color: "#012765" }} />,
        content: [
            "At Emotionally Yours, we envision becoming India’s leading platform for emotional wellness—dedicated to shaping emotionally intelligent, resilient, and high-achieving individuals across academic and professional landscapes.",
            "We see a future where every student and professional are equipped with the right emotional guidance and digital tools to unlock their true potential and leave a meaningful imprint on the world. By elevating productivity, strengthening emotional depth, nurturing essential life skills, and enabling growth-centric environments, we are committed to creating lasting, measurable change that empowers people to thrive.",
        ],
    },
    {
        title: "Our Mission",
        icon: <TrackChangesIcon sx={{ fontSize: 32, color: "#012765" }} />,
        content: [
            "Our mission is to empower academic institutions and workplaces with impactful emotional wellness solutions that elevate performance, enrich growth, and support holistic development.",
            "Through structured programmes and insight-driven guidance, we cultivate resilient mindsets and enable environments where individuals and organisations thrive.",
        ],
    },
    {
        title: "Goals",
        icon: <TrackChangesIcon sx={{ fontSize: 32, color: "#012765" }} />,
        content: [
            "At Emotionally Yours, our goal is to empower educational and professional spaces with transformative emotional wellness solutions. We aim to integrate emotional intelligence into everyday systems to enhance performance, support personal growth, and drive holistic development.",
            "Through structured, outcome-focused programs, we cultivate emotionally resilient individuals and thriving environments where growth is intentional and lasting.",
        ],
    },
];


const VisionMission = () => {
    return (
        <Box sx={{
            backgroundColor: 'white',
            padding:"96px 0"
        }}>
            <Container maxWidth="xl">
                <Box className={"Montserrat"} sx={{
                    fontSize: {sm:"36px",xs:"30px"},
                    marginBottom: "16px",
                    lineHeight: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#012765",
                    fontWeight: "700"
                }}>
                    Vision , Mission & Goals
                </Box>
                <Box sx={{
                    maxWidth: 600,
                    mx: "auto",
                    mb: 8,
                    fontSize: "18px",
                    color: "#4B5563",
                    textAlign: "center",
                    lineHeight: "25px",
                }}>
                    Empowering minds, nurturing well-being, and fostering academic excellence through comprehensive
                    emotional support
                </Box>

                <Grid container spacing={4}>
                    {sections.map((section, index) => (
                        <Grid item xs={12} key={index}>
                            <StyledPaper elevation={3} side={index % 2 === 0 ? 'left' : 'right'}>
                                <Box sx={{
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: "12px",
                                }}>
                                    {section.title}
                                </Box>

                                {section.content.map((item, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            mb: i === section.content.length - 1 ? 2 : 1,
                                            fontSize: "16px",
                                            color: "#4B5563",
                                        }}
                                    >
                                        {item}
                                    </Box>
                                ))}
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
};

export default VisionMission; 