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
// import img1 from "../../assets/images/Services/pep1.png";
import img1 from "../../assets/images/Services/close-up-of-friend.jpg";

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
            "Conduct in-depth emotional wellness assessments",
            "Facilitate advanced Train-the-Trainer modules",
            "Enable mentors—under the guidance of qualified psychologists",
            "Introduce structured reflective practices",
        ],
    },
    {
        title: "Aspirants Empowered for Peak Performance",
        icon: <School fontSize="large"/>,
        points: [
            "Expert-led emotional wellness sessions combined with structured self-assessments",
            "Monthly therapist-guided group workshops",
            "Personalized support plans",
            "Weekly on-campus visits by psychologists",
            "Daily integration of mindfulness techniques",
        ],
    },
];

const PillarCard = ({title, icon, points}) => (
    <Grid item xs={12} md={6}>
        <Card elevation={3} sx={{height: "100%", "&:hover": {boxShadow: 10}}}>
            <CardContent sx={{p: 4}}>
                <Box sx={{display: {sm:'flex',xs:"unset"}, alignItems: "center", gap: 2, mb: 2}}>
                    <Box sx={{backgroundColor: `${colors.primary}10`, p: 1, borderRadius: 1,display:"inline-block",}}>
                        {icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{color: colors.primary,mb:{xs:3,sm:0}}}>
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
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    py: {xs: 8, sm: 10, md: 12},
                    px: {sm:"30px ",xs:"0",xl:"0"},
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 1,
                    }}
                />
                <Container maxWidth={"xl"}>

                    {/* Content */}
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            mt: {md:18,xs:5},
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            className="Montserrat"
                            sx={{
                                fontSize: {xs: '24px', sm: '32px', md: '40px', lg: '46px'},
                                lineHeight: 1.3,
                                fontWeight: 700,
                                color: '#FE6A00',
                                mb: 2,
                                maxWidth: {xs: '100%', sm: '90%', md: '80%',lg:"70%"},
                                textAlign:"center"
                            }}
                        >
                            Performance Enhancement Program
                        </Typography>

                        <Divider
                            sx={{
                                backgroundColor: '#fff',
                                height: 4,
                                width: 100,
                                my: 3,
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                color: 'rgba(255,255,255,0.9)',
                                fontWeight: 600,
                                mb: 2,
                                textAlign:"center"
                            }}
                        >
                            Performance Enhancement Program for Exam Aspirants
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                mb: 4,
                                maxWidth: {xs: '100%', sm: '95%', md: '70%'},
                                textAlign:"center"
                            }}
                        >
                            A focused programme crafted for aspirants of rigorous entrance exams and their mentors,
                            addressing personal challenges that impact mental clarity and emotional stability
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Program Overview */}
            <Box component="section" sx={{mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' }}}>
                <Container maxWidth="xl">
                    <Box sx={{padding: {sm:"96px 0 0 0",xs:"66px 0 0 0"}}}>
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
                                    to excel under pressure for both exam aspirants and their mentors
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Our program integrates emotional wellness with academic excellence, preparing
                                    aspirants not just for exam success but for life-long resilience and personal
                                    growth
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
                    <Box>
                        <Box textAlign="center" mb={6}>
                            <Typography className="Montserrat" variant="h4" fontWeight="bold" gutterBottom
                                        sx={{color: colors.primary,fontSize: {
                                                xs: '1.7rem',
                                                sm: '1.85rem',
                                                md: '2rem',
                                                lg: '2.125rem'
                                            },}}>
                                Our Two-Pillar Approach
                            </Typography>
                            <Typography variant="body1" color="text.secondary"
                                        sx={{maxWidth: "md", mx: "auto", fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },}}>
                                PEP delivers comprehensive support through two integrated components that work together
                                to create lasting positive impact for both mentors and aspirants
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
