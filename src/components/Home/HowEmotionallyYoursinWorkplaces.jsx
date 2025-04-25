import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    styled,
} from '@mui/material';
import img1 from '../../assets/images/Photos/works-places.jpg';
import CircleIcon from "@mui/icons-material/Circle";

// Styling for components
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

const sectionTitleStyles = {
    fontSize: { xs: '32px', md: '40px' },
    marginBottom: "16px",
    lineHeight: 1.2,
    display: "flex",
    justifyContent: "center",
    color: "#012765",
    fontWeight: 700,
    letterSpacing: "-1px",
};

const descriptionStyles = {
    mx: "auto",
    mb: { xs: 4, md: 8 },
    fontSize: { xs: "18px", md: "20px" },
    color: "#4B5563",
    lineHeight: "25px",
    textAlign: "center",
};

// Steps data (can be moved to a separate file if needed)
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

const HowEmotionallyYoursinWorkplaces = () => {
    return (
        <Container maxWidth="xl" sx={{ padding:"0" }}>
            <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
                <Typography sx={sectionTitleStyles}>
                    Creating ownership at workplaces
                </Typography>
                <Typography sx={descriptionStyles}>
                    Tailored for business teams and HR leaders, this initiative integrates evidence-based practices that enhance team dynamics, and drive sustainable growth within organizational culture.
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                        <Box sx={{ width: '100%', height: { xs: 250, sm: 350, md: 500 } }}>
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
                <Grid item xs={12} md={6}>
                    {steps.map((step) => (
                        <ProcessStep key={step.number}>
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
                                    {step.title}
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
                                    {step.description}
                                </Typography>
                            </Box>
                        </ProcessStep>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default React.memo(HowEmotionallyYoursinWorkplaces);
