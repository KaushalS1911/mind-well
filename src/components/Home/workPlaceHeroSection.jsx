import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Typography,
    Stack,
    useTheme,
    Container,
    IconButton,
} from '@mui/material';
import img1 from '../../assets/images/Vectors/mental-health-concept.jpg';
import img2 from '../../assets/images/Vectors/online-internet.jpg';
import img3 from '../../assets/images/Vectors/vector-collection.jpg';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SLIDE_DATA = [
    {
        titles: ["Students", "Aspirants", "Employees"],
        titleChangeDelay: 2000,
        mainHeading: "Building Mindsets",
        description:
            "Empowering individuals and organizations with emotional intelligence tools that drive personal growth, enhance performance, and foster meaningful workplace connections",
        image: img1,
    },
    {
        titles: ["Growth", "Performance", "Success"],
        titleChangeDelay: 3000,
        mainHeading: "Transforming to enable",
        description:
            "Create a culture of trust and psychological safety where team members feel valued, heard, and empowered to contribute their best work and ideas",
        image: img2,
    },
    {
        titles: ["Inspire", "Empower", "Transform"],
        titleChangeDelay: 2000,
        mainHeading: "Developing leaders who",
        description:
            "Equip leaders with the emotional intelligence skills needed to navigate challenges, inspire teams, and drive sustainable organizational success in today's complex world",
        image: img3,
    },
];

const navButtonSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    color: "#062957",
    backgroundColor: "#e8e5e5",
    width: "50px",
    height: "50px",
    opacity: 0.9,
    ":hover": {
        backgroundColor: "#bababa",
        opacity: 1,
    },
    display: { xs: "none", lg: "flex" },
};

const HeroSlide = ({ slideData, index }) => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) =>
                prev < slideData.titles.length - 1 ? prev + 1 : 0
            );
        }, slideData.titleChangeDelay);

        return () => clearInterval(interval);
    }, [slideData.titles.length, slideData.titleChangeDelay]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
                mx: { xs: '20px',md:"50px", xl: '100px' }
            }}
        >
            <Box
                spacing={4}
                sx={{
                    maxWidth: { lg: '62%',xl:"50%" },
                    width: '100%',
                }}
            >
                <Box>


                    <Typography
                        className={"Montserrat"}
                        component="div"
                        sx={{
                            letterSpacing: "-1px",
                            fontSize: {
                                xs: '1.7rem',
                                sm: '1.85rem',
                                md: '2rem',
                                lg: '2.0rem',
                                xl: '2.125rem'
                            },
                            color: "#012765",
                            fontWeight: 700,
                            lineHeight: 1.2,
                            mb: { xs: 2, md: 3 },
                        }}
                    >
                        {slideData.mainHeading}&nbsp;
                        <Box
                            key={slideData.titles[currentTitleIndex]}
                            component="span"
                            className={"Montserrat"}
                            sx={{
                                display: 'inline-block',
                                color: "#FE6A00",
                                fontWeight: 700,
                                fontSize: 'inherit',
                                animation: 'slideUpFade 1s ease',
                                '@keyframes slideUpFade': {
                                    '0%': {
                                        opacity: 0,
                                        transform: 'translateY(40%)',
                                    },
                                    '100%': {
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    },
                                },
                            }}
                        >
                            {slideData.titles[currentTitleIndex]}
                        </Box>
                    </Typography>


                    {/* Description */}
                    <Typography
                        data-aos="fade-up"
                        variant="body1"
                        sx={{
                            fontSize: { xs: '16px', md: '20px', lg: '18px' },
                            color: '#676666',
                            maxWidth: '600px',
                            fontWeight: 500,
                            mt: 2,
                        }}
                    >
                        {slideData.description}
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: {lg:'40%',xs:"100%",xl:"50%"},
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: { xs: 'auto', md: '500px' },
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            height: { md: "500px", xs: "350px" },
                            width: '100%',
                        }}
                    >
                        <img
                            data-aos="zoom-in"
                            src={slideData.image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

function WorkPlaceHeroSection() {
    const theme = useTheme();
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

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
        <Box
            sx={{
                mt: { md: 8 },
                py: { xs: 8, md: 10 },
                overflow: 'hidden',
                backgroundColor: "#fff",
                px: { sm: "30px", xs: "0", xl: "0" },
                position: 'relative',
            }}
        >
            <Container maxWidth="xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 15000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={setSwiperInstance}
                >
                    {SLIDE_DATA.map((slideData, index) => (
                        <SwiperSlide key={index}>
                            <HeroSlide slideData={slideData} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <IconButton
                    ref={navigationPrevRef}
                    sx={{ ...navButtonSx, left: "2%" }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>

                <IconButton
                    ref={navigationNextRef}
                    sx={{ ...navButtonSx, right: "2%" }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Container>
        </Box>
    );
}

export default WorkPlaceHeroSection;
