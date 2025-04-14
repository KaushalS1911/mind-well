import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    useTheme
} from '@mui/material';
import {
    MenuBook,
    People,
    Favorite,
    TrendingUp,
    ArrowForward,
    FiberManualRecord
} from '@mui/icons-material';

export default function ShapeDesigne() {
    const theme = useTheme();

    const colors = {
        primary: '#0E3D7B',
        secondary: '#FF7A00',
        text: '#0E3D7B',
        lightText: '#4A5568',
        background: '#F8FAFC'
    };

    const styles = {
        heroSection: {
            background: "#022662",
            position: 'relative',
            overflow: 'hidden',
            padding: theme.spacing(12, 0),
            color: 'white',
        },
        heroPattern: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundSize: '24px 24px',
        },
        logoCircle: {
            backgroundColor: colors.secondary,
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            marginBottom: theme.spacing(3),
        },
        section: {
            padding: theme.spacing(10, 0),
        },
        featureCard: {
            height: '100%',
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: theme.shadows[10],
            },
        },
        cardHeader: {
            borderTop: `3px solid ${colors.secondary}`,
            padding: 0,
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        icon: {
            backgroundColor: `${colors.primary}10`,
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            color: colors.primary,
        },
        listItemDot: {
            color: colors.secondary,
            fontSize: 'small',
        },
        statCard: {
            height: '100%',
        },
        statValue: {
            color: colors.secondary,
            fontWeight: 'bold',
        },
        divider: {
            backgroundColor: colors.secondary,
            height: 4,
            width: 100,
            margin: theme.spacing(3, 'auto'),
        },
        ctaCard: {
            borderRadius: theme.shape.borderRadius * 2,
            overflow: 'hidden',
        },
        ctaCardHeader: {
            backgroundColor: colors.secondary,
            height: 8,
        },
        primaryButton: {
            backgroundColor: colors.secondary,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.augmentColor({color: {main: colors.secondary}}).dark,
            },
        },
        lightBg: {
            backgroundColor: `${colors.primary}05`,
        }
    };

    const pillars = [
        {
            title: 'Establishing the Groundwork for Emotional Mastery',
            icon: <MenuBook fontSize="large" />,
            points: [
                'Facilitate experiential learning sessions that introduce key principles of emotional intelligence, mindful awareness, and effective stress navigation.',
                'Generate in-depth emotional wellness profiles using data-driven assessments to uncover core strengths and areas for growth.',
                'Initiate reflective dialogue and guided activities to spark self-awareness and lay the foundation for long-term emotional development. Establishing',
            ],
        },
        {
            title: 'Empowering Growth Through Targeted Training',
            icon: <People fontSize="large" />,
            points: [
                'Student enrichment sessions focus on building emotional regulation, enhancing academic resilience, and cultivating intrinsic motivation for sustained success.',
                'Educator Development Workshops equip teachers with mindfulness-based strategies, classroom engagement techniques, and effective stress management tools.',
            ],
        },
        {
            title: 'Integrated Emotional Wellness & Sustainable Support',
            icon: <Favorite fontSize="large" />,
            points: [
                'Deliver customised individual counselling, accessible both online and on campus, to nurture the mental health of students and educators.',
                'Facilitate supportive peer networks that encourage open dialogue, empathy, and the development of emotional strength and connection.',
            ],
        },
        {
            title: 'Evaluating Outcomes & Shaping Sustainable Pathways',
            icon: <TrendingUp fontSize="large" />,
            points: [
                'Administer post-program diagnostic evaluations to assess growth in emotional well-being and behavioural transformation.',
                'Facilitate collaborative review forums with students, educators, and parents to gather qualitative feedback and shared insights.',
                'Co-develop a long-term emotional wellness strategy in partnership with school leadership to ensure continued impact and institutional integration.',
            ],
        },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                backgroundColor: "#022662",
                padding: "120px 0 60px 0"
            }}>
                <Box textAlign="center" maxWidth="md" mx="auto" sx={{mb: 0}}>

                    <Box className={"Montserrat"} sx={{
                        fontSize: "48px",
                        lineHeight: 1,
                        fontWeight: "700",
                        color: "#fff",
                        mb: 2,
                        mt: 8
                    }}>
                        SHAPE+
                    </Box>
                    <Divider sx={{
                        backgroundColor: colors.secondary,
                        height: 4,
                        width: 100,
                        mx: 'auto',
                        my: 3
                    }}/>
                    <Typography variant="h5" gutterBottom sx={{color: 'rgba(255,255,255,0.9)',fontWeight:"600"}}>
                        Emotional Wellness Program for Higher Education
                    </Typography>
                    <Typography variant="body1" paragraph
                                sx={{color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: "lg", mx: "auto"}}>
                        Designed for higher education students, this emotional wellness program aligns with NEP to cultivate academic excellence, emotional resilience, and future readiness. Through real-world exposure and leadership development, it empowers students to thrive holistically and grow into socially responsible global citizens.
                    </Typography>

                </Box>
            </Box>

            {/* Program Overview */}
            <Container maxWidth={"xl"}>
                <Box sx={{padding: "96px 0 0 0"}}>
                    <Grid container spacing={4} mb={8}>
                        <Grid item xs={12} lg={8}>
                            <Typography className={"Montserrat"} fontWeight="bold" gutterBottom sx={{color: colors.primary,fontSize:"30px",mb:3}}>
                                Comprehensive Emotional Wellness for Higher Education
                            </Typography>
                            <Typography variant="body1" paragraph color="text.secondary">
                                Through real-world exposure and leadership development, SHAPE+ empowers students to
                                thrive
                                holistically and grow into socially responsible global citizens.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Our program integrates emotional intelligence with academic excellence, preparing
                                students
                                not just for career success but for life-long resilience and personal fulfillment.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    backgroundColor: 'grey.50',
                                    borderTop: `4px solid ${colors.secondary}`
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color: colors.primary}}>
                                    Program Highlights
                                </Typography>
                                <List disablePadding>
                                    {[
                                        'NEP-aligned emotional wellness',
                                        'Leadership development focus',
                                        'Academic resilience building',
                                        'Real-world exposure integration',
                                        'Future readiness preparation'
                                    ].map((item, index) => (
                                        <ListItem key={index} disablePadding sx={{py: 0.5}}>
                                            <ListItemIcon sx={{minWidth: 24}}>
                                                <FiberManualRecord sx={{color: colors.secondary, fontSize: 10}}/>
                                            </ListItemIcon>
                                            <ListItemText primary={item} sx={{color: 'text.secondary'}}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Four-Pillar Approach */}
                <Box sx={{padding:"96px 0"}}>
                    <Box textAlign="center" mb={6}>
                        <Typography className={"Montserrat"} variant="h4" fontWeight="bold" gutterBottom sx={{color: colors.primary}}>
                            Our Four-Pillar Approach
                        </Typography>
                        <Divider sx={{
                            backgroundColor: colors.secondary,
                            height: 4,
                            width: 100,
                            mx: 'auto',
                            my: 3
                        }}/>
                        <Typography variant="body1" color="text.secondary" sx={{maxWidth: 'md', mx: 'auto'}}>
                            SHAPE+ delivers emotional wellness through four integrated components that work together to
                            create lasting positive impact for higher education students.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {pillars.map((pillar, idx) => (
                            <Grid item xs={12} md={6} key={idx}>
                                <Card elevation={3} sx={styles.featureCard}>
                                    <Box sx={styles.cardHeader} />
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={styles.iconContainer}>
                                            <Box sx={styles.icon}>{pillar.icon}</Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: colors.primary }}>
                                                {pillar.title}
                                            </Typography>
                                        </Box>
                                        <List disablePadding>
                                            {pillar.points.map((item, index) => (
                                                <ListItem
                                                    key={index}
                                                    disablePadding
                                                    sx={{
                                                        py: 1.5,
                                                        pl: 2,
                                                        borderLeft: `2px solid ${colors.secondary}`,
                                                        mb: 1.5,
                                                    }}
                                                >
                                                    <ListItemText primary={item} sx={{ color: 'text.secondary', m: 0 }} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Impact Section */}
                {/*<Box sx={{py: 10, backgroundColor: `${colors.primary}05`}}>*/}
                {/*    <Grid container spacing={4}>*/}
                {/*        <Grid item xs={12} md={4}>*/}
                {/*            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color: colors.primary}}>*/}
                {/*                Our Impact*/}
                {/*            </Typography>*/}
                {/*            <Divider*/}
                {/*                sx={{*/}
                {/*                    backgroundColor: colors.secondary,*/}
                {/*                    height: 4,*/}
                {/*                    width: 60,*/}
                {/*                    mb: 3*/}
                {/*                }}*/}
                {/*            />*/}
                {/*            <Typography variant="body1" color="text.secondary" paragraph>*/}
                {/*                See how our SHAPE+ program is transforming emotional wellness in higher education*/}
                {/*                institutions across India.*/}
                {/*            </Typography>*/}
                {/*            <Box display={{xs: 'none', md: 'block'}}>*/}
                {/*                <Button*/}
                {/*                    variant="contained"*/}
                {/*                    sx={styles.primaryButton}*/}
                {/*                    endIcon={<ArrowForward/>}*/}
                {/*                >*/}
                {/*                    View Case Studies*/}
                {/*                </Button>*/}
                {/*            </Box>*/}
                {/*        </Grid>*/}

                {/*        <Grid item xs={12} md={8}>*/}
                {/*            <Grid container spacing={3}>*/}
                {/*                {[*/}
                {/*                    {value: '92%', text: 'of students report improved leadership capabilities'},*/}
                {/*                    {value: '89%', text: 'increase in academic resilience measures'},*/}
                {/*                    {value: '78%', text: 'reduction in academic burnout incidents'},*/}
                {/*                    {value: '95%', text: 'of institutions report improved campus climate'}*/}
                {/*                ].map((stat, index) => (*/}
                {/*                    <Grid item xs={12} sm={6} key={index}>*/}
                {/*                        <Card elevation={2} sx={styles.statCard}>*/}
                {/*                            <CardContent>*/}
                {/*                                <Typography variant="h3" sx={styles.statValue} gutterBottom>*/}
                {/*                                    {stat.value}*/}
                {/*                                </Typography>*/}
                {/*                                <Typography variant="body1" color="text.secondary">*/}
                {/*                                    {stat.text}*/}
                {/*                                </Typography>*/}
                {/*                            </CardContent>*/}
                {/*                        </Card>*/}
                {/*                    </Grid>*/}
                {/*                ))}*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}

                {/*        <Grid item xs={12} textAlign="center" display={{xs: 'block', md: 'none'}} mt={2}>*/}
                {/*            <Button*/}
                {/*                variant="contained"*/}
                {/*                sx={styles.primaryButton}*/}
                {/*                endIcon={<ArrowForward/>}*/}
                {/*            >*/}
                {/*                View Case Studies*/}
                {/*            </Button>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Box>*/}

                {/* CTA Section */}
                {/*<Box sx={{py: 10}}>*/}
                {/*    <Box textAlign="center" mb={6}>*/}
                {/*        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color: colors.primary}}>*/}
                {/*            Ready to Transform Your Institution's Emotional Wellness?*/}
                {/*        </Typography>*/}
                {/*        <Typography variant="body1" color="text.secondary" sx={{maxWidth: 'md', mx: 'auto', mb: 5}}>*/}
                {/*            Join the growing community of forward-thinking higher education institutions that are*/}
                {/*            prioritizing emotional wellness alongside academic excellence.*/}
                {/*        </Typography>*/}

                {/*        <Card sx={styles.ctaCard} elevation={4}>*/}
                {/*            <Box sx={styles.ctaCardHeader}/>*/}
                {/*            <CardContent sx={{p: {xs: 3, md: 6}}}>*/}
                {/*                <Grid container spacing={4}>*/}
                {/*                    <Grid item xs={12} md={6}>*/}
                {/*                        <Typography variant="h6" fontWeight="bold" gutterBottom*/}
                {/*                                    sx={{color: colors.primary}}>*/}
                {/*                            Schedule a Consultation*/}
                {/*                        </Typography>*/}
                {/*                        <Typography variant="body1" color="text.secondary" paragraph>*/}
                {/*                            Let's discuss how SHAPE+ can be customized for your institution's unique*/}
                {/*                            needs.*/}
                {/*                        </Typography>*/}
                {/*                        <Button*/}
                {/*                            fullWidth*/}
                {/*                            variant="contained"*/}
                {/*                            sx={styles.primaryButton}*/}
                {/*                            endIcon={<ArrowForward/>}*/}
                {/*                        >*/}
                {/*                            Book a Call*/}
                {/*                        </Button>*/}
                {/*                    </Grid>*/}

                {/*                    <Grid item xs={12} md={6}>*/}
                {/*                        <Typography variant="h6" fontWeight="bold" gutterBottom*/}
                {/*                                    sx={{color: colors.primary}}>*/}
                {/*                            Download Program Guide*/}
                {/*                        </Typography>*/}
                {/*                        <Typography variant="body1" color="text.secondary" paragraph>*/}
                {/*                            Get detailed information about implementation and NEP alignment.*/}
                {/*                        </Typography>*/}
                {/*                        <Button*/}
                {/*                            fullWidth*/}
                {/*                            variant="outlined"*/}
                {/*                            endIcon={<ArrowForward/>}*/}
                {/*                            sx={{color: 'text.secondary', borderColor: 'grey.300'}}*/}
                {/*                        >*/}
                {/*                            Download PDF*/}
                {/*                        </Button>*/}
                {/*                    </Grid>*/}
                {/*                </Grid>*/}
                {/*            </CardContent>*/}
                {/*        </Card>*/}
                {/*    </Box>*/}
                {/*</Box>*/}
            </Container>
        </Box>
    );
}