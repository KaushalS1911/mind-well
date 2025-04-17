import React from "react";
import {Box, Container, Grid, Typography, Paper} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import PieChartIcon from "@mui/icons-material/PieChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
    {
        icon: <SecurityIcon sx={{fontSize: 50, color: "#002F6C"}}/>,
        title: "Academic Institutions",
        description:
            "A transformative program for schools, colleges, coaching institutes and universities, empowering students, parents, and educators towards laying a stronger foundation for a thriving learning environment and building emotionally resilient families.",
        points: [
            "Emphasis on awareness, training, and implementation.",
            "Follows NEP 2020 and Mental Health Act 2017 Guidelines.",
            "Adopts Data-driven insights and measures impact tracking.",
        ],
    },
    {
        icon: <LockIcon sx={{fontSize: 50, color: "#002F6C"}}/>,
        title: "Workplaces",
        description:
            "A strategically designed program empowering organizations to enhance productivity, cultivate emotional well-being and foster workplaces with highly engaged employees and a healthy work culture.",
        points: [
            "Promotes participation in individual & organisational growth",
            "Insight based programs working on reinforcement model.",
            "Enhances workplace culture, leadership outreach and strengthen cohesiveness.",
        ],
    },
    {
        icon: <PieChartIcon sx={{fontSize: 50, color: "#002F6C"}}/>,
        title: "Aspirants",
        description:
            "We empower competitive exam aspirants with expert mentorship and time-tested strategies, enhancing resilience and equipping them to excel under pressure with confidence and clarity.",
        points: [
            "Cultivates stress and anxiety mastery",
            "Enhances emotional resilience and drive",
            "Sharpens focus for maximum productivity",
        ],
    },
];

function Mindwell() {
    return (
        <Box sx={{backgroundColor: "white", padding: "96px 0 0 0 "}}>
            <Container maxWidth="xl">

                <Box className={"Montserrat"} sx={{
                    fontSize: "36px",
                    marginBottom: "16px",
                    lineHeight: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#012765",
                    fontWeight: "700",
                    textAlign: "center",
                }}>
                    Empowering Diverse Sectors
                </Box>
                <Box sx={{
                    width: {md:"70%",xs:"100%"},
                    mx: "auto",
                    mb: 8,
                    fontSize: "18px",
                    color: "#4B5563",
                    textAlign: "center",
                    lineHeight: "25px",
                }}>
                    Emotionally Yours equip individuals with essential life skills to enhance their performance at academic
                    institutions and Workplaces leveraging group sessions, workshops, assessments & personalized guidance
                </Box>

                <Grid container spacing={3}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    textAlign: "left",
                                    height: "100%",
                                    backgroundColor: "#F9FAFB",
                                    transition: "0.3s",
                                    "&:hover": {transform: "translateY(-5px)"},
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        bgcolor: "#E6EAF3",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 2,
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                                <Box sx={{
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: "12px",
                                }}>
                                    {feature.title}
                                </Box>

                                <Box sx={{mb: 2, fontSize: "16px", color: "#4B5563",}}>
                                    {feature.description}
                                </Box>

                                {feature.points.map((point, idx) => (
                                    <Box key={idx} sx={{display: "flex", alignItems: "center", mb: 1}}>
                                        <CheckCircleIcon sx={{color: "#FF7F1E", fontSize: 20, mr: 1}}/>
                                        <Box sx={{
                                            color: "#4B5563"
                                        }}>{point}</Box>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{
                    backgroundColor: "#002F6C",
                    borderRadius: "16px",
                    color: "white",
                    mt: 7,
                    py: 6,
                    px: 4
                }}>
                    <Grid container spacing={0} alignItems="center">

                        <Grid item xs={12} md={5}>
                            <Typography className={"Montserrat"} variant="h5" fontWeight="bold">
                                Emotionally Yours’ Influence
                            </Typography>
                            <Box variant="body1" sx={{mt: 1, color: "#D1E1FF", width: "85%", mb: 2}}>
                                At Emotionally Yours, we pledge to augment accessibility and elevate the quality of emotional and psychological healthcare.
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={7}>
                            <Grid container spacing={4}>
                                <Grid item sm={4} xs={6}>
                                    <Typography variant="h4"
                                                sx={{color: "#FF7F1E", fontWeight: "700", textAlign: "center"}}>
                                        93%
                                    </Typography>
                                    <Box variant="body2" sx={{fontSize: "14px", color: "#D1E1FF", textAlign: "center"}}>
                                        Report significant improvement
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <Typography variant="h4"
                                                sx={{color: "#FF7F1E", fontWeight: "700", textAlign: "center"}}>
                                        25K+
                                    </Typography>
                                    <Box variant="body2" sx={{fontSize: "14px", color: "#D1E1FF", textAlign: "center"}}>
                                        Sessions completed
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <Typography variant="h4"
                                                sx={{color: "#FF7F1E", fontWeight: "700", textAlign: "center"}}>
                                        4.9
                                    </Typography>
                                    <Box sx={{fontSize: "14px", color: "#D1E1FF", textAlign: "center"}}>
                                        Average therapist rating
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
}

export default Mindwell;
