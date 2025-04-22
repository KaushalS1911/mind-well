import React from 'react';
import {Box, Grid, Typography, Paper, Container, Divider} from '@mui/material';
import {styled} from '@mui/system';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import img from '../../assets/images/Home/why-choose-us/why-choose-us.jpg';

const leftCards = [
    {
        icon: () => <Diversity1Icon fontSize="large" sx={{color: 'inherit'}}/>,
        title: 'Policy Reference',
        description: 'Annual Curriculum designed basis NEP 2020 and National Suicide Prevention Strategy',
    },
    {
        icon: () => <RocketLaunchIcon fontSize="large" sx={{color: 'inherit'}}/>,
        title: 'Measurable Metrices',
        description: 'Annual performance and growth are Data-Driven',
    },
];

const rightCards = [
    {
        icon: <EmojiObjectsIcon fontSize="large" sx={{color: 'inherit'}}/>,
        title: 'Delivery Structure',
        description: 'Programs are delivered by Qualified and Experienced Psychologist',
    },
    {
        icon: <SupportAgentIcon fontSize="large" sx={{color: 'inherit'}}/>,
        title: 'DIY Tools',
        description: 'Benefciaries get Self-Help tools through Freemium Mobile App',
    },
];

function WhyChooseUs() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Box
                    // data-aos="zoom-in"
                    className={'Montserrat'} sx={{
                    fontSize: "40px",
                    marginBottom: "16px",
                    lineHeight: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#012765",
                    fontWeight: "700",
                    textAlign: "center",
                }}>
                    Why Choose Us ?
                </Box>


                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
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

                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{mt: 5}}>
                                    {leftCards.map((item, index) => (
                                        <Box key={index} mb={3}>
                                            <Box
                                                sx={{
                                                    padding: '30px',
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
                                                <Box mb={1} sx={{color: 'inherit'}}>
                                                    {item.icon()}
                                                </Box>
                                                <Typography fontSize={22} fontWeight="bold" mb={1}>
                                                    {item.title}
                                                </Typography>
                                                <Typography fontSize={17} lineHeight={1.3}>
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
                                                padding: '30px',
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
                                            <Box mb={1} sx={{color: 'inherit'}}>
                                                {item.icon}
                                            </Box>
                                            <Typography fontSize={22} fontWeight="bold" mb={1}>
                                                {item.title}
                                            </Typography>
                                            <Typography fontSize={17} lineHeight={1.3}>
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
