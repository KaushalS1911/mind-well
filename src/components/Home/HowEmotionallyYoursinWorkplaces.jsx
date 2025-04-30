import React from 'react';
import {Box, Container, Typography, Card, Grid, styled} from '@mui/material';
import img1 from '../../assets/images/Photos/works-places.jpg';
import CircleIcon from "@mui/icons-material/Circle";

// Styled Components for Process Steps and Step Numbers
const ProcessStep = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
}));

const StepNumber = styled(Box)(({theme}) => ({
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
const StepCard = ({title, description}) => (
    <ProcessStep>
        <StepNumber>
            <CircleIcon/>
        </StepNumber>
        <Box>
            <Typography
                sx={{
                    fontSize: {xs: '20px', md: '22px'},
                    fontWeight: 600,
                    color: "#012765",
                    mb: 0.5
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontSize: {xs: '16px', md: '18px'},
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
            title: 'Leadership Taskforce',
            description:
                'Enlighten Business and HR leadership towards the role of Mental Health and reinforcement of emotional wellness.',
        },
        {
            number: '2',
            title: 'Proactive Resilience Building',
            description:
                'Curated target-based Employee workshops and individual and family wellness counselling.',
        },
        {
            number: '3',
            title: 'Holistic Employee Engagement',
            description:
                'Foster peer-support communities that encourage open dialogue and collective growth.',
        },
        {
            number: '4',
            title: 'Ownership Building',
            description:
                'Recognise and celebrate emotional intelligence, fostering a culture where well-being and performance go hand in hand.',
        },
    ];

    return (
        <Box sx={{
            px: {sm:"30px ",xs:"0",xl:"0"}
        }}>
            <Container maxWidth="xl">
                <Box textAlign="center" mb={{xs: 4, md: 8}}>
                    <Typography
                        className="Montserrat"
                        sx={{
                            fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
                            marginBottom: '16px',
                            lineHeight: 1.2,
                            color: '#012765',
                            fontWeight: 700,
                            letterSpacing: "-1px",
                        }}
                    >
                        Creating ownership at workplaces
                    </Typography>
                    <Typography
                        sx={{
                            mx: "auto",
                            mb: {xs: 4, md: 8},
                            fontSize: {xs: "18px", md: "20px"},
                            color: "#4B5563",
                            lineHeight: "25px",
                            textAlign: "center",
                        }}
                    >
                        Tailored for business teams and HR leaders, this initiative integrates evidence-based practices
                        that enhance team dynamics, and drive sustainable growth within organizational culture.
                    </Typography>
                </Box>

                <Grid container spacing={{xs: 4, md: 6}} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: 3,
                            }}
                        >
                            <Box sx={{width: '100%', height: {xs: 250, sm: 350, md: 500}}}>
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt="How EmotionallyYours Works"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {steps.map((step) => (
                            <StepCard key={step.number} {...step} />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HowEmotionallyYoursWorksInHigherEducation;
