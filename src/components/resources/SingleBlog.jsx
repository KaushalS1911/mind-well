import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';

const SingleBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the blog post with the matching id
    const blog = blogsData.find(blog => blog.id === parseInt(id));

    // If blog is not found, show a message
    if (!blog) {
        return (
            <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F9FAFB' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ textAlign: 'center', color: '#012765' }}>
                        Blog post not found
                    </Typography>
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{ pt: { xs: 6, md: 8 },mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' } }}>
            <Container maxWidth="lg">
                {/* Breadcrumbs */}
                <Breadcrumbs sx={{ mb: 4 }}>
                    <Link 
                        underline="hover" 
                        color="inherit" 
                        onClick={() => navigate('/blogs')}
                        sx={{ cursor: 'pointer' }}
                    >
                        Blogs
                    </Link>
                    <Typography color="text.primary">{blog.title}</Typography>
                </Breadcrumbs>

                {/* Blog Header */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: '#FE6A00', mb: 1, display: 'block' }}
                    >
                        {blog.category}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#012765',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '28px', md: '36px' }
                        }}
                    >
                        {blog.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            {blog.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blog.readTime}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                backgroundColor: '#E7EAEE',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {blog.author.charAt(0)}
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {blog.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {blog.authorRole}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Featured Image */}
                <Box sx={{ mb: 6 }}>
                    <img
                        src={blog.image}
                        alt={blog.title}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '16px'
                        }}
                    />
                </Box>

                {/* Blog Content */}
                <Box
                    sx={{
                        '& h2': {
                            color: '#012765',
                            fontSize: '24px',
                            fontWeight: 600,
                            mt: 4,
                            mb: 2
                        },
                        '& p': {
                            color: '#4B5563',
                            fontSize: '16px',
                            lineHeight: 1.7,
                            mb: 2
                        },
                        '& ul': {
                            color: '#4B5563',
                            fontSize: '16px',
                            lineHeight: 1.7,
                            mb: 2,
                            pl: 3
                        },
                        '& li': {
                            mb: 1
                        }
                    }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </Container>
        </Box>
    );
};

export default SingleBlog; 