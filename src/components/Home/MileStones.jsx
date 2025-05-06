import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/images/Home/our-impact/our-impact.jpg';

// Reusable StatisticCard Component
const StatisticCard = ({ end, suffix, label, inView }) => (
    <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h3" sx={{ color: '#FF7F1E', fontWeight: 700 }}>
            {inView ? (
                <CountUp end={end} duration={2} separator="," suffix={suffix} />
            ) : (
                `0${suffix}`
            )}
        </Typography>
        <Box sx={{ fontSize: '18px', color: '#D1E1FF' }}>{label}</Box>
    </Grid>
);

function MileStones() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const milestones = [
        { end: 150, suffix: 'K+', label: 'Lives Touched' },
        { end: 5000, suffix: '+', label: 'Sessions' },
        { end: 100, suffix: '+', label: 'Suicides Prevented' },
        { end: 86, suffix: '%', label: 'Improved Behavior Reported' },
    ];

    return (
        <Box component="section" sx={{
            mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }
        }}>
        <Container maxWidth="xl">
            <Box
                ref={ref}
                sx={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    mt: 7,
                    color: 'white',
                    py: 6,
                    px: 4,
                    textAlign: 'center',
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 1,
                    }}
                />

                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography
                        className="Montserrat"
                        variant="h4"
                        fontWeight="bold"
                        sx={{ mb: 5, textAlign: {sm:'start',xs:"center"}, ml: {sm:5,xs:0} }}
                    >
                        Our Impact
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {milestones.map((item, index) => (
                            <StatisticCard key={index} {...item} inView={inView} />
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
        </Box>
    );
}

export default MileStones;
