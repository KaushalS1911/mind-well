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
import img1 from '../../assets/images/Photos/school.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleIcon from "@mui/icons-material/Circle";

const ProcessStep = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
    // Removed mobile override — keeps layout same on xs and sm
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
            description:
                "7 factor self-assessment of students towards need analysis at individual and School level.",
        },
        {
            number: '2',
            title: 'Capacity Building',
            description:
                'Engaging in annual curriculum via Student’s Group Sessions, Parent’s Workshops, Teacher’s Training, Self-Help through Mobile App and activities.',
        },
        {
            number: '3',
            title: 'Personalised and Curated Counselling',
            description:
                'Self-Care with reinforced skill development through individual counselling of students, parents and teachers.',
        },
        {
            number: '4',
            title: 'Annual Performance Assessment',
            description:
                "Ensuring the annual program is delivering towards the goals set during program implementation stage.",
        },
    ];

    return (
        <Container maxWidth="xl" sx={{py: {xs: 8, md: 12}}}>
            <Box textAlign="center" mb={{xs: 4, md: 6}}>
                <Box className={"Montserrat"}
                     // data-aos="zoom-in"
                     sx={{
                         fontSize: {xs: '32px', md: '40px'},
                         marginBottom: "16px",
                         lineHeight: 1.2,
                         display: "flex",
                         justifyContent: "center",
                         color: "#012765",
                         fontWeight: 700,
                         letterSpacing: "-1px",
                     }}
                >
                    How EmotionallYours Works in Schools
                </Box>
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
                <Grid item xs={12} md={6}>
                    {steps.map((step) => (
                        <ProcessStep key={step.number}>
                            <StepNumber><CircleIcon/></StepNumber>
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
                            height: {xs: 250, sm: 350, md: 500}
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

export default HowEmotionallyYoursinSchools;
