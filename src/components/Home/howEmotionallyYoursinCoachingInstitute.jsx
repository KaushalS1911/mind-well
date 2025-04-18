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
import img1 from '../../assets/images/Home/works/COACHING-INSTITUTE.png';

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

    const steps = [
        {
            number: '1',
            title: 'Student Seeks Help',
            description:
                'A student preparing for competitive exams feels stressed, anxious, or unwell and reaches out to coaching staff for help.',
        },
        {
            number: '2',
            title: 'Staff Initiates Support',
            description:
                'The institute’s counselor or staff member connects the student with EmotionallYours through our secure telehealth system.',
        },
        {
            number: '3',
            title: 'Online Session Begins',
            description:
                'The student attends a private online consultation with a licensed therapist or doctor for immediate care and emotional support.',
        },
        {
            number: '4',
            title: 'Ongoing Care & Follow-up',
            description:
                'We monitor the student’s progress, offer follow-up sessions, and provide guidance to help them stay mentally and physically well during preparation.',
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
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
                    Our process helps coaching institutes support students’ mental and physical well-being while they prepare for high-pressure exams.
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

export default HowEmotionallyYoursinCoachingInstitute;
