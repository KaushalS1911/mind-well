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
import img1 from '../../assets/images/Home/works/workplaces.png';

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

const HowEmotionallyYoursinWorkplaces = () => {
    const theme = useTheme();

    const steps = [
        {
            number: '1',
            title: 'Employee Requests Support',
            description:
                'Employees facing stress, anxiety, or health concerns can request support via the company portal or directly through HR.',
        },
        {
            number: '2',
            title: 'HR or Manager Connects Employee',
            description:
                'HR personnel or designated mental health champions link the employee with EmotionallYours through a secure virtual platform.',
        },
        {
            number: '3',
            title: 'Confidential Online Consultation',
            description:
                'Employees meet privately with licensed professionals for mental wellness or medical support, tailored to workplace needs.',
        },
        {
            number: '4',
            title: 'Follow-Up and Wellness Plans',
            description:
                'We provide continuous care, periodic check-ins, and collaborate with HR to ensure a supportive, productive work environment.',
        },
    ];

    return (
        <Container maxWidth="xl" >
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
                    How EmotionallYours Works in Workplaces
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
                    Our program empowers organizations to support employee well-being through accessible, personalized mental and physical healthcare.
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
            </Grid>
        </Container>
    );
};

export default HowEmotionallyYoursinWorkplaces;
