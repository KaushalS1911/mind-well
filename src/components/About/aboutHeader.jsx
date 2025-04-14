import React from 'react';
import {Box, Container, Divider, Grid, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import {BusinessCenter, Groups2, Handshake} from "@mui/icons-material";


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: '#FF7F1E',
    }
}));

const IconWrapper = styled(Box)(() => ({
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#E6EAF3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#012765',
        '& svg': {
            color: '#ffffff !important'
        }
    }
}));



function AboutHeader() {
    return (
        <Box>
            <Box sx={{
                padding:"150px 0 100px 0",
                bgcolor: '#012765',
            }}>
                <Container maxWidth="xl">
                    {/* Header */}
                    <Box className="Montserrat" sx={{
                        fontSize: { xs: "32px", sm: "36px", md: "42px" },
                        marginBottom: { xs: "25px", sm: "10px" },
                        lineHeight: "1.2",
                        textAlign: "center",
                        color: "#fff",
                        fontWeight: "700",
                    }}>
                        About Us
                    </Box>
                    <Divider sx={{
                        backgroundColor:"#FE6A00",
                        height: 4,
                        width: 100,
                        mx: 'auto',
                        my: 4
                    }}/>

                    {/* Info Cards */}
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <StyledPaper elevation={3}>
                                <Box sx={{
                                    fontSize: "15px",
                                    color: "#4B5563",
                                    lineHeight: "1.6",
                                    fontFamily: "Poppins"
                                }}>
                                    Emotionally Yours is an initiative by MTPL, a private limited company established in 2022 and recognised under the Start-Up India programme. We design structured, process-orientated programmes that enhance emotional intelligence and cultivate transformative mindsets.
                                </Box>
                                {/*<Box sx={{*/}
                                {/*    fontSize: "15px",*/}
                                {/*    color: "#4B5563",*/}
                                {/*    lineHeight: "1.6",*/}
                                {/*    fontFamily: "Poppins"*/}
                                {/*}}>*/}
                                {/*    Our mission is to empower individuals and organisations to build resilience, navigate challenges with clarity, and nurture meaningful relationships. Through insightful guidance and impactful tools, we unlock potential and inspire sustainable growth—one mindset at a time.*/}
                                {/*</Box>*/}
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledPaper elevation={3}>
                                {/*<Box sx={{*/}
                                {/*    fontSize: "15px",*/}
                                {/*    color: "#4B5563",*/}
                                {/*    lineHeight: "1.6",*/}
                                {/*    fontFamily: "Poppins"*/}
                                {/*}}>*/}
                                {/*    Emotionally Yours is an initiative by MTPL, a private limited company established in 2022 and recognised under the Start-Up India programme. We design structured, process-orientated programmes that enhance emotional intelligence and cultivate transformative mindsets.*/}
                                {/*</Box>*/}
                                <Box sx={{
                                    fontSize: "15px",
                                    color: "#4B5563",
                                    lineHeight: "1.6",
                                    fontFamily: "Poppins"
                                }}>
                                    Our mission is to empower individuals and organisations to build resilience, navigate challenges with clarity, and nurture meaningful relationships. Through insightful guidance and impactful tools, we unlock potential and inspire sustainable growth—one mindset at a time.
                                </Box>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default AboutHeader;