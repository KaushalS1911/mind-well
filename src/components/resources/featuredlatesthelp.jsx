import React from "react";
import {Box, Typography, Button, Chip, Grid, Card, CardContent, Avatar, Container} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BoltIcon from "@mui/icons-material/Bolt"

function FeaturedLatestHelp() {

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
        <Box sx={{ px: 4, p:"96px 0 0 0" }}>
            {/* Header */}
            <Typography variant="h4" fontWeight={700} textAlign="center" mb={"16px"} sx={{
                color:"#012765"
            }}>
                Mental Health Resources
            </Typography>
            <Typography variant="body1" textAlign="center" color="#4B5563" mb={3} sx={{
                fontSize: 18,
            }}>
                Explore our collection of articles, guides, and tools designed to support <br/> your mental wellness journey.
            </Typography>

            {/* Filters */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap", // Allows buttons to wrap on smaller screens
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
                            // px: isMobile ? 2 : 2.8, // Slightly smaller padding on mobile
                            bgcolor: label === "All Resources" ? "#012765" : "#F5F6FA",
                            color: label === "All Resources" ? "#fff" : "#012765",
                            boxShadow: "none",
                            whiteSpace: "nowrap", // Prevents text from breaking
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
            <Typography variant="h5" mb={2} sx={{
                color:"#012765",
                fontWeight:"800",
                mt:5
            }}>
                Featured Resources
            </Typography>
            <Grid container spacing={2} mb={4}>
                {resources.map((resource, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 1,height:"100%" }}>
                            <CardContent sx={{ p: 0 }}>
                                <Typography sx={{
                                    bgcolor: "#D7DAE5",
                                    p: 3,
                                    fontWeight: 700,
                                    display:"flex",
                                    justifyContent:"center",
                                    textAlign:"center",
                                    color:"#012765",
                                    fontSize: 20,
                                }}>
                                    {resource.title}
                                </Typography>
                                <CardContent sx={{ p: "24px" }}>
                                    <Chip
                                        label={resource.tag}
                                        size="small"
                                        sx={{ bgcolor: "#FFE4D0", color: "#FF7F1E", fontSize: 11,fontWeight: 600,mb:"12px" }}
                                    />
                                    <Typography fontWeight={600} mt={1} sx={{
                                        fontSize: 20,
                                        color:"#012765",
                                        fontWeight: 700,
                                    }}>
                                        {resource.subtitle}
                                    </Typography>
                                    <Typography variant="body2" mt={1} color="rgb(75 85 99 / var(--tw-text-opacity, 1))" sx={{
                                        fontSize: 15,
                                        mb:"16px"
                                    }}>
                                        {resource.description}
                                    </Typography>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}>
                                        <Typography variant="body2" mt={1} sx={{
                                            color:"rgb(107 114 128 / var(--tw-text-opacity, 1))"
                                        }}>
                                            {resource.time}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="#012765"
                                            mt={1}
                                            sx={{
                                                cursor: "pointer",
                                                fontSize: 16,
                                                fontWeight: 500 ,
                                                transition:".3s",
                                                "&:hover": {
                                                    color:"rgb(254 106 0 / var(--tw-text-opacity, 1))"
                                                }

                                        }}
                                        >
                                            {resource.link}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Latest Articles */}
            <Typography variant="h5" fontWeight={700} mb={2} sx={{
                color:"#012765"
            }}>
                Latest Articles
            </Typography>
            <Grid container spacing={2} mb={4}>
                {articles.map((article, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 1,height:"100%" }}>
                            {/* Top Gray Section */}
                            <Typography sx={{ bgcolor: "#E7EAEE", p: 2, fontWeight: 500,display:"flex",justifyContent:"center",color:"#012765" }}>
                                Article Thumbnail
                            </Typography>

                            <CardContent sx={{ p: "24px" }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <Typography variant="body2" color="gray" sx={{
                                        fontSize:"12px"
                                    }}>{article.date}</Typography>
                                    <Chip
                                        label={article.tag}
                                        size="small"
                                        sx={{ bgcolor: "#E8EAF0", color: "#012765",alignItems:"center", fontSize: 12,fontWeight: 500}}
                                    />
                                </Box>
                                <Typography fontWeight={700} mt={1.4} sx={{
                                    color:"rgb(1 39 101 / var(--tw-text-opacity, 1))"
                                }}>
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="#4B5563" mt={1} >
                                    {article.description}
                                </Typography>

                                {/* Author Section */}
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <Avatar sx={{ bgcolor: "#012765", color: "#fff", width: 32, height: 32, fontSize: 13,fontWeight:"700" }}>
                                            {article.initials}
                                        </Avatar>
                                        <Typography variant="body2" ml={1} sx={{
                                            color:"4B5563",
                                            fontSize: 12,
                                        }}>
                                            {article.author}
                                        </Typography>
                                    </Box>

                                    {/* Read More Link */}
                                    <Typography
                                        variant="body2"
                                        fontWeight={500}
                                        color="#FF7F1E"
                                        mt={2}
                                        sx={{
                                            cursor: "pointer",
                                            transition:".3s",
                                            "&:hover": {
                                                color:"#012765"
                                            }
                                    }}
                                    >
                                        {article.link}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Self-Help Tools */}
            <Typography variant="h5" fontWeight={700} mb={2} sx={{
                fontSize: 24,
                color:"#012765",
                mb:"32px",
                fontWeight: 700,
                mt:7
            }}>
                Self-Help Tools
            </Typography>
            <Grid container spacing={2}>
                {[
                    {
                        icon: <AssignmentIcon sx={{ fontSize: 32, color: "#012765" }} />,
                        title: "Mood Tracker",
                        description: "Track your daily moods, identify patterns, and gain insights into factors that influence your emotional wellbeing.",
                        link: "Try Tool →"
                    },
                    {
                        icon: <GraphicEqIcon sx={{ fontSize: 32, color: "#012765" }} />,
                        title: "Guided Meditation",
                        description: "Access a collection of guided meditations designed for stress reduction, improved focus, and better sleep.",
                        link: "Try Tool →"
                    },
                    {
                        icon: <ChatBubbleOutlineIcon sx={{ fontSize: 32, color: "#012765" }} />,
                        title: "Thought Journal",
                        description: "Challenge negative thinking patterns with this interactive CBT-based tool for identifying and reframing unhelpful thoughts.",
                        link: "Try Tool →"
                    },
                    {
                        icon: <BoltIcon sx={{ fontSize: 32, color: "#012765" }} />,
                        title: "Stress Relief Exercises",
                        description: "Quick breathing techniques and progressive relaxation exercises to help manage stress and anxiety in the moment.",
                        link: "Try Tool →"
                    }
                ].map((tool, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <Card sx={{
                            p: "20px",
                            borderRadius: 3,
                            boxShadow: 1,
                            textAlign: "left",
                            bgcolor: "#F8FAFC",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <Box sx={{ display: "flex", justifyContent: "left", mb: "16px" }}>
                                <Avatar sx={{ bgcolor: "#E7EAEE", width: 56, height: 56 }}>
                                    {tool.icon}
                                </Avatar>
                            </Box>
                            <Typography fontWeight={700} sx={{ color: "#012765", fontSize: "16px", mb: "12px",fontWeight:"700" }}>
                                {tool.title}
                            </Typography>
                            <Typography variant="body2" color="#4B5563" sx={{
                                fontSize: 14,
                                mb: "auto" // Pushes the link to the bottom, ensuring equal height
                            }}>
                                {tool.description}
                            </Typography>
                            <Typography variant="body2" fontWeight={500} color="#FE6A00" sx={{
                                cursor: "pointer",
                                mt:"20px",
                                transition: ".3s",
                                "&:hover": { color: "#012765" }
                            }}>
                                {tool.link}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Box>
        </Container>
    );
}

export default FeaturedLatestHelp;
