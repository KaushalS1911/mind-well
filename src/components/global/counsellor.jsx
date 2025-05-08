import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Stack
} from '@mui/material';
import {useParams} from "react-router-dom";
import counsellorData from "../../data/counsellorData.jsx";
import FlareIcon from '@mui/icons-material/Flare';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GradeIcon from '@mui/icons-material/Grade';

const SketchWrapper = ({children}) => (

    <Box
        sx={{
            position: 'relative',
            p: {xs: 3, md: 5},
            mb: 2,
            borderRadius: 3,
            overflow: 'hidden',
            backgroundColor: '#fff',
        }}
    >
        <Box sx={{position: 'relative', zIndex: 1}}>{children}</Box>
    </Box>
);

function Counsellor() {

    const {name} = useParams();
    const data = counsellorData[name];


    return (
        <section>
            <Box sx={{pt: 15, mx: {xs: '20px', sm: '70px', md: '90px', xl: '100px'}}}>
                <Container maxWidth="xl">
                    {/* First Block */}
                    <SketchWrapper>
                        <Box sx={{
                            position: 'absolute',
                            top: {lg: "10%", md: "5%"},
                            left: {lg: "45%", md: "80%"},
                            zIndex: 2,
                            display: {md: "flex", xs: "none"}
                        }}>
                            <FlareIcon sx={{fontSize: 40, color: '#012765'}}/>
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: {lg: "80%"},
                            left: {lg: "30%"},
                            zIndex: 2,
                            display: {lg: "flex", xs: "none"}
                        }}>
                            <GradeIcon sx={{fontSize: 40, color: '#012765'}}/>
                        </Box>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} lg={6}>
                                <Typography
                                    className="Montserrat"
                                    variant="h3"
                                    fontWeight={600}
                                    sx={{mb: 4, fontSize: {xs: '30px', md: '45px'}, width: {sm: "75%", xs: "100%"}}}
                                >
                                    {data.title1}
                                </Typography>
                                <Typography color="text.secondary" sx={{mb: 3, maxWidth: '90%', textAlign: 'justify'}}>
                                    {data.description1}
                                </Typography>
                                <Button variant="contained" sx={{bgcolor: '#012765', p: 1.5}}>
                                    {data.btn1}
                                </Button>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <Box sx={{borderRadius: 2}}>
                                    <img
                                        src={data.img1}
                                        alt="Stress Counseling"
                                        style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                    </SketchWrapper>

                    {/* Second Block */}
                    <SketchWrapper>
                        <Box sx={{
                            position: 'absolute',
                            top: {lg: "80%", md: "30%"},
                            right: "10%",
                            display: {md: "flex", xs: "none"}
                        }}>
                            <AutoAwesomeIcon sx={{fontSize: 40, color: '#000'}}/>
                        </Box>
                        <Grid
                            container
                            spacing={{lg: 15, xs: 5}}
                            direction={{xs: 'column-reverse', lg: 'row'}}
                        >
                            <Grid item xs={12} lg={6}>
                                <Box sx={{position: 'relative', borderRadius: 3}}>
                                    <img
                                        src={data.img2}
                                        alt="Stress Counseling"
                                        style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: -20,
                                            right: 0,
                                            bgcolor: '#7c4dff',
                                            color: '#fff',
                                            px: {md: 4, xs: 2},
                                            py: {md: 3.5, xs: 1},
                                            fontWeight: 600,
                                            fontSize: '15px',
                                            lineHeight: 1.4,
                                            textAlign: 'center',
                                            boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                                            maxWidth: {md: '180px', xs: "150px"},
                                        }}
                                    >
                                        {data.experience}
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <Box sx={{mb: 2}}>
                                    <Box sx={{display: 'inline-block', pb: 0.5}}>
                                        <Typography variant="caption" color="text.secondary"
                                                    sx={{fontWeight: 600, fontSize: "15px", letterSpacing: "0.4rem"}}>
                                            {data.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography
                                    className="Montserrat"
                                    variant="h4"
                                    fontWeight={500}
                                    sx={{mb: 4, fontSize: {xs: '28px', md: '45px'}}}
                                >
                                    {data.title2}
                                </Typography>
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography variant="h6">{data.qtntitle1}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{pl: 4}}>
                                            {data.qtn1}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">{data.qtntitle2}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{pl: 4}}>
                                            {data.qtn2}
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Button
                                    sx={{
                                        border: '1px solid #012765',
                                        color: '#012765',
                                        fontWeight: 600,
                                        p: 1.5,
                                        mt: 4,
                                        fontSize: '15px',
                                    }}
                                >
                                    {data.btn2}
                                </Button>
                            </Grid>
                        </Grid>
                    </SketchWrapper>
                </Container>
            </Box>
        </section>
    );
}

export default Counsellor;
