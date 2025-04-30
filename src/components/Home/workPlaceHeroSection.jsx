import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Typography, Stack, useTheme, Container, IconButton} from '@mui/material';
import {motion, AnimatePresence} from 'framer-motion';
import img1 from '../../assets/images/Vectors/mental-health-concept.jpg';
import img2 from '../../assets/images/Vectors/online-internet.jpg';
import img3 from '../../assets/images/Vectors/vector-collection.jpg';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SLIDE_DATA = [
    {
        titles: ["Thrive", "Flourish", "Achieve", "Grow"],
        titleChangeDelay: 2500,
        mainHeading: "Transforming individuals & workplaces to",
        description: "Empowering individuals and organizations with emotional intelligence tools that drive personal growth, enhance performance, and foster meaningful workplace connections.",
        image: img1
    },
    {
        titles: ["Connect", "Collaborate", "Innovate", "Lead"],
        titleChangeDelay: 2500,
        mainHeading: "Building stronger teams that",
        description: "Create a culture of trust and psychological safety where team members feel valued, heard, and empowered to contribute their best work and ideas.",
        image: img2
    },
    {
        titles: ["Inspire", "Empower", "Transform", "Excel"],
        titleChangeDelay: 2500,
        mainHeading: "Developing leaders who",
        description: "Equip leaders with the emotional intelligence skills needed to navigate challenges, inspire teams, and drive sustainable organizational success in today's complex world.",
        image: img3
    }
];

const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100
        }
    }
};

const scaleIn = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 90
        }
    }
};

const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const navButtonSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%,-50%)",
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
    display: {xs: "none", lg: "flex"},
};


const HeroSlide = ({slideData, index}) => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev < slideData.titles.length - 1 ? prev + 1 : 0));
        }, slideData.titleChangeDelay);

        return () => clearInterval(interval);
    }, [slideData.titles.length, slideData.titleChangeDelay]);


    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-200px"}}
            key={`slide-${index}`}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: {xs: 6, md: 10},
                    height: '100%',
                }}
            >
                <Stack
                    spacing={4}
                    sx={{
                        maxWidth: {md: '50%'},
                        width: '100%'
                    }}
                >
                    <Box>

                        <Box
                            className={"Montserrat"}
                            sx={{
                                position: 'relative',
                                display: 'inline-block',
                                letterSpacing: "-1px",
                                fontSize: {xs: '28px', sm: '34px', md: '42px', lg: '46px'},
                                color: "#012765",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                mb: {xs: 2, md: 3},
                            }}
                        >
                            {slideData.mainHeading}&nbsp;

                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    position: 'relative',
                                    minWidth: {xs: '100px', md: '120px'},
                                    height: {xs: '40px', md: '50px'},
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        className={"Montserrat"}
                                        key={currentTitleIndex}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -20}}
                                        transition={{
                                            type: "spring",
                                            damping: 15,
                                            stiffness: 100,
                                        }}
                                        style={{
                                            color: "#FE6A00",
                                            fontWeight: 700,
                                            fontSize: 'inherit',
                                            position: 'absolute',
                                            top: 8,
                                            left: 0,
                                        }}
                                    >
                                        {slideData.titles[currentTitleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </Box>
                        </Box>


                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {xs: '16px', md: '20px', lg: '18px'},
                                    color: '#676666',
                                    maxWidth: '600px',
                                    fontWeight: 500,
                                    mt: 2
                                }}
                            >
                                {slideData.description}
                            </Typography>
                        </motion.div>
                    </Box>
                </Stack>

                <motion.div
                    variants={scaleIn}
                    sx={{
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: {xs: 'auto', md: '500px'},
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{width: '100%'}}
                        >
                            <Box
                                sx={{
                                    height: {md: "500px", xs: "350px"},
                                    width: '100%',
                                }}
                            >
                                <img
                                    src={slideData.image}
                                    alt={`Slide ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
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
                mt: {md: 8},
                py: {xs: 8, md: 10},
                overflow: 'hidden',
                backgroundColor: "#fff",
                px: {sm: "30px", xs: "0", xl: "0"},
                position: 'relative',
            }}
        >
            <Container maxWidth="xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={setSwiperInstance}
                >
                    {SLIDE_DATA.map((slideData, index) => (
                        <SwiperSlide key={index}>
                            <HeroSlide slideData={slideData} index={index}/>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <IconButton
                    ref={navigationPrevRef}
                    sx={{...navButtonSx, left: "2%"}}
                >
                    <ArrowBackIosNewIcon/>
                </IconButton>

                <IconButton
                    ref={navigationNextRef}
                    sx={{...navButtonSx, right: "2%"}}
                >
                    <ArrowForwardIosIcon/>
                </IconButton>

            </Container>
        </Box>
    );
}

export default WorkPlaceHeroSection;