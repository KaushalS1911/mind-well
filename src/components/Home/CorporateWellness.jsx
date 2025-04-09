import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    styled
} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from '../../assets/images/Home/Herosection/emplyees.jpg'

const benefits = [
    {
        title: 'Increased Productivity',
        description: 'Employees with good mental health are 12% more productive.'
    },
    {
        title: 'Reduced Absenteeism',
        description: 'Mental health programs reduce absenteeism by up to 30%.'
    },
    {
        title: 'Improved Retention',
        description: 'Companies with wellness programs see 31% lower turnover rates.'
    },
    {
        title: 'Cost-Effective Solution',
        description: 'Every $1 invested in mental health returns $4 in improved productivity.'
    }
];

const CorporateWellness = () => {
    return (
        <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8 } }}>
            <Box
                sx={{
                    bgcolor: '#0A2472',
                    borderRadius: 4,
                    overflow: 'hidden'
                }}
            >
                <Grid container>
                    {/* Left Content */}
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ p: { xs: 4, sm: 5, lg: 6 } }}>
                            <Box className={"Montserrat"}
                                sx={{
                                    fontSize: { xs: "22px", sm: "24px" },
                                    color: "#FF7F1E",
                                    fontWeight: 600,
                                    mb: 2
                                }}
                            >
                                Invest in Your Employees and Build Thriving Teams
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: { xs: "15px", sm: "17px" },
                                    color: "rgba(255, 255, 255, 0.8)",
                                    fontWeight: 400,
                                    mb: 3
                                }}
                            >
                                Support your team's mental wellbeing with our comprehensive corporate wellness programs
                                designed to boost productivity and reduce turnover.
                            </Typography>

                            <Box>
                                {benefits.map((benefit, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            mb: 3
                                        }}
                                    >
                                        <CheckCircleIcon
                                            sx={{
                                                color: "#FE6A00",
                                                mt: '2px',
                                                mr: 2,
                                                fontSize: { xs: "20px", sm: "22px" }
                                            }}
                                        />
                                        <Box>
                                            <Typography sx={{
                                                fontSize: { xs: "16px", sm: "18px" },
                                                color: "#FF7F1E",
                                                fontWeight: 500,
                                                mb: 0.5
                                            }}>
                                                {benefit.title}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: { xs: "14px", sm: "16px" },
                                                color: "rgba(255, 255, 255, 0.8)"
                                            }}>
                                                {benefit.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Button
                                sx={{
                                    bgcolor: '#FE6A00',
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: { xs: "14px", sm: "16px" },
                                    py: 1.2,
                                    px: 3,
                                    mt: 2,
                                    borderRadius: "0.375rem",
                                    textTransform: 'none',
                                    transition: '0.3s',
                                    '&:hover': { bgcolor: '#dd6006' },
                                    width: { xs: '100%', sm: 'auto' }
                                }}
                            >
                                Schedule a Corporate Consultation
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                height: '100%',
                                width: '100%',
                                position: 'relative',
                                minHeight: { xs: '300px', sm: '400px', md: '100%' }
                            }}
                        >
                            <img
                            src={img1}
                            alt={"img1"}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CorporateWellness;
