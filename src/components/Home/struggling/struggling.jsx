import React, {useState} from "react";
import {Box, Grid, Container} from "@mui/material";
import {
    WarningAmber,
    Favorite,
    Security,
    Bolt,
    Visibility,
    Cake
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/Home/Struggling/Anxiety.webp";
import img2 from "../../../assets/images/Home/Struggling/Depression.webp";
import img3 from "../../../assets/images/Home/Struggling/stres.jpg";
import img4 from "../../../assets/images/Home/Struggling/Relationships1.jpg";
import img5 from "../../../assets/images/Home/Struggling/Trauma1.jpg";
import img6 from "../../../assets/images/Home/Struggling/Addiction1.jpg";
import img7 from "../../../assets/images/Home/Struggling/Self-esteem1.jpg";
import img8 from "../../../assets/images/Home/Struggling/Grief & Loss1.jpg";
import img9 from "../../../assets/images/Home/Struggling/little-boy-bullying.jpg";
import img10 from "../../../assets/images/Home/Struggling/Overthinking.jpg";
import img11 from "../../../assets/images/Home/Struggling/career.png";
import {toast} from "react-toastify";


const Struggling = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [assessmentUrl, setAssessmentUrl] = useState("");

    const handleAssessmentClick = (index) => {
        setSelectedIndex(index);
        const url = struggling[index].url;
        setAssessmentUrl(window.location.origin + url);
        navigate(url);
    };

    const struggling = [
        {
            title: "Stress-Anxiety",
            description: "Manage worry, panic, and fear",
            icon: <WarningAmber sx={{fontSize: 30, color: "orange"}}/>,
            image: img1,
            url: '/struggling/stress-anxiety',
        },
        {
            title: "Relationship",
            description: "Improve communication and connection",
            icon: <Favorite sx={{fontSize: 30, color: "orange"}}/>,
            image: img4,
            url: '/struggling/relationship',
        },
        {
            title: "Grief-Trauma",
            description: "Heal from difficult experiences",
            icon: <Security sx={{fontSize: 30, color: "orange"}}/>,
            image: img5,
            url: '/struggling/grief-trauma',
        },
        {
            title: "Addiction",
            description: "Break free from harmful patterns",
            icon: <Bolt sx={{fontSize: 30, color: "orange"}}/>,
            image: img6,
            url: '/struggling/addiction',
        },
        {
            title: "Self-esteem",
            description: "Build confidence and self-worth",
            icon: <Visibility sx={{fontSize: 30, color: "orange"}}/>,
            image: img7,
            url: '/struggling/self-esteem',
        },
        {
            title: "Bullying",
            description: "Navigate through difficult transitions",
            icon: <Cake sx={{fontSize: 30, color: "orange"}}/>,
            image: img9,
            url: '/struggling/bullying',
        },
        {
            title: "Overthinking",
            description: "Navigate through difficult transitions",
            icon: <Cake sx={{fontSize: 30, color: "orange"}}/>,
            image: img10,
            url: '/struggling/overthinking',
        },
        {
            title: "Career uncertainty",
            description: "Navigate through difficult transitions",
            icon: <Cake sx={{fontSize: 30, color: "orange"}}/>,
            image: img11,
            url: '/struggling/careerUncertainty',
        }
    ];

    return (
        <Box component="section" sx={{mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' },pt: {md:25,xs:15}}}>
            <Container maxWidth="xl">
                <Box sx={{textAlign: "center"}}>
                    <Box sx={{mb: 4}}>
                        <Box
                            className="Montserrat"
                            sx={{
                                fontSize: {
                                    xs: '1.7rem',
                                    sm: '1.85rem',
                                    md: '2rem',
                                    lg: '2.125rem'
                                },
                                color: "#012765",
                                fontWeight: 700,
                                mb: 2,
                                letterSpacing: "-1px",
                            }}
                        >
                            What area would you like to focus on?
                        </Box>
                        <Box sx={{color: "#4B5563", fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' }, mx: "auto"}}>
                            We provide expert support for a wide range of mental health concerns. Select your challenge
                            to learn more about how we can help.
                        </Box>
                    </Box>

                    <Grid container spacing={3} justifyContent="center">
                        {struggling.map((item, index) => (
                            <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                                <Box
                                    onClick={() => handleAssessmentClick(index)}
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
                                            transform: "translateY(-5px)",
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: {xl: "21px", md: "23px", lg: "20px", xs: "20px"},
                                            color: "#012765",
                                            fontWeight: "bold",
                                            mb: 1
                                        }}
                                    >
                                        {item.title}
                                    </Box>
                                    <Box
                                        sx={{
                                            my: 2,
                                            mx: "auto",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            overflow: "hidden",
                                            borderRadius: 1,
                                            width: { lg: "100%", sm: "70%", xs: "50%" },
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: "100%",
                                                borderRadius: "8px",
                                                transition: "transform 0.3s ease-in-out",
                                            }}
                                            className="hover-scale-image"
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Struggling;
