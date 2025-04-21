import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Stack, useTheme, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/images/Home/worksplace-hero/demo2.png';

const TITLES = ["Be proud to work", "Create a better future", "Thrive"];
const TITLE_CHANGE_DELAY = 2500;


const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.9 },
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
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

function WorkPlaceHeroSection() {
    const theme = useTheme();
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev < TITLES.length - 1 ? prev + 1 : 0));
        }, TITLE_CHANGE_DELAY);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                mt: {md: 8},
                py: { xs: 8, md: 10 },
                overflow: 'hidden',
                backgroundColor:"#F3F4F6"
            }}
        >
            <Container maxWidth="xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-200px" }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: { xs: 6, md: 10 },
                        }}
                    >
                        <Stack
                            spacing={4}
                            sx={{
                                maxWidth: { md: '50%' },
                                width: '100%'
                            }}
                        >
                            <motion.div variants={fadeInUp}>
                                <Typography
                                    className="Montserrat"
                                    fontWeight="700"
                                    lineHeight={1.1}
                                    sx={{
                                        letterSpacing: "-1px",
                                        fontSize: { lg: '52px', md: '42px', sm: '46px', xs: '38px' },
                                        minHeight: { md: '160px', xs: '120px' },
                                        color: "#062957",
                                    }}
                                >
                                    Build a workplace
                                    <br />
                                    where you can
                                    <br />
                                    <Box sx={{ height: { md: '60px', xs: '50px' }, position: 'relative', mt: 1 }}>
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={currentTitleIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{
                                                    type: "spring",
                                                    damping: 15,
                                                    stiffness: 100
                                                }}
                                                style={{
                                                    color: theme.palette.primary.main,
                                                    display: 'inline-block',
                                                    position: 'absolute'
                                                }}
                                            >
                                                {TITLES[currentTitleIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                    </Box>
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { md: '18px', xs: '16px' },
                                        color: 'text.secondary',
                                        maxWidth: '550px',
                                    }}
                                >
                                    Empower your organization with emotional intelligence tools that enhance performance and nurture meaningful workplace connections.
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#002F6C',
                                        color: 'white',
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        px: 4,
                                        py: 1.8,
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        width: 'fit-content',
                                        mx: { xs: 'auto', md: 'unset' },
                                        display: { xs: 'block', md: 'inline-flex' },
                                        '&:hover': {
                                            transform: 'translateY(-3px)',
                                        },
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                >
                                    Request Demo
                                </Button>
                            </motion.div>
                        </Stack>

                        <motion.div
                            variants={scaleIn}
                            sx={{
                                // maxWidth: { md: '50%' },
                                width: '100%',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    // maxWidth: {xs: '100%', md: '550px'},
                                    width: '100%',
                                    height: {xs: 'auto', md: '400px'},
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
                                            height: "500px",
                                            width: '100%',
                                        }}
                                    >
                                        <img
                                            src={img1}
                                            alt="img1"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Box>
                                </motion.div>

                                {/* Decorative elements */}
                                {/*<Box*/}
                                {/*    component={motion.div}*/}
                                {/*    animate={{*/}
                                {/*        rotate: [0, 360],*/}
                                {/*    }}*/}
                                {/*    transition={{*/}
                                {/*        duration: 20,*/}
                                {/*        repeat: Infinity,*/}
                                {/*        ease: "linear"*/}
                                {/*    }}*/}
                                {/*    sx={{*/}
                                {/*        position: 'absolute',*/}
                                {/*        width: '120px',*/}
                                {/*        height: '120px',*/}
                                {/*        borderRadius: '50%',*/}
                                {/*        border: '5px dashed gre',*/}
                                {/*        top: '-30px',*/}
                                {/*        right: '-30px',*/}
                                {/*        zIndex: 0,*/}
                                {/*        display: { xs: 'none', md: 'block' }*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default WorkPlaceHeroSection;