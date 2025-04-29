import React, {useEffect} from 'react';
import {Box, Container, Typography, Card, Grid, styled, useTheme} from '@mui/material';
import img1 from '../../assets/images/Photos/School.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleIcon from '@mui/icons-material/Circle';

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
const StepCard = ({number, title, description}) => (
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

const HowEmotionallyYoursinSchools = () => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
        });

        setTimeout(() => {
            AOS.refresh();
        }, 500);
    }, []);

    const steps = [
        {
            number: '1',
            title: 'Initial Wellness Assessment',
            description: "7 factor self-assessment of students towards need analysis at individual and School level.",
        },
        {
            number: '2',
            title: 'Capacity Building',
            description: 'Engaging in annual curriculum via Student’s Group Sessions, Parent’s Workshops, Teacher’s Training, Self-Help through Mobile App and activities.',
        },
        {
            number: '3',
            title: 'Personalised and Curated Counselling',
            description: 'Self-Care with reinforced skill development through individual counselling of students, parents and teachers.',
        },
        {
            number: '4',
            title: 'Annual Performance Assessment',
            description: "Ensuring the annual program is delivering towards the goals set during program implementation stage.",
        },
    ];

    return (
        <Box sx={{px: {sm: "30px ", xs: "0", xl: "0"},}}>
            <Container maxWidth="xl" sx={{py: {xs: 8, md: 12}, }}>
                <Box textAlign="center" mb={{xs: 4, md: 6}}>
                    <Typography
                        className="Montserrat"
                        sx={{
                            fontSize: {xs: '28px', sm: '34px', md: '42px', lg: '46px'},
                            mb: 2,
                            lineHeight: 1.2,
                            color: "#012765",
                            fontWeight: 700,
                            letterSpacing: "-1px",
                        }}
                    >
                        Shaping up K-12 segment
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
                        Our annual Emotional Wellness Program, tailored for K12 learners
                    </Typography>
                </Box>

                <Grid container spacing={{xs: 4, md: 6}} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        {steps.map((step) => (
                            <StepCard key={step.number} {...step} />
                        ))}
                    </Grid>

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
                </Grid>
            </Container>
        </Box>
    );
};

export default HowEmotionallyYoursinSchools;
