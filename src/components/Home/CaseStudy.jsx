import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Button,
    Grid,
    styled
} from '@mui/material';
import img1 from '../../assets/images/Home/case-study/school-denver.png';

const StyledCard = styled(Card)(({ theme }) => ({
    background: '#012765',
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: 'none',
}));

const StatCard = styled(Box)(({ theme }) => ({
    background: '#FFFFFF',
    padding: theme.spacing(2),
    borderRadius: 8,
    textAlign: 'center',
    height: '100%',
}));

const CaseStudy = () => {
    return (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 3 } }}>
            <StyledCard>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            height: { xs: 300, sm: 400, md: 540 },
                            width: '100%',
                        }}>
                            <img
                                src={img1}
                                alt="Denver Public Schools"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    borderRadius: 12,
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center" gap={1} mb={2}>
                            <Box className={"Montserrat"} sx={{
                                fontSize: { xs: '20px', sm: '22px', md: '25px' },
                                fontWeight: 700,
                                color: "#FF7F1E"
                            }}>
                                Public Schools
                            </Box>
                        </Box>

                        <Typography sx={{
                            color: '#fff',
                            mb: 2,
                            fontSize: { xs: '15px', sm: '16px' }
                        }}>
                            Public Schools partnered with Emotionally Yours to address chronic
                            absenteeism and provide equitable healthcare access to all
                            students, particularly in underserved communities.
                        </Typography>

                        <Grid container spacing={2} mb={4}>
                            <Grid item xs={12} sm={6}>
                                <StatCard>
                                    <Typography sx={{
                                        fontSize: { xs: '24px', sm: '30px' },
                                        fontWeight: 700,
                                        color: "#FF7F1E",
                                    }}>
                                        40%
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xs: '14px', sm: '15px' },
                                        color: "#012765",
                                    }}>
                                        Reduction in health-related absences
                                    </Typography>
                                </StatCard>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StatCard>
                                    <Typography sx={{
                                        fontSize: { xs: '24px', sm: '30px' },
                                        fontWeight: 700,
                                        color: "#FF7F1E",
                                    }}>
                                        92%
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xs: '14px', sm: '15px' },
                                        color: "#012765",
                                    }}>
                                        Student satisfaction rate
                                    </Typography>
                                </StatCard>
                            </Grid>
                        </Grid>

                        <Typography
                            sx={{
                                fontStyle: 'italic',
                                fontWeight: 300,
                                color: "#fff",
                                mb: 2,
                                fontSize: { xs: '14px', sm: '15px' }
                            }}
                        >
                            "Emotionally Yours has been transformative for our district. We've seen
                            improved attendance, better academic performance, and happier,
                            healthier students."
                        </Typography>

                        <Typography sx={{
                            fontSize: { xs: '15px', sm: '16px' },
                            color: "#FF7F1E",
                            mb: 2
                        }}>
                            - Dr. Alex Martinez, Health Services Director
                        </Typography>

                        <Button
                            sx={{
                                bgcolor: '#FE6A00',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: { xs: "14px", sm: "16px" },
                                py: 1.5,
                                px: 4,
                                borderRadius: "0.375rem",
                                textTransform: 'none',
                                transition: '0.3s',
                                mt: 2,
                                '&:hover': { bgcolor: '#dd6006' },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                            endIcon={<span>→</span>}
                        >
                            Read Full Case Study
                        </Button>
                    </Grid>
                </Grid>
            </StyledCard>
        </Container>
    );
};

export default CaseStudy;
