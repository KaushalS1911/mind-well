import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img1 from '../../assets/images/about/aboutHeader/overview1.jpg';

function Overview() {
    return (
        <Box
            sx={{
                py: { xs: 4, md: 5,lg:3,xl:0 },
                px: { xs: 2, md: 4 },
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={8} alignItems="center">
                    {/* Text Content */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                className={"Montserrat"}
                                variant="h3"
                                fontWeight="700"
                                lineHeight={1.2}
                                sx={{
                                    letterSpacing: "-1px",
                                    fontSize: { lg: "44px", md: "36px", sm: "32px", xs: "26px" },
                                    color: "#062957",
                                    mb: 3,
                                    fontFamily: 'Montserrat',
                                }}
                            >
                                Transforming Mindsets,
                                <br />
                                Building Resilience
                            </Typography>

                            <Box
                                sx={{
                                    position: "relative",
                                    pl: 3,
                                    mb: 4,
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: "4px",
                                        backgroundColor: "#002F6C",
                                        borderRadius: "4px",
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { md: "18px", xs: "16px" },
                                        color: "text.secondary",
                                        lineHeight: 1.7,
                                        fontFamily: "Poppins",
                                        textAlign:"justify",
                                    }}
                                >
                                    EmotionallyYours is an initiative by MTPL, a private limited
                                    company established in 2022 and recognised under the Start-Up
                                    India programme. We design structured, process-orientated
                                    programmes that enhance emotional intelligence and cultivate
                                    transformative mindsets.
                                </Typography>
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { md: "18px", xs: "16px" },
                                    color: "text.secondary",
                                    lineHeight: 1.7,
                                    fontFamily: "Poppins",
                                    textAlign:"justify",
                                }}
                            >
                                Our mission is to empower individuals and organisations to build
                                resilience, navigate challenges with clarity, and nurture meaningful
                                relationships.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                        >
                            <Box
                                component="img"
                                src={img1}
                                alt="Emotional Wellness Overview"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Overview;
