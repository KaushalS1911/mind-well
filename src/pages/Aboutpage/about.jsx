import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BusinessCenter, Groups2, Handshake } from '@mui/icons-material';
import Worker from "../../components/About/worker.jsx";
import VisionMission from "../../components/About/VisionMission.jsx";
import Goals from "../../components/About/Goals.jsx";
import Founders from "../../components/About/Founders.jsx";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: '#FF7F1E',
    }
}));

const IconWrapper = styled(Box)(() => ({
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#E6EAF3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#012765',
        '& svg': {
            color: '#ffffff !important'
        }
    }
}));

const About = () => {
    return (
        <Box sx={{ 
            minHeight: '100vh', 
            bgcolor: 'white'
        }}>
            {/* Hero Section */}
            <Box sx={{ 
                pt: { xs: 4, sm: 5 },
                pb: { xs: 2, md: 3 },
                mt: { xs: "70px", sm: "80px" },
                bgcolor: 'white',
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '4px',
                    backgroundColor: '#FF7F1E',
                    borderRadius: '2px'
                }
            }}>
                <Container maxWidth="xl">
                    {/* Header */}
                    <Box className="Montserrat" sx={{
                        fontSize: { xs: "32px", sm: "36px", md: "42px" },
                        marginBottom: { xs: "12px", sm: "16px" },
                        lineHeight: "1.2",
                        textAlign: "center",
                        color: "#012765",
                        fontWeight: "700"
                    }}>
                        About Us
                    </Box>
                    <Box sx={{
                        maxWidth: 800,
                        mx: "auto",
                        mb: { xs: 3, sm: 4 },
                        fontSize: { xs: "16px", sm: "18px" },
                        color: "#4B5563",
                        textAlign: "center",
                        lineHeight: "1.6",
                        fontFamily: "Poppins"
                    }}>
                        Empowering organizations and individuals through structured programs that enhance emotional intelligence and foster sustainable growth.
                    </Box>

                    {/* Info Cards */}
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12} md={4}>
                            <StyledPaper elevation={3}>
                                <IconWrapper>
                                    <BusinessCenter sx={{ fontSize: 28, color: '#012765' }} />
                                </IconWrapper>
                                <Box sx={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: 1.5,
                                    fontFamily: "Montserrat"
                                }}>
                                    Start-Up Certified
                                </Box>
                                <Box sx={{
                                    fontSize: "15px",
                                    color: "#4B5563",
                                    lineHeight: "1.6",
                                    fontFamily: "Poppins"
                                }}>
                                    MTPL is a Private Limited Company with Start Up India Certification, established and registered in 2022 to drive innovation in emotional wellness.
                                </Box>
                            </StyledPaper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <StyledPaper elevation={3}>
                                <IconWrapper>
                                    <Groups2 sx={{ fontSize: 28, color: '#012765' }} />
                                </IconWrapper>
                                <Box sx={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: 1.5,
                                    fontFamily: "Montserrat"
                                }}>
                                    Holistic Growth
                                </Box>
                                <Box sx={{
                                    fontSize: "15px",
                                    color: "#4B5563",
                                    lineHeight: "1.6",
                                    fontFamily: "Poppins"
                                }}>
                                    We facilitate organizational success and individual development through structured programs designed to enhance emotional intelligence and transform mindsets.
                                </Box>
                            </StyledPaper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <StyledPaper elevation={3}>
                                <IconWrapper>
                                    <Handshake sx={{ fontSize: 28, color: '#012765' }} />
                                </IconWrapper>
                                <Box sx={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: 1.5,
                                    fontFamily: "Montserrat"
                                }}>
                                    Guidance & Support
                                </Box>
                                <Box sx={{
                                    fontSize: "15px",
                                    color: "#4B5563",
                                    lineHeight: "1.6",
                                    fontFamily: "Poppins"
                                }}>
                                    We provide comprehensive guidance to help individuals build resilience, effectively manage stress, and develop meaningful relationships.
                                </Box>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
            {/* Components without margin as they have their own padding/background */}
            <VisionMission/>
            <Goals/>
            <Founders/>
            <Worker/>
        </Box>
    );
};

export default About;