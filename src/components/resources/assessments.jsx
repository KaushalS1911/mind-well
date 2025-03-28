import React, { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import img1 from "../../assets/images/Resources/Assessments/home1.jpg";
import img2 from "../../assets/images/Resources/Assessments/home2.jpeg";
import img3 from "../../assets/images/Resources/Assessments/General_Stress_Anxiety.jpeg";
import img4 from "../../assets/images/Resources/Assessments/Emotional_Awareness.jpg";
import img5 from "../../assets/images/Resources/Assessments/Academic_Stress.jpg";
import img6 from "../../assets/images/Resources/Assessments/Self_Esteem_Scale.jpg";
import img7 from "../../assets/images/Resources/Assessments/Work_Life_Balance.jpg";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Assessments() {
    const assessments = [
        {
            img: img1,
            title: "Exam Stress Gauge\n" +
                "(Age 18-21)",
            description: "Evaluate your anxiety levels and identify potential triggers.",
            questions: "7 questions",
            time: "~ 5 min quiz",
        },
        {
            img: img2,
            title: "SHAPE K-12",
            description: "Assess symptoms of depression and their impact on daily life.",
            questions: "9 questions",
            time: "~ 5 min quiz",
        },
        {
            img: img3,
            title: "General Stress and Anxiety",
            description: "Measure your current stress levels and coping mechanisms.",
            questions: "5 questions",
            time: "~ 5 min quiz",
        },
        {
            img: img4,
            title: "Emotional Awareness and Regulation\n" +
                "(Age 4-10)",
            description: "Understand your emotional intelligence and self-awareness.",
            questions: "6 questions",
            time: "~ 5 min quiz",
        },
        {
            img: img5,
            title: "Academic Stress\n" +
                "(Age 16-25)",
            description: "Analyze stress levels related to academic pressure and workload.",
            questions: "8 questions",
            time: "~ 5 min quiz",
        },
        {
            img: img6,
            title: "Self-Esteem Scale for Pre-Adolescents\n" +
                "(Age 11-13)",
            description: "Measure your self-esteem and confidence levels.",
            questions: "10 questions",
            time: "~ 5 min quiz",
        },
        {
            img: img7,
            title: "Work-Life Balance\n" +
                "(Age 21+)",
            description: "Evaluate your balance between work and personal life.",
            questions: "7 questions",
            time: "~ 5 min quiz",
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <Container maxWidth="xl">
            <Box sx={{ padding: "50px 0" }}>
                <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: "#012765", borderRadius: 3, color: "#fff" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: "24px" }}>
                                <Box
                                    sx={{
                                        bgcolor: "#FE6A00",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "30px",
                                        padding: "10px",
                                        fontSize: { xs: 16, md: 20 },
                                        mr: 2,
                                    }}
                                >
                                    <BoltIcon />
                                </Box>
                                <Box className={"Montserrat"} sx={{ fontWeight: "700", fontSize: { xs: "24px", md: "30px" } }}>
                                    Mental Health Assessments
                                </Box>
                            </Box>
                            <Box fontSize={{ xs: 14, md: 18 }} color="#CBD5E1" sx={{ mb: "32px" }}>
                                Take our scientifically-validated assessments to gain insights into your mental health
                                and determine whether you might benefit from professional support.
                            </Box>
                            <Grid container spacing={2}>
                                <Grid container spacing={2}>
                                    {assessments.map((assessment, index) => (
                                        <Grid item xs={12} sm={4} key={index}>
                                            <Box
                                                sx={{
                                                    p: "20px",
                                                    borderRadius: 2,
                                                    bgcolor: "#FFFFFF1A",
                                                    color: "#fff",
                                                    height: "100%",
                                                    border: selectedIndex === index ? "2px solid #FE6A00" : "none",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                }}
                                                onClick={() => setSelectedIndex(index)}
                                            >
                                                <Box display="flex" alignItems="center" mb="12px">
                                                    <img
                                                        src={assessment.img}
                                                        alt={assessment.title}
                                                        style={{
                                                            width: "40px",
                                                            height: "40px",
                                                            borderRadius: "50%",
                                                            marginRight: "12px",
                                                        }}
                                                    />
                                                    <Box fontWeight={600} sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                                                        {assessment.icon} {assessment.title}
                                                    </Box>
                                                </Box>
                                                <Box variant="body2" color="#CBD5E1" mb={2} sx={{ fontSize: "14px" }}>
                                                    {assessment.description}
                                                </Box>
                                                <Box display="flex" gap={1} alignItems="center" mt="16px">
                                                    <Box
                                                        sx={{
                                                            bgcolor: "#FFFFFF33",
                                                            padding: "4px 12px",
                                                            fontSize: "12px",
                                                            color: "#fff",
                                                            borderRadius: 10,
                                                        }}
                                                    >
                                                        {assessment.questions}
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            bgcolor: "#FFFFFF33",
                                                            padding: "4px 12px",
                                                            fontSize: "12px",
                                                            color: "#fff",
                                                            borderRadius: 10,
                                                        }}
                                                    >
                                                        {assessment.time}
                                                    </Box>
                                                </Box>
                                                <Box sx={{ flexGrow: 1 }} />
                                                <Box
                                                    sx={{
                                                        alignSelf: "flex-end",
                                                        mt: "auto",
                                                        fontWeight: 400,
                                                        fontSize: "14px",
                                                        color: "#FE6A00",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        transition:"0.5s",
                                                        '&:hover': {
                                                            color: "#fff",
                                                        }
                                                    }}
                                                >
                                                    TAKE ASSESSMENT <KeyboardDoubleArrowRightIcon/>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Assessments;
