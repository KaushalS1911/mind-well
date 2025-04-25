import React from "react";
import {
    Box,
    Grid,
    Chip,
    Container,
} from "@mui/material";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

// Define a reusable Card component for articles
const ArticleCard = ({ article }) => (
    <Grid item xs={12} md={4}>
        <Box sx={{ borderRadius: 3, boxShadow: 1, height: "100%" }}>
            {/* Top Gray Section */}
            <Box sx={{ bgcolor: "#0127650D", p: 2, fontWeight: 500 }}>
                <Box sx={{ color: "#FE6A00", display: "flex", justifyContent: "center" }}>
                    {article.icon}
                </Box>
                <Box sx={{ textAlign: "center", mt: 1, color: "#012765", fontSize: 16, fontWeight: 500 }}>
                    {article.name}
                </Box>
            </Box>

            <Box sx={{ p: 3 }}>
                <Chip
                    label={article.tag}
                    size="small"
                    sx={{
                        bgcolor: "#0127651A",
                        color: "#012765",
                        alignItems: "center",
                        fontSize: 12,
                        fontWeight: 500,
                        mb: 1.5,
                        padding: "4px 12px",
                    }}
                />
                <Box sx={{
                    color: "#012765",
                    marginBottom: 1,
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: "1.75rem",
                }}>
                    {article.title}
                </Box>
                <Box sx={{
                    fontSize: 14,
                    mb: 2,
                    lineHeight: "1.25rem",
                    color: "#4b5563",
                    textAlign: "justify",
                }}>
                    {article.description}
                </Box>

                {/* Author Section */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Box variant="body2" sx={{
                        color: "#6B7280",
                        fontSize: 12,
                        lineHeight: "1rem",
                    }}>
                        {article.author}
                    </Box>

                    {/* Read More Link */}
                    <Box sx={{
                        fontSize: 14,
                        color: "#fe6A00",
                        fontWeight: 500,
                        lineHeight: "1.25rem",
                        cursor: "pointer",
                        transition: ".3s",
                        "&:hover": {
                            color: "#012765",
                        },
                    }}>
                        {article.link}
                    </Box>
                </Box>
            </Box>
        </Box>
    </Grid>
);

const PodcastsAndBlog = () => {
    const articles = [
        {
            icon: <KeyboardVoiceIcon fontSize="large" />,
            name: "Podcast Episode",
            title: "The Psychology of Peak Performance",
            tag: "Podcast",
            author: "32 min listen",
            link: "Listen Now →",
            description: "Dr. Marcus Johnson discusses mental strategies that high-performing professionals use to maintain focus, manage pressure, and achieve success.",
        },
        {
            icon: <PlayCircleFilledIcon fontSize="large" />,
            name: "Video Tutorial",
            title: "5-Minute Anxiety Relief Techniques",
            tag: "Video",
            author: "8 min video",
            link: "Listen Now →",
            description: "Follow along with Dr. Lisa Park as she demonstrates quick, effective strategies for managing anxiety that can be done anywhere.",
        },
        {
            icon: <KeyboardVoiceIcon fontSize="large" />,
            name: "Podcast Episode",
            title: "Student Mental Health: Beyond Academics",
            tag: "Podcast",
            author: "28 min listen",
            link: "Listen Now →",
            description: "Robert Nguyen discusses the unique mental health challenges students face and practical strategies for thriving in academic environments.",
        },
    ];

    return (
        <Container maxWidth="xl">
            <Box mb={5}>
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 4, mt: 4 }}>
                    <Box sx={{ color: "#012765", fontSize: 24, fontWeight: 700, lineHeight: "2rem" }}>
                        Podcasts & Videos
                    </Box>
                    <Box sx={{
                        fontSize: 16,
                        color: "#FE6A00",
                        fontWeight: 500,
                        transition: ".3s",
                        "&:hover": { color: "#012765" },
                    }}>
                        View All Media →
                    </Box>
                </Box>

                <Grid container spacing={2} mb={4}>
                    {articles.map((article, index) => (
                        <ArticleCard article={article} key={index} />
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default PodcastsAndBlog;
