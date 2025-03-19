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
            <Box sx={{px: 3, py: 5,}}>
                {/* Podcasts & Videos Section */}
                <Box mb={5}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
                        mb: 4
                    }}>
                        <Typography variant="h5" fontWeight={700} sx={{
                            color: "#012765"
                        }}>
                            Podcasts & Videos
                        </Typography>
                        <Button sx={{color: "#FE6A00", fontWeight: "600",transition: ".3s",
                            "&:hover": {
                                color:"#012765"
                            }}}>
                            View All Media →
                        </Button>
                    </Box>


                    <Grid container spacing={2} mb={4}>
                        {articles.map((article, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card sx={{borderRadius: 3, boxShadow: 1}}>
                                    {/* Top Gray Section */}
                                    <Typography
                                        sx={{
                                            bgcolor: "#E7EAEE",
                                            p: 2,
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
                                            display: "flex",
                                            justifyContent: "center",
                                            mt: 1,
                                            color: "#012765"
                                        }}>
                                            {article.name}
                                        </Box>
                                    </Typography>


                                    <CardContent sx={{p: "24px"}}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                            <Chip
                                                label={article.tag}
                                                size="small"
                                                sx={{
                                                    bgcolor: "#E8EAF0",
                                                    color: "#012765",
                                                    alignItems: "center",
                                                    fontSize: 12,
                                                    fontWeight: 500
                                                }}
                                            />
                                        </Box>
                                        <Typography fontWeight={700} mt={1.4} sx={{
                                            color: "rgb(1 39 101 / var(--tw-text-opacity, 1))",
                                            fontSize: "18px"
                                        }}>
                                            {article.title}
                                        </Typography>
                                        <Typography variant="body2" color="#4B5563" mt={1}>
                                            {article.description}
                                        </Typography>

                                        {/* Author Section */}
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                            <Box display="flex" alignItems="center" mt={2}>
                                                {/*<Avatar sx={{ bgcolor: "#012765", color: "#fff", width: 32, height: 32, fontSize: 13,fontWeight:"700" }}>*/}
                                                {/*    {article.initials}*/}
                                                {/*</Avatar>*/}
                                                <Typography variant="body2" sx={{
                                                    color: "#6B7280",
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
                                                    transition: ".3s",
                                                    "&:hover": {
                                                        color: "#012765"
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
                </Box>

                {/* From Our Blog Section */}
                <Box sx={{maxWidth: "1200px", mx: "auto", p: 2}}>
                    {/* Header Section */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography fontSize={24} fontWeight={700} color="#1E293B">
                            From Our Blog
                        </Typography>
                        <Button sx={{
                            color: "#FE6A00",
                            fontWeight: "500",
                            transition: ".3s",
                            "&:hover": {
                                color:"#012765"
                            }
                        }}>Visit Blog →</Button>
                    </Box>

                    {/* Blog Cards in 4-Column Grid */}
                    <Grid container spacing={4} mt={2}>
                        {/* Blog 1 */}
                        <Grid item xs={12} sm={2}>
                            <Box
                                sx={{
                                    bgcolor: "#E7EAEE",
                                    width: "100%",
                                    height: 50,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // borderRadius: 2,
                                    fontWeight: "500",
                                    color: "#012765",
                                }}
                            >
                                Blog Image
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography fontSize={12} color="#64748B">
                                {blogs[0].date} •{" "}
                                <span style={{color: "#FE6A00", fontWeight: "400"}}>{blogs[0].category}</span>
                            </Typography>
                            <Typography fontSize={18} fontWeight={700} mt={0.5}
                                        sx={{
                                            color: "#012765",
                                        }}>
                                {blogs[0].title}
                            </Typography>
                            <Typography fontSize={14} color="#4B5563" mt={0.5}>
                                {blogs[0].description}
                            </Typography>
                            <Typography fontSize={14} fontWeight={500} color="#FE6A00" mt={1.7} sx={{transition:".3s",cursor: "pointer","&:hover": {
                                    color:"#012765"
                                }}}>
                                {blogs[0].action}
                            </Typography>
                        </Grid>

                        {/* Blog 2 */}
                        <Grid item xs={12} sm={2}>
                            <Box
                                sx={{
                                    bgcolor: "#E7EAEE",
                                    width: "100%",
                                    height: 50,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // borderRadius: 2,
                                    fontWeight: "500",
                                    color: "#012765",
                                }}
                            >
                                Blog Image
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography fontSize={12} color="#64748B">
                                {blogs[1].date} •{" "}
                                <span style={{color: "#FE6A00", fontWeight: "400"}}>{blogs[1].category}</span>
                            </Typography>
                            <Typography fontSize={18} fontWeight={700} mt={0.5} color="#1E293B">
                                {blogs[1].title}
                            </Typography>
                            <Typography fontSize={14} color="#4B5563" mt={0.5}>
                                {blogs[1].description}
                            </Typography>
                            <Typography fontSize={14} fontWeight={500} color="#FE6A00" mt={1.7} sx={{transition:".3s",cursor: "pointer","&:hover": {
                                    color:"#012765"
                                }}}>
                                {blogs[1].action}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default PodcastsAndBlog;
