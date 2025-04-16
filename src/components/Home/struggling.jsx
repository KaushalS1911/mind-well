import React from "react";
import { Box, Grid, Container } from "@mui/material";
import {
    WarningAmber,
    MoodBad,
    Bolt,
    Favorite,
    Security,
    Visibility,
    Cake,
    Psychology
} from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from "../../assets/images/Home/Struggling/Anxiety.webp";
import img2 from "../../assets/images/Home/Struggling/Depression.webp";
import img3 from "../../assets/images/Home/Struggling/stres.jpg";
import img4 from "../../assets/images/Home/Struggling/Relationships.png";
import img5 from "../../assets/images/Home/Struggling/Trauma.jpg";
import img6 from "../../assets/images/Home/Struggling/Addiction1.jpg";
import img7 from "../../assets/images/Home/Struggling/Self-esteem.webp";
import img8 from "../../assets/images/Home/Struggling/Grief & Loss.png";

const struggling = [
    {
        title: "Anxiety",
        description: "Manage worry, panic, and fear",
        icon: <WarningAmber sx={{ fontSize: 30, color: "orange" }} />,
        image: img1
    },
    {
        title: "Depression",
        description: "Find joy and motivation again",
        icon: <MoodBad sx={{ fontSize: 30, color: "orange" }} />,
        image: img2
    },
    {
        title: "Stress",
        description: "Develop effective coping skills",
        icon: <Psychology sx={{ fontSize: 30, color: "orange" }} />,
        image: img3
    },
    {
        title: "Relationships",
        description: "Improve communication and connection",
        icon: <Favorite sx={{ fontSize: 30, color: "orange" }} />,
        image: img4
    },
    {
        title: "Trauma",
        description: "Heal from difficult experiences",
        icon: <Security sx={{ fontSize: 30, color: "orange" }} />,
        image: img5
    },
    {
        title: "Addiction",
        description: "Break free from harmful patterns",
        icon: <Bolt sx={{ fontSize: 30, color: "orange" }} />,
        image: img6
    },
    {
        title: "Self-esteem",
        description: "Build confidence and self-worth",
        icon: <Visibility sx={{ fontSize: 30, color: "orange" }} />,
        image: img7
    },
    {
        title: "Grief & Loss",
        description: "Navigate through difficult transitions",
        icon: <Cake sx={{ fontSize: 30, color: "orange" }} />,
        image: img8
    }
];

const features = [
    {
        title: "Personalized assessments",
        description: "Tailored to your organization's specific needs and culture"
    },
    {
        title: "Virtual therapy sessions",
        description: "Confidential access to licensed therapists"
    },
    {
        title: "Workshops and webinars",
        description: "Educational resources on mental health topics"
    },
    {
        title: "Analytics and reporting",
        description: "Measure program effectiveness and engagement"
    }
];

function Struggling() {
    return (
        <Box sx={{ padding: "0 0 96px 0" }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center" }}>
                    <Box sx={{ mb: 4 }}>
                        <Box
                            className={"Montserrat"}
                            sx={{
                                fontSize: { xs: "24px", sm: "32px" },
                                color: "#012765",
                                fontWeight: "700",
                                mb: 2
                            }}
                        >
                            What Are You Struggling With?
                        </Box>
                        <Box
                            sx={{
                                color: "#4B5563",
                                fontSize: { xs: "14px", sm: "18px" },
                                maxWidth: "600px",
                                mx: "auto"
                            }}
                        >
                            We provide expert support for a wide range of mental health
                            concerns. Select your challenge to learn more about how we can
                            help.
                        </Box>
                    </Box>

                    <Grid container spacing={3} justifyContent="center">
                        {struggling.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Box
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                        borderRadius: 2,
                                        border: "1px solid #E5E7EB",
                                        transition: "0.3s",
                                        height: "100%",
                                        cursor: "pointer",
                                        "&:hover": {
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "25px",
                                            color: "#012765",
                                            fontWeight: "bold",
                                            mb: 1
                                        }}
                                    >
                                        {item.title}
                                    </Box>
                                    {item.image && (
                                        <Box
                                            sx={{
                                                my: 2,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                overflow: "hidden",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "8px",
                                                    transition: "transform 0.3s ease-in-out"
                                                }}
                                                className="hover-scale-image"
                                            />
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box
                    sx={{
                        backgroundColor: "#012765",
                        color: "white",
                        p: { xs: 3, sm: 6 },
                        borderRadius: "8px",
                        mt: 9
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} lg={8}>
                            <Box
                                className={"Montserrat"}
                                sx={{
                                    fontSize: { xs: "24px", sm: "30px" },
                                    fontWeight: "700",
                                    mb: 2
                                }}
                            >
                                Invest in Your Employees and Build Thriving Teams
                            </Box>
                            <Box
                                sx={{
                                    fontSize: "16px",
                                    mb: 3,
                                    opacity: "0.9",
                                    width: { md: "80%" }
                                }}
                            >
                                Provide your employees with access to mental health resources
                                that boost well-being, increase productivity, and show your
                                commitment to their health.
                            </Box>
                            <Grid container spacing={2}>
                                {[
                                    "Reduce absenteeism and healthcare costs",
                                    "Improve employee retention and satisfaction",
                                    "Create a culture that prioritizes mental health",
                                    "Easy implementation with dedicated support"
                                ].map((benefit, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                fontSize: "16px"
                                            }}
                                        >
                                            <CheckCircleIcon sx={{ color: "#FE6A00" }} /> {benefit}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={{ mt: 3 }}>
                                <Box
                                    sx={{
                                        fontSize: "16px",
                                        display: "inline-block",
                                        borderRadius: "7px",
                                        backgroundColor: "#fff",
                                        color: "#012765",
                                        fontWeight: "600",
                                        padding: "12px 24px",
                                        mb: { lg: 0, xs: 3 },
                                        cursor: "pointer"
                                    }}
                                >
                                    Request information
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    color: "#012765",
                                    p: 3,
                                    borderRadius: "8px"
                                }}
                            >
                                <Box sx={{ fontSize: "20px", fontWeight: "700", mb: 2 }}>
                                    Our Corporate Wellness Program Includes:
                                </Box>
                                <Grid container spacing={2}>
                                    {features.map((feature, index) => (
                                        <Grid item xs={12} key={index}>
                                            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <Box
                                                        sx={{
                                                            width: 24,
                                                            height: 24,
                                                            backgroundColor: "#FF8000",
                                                            borderRadius: "50%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </Box>
                                                    <span style={{ fontWeight: "bold" }}>{feature.title}</span>
                                                </Box>
                                                <Box sx={{ fontSize: "14px", color: "#555", ml: 4 }}>
                                                    {feature.description}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* Add CSS for hover scale effect */}
            <style jsx global>{`
                .hover-scale-image:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </Box>
    );
}

export default Struggling;