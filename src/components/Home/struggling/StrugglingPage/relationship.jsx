import React from 'react';
import {Box, Container, Typography, Grid, Paper, Button, Divider, IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BalanceIcon from '@mui/icons-material/Balance';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import SupportIcon from '@mui/icons-material/Support';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

// Image imports (retained from original)
import img1 from '../../../../assets/images/Home/Struggling/Relationshiphero.jpg';
import img8 from '../../../../assets/images/Home/Struggling/Healthy-Relationships.jpg';
import img15 from '../../../../assets/images/Home/Struggling/Relationshiptime.png';

const relationshipData = {
    title: 'Understanding and Managing Relationships: Building Stronger Connections for a Happier Lif',
    description: 'Discover practical strategies to build trust, improve communication, and maintain fulfilling relationships for a happier life.',
    image: img1,
    image1: img8,
    firstimage: img15,
    icon: <SelfImprovementIcon/>,
    solutionIcons: [
        <SpaIcon fontSize="large"/>,
        <LightbulbIcon fontSize="large"/>,
        <HeadphonesIcon fontSize="large"/>,
        <FitnessCenterIcon fontSize="large"/>,
        <BalanceIcon fontSize="large"/>,
    ],
    sections: [
        {
            title: 'What Defines a Healthy Relationship',
            content: [
                {
                    text: 'Healthy relationships are built on trust, good communication, respect, and mutual support. When you trust someone, you feel safe sharing your feelings and being vulnerable. Good communication means listening actively and explaining yourself clearly. Respect shows in honouring each other\'s feelings and boundaries. Mutual support involves helping each other grow and face challenges together. Having shared values and goals also helps partners understand each other better. According to Pew Research Center, couples who prioritize mutual respect and honest communication report higher satisfaction and longer-lasting bonds.',
                },
            ],
        },
        {
            title: 'The Role of Self-Awareness In Relationships',
            content: [
                {
                    text: 'Knowing yourself is key to managing your relationships. When you understand what you need, what annoys you, or your emotional triggers, you\'re better equipped to handle conflicts. Self-awareness helps you communicate more clearly and avoid accidental hurt. Your ability to recognize and manage your feelings—makes relationships stronger. The more you know yourself, the more intentional your actions and responses become.',
                },
            ],
        },
        {
            title: 'Common Relationship Goals',
            content: [
                {
                    text: 'Every relationship has goals, whether spoken or just understood. Some common aims include emotional closeness, financial stability, or plans for family. Regularly talking about what you both want keeps your goals aligned. For example, scheduling weekly check-ins to share your feelings and reassess your goals helps everyone stay on the same page. Clarity on shared and individual goals prevents misunderstandings and builds teamwork.',
                },
            ],
        },
        {
            title: 'Communication: The Cornerstone of Relationship Management',
            content: [
                {
                    subtitle: 'Effective Communication Skills',
                    text: 'Great communication isn\'t just talking; it’s about listening with your heart. Active listening involves giving your full attention, making eye contact, and repeating what’s been said to confirm understanding. Empathy helps you see things from your partner’s view, strengthening your connection. Assertiveness means sharing your feelings honestly without blaming or attacking. Avoid patterns like contempt or stonewalling, which damage trust. Studies show that couples who communicate effectively experience higher overall happiness in their relationship.',
                },
                {
                    subtitle: 'Overcoming Communication Barriers',
                    text: 'Many issues come from misunderstandings or holding back feelings. Sometimes, emotions pile up, leading to silent treatment or outbursts. Technology adds new hurdles—like misreading texts or social media mishaps that cause confusion. An example is how the "Mars-Venus" communication gap often affects couples—men and women might interpret words differently. To fix this, ask questions and clarify intent before jumping to conclusions.',
                },
                {
                    subtitle: 'Conflict Resolution Strategies',
                    text: 'Disagreements happen, but how you handle them matters. Use I-statements to express feelings without blame—like “I feel upset when...” instead of “You always...” Find common ground and look for compromise. When disagreements heat up, take a break. Practicing a “pause” gives both sides time to cool down. If conflicts keep coming up, consider couples therapy or coaching. Professional help can guide you toward healthier communication and deeper understanding.',
                },
            ],
        },
        {
            title: 'Building Emotional Intimacy and Trust',
            content: [
                {
                    subtitle: 'The Importance of Vulnerability',
                    text: 'Opening up about fears, hopes, or mistakes makes your bond stronger. Vulnerability, although scary at first, creates an authentic connection. Brené Brown teaches that real closeness begins when we risk showing our true selves without fear of judgment. Sharing feelings, even difficult ones, boosts intimacy and trust over time.',
                },
                {
                    subtitle: 'Consistency and Reliability',
                    text: 'Trust grows when you do what you say you will do. Being dependable means following through in small everyday actions—showing up on time, keeping promises, or being present. These small acts build a foundation of reliability. Over time, they prove you’re trustworthy, making the relationship more secure.',
                },
                {
                    subtitle: 'Rebuilding Trust after Breaches',
                    text: 'Sometimes, trust is broken—like after an argument or an act of betrayal. Rebuilding takes effort. First, acknowledge what happened and express remorse. Next, work on restitution—show through actions you’re committed to change. Patience is vital because trust takes time to restore. For instance, couples who communicate openly and set trust routines find it easier to heal after breaches. Routine check-ins and honest conversations support this process.',
                },
            ],
        },
        {
            title: 'Managing Expectations and Navigating Change',
            content: [
                {
                    subtitle: 'Setting Realistic Expectations',
                    text: 'Unrealistic ideals can hurt your relationship. No one is perfect; expecting perfection sets you up for disappointment. Recognize your partner’s strengths and flaws. Accepting imperfections allows love to grow naturally.',
                },
                {
                    subtitle: 'Embracing Personal and Partner Growth',
                    text: 'Supporting each other’s individual pursuits makes your relationship healthier. Whether pursuing a hobby, new career, or education, give space for growth. Life also changes—such as career shifts, parenthood, or aging. Adapting together helps you stay connected through transitions.',
                },
                {
                    subtitle: 'Dealing with External Stressors',
                    text: 'Outside issues—like money troubles or health concerns—can strain your relationship. Instead of letting stress build up, work as a team to solve problems. Keep lines of communication open and support each other emotionally. Resilience is built on shared effort and understanding, making tough times manageable.',
                },
            ],
        },
        {
            title: 'The Role of Self-Care and Individual Fulfillment',
            content: [
                {
                    subtitle: 'Prioritizing Self-Care',
                    text: 'Taking care of yourself improves your relationship. When you’re happy and healthy, you’re more patient and loving. Spend time on hobbies, exercise, or mental wellness activities. Self-care isn’t selfish—it’s necessary for long-term happiness.',
                },
                {
                    subtitle: 'Maintaining Independence',
                    text: 'Healthy relationships include personal space and boundaries. Having your own friends, interests, and goals keeps your identity intact. Independence brings balance and makes your connection more genuine.',
                },
                {
                    subtitle: 'Seeking Support When Needed',
                    text: 'Feeling overwhelmed or burned out is normal sometimes. If things feel too heavy, seek help. This could be a counsellor, a support group, or a workshop. Getting help early prevents issues from worsening and keeps your relationship strong.',
                },
            ],
        },
    ],
    solutions: [
        'Improve communication skills',
        'Set healthy boundaries',
        'Practice active listening',
        'Develop empathy',
        'Seek relationship counseling',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Counseling helped us communicate better and rebuild trust.',
            image: 'https://i.pravatar.cc/40?img=10'
        },
        {
            name: 'Michael, 34',
            text: 'Learning to listen actively transformed our relationship.',
            image: 'https://i.pravatar.cc/40?img=11'
        },
        {
            name: 'David, 41',
            text: 'Couples therapy gave us tools to navigate conflicts.',
            image: 'https://i.pravatar.cc/40?img=12'
        },
    ],
    references: [
        'Pew Research Center. Relationship Satisfaction and Communication.',
        'Brené Brown. The Power of Vulnerability.',
        'Gottman Institute. Effective Communication in Relationships.',
    ],
    motivation: 'Maintaining healthy relationships is essential for our overall happiness. When your connections with loved ones are strong, your mental, emotional, and even physical health benefit. Yet, modern life throws many challenges your way—stress, busy schedules, misunderstandings—that can make keeping relationships fulfilling hard. The goal of this piece of information is to give you clear insights, practical strategies, and easy tips to better understand and manage your relationships.',
    counseling: 'Our expert counselors provide personalized strategies to strengthen your relationships. Start building a happier partnership today.',
};

const primary = '#012765';
const secondary = '#FF7F1E';
const softGray = '#F8FAFC';
const lightOrange = '#FFF0E5';
const textMain = '#1e293b';
const textBody = '#4B5563';

const doodleSVG = (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="28" stroke={secondary} strokeWidth="2" strokeDasharray="6 6"/>
    </svg>
);

const heartSVG = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 29s-9.5-7.5-12-12.5C1.5 12 4.5 7 9.5 7c2.5 0 4.5 2 6.5 4.5C18 9 20 7 22.5 7 27.5 7 30.5 12 28 16.5 25.5 21.5 16 29 16 29z"
            stroke={secondary}
            strokeWidth="2"
            fill="none"
        />
    </svg>
);

const Relationship = () => {
    const navigate = useNavigate();
    const data = relationshipData;

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${data.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    textAlign: 'center',
                    color: 'white',
                    py: {xs: 8, sm: 10, md: 22},
                    overflow: "hidden",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container sx={{position: 'relative', zIndex: 2,mt:5}}>
                    <Typography
                        className="Montserrat"
                        sx={{
                            fontSize: {xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem'},
                            fontWeight: 800,
                            color: secondary,
                            mb: 2,
                        }}
                    >
                        Relationships
                    </Typography>
                    <Divider sx={{backgroundColor: secondary, height: 4, width: 120, margin: 'auto', my: 3}}/>
                    <Typography
                        variant="h6"
                        sx={{fontWeight: 400, maxWidth: 800, mx: 'auto', fontFamily: 'Arial', lineHeight: 1.6}}
                    >
                        {data.description}
                    </Typography>
                </Container>
            </Box>

            {/* Main Content Section */}
            <Box
                sx={{
                    minHeight: '100vh',
                    pt: 8,
                    background: `linear-gradient(180deg, ${softGray} 0%, #FFFFFF 100%)`,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="xl">
                    <Button
                        onClick={() => navigate(-1)}
                        startIcon={<ArrowBackIcon/>}
                        sx={{
                            mb: 4,
                            color: primary,
                            fontWeight: 600,
                            fontFamily: 'Montserrat',
                            '&:hover': {backgroundColor: primary, color: 'white'},
                        }}
                    >
                        Back
                    </Button>

                    {/* Introduction Section */}
                    <Grid container spacing={4} alignItems="center" sx={{mb: {xs: 8, md: 12}}}>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 32px rgba(1,39,101,0.2)',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={data.firstimage}
                                    alt={data.title}
                                    sx={{
                                        width: '100%',
                                        height: {xs: 300, sm: 400, md: 450},
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s',
                                        '&:hover': {transform: 'scale(1.05)'},
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `linear-gradient(to top, rgba(0,0,0,0.3), transparent)`,
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Box sx={{position: 'relative', px: {xs: 2, sm: 4}, mt: {xs: 4, md: 0}}}>
                                <Typography
                                    className="Montserrat"
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,
                                        color: primary,
                                        mb: 3,
                                        fontSize: {
                                            xs: '1.7rem',
                                            sm: '1.85rem',
                                            md: '2rem',
                                            lg: '2.125rem',
                                        },
                                    }}
                                >
                                    {data.title}
                                </Typography>
                                <Box sx={{
                                    position: 'absolute',
                                    top: -40,
                                    left: -50,
                                    zIndex: 1,
                                    opacity: 0.7
                                }}>{doodleSVG}</Box>
                                <Typography
                                    sx={{
                                        color: textBody,
                                        mb: 4,
                                        maxWidth: 700,
                                        fontFamily: 'Arial',
                                        fontSize: {xs: '1rem', sm: '1.1rem'},
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {data.motivation}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: secondary,
                                        color: 'white',
                                        fontWeight: 700,
                                        borderRadius: 3,
                                        px: 5,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontFamily: 'Montserrat',
                                        boxShadow: '0 4px 16px rgba(255,127,30,0.3)',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                            backgroundColor: secondary,
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 6px 24px rgba(255,127,30,0.4)',
                                        },
                                    }}
                                >
                                    Book a Counsellor
                                </Button>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: -20,
                                        right: -20,
                                        zIndex: 1,
                                        opacity: 0.7,
                                        display: {xs: 'none', sm: 'block'},
                                    }}
                                >
                                    {heartSVG}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Detailed Content Sections */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={8}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: {xs: 3, sm: 5},
                                    borderRadius: 4,
                                    background: 'white',
                                    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                    mb: 6,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 6,
                                        background: `linear-gradient(to right, ${primary}, ${secondary})`,
                                    }}
                                />
                                <Box sx={{backgroundColor: primary, color: 'white', p: 3, borderRadius: 2, mb: 4}}>
                                    <Typography variant="h5" className="Montserrat" sx={{fontWeight: 700}}>
                                        Understanding Relationships
                                    </Typography>
                                </Box>

                                {data.sections.map((section, index) => (
                                    <Box key={index} sx={{mb: 5}}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: primary,
                                                mb: 3,
                                                fontFamily: 'Montserrat',
                                                fontWeight: 700,
                                                borderLeft: `4px solid ${secondary}`,
                                                pl: 2,
                                            }}
                                        >
                                            {section.title}
                                        </Typography>
                                        {section.content.map((item, idx) => (
                                            <Box key={idx} sx={{mb: 3,textAlign:"justify"}}>
                                                {item.subtitle && (
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            color: textMain,
                                                            fontWeight: 600,
                                                            mb: 1,
                                                            fontFamily: 'Montserrat',
                                                            display: 'flex',
                                                            alignItems: 'center',

                                                        }}
                                                    >
                                                        <SelfImprovementIcon sx={{color: secondary, mr: 1}}/>
                                                        {item.subtitle}
                                                    </Typography>
                                                )}
                                                <Typography
                                                    sx={{
                                                        color: textBody,
                                                        fontFamily: 'Arial',
                                                        lineHeight: 1.7,
                                                        fontSize: {xs: '0.95rem', sm: '1rem'},
                                                    }}
                                                >
                                                    {item.text}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                ))}

                                {/*<Box sx={{mt: 6}}>*/}
                                {/*    <Typography*/}
                                {/*        variant="h6"*/}
                                {/*        sx={{color: primary, mb: 3, fontFamily: 'Montserrat', fontWeight: 700}}*/}
                                {/*    >*/}
                                {/*        References*/}
                                {/*    </Typography>*/}
                                {/*    <Grid container spacing={2}>*/}
                                {/*        {data.references.map((ref, index) => (*/}
                                {/*            <Grid item xs={12} sm={6} key={index}>*/}
                                {/*                <Box*/}
                                {/*                    sx={{*/}
                                {/*                        p: 2,*/}
                                {/*                        backgroundColor: softGray,*/}
                                {/*                        borderRadius: 2,*/}
                                {/*                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',*/}
                                {/*                    }}*/}
                                {/*                >*/}
                                {/*                    <Box sx={{*/}
                                {/*                        color: textBody,*/}
                                {/*                        fontFamily: 'Arial',*/}
                                {/*                        fontSize: '0.95rem'*/}
                                {/*                    }}>*/}
                                {/*                        • {ref}*/}
                                {/*                    </Box>*/}
                                {/*                </Box>*/}
                                {/*            </Grid>*/}
                                {/*        ))}*/}
                                {/*    </Grid>*/}
                                {/*</Box>*/}
                            </Paper>

                            {/*<Paper*/}
                            {/*    elevation={3}*/}
                            {/*    sx={{*/}
                            {/*        p: {xs: 3, sm: 5},*/}
                            {/*        borderRadius: 4,*/}
                            {/*        background: 'white',*/}
                            {/*        boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*        mb: 6,*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Typography*/}
                            {/*        variant="h5"*/}
                            {/*        sx={{*/}
                            {/*            color: primary,*/}
                            {/*            mb: 3,*/}
                            {/*            fontFamily: 'Montserrat',*/}
                            {/*            fontWeight: 700,*/}
                            {/*            textAlign: 'center',*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        You're Not Alone*/}
                            {/*    </Typography>*/}
                            {/*    <Grid container spacing={3}>*/}
                            {/*        {data.testimonials.map((testimonial, index) => (*/}
                            {/*            <Grid item xs={12} xl={4} key={index}>*/}
                            {/*                <Box sx={{*/}
                            {/*                    p: 3,*/}
                            {/*                    backgroundColor: softGray,*/}
                            {/*                    borderRadius: 2,*/}
                            {/*                    position: 'relative'*/}
                            {/*                }}>*/}
                            {/*                    <Typography*/}
                            {/*                        sx={{*/}
                            {/*                            fontSize: 60,*/}
                            {/*                            color: secondary,*/}
                            {/*                            position: 'absolute',*/}
                            {/*                            top: 0,*/}
                            {/*                            right: 10,*/}
                            {/*                            fontFamily: 'Georgia, serif',*/}
                            {/*                        }}*/}
                            {/*                    >*/}
                            {/*                        "*/}
                            {/*                    </Typography>*/}
                            {/*                    <Typography sx={{*/}
                            {/*                        fontStyle: 'italic',*/}
                            {/*                        color: textBody,*/}
                            {/*                        mb: 2,*/}
                            {/*                        fontFamily: 'Arial'*/}
                            {/*                    }}>*/}
                            {/*                        {testimonial.text}*/}
                            {/*                    </Typography>*/}
                            {/*                    <Box sx={{display: 'flex', alignItems: 'center'}}>*/}
                            {/*                        <Box*/}
                            {/*                            component="img"*/}
                            {/*                            src={testimonial.image}*/}
                            {/*                            sx={{width: 40, height: 40, borderRadius: '50%', mr: 1}}*/}
                            {/*                        />*/}
                            {/*                        <Typography sx={{*/}
                            {/*                            fontWeight: 600,*/}
                            {/*                            color: textMain,*/}
                            {/*                            fontFamily: 'Montserrat'*/}
                            {/*                        }}>*/}
                            {/*                            {testimonial.name}*/}
                            {/*                        </Typography>*/}
                            {/*                    </Box>*/}
                            {/*                </Box>*/}
                            {/*            </Grid>*/}
                            {/*        ))}*/}
                            {/*    </Grid>*/}
                            {/*</Paper>*/}
                        </Grid>

                        {/* Sidebar */}
                        <Grid item xs={12} lg={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 0,
                                    mb: 4,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    background: 'white',
                                    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                }}
                            >
                                <Box sx={{position: 'relative'}}>
                                    <Box
                                        component="img"
                                        src={data.image1}
                                        alt="Expert"
                                        sx={{
                                            width: '100%',
                                            height: {xs: 250, sm: 300},
                                            objectFit: 'cover',
                                            borderRadius: '4px 4px 0 0'
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 16,
                                            left: 16,
                                            background: secondary,
                                            color: 'white',
                                            px: 3,
                                            py: 1,
                                            borderRadius: 2,
                                            fontWeight: 700,
                                            fontSize: {xs: '0.9rem', sm: '1rem'},
                                            fontFamily: 'Montserrat',
                                            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                                        }}
                                    >
                                        12+ Years of Experience
                                    </Box>
                                </Box>
                                <Box sx={{p: 4}}>
                                    <Typography
                                        variant="h6"
                                        sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}
                                    >
                                        Leading Relationship Counseling
                                    </Typography>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                        <ChatIcon sx={{color: secondary, mr: 1.5}}/>
                                        <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>
                                            Online Counseling
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                        <GroupIcon sx={{color: secondary, mr: 1.5}}/>
                                        <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>
                                            Couples Therapy
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: secondary,
                                            color: 'white',
                                            fontWeight: 700,
                                            borderRadius: 3,
                                            mt: 2,
                                            px: 4,
                                            py: 1.5,
                                            fontFamily: 'Montserrat',
                                            transition: 'transform 0.2s',
                                            '&:hover': {backgroundColor: secondary, transform: 'translateY(-3px)'},
                                        }}
                                    >
                                        Explore Counseling
                                    </Button>
                                </Box>
                            </Paper>

                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'white',
                                    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                    mb: 4,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}
                                >
                                    Assess Your Relationship
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>
                                    Take our quick assessment to gain personalized insights and recommendations for your
                                    relationship.
                                </Typography>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: secondary,
                                        py: 1.5,
                                        fontFamily: 'Montserrat',
                                        fontWeight: 700,
                                        borderRadius: 3,
                                        transition: 'transform 0.2s',
                                        '&:hover': {backgroundColor: secondary, transform: 'translateY(-3px)'},
                                    }}
                                >
                                    Start Assessment
                                </Button>
                            </Paper>


                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'white',
                                    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                    mb: 4,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}
                                >
                                    Expert Support
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>
                                    Connect with professionals for tailored guidance to strengthen your relationships.
                                </Typography>
                                <Box sx={{mb: 4}}>
                                    {[
                                        {
                                            icon: <ChatIcon/>,
                                            title: '1-on-1 Counseling',
                                            desc: 'Personal sessions with licensed therapists',
                                        },
                                        {
                                            icon: <GroupIcon/>,
                                            title: 'Couples Therapy',
                                            desc: 'Connect with your partner to build stronger bonds',
                                        },
                                        {
                                            icon: <SupportIcon/>,
                                            title: 'Text Support',
                                            desc: 'Immediate assistance via chat',
                                        },
                                    ].map((option, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 2,
                                                backgroundColor: softGray,
                                                borderRadius: 2,
                                                mb: 2,
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    backgroundColor: lightOrange,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mr: 2,
                                                    color: secondary,
                                                }}
                                            >
                                                {option.icon}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{fontWeight: 600, color: primary, fontFamily: 'Montserrat'}}
                                                >
                                                    {option.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>
                                                    {option.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: secondary,
                                        py: 1.5,
                                        fontFamily: 'Montserrat',
                                        fontWeight: 700,
                                        borderRadius: 3,
                                        transition: 'transform 0.2s',
                                        '&:hover': {backgroundColor: secondary, transform: 'translateY(-3px)'},
                                    }}
                                >
                                    Book a Session
                                </Button>
                            </Paper>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'white',
                                    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}
                                >
                                    Helpful Resources
                                </Typography>
                                {[
                                    {
                                        icon: <MenuBookIcon />,
                                        title: 'Self-Help Workbook',
                                        desc: 'Practical exercises and tools',
                                        link: '#',
                                    },
                                    {
                                        icon: <HeadphonesIcon />,
                                        title: 'Guided Meditation',
                                        desc: 'Audio sessions for different needs',
                                        link: '#',
                                    },
                                    {
                                        icon: <PsychologyIcon />,
                                        title: 'Expert Articles',
                                        desc: 'Insights from professionals',
                                        link: '#',
                                    },
                                    {
                                        icon: <VideoLibraryIcon />,
                                        title: 'Video Tutorials',
                                        desc: 'Visual guides for techniques',
                                        link: '#',
                                    },
                                ].map((resource, index) => (
                                    <Box
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 2,
                                                borderBottom: index < 3 ? `1px solid ${softGray}` : 'none',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    backgroundColor: lightOrange,
                                                    borderRadius: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mr: 2,
                                                    color: secondary,
                                                }}
                                            >
                                                {resource.icon}
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ fontWeight: 600, color: primary, fontFamily: 'Montserrat' }}
                                                >
                                                    <a href={resource.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                        {resource.title}
                                                    </a>
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>
                                                    {resource.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Call to Action */}
                    <Box
                        sx={{
                            backgroundColor: primary,
                            color: 'white',
                            textAlign: 'center',
                            p: 6,
                            borderRadius: 2,
                            mt: 6,
                        }}
                    >
                        <Typography
                            className="Montserrat"
                            sx={{
                                mb: 2,
                                fontWeight: 600,
                                fontSize: {xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem'},
                            }}
                        >
                            Ready to Strengthen Your Relationships?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you build stronger connections with professional guidance
                            tailored to your unique situation.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: secondary,
                                py: 1.5,
                                fontFamily: 'Montserrat',
                                fontSize: '1.1rem',
                                px: 4,
                                '&:hover': {backgroundColor: secondary},
                            }}
                        >
                            Book a Counselor Now
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Relationship;