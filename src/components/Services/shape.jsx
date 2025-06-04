import React from 'react';
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
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import {
    MenuBook,
    People,
    Favorite,
    TrendingUp,
    FiberManualRecord,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
// import img1 from '../../assets/images/Services/Shape.png';
import img1 from '../../assets/images/Services/iStock12.jpg';

// Constants
const COLORS = {
    primary: '#0E3D7B',
    secondary: '#FF7A00',
    heroBackground: '#022662',
    text: '#0E3D7B',
    lightText: '#4A5568',
    background: '#F8FAFC'
};

// Component for section headings
const SectionHeading = ({title, subtitle, centered = false, divider = false}) => (
    <Box textAlign={centered ? "center" : "left"} mb={6}>
        <Typography
            className="Montserrat"
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
                color: COLORS.primary,
                fontSize: {
                    xs: '1.7rem',
                    sm: '1.85rem',
                    md: '2rem',
                    lg: '2.125rem'
                },
                letterSpacing: "-1px",
            }}
        >
            {title}
        </Typography>

        {divider && (
            <Divider
                sx={{
                    backgroundColor: COLORS.secondary,
                    height: 4,
                    width: 100,
                    mx: centered ? 'auto' : 0,
                    my: 3
                }}
            />
        )}

        {subtitle && (
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                    maxWidth: centered ? 'md' : '100%',
                    mx: centered ? 'auto' : 0,
                    fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
                }}
            >
                {subtitle}
            </Typography>
        )}
    </Box>
);

// FAQ Item ComponentFrequently Asked Questions
const FaqItem = ({question, answer}) => {
    return (
        <Accordion sx={{mb: 2}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: COLORS.secondary}}/>}
            >
                <Typography fontWeight="bold" sx={{color: COLORS.primary}}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="text.secondary">{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

// Pillar Card Component
const PillarCard = ({title, icon, points}) => {
    const theme = useTheme();

    return (
        <Card elevation={3} sx={{
            height: '100%',
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: theme.shadows[10],
            },
        }}>
            <Box sx={{borderTop: `3px solid ${COLORS.secondary}`}}/>
            <CardContent sx={{p: 4}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                    marginBottom: theme.spacing(2),
                }}>
                    <Box sx={{
                        backgroundColor: `${COLORS.primary}10`,
                        padding: theme.spacing(1),
                        borderRadius: theme.shape.borderRadius,
                        color: COLORS.primary,
                    }}>
                        {icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{color: COLORS.primary}}>
                        {title}
                    </Typography>
                </Box>
                <List disablePadding>
                    {points.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                            sx={{
                                py: 1.5,
                                pl: 2,
                                borderLeft: `2px solid ${COLORS.secondary}`,
                                mb: 1.5,
                            }}
                        >
                            <ListItemText
                                primary={item}
                                sx={{color: 'text.secondary', m: 0}}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

// Hero Section Component
const HeroSection = () => (
    <Box
        component="section"
        sx={{
            position: 'relative',
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            py: {xs: 8, sm: 10, md: 12},

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
                    mt: {md: 13, xs: 6},
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
                        maxWidth: {xs: '100%', sm: '90%', md: '80%', lg: "70%"},
                        textAlign: 'center',
                    }}
                >
                    Student's Health Assessment And Performance Evaluation
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
                    Emotional Wellness Program for K12 learners
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
                    Designed for K12 students, this emotional wellness program aligns with students to build emotional
                    awareness, regulation, and the ability to recognize and manage emotions
                </Typography>
            </Box>
        </Container>
    </Box>
);

// Program Overview Section
const ProgramOverview = () => {
    const programHighlights = [
        'Expert-facilitated workshops',
        'Personalized counseling support',
        'Comprehensive assessment tools',
        'Community engagement strategies',
        'Measurable outcome reporting'
    ];

    return (
        <Box sx={{padding: {sm:"96px 0 0 0",xs:"66px 0 0 0"}}}>
            <Grid container spacing={4} mb={8}>
                <Grid item xs={12} lg={8}>
                    <Typography
                        className="Montserrat"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            color: COLORS.primary,
                            fontSize: "30px",
                            mb: 3,
                            letterSpacing: "-1px",
                        }}
                    >
                        Comprehensive Emotional Wellness for K12 Education
                    </Typography>
                    <Typography variant="body1" paragraph color="text.secondary">
                        Our annual Emotional Wellness Program, tailored for K12 learners in partnership with
                        esteemed academic institutions, builds emotional awareness, regulation, and the ability
                        to recognize and manage emotions.
                        Through expert-led training and interactive workshops, students enhance academic
                        performance and emotional intelligence—laying the foundation for lifelong success
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper
                        elevation={1}
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: 'grey.50',
                            borderTop: `4px solid ${COLORS.secondary}`
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color: COLORS.primary}}>
                            Program Highlights
                        </Typography>
                        <List disablePadding>
                            {programHighlights.map((item, index) => (
                                <ListItem key={index} disablePadding sx={{py: 0.5}}>
                                    <ListItemIcon sx={{minWidth: 24}}>
                                        <FiberManualRecord sx={{color: COLORS.secondary, fontSize: 10}}/>
                                    </ListItemIcon>
                                    <ListItemText primary={item} sx={{color: 'text.secondary'}}/>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

// Main component
export default function ShapePlusMUI() {
    // Data for the pillars section
    const pillars = [
        {
            title: 'Emotional Wellness Insights & Awareness Building',
            icon: <MenuBook fontSize="large"/>,
            points: [
                'Administer Comprehensive Emotional Wellness Surveys for students, educators, and parents to gather valuable insights into emotional well-being across the school community',
                'Facilitate Engaging Awareness Workshops focused on emotional intelligence, mindfulness practices, and stress management techniques to build foundational life skills',
                'Deliver In-Depth Emotional Well-Being Reports featuring actionable data, analysis, and tailored recommendations to support emotional health at the school level',
            ],
        },
        {
            title: 'Training & Capacity Building',
            icon: <People fontSize="large"/>,
            points: [
                'Student group classroom sessions focus on strengthening emotional regulation, enhancing stress adaptability, and developing coping mechanism',
                'Educators training integrating mindful teaching practices, build emotional resilience, and elevate student engagement',
                'Parents workshops empowering families to support childs emotional well-being, manage expectations mindfully, and reduce academic pressure',
            ],
        },
        {
            title: 'Integrated Well-Being Support for Enduring Growth',
            icon: <Favorite fontSize="large"/>,
            points: [
                'Offer personalised counselling, both online and in person, to support individual issues',
                'Create peer support networks that promote open communication, empathy, and collective resilience within the school community',
                'Embed emotional intelligence in classrooms through mindfulness, gratitude exercises and journaling',
            ],
        },
        {
            title: 'Measuring Impact, Shaping Future',
            icon: <TrendingUp fontSize="large"/>,
            points: [
                'Implement post-program evaluations to assess measurable improvements and personal growth across all participants',
                'Facilitate collaborative feedback and experience-sharing sessions with students, educators, and parents to capture insights and reflections',
                'Co-create a long-term sustainability roadmap with school leadership, ensuring continued integration of emotional wellness practices into the institutional framework',
            ],
        },
    ];

    // Data for FAQ section
    const faqs = [
        {
            question: "What is the SHAPE Wellness Program?",
            answer: "The SHAPE Wellness Program is a year-long, structured emotional wellness initiative for students, teachers, and parents to build emotional intelligence, reduce stress, and improve academic performance"
        },
        {
            question: "Who benefits from this program?",
            answer: "Students, teachers, parents, and non-academic staff benefit through awareness workshops, training sessions, personalized counseling, and self-help tools"
        },
        {
            question: "What makes this program different?",
            answer: "It is aligned with NEP 2020 and Mental Health Act 2017, offers measurable outcomes, and uses both expert-led sessions and app-based self-help tools"
        },
        {
            question: "How is the program delivered?",
            answer: "Through classroom group sessions, digital workshops, personalized counseling (online/offline), psychometric assessments, and a Freemium wellness app"
        },
        {
            question: "What emotional challenges does it address?",
            answer: "The program tackles academic stress, anxiety, emotional regulation, bullying, and lack of motivation in students, while supporting teachers and parents in managing related challenges"
        },
        {
            question: "Is the program measurable?",
            answer: "Yes. It tracks emotional, behavioral, academic, nutritional, physical, digital, and social parameters before and after implementation"
        },
        {
            question: "Is it suitable for all age groups?",
            answer: "Yes, it is designed for K-12 students with age-appropriate content and separate modules for teachers and parents"
        },
        {
            question: "What tools are included in the app?",
            answer: "Mood trackers, daily journals, self-assessments, recorded sessions, and emotional wellness quizzes are part of the app"
        },
        {
            question: "How can a school enroll?",
            answer: "Schools can reach out to the MTPL team through the contact information provided to schedule an initial assessment and program walkthrough"
        },
        {
            question: "What impact has the program shown so far?",
            answer: "Over 150,000 beneficiaries, 5,000+ workshops, and 3,500+ individual sessions have led to better attendance, reduced stress, improved academic and emotional outcomes, and early identification of critical cases"
        }
    ];

    return (
        <>
            <HeroSection/>
            <Box component="section" sx={{mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' }}}>
                {/* Hero Section */}

                <Container maxWidth="xl">
                    {/* Program Overview Section */}
                    <ProgramOverview/>

                    {/* Four-Pillar Approach Section */}
                    <Box>
                        <SectionHeading
                            title="Our Four-Pillar Approach"
                            subtitle="SHAPE delivers emotional wellness through four integrated components that work together to create lasting positive impact for higher education students"
                            centered={true}
                        />

                        <Grid container spacing={4}>
                            {pillars.map((pillar, idx) => (
                                <Grid item xs={12} md={6} key={idx}>
                                    <PillarCard
                                        title={pillar.title}
                                        icon={pillar.icon}
                                        points={pillar.points}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* FAQs Section */}
                    <Box sx={{padding: {sm:"96px 0 0 0",xs:"66px 0 0 0"}}}>
                        <SectionHeading
                            title="Frequently Asked Questions"
                            centered={true}
                            divider={true}
                        />

                        <Box>
                            {faqs.map((faq, idx) => (
                                <FaqItem
                                    key={idx}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}