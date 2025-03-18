import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import PieChartIcon from "@mui/icons-material/PieChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
    {
        icon: <SecurityIcon sx={{ fontSize: 50, color: "#002F6C" }} />,
        title: "Licensed Professionals",
        description:
            "Our network includes only licensed and vetted therapists with specialized training and years of experience.",
        points: [
            "Rigorous verification process",
            "Ongoing training and development",
            "Multiple specializations available",
        ],
    },
    {
        icon: <LockIcon sx={{ fontSize: 50, color: "#002F6C" }} />,
        title: "Privacy & Security",
        description:
            "Your confidentiality is our priority. All sessions and communications are encrypted and strictly confidential.",
        points: [
            "End-to-end encryption",
            "HIPAA compliant platform",
            "Secure medical record keeping",
        ],
    },
    {
        icon: <PieChartIcon sx={{ fontSize: 50, color: "#002F6C" }} />,
        title: "Personalized Approach",
        description:
            "We use advanced matching technology to connect you with the therapist who best fits your unique needs and preferences.",
        points: [
            "Smart matching algorithm",
            "Free therapist switches",
            "Tailored treatment plans",
        ],
    },
];

function Mindwell() {
    return (
        <Box sx={{ backgroundColor: "white", py: 6 }}>
            <Container maxWidth="xxl">
                {/* Title Section */}
                <Box sx={{
                    fontSize: "36px",
                    marginBottom: "16px",
                    lineHeight: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#012765",
                    fontWeight: "700"
                }}>
                    Why MindWell?
                </Box>
                <Box sx={{ maxWidth: 600, mx: "auto", mb: 8, fontSize: "18px", color: "#4B5563", textAlign: "center", lineHeight: "25px", }}>
                    We combine professional expertise with innovative technology to make
                    mental healthcare accessible, effective, and personalized.
                </Box>

                {/* Feature Cards */}
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
                                    "&:hover": { transform: "translateY(-5px)" },
                                }}
                            >
                                {/* Icon */}
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

                                {/* Title */}
                                <Box sx={{
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: "12px",
                                }}>
                                    {feature.title}
                                </Box>

                                {/* Description */}
                                <Box sx={{ mb: 2, fontSize: "16px", color: "#4B5563", }}>
                                    {feature.description}
                                </Box>

                                {/* Bullet Points */}
                                {feature.points.map((point, idx) => (
                                    <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <CheckCircleIcon sx={{ color: "#FF7F1E", fontSize: 20, mr: 1 }} />
                                        <Box sx={{
                                            color: "#4B5563"
                                        }}>{point}</Box>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Our Impact Section */}
                <Box sx={{
                    backgroundColor: "#002F6C",
                    borderRadius: "16px",
                    color: "white",
                    mt: 10,
                    py: 6,
                    px: 4
                }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} alignItems="center">
                            {/* Left Side Text */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" fontWeight="bold">
                                    Our Impact
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1, color: "#D1E1FF",width:"85%" }}>
                                    At MindWell, we're committed to making a difference in how people access and experience mental healthcare.
                                </Typography>
                            </Grid>

                            {/* Stats Section */}
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={4}>
                                    <Grid item sm={4} xs={6}>
                                        <Typography variant="h4" sx={{ color: "#FF7F1E", fontWeight: "700",textAlign:"center" }}>
                                            93%
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#D1E1FF",textAlign:"center" }}>
                                            Report significant improvement
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={4} xs={6}>
                                        <Typography variant="h4" sx={{ color: "#FF7F1E", fontWeight: "700",textAlign:"center" }}>
                                            25K+
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#D1E1FF",textAlign:"center" }}>
                                            Sessions completed
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={4} xs={6}>
                                        <Typography variant="h4" sx={{ color: "#FF7F1E", fontWeight: "700",textAlign:"center" }}>
                                            4.9
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#D1E1FF" }}>
                                            Average therapist rating
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </Container>
        </Box>
    );
}

export default Mindwell;
