import React from "react";
import {Box, Container, Grid, Paper, Typography, Button, Chip} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FaceIcon from "@mui/icons-material/Face";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Therapy Data (Dynamic)
const therapies = [
    {
        title: "Cognitive Behavioral Therapy (CBT)",
        description: "CBT helps you identify and change negative thought patterns that influence your emotions and behaviors. Effective for anxiety, depression, and stress management.",
        bestFor: ["Anxiety", "Depression", "PTSD", "Phobias"],
        icon: <PsychologyIcon/>,
        link: "#"
    },
    {
        title: "Dialectical Behavior Therapy (DBT)",
        description: "DBT combines cognitive techniques with mindfulness, focusing on emotional regulation, distress tolerance, and interpersonal effectiveness.",
        bestFor: ["Borderline Personality", "Self-harm", "Emotional Regulation"],
        icon: <ThumbUpIcon/>,
        link: "#"
    },
    {
        title: "Mindfulness-Based Therapy",
        description: "Learn to focus on the present moment without judgment. Combines meditation, breathing exercises, and awareness techniques to reduce stress.",
        bestFor: ["Stress", "Anxiety", "Depression", "Chronic Pain"],
        icon: <SelfImprovementIcon/>,
        link: "#"
    },
    {
        title: "Psychodynamic Therapy",
        description: "Explores how your past experiences, particularly from childhood, influence your current behavior, relationships, and mental health challenges.",
        bestFor: ["Depression", "Relationship Issues", "Self-awareness"],
        icon: <FaceIcon/>,
        link: "#"
    },
    {
        title: "Acceptance & Commitment Therapy (ACT)",
        description: "ACT teaches you to accept difficult thoughts and feelings rather than fighting them, while committing to actions that improve your life.",
        bestFor: ["Anxiety", "Depression", "OCD", "Chronic Pain"],
        icon: <CheckCircleOutlineIcon/>,
        link: "#"
    },
    {
        title: "EMDR Therapy",
        description: "Eye Movement Desensitization and Reprocessing helps you process and recover from traumatic experiences through guided eye movements.",
        bestFor: ["PTSD", "Trauma", "Anxiety", "Phobias"],
        icon: <VisibilityIcon/>,
        link: "#"
    }
];

const LookingFor = () => {
    return (
        <Box sx={{py: 8, backgroundColor: "#F9FAFB"}}>
            <Container maxWidth="xl">
                <Typography className={"Montserrat"} variant="h4" align="center" color="#012765" sx={{fontWeight: "bold", mb: 2}}>
                    What Type of Therapy Are You Looking For?
                </Typography>
                <Box className={"Montserrat"} sx={{
                    color: "#4B5563",
                    mt: 1,
                    mb: 7,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 18
                }}>
                    We offer various evidence-based therapeutic approaches tailored to your <br/> specific needs and
                    preferences.
                </Box>

                {/* Therapy Cards Grid */}
                <Grid container spacing={3}>
                    {therapies.map((therapy, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    backgroundColor: "#fff",
                                    borderTop: "13px solid #FF7F1E",
                                    height: "100%", // Fixed height for all cards
                                    display: "flex",
                                    flexDirection: "column" // Ensures even spacing
                                }}
                            >
                                <Box sx={{alignItems: "center", mb: 2}}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 60,
                                            height: 60,
                                            my: 2,
                                            borderRadius: "50%",
                                            backgroundColor: "#E6EAF3",
                                        }}
                                    >
                                        {therapy.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{fontWeight: "bold", color: "#012765"}}>
                                        {therapy.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{color: "#4B5563", mb: 2}}>
                                    {therapy.description}
                                </Typography>
                                <Typography variant="subtitle2" sx={{fontWeight: "bold", color: "#012765", mb: 1}}>
                                    Best For:
                                </Typography>
                                <Box sx={{display: "flex", flexWrap: "wrap", gap: 1, mb: 2}}>
                                    {therapy.bestFor.map((item, idx) => (
                                        <Chip key={idx} label={item} sx={{
                                            backgroundColor: "#F3F4F6",
                                            fontSize: 13,
                                            fontWeight: "500",
                                            color: "#012765"
                                        }}/>
                                    ))}
                                </Box>
                                {/* Push button to bottom */}
                                <Box sx={{mt: "auto"}}>
                                    <Button href={therapy.link} sx={{
                                        textTransform: "none",
                                        color: "#FF7F1E",
                                        fontWeight: "500",
                                        fontSize: 15
                                    }}>
                                        Learn more about {therapy.title.split(" ")[0]} →
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>


                {/* Assessment Section */}
                <Paper elevation={3} sx={{mt: 6, p: 4, borderRadius: 3, backgroundColor: "#fff"}}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Box sx={{fontWeight: "bold", color: "#012765", fontSize: "24px", mb: "16px", mt: 2}}>
                                Not Sure Which Therapy Type is Right for You?
                            </Box>
                            <Box sx={{color: "#4B5563", mt: 1, fontSize: "16px", mb: "24px"}}>
                                Don’t worry—our expert therapists will help determine the best approach for your unique
                                situation.
                                Complete our brief assessment, and we’ll match you with a therapist who specializes in
                                the most effective techniques for your needs.
                            </Box>
                            <Button variant="contained" sx={{
                                backgroundColor: "#FF7F1E",
                                textTransform: "none",
                                fontWeight: "bold",
                                mt: 2,
                                py: 1.5,
                                px: 3
                            }}>
                                Take the Assessment
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, backgroundColor: "#F2F4F7" }}>
                                <Box sx={{ fontWeight: "bold", color: "#012765", fontSize: "16px", mb: "16px" }}>
                                    Therapy Approaches FAQ
                                </Box>
                                {[
                                    "Can I switch therapy approaches?",
                                    "How long does each therapy take?",
                                    "Which is most effective for anxiety?",
                                    "View all therapy FAQs"
                                ].map((text, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: "#4B5563",
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            mb: 1.4,
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            "&:hover": { color: "#FF7F1E" },
                                            "&:hover .arrow": { transform: "translateX(5px)" } // Arrow move hover on text also
                                        }}
                                    >
                                        <Box
                                            className="arrow"
                                            component="span"
                                            sx={{
                                                mr: 1,
                                                color: "#FF7F1E",
                                                transition: "transform 0.3s ease",
                                            }}
                                        >
                                            ➜
                                        </Box>
                                        {text}
                                    </Box>

                                ))}
                            </Paper>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default LookingFor;
