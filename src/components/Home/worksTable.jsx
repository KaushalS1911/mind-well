import React from 'react';
import {Box, Container, Grid, Typography, Button} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
    {
        title: " Establish a Leadership Taskforce",
        // description: "Answer a few questions about your needs, preferences, and goals for therapy. This helps us understand where you're looking for.",
        details: [
            "Amplify awareness of emotional intelligence as a leadership cornerstone.",
            "Pinpoint challenges and uncover pathways for growth.",
            "Develop a precision-driven strategy for lasting impact."
        ]
    },
    {
        title: "Initial Evaluations – Laying the Groundwork",
        // description: "Our advanced algorithm matches you with licensed therapists who specialize in your specific needs and align with your preferences.",
        details: [
            "Facilitate introspective self-assessments to foster personal growth.",
            "Conduct comprehensive wellness evaluations for participants.",
            "Deliver data-driven insights to empower organisational strategies."
        ]
    },
    {
        title: "Awareness Creation for Meaningful Impact",
        // description: "Book a complimentary 15-minute video call with your potential therapist to ensure they’re the right fit for you.",
        details: [
            "Develop demographic-specific curricula tailored by gender, age, and region.",
            "Foster engagement through interactive workshops and training.",
            "Empower self-help groups as first responders and feedback hubs."
        ]
    },
    {
        title: "Insight-Driven Personalised Enrichment",
        // description: "Once you’ve found your match, choose a plan that works for you and start your therapy sessions through secure video, audio, or messaging.",
        details: [
            "Curate meticulously designed sessions for profound growth.",
            "Provide customised guidance to cultivate essential life skills.",
            "Detect underlying risks and elevate organisational consciousness."
        ]
    },
    {
        title: "Strengthening Impact Through Measurable Metrices",
        // description: "Once you’ve found your match, choose a plan that works for you and start your therapy sessions through secure video, audio, or messaging.",
        details: [
            "Assess intervention effectiveness with follow-up evaluations.",
            "Facilitate collaborative feedback sessions for shared learning.",
            "Develop a strategic roadmap with leadership for sustained success."
        ]
    }
];

function WorksTable() {
    return (
        <Box sx={{padding: "96px 0", bgcolor: "#f9f9f9"}}>
            <Container maxWidth="xl">
                <Typography className={"Montserrat"} variant="h4" align="center" fontWeight={700} color="#012765"
                            gutterBottom>
                    How It Works
                </Typography>
                <Box
                    variant="body1"
                    align="center"
                    sx={{mx: {xs: 2, sm: 10, md: 20}, color: "#4B5563", lineHeight: 1.75}}
                >
                    With Emotionally Yours, you can initiate a path to enhance your Organisational growth and Individual’s success.
                </Box>

                <Box sx={{position: "relative", mt: 6}}>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: {md: '4px', xs: "0"},
                            bgcolor: '#f3e2d3',
                            transform: 'translateX(-50%)',
                            zIndex: 0
                        }}
                    />
                    {steps.map((step, index) => (
                        <Grid
                            container
                            spacing={0}
                            key={index}
                            alignItems="center"
                            sx={{
                                flexDirection: {xs: 'column', sm: index % 2 === 0 ? 'row' : 'row-reverse'},
                                mt: index === 0 ? 0 : {xs: 4, sm: 8},
                                position: 'relative',
                                minHeight: '150px',
                                marginBottom: "6rem"
                            }}
                        >
                            <Grid item xs={12} md={6}
                                  textAlign={{xs: 'center', sm: index % 2 === 0 ? 'right' : 'left'}}>
                                <Box sx={{
                                    p: {lg: 5, md: 3, xs: 2},
                                    bgcolor: '#fff',
                                    boxShadow: 1,
                                    borderRadius: 2,
                                    mr: {md: 5, xs: 0},
                                }}>
                                    <Box sx={{p: 0, zIndex: 1}}>
                                        <Box sx={{
                                            fontWeight: '700',
                                            fontSize: {lg: "22px", xs: "20px"},
                                            color: '#012765',
                                            lineHeight: '2rem',
                                        }}>
                                            {step.title}
                                        </Box>
                                        {/*<Box sx={{color: '#4B5563', fontSize: "16px"}}>*/}
                                        {/*    {step.description}*/}
                                        {/*</Box>*/}
                                    </Box>
                                </Box>
                            </Grid>

                            <Box
                                sx={{
                                    position: "absolute",
                                    top: {xs: "60%", sm: "60%", md: "50%", lg: "50%"},
                                    right: {xs: "17%", sm: "5%", md: "47.3%", lg: "48.3%"},
                                    display: {sm: 'inline-flex', xs: "none"},
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: {xs: 35, sm: 45, md: 50},
                                    height: {xs: 35, sm: 45, md: 50},
                                    borderRadius: '50%',
                                    bgcolor: '#FE6A00',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: {xs: '14px', sm: '16px', md: '18px'},
                                    zIndex: "1"
                                }}
                            >
                                {index + 1}
                            </Box>


                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    bgcolor: "#003366",
                                    color: "#fff",
                                    p: 3,
                                    borderRadius: 2,
                                    ml: {md: 5, xs: 0},
                                    mt: 7,
                                    position: "relative",
                                }}>
                                    {step.details.map((detail, i) => (
                                        <Box key={i} display="flex" alignItems="center" mb={1}>
                                            <CheckCircleIcon sx={{color: "#FE6A00", mr: 1}}/>
                                            <Box>{detail}</Box>
                                        </Box>
                                    ))}
                                    <Box sx={{
                                        position: "absolute",
                                        top: {xs: "7%",},
                                        right: {xs: "2%",},
                                        display: {xs: 'inline-flex', sm: "none"},
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: {xs: 35, sm: 45, md: 50},
                                        height: {xs: 35, sm: 45, md: 50},
                                        borderRadius: '50%',
                                        bgcolor: '#FE6A00',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        fontSize: {xs: '14px', sm: '16px', md: '18px'}
                                    }}>{index + 1}</Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ))}
                </Box>

                <Grid container justifyContent="center" sx={{mt: 6}}>
                    <Box
                        sx={{
                            bgcolor: '#FE6A00',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: "16px",
                            padding: "12px 32px",
                            borderRadius: "0.375rem",
                            display: 'inline-block',
                            cursor: "pointer",
                            textTransform: 'none',
                            transition: '0.3s',
                            '&:hover': {bgcolor: '#dd6006'}
                        }}
                    >
                        Start Your Journey Today
                    </Box>
                </Grid>
                <Box sx={{textAlign: "center", fontSize: "16px", mt: 2, color: '#4B5563'}}>
                    No commitment required. Free consultation available.
                </Box>
            </Container>
        </Box>
    );
}

export default WorksTable;
