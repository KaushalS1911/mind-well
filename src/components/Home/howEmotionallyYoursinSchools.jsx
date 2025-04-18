import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    styled,
    useTheme
} from '@mui/material';
import img1 from '../../assets/images/Home/works/emotionallyYours-School.jpeg';

const ProcessStep = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
    // Removed mobile override — keeps layout same on xs and sm
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

const HowEmotionallyYoursinSchools = () => {
    const theme = useTheme();

    const steps = [
        {
            number: '1',
            title: 'Student Needs Healthcare',
            description:
                "When a student doesn't feel well or needs mental health support, they can visit the school nurse or counselor.",
        },
        {
            number: '2',
            title: 'Connect with EmotionallYours',
            description:
                'School staff connect the student with a EmotionallYours provider through our secure telehealth platform.',
        },
        {
            number: '3',
            title: 'Virtual Visit',
            description:
                'The student has a video visit with a pediatrician or therapist who can diagnose, treat, and provide follow-up care.',
        },
        {
            number: '4',
            title: 'Coordinated Care',
            description:
                "We communicate with families, prescribe medications if needed, and coordinate with the student's primary care provider.",
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                <Box className={"Montserrat"}
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
                    How EmotionallYours Works in Schools
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
                    Our simple process makes it easy for schools to provide high-quality healthcare to all students.
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
                                alt="How EmotionallYours Works"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowEmotionallyYoursinSchools;
