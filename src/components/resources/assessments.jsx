import React, {useState} from "react";
import {Box, Grid, Card, Typography, Button, Avatar, Container} from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import DescriptionIcon from '@mui/icons-material/Description';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckIcon from '@mui/icons-material/Check';


function Assessments() {

    const assessments = [
        {
            icon: <AcUnitIcon fontSize="small" sx={{color: "#FE6A00"}}/>,
            title: "Anxiety Assessment",
            description: "Evaluate your anxiety levels and identify potential triggers.",
            questions: "7 questions",
            time: "~ 3 min",
        },
        {
            icon: <ErrorOutlineIcon fontSize="small" sx={{color: "#FE6A00"}}/>,
            title: "Depression Screening",
            description: "Access symptoms of depression and their impact on your daily life.",
            questions: "9 questions",
            time: "~ 4 min",
        },
        {
            icon: <BoltIcon fontSize="small" sx={{color: "#FE6A00"}}/>,
            title: "Stress Level Test",
            description: "Measure your current stress levels and coping mechanisms.",
            questions: "5 questions",
            time: "~ 2 min",
        },
        {
            icon: <ArrowDownwardIcon fontSize="small" sx={{color: "#FE6A00"}}/>,
            title: "Burnout Evaluation",
            description: "Identify signs of burnout and professional exhaustion.",
            questions: "8 questions",
            time: "~ 3 min",
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);


    return (
        <Container maxWidth="xl">
            <Box sx={{ margin: { xs: "50px 0", md: "100px 0" } }}>
                <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: "#012765", borderRadius: 3, color: "#fff" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
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
                                <Typography fontWeight={700} sx={{ fontSize: { xs: "24px", md: "30px" } }}>
                                    Mental Health Assessments
                                </Typography>
                            </Box>
                            <Typography fontSize={{ xs: 14, md: 18 }} color="#CBD5E1" sx={{ mb: "32px" }}>
                                Take our scientifically-validated assessments to gain insights into your mental health
                                and determine whether you might benefit from professional support.
                            </Typography>
                            <Grid container spacing={2}>
                                {assessments.map((assessment, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box
                                            sx={{
                                                p: "20px",
                                                borderRadius: 2,
                                                bgcolor: "#FFFFFF1A",
                                                color: "#fff",
                                                height: "100%",
                                                cursor: "pointer",
                                                border: selectedIndex === index ? "2px solid #FE6A00" : "none",
                                            }}
                                            onClick={() => setSelectedIndex(index)}
                                        >
                                            <Box display="flex" alignItems="center" mb="12px">
                                                <Avatar sx={{ bgcolor: "#FE6A0033", mr: 2, fontSize: "16px" }}>
                                                    {assessment.icon}
                                                </Avatar>
                                                <Typography fontWeight={600} sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                                                    {assessment.title}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="#CBD5E1" mb={2} sx={{ fontSize: "14px" }}>
                                                {assessment.description}
                                            </Typography>
                                            <Box display="flex" justifyContent="space-between" alignItems="center" mt="16px">
                                                <Typography
                                                    sx={{
                                                        bgcolor: "#FFFFFF33",
                                                        padding: "4px 12px",
                                                        fontSize: "12px",
                                                        color: "#fff",
                                                        borderRadius: 10,
                                                    }}
                                                >
                                                    {assessment.questions}
                                                </Typography>
                                                <Typography color="#FFFFFFB3" sx={{ fontSize: "12px" }}>
                                                    {assessment.time}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: "24px", bgcolor: "#F8FAFC", color: "#1E293B", borderRadius: 2 }}>
                                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                                    <Avatar sx={{ bgcolor: "#FFE1CC", p: "40px" }}>
                                        <DescriptionIcon sx={{ color: "#FE6A00", fontSize: "40px" }} />
                                    </Avatar>
                                </Box>
                                <Typography fontWeight={600} fontSize={20} mb="12px" textAlign="center">
                                    Complete Mental Health Check
                                </Typography>
                                <Typography variant="body2" color="#4B5563" fontSize={16} textAlign="center" mb="24px">
                                    Take our comprehensive assessment to evaluate multiple aspects of your mental wellbeing in one go.
                                </Typography>
                                <Typography fontSize={16} color="#4B5563" mb={1}>
                                    <CheckIcon sx={{ color: "#4CAF50" }} /> Covers all key areas
                                </Typography>
                                <Typography fontSize={16} color="#4B5563" mb={1}>
                                    <CheckIcon sx={{ color: "#4CAF50" }} /> Detailed report
                                </Typography>
                                <Typography fontSize={16} color="#4B5563" mb={2}>
                                    <CheckIcon sx={{ color: "#4CAF50" }} /> Personalized recommendations
                                </Typography>
                                <Button
                                    sx={{
                                        padding: {lg:"12px 24px",xs:"10px 20px"},
                                        mt: 0.54,
                                        bgcolor: "#012765",
                                        width: "100%",
                                        color: "#fff",
                                        "&:hover": { bgcolor: "#011A4B" },
                                    }}
                                >
                                    Start Comprehensive Assessment
                                </Button>
                            </Box>
                            <Button
                                fullWidth
                                sx={{
                                    mt: 2,
                                    padding: "12px 24px",
                                    bgcolor: "#FE6A00",
                                    color: "#fff",
                                    "&:hover": { bgcolor: "#D45D00" },
                                }}
                            >
                                Take Selected Assessment
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
}

export default Assessments;