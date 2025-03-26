import React from "react";
import {Box, Grid, Paper, Typography, Button, Container, Stack} from "@mui/material";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const struggles = [
    {
        icon: <MoodBadIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Anxiety",
        description: "Constant worry, fear, racing thoughts, restlessness, and physical symptoms like rapid heartbeat can be signs of anxiety.",
        approach: [
            "Evidence-based anxiety reduction techniques",
            "Cognitive strategies to manage worry",
            "Mindfulness and relaxation training",
        ],
    },
    {
        icon: <SentimentDissatisfiedIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Depression",
        description: "Persistent sadness, loss of interest, low energy, changes in sleep or appetite, and feelings of worthlessness are common signs of depression.",
        approach: [
            "Evidence-based depression treatments",
            "Behavioral activation to increase joy",
            "Cognitive techniques to challenge negative thoughts",
        ],
    },
    {
        icon: <SentimentVeryDissatisfiedIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Stress",
        description: "Feeling overwhelmed, irritable, having difficulty concentrating, and experiencing physical tension are common symptoms of excessive stress.",
        approach: [
            "Stress management techniques",
            "Work-life balance strategies",
            "Progressive muscle relaxation and mindfulness",
        ],
    },
    {
        icon: <FavoriteBorderIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Relationship Issues",
        description: "Frequent conflicts, communication problems, trust issues, feeling disconnected, or navigating life transitions with a partner.",
        approach: [
            "Communication skills enhancement",
            "Conflict resolution techniques",
            "Rebuilding trust and intimacy",
        ],
    },
    {
        icon: <ShieldOutlinedIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Trauma & PTSD",
        description: "Flashbacks, nightmares, heightened anxiety, emotional numbness, and avoidance behaviors following a traumatic experience.",
        approach: [
            "Trauma-focused therapy (EMDR, CPT)",
            "Safety and stabilization techniques",
            "Processing traumatic memories safely",
        ],
    },
    {
        icon: <PersonOutlineIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Self-esteem",
        description: "Persistent self-criticism, feeling not good enough, fear of judgment, difficulty accepting compliments, and comparing yourself to others.",
        approach: [
            "Self-compassion development",
            "Challenging negative self-perception",
            "Building confidence and self-worth",
        ],
    },
];

function Therapists() {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{padding: "96px 0"}}>
                <Typography className={"Montserrat"} variant="h4" align="center" color="#012765"
                            sx={{fontWeight: "bold", mb: 2}}>
                    What Are You Struggling With?
                </Typography>
                <Box sx={{
                    color: "#4B5563",
                    mt: 1,
                    mb: 7,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 18
                }}>
                    Everyone faces challenges in life. Identify your concerns and discover how <br/> our therapists can
                    help you navigate through them.
                </Box>
                <Grid container spacing={3}>
                    {struggles.map((struggle, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper elevation={3} sx={{
                                position: "relative",
                                p: 3,
                                borderRadius: "12px",
                                backgroundColor: "#fff",
                                overflow: "hidden",
                                height: "100%", // Fixed height for all cards
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "9px", // Reduced from 13px to 8px
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                    background: "linear-gradient(to right, #012765, #FF7F1E)",
                                },
                            }}>

                                <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 50,
                                        my: 1,
                                        height: 50,
                                        borderRadius: "50%",
                                        backgroundColor: "#E6EAF3",
                                    }}>
                                        {struggle.icon}
                                    </Box>
                                    <Box sx={{
                                        fontWeight: 700,
                                        fontSize: "20px",
                                        color: "#012765",
                                        lineHeight: "1.75rem",
                                    }}>
                                        {struggle.title}
                                    </Box>
                                </Box>
                                <Box sx={{
                                    mb: 2,
                                    fontSize: 15,
                                    lineHeight: 1.5,
                                    color: "#4B5563"
                                }}>
                                    {struggle.description}
                                </Box>
                                <Box sx={{fontWeight: "600", color: "#012765", mb: 1, fontSize: 16}}>
                                    Our approach:
                                </Box>
                                <Box sx={{alignItems: "center"}}>
                                    <Stack spacing={1}>
                                        {struggle.approach.map((point, idx) => (
                                            <Stack key={idx} direction="row" alignItems="center"
                                                   sx={{color: "#4B5563", fontSize: "16px"}}>
                                                <CheckCircleIcon sx={{color: "#FE6A00", mr: 1}}/>
                                                <Box sx={{
                                                    fontSize: "16px",
                                                    color: "#4b5563",
                                                }}>
                                                    {point}
                                                </Box>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>
                                <Box sx={{mt: 2}}>
                                    <Box sx={{
                                        textTransform: "none",
                                        cursor: "pointer",
                                        color: "#fe6a00",
                                        fontWeight: "500",
                                        fontSize: "16px"
                                    }}>
                                        Learn how we can help →
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Box textAlign="center" mt={4}>
                    <Box
                        variant="contained"
                        sx={{
                            backgroundColor: "#012765",
                            display: "inline-block",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            borderRadius: "0.375rem",
                            padding: "12px 32px",
                            fontSize: "16px",
                            mt: 4,
                            transition: "0.3s",
                            "&:hover": {backgroundColor: "#1A3C74"},
                        }}
                    >
                        See All Conditions We Treat
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Therapists;
