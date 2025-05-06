import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Import shared gallery images
import galleryImages from '../../data/galleryImages';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <Box sx={{ pt: { xs: 6, md: 18 } }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        className="Montserrat"
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem' },
                            color: "#012765",
                            fontWeight: 700,
                            mb: 2,
                            letterSpacing: "-1px",
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
                            <Box sx={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                height: '450px',
                                cursor: 'pointer',
                                '&:hover img': {transform: 'scale(1.1)'},
                                '&:hover .hover-overlay': {background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 100%)'},
                                '&:hover .hover-text': {transform: 'translateY(0%)', opacity: 1}
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        transition: 'transform 0.4s ease'
                                    }}
                                />

                                <Box className="hover-overlay" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    color: 'white',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                    transition: 'background 0.4s ease'
                                }}>
                                    <Box className="hover-text" sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        textAlign: 'center',
                                        transform: 'translateY(100%)',
                                        opacity: 0,
                                        transition: 'transform 0.4s ease, opacity 0.4s ease',
                                        py: 2
                                    }}>
                                        <Typography variant="h6" sx={{fontWeight: 600}}>
                                            {item.title}
                                        </Typography>
                                    </Box>
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
                            sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box sx={{ maxWidth: '90%', maxHeight: '90vh', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
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
                            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', p: 2 }}>
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
