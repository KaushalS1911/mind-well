import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const offerings = ["Individual Therapy", "Couples Therapy", "Teen Counseling", "Group Sessions"];

const therapyOptions = [
    { title: "Cognitive Behavioral Therapy (CBT)", description: "Change negative patterns of thinking and behavior." },
    { title: "Mindfulness-Based Therapy", description: "Become more aware of thoughts without judgment." },
    { title: "Psychodynamic Therapy", description: "Understand how past experiences influence present behavior." },
    { title: "Solution-Focused Therapy", description: "Focus on solutions rather than problems." }
];

const Offerings = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedTherapy, setSelectedTherapy] = useState(null);

    return (
        <Box sx={{ py: 8, backgroundColor: "white" }}>
            <Container maxWidth="xxl">
                {/* Title */}
                <Typography variant="h4" align="center" color="#012765" sx={{
                    fontWeight: "700",
                }}>
                    Our Mental Healthcare Offerings
                </Typography>
                <Typography variant="body1" align="center" sx={{ color: "#4B5563", mt: 1, mb: 7.5 }}>
                    Comprehensive support for your mental wellbeing, tailored to your unique <br/> needs and preferences.
                </Typography>

                {/* Tabs Section */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 7 }}>
                    <Tabs
                        value={selectedTab}
                        onChange={(event, newValue) => setSelectedTab(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            "& .MuiTabs-indicator": { display: "none" },
                            "& .MuiTab-root": {
                                textTransform: "none",
                                fontWeight: 500,
                                px: 3,
                                fontSize: 16,
                                borderRadius: 2,
                                backgroundColor: selectedTab === offerings.indexOf(offerings[selectedTab]) ? "#E5E7EB" : "#F3F4F6",
                                color: selectedTab === offerings.indexOf(offerings[selectedTab]) ? "#374151" : "#1F2937",
                                mx: 1
                            },
                            "& .Mui-selected": {
                                backgroundColor: "#012765",
                                color: "#fff"
                            }
                        }}
                    >
                        {offerings.map((offer, index) => (
                            <Tab key={index} label={offer} />
                        ))}
                    </Tabs>
                </Box>

                <Grid container spacing={4}>
                    {/* Left Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{
                            color:"#012765",
                            fontWeight: 700,
                        }}>{offerings[selectedTab]}</Typography>
                        <Typography variant="body1" sx={{ color: "#515863", mt: 1, mb: 2,fontSize: 17,width:"90%" }}>
                            One-on-one therapy sessions with a licensed professional who can help you navigate life's
                            challenges, manage symptoms, and develop coping strategies.
                        </Typography>

                        {/* Features List */}
                        {[
                            { text: "Personalized approach", subtext: "Treatment tailored to your specific needs and goals" },
                            { text: "Flexible scheduling", subtext: "Book sessions that fit into your busy life" },
                            { text: "Private and secure", subtext: "Confidential sessions in a safe environment" }
                        ].map((feature, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <CheckCircleIcon sx={{ color: "#FF7F1E", fontSize: 20, mr: 1 }} />
                                <Box>
                                    <Typography fontWeight="bold">{feature.text}</Typography>
                                    <Typography variant="body2" sx={{ color: "#4B5563" }}>{feature.subtext}</Typography>
                                </Box>
                            </Box>
                        ))}

                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "#FF7F1E", textTransform: "none", fontWeight: "bold", mt: 2 }}
                        >
                            Learn More
                        </Button>
                    </Grid>

                    {/* Right Section */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                            <Typography variant="h6" fontWeight="bold">
                                What type of therapy are you looking for?
                            </Typography>

                            {therapyOptions.map((therapy, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: 2,
                                        mt: 2,
                                        borderRadius: 2,
                                        backgroundColor: "#F9FAFB",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        "&:hover": { backgroundColor: "#E6EAF3" }
                                    }}
                                    onClick={() => setSelectedTherapy(index)}
                                >
                                    {selectedTherapy === index ? (
                                        <RadioButtonCheckedIcon sx={{ color: "#012765", fontSize: 22, mr: 2 }} />
                                    ) : (
                                        <RadioButtonUncheckedIcon sx={{ color: "#012765", fontSize: 22, mr: 2 }} />
                                    )}

                                    <Box>
                                        <Typography fontWeight="bold">{therapy.title}</Typography>
                                        <Typography variant="body2" sx={{ color: "#4B5563" }}>
                                            {therapy.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Offerings;
