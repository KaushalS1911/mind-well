import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
} from "@mui/material";
import {
    Psychology,
    Group,
    Work,
    FiberManualRecord,
    ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import img1 from "../../assets/images/Services/implementing.webp";

// Styles
const useStyles = () => {
    const theme = useTheme();

    const colors = {
        primary: "#0E3D7B",
        secondary: "#FF7A00",
        text: "#0E3D7B",
        lightText: "#4A5568",
        background: "#F8FAFC",
    };

    return {
        colors,
        heroSection: {
            backgroundColor: "#022662",
            padding: "120px 0 60px 0",
        },
        heroContent: {
            mt: 8,
            px: {xs: 4, md: 10},
        },
        heroTitle: {
            fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },
            lineHeight: 1.2,
            fontWeight: '700',
            color: '#FE6A00',
            mb: 2,
        },
        heroDivider: {
            backgroundColor: '#fff',
            height: 4,
            width: 100,
            my: 3,
        },
        heroSubtitle: {
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 600,
        },
        heroDescription: {
            color: 'rgba(255,255,255,0.7)',
            mb: 4,
            maxWidth: {xs: '100%', sm: '90%', md: '80%'},
        },
        section: {
            padding: theme.spacing(10, 0),
        },
        featureCard: {
            height: "100%",
            transition: "all 0.3s ease",
            "&:hover": {
                boxShadow: theme.shadows[10],
            },
        },
        cardHeader: {
            borderTop: `3px solid ${colors.secondary}`,
            padding: 0,
        },
        iconContainer: {
            display: {sm:'flex',xs:"unset"},
            alignItems: "center",
            gap: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        icon: {
            backgroundColor: `${colors.primary}10`,
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            color: colors.primary,
            display:"inline-block",
        },
        listItem: {
            py: 1.5,
            pl: 2,
            borderLeft: `2px solid ${colors.secondary}`,
            mb: 1.5,
        },
        highlightPaper: {
            p: 3,
            borderRadius: 2,
            backgroundColor: "grey.50",
            borderTop: `4px solid ${colors.secondary}`,
        },
        sectionTitle: {
            color: colors.primary,
            fontSize: {
                xs: '1.7rem',
                sm: '1.85rem',
                md: '2rem',
                lg: '2.125rem'
            },
            fontWeight: 'bold',
            mb: 3,
            letterSpacing: '-1px',
        },
        sectionTitle1: {
            color: colors.primary,
            fontSize: "30px",
            fontWeight: 'bold',
            mb: 3,
            letterSpacing: '-1px',
        },
        sectionDescription: {
            maxWidth: "md",
            mx: "auto",
            fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
        },
        divider: {
            backgroundColor: colors.secondary,
            height: 4,
            width: 100,
            mx: 'auto',
            mb: 6
        },
    };
};

// Reusable components
const HeroSection = () => {
    const styles = useStyles();

    return (
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
                            textAlign: 'center',
                        }}
                    >
                        Employee Self Ownership Program
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
                            textAlign: 'center',
                        }}
                    >
                        Emotional Wellness Program for Workplace
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255,255,255,0.7)',
                            mb: 4,
                            maxWidth: {xs: '100%', sm: '95%', md: '70%'},
                            textAlign: 'center',
                        }}
                    >
                        A strategic, research-driven emotional wellness program designed to
                        elevate workplace well-being, boost employee engagement, and
                        cultivate resilience
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

const ProgramOverview = () => {
    const styles = useStyles();
    const highlights = [
        "Proactive burnout prevention",
        "Holistic emotional well-being",
        "Enhanced team dynamics",
        "Sustainable motivation strategies",
        "Data-driven insights",
    ];

    return (
        <Box sx={{padding: {sm:"96px 0 0 0",xs:"66px 0 0 0"}}}>
            <Grid container spacing={4} mb={8}>
                <Grid item xs={12} lg={8}>
                    <Typography className="Montserrat" fontWeight="bold" gutterBottom sx={styles.sectionTitle1}>
                        Comprehensive Emotional Wellness for Workplace
                    </Typography>
                    <Typography variant="body1" paragraph color="text.secondary">
                        Tailored for business teams and HR leaders, this initiative
                        integrates evidence-based practices that strengthen emotional
                        intelligence, enhance team dynamics, and drive sustainable
                        growth within organizational culture
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our program focuses on creating a resilient workforce through
                        proactive burnout prevention, holistic engagement, and
                        sustainable motivation strategies
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper elevation={1} sx={styles.highlightPaper}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color: styles.colors.primary}}>
                            Program Highlights
                        </Typography>
                        <List disablePadding>
                            {highlights.map((item, index) => (
                                <ListItem key={index} disablePadding sx={{py: 0.5}}>
                                    <ListItemIcon sx={{minWidth: 24}}>
                                        <FiberManualRecord sx={{color: styles.colors.secondary, fontSize: 10}}/>
                                    </ListItemIcon>
                                    <ListItemText primary={item} sx={{color: "text.secondary"}}/>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

const ThreePillarApproach = () => {
    const styles = useStyles();

    const pillars = [
        {
            title: "Proactive Burnout Prevention",
            icon: <Psychology fontSize="large"/>,
            points: [
                "Conduct expert-led sessions on stress management, emotional resilience, and sustainable work-life balance",
                "Utilise self-assessment tools and advanced psychometric tests to assess early burnout risks and cognitive fatigue",
                "Deliver data-driven insights and personalised interventions to safeguard employee well-being",
            ],
        },
        {
            title: "Holistic Engagement for Emotional Well-Being",
            icon: <Group fontSize="large"/>,
            points: [
                "Foster peer-support communities that encourage open dialogue and collective growth",
                "Provide time tested self-care techniques and guided mindfulness practices through an interactive wellness session",
                "Introduce gamified well-being challenges and immersive engagement activities to build sustainable emotional health habits",
            ],
        },
        {
            title: "Sustaining Motivation and Enhancing Retention",
            icon: <Work fontSize="large"/>,
            points: [
                "Offer confidential one-on-one coaching with experienced psychologists to boost emotional resilience and professional fulfilment",
                "Implement reinforcement strategies with measurable metrics to enhance organisational sustainability growth and individual's long-term commitment",
                "Recognise and celebrate emotional intelligence, fostering a culture where well-being and performance go hand in hand",
            ],
        },
    ];

    return (
        <Box>
            <Box textAlign="center" mb={6}>
                <Typography className="Montserrat" variant="h4" fontWeight="bold" gutterBottom sx={styles.sectionTitle}>
                    Our Three-Pillar Approach
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={styles.sectionDescription}>
                    ESOP delivers workplace emotional wellness through three
                    integrated components that work together to create lasting
                    positive impact for organizations and their employees
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {pillars.map((pillar, idx) => (
                    <Grid item xs={12} md={6} lg={4} key={idx}>
                        <Card elevation={3} sx={styles.featureCard}>
                            <Box sx={styles.cardHeader}/>
                            <CardContent sx={{p: 4}}>
                                <Box sx={styles.iconContainer}>
                                    <Box sx={styles.icon}>{pillar.icon}</Box>
                                    <Typography variant="h6" fontWeight="bold" sx={{color: styles.colors.primary,mb:{xs:3,sm:0}}}>
                                        {pillar.title}
                                    </Typography>
                                </Box>
                                <List disablePadding>
                                    {pillar.points.map((item, index) => (
                                        <ListItem key={index} disablePadding sx={styles.listItem}>
                                            <ListItemText primary={item} sx={{color: "text.secondary", m: 0}}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const FAQSection = () => {
    const styles = useStyles();

    const faqs = [
        {
            question: "What is the ESOP Program?",
            answer: "ESOP (Employee Self Ownership Program) is a structured emotional wellness initiative designed to move employees from disengagement to high motivation and performance"
        },
        {
            question: "Who is it for?",
            answer: "It's for organizations aiming to improve employee engagement, mental wellness, performance, and retention through proactive support"
        },
        {
            question: "What key challenges does ESOP address?",
            answer: "Burnout, disengagement, performance stagnation, stress, lack of motivation, and poor work-life balance"
        },
        {
            question: "What's unique about this program?",
            answer: "It categorizes employees into 3 motivation zones and provides personalized interventions, workshops, counseling, and follow-up support accordingly"
        },
        {
            question: "What services are included?",
            answer: "Psychometric tests, individual sessions, group workshops, DIY tools, stationed psychologists, and curated assessments"
        },
        {
            question: "How does it help businesses?",
            answer: "It boosts employee retention, productivity, morale, customer satisfaction, and reduces absenteeism and burnout"
        },
        {
            question: "Can results be measured?",
            answer: "Yes, through ROI-linked metrics such as productivity scores, retention rates, absenteeism, and mental health indicators"
        },
        {
            question: "What is the process of implementation?",
            answer: "Starts with wellness assessment, forms a taskforce, conducts workshops, activates wellness modules, and tracks progress with data"
        },
        {
            question: "Is pricing fixed?",
            answer: "No, pricing is customized based on organization size, workshop count, assessments, and session requirements"
        },
        {
            question: "How do we get started?",
            answer: "Reach out to the MTPL team to schedule an initial assessment and explore tailored offerings for your workplace"
        }
    ];

    return (
        <Box sx={{padding: {sm:"96px 0 0 0",xs:"66px 0 0 0"}}}>
            <Typography className="Montserrat" variant="h4" textAlign="center" fontWeight="bold"
                        sx={styles.sectionTitle}>
                Frequently Asked Questions
            </Typography>
            <Divider sx={styles.divider}/>

            <Box>
                {faqs.map((faq, idx) => (
                    <Accordion key={idx} sx={{mb: 2}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color: styles.colors.secondary}}/>}
                            aria-controls={`faq-content-${idx}`}
                            id={`faq-header-${idx}`}
                        >
                            <Typography fontWeight="bold" sx={{color: styles.colors.primary}}>
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

const ESOPMUI = () => {
    return (
        <Box>
            <HeroSection/>
            <Box component="section" sx={{mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' }}}>
                <Container maxWidth="xl">
                    <ProgramOverview/>
                    <ThreePillarApproach/>
                    <FAQSection/>
                </Container>
            </Box>
        </Box>
    );
};

export default ESOPMUI;