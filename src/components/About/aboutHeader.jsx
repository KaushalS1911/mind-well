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
import img1 from '../../assets/images/about/aboutHeader/overview.jpg';

const StyledPaper = styled(Paper)(({ theme }) => ({
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

const headerStyles = {
    padding: "130px 0 80px 0",
    bgcolor: "#012765",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
};

const headerTextStyles = {
    fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
    lineHeight: 1,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 2,
    marginTop: 8,
};

const dividerStyles = {
    backgroundColor: "#FF7A00",
    height: 4,
    width: 100,
    margin: "auto",
    marginY: 3,
};

const colors = {
    primary: '#0E3D7B',
    secondary: '#FF7A00',
    text: '#0E3D7B',
    lightText: '#4A5568',
    background: '#F8FAFC',
};

const AboutHeader = () => {
    return (
        <Box>
            <Box sx={headerStyles}>
                <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
                    <Box sx={headerTextStyles} className="Montserrat">
                        About Us
                    </Box>
                    <Divider sx={dividerStyles} />
                    <Typography variant="h5" gutterBottom sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: "600" }}>
                        Transforming Emotional Wellness
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: "lg", mx: "auto" }}
                    >
                        We're on a mission to empower individuals and organizations through emotional intelligence and well-being.
                    </Typography>
                </Container>
            </Box>

            {/* Overview Section */}
            <Box sx={{
                px: {sm:"30px ",xs:"0",xl:"0"},
                py:2
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <StyledPaper elevation={3}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: colors.primary }}>
                                    Overview
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "16px",
                                        color: colors.lightText,
                                        lineHeight: "1.6",
                                        fontFamily: "Poppins",
                                        textAlign: "justify",
                                    }}
                                >
                                    EmotionallYours is an initiative by MTPL, a private limited company established in 2022 and
                                    recognised under the Start-Up India programme. We design structured, process-oriented programmes
                                    that enhance emotional intelligence and cultivate transformative mindsets. Our mission is to empower
                                    individuals and organisations to build resilience, navigate challenges with clarity, and nurture meaningful relationships.
                                </Typography>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: {md:"500px",xs:"300px",sm:"400px"}, width: "100%" }}>
                                <img
                                    src={img1}
                                    alt="Emotional Wellness Overview"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutHeader;
