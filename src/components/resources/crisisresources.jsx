import React from "react";
import {Container, Grid, Box, Typography, Card, CardContent, TextField, Button} from "@mui/material";
import {Phone} from "@mui/icons-material";


const crisisResources = [
    {
        title: "National Suicide Prevention Lifeline",
        description: "24/7, free and confidential support for people in distress.",
        icon: <Phone sx={{color: "#FF7A00", fontSize: 20}}/>,
        contact: "988",
    },
    {
        title: "Crisis Text Line",
        description: "Text with a trained crisis counselor 24/7.",
        contact: "Text HOME to 741741",
    },
    {
        title: "Emergency ServicesShap",
        description: "For immediate danger, call emergency services.",
        icon: <Phone sx={{color: "#FF7A00", fontSize: 20}}/>,
        contact: "911",
    },
];

function CrisisResources() {
    return (
        <Container maxWidth={"xl"} sx={{mt: 4, padding: "30px 0 0 0"}}>
            {/* Crisis Resources Section */}
            <Box sx={{backgroundColor: "#F8FAFC", p: 3, borderRadius: 2, padding: "40px", margin: "0 0 60px"}}>
                <Box sx={{
                    color: "#012765",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "32px",
                    margin: "0 0 24px"
                }}>
                    Crisis Resources
                </Box>
                <Box sx={{color: "#4B5563", margin: "0 0 32px", fontSize: "16px"}}>
                    If you or someone you know is experiencing a mental health emergency, please contact these resources
                    for immediate support.
                </Box>

                {/* Crisis Resource Cards */}
                <Grid container spacing={2}>
                    {crisisResources.map((resource, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box sx={{boxShadow: 1, borderRadius: 2, padding: "24px", height: "100%"}}>
                                <Box>
                                    <Box fontWeight="bold" sx={{
                                        color: "#012765",
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        margin: "0 0 8px"
                                    }}>
                                        {resource.title}
                                    </Box>
                                    <Box sx={{
                                        color: "#4B5563",
                                        fontSize: "14px",
                                        margin: "0 0 16px",
                                        lineHeight: "20px"
                                    }}>
                                        {resource.description}
                                    </Box>
                                    <Box fontWeight="bold" alignItems={"center"} display={"flex"}
                                         sx={{color: "#FE6A00", gap: "5px"}}>
                                        {resource.icon} {resource.contact}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Note Section */}
                <Box sx={{backgroundColor: "#ECEFF3", padding: "16px", margin: "24px 0 0", borderRadius: 1}}>
                    <Box sx={{fontSize: "14px", color: "#012765"}}>
                        <b>Note:</b> Emotionally Yours is not a crisis service. If you are experiencing a mental health
                        emergency, please contact the resources above for immediate assistance.
                    </Box>
                </Box>
            </Box>

            {/* Newsletter Subscription Section */}
            <Box
                sx={{
                    backgroundColor: "#FE6A00",
                    padding: "40px",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                }}
            >
                {/* Left Section - 50% Width */}
                <Box sx={{flex: 1, minWidth: "50%"}}>
                    <Box sx={{color: "#FFFFFF", fontSize: "24px", fontWeight: "700", marginBottom: "12px"}}>
                        Subscribe to Our Mental Wellness Newsletter
                    </Box>
                    <Box sx={{color: "#FFFFFF", fontSize: "16px"}}>
                        Get the latest mental health tips, resources, and insights delivered to your inbox bi-weekly.
                    </Box>
                </Box>

                {/* Right Section - 50% Width (Input, Button & Privacy Text) */}
                <Box sx={{padding: {md: "0 0 0 24px", sm: ""}, width: "100%"}}>
                    {/* Input & Button Section */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {xs: "column", sm: "row"},
                            width: "100%",
                            gap: "10px"
                        }}
                    >
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Your email address"
                            variant="outlined"
                            sx={{
                                borderRadius: "8px",
                                flex: 1,
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    backgroundColor: "#FFFFFF",
                                },
                                "& .MuiInputBase-input": {
                                    padding: "12px 16px",
                                },
                            }}
                        />
                        <Box
                            variant="contained"
                            sx={{
                                backgroundColor: "#012765",
                                color: "#FFFFFF",
                                padding: "12px 24px",
                                borderRadius: "0.375rem",
                                transition: "0.3s",
                                cursor: "pointer",
                                "&:hover": {backgroundColor: "#011B40"},
                            }}
                        >
                            Subscribe
                        </Box>
                    </Box>


                    {/* Privacy Text Below */}
                    <Box sx={{color: "#FFFFFF", fontSize: "12px", width: "100%", margin: "12px 0 0"}}>
                        We respect your privacy. Unsubscribe at any time.
                    </Box>
                </Box>

            </Box>
        </Container>
    );
}

export default CrisisResources;
