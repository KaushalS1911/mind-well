import React from "react";
import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
    styled,
} from "@mui/material";
import img1 from '../../assets/images/about/aboutHeader/overview.jpg'

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    height: "100%",
    backgroundColor: "#F9FAFB",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "4px",
        height: "100%",
        background: "#FF7F1E",
    },
}));

function AboutHeader() {

    const colors = {
        primary: '#0E3D7B',
        secondary: '#FF7A00',
        text: '#0E3D7B',
        lightText: '#4A5568',
        background: '#F8FAFC'
    };

    return (
        <Box>
            <Box
                sx={{
                    padding: "130px 0 80px 0",
                    bgcolor: "#012765",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "linear-gradient(135deg, rgba(1, 39, 101, 0.9) 0%, rgba(1, 39, 101, 0.7) 100%)",
                        zIndex: 1,
                    },
                }}
            >
                <Container maxWidth="xl" sx={{position: "relative", zIndex: 2, textAlign: "center"}}>
                    <Box
                        className="Montserrat"
                        sx={{
                            fontSize: "48px",
                            lineHeight: 1,
                            fontWeight: "700",
                            color: "#fff",
                            mb: 2,
                            mt: 8
                        }}
                    >
                        About Us
                    </Box>
                    <Divider sx={{
                        backgroundColor: colors.secondary,
                        height: 4,
                        width: 100,
                        mx: 'auto',
                        my: 3
                    }}/>
                    <Typography variant="h5" gutterBottom sx={{color: 'rgba(255,255,255,0.9)', fontWeight: "600"}}>
                        Transforming Emotional Wellness
                    </Typography>
                    <Typography variant="body1" paragraph
                                sx={{color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: "lg", mx: "auto"}}>
                        We're on a mission to empower individuals and organizations
                        through emotional intelligence and well-being.
                    </Typography>
                </Container>
            </Box>

            {/* Overview Section */}
            <Box >
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <StyledPaper elevation={3}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{color: "#012765"}}
                                >
                                    Overview
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "16px",
                                        color: "#4B5563",
                                        lineHeight: "1.6",
                                        fontFamily: "Poppins",
                                        textAlign: "justify",
                                    }}
                                >
                                    EmotionallYours is an initiative by MTPL, a private limited
                                    company established in 2022 and recognised under the Start-Up
                                    India programme. We design structured, process-orientated
                                    programmes that enhance emotional intelligence and cultivate
                                    transformative mindsets. Our mission is to empower individuals
                                    and organisations to build resilience, navigate challenges
                                    with clarity, and nurture meaningful relationships.
                                </Typography>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                height: "500px",
                                width: "100%",
                            }}>
                                <img
                                    src={img1}
                                    alt="Emotional Wellness Overview"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default AboutHeader;
