import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import img1 from '../../assets/images/Vectors/hero.png';


const TITLES = ["Students.", "Aspirants.", "Employees."];
const TITLE_CHANGE_DELAY = 3500;

const useInterval = (callback, delay) => {
    useEffect(() => {
        if (delay === null) return;
        const interval = setInterval(callback, delay);
        return () => clearInterval(interval);
    }, [callback, delay]);
};

const Herosection = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useInterval(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, TITLE_CHANGE_DELAY);

    const titleStyle = {
        fontSize: { lg: '72px', sm: '64px', xs: '40px' },
        lineHeight: { xs: '1.2', sm: '1.3', md: '1.4' },
        fontWeight: 700,
        color: '#012765',
    };

    const animatedTitleStyle = {
        color: '#FE6A00',
        display: 'inline-block',
        fontSize: '36px',
        fontWeight: 500,
    };

    return (
        <Box sx={{ position: 'relative', height: '100%' }}>
            <Box
                sx={{
                    mt: { md: 12, xs: 0 },
                    padding: { xs: '180px 0', md: '230px 0' },
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: { xs: 'right', sm: 'center' },
                    }}
                />
                <Container maxWidth="xl" sx={{ zIndex: 3 }}>
                    <Box sx={titleStyle}>Building Mindsets</Box>

                    <Box aria-live="polite">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentTitleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                                style={animatedTitleStyle}
                            >
                                {TITLES[currentTitleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Herosection;
