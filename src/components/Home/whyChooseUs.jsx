import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';

import img from '../../assets/images/Home/why-choose-us/why-choose-us.jpg';
import img1 from '../../assets/images/Home/why-choose-us/privacy-policy.jpg';
import img2 from '../../assets/images/Home/why-choose-us/hand-drawn-flat.jpg';
import img3 from '../../assets/images/Home/why-choose-us/pngtree-delivery.jpg';
import img4 from '../../assets/images/Home/why-choose-us/repair-tools-design.jpg';

const leftCards = [
    {
        icon: () => <AssignmentIcon fontSize="large" sx={{ color: 'inherit' }} />,
        title: 'Policy Backed',
        description: 'Annual Curriculum designed basis NEP 2020 and National Suicide Prevention Strategy',
        image: img1,
    },
    {
        icon: () => <BarChartIcon fontSize="large" sx={{ color: 'inherit' }} />,
        title: 'Measurable Metrices',
        description: 'Annual performance and growth are Data-Driven',
        image: img2,
    },
];

const rightCards = [
    {
        icon: <LocalShippingIcon fontSize="large" sx={{ color: 'inherit' }} />,
        title: 'Structured Delivery',
        description: 'Programs are delivered by Qualified and Experienced Psychologist',
        image: img3,
    },
    {
        icon: <BuildIcon fontSize="large" sx={{ color: 'inherit' }} />,
        title: 'DIY Tools',
        description: 'Beneficiaries get Self-Help tools through Freemium Mobile App',
        image: img4,
    },
];

function WhyChooseUs() {
    return (
        <Box component="section" sx={{padding:"96px 0 0 0",mx: { xs: '20px', sm: '30px', md: '50px', xl: 'auto' }}}>
            <Container maxWidth="xl">
                <Box
                    className="Montserrat"
                    sx={{
                        fontSize: {
                            xs: '1.7rem',
                            sm: '1.85rem',
                            md: '2rem',
                            lg: '2.125rem'
                        },
                        marginBottom: "16px",
                        letterSpacing: "-1px",
                        lineHeight: "40px",
                        display: "flex",
                        justifyContent: "center",
                        color: "#012765",
                        fontWeight: "700",
                        textAlign: "center",
                    }}
                >
                    Why Choose Us?
                </Box>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Box
                            component="img"
                            src={img}
                            alt="Why Choose Us"
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ mt: 5 }}>
                                    {leftCards.map((item, index) => (
                                        <Box key={index} mb={3}>
                                            <Box
                                                sx={{
                                                    padding: {xl:'30px',xs:'30px',lg:'20px'},
                                                    height: '230px',
                                                    borderRadius: 2,
                                                    transition: '0.5s',
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                                    color: '#002F6C',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        background: 'linear-gradient(147deg,rgba(1, 39, 101, 1) 0%, rgba(83, 132, 207, 1) 100%)',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                <Box mb={1} sx={{ color: 'inherit' }}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        style={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: "50%",
                                                            marginRight: 12,
                                                            border:"1px solid #000",
                                                            boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                                        }}
                                                    />
                                                </Box>
                                                <Typography fontSize={20} fontWeight="bold" mb={1}>
                                                    {item.title}
                                                </Typography>
                                                <Typography fontSize={15} lineHeight={1.3}>
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                {rightCards.map((item, index) => (
                                    <Box key={index} mb={3}>
                                        <Box
                                            sx={{
                                                padding: {xl:'30px',xs:'30px',lg:'20px'},
                                                height: '230px',
                                                borderRadius: 2,
                                                transition: '0.5s',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                                color: '#002F6C',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    background: 'linear-gradient(147deg,rgba(1, 39, 101, 1) 0%, rgba(83, 132, 207, 1) 100%)',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <Box mb={1} sx={{ color: 'inherit' }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: "50%",
                                                        marginRight: 12,
                                                        border:"1px solid #000",
                                                        boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                                    }}
                                                />
                                            </Box>
                                            <Typography fontSize={20} fontWeight="bold" mb={1}>
                                                {item.title}
                                            </Typography>
                                            <Typography fontSize={15} lineHeight={1.3}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default WhyChooseUs;
