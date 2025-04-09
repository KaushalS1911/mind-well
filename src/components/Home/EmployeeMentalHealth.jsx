import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    ListItemIcon,
    Card,
    styled
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import img1 from '../../assets/images/Home/Herosection/emplyees.jpg';

const StatCard = styled(Box)(({theme}) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#FFFFFF',
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}));

const FeatureIcon = styled(ListItemIcon)({
    minWidth: '48px',
    marginRight: '8px',
    '& .MuiSvgIcon-root': {
        fontSize: '24px',
        padding: '8px',
        borderRadius: '50%',
        backgroundColor: '#FF7F6A',
        color: 'white'
    }
});

const EmployeeMentalHealth = () => {
    const stats = [
        {value: '86%', description: 'of employees report improved productivity with wellness programs'},
        {value: '3.6x', description: 'return on investment for mental health programs'},
        {value: '40%', description: 'reduction in employee turnover with wellness benefits'},
        {value: '31%', description: 'fewer sick days taken by employees with mental health support'}
    ];

    const features = [
        {
            icon: <PersonOutlineIcon />,
            title: 'Personalized Care for Every Employee',
            description: 'Each team member receives access to our therapist network with personalized matching based on their specific needs and preferences.'
        },
        {
            icon: <WorkspacePremiumOutlinedIcon />,
            title: 'Workshops and Training',
            description: "Skill building sessions on stress management, resilience, work-life balance, and communication, customized for your organization's needs."
        },
        {
            icon: <SecurityOutlinedIcon />,
            title: 'Confidentiality Guaranteed',
            description: 'All sessions and interactions remain strictly confidential. Employees can seek help without concerns about workplace privacy.'
        },
        {
            icon: <InsightsOutlinedIcon />,
            title: 'Data-Driven Insights',
            description: 'Anonymous aggregate reporting helps you understand program utilization and impact while maintaining employee privacy.'
        }
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box textAlign="center" mb={6}>
                <Box className={"Montserrat"}
                    variant="h4"
                    sx={{
                        fontSize: { xs: '26px', sm: '32px', md: '36px' },
                        fontWeight: 700,
                        color: "#012765",
                        mb: 2
                    }}
                >
                    Employee Mental Health Program
                </Box>
                <Typography
                    sx={{
                        maxWidth: 700,
                        mx: "auto",
                        fontSize: { xs: '16px', sm: '18px' },
                        color: "#4B5563",
                        lineHeight: 1.6,
                        px: 2
                    }}
                >
                    Invest in your team's wellbeing to build a healthier, more productive workplace culture.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {/* Left Side - Image and Stats */}
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            mb: 4,
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: 3,
                            position: "relative",
                        }}
                    >
                        <Box sx={{ position: "relative" }}>
                            <img
                                src={img1}
                                alt="card-img"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    bgcolor: "rgba(25,31,66,0.85)",
                                    color: "white",
                                    p: 2,
                                }}
                            >
                                <Typography variant="body2">
                                    Empower your team with professional mental health support
                                </Typography>
                            </Box>
                        </Box>
                    </Card>


                    <Grid container spacing={2}>
                        {stats.map((stat, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <StatCard>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '22px', sm: '28px' },
                                            fontWeight: 700,
                                            color: "#FF7F1E"
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '14px', sm: '15px' },
                                            color: "#012765"
                                        }}
                                    >
                                        {stat.description}
                                    </Typography>
                                </StatCard>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Right Side - Features */}
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{
                            fontSize: { xs: '20px', sm: '22px' },
                            fontWeight: 700,
                            color: "#012765",
                            mb: 1
                        }}
                    >
                        Build Thriving Teams Through Mental Wellness
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '15px', sm: '17px' },
                            color: "#012765",
                            fontWeight: 400,
                            mb: 3
                        }}
                    >
                        Support your employees' mental health with our comprehensive workplace program designed for
                        today's professional challenges.
                    </Typography>

                    <Box>
                        {features.map((feature, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "start", mb: 2 }}>
                                <FeatureIcon sx={{
                                    mt: 0.8,
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '30px',
                                        padding: '3px',
                                        borderRadius: '50%',
                                        backgroundColor: '#FF7F1E',
                                        color: '#fff',
                                    }
                                }}>
                                    {feature.icon}
                                </FeatureIcon>

                                <Box sx={{p:1}}>
                                    <Box sx={{ fontSize: '17px', color: "#FF7F1E", fontWeight: 600, mb: 0.5 }}>
                                        {feature.title}
                                    </Box>
                                    <Box sx={{ fontSize: '16px', color: "#012765", fontWeight: 500, letterSpacing: "-0.01rem" }}>
                                        {feature.description}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: '#FE6A00',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: { xs: "14px", sm: "16px" },
                                py: 1.3,
                                px: 4,
                                borderRadius: "0.375rem",
                                textTransform: 'none',
                                transition: '0.3s',
                                '&:hover': { bgcolor: '#dd6006' },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            Request Company Demo
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#F5811E",
                                borderColor: "#E26C0A",
                                fontWeight: 600,
                                fontSize: { xs: '14px', sm: '16px' },
                                py: 1.3,
                                px: 4,
                                borderRadius: "0.375rem",
                                textTransform: 'none',
                                transition: '0.3s ease',
                                width: { xs: '100%', sm: 'auto' },
                                "&:hover": {
                                    borderColor: "#E26C0A",
                                    backgroundColor: "rgba(245, 129, 30, 0.08)",
                                },
                            }}
                        >
                            Download Brochure
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EmployeeMentalHealth;
