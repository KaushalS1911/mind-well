import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    styled,
} from '@mui/material';
import img1 from '../../assets/images/Photos/Coaching.jpg';
import 'aos/dist/aos.css';
import CircleIcon from "@mui/icons-material/Circle";

// Styling for components
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

const sectionTitleStyles = {
    fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
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
    mb: {xs: 4, md: 8},
    fontSize: {xs: "18px", md: "20px"},
    color: "#4B5563",
    lineHeight: "25px",
    textAlign: "center",
};

// Steps data (could also be extracted to a separate file)
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

const HowEmotionallyYoursinCoachingInstitute = () => {
    return (
        <Box sx={{
            px: {sm: "30px ", xs: "0", xl: "0"}
        }}>
            <Container maxWidth="xl" sx={{py: {xs: 6, md: 10}}}>
                <Box textAlign="center" mb={{xs: 4, md: 6}}>
                    <Typography className={"Montserrat"} sx={sectionTitleStyles}>
                        Emotionally resilient aspirants
                    </Typography>
                    <Typography sx={descriptionStyles}>
                        A focused and intensive program designed specifically for aspirants preparing for high-stakes
                        entrance exams (like NEET, JEE, UPSC, CLAT) and their mentors.
                    </Typography>
                </Box>

                <Grid container spacing={{xs: 4, md: 6}} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        {steps.map((step) => (
                            <ProcessStep key={step.number}>
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
                                        {step.title}
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
                                        {step.description}
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        ))}
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card sx={{borderRadius: 4, overflow: 'hidden', boxShadow: 3}}>
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
                </Grid>
            </Container>
        </Box>
    );
};

export default React.memo(HowEmotionallyYoursinCoachingInstitute);
