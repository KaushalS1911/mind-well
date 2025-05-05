import React from 'react';
import {Avatar, Box, Card, Container, Grid} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BoltIcon from "@mui/icons-material/Bolt";

function SelfHelpTools() {
    return (

        <Box component="section" sx={{ padding: {sm:"96px 0 0 0",xs:"66px 0 30px 0"}, mt: {md: 10, xs: 0},mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' }}}>
            <Container maxWidth={"xl"}>
                <Box className={"Montserrat"} sx={{
                    color: "#012765",
                    fontWeight: "700",
                    margin: "0 0 32px",
                    lineHeight: "2rem",
                    fontSize: "24px",
                }}>
                    Self-Help Tools
                </Box>
                <Grid container spacing={2}>
                    {[
                        {
                            icon: <AssignmentIcon sx={{fontSize: 32, color: "#012765"}}/>,
                            title: "Mood Tracker",
                            description: "Track your daily moods, identify patterns, and gain insights into factors that influence your emotional wellbeing.",
                            link: "Try Tool →"
                        },
                        {
                            icon: <GraphicEqIcon sx={{fontSize: 32, color: "#012765"}}/>,
                            title: "Guided Meditation",
                            description: "Access a collection of guided meditations designed for stress reduction, improved focus, and better sleep.",
                            link: "Try Tool →"
                        },
                        {
                            icon: <ChatBubbleOutlineIcon sx={{fontSize: 32, color: "#012765"}}/>,
                            title: "Thought Journal",
                            description: "Challenge negative thinking patterns with this interactive CBT-based tool for identifying and reframing unhelpful thoughts.",
                            link: "Try Tool →"
                        },
                        {
                            icon: <BoltIcon sx={{fontSize: 32, color: "#012765"}}/>,
                            title: "Stress Relief Exercises",
                            description: "Quick breathing techniques and progressive relaxation exercises to help manage stress and anxiety in the moment.",
                            link: "Try Tool →"
                        }
                    ].map((tool, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                            <Card sx={{
                                p: "24px",
                                borderRadius: 3,
                                boxShadow: 1,
                                bgcolor: "#F9FAFB",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <Box sx={{display: "flex", justifyContent: "left", mb: "16px"}}>
                                    <Avatar sx={{bgcolor: "#E7EAEE", width: 56, height: 56}}>
                                        {tool.icon}
                                    </Avatar>
                                </Box>
                                <Box sx={{color: "#012765", fontSize: "16px", mb: "12px", fontWeight: "700"}}>
                                    {tool.title}
                                </Box>
                                <Box sx={{
                                    fontSize: 14,
                                    mb: "16px",
                                    color: "#4b5563",
                                    lineHeight: "1.25rem",
                                    textAlign:"justify",
                                }}>
                                    {tool.description}
                                </Box>
                                <Box sx={{
                                    fontSize: 14,
                                    color: "#FE6A00",
                                    fontWeight: "500",
                                    lineHeight: "1.25rem",
                                    cursor: "pointer",
                                    transition: ".3s",
                                    "&:hover": {color: "#012765"}
                                }}>
                                    {tool.link}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default SelfHelpTools;