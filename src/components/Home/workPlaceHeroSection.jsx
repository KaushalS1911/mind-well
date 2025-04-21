import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Stack, useTheme, Container } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import img1 from '../../assets/images/Home/worksplace-hero/demo.png';

const titles = ["Be proud to work", "Create a better future", "Thrive"];

function WorkPlaceHeroSection() {
    const theme = useTheme();
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        if (currentTitleIndex < titles.length - 1) {
            const timeout = setTimeout(() => {
                setCurrentTitleIndex((prev) => prev + 1);
            }, 2000); // 2 seconds pause
            return () => clearTimeout(timeout);
        }
    }, [currentTitleIndex]);

    return (
        <Box
            sx={{
                py: { xs: 6, md: 5 },
                background: 'linear-gradient(135deg, #f7fdfc, #e6fff5)',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: { xs: 4, md: 8 },
                    }}
                >
                    <Stack spacing={3}>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and moved down
                            transition={{ duration: 1 }}
                        >
                            <Typography
                                className="Montserrat"
                                fontWeight="700"
                                lineHeight={1.3}
                                sx={{
                                    fontSize: { lg: '50px', md: '40px', sm: '45px', xs: '38px' },
                                    minHeight: '140px', // to prevent jumping
                                    transition: 'opacity 0.5s ease-in-out',
                                }}
                            >
                                Build a workplace
                                <br />
                                where you can
                                <br />
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'inline-block',
                                    }}
                                >
                                    {titles[currentTitleIndex]}
                                </Box>
                            </Typography>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#5dd39e',
                                    color: 'white',
                                    borderRadius: 10,
                                    textTransform: 'none',
                                    px: 4,
                                    py: 1.5,
                                    width: 'fit-content',
                                    mx: { xs: 'auto', md: 'unset' },
                                    '&:hover': {
                                        backgroundColor: '#48b885',
                                    },
                                }}
                            >
                                Request Demo
                            </Button>
                        </motion.div>
                    </Stack>

                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <Box
                            sx={{
                                maxWidth: { xs: '100%', md: '500px', lg: '600px' },
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={img1}
                                alt="Workplace Demo"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}

export default WorkPlaceHeroSection;
