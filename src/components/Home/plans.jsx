import React from "react";
import {Box, Card, CardContent, Typography, Button, Grid, Chip, Container, Divider} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const plans = [
    {
        title: "Startup",
        subtitle: "For teams of 10-50 employees",
        features: [
            "4 therapy sessions per employee/year",
            "Quarterly webinars",
            "Basic reporting",
            "Digital resource library",
        ],
        buttonText: "Learn More",
        highlight: false,
    },
    {
        title: "Growth",
        subtitle: "For teams of 51-200 employees",
        features: [
            "8 therapy sessions per employee/year",
            "Monthly webinars",
            "Advanced reporting and insights",
            "2 manager training sessions",
            "Customized resource library",
        ],
        buttonText: "Learn More",
        highlight: true,
    },
    {
        title: "Enterprise",
        subtitle: "For organizations with 200+ employees",
        features: [
            "Unlimited therapy sessions",
            "On-demand webinars and workshops",
            "Comprehensive analytics dashboard",
            "Quarterly organizational assessments",
            "Dedicated account manager",
        ],
        buttonText: "Contact Sales",
        highlight: false,
    },
];

function Plans() {
    return (
        <Box sx={{padding: "0 0 56px 0", backgroundColor: "#F9FAFB"}}>
            <Container maxWidth={"xl"}>
                <Box sx={{
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    padding: "40px",
                    borderRadius: "10px"
                }}>
                    <Box className={"Montserrat"} sx={{
                        fontSize: "24px",
                        margin: "0 0 24px",
                        color: "#012765",
                        fontWeight: "700",
                        lineHeight: "2rem",
                        textAlign: "center"
                    }}>
                        Flexible Plans for Organizations of All Sizes
                    </Box>
                    <Grid container spacing={3} justifyContent="center">
                        {plans.map((plan, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        border: plan.highlight ? "2px solid #FE6A00" : "1px solid #ddd",
                                        boxShadow: plan.highlight ? "0px 4px 10px rgba(255, 102, 0, 0.2)" : "none",
                                        position: "relative",
                                        borderRadius: "10px",
                                        height: "100%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box>
                                        {plan.highlight && (
                                            <Chip
                                                label="MOST POPULAR"
                                                color="warning"
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 0,
                                                    borderRadius: "0 5px 0 10px",
                                                    fontWeight: "bold"
                                                }}
                                            />
                                        )}
                                        <Box sx={{
                                            padding: "16px 24px",
                                            backgroundColor: plan.highlight ? "#FFF0E5" : "#f9fafb",
                                            color: "#1f2937",
                                        }}>
                                            <Box sx={{
                                                fontSize: "20px",
                                                color: "#012765",
                                                fontWeight: "700",
                                                lineHeight: "1.75rem",
                                            }}>
                                                {plan.title}
                                            </Box>
                                            <Box sx={{
                                                fontSize: "14px",
                                                color: "#4b5563",
                                                lineHeight: "1.25rem",
                                            }}>
                                                {plan.subtitle}
                                            </Box>
                                        </Box>
                                        <Divider sx={{
                                            width: "100%",
                                            color: "grey",
                                        }}/>
                                        <Box sx={{
                                            padding: "24px",
                                        }}>
                                            <Box sx={{textAlign: "left", marginTop: 2}}>
                                                {plan.features.map((feature, idx) => (
                                                    <Box key={idx} sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        fontSize: "16px",
                                                        color: "#374151",
                                                        mb: 1
                                                    }}>
                                                        <CheckCircleIcon sx={{color: "#FE6A00", mr: 1}}/> {feature}
                                                    </Box>
                                                ))}
                                            </Box>
                                            <Button
                                                variant={plan.highlight ? "contained" : "outlined"}
                                                color="warning"
                                                fullWidth
                                                sx={{
                                                    padding: "8px 0",
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    textAlign: "center",
                                                    mt: 2,
                                                    transition: "background-color 0.3s",
                                                    '&:hover': {
                                                        backgroundColor: "#FE6A00",
                                                        color: "white",
                                                    }
                                                }}
                                            >
                                                {plan.buttonText}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Plans;
