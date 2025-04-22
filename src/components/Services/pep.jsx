import React from "react";
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
    useTheme, Accordion, AccordionSummary, AccordionDetails,
} from "@mui/material";
import {
    School,
    Psychology,
    Group,
    TrendingUp,
    ArrowForward,
    FiberManualRecord,
} from "@mui/icons-material";
import img1 from "../../assets/images/Services/pep.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PEPMUI() {
    const theme = useTheme();

    const colors = {
        primary: "#0E3D7B",
        secondary: "#FF7A00",
        text: "#0E3D7B",
        lightText: "#4A5568",
        background: "#F8FAFC",
    };

    const styles = {
        heroSection: {
            background: "#022662",
            position: "relative",
            overflow: "hidden",
            padding: theme.spacing(12, 0),
            color: "white",
        },
        heroPattern: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundSize: "24px 24px",
        },
        logoCircle: {
            backgroundColor: colors.secondary,
            borderRadius: "50%",
            width: 64,
            height: 64,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            marginBottom: theme.spacing(3),
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
            display: "flex",
            alignItems: "center",
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
            fontSize: "small",
        },
        statCard: {
            height: "100%",
        },
        statValue: {
            color: colors.secondary,
            fontWeight: "bold",
        },
        divider: {
            backgroundColor: colors.secondary,
            height: 4,
            width: 100,
            margin: theme.spacing(3, "auto"),
        },
        ctaCard: {
            borderRadius: theme.shape.borderRadius * 2,
            overflow: "hidden",
        },
        ctaCardHeader: {
            backgroundColor: colors.secondary,
            height: 8,
        },
        primaryButton: {
            backgroundColor: colors.secondary,
            color: "white",
            "&:hover": {
                backgroundColor: theme.palette.augmentColor({
                    color: {main: colors.secondary},
                }).dark,
            },
        },
        lightBg: {
            backgroundColor: `${colors.primary}05`,
        },
    };

    const pillars = [
        {
            title: "Mentors as Pillars of Emotional Support",
            icon: <Group fontSize="large"/>,
            points: [
                "Conduct in-depth emotional wellness assessments to enhance mentors' self-awareness and preparedness in high-pressure academic environments",
                "Facilitate advanced Train-the-Trainer modules designed to empower mentors with evidence-based strategies in emotional regulation, motivation enhancement, and psychological first aid",
                "Enable mentors—under the guidance of qualified psychologists—to build emotionally intelligent, trust-driven relationships that foster resilience, motivation, and academic focus in aspirants",
                "Introduce structured reflective practices to help mentors manage emotional fatigue, maintain clarity, and lead with empathy throughout the exam journey",
            ],
        },
        {
            title: "Aspirants Empowered for Peak Performance",
            icon: <School fontSize="large"/>,
            points: [
                "Expert-led emotional wellness sessions combined with structured self-assessments help aspirants recognize stress triggers and cognitive challenges",
                "Monthly therapist-guided group workshops offer tools for emotional regulation, resilience-building, and sustainable self-care practices",
                "Personalized support plans are developed to address anxiety, motivation dips, and other individual concerns through professional guidance",
                "Weekly on-campus visits by licensed psychologists ensure timely support, emotional coaching, and performance-oriented interventions",
                "Daily integration of mindfulness techniques, breathwork, and reflective journaling enhances focus, mental clarity, and exam preparedness",
            ],
        },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: "#022662",
                    padding: "120px 0 60px 0",
                }}
            >
                <Grid container spacing={4} sx={{mt: 8, px: {xs: 4, md: 10}}}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            className="Montserrat"
                            sx={{
                                fontSize: {lg: '38px', sm: '30px', xs: '26px'},
                                lineHeight: 1.2,
                                fontWeight: '700',
                                color: '#FE6A00',
                                mb: 2,
                            }}
                        >
                            Performance Empowerment Program
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
                            gutterBottom
                            sx={{
                                color: 'rgba(255,255,255,0.9)',
                                fontWeight: 600,
                            }}
                        >
                            Performance Enhancement Program for Exam Aspirants
                        </Typography>

                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                mb: 4,
                                maxWidth: {xs: '100%', sm: '90%', md: '80%'},
                            }}
                        >
                            A focused programme crafted for aspirants of rigorous entrance exams
                            and their mentors, addressing personal challenges that impact mental
                            clarity and emotional stability.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                        <Box
                            sx={{
                                height: {xs: '300px', md: '400px'},
                                width: '100%',
                            }}
                        >
                            <img
                                src={img1}
                                alt="img1"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Program Overview */}
            <Container maxWidth={"xl"}>
                <Box sx={{padding: "96px 0 0 0"}}>
                    <Grid container spacing={4} mb={8}>
                        <Grid item xs={12} lg={8}>
                            <Typography
                                className={"Montserrat"}
                                fontWeight="bold"
                                gutterBottom
                                sx={{color: colors.primary, fontSize: "30px", mb: 3,letterSpacing: "-1px",}}
                            >
                                Comprehensive Performance Enhancement Program
                            </Typography>
                            <Typography variant="body1" paragraph color="text.secondary">
                                PEP builds psychological resilience, sharpens focus, and
                                provides proven strategies to excel under pressure for both exam
                                aspirants and their mentors.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Our program integrates emotional wellness with academic
                                excellence, preparing aspirants not just for exam success but
                                for life-long resilience and personal growth.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    backgroundColor: "grey.50",
                                    borderTop: `4px solid ${colors.secondary}`,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{color: colors.primary}}
                                >
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
                                                <FiberManualRecord
                                                    sx={{color: colors.secondary, fontSize: 10}}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{color: "text.secondary"}}
                                            />
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
                        <Typography
                            className={"Montserrat"}
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            sx={{color: colors.primary,fontSize: { xs: '32px', md: '40px' },}}
                        >
                            Our Two-Pillar Approach
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{maxWidth: "md", mx: "auto",fontSize: { xs: "16px", md: "20px" },}}
                        >
                            PEP delivers comprehensive support through two integrated
                            components that work together to create lasting positive impact
                            for both mentors and aspirants.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {pillars.map((pillar, idx) => (
                            <Grid item xs={12} md={6} key={idx}>
                                <Card elevation={3} sx={styles.featureCard}>
                                    <Box sx={styles.cardHeader}/>
                                    <CardContent sx={{p: 4}}>
                                        <Box sx={styles.iconContainer}>
                                            <Box sx={styles.icon}>{pillar.icon}</Box>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                sx={{color: colors.primary}}
                                            >
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
                                                    <ListItemText
                                                        primary={item}
                                                        sx={{color: "text.secondary", m: 0}}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/*<Box sx={{  p:"20px 0 96px 0" }}>*/}
                {/*    <Typography*/}
                {/*        className={"Montserrat"}*/}
                {/*        variant="h4"*/}
                {/*        textAlign="center"*/}
                {/*        fontWeight="bold"*/}
                {/*        sx={{ color: colors.primary,mb:3}}*/}
                {/*    >*/}
                {/*        Frequently Asked Questions*/}
                {/*    </Typography>*/}
                {/*    <Divider*/}
                {/*        sx={{*/}
                {/*            backgroundColor: colors.secondary,*/}
                {/*            height: 4,*/}
                {/*            width: 100,*/}
                {/*            mx: 'auto',*/}
                {/*            mb:6*/}
                {/*        }}*/}
                {/*    />*/}

                {/*    <Box>*/}
                {/*        {[*/}
                {/*            {*/}
                {/*                question: "What is the SHAPE Wellness Program?",*/}
                {/*                answer: "The SHAPE Wellness Program is a year-long, structured emotional wellness initiative for students, teachers, and parents to build emotional intelligence, reduce stress, and improve academic performance."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "Who benefits from this program?",*/}
                {/*                answer: "Students, teachers, parents, and non-academic staff benefit through awareness workshops, training sessions, personalized counseling, and self-help tools."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "What makes this program different?",*/}
                {/*                answer: "It is aligned with NEP 2020 and Mental Health Act 2017, offers measurable outcomes, and uses both expert-led sessions and app-based self-help tools."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "How is the program delivered?",*/}
                {/*                answer: "Through classroom group sessions, digital workshops, personalized counseling (online/offline), psychometric assessments, and a Freemium wellness app."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "What emotional challenges does it address?",*/}
                {/*                answer: "The program tackles academic stress, anxiety, emotional regulation, bullying, and lack of motivation in students, while supporting teachers and parents in managing related challenges."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "Is the program measurable?",*/}
                {/*                answer: "Yes. It tracks emotional, behavioral, academic, nutritional, physical, digital, and social parameters before and after implementation."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "How is the program delivered?",*/}
                {/*                answer: "Through classroom group sessions, digital workshops, personalized counseling (online/offline), psychometric assessments, and a Freemium wellness app."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "What emotional challenges does it address?",*/}
                {/*                answer: "The program tackles academic stress, anxiety, emotional regulation, bullying, and lack of motivation in students, while supporting teachers and parents in managing related challenges."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "Is the program measurable?",*/}
                {/*                answer: "Yes. It tracks emotional, behavioral, academic, nutritional, physical, digital, and social parameters before and after implementation."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "Is it suitable for all age groups?",*/}
                {/*                answer: "Yes, it is designed for K-12 students with age-appropriate content and separate modules for teachers and parents."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "What tools are included in the app?",*/}
                {/*                answer: "Mood trackers, daily journals, self-assessments, recorded sessions, and emotional wellness quizzes are part of the app."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "How can a school enroll?",*/}
                {/*                answer: "Schools can reach out to the MTPL team through the contact information provided to schedule an initial assessment and program walkthrough."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                question: "What impact has the program shown so far?",*/}
                {/*                answer: "Over 150,000 beneficiaries, 5,000+ workshops, and 3,500+ individual sessions have led to better attendance, reduced stress, improved academic and emotional outcomes, and early identification of critical cases."*/}
                {/*            }*/}
                {/*        ].map((faq, idx) => (*/}
                {/*<Accordion key={idx} sx={{mb: 2}}>*/}
                {/*    <AccordionSummary*/}
                {/*        expandIcon={<ExpandMoreIcon sx={{color: colors.secondary}}/>}*/}
                {/*        aria-controls={`faq-content-${idx}`}*/}
                {/*        id={`faq-header-${idx}`}*/}
                {/*    >*/}
                {/*        <Typography fontWeight="bold" sx={{color: colors.primary}}>*/}
                {/*            {faq.question}*/}
                {/*        </Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography color="text.secondary">{faq.answer}</Typography>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
                {/*        ))}*/}
                {/*    </Box>*/}
                {/*</Box>*/}
            </Container>
        </Box>
    );
}
