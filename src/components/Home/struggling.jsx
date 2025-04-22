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
import img4 from "../../assets/images/Home/Struggling/Relationships1.jpg";
import img5 from "../../assets/images/Home/Struggling/Trauma1.jpg";
import img6 from "../../assets/images/Home/Struggling/Addiction1.jpg";
import img7 from "../../assets/images/Home/Struggling/Self-esteem1.jpg";
import img8 from "../../assets/images/Home/Struggling/Grief & Loss1.jpg";

const struggling = [
    {
        title: "Anxiety",
        description: "Manage worry, panic, and fear",
        icon: <WarningAmber sx={{ fontSize: 30, color: "orange" }} />,
        image: img1
    },
    // {
    //     title: "Depression",
    //     description: "Find joy and motivation again",
    //     icon: <MoodBad sx={{ fontSize: 30, color: "orange" }} />,
    //     image: img2
    // },
    // {
    //     title: "Stress",
    //     description: "Develop effective coping skills",
    //     icon: <Psychology sx={{ fontSize: 30, color: "orange" }} />,
    //     image: img3
    // },
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
                            // data-aos="zoom-in"
                            className={"Montserrat"}
                            sx={{
                                fontSize: { xs: '32px', md: '40px' },
                                color: "#012765",
                                fontWeight: "700",
                                mb: 2
                            }}
                        >
                            What area would you like to focus on?
                        </Box>
                        <Box
                            sx={{
                                color: "#4B5563",
                                fontSize: { xs: "15px", sm: "20px" },
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
                            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
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
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
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
            </Container>
        </Box>
    );
}

export default Struggling;