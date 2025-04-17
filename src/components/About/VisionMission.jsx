import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import img1 from '../../assets/images/about/mission-vission-goals/vission.jpg';
import img2 from '../../assets/images/about/mission-vission-goals/mission.jpg';
import img3 from '../../assets/images/about/mission-vission-goals/goals1.jpg';

const StyledPaper = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'side'
})(({ theme, side }) => ({
    padding: theme.spacing(3),
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

const sections = [
    {
        title: "Our Vision",
        icon: <VisibilityIcon sx={{ fontSize: 32, color: "#012765" }} />,
        content: [
            "At Emotionally Yours, we envision becoming India’s leading platform for emotional wellness—dedicated to shaping emotionally intelligent, resilient, and high-achieving individuals across academic and professional landscapes.",
            "We see a future where every student and professional are equipped with the right emotional guidance and digital tools to unlock their true potential and leave a meaningful imprint on the world. By elevating productivity, strengthening emotional depth, nurturing essential life skills, and enabling growth-centric environments, we are committed to creating lasting, measurable change that empowers people to thrive.",
        ],
        image: img1,
    },
    {
        title: "Our Mission",
        icon: <TrackChangesIcon sx={{ fontSize: 32, color: "#012765" }} />,
        content: [
            "Our mission is to empower academic institutions and workplaces with impactful emotional wellness solutions that elevate performance, enrich growth, and support holistic development.",
            "Through structured programmes and insight-driven guidance, we cultivate resilient mindsets and enable environments where individuals and organisations thrive.",
        ],
        image: img2,
    },
    {
        title: "Goals",
        icon: <TrackChangesIcon sx={{ fontSize: 32, color: "#012765" }} />,
        content: [
            "At Emotionally Yours, our goal is to empower educational and professional spaces with transformative emotional wellness solutions. We aim to integrate emotional intelligence into everyday systems to enhance performance, support personal growth, and drive holistic development.",
            "Through structured, outcome-focused programs, we cultivate emotionally resilient individuals and thriving environments where growth is intentional and lasting.",
        ],
        image: img3,
    },
];

const VisionMission = () => {
    return (
        <Box sx={{ backgroundColor: 'white', py: { xs: 6, md: 12 } }}>
            <Container maxWidth="xl">
                <Box className="Montserrat" sx={{
                    fontSize: { xs: '26px', sm: '30px', md: '36px' },
                    mb: 2,
                    lineHeight: { xs: '32px', sm: '36px', md: '40px' },
                    textAlign: 'center',
                    color: '#012765',
                    fontWeight: 700
                }}>
                    Vision, Mission & Goals
                </Box>
                <Box sx={{
                    maxWidth: 700,
                    mx: "auto",
                    mb: 8,
                    fontSize: { xs: "16px", md: "18px" },
                    color: "#4B5563",
                    textAlign: "center",
                    lineHeight: { xs: "24px", md: "28px" },
                    px: { xs: 2, sm: 0 }
                }}>
                    Empowering minds, nurturing well-being, and fostering academic excellence through comprehensive emotional support
                </Box>

                <Grid container spacing={6}>
                    {sections.map((section, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <Grid item xs={12} key={index}>
                                <Grid container spacing={4} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                                    <Grid
                                        item
                                        xs={12}
                                        md={8}
                                        order={{ xs: 2, md: isEven ? 1 : 2 }}
                                    >
                                        <StyledPaper elevation={3} side={isEven ? 'left' : 'right'}>
                                            <Box sx={{
                                                fontSize: { xs: "20px", md: "24px" },
                                                fontWeight: 700,
                                                color: "#012765",
                                                mb: 2,
                                            }}>
                                                {section.title}
                                            </Box>

                                            {section.content.map((item, i) => (
                                                <Box
                                                    key={i}
                                                    sx={{
                                                        mb: i === section.content.length - 1 ? 2 : 1,
                                                        fontSize: { xs: "14px", md: "16px" },
                                                        color: "#4B5563",
                                                    }}
                                                >
                                                    {item}
                                                </Box>
                                            ))}
                                        </StyledPaper>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        order={{ xs: 1, md: isEven ? 2 : 1 }}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: { xs: 'center', md: isEven ? 'flex-end' : 'flex-start' },
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                maxWidth: { xs: 300, sm: 400 },
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <img
                                                src={section.image}
                                                alt={section.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default VisionMission;
