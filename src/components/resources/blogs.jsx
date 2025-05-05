import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';

function Blogs() {
    const navigate = useNavigate();
    const [visibleBlogs, setVisibleBlogs] = useState(6);

    const handleViewMore = () => {
        setVisibleBlogs(prev => prev + 6);
    };

    const hasMoreBlogs = visibleBlogs < blogsData.length;

    return (
        <Box sx={{ py: { xs: 6, md: 20 }, backgroundColor: '#F9FAFB' }}>
            <Container maxWidth="xl">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        className="Montserrat"
                        variant="h4"
                        sx={{
                            fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
                            color: '#012765',
                            fontWeight: 700,
                            mb: 2
                        }}
                    >
                        Blogs & Articles
                    </Typography>
                    <Typography
                        sx={{
                            color: '#4B5563',
                            fontSize: { xs: '16px', md: '18px' },
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        Explore our latest articles on health, wellness, and personal growth
                    </Typography>
                </Box>

                {/* Blog Cards */}
                <Grid container spacing={4}>
                    {blogsData.slice(0, visibleBlogs).map((blog) => (
                        <Grid item xs={12} md={4} key={blog.id}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        cursor: 'pointer'
                                    }
                                }}
                                onClick={() => navigate(`/blogs/${blog.id}`)}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={blog.image}
                                    alt={blog.title}
                                    sx={{
                                        objectFit: 'cover'
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {blog.date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            •
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {blog.readTime}
                                        </Typography>
                                    </Box>
                                    <Chip 
                                        label={blog.category}
                                        size="small"
                                        sx={{ 
                                            backgroundColor: '#FFF3E0',
                                            color: '#FE6A00',
                                            mb: 2
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#012765',
                                            fontWeight: 600,
                                            mb: 1,
                                            fontSize: '18px',
                                            lineHeight: 1.4
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mb: 2,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {blog.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#FE6A00',
                                            fontWeight: 500,
                                            '&:hover': {
                                                color: '#012765'
                                            }
                                        }}
                                    >
                                        Read Article →
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* View More Button */}
                {hasMoreBlogs && (
                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Button
                            variant="outlined"
                            onClick={handleViewMore}
                            sx={{
                                color: '#FE6A00',
                                borderColor: '#FE6A00',
                                px: 4,
                                py: 1.5,
                                borderRadius: '30px',
                                fontSize: '16px',
                                fontWeight: 600,
                                '&:hover': {
                                    borderColor: '#012765',
                                    color: '#012765',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            View More Articles
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export default Blogs;