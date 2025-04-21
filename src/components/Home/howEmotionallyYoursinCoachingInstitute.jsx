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
// import img1 from '../../assets/images/Home/works/COACHING-INSTITUTE.png';
import img1 from '../../assets/images/Photos/Coaching.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const HowEmotionallyYoursinCoachingInstitute = () => {
    const theme = useTheme();


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,     // Animate every time it enters
            mirror: true,    // Animate on scrolling up too
        });
    }, []);

    const steps = [
        {
            number: '1',
            title: 'Strengthen Mentorship',
            description:
                'Conduct emotional wellness sessions to boost mentor self-awareness in high-pressure academic settings.',
        },
        {
            number: '2',
            title: 'Aspirant Empowerment',
            description:
                'Monthly therapist-guided group workshops offer tools for emotional regulation, resilience-building, and sustainable self-care practices.',
        },
        {
            number: '3',
            title: 'Promote Diagnostics',
            description:
                'Self-realisation and preparing towards individual counselling session backed by Psychometric Tests and Self Assessments.',
        },
        {
            number: '4',
            title: 'Self-Help Groups',
            description:
                'Creating first responders’ structure in form of Self-Help groups withing the institute.',
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                <Box className={"Montserrat"}
                     data-aos="zoom-in"
                     sx={{
                         fontSize: { xs: '32px', md: '40px' },
                         marginBottom: "16px",
                         lineHeight: 1.2,
                         display: "flex",
                         justifyContent: "center",
                         color: "#012765",
                         fontWeight: 700
                     }}
                >
                    How EmotionallYours Works in Coaching Institutes
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
                    A focused and intensive program designed specifically for aspirants preparing for high-stakes entrance exams (like NEET, JEE, UPSC, CLAT) and their mentors.
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6}>
                    {steps.map((step) => (
                        <ProcessStep key={step.number}>
                            <StepNumber sx={{ mt: 0.5 }}>{step.number}</StepNumber>
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
                                        mb: 1
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Box>
                        </ProcessStep>
                    ))}
                </Grid>
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
            </Grid>
        </Container>
    );
};

export default HowEmotionallyYoursinCoachingInstitute;
