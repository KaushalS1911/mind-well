import React from 'react';
import { Box, Container, Typography, Card, Grid, styled } from '@mui/material';
import img1 from '../../assets/images/Photos/higher-education.jpg';
import CircleIcon from "@mui/icons-material/Circle";

// Styled Components for Process Steps and Step Numbers
const ProcessStep = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
}));

const StepNumber = styled(Box)(({ theme }) => ({
    background: '#E8F1FF',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    fontWeight: 600,
    flexShrink: 0,
}));

// Reusable StepCard Component
const StepCard = ({ title, description }) => (
    <ProcessStep>
        <StepNumber>
            <CircleIcon />
        </StepNumber>
        <Box>
            <Typography
                sx={{
                    fontSize: { xs: '20px', md: '22px' },
                    fontWeight: 600,
                    color: "#012765",
                    mb: 0.5
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 400,
                    color: "#012765",
                    mb: 1,
                    textAlign: "justify",
                }}
            >
                {description}
            </Typography>
        </Box>
    </ProcessStep>
);

const HowEmotionallyYoursWorksInHigherEducation = () => {

    const steps = [
        {
            number: '1',
            title: 'Setting Groundwork',
            description:
                'Identify stream specific Psychology-based Emotional Wellness and Mental Health program as per NEP Guidelines.',
        },
        {
            number: '2',
            title: 'Targeted Training',
            description:
                'Building emotional strength, enhancing academic focus, and cultivating intrinsic motivation through Psychologist and Corporate interaction.',
        },
        {
            number: '3',
            title: 'Personalised and Curated Counselling',
            description:
                'Self-Care with reinforced skill development through individual counselling of students.',
        },
        {
            number: '4',
            title: 'Self-Help Groups',
            description:
                'Creating first responders’ structure in the form of Self-Help groups within the institute.',
        },
    ];

    return (
        <Container maxWidth="xl">
            <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
                <Typography
                    className="Montserrat"
                    sx={{
                        fontSize: { xs: '32px', md: '40px' },
                        marginBottom: '16px',
                        lineHeight: 1.2,
                        color: '#012765',
                        fontWeight: 700,
                        letterSpacing: "-1px",
                    }}
                >
                    Making graduates future ready
                </Typography>
                <Typography
                    sx={{
                        mx: "auto",
                        mb: { xs: 4, md: 8 },
                        fontSize: { xs: "18px", md: "20px" },
                        color: "#4B5563",
                        lineHeight: "25px",
                        textAlign: "center",
                    }}
                >
                    Emotional wellness program aligned with NEP to cultivate academic excellence, emotional resilience, and future readiness
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            borderRadius: 4,
                            overflow: 'hidden',
                            boxShadow: 3,
                        }}
                    >
                        <Box sx={{ width: '100%', height: { xs: 250, sm: 350, md: 500 } }}>
                            <img
                                src={img1}
                                loading="lazy"
                                alt="How Emotionally Yours Works"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    {steps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowEmotionallyYoursWorksInHigherEducation;
