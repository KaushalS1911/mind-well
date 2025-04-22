import React, { useEffect, useState } from 'react';
import {
    Box,
    Container
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AnimatePresence, motion } from "framer-motion";
import img1 from '../../assets/images/Vectors/hero.png';

// Title words
const TITLES = ["Students", "Aspirants", "Employees"];
const TITLE_CHANGE_DELAY = 3500;

const Herosection = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev < TITLES.length - 1 ? prev + 1 : 0));
        }, TITLE_CHANGE_DELAY);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    mt: { md: 12, xs: 0 },
                    padding: { xs: '180px 0', md: '290px 0' },
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${img1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        zIndex: 1,
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 2,
                    }}
                />

                <Container maxWidth="xl" sx={{ zIndex: 3 }}>
                    <Box
                        sx={{
                            fontSize: { lg: '72px', sm: '64px', xs: '40px' },
                            lineHeight: { xs: '1.2', sm: '1.3', md: '1.4' },
                            fontWeight: 700,
                            color: "#FE6A00",
                        }}
                    >
                        Building Mindsets
                    </Box>

                    <Box>
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
                                    color: "#fff",
                                    display: 'inline-block',
                                    fontSize: '36px',
                                }}
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
