import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

function Blogs() {

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

    return (
        <Box component="section" sx={{
            p: "96px 0 0 0", mt: {md: 5, xs: 0},mx: { xs: '20px', sm: '30px', md: '50px', xl: 'auto' }}}>
            <Container maxWidth={"xl"}>
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
                                    <Box fontSize={14} color="#4B5563" mb="12px" textAlign="justify">
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
            </Container>
        </Box>
    );
}

export default Blogs;