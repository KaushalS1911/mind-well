import React, {useEffect} from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    styled,
    useTheme
} from '@mui/material';
// import img1 from '../../assets/images/Home/works/higher-education.jpeg';
import img1 from '../../assets/images/Photos/higher-education.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleIcon from "@mui/icons-material/Circle";

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

const HowEmotionallyYoursWorksInHigherEducation = () => {
    const theme = useTheme();



    const steps = [
        {
            number: '1',
            title: 'Setting Groundwork',
            description:
                'Identify stream specific Psycholgy based Emotional Wellness and Mental Health program as per NEP Guidelines.',
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
                'Creating first responders’ structure in form of Self-Help groups withing the institute.',
        },
    ];

    return (
        <Container maxWidth="xl" >
            <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
                <Box
                    className="Montserrat"
                    // data-aos="zoom-in"
                    sx={{
                        fontSize: { xs: '32px', md: '40px' },
                        marginBottom: '16px',
                        lineHeight: 1.2,
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#012765',
                        letterSpacing: "-1px",
                        fontWeight: 700,
                    }}
                >
                    How EmotionallYours Works in Higher Education
                </Box>
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
                        <Box sx={{
                            width: '100%',
                            height: { xs: 250, sm: 350, md: 500 }
                        }}>
                            <img
                                src={img1}
                                loading={'lazy'}
                                alt="How EmotionallYours Works"
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
                            <StepNumber><CircleIcon/></StepNumber>
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
                                        textAlign:"justify"
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

export default HowEmotionallyYoursWorksInHigherEducation;
