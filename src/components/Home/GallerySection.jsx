import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import your gallery images here
import img1 from '../../assets/images/Vectors/mental-health-concept.jpg';
import img2 from '../../assets/images/Vectors/online-internet.jpg';
import img3 from '../../assets/images/Vectors/vector-collection.jpg';

const galleryImages = [
    {
        image: img1,
        title: "Mental Health Workshop",
        description: "Interactive sessions for emotional well-being"
    },
    {
        image: img2,
        title: "Online Counseling",
        description: "Virtual support for modern challenges"
    },
    {
        image: img3,
        title: "Group Therapy",
        description: "Shared experiences, collective growth"
    }
];

const GallerySection = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F9FAFB' }}>
            <Container maxWidth="xl">
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
                        Our Gallery
                    </Typography>
                    <Typography
                        sx={{
                            color: '#4B5563',
                            fontSize: { xs: '16px', md: '18px' },
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        Explore our journey through these moments of growth, learning, and transformation
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {galleryImages.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    height: '300px',
                                    '&:hover': {
                                        '& img': {
                                            transform: 'scale(1.1)'
                                        }
                                    }
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease-in-out'
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: 3,
                                        color: 'white',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            fontSize: '14px',
                                            opacity: 0.9
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/gallery')}
                        sx={{
                            backgroundColor: '#FF7F1E',
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            borderRadius: '30px',
                            fontSize: '16px',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: '#E66D00'
                            }
                        }}
                    >
                        View Full Gallery
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default GallerySection; 