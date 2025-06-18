import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SingleBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogsData.find(blog => blog.id === parseInt(id));

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
        <Box sx={{ pt: { xs: 6, md: 16 },mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' } }}>
            <Container maxWidth="lg">
                {/* Breadcrumbs */}
                <Breadcrumbs separator={<ArrowRightAltIcon sx={{ color: '#FE6A00', verticalAlign: 'middle' }} />} sx={{ mb: 6 }}>
                    <Link
                        underline="hover"
                        color="inherit"
                        onClick={() => navigate('/blogs')}
                        sx={{ cursor: 'pointer', color: '#012765', fontWeight: 600 }}
                    >
                        Blogs
                    </Link>
                    <Typography sx={{ color: '#FE6A00', fontWeight: 500 }}>
                        {blog.title}
                    </Typography>
                </Breadcrumbs>

                {/* Blog Header */}
                <Box sx={{ mb: 3 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: '#FE6A00', mb: 1, display: 'block',fontSize:"15px" }}
                    >
                        {blog.category}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#012765',
                            fontWeight: 600,
                            mb: 4,
                            fontSize: {
                                xs: '1.7rem',
                                sm: '1.85rem',
                                md: '2rem',
                                lg: '2.0rem'
                            },
                        }}
                    >
                        {blog.title}
                    </Typography>
                    {/*<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>*/}
                    {/*    <Typography variant="body2" color="text.secondary">*/}
                    {/*        {blog.date}*/}
                    {/*    </Typography>*/}
                    {/*    <Typography variant="body2" color="text.secondary">*/}
                    {/*        {blog.readTime}*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                backgroundColor: '#012765',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize:"25px",
                                color:"white"
                            }}
                        >
                            {blog.author.charAt(0)}
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600,fontSize:"22px",color:"#012765" }}>
                                {blog.author}
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    {blog.authorRole}*/}
                            {/*</Typography>*/}
                        </Box>
                    </Box>
                </Box>

                {/* Featured Image */}
                <Box
                    sx={{
                        mb: 6,
                        width: '100%',
                        height: {
                            xs: 200,
                            sm: 300,
                            md: 400,
                            lg: 450
                        },
                        overflow: 'hidden',
                        borderRadius: '16px'
                    }}
                >
                    <Box
                        component="img"
                        src={blog.image}
                        alt={blog.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
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
                            mb: 2,
                            textAlign:"justify"
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