import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from '@mui/icons-material/Circle';
import img1 from "../../assets/images/Home/workstable/Establish-Leadership.jpeg";
import img2 from "../../assets/images/Home/workstable/Initial-Evaluations - Laying-the-Groundwork1.jpg";
import img3 from "../../assets/images/Home/workstable/Awareness-Creation-for-Meaningful-Impact.jpg";
import img4 from "../../assets/images/Home/workstable/Insight-Driven-Personalised-Enrichment.jpg";
import img5 from "../../assets/images/Home/workstable/Strengthening-Impact-Through-Measurable-Metrices1.jpg";

const steps = [
    {
        image: img1,
        title: "Establish a Leadership Task force",
        details: [
            "Amplify awareness of emotional intelligence as a leadership cornerstone",
            "Pinpoint challenges and uncover pathways for growth",
            "Develop a precision-driven strategy for lasting impact",
        ],
    },
    {
        image: img2,
        title: "Initial Evaluations – Laying the Groundwork",
        details: [
            "Facilitate introspective self-assessments to foster personal growth",
            "Conduct comprehensive wellness evaluations for participants",
            "Deliver data-driven insights to empower organisational strategies",
        ],
    },
    {
        image: img3,
        title: "Awareness Creation for Meaningful Impact",
        details: [
            "Develop demographic-specific curricula tailored by gender, age, and region",
            "Foster engagement through interactive workshops and training",
            "Empower self-help groups as first responders and feedback hubs",
        ],
    },
    {
        image: img4,
        title: "Insight-Driven Personalised Enrichment",
        details: [
            "Curate meticulously designed sessions for profound growth",
            "Provide customised guidance to cultivate essential life skills",
            "Detect underlying risks and elevate organisational consciousness",
        ],
    },
    {
        image: img5,
        title: "Strengthening Impact Through Measurable Metrices",
        details: [
            "Assess intervention effectiveness with follow-up evaluations",
            "Facilitate collaborative feedback sessions for shared learning",
            "Develop a strategic roadmap with leadership for sustained success",
        ],
    },
];

function WorksTable() {
    return (
        <Box component="section" sx={{
            mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }
        }}>
            <Container maxWidth={"xl"}>
                <Box sx={{py: "40px"}}>
                    <Typography
                        className="Montserrat"
                        variant="h4"
                        align="center"
                        fontWeight={700}
                        color="#012765"
                        gutterBottom
                        sx={{
                            fontSize: {
                                xs: '1.7rem',
                                sm: '1.85rem',
                                md: '2rem',
                                lg: '2.125rem'
                            },
                            letterSpacing: "-1px",
                        }}
                    >
                        The way WE drive change
                    </Typography>

                    <Box
                        align="center"
                        sx={{
                            mx: {xs: 2, sm: 6, md: 12},
                            color: "#4B5563",
                            fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
                            lineHeight: 1.75,
                        }}
                    >
                        With "Emotionally Yours", you can embark on a transformative journey to
                        enhance your emotional well-being through a few simple and effective
                        steps
                    </Box>

                    <Box sx={{position: "relative", mt: {xs: 4, sm: 6}}}>
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: {md: "4px", xs: 0},
                                bgcolor: "#f3e2d3",
                                transform: "translateX(-50%)",
                                zIndex: 0,
                            }}
                        />

                        {steps.map((step, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "relative",
                                    mt: index === 0 ? 0 : {xs: 4},
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: {lg: "50%", md: "50%", sm: "50%"},
                                        left: {lg: "-1.6%", md: "-3%", sm: "-4.8%"},
                                        display: {xs: "none", sm: "inline-flex"},
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        bgcolor: "#FE6A00",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        transform: "translateY(-50%)",
                                        zIndex: 1,
                                    }}
                                >
                                    <CircleIcon/>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {xs: "column", md: "row"},
                                        bgcolor: "#fff",
                                        borderRadius: 2,
                                        p: {xs: 3, sm: 3, md: 4},
                                        border: "1px solid #E5E7EB",
                                        gap: 4,
                                        ml: {md: 5, xs: 0},
                                        position: "relative",
                                        transition: "0.3s",
                                        "&:hover": {
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                >
                                    {/*<Box*/}
                                    {/*    sx={{*/}
                                    {/*        position: "absolute",*/}
                                    {/*        top: "10px",*/}
                                    {/*        right: "12px",*/}
                                    {/*        display: {xs: "inline-flex", sm: "none"},*/}
                                    {/*        alignItems: "center",*/}
                                    {/*        justifyContent: "center",*/}
                                    {/*        width: 35,*/}
                                    {/*        height: 35,*/}
                                    {/*        borderRadius: "50%",*/}
                                    {/*        bgcolor: "#FE6A00",*/}
                                    {/*        color: "#fff",*/}
                                    {/*        fontWeight: "bold",*/}
                                    {/*        fontSize: 14,*/}
                                    {/*    }}*/}
                                    {/*>*/}
                                    {/*    <CircleIcon/>*/}
                                    {/*</Box>*/}

                                    <Grid container spacing={4}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={7}
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: {xs: 20, sm: 22, md: 24},
                                                    mb: 2,
                                                    color: "#002F6C",
                                                }}
                                            >
                                                {step.title}
                                            </Typography>

                                            {step.details.map((detail, i) => (
                                                <Box key={i} display="flex" mb={1}>
                                                    <CheckCircleIcon
                                                        sx={{color: "#FE6A00", mr: 1, mt: 0.5, fontSize: 20}}
                                                    />
                                                    <Typography
                                                        sx={{fontSize: {xs: 12, sm: 16}, lineHeight: 1.5}}
                                                    >
                                                        {detail}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={5}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Box
                                                sx={{
                                                    height: "220px",
                                                    width: "400px",
                                                }}
                                            >
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                        borderRadius: 8,
                                                        transition: "transform 0.3s ease-in-out",
                                                    }}
                                                    className="hover-scale-image"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default WorksTable;
