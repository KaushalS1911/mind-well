import React from 'react';
import { Box, Container, Grid, Paper, styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/about/aboutHeader/overview.jpg';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    height: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: '#FF7F1E',
    },
}));

const StyledImageWrapper = styled(Box)(() => ({
    height: '400px',
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
}));

function Overview() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ color: '#012765' }}
                            >
                                Overview
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '16px',
                                    color: '#4B5563',
                                    lineHeight: 1.6,
                                    fontFamily: 'Poppins',
                                    textAlign: 'justify',
                                }}
                            >
                                EmotionallyYours is an initiative by MTPL, a private limited
                                company established in 2022 and recognised under the Start-Up
                                India programme. We design structured, process-orientated
                                programmes that enhance emotional intelligence and cultivate
                                transformative mindsets. Our mission is to empower individuals
                                and organisations to build resilience, navigate challenges
                                with clarity, and nurture meaningful relationships.
                            </Typography>
                        </StyledPaper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{ height: '450px' }}
                            >
                                <img
                                    src={img1}
                                    alt="Emotional Wellness Overview"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '16px',
                                    }}
                                />
                            </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Overview;
