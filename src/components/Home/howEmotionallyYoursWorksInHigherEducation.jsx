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
import img1 from '../../assets/images/Home/works/higher-education.jpg';

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
            title: 'Student Requests Support',
            description:
                'College students experiencing physical or mental health concerns can request care through their campus health center or online portal.',
        },
        {
            number: '2',
            title: 'Campus Staff Connects Student',
            description:
                'Health center staff or student services connect the student with an Emotionally Yours provider using our secure telehealth system.',
        },
        {
            number: '3',
            title: 'Private Virtual Consultation',
            description:
                'The student attends a confidential video session with a licensed physician or mental health professional who provides personalized care.',
        },
        {
            number: '4',
            title: 'Ongoing Support & Coordination',
            description:
                'We follow up with students, provide prescriptions if needed, and collaborate with university services for ongoing well-being and academic support.',
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                <Box className={"Montserrat"}
                     sx={{
                         fontSize: { xs: '28px', md: '36px' },
                         marginBottom: "16px",
                         lineHeight: 1.2,
                         display: "flex",
                         justifyContent: "center",
                         color: "#012765",
                         fontWeight: 700
                     }}
                >
                    How Emotionally Yours Works in Higher Education
                </Box>
                <Typography
                    sx={{
                        maxWidth: 700,
                        mx: "auto",
                        mb: { xs: 4, md: 8 },
                        fontSize: { xs: "16px", md: "18px" },
                        color: "#4B5563",
                        lineHeight: "25px",
                        textAlign: "center",
                    }}
                >
                    Our seamless process empowers universities to provide accessible, high-quality healthcare for college students.
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
                                alt="How Emotionally Yours Works"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    {steps.map((step) => (
                        <ProcessStep key={step.number}>
                            <StepNumber sx={{ mt: 0.5 }}>{step.number}</StepNumber>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '18px', md: '20px' },
                                        fontWeight: 600,
                                        color: "#012765",
                                        mb: 0.5
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '14px', md: '16px' },
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
            </Grid>
        </Container>
    );
};

export default HowEmotionallyYoursWorksInHigherEducation;
