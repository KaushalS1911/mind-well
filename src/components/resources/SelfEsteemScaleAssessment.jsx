import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img6 from "../../assets/images/Resources/Assessments/Self_Esteem_Scale.jpg";
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1),
        color: '#FF7F1E',
    },
}));

const StartButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF7F1E',
    color: '#FFFFFF',
    padding: '12px 32px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#E66C00',
    },
}));

const SelfEsteemScaleAssessment = () => {
    const navigate = useNavigate();

    const handleStartAssessment = () => {
        navigate('/assessments/self-esteem-scale/questions');
    };

    return (
        <Box sx={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F3F4F6',
            mt: { xs: '64px', sm: '72px' },
            py: { xs: 4, md: 6 },
        }}>
            <Container maxWidth="lg" sx={{ my: 'auto' }}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Left Column - Main Content */}
                    <Grid item xs={12} md={8}>
                        <StyledPaper>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <img
                                    src={img6}
                                    alt="General Stress and Anxiety"
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        marginRight: '16px',
                                    }}
                                />
                                <Typography variant="h4" sx={{
                                    fontWeight: 700,
                                    color: '#012765',
                                    fontFamily: 'Montserrat',
                                    fontSize: { xs: '24px', sm: '28px', md: '32px' },
                                }}>
                                    Self-Esteem Scale for Pre-Adolescents (Age 11-13)
                                </Typography>
                            </Box>

                            <Typography sx={{
                                mb: 4,
                                color: '#4B5563',
                                fontSize: '16px',
                                lineHeight: 1.6,
                                fontFamily: 'Poppins'
                            }}>
                                This assessment helps measure your current stress and anxiety levels, identifying potential areas of concern and providing insights into your mental well-being. Your responses will help us understand your situation better and offer appropriate guidance.
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <IconBox>
                                    <TimerOutlinedIcon />
                                    <Typography sx={{ color: '#012765', fontFamily: 'Poppins' }}>
                                        Time to complete: ~5 minutes
                                    </Typography>
                                </IconBox>
                                <IconBox>
                                    <HelpOutlineIcon />
                                    <Typography sx={{ color: '#012765', fontFamily: 'Poppins' }}>
                                        5 questions to answer
                                    </Typography>
                                </IconBox>
                                <IconBox>
                                    <DescriptionOutlinedIcon />
                                    <Typography sx={{ color: '#012765', fontFamily: 'Poppins' }}>
                                        Receive immediate results and recommendations
                                    </Typography>
                                </IconBox>
                            </Box>

                            <StartButton
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                onClick={handleStartAssessment}
                            >
                                Start Assessment
                            </StartButton>
                        </StyledPaper>
                    </Grid>

                    {/* Right Column - Additional Info */}
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <Typography variant="h6" sx={{
                                mb: 2,
                                color: '#012765',
                                fontWeight: 600,
                                fontFamily: 'Montserrat'
                            }}>
                                Before you begin
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography sx={{
                                    mb: 2,
                                    color: '#4B5563',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    fontFamily: 'Poppins'
                                }}>
                                    • Find a quiet, comfortable space where you won't be interrupted
                                </Typography>
                                <Typography sx={{
                                    mb: 2,
                                    color: '#4B5563',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    fontFamily: 'Poppins'
                                }}>
                                    • Answer honestly - there are no right or wrong answers
                                </Typography>
                                <Typography sx={{
                                    mb: 2,
                                    color: '#4B5563',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    fontFamily: 'Poppins'
                                }}>
                                    • Consider how you've been feeling over the past two weeks
                                </Typography>
                                <Typography sx={{
                                    color: '#4B5563',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    fontFamily: 'Poppins'
                                }}>
                                    • Your responses are confidential and secure
                                </Typography>
                            </Box>

                            <Box sx={{
                                p: 2,
                                bgcolor: '#FFF5EB',
                                borderRadius: 2,
                                border: '1px solid #FFE4CC'
                            }}>
                                <Typography sx={{
                                    color: '#FF7F1E',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    mb: 1,
                                    fontFamily: 'Poppins'
                                }}>
                                    Note:
                                </Typography>
                                <Typography sx={{
                                    color: '#4B5563',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    fontFamily: 'Poppins'
                                }}>
                                    This assessment is not a diagnostic tool. If you're experiencing severe distress, please seek professional help immediately.
                                </Typography>
                            </Box>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SelfEsteemScaleAssessment;