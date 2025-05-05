import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
    },
    // Add more images here
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <Box sx={{ pt: { xs: 6, md: 18 }}}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        className="Montserrat"
                        variant="h4"
                        sx={{
                            fontSize: {
                                xs: '1.7rem',
                                sm: '1.85rem',
                                md: '2rem',
                                lg: '2.125rem'
                            },
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
                            fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 4
                        }}
                    >
                        Explore our journey through these moments of growth, learning, and transformation
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {galleryImages.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    height: { xs: '250px', sm: '300px', md: '350px' },
                                    cursor: 'pointer',
                                    '&:hover': {
                                        '& img': {
                                            transform: 'scale(1.1)'
                                        },
                                        '& .content-overlay': {
                                            opacity: 1
                                        }
                                    }
                                }}
                                onClick={() => setSelectedImage(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        transition: 'transform 0.3s ease-in-out'
                                    }}
                                />
                                <Box
                                    className="content-overlay"
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
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease-in-out'
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

                {/* Image Modal */}
                {selectedImage && (
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 1300,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                color: 'white'
                            }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box
                            sx={{
                                maxWidth: '90%',
                                maxHeight: '90vh',
                                position: 'relative'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '90vh',
                                    objectFit: 'contain'
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    color: 'white',
                                    p: 2
                                }}
                            >
                                <Typography variant="h6">{selectedImage.title}</Typography>
                                <Typography variant="body2">{selectedImage.description}</Typography>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default Gallery; 