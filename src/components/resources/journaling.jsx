import React from "react";
import {Box, Typography, Button, Chip, Grid, Card, CardContent, Avatar, Container} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BoltIcon from "@mui/icons-material/Bolt"

function Journaling() {

    const resources = [
        {
            title: "Mental Health Guide for Professionals",
            subtitle: "Navigating Workplace Stress: A Comprehensive Guide for Professionals",
            tag: "Guide",
            description: "This detailed guide offers practical strategies for managing stress, preventing burnout, and maintaining work-life balance in high-pressure careers. Learn evidence-based techniques that fit into your busy schedule.",
            time: "15 min read",
            link: "Read Guide →"
        },
        {
            title: "Student Wellness Toolkit",
            subtitle: "Student Mental Health Toolkit: Thriving Through Academic Challenges",
            tag: "Toolkit",
            description: "Designed specifically for students, this toolkit provides resources for managing academic stress, coping with exam anxiety, building resilience, and developing healthy study habits that support mental wellbeing.",
            time: "Interactive Resource",
            link: "Access Toolkit →"
        }
    ];

    const articles = [
        {
            date: "May 15, 2023",
            title: "Understanding and Managing Anxiety in High-Pressure Careers",
            tag: "Anxiety",
            author: "Dr. Rachel Chen",
            initials: "DR",
            link: "Read More →",
            description: "Learn practical strategies to identify anxiety triggers in your professional life and develop effective coping mechanisms that fit into your busy schedule."

        },
        {
            date: "June 3, 2023",
            title: "Balancing Academic Excellence and Mental Wellbeing",
            tag: "Student Life",
            author: "Robert Nguyen, LMSW",
            initials: "RN",
            link: "Read More →",
            description: "Discover how to maintain academic performance without sacrificing your mental health through effective time management, self-care, and boundary setting."

        },
        {
            date: "June 18, 2023",
            title: "5-Minute Mindfulness Practices for Busy Professionals",
            tag: "Mindfulness",
            author: "Dr. Lisa Park",
            initials: "LP",
            link: "Read More →",
            description: "Incorporate these quick, effective mindfulness exercises into your daily routine to reduce stress, improve focus, and enhance your overall well-being."

        }
    ];

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{px: {sm:"30px ",xs:"0",xl:"0"}, p: "96px 0 0 0", mt: {md: 10, xs: 0}}}>
                {/* Header */}
                <Box className={"Montserrat"} sx={{
                    color: "#012765",
                    fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
                    margin: "0 0 16px",
                    fontWeight: "700",
                    textAlign: "center"
                }}>
                    Mental Health Resources
                </Box>
                <Box sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    color: "#4b5563",
                    textAlign: "center",
                    lineHeight: "1.75rem",
                }}>
                    Explore our collection of articles, guides, and tools designed to support <br/> your mental wellness
                    journey.
                </Box>

                {/* Filters */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 8,
                        mb: 4,
                    }}
                >
                    {["All Resources", "Articles", "Self-Help Tools", "Videos", "Podcasts"].map((label, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            disableElevation
                            sx={{
                                borderRadius: "20px",
                                textTransform: "none",
                                fontSize: 16,

                                bgcolor: label === "All Resources" ? "#012765" : "#F5F6FA",
                                color: label === "All Resources" ? "#fff" : "#012765",
                                boxShadow: "none",
                                whiteSpace: "nowrap",
                                "&:hover": {
                                    bgcolor: label === "All Resources" ? "#012765" : "#F5F6FA",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>


                {/* Featured Resources */}
                <Box className={"Montserrat"} sx={{
                    color: "#012765",
                    fontWeight: "700",
                    margin: "0 0 32px",
                    lineHeight: "2rem",
                    fontSize: "24px",
                }}>
                    Featured Resources
                </Box>
                <Grid container spacing={4} mb={4}>
                    {resources.map((resource, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{borderRadius: 3, boxShadow: 1, height: "100%"}}>
                                <Box sx={{p: 0}}>
                                    <Box sx={{
                                        bgcolor: "#D9DDE4",
                                        p: "24px",
                                        fontWeight: 700,
                                        textAlign: "center",
                                        color: "#012765",
                                        fontSize: 20,
                                    }}>
                                        {resource.title}
                                    </Box>
                                    <CardContent sx={{p: "24px"}}>
                                        <Chip
                                            label={resource.tag}
                                            size="small"
                                            sx={{
                                                bgcolor: "#fe6a001a",
                                                color: "#fe6a00",
                                                fontSize: 12,
                                                fontWeight: 500,
                                                lineHeight: "1rem",
                                                mb: "12px",
                                                padding: "4px 12px"
                                            }}
                                        />
                                        <Box sx={{
                                            fontSize: 20,
                                            color: "#012765",
                                            fontWeight: 700,
                                            margin: "0 0 12px",
                                            lineHeight: "1.75rem",
                                        }}>
                                            {resource.subtitle}
                                        </Box>
                                        <Box sx={{
                                            fontSize: 16,
                                            mb: "16px",
                                            color: "#4b5563",
                                            width: "95%",
                                            textAlign:"justify"
                                        }}>
                                            {resource.description}
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}>
                                            <Box sx={{
                                                color: "#6b7280",
                                                fontSize: "14px",
                                                lineHeight: "1.25rem",
                                            }}>
                                                {resource.time}
                                            </Box>
                                            <Box
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "#012765",
                                                    transition: ".3s",
                                                    "&:hover": {
                                                        color: "rgb(254 106 0 / var(--tw-text-opacity, 1))"
                                                    }

                                                }}
                                            >
                                                {resource.link}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Latest Articles */}
                <Box className={"Montserrat"} sx={{
                    color: "#012765",
                    fontWeight: "700",
                    margin: "0 0 32px",
                    lineHeight: "2rem",
                    fontSize: "24px",
                }}>
                    Latest Articles
                </Box>
                <Grid container spacing={2} mb={4}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{borderRadius: 3, boxShadow: 1, height: "100%"}}>
                                {/* Top Gray Section */}
                                <Box sx={{
                                    fontSize: "16px",
                                    bgcolor: "#E7EAEE",
                                    p: "16px",
                                    fontWeight: 500,
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#012765"
                                }}>
                                    Article Thumbnail
                                </Box>

                                <Box sx={{p: "24px"}}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 2
                                    }}>
                                        <Box sx={{
                                            fontSize: "12px",
                                            color: "#6b7280",
                                            lineHeight: "1rem",
                                        }}>{article.date}</Box>
                                        <Chip
                                            label={article.tag}
                                            size="small"
                                            sx={{
                                                bgcolor: "#0127651a",
                                                color: "#012765",
                                                alignItems: "center",
                                                padding: "4px 8px",
                                                fontSize: 12,
                                                fontWeight: 500
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{
                                        fontSize: "18px",
                                        margin: "0 0 8px",
                                        fontWeight: "700",
                                        lineHeight: "1.75rem",
                                        color: "#012765",
                                    }}>
                                        {article.title}
                                    </Box>
                                    <Box sx={{
                                        fontSize: "14px",
                                        color: "#4b5563",
                                        mb: "16px",
                                        lineHeight: "1.25rem",
                                        textAlign: "justify"
                                    }}>
                                        {article.description}
                                    </Box>

                                    {/* Author Section */}
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{
                                                bgcolor: "#012765",
                                                color: "#fff",
                                                width: 32,
                                                height: 32,
                                                fontSize: 13,
                                                fontWeight: "700"
                                            }}>
                                                {article.initials}
                                            </Avatar>
                                            <Box sx={{
                                                color: "4B5563",
                                                fontSize: 12,
                                                ml: 1
                                            }}>
                                                {article.author}
                                            </Box>
                                        </Box>

                                        {/* Read More Link */}
                                        <Box
                                            sx={{
                                                fontSize: "14px",
                                                color: "#FE6A00",
                                                fontWeight: "500",
                                                cursor: "pointer",
                                                transition: ".3s",
                                                "&:hover": {
                                                    color: "#012765"
                                                }
                                            }}
                                        >
                                            {article.link}
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Journaling;
