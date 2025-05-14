import React, {useEffect, useRef, useState} from 'react';
import {Box, Container, Typography, Button, IconButton, useMediaQuery, useTheme} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import shared gallery images
import galleryImages from '../../data/galleryImages';

const navButtonSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    color: "#062957",
    backgroundColor: "#e8e5e5",
    opacity: 0.9,
    ":hover": {
        backgroundColor: "#bababa",
        opacity: 1,
    },
    display: {xs: "none", lg: "flex"},
};

const GallerySection = () => {
    const navigate = useNavigate();
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const theme = useTheme();
    const isBelowLg = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        if (swiperInstance && navigationPrevRef.current && navigationNextRef.current) {
            swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
            swiperInstance.params.navigation.nextEl = navigationNextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <Box sx={{py: {xs: 6, md: 8}, position: 'relative',mx: { xs: '30px', sm: '50px', md: '90px', xl: '80px' } }}>
            <Container maxWidth="xl">
                <Box sx={{textAlign: 'center', mb: 6}}>
                    <Typography
                        className="Montserrat"
                        variant="h4"
                        sx={{
                            fontSize: {xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem'},
                            color: "#012765",
                            fontWeight: 700,
                            mb: 2,
                            letterSpacing: "-1px",
                        }}
                    >
                        Exhibits
                    </Typography>
                    <Typography
                        sx={{
                            color: '#4B5563',
                            fontSize: {xs: '16px', md: '18px'},
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        Explore our journey through these moments of growth, learning, and transformation
                    </Typography>
                </Box>

                <Box sx={{
                    position: 'relative',
                    '& .swiper-pagination': {position: 'relative', marginTop: 2, textAlign: 'center'}
                }}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{delay: 5000}}
                        onSwiper={setSwiperInstance}
                        pagination={isBelowLg ? {clickable: true} : false}
                        breakpoints={{
                            600: {slidesPerView: 1},
                            900: {slidesPerView: 2},
                            1200: {slidesPerView: 3},
                        }}
                    >
                        {galleryImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
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
                                            objectFit: 'contain',
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
                                            <Typography variant="h6" sx={{fontWeight: 400,fontSize:"17px"}}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Arrows (only for lg and up) */}
                    <IconButton ref={navigationPrevRef} sx={{...navButtonSx, left: -50}}>
                        <ArrowBackIosNewIcon fontSize="medium"/>
                    </IconButton>
                    <IconButton ref={navigationNextRef} sx={{...navButtonSx, right: -50}}>
                        <ArrowForwardIosIcon fontSize="medium"/>
                    </IconButton>
                </Box>

                <Box sx={{textAlign: 'center', mt: 4}}>
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
