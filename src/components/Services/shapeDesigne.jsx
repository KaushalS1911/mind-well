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
// import img1 from "../../assets/images/Services/shape1.png";
import img1 from "../../assets/images/Services/shapedesign.jpg";

// Constants
const COLORS = {
    primary: '#0E3D7B',
    secondary: '#FF7A00',
    heroBackground: '#022662',
    text: '#0E3D7B',
    lightText: '#4A5568',
    background: '#F8FAFC'
};

// Section Heading Component
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

// FAQ Item Component
const FaqItem = ({question, answer}) => (
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

// Program Highlights Component
const ProgramHighlights = ({items}) => (
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
            {items.map((item, index) => (
                <ListItem key={index} disablePadding sx={{py: 0.5}}>
                    <ListItemIcon sx={{minWidth: 24}}>
                        <FiberManualRecord sx={{color: COLORS.secondary, fontSize: 10}}/>
                    </ListItemIcon>
                    <ListItemText primary={item} sx={{color: 'text.secondary'}}/>
                </ListItem>
            ))}
        </List>
    </Paper>
);

// Hero Section Component
const HeroSection = () => (
    <Box
        sx={{
            position: 'relative',
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
                    mt: {md:13,xs:6},
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
                    Student's Health Assessment And Performance Evaluation +
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
                    Emotional Wellness Program for Higher Education
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
                    Designed for higher education students, this emotional wellness program aligns with NEP to
                    cultivate academic excellence, emotional resilience, and future readiness.
                </Typography>
            </Box>
        </Container>
    </Box>
);

// Program Overview Component
const ProgramOverview = () => {
    const programHighlights = [
        'NEP-aligned emotional wellness',
        'Leadership development focus',
        'Academic resilience building',
        'Real-world exposure integration',
        'Future readiness preparation'
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
                        Comprehensive Emotional Wellness for Higher Education
                    </Typography>
                    <Typography variant="body1" paragraph color="text.secondary">
                        Through real-world exposure and leadership development, SHAPE+ empowers students to thrive
                        holistically and grow into socially responsible global citizens.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our program integrates emotional intelligence with academic excellence, preparing students
                        not just for career success but for life-long resilience and personal fulfillment.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ProgramHighlights items={programHighlights}/>
                </Grid>
            </Grid>
        </Box>
    );
};

// Main component
export default function ShapeDesigne() {
    // Data for the pillars section
    const pillars = [
        {
            title: 'Establishing the Groundwork for Emotional Mastery',
            icon: <MenuBook fontSize="large"/>,
            points: [
                'Facilitate experiential learning sessions that introduce key principles of emotional intelligence, mindful awareness, and effective stress navigation',
                'Generate in-depth emotional wellness profiles using data-driven assessments to uncover core strengths and areas for growth',
                'Initiate reflective dialogue and guided activities to spark self-awareness and lay the foundation for long-term emotional development. Establishing',
            ],
        },
        {
            title: 'Empowering Growth Through Targeted Training',
            icon: <People fontSize="large"/>,
            points: [
                'Student enrichment sessions focus on building emotional regulation, enhancing academic resilience, and cultivating intrinsic motivation for sustained success',
                'Educator Development Workshops equip teachers with mindfulness-based strategies, classroom engagement techniques, and effective stress management tools',
            ],
        },
        {
            title: 'Integrated Emotional Wellness & Sustainable Support',
            icon: <Favorite fontSize="large"/>,
            points: [
                'Deliver customised individual counselling, accessible both online and on campus, to nurture the mental health of students and educators',
                'Facilitate supportive peer networks that encourage open dialogue, empathy, and the development of emotional strength and connection',
            ],
        },
        {
            title: 'Evaluating Outcomes & Shaping Sustainable Pathways',
            icon: <TrendingUp fontSize="large"/>,
            points: [
                'Administer post-program diagnostic evaluations to assess growth in emotional well-being and behavioural transformation',
                'Facilitate collaborative review forums with students, educators, and parents to gather qualitative feedback and shared insights',
                'Co-develop a long-term emotional wellness strategy in partnership with school leadership to ensure continued impact and institutional integration',
            ],
        },
    ];

    // Data for FAQ section
    const faqs = [
        {
            question: "What is the SHAPE Wellness Program?",
            answer: "A year-long emotional wellness initiative focused on making college students Future Ready through awareness, training, counseling, and measurable impact"
        },
        {
            question: "Who is this program meant for?",
            answer: "It is designed for college students, faculty, and academic institutions seeking to address emotional, academic, and career-related challenges"
        },
        {
            question: "What key challenges does it address?",
            answer: "It tackles academic stress, emotional health issues, lack of career guidance, skill gaps, and limited industry exposure"
        },
        {
            question: "Is this program aligned with NEP?",
            answer: "Yes, it follows NEP 2020 and Mental Health Act 2017 guidelines, supporting holistic student development"
        },
        {
            question: "What activities are included?",
            answer: "Workshops, counseling, peer support groups, self-assessments, classroom sessions, and psychologist-led guidance"
        },
        {
            question: "How is emotional well-being measured?",
            answer: "Through pre- and post-assessments focusing on academic performance, stress, resilience, attendance, and placement progress"
        },
        {
            question: "Is individual counseling available?",
            answer: "Yes, students can book personalized 15-minute sessions post-group activities"
        },
        {
            question: "Does this program help with employability?",
            answer: "Yes, it enhances soft skills, emotional intelligence, and industry readiness through hands-on sessions and mentorship"
        },
        {
            question: "How does it benefit the institution?",
            answer: "It boosts student engagement, reduces behavioral issues, improves academic health, and contributes to the institute's reputation"
        },
        {
            question: "How can a college get started?",
            answer: "Institutions can contact the MTPL team to schedule an introductory session and baseline assessment"
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
                            subtitle="SHAPE+ delivers emotional wellness through four integrated components that work together to create lasting positive impact for higher education students"
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