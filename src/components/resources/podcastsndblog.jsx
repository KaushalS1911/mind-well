import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Avatar, Chip, Container,
} from "@mui/material";
import {Mic, PlayCircle} from "@mui/icons-material";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';


const articles = [
    {
        icon: <KeyboardVoiceIcon fontSize={"large"}/>,
        name: "Podcast Episode",
        title: "The Psychology of Peak Performance",
        tag: "Podcast",
        author: "32 min listen",
        link: "Listen Now →",
        description: "Dr. Marcus Johnson discusses mental strategies that high-performing professionals use to maintain focus, manage pressure, and achieve success."

    },
    {
        icon: <PlayCircleFilledIcon fontSize={"large"}/>,
        name: "Video Tutorial",
        title: "5-Minute Anxiety Relief Techniques",
        tag: "Video",
        author: "8 min video",
        link: "Listen Now →",
        description: "Follow along with Dr. Lisa Park as she demonstrates quick, effective strategies for managing anxiety that can be done anywhere."

    },
    {
        icon: <KeyboardVoiceIcon fontSize={"large"}/>,
        name: "Podcast Episode",
        title: "Student Mental Health: Beyond Academics",
        tag: "Podcast",
        author: "28 min listen",
        link: "Listen Now →",
        description: "Robert Nguyen discusses the unique mental health challenges students face and practical strategies for thriving in academic environments."

    }
];


const blogs = [
    {
        date: "Jul 12, 2023",
        category: "Work Stress",
        title: "Setting Healthy Boundaries at Work: A Guide for Professionals",
        description:
            "Learn practical strategies for establishing and maintaining boundaries that protect your mental health while advancing your career.",
        action: "Read Article →",
    },
    {
        date: "Jul 5, 2023",
        category: "Student Life",
        title: "Exam Anxiety: Strategies for Staying Calm and Performing at Your Best",
        description:
            "Discover evidence-based techniques to manage test anxiety and optimize your performance during high-pressure academic situations.",
        action: "Read Article →",
    },
];

function PodcastsAndBlog() {
    return (
        <Container maxWidth={"xl"}>
            <Box>
                {/* Podcasts & Videos Section */}
                <Box mb={5}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
                        mb: 4,
                        mt: 4
                    }}>
                        <Box className={"Montserrat"} sx={{
                            color: "#012765",
                            fontSize: "24px",
                            fontWeight: "700",
                            lineHeight: "2rem",
                        }}>
                            Podcasts & Videos
                        </Box>
                        <Box sx={{
                            fontSize: "16px",
                            color: "#FE6A00", fontWeight: "500", transition: ".3s",
                            "&:hover": {
                                color: "#012765"
                            }
                        }}>
                            View All Media →
                        </Box>
                    </Box>


                    <Grid container spacing={2} mb={4}>
                        {articles.map((article, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box sx={{borderRadius: 3, boxShadow: 1}}>
                                    {/* Top Gray Section */}
                                    <Box
                                        sx={{
                                            bgcolor: "#0127650D",
                                            p: "16px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        <Box sx={{
                                            color: "#FE6A00",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>
                                            {article.icon}
                                        </Box>
                                        <Box sx={{
                                            textAlign: "center",
                                            mt: 1,
                                            color: "#012765",
                                            fontSize: "16px",
                                            fontWeight: "500"
                                        }}>
                                            {article.name}
                                        </Box>
                                    </Box>


                                    <Box sx={{p: "24px"}}>
                                        <Chip
                                            label={article.tag}
                                            size="small"
                                            sx={{
                                                bgcolor: "#0127651A",
                                                color: "#012765",
                                                alignItems: "center",
                                                fontSize: 12,
                                                fontWeight: 500,
                                                mb: "12px",
                                                padding: "4px 12px",
                                            }}
                                        />
                                        <Box sx={{
                                            color: "#012765",
                                            margin: "0 0 8px",
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            lineHeight: "1.75rem",
                                        }}>
                                            {article.title}
                                        </Box>
                                        <Box sx={{
                                            fontSize: "14px",
                                            mb: "16px",
                                            lineHeight: "1.25rem",
                                            color: "#4b5563",
                                        }}>
                                            {article.description}
                                        </Box>

                                        {/* Author Section */}
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                            <Box display="flex" alignItems="center">
                                                <Box variant="body2" sx={{
                                                    color: "#6B7280",
                                                    fontSize: 12,
                                                    lineHeight: "1rem",
                                                }}>
                                                    {article.author}
                                                </Box>
                                            </Box>

                                            {/* Read More Link */}
                                            <Box
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "#fe6A00",
                                                    fontWeight: "500",
                                                    lineHeight: "1.25rem",
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
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* From Our Blog Section */}
                <Box>
                    {/* Header Section */}
                    <Box className={"Montserrat"} display="flex" justifyContent="space-between" alignItems="center">
                        <Box sx={{
                            color: "#012765",
                            fontSize: "24px",
                            fontWeight: "700",
                            lineHeight: "2rem",
                        }}>
                            From Our Blog
                        </Box>
                        <Button sx={{
                            fontSize: "16px",
                            color: "#FE6A00",
                            fontWeight: "500",
                            transition: ".3s",
                            "&:hover": {color: "#012765"}
                        }}>Visit Blog →</Button>
                    </Box>

                    {/* Blog Cards */}
                    <Grid container spacing={4} mt={2}>
                        {blogs.map((blog, index) => (
                            <>
                                <Grid item xs={12} sm={4} md={2} key={`image-${index}`}>
                                    <Box sx={{
                                        color: "#1f2937",
                                        padding: "16px",
                                        backgroundColor: "#E7EAEE",
                                        borderRadius: "0.375rem",
                                    }}>
                                        <Box sx={{
                                            fontSize: "16px",
                                            color: "#012765",
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            Blog Image
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} key={`content-${index}`}>
                                    <Box fontSize={12} color="#6b7280" mb="12px">
                                        {blog.date} • <span style={{
                                        fontSize: "12px",
                                        ml: "8px",
                                        color: "#FE6A00",
                                        fontWeight: "400"
                                    }}>{blog.category}</span>
                                    </Box>
                                    <Box fontSize={18} fontWeight={700} sx={{color: "#012765", mb: "8px"}}>
                                        {blog.title}
                                    </Box>
                                    <Box fontSize={14} color="#4B5563" mb="12px">
                                        {blog.description}
                                    </Box>
                                    <Box fontSize={14} fontWeight={500} color="#FE6A00" mt={1.7} sx={{
                                        transition: ".3s", cursor: "pointer", "&:hover": {color: "#012765"}
                                    }}>
                                        {blog.action}
                                    </Box>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default PodcastsAndBlog;
