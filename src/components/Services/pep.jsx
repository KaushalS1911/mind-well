import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    useTheme,
} from "@mui/material";
import {School, Group, FiberManualRecord} from "@mui/icons-material";
import img1 from "../../assets/images/Services/pep1.png";

const colors = {
    primary: "#0E3D7B",
    secondary: "#FF7A00",
    text: "#0E3D7B",
    lightText: "#4A5568",
    background: "#F8FAFC",
};

const pillars = [
    {
        title: "Mentors as Pillars of Emotional Support",
        icon: <Group fontSize="large"/>,
        points: [
            "Conduct in-depth emotional wellness assessments...",
            "Facilitate advanced Train-the-Trainer modules...",
            "Enable mentors—under the guidance of qualified psychologists...",
            "Introduce structured reflective practices...",
        ],
    },
    {
        title: "Aspirants Empowered for Peak Performance",
        icon: <School fontSize="large"/>,
        points: [
            "Expert-led emotional wellness sessions combined with structured self-assessments...",
            "Monthly therapist-guided group workshops...",
            "Personalized support plans...",
            "Weekly on-campus visits by licensed psychologists...",
            "Daily integration of mindfulness techniques...",
        ],
    },
];

const PillarCard = ({title, icon, points}) => (
    <Grid item xs={12} md={6}>
        <Card elevation={3} sx={{height: "100%", "&:hover": {boxShadow: 10}}}>
            <CardContent sx={{p: 4}}>
                <Box sx={{display: "flex", alignItems: "center", gap: 2, mb: 2}}>
                    <Box sx={{backgroundColor: `${colors.primary}10`, p: 1, borderRadius: 1}}>
                        {icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{color: colors.primary}}>
                        {title}
                    </Typography>
                </Box>
                <List disablePadding>
                    {points.map((item, index) => (
                        <ListItem key={index} disablePadding
                                  sx={{py: 1.5, pl: 2, borderLeft: `2px solid ${colors.secondary}`, mb: 1.5}}>
                            <ListItemText primary={item} sx={{color: "text.secondary", m: 0}}/>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    </Grid>
);

export default function PEPMUI() {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{backgroundColor: "#022662", padding: "120px 0 60px 0", px: {sm: "30px ", xs: "0", xl: "0"}}}>
                <Grid container spacing={4} sx={{mt: 8, px: {xs: 4, md: 10}}}>
                    <Grid item xs={12} lg={6}>
                        <Typography className="Montserrat" sx={{
                            fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
                            lineHeight: 1.2,
                            fontWeight: '700',
                            color: '#FE6A00',
                            mb: 2
                        }}>
                            Performance Empowerment Program
                        </Typography>
                        <Divider sx={{backgroundColor: '#fff', height: 4, width: 100, my: 3}}/>
                        <Typography variant="h5" gutterBottom sx={{color: 'rgba(255,255,255,0.9)', fontWeight: 600}}>
                            Performance Enhancement Program for Exam Aspirants
                        </Typography>
                        <Typography variant="body1" paragraph sx={{
                            color: 'rgba(255,255,255,0.7)',
                            mb: 4,
                            maxWidth: {xs: '100%', sm: '90%', md: '80%'}
                        }}>
                            A focused programme crafted for aspirants of rigorous entrance exams and their mentors,
                            addressing personal challenges that impact mental clarity and emotional stability.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center">
                        <Box sx={{height: {xs: '300px', md: '400px'}, width: '100%'}}>
                            <img src={img1} alt="PEP" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Program Overview */}
            <Box sx={{ px: {sm:"30px ",xs:"0",xl:"0"}}}>
                <Container maxWidth="xl">
                    <Box sx={{padding: "96px 0 0 0"}}>
                        <Grid container spacing={4} mb={8}>
                            <Grid item xs={12} lg={8}>
                                <Typography className="Montserrat" fontWeight="bold" gutterBottom sx={{
                                    color: colors.primary,
                                    fontSize: "30px",
                                    mb: 3,
                                    letterSpacing: "-1px"
                                }}>
                                    Comprehensive Performance Enhancement Program
                                </Typography>
                                <Typography variant="body1" paragraph color="text.secondary">
                                    PEP builds psychological resilience, sharpens focus, and provides proven strategies
                                    to excel under pressure for both exam aspirants and their mentors.
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Our program integrates emotional wellness with academic excellence, preparing
                                    aspirants not just for exam success but for life-long resilience and personal
                                    growth.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Paper elevation={1} sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    backgroundColor: "grey.50",
                                    borderTop: `4px solid ${colors.secondary}`
                                }}>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom
                                                sx={{color: colors.primary}}>
                                        Program Highlights
                                    </Typography>
                                    <List disablePadding>
                                        {[
                                            "Mentor empowerment and training",
                                            "Emotional wellness assessments",
                                            "Personalized support plans",
                                            "Expert-led workshops",
                                            "Regular psychological support",
                                        ].map((item, index) => (
                                            <ListItem key={index} disablePadding sx={{py: 0.5}}>
                                                <ListItemIcon sx={{minWidth: 24}}>
                                                    <FiberManualRecord sx={{color: colors.secondary, fontSize: 10}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={item} sx={{color: "text.secondary"}}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Two-Pillar Approach */}
                    <Box sx={{padding: "96px 0"}}>
                        <Box textAlign="center" mb={6}>
                            <Typography className="Montserrat" variant="h4" fontWeight="bold" gutterBottom
                                        sx={{color: colors.primary, fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },}}>
                                Our Two-Pillar Approach
                            </Typography>
                            <Typography variant="body1" color="text.secondary"
                                        sx={{maxWidth: "md", mx: "auto", fontSize: {xs: "16px", md: "20px"}}}>
                                PEP delivers comprehensive support through two integrated components that work together
                                to create lasting positive impact for both mentors and aspirants.
                            </Typography>
                        </Box>
                        <Grid container spacing={4}>
                            {pillars.map((pillar, idx) => (
                                <PillarCard key={idx} {...pillar} />
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
