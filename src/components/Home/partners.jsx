import React from "react";
import {Box, Card, CardContent, Typography, Avatar, Grid, Button, Container} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Consultation from "../global/consultation.jsx";
import {Description} from "@mui/icons-material";

const testimonials = [
    {
        initials: "JT",
        name: "Jessica Thompson",
        role: "HR Director, TechInnovate",
        feedback:
            "Implementing Emotionall Yours employee mental health program has been transformative for our company culture. Our team feels supported, productivity has increased, and we've seen a significant reduction in absenteeism.",
    },
    {
        initials: "MR",
        name: "Michael Rodriguez",
        role: "CEO, GreenEarth Solutions",
        feedback:
            "As a company that prioritizes employee wellbeing, partnering with Emotionall Yours was an obvious choice. The ROI has been clear – lower turnover, higher engagement, and a team that feels genuinely cared for.",
    },
    {
        initials: "SP",
        name: "Sarah Patel",
        role: "People Operations, Fintech Forward",
        feedback:
            "The manager training has been invaluable. Our leadership team now feels equipped to support their reports' mental health needs, creating a more empathetic and resilient organization overall.",
    },
];

function Partners() {
    return (
        <Box sx={{p: "30px 0 96px 0", backgroundColor: "#F9FAFB"}}>
            <Container maxWidth={"xl"}>
                <Box className={"Montserrat"} sx={{
                    fontSize: "24px",
                    color: "#012765",
                    margin: "0 0 32px",
                    fontWeight: "700",
                    lineHeight: "2rem",
                    textAlign: "center",
                }}>
                    What Our Corporate Partners Say
                </Box>
                <Grid container spacing={3} justifyContent="center">
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{
                                p: "1.5rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#fff",
                                boxShadow: 2,
                                height: "100%"
                            }}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                    sx={{mb: 2, flexWrap: "wrap"}}
                                >
                                    <Avatar
                                        sx={{
                                            fontWeight: 700,
                                            backgroundColor: "rgb(1 39 101 / var(--tw-bg-opacity, 1))",
                                            borderRadius: "50%",
                                            padding: "25px 25px",
                                            fontSize: {xs: 16, sm: 18, md: 20}
                                        }}
                                    >
                                        {testimonial.initials}
                                    </Avatar>
                                    <Box>
                                        <Box
                                            sx={{
                                                fontSize: "16px",
                                                color: "#012765",
                                                fontWeight: 700
                                            }}
                                        >
                                            {testimonial.name}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: "14px",
                                                color: "#4b5563"
                                            }}
                                        >
                                            {testimonial.role}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{
                                        fontSize: "16px",
                                        margin: "0 0 16px",
                                        color: "#374151",
                                        lineHeight: "1.4rem",
                                    }}>
                                        {testimonial.feedback}
                                    </Box>
                                </Box>
                                <Box sx={{display: "flex", gap: "4px"}}>
                                    {[...Array(5)].map((_, index) => (
                                        <StarIcon key={index} sx={{color: "#f65a06"}}/>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Consultation
                    title={"Ready to support your team's mental health?"}
                    Description={"Schedule a free consultation with our workplace wellness specialists to create a customized program for your organization."}
                    Btn={"Schedule Consultation"}
                />
            </Container>
        </Box>
    );
}

export default Partners;