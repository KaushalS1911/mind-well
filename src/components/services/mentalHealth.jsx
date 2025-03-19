import React from "react";
import {Box, Grid, Typography, Button, Card, CardContent, Container, Divider} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {People, Event, SupervisorAccount, Assessment, BarChart} from "@mui/icons-material";

function MentalHealth() {

    const wellnessSolutions = [
        {
            title: "1:1 Therapy Sessions",
            description: "Provide employees with confidential access to our network of licensed therapists through secure video sessions.",
            icon: <People/>,
        },
        {
            title: "Workshops & Webinars",
            description: "Educational sessions on stress management, burnout prevention, resilience building, and more, tailored to your team's needs.",
            icon: <Event/>,
        },
        {
            title: "Manager Training",
            description: "Equip your leadership team with the skills to recognize signs of mental health issues and support their team members effectively.",
            icon: <SupervisorAccount/>,
        },
        {
            title: "Organizational Assessment",
            description: "Evaluate your current workplace mental health climate and receive customized recommendations for improvement.",
            icon: <Assessment/>,
        },
        {
            title: "Outcome Measurement",
            description: "Track the impact of your mental health initiatives with anonymous aggregate data and detailed reporting.",
            icon: <BarChart/>,
        },
    ];

    return (
        <Box sx={{p: "96px 0", backgroundColor: "#F9FAFB"}}>
            <Container maxWidth={"xl"}>
                <Box
                    className={"Montserrat"}
                    sx={{
                        fontSize: {xs: "28px", sm: "32px", md: "36px"},
                        color: "#012765",
                        margin: "0 0 16px",
                        lineHeight: {xs: "2rem", md: "2.5rem"},
                        fontWeight: "700",
                        textAlign: "center",
                        px: {xs: 2, sm: 4},
                    }}
                >
                    Employee Mental Health Program
                </Box>
                <Box
                    className={"Montserrat"}
                    sx={{
                        fontSize: {xs: "16px", sm: "18px"},
                        color: "#4b5563",
                        maxWidth: "800px",
                        margin: "0 auto",
                        lineHeight: "1.75rem",
                        fontWeight: "400",
                        textAlign: "center",
                        mb: {xs: 6, md: 10},
                        px: {xs: 2, sm: 4},
                    }}
                >
                    Invest in your employees and build thriving teams with our comprehensive mental health solutions
                    designed for the modern workplace.
                </Box>


                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                fontSize: {xs: "20px", md: "24px"},
                                color: "#012765",
                                margin: "0 0 16px",
                                fontWeight: "700",
                                lineHeight: "2rem",
                                textAlign: {xs: "center", md: "left"},
                            }}
                        >
                            Why Prioritize Mental Health in Your Workplace?
                        </Box>
                        <Box
                            sx={{
                                fontSize: {xs: "14px", md: "16px"},
                                color: "#4b5563",
                                margin: "0 0 24px",
                                textAlign: {xs: "center", md: "left"},
                            }}
                        >
                            In today's fast-paced work environment, mental health has become a critical factor in
                            employee well-being, productivity, and retention. Organizations that invest in mental health
                            support see
                            significant returns.
                        </Box>
                        <Grid container spacing={2}>
                            {[
                                {percentage: "76%", text: "of employees report experiencing burnout at work"},
                                {
                                    percentage: "$1 : $4",
                                    text: "return on investment for workplace mental health programs"
                                },
                                {percentage: "62%", text: "reduction in employee turnover with mental health support"},
                                {
                                    percentage: "35%",
                                    text: "increase in productivity with proper mental health resources"
                                },
                            ].map((item, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Box
                                        sx={{
                                            padding: {xs: "16px", md: "20px"},
                                            backgroundColor: "#fff",
                                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: {xs: "24px", md: "30px"},
                                                margin: "0 0 8px",
                                                color: "#fe6a00",
                                                lineHeight: "2.25rem",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {item.percentage}
                                        </Box>
                                        <Box sx={{fontSize: {xs: "14px", md: "16px"}, color: "#374151"}}>
                                            {item.text}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item>
                            <Box
                                sx={{
                                    mt: {xs: 3, md: 4},
                                    p: {xs: 2, md: 3},
                                    backgroundColor: "#002c5f",
                                    color: "white",
                                    borderRadius: 2,
                                    textAlign: {xs: "center", md: "left"},
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: {xs: "18px", md: "20px"},
                                        margin: "0 0 12px",
                                        color: "#fff",
                                        lineHeight: "1.75rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    The Cost of Doing Nothing
                                </Box>
                                <Box sx={{fontSize: {xs: "14px", md: "16px"}, margin: " 0 0 16px", color: "#fff"}}>
                                    Mental health issues cost employers billions annually in lost productivity,
                                    absenteeism, and healthcare costs.
                                </Box>
                                {[
                                    "Higher turnover and recruitment costs",
                                    "Increased absenteeism and medical leave",
                                    "Decreased team cohesion and collaboration",
                                    "Negative impact on company culture and reputation",
                                ].map((issue, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            fontSize: {xs: "14px", md: "16px"},
                                            display: "flex",
                                            alignItems: "center",
                                            mb: 1,
                                            justifyContent: {xs: "start"},
                                        }}
                                    >
                                        <CheckCircleIcon sx={{color: "#FE6A00", mr: 1}}/> {issue}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                p: {xs: "24px", md: "32px"},
                                borderRadius: 2,
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                                borderTop: "13px solid #FF7F1E",
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: {xs: "20px", md: "24px"},
                                    color: "#012765",
                                    margin: "0 0 24px",
                                    fontWeight: "700",
                                    lineHeight: "2rem",
                                }}
                            >
                                Our Corporate Wellness Solutions
                            </Box>
                            {wellnessSolutions.map((item, index) => (
                                <Box key={index} sx={{mt: 2, display: "flex", alignItems: "flex-start"}}>
                                    <Box
                                        sx={{
                                            padding: "15px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            backgroundColor: "#E5E9EF",
                                            mb: 2,
                                            minWidth: "50px",
                                            minHeight: "50px",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box sx={{ml: 2, mb: 1}}>
                                        <Box
                                            sx={{
                                                fontSize: {xs: "16px", md: "18px"},
                                                color: "#012765",
                                                margin: "0 0 4px",
                                                fontWeight: "700",
                                                lineHeight: "1.75rem",
                                            }}
                                        >
                                            {item.title}
                                        </Box>
                                        <Box sx={{fontSize: {xs: "14px", md: "16px"}, color: "#4b5563"}}>
                                            {item.description}
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                            <Divider sx={{my: 3, width: "100%"}}/>
                            <Button
                                sx={{
                                    padding: "12px 24px",
                                    backgroundColor: "#fe6a00",
                                    fontSize: "16px",
                                    color: "#fff",
                                    fontWeight: "600",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    width: "100%",
                                    '&:hover': {backgroundColor: "#e65a00"},
                                }}
                            >
                                Request a Demo
                            </Button>
                            <Box
                                sx={{
                                    fontSize: "14px",
                                    color: "#6b7280",
                                    margin: "12px 0 0",
                                    lineHeight: "1.25rem",
                                    textAlign: "center",
                                }}
                            >
                                No commitment required. See how we can help your team.
                            </Box>
                        </Box>
                    </Grid>

                </Grid>


            </Container>
        </Box>
    )
        ;
}

export default MentalHealth;
