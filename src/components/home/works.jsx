import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const steps = [
    {
        title: "Complete a Brief Assessment",
        description: "Answer a few questions about your needs, preferences, and goals for therapy. This helps us understand where you're looking for.",
        details: [
            "Tell us about your challenges",
            "Share your therapy preferences",
            "Set your availability and budget"
        ]
    },
    {
        title: "Get Matched with Therapists",
        description: "Our advanced algorithm matches you with licensed therapists who specialize in your specific needs and align with your preferences.",
        details: [
            "View therapist profiles and credentials",
            "Read reviews from other clients",
            "Consider multiple matches for best fit"
        ]
    },
    {
        title: "Schedule a Free Consultation",
        description: "Book a complimentary 15-minute video call with your potential therapist to ensure they’re the right fit for you.",
        details: [
            "Meet face-to-face via secure video",
            "Discuss your therapy goals",
            "Ask questions and assess compatibility"
        ]
    },
    {
        title: "Begin Your Therapy Journey",
        description: "Once you’ve found your match, choose a plan that works for you and start your therapy sessions through secure video, audio, or messaging.",
        details: [
            "Select a therapy plan that fits your needs",
            "Schedule sessions at your convenience",
            "Connect from anywhere on any device"
        ]
    }
];

function Works() {
    return (
        <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
            <Container maxWidth="xl">
                {/* Header Section */}
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#003366' }}>
                    How It Works
                </Typography>
                <Typography variant="body1" align="center" gutterBottom sx={{ color: '#666' }}>
                    Getting started with MindWell is simple. Follow these steps to begin your mental wellness journey.
                </Typography>

                {/* Steps Section with Zigzag Layout */}
                <Box sx={{ position: 'relative', mt: 6 }}>
                    {/* Vertical Timeline Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            bgcolor: '#f3e2d3',
                            transform: 'translateX(-50%)',
                            zIndex: 0
                        }}
                    />

                    {steps.map((step, index) => (
                        <Grid
                            container
                            spacing={0}
                            key={index}
                            alignItems="center"
                            sx={{
                                mt: index === 0 ? 0 : 8,
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                position: 'relative',
                                minHeight: '150px' // Ensures consistent spacing
                            }}
                        >
                            {/* Left/Right Card (Title and Description) */}
                            <Grid item xs={12} sm={5}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        p: 3,
                                        border: 'none',
                                        bgcolor: '#fff',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        textAlign: index % 2 === 0 ? 'right' : 'left',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333', }}>
                                            {step.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            {step.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Timeline Circle */}
                            <Grid item xs={12} sm={2} sx={{ textAlign: 'center', zIndex: 1 }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        bgcolor: '#FE6A00',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        fontSize: '18px'
                                    }}
                                >
                                    {index + 1}
                                </Box>
                            </Grid>

                            {/* Right/Left Card (Details) */}
                            <Grid item xs={12} sm={5}>
                                <Card
                                    sx={{
                                        bgcolor: '#003366',
                                        color: '#fff',
                                        p: 2,
                                        textAlign:'left',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <CardContent sx={{ p: 0,mb:0 }}>
                                        {step.details.map((detail, i) => (
                                            <Typography key={i} variant="body2" sx={{ mb: 1, fontSize: '14px' }}>
                                                • {detail}
                                            </Typography>
                                        ))}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    ))}
                </Box>

                {/* Button and Footer Text */}
                <Grid container justifyContent="center" sx={{ mt: 8 }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#f5a623',
                            color: '#fff',
                            fontWeight: 'bold',
                            px: 4,
                            py: 1.5,
                            borderRadius: '25px',
                            textTransform: 'none',
                            '&:hover': { bgcolor: '#e69500' }
                        }}
                    >
                        Start Your Journey Today
                    </Button>
                </Grid>
                <Typography variant="body2" align="center" sx={{ mt: 2, color: '#666' }}>
                    No commitment required. Free consultation available.
                </Typography>
            </Container>
        </Box>
    );
}

export default Works;