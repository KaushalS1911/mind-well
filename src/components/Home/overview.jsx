import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import img1 from '../../assets/images/about/aboutHeader/overview12.png';

const headingStyles = {
    letterSpacing: '-1px',
    fontSize: {
        xs: '1.7rem',
        sm: '1.85rem',
        md: '2rem',
        lg: '2.125rem'
    },
    color: '#012765',
    fontWeight: 700,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
    mb: 3,
};

const paragraphStyles = {
    fontSize: {md: '18px', xs: '16px'},
    color: 'text.secondary',
    lineHeight: 1.7,
    fontFamily: 'Poppins',
    textAlign: 'justify',
};

function Overview() {
    return (
        <Box sx={{  backgroundColor: '#F3F4F6',}}>
            <Box
                component="section"
                sx={{
                    py: {xs: 4, md: 5, lg: 3, xl: 0},
                    overflow: 'hidden',
                    mx: { xs: '20px', sm: '30px', md: '50px', xl: 'auto' }
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={3} alignItems="center">
                        {/* Image Section */}
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    height: {md: '600px', sm: '500px', xs: '300px'},
                                    width: '100%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={img1}
                                    alt="Emotional Wellness Overview"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        display: 'block',
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* Text Section */}
                        <Grid item xs={12} lg={6}>
                            <Typography className={"Montserrat"} variant="h3" sx={headingStyles}>
                                Transforming Mindsets,
                                <br/>
                                Building Resilience
                            </Typography>

                            <Box
                                sx={{
                                    position: 'relative',
                                    pl: 3,
                                    mb: 4,
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        backgroundColor: '#002F6C',
                                        borderRadius: '4px',
                                    },
                                }}
                            >
                                <Typography variant="body1" sx={paragraphStyles}>
                                    "Emotionally Yours" is engaged in designing and delivering structured,
                                    process-orientated psychology backed programmes with data driven measurable insights
                                    that enhance emotional intelligence and cultivate transformative mindsets
                                </Typography>
                            </Box>

                            {/*<Typography variant="body1" sx={paragraphStyles}>*/}
                            {/*    Our mission is to empower individuals and organisations to build resilience,*/}
                            {/*    navigate challenges with clarity, and nurture meaningful relationships.*/}
                            {/*</Typography>*/}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Overview;
