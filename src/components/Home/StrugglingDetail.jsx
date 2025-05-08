import React from 'react';
import {Box, Container, Typography, Grid, Paper, Button, Divider} from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SupportIcon from '@mui/icons-material/Support';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimerIcon from '@mui/icons-material/Timer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import img2 from "../../assets/images/Home/Struggling/health.jpg";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';


const strugglingData = {
    "Stress-Anxiety": {
        title: "Understanding and Managing Stress & Anxiety",
        description: "Learn about the causes, symptoms, and effective strategies to manage stress and anxiety in your daily life.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        icon: <SelfImprovementIcon/> ,
        causes: [
            "Work or academic pressure",
            "Financial concerns",
            "Relationship issues",
            "Health problems",
            "Major life changes"
        ],
        symptoms: [
            "Racing thoughts",
            "Difficulty concentrating",
            "Sleep problems",
            "Physical tension",
            "Irritability"
        ],
        solutions: [
            "Practice mindfulness and meditation",
            "Regular physical exercise",
            "Healthy sleep habits",
            "Time management techniques",
            "Professional counseling"
        ],
        motivation: "Remember that stress and anxiety are common experiences, and seeking help is a sign of strength. With the right tools and support, you can learn to manage these feelings effectively.",
        counseling: "Our experienced therapists can help you develop personalized strategies to manage stress and anxiety. Book a session today to start your journey towards better mental health."
    },
    "Relationship": {
        title: "Building Healthy Relationships",
        description: "Discover how to improve communication, build trust, and maintain healthy relationships in your life.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        causes: [
            "Communication breakdown",
            "Trust issues",
            "Different expectations",
            "Lack of boundaries",
            "Past experiences"
        ],
        symptoms: [
            "Frequent conflicts",
            "Feeling disconnected",
            "Difficulty expressing needs",
            "Avoidance of intimacy",
            "Emotional distance"
        ],
        solutions: [
            "Improve communication skills",
            "Set healthy boundaries",
            "Practice active listening",
            "Develop empathy",
            "Seek relationship counseling"
        ],
        motivation: "Healthy relationships are built on mutual respect, trust, and understanding. With commitment and the right tools, you can create and maintain fulfilling connections.",
        counseling: "Our relationship counselors can help you and your partner develop stronger communication skills and build a more fulfilling relationship. Take the first step towards a healthier connection."
    },
    "Grief-Trauma": {
        title: "Healing from Grief and Trauma",
        description: "Find support and guidance in processing loss and traumatic experiences.",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        causes: [
            "Loss of a loved one",
            "Accidents or injuries",
            "Abuse or violence",
            "Natural disasters",
            "Medical trauma"
        ],
        symptoms: [
            "Intense sadness",
            "Flashbacks or nightmares",
            "Avoidance behaviors",
            "Emotional numbness",
            "Difficulty trusting others"
        ],
        solutions: [
            "Grief counseling",
            "Trauma-focused therapy",
            "Support groups",
            "Self-care practices",
            "Professional help"
        ],
        motivation: "Healing from grief and trauma takes time and patience. You don't have to go through this journey alone. Our compassionate therapists are here to support you every step of the way.",
        counseling: "Our specialized grief and trauma counselors can help you process your experiences and develop healthy coping mechanisms. Begin your healing journey today."
    },
    "Addiction": {
        title: "Overcoming Addiction",
        description: "Get support in breaking free from harmful patterns and building a healthier life.",
        image: "https://images.unsplash.com/photo-1516302758847-719703c10c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        causes: [
            "Genetic predisposition",
            "Environmental factors",
            "Mental health conditions",
            "Social pressure",
            "Coping mechanism"
        ],
        symptoms: [
            "Loss of control",
            "Continued use despite consequences",
            "Withdrawal symptoms",
            "Neglecting responsibilities",
            "Failed attempts to quit"
        ],
        solutions: [
            "Professional treatment programs",
            "Support groups",
            "Behavioral therapy",
            "Medication-assisted treatment",
            "Lifestyle changes"
        ],
        motivation: "Recovery is possible, and you're stronger than you think. Every step towards healing is a victory. Let us help you build a foundation for lasting recovery.",
        counseling: "Our addiction specialists can create a personalized treatment plan to help you overcome addiction and build a healthier future. Take the first step towards recovery."
    },
    "Self-esteem": {
        title: "Building Self-Esteem and Confidence",
        description: "Learn to develop a positive self-image and build lasting confidence.",
        image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        causes: [
            "Negative self-talk",
            "Past experiences",
            "Social comparison",
            "Unrealistic standards",
            "Lack of support"
        ],
        symptoms: [
            "Self-doubt",
            "Fear of failure",
            "Difficulty accepting compliments",
            "Perfectionism",
            "Avoiding challenges"
        ],
        solutions: [
            "Positive affirmations",
            "Cognitive behavioral therapy",
            "Setting achievable goals",
            "Practicing self-compassion",
            "Building support networks"
        ],
        motivation: "Your worth is not defined by your achievements or others' opinions. You are valuable just as you are. Let's work together to help you see your true potential.",
        counseling: "Our therapists can help you develop a healthier self-image and build lasting confidence. Start your journey to self-acceptance today."
    },
    "Bullying": {
        title: "Dealing with Bullying",
        description: "Get support in handling bullying situations and building resilience.",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        causes: [
            "Power imbalance",
            "Social dynamics",
            "Prejudice or discrimination",
            "Family environment",
            "Peer pressure"
        ],
        symptoms: [
            "Anxiety and depression",
            "Social withdrawal",
            "Academic difficulties",
            "Physical symptoms",
            "Changes in behavior"
        ],
        solutions: [
            "Seek support from trusted adults",
            "Document incidents",
            "Build a support network",
            "Develop coping strategies",
            "Professional counseling"
        ],
        motivation: "You are not alone in this. Bullying is never your fault, and you deserve to feel safe and respected. Together, we can help you navigate this challenging situation.",
        counseling: "Our counselors can help you develop strategies to handle bullying and build resilience. Reach out for support today."
    },
    "Overthinking": {
        title: "Managing Overthinking",
        description: "Learn to break free from the cycle of excessive thinking and find peace of mind.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        causes: [
            "Anxiety",
            "Perfectionism",
            "Past experiences",
            "Uncertainty",
            "High expectations"
        ],
        symptoms: [
            "Racing thoughts",
            "Difficulty sleeping",
            "Decision paralysis",
            "Constant worry",
            "Mental exhaustion"
        ],
        solutions: [
            "Mindfulness meditation",
            "Thought challenging",
            "Setting time limits",
            "Physical exercise",
            "Professional guidance"
        ],
        motivation: "Your mind is powerful, but it doesn't have to control you. With the right tools, you can learn to manage your thoughts and find mental clarity.",
        counseling: "Our therapists can help you develop strategies to manage overthinking and find peace of mind. Start your journey to mental clarity today."
    }
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
            stroke={secondary} strokeWidth="2" fill="none"/>
    </svg>
);

const StrugglingDetail = () => {
    const {topic} = useParams();
    const navigate = useNavigate();
    const data = strugglingData[topic];

    if (!data) {
        return (
            <Container maxWidth="xl" sx={{py: 8}}>
                <Typography variant="h4" color="error">Topic not found</Typography>
                <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon/>}>
                    Go Back
                </Button>
            </Container>
        );
    }

    // Example Unsplash images for hero
    const heroPersonImg1 = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80';
    const heroPersonImg2 = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80';
    // Example Unsplash image for sidebar expert
    const expertImg = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80';

    return (
        <>
            <Box sx={{
                py: {xs: 8, sm: 10, md: 22},
                // pb: 14,
                position: 'relative',
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 1
                }}/>
                <Container sx={{position: 'relative', zIndex: 2}}>
                    <Typography className={"Montserrat"} sx={{
                        fontSize: {xs: '1.7rem', sm: '2rem', md: '2.25rem'},
                        fontWeight: '700',
                        color: "#FE6A00",
                        mt: 8,
                        mb: 2
                    }}>
                        {topic}
                    </Typography>
                    <Divider sx={{backgroundColor: "#FF7A00", height: 4, width: 100, margin: "auto", my: 3}}/>
                    <Typography variant="h6" sx={{color: '#fff', fontWeight: 400}}>
                        {data.description}
                    </Typography>
                </Container>
            </Box>
            <Box sx={{minHeight: '100vh', pt: 10, mx: {xs: '20px', sm: '70px', md: '90px', xl: '100px'}}}>
                <Container maxWidth="xl">
                    <Button
                        onClick={() => navigate(-1)}
                        startIcon={<ArrowBackIcon/>}
                        sx={{
                            mb: 4,
                            color: primary,
                            fontWeight: 600,
                            fontFamily: 'Montserrat',
                            '&:hover': {
                                backgroundColor: primary,
                                color: 'white'
                            }
                        }}
                    >
                        Back to Struggling Topics
                    </Button>

                    {/* Hero Section with Two Person Images and Doodles */}
                    <Grid container spacing={4} alignItems="center" sx={{mb: 6}}>
                        <Grid item xs={12} md={7}>
                            <Box sx={{position: 'relative', pl: {md: 6, xs: 0}}}>
                                <Typography
                                    className={"Montserrat"}
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#012765",
                                        mb: 2,
                                        fontSize: {
                                            xs: '1.7rem',
                                            sm: '1.85rem',
                                            md: '2rem',
                                            lg: '2.125rem'
                                        },
                                        lineHeight: 1.1
                                    }}
                                >
                                    Embrace Your Mental Well-being<br/>- You Are Not Alone.
                                </Typography>
                                <Box sx={{position: 'absolute', top: -30, left: -40, zIndex: 1}}>{doodleSVG}</Box>
                                <Box sx={{position: 'absolute', top: 60, left: 80, zIndex: 1}}>{heartSVG}</Box>
                                <Typography sx={{color: textBody, mb: 3, maxWidth: 500, fontFamily: 'Arial'}}>
                                    Welcome to SereneMinds, a sanctuary for mental well-being and personal growth. We
                                    understand that life's journey can be challenging, and at times, it may feel
                                    overwhelming. But remember: you are not alone in this path. Together, we can
                                    cultivate inner strength, resilience, and happiness.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: secondary,
                                        color: 'white',
                                        fontWeight: 700,
                                        borderRadius: 2,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1rem',
                                        fontFamily: 'Montserrat',
                                        boxShadow: '0 2px 8px rgba(255,127,30,0.10)',
                                        '&:hover': {backgroundColor: '#e86c00'}
                                    }}
                                >
                                    Book a Counsellor
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: {md: 260, xs: 240}
                            }}>
                                {/* Accent color block behind images */}
                                <Box
                                    sx={{
                                        width: 220,
                                        height: 220,
                                        borderRadius: 4,
                                        background: secondary,
                                        position: 'absolute',
                                        top: 30,
                                        left: 30,
                                        zIndex: 0,
                                        opacity: 0.12
                                    }}
                                />
                                {/* First image */}
                                <Box
                                    component="img"
                                    src={heroPersonImg1}
                                    alt="Friendly person 1"
                                    sx={{
                                        width: 140,
                                        height: 140,
                                        borderRadius: 4,
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        left: 0,
                                        top: 30,
                                        zIndex: 2,
                                        boxShadow: '0 4px 24px rgba(1,39,101,0.10)'
                                    }}
                                />
                                {/* Second image, slightly overlapping */}
                                <Box
                                    component="img"
                                    src={heroPersonImg2}
                                    alt="Friendly person 2"
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: 4,
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        left: 80,
                                        top: 80,
                                        zIndex: 3,
                                        boxShadow: '0 4px 24px rgba(255,127,30,0.10)',
                                        border: `4px solid ${softGray}`
                                    }}
                                />
                                {/* Doodle SVGs */}
                                <Box sx={{position: 'absolute', bottom: 10, right: 10, zIndex: 4}}>{doodleSVG}</Box>
                                <Box sx={{position: 'absolute', top: 0, right: 0, zIndex: 4}}>{heartSVG}</Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        {/* Main Content */}
                        <Grid item xs={12} lg={8}>
                            {/* Understanding Section */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(1,39,101,0.07)',
                                    mb: 4
                                }}
                            >
                                <Box sx={{
                                    backgroundColor: primary,
                                    color: 'white',
                                    p: 3,
                                    borderRadius: 2,
                                    mb: 3
                                }}>
                                    <Typography variant="h5" className="Montserrat"
                                                sx={{fontWeight: 700}}>
                                        Understanding {topic}
                                    </Typography>
                                </Box>
                                <Typography variant="h6" sx={{color: textMain, mb: 2, fontFamily: 'Montserrat'}}>
                                    What you're experiencing is normal
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial'}}>
                                    {data.description}
                                </Typography>
                                {/* Quick Help Section */}
                                <Box sx={{
                                    backgroundColor: lightOrange,
                                    p: 3,
                                    borderRadius: 2,
                                    mb: 4
                                }}>
                                    <Typography variant="h6" sx={{color: textMain, mb: 2,fontWeight:"600"}}>
                                        Quick Relief Strategies
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {data.solutions.slice(0, 4).map((solution, index) => (
                                            <Grid item xs={12} sm={6} key={index}>
                                                <Box sx={{
                                                    backgroundColor: 'white',
                                                    p: 2,
                                                    borderRadius: 2,
                                                    textAlign: 'center',
                                                    transition: 'transform 0.2s',
                                                    '&:hover': {
                                                        transform: 'translateY(-3px)',
                                                        boxShadow: '0 4px 8px rgba(255,127,30,0.10)'
                                                    }
                                                }}>
                                                    <EmojiEmotionsIcon sx={{color: secondary, fontSize: 30, mb: 1}}/>
                                                    <Typography variant="subtitle1" sx={{
                                                        fontWeight: 600,
                                                        color: "#012765",
                                                        fontFamily: 'Montserrat'
                                                    }}>
                                                        {solution}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                {/* Techniques Section */}
                                <Typography variant="h6"
                                            sx={{color: textMain, mb: 3, fontWeight: "600", fontFamily: 'Montserrat'}}>
                                    Evidence-Based Techniques
                                </Typography>
                                <Grid container spacing={2}>
                                    {data.solutions.map((solution, index) => (
                                        <Grid item xs={12} key={index}>
                                            <Box sx={{
                                                p: 3,
                                                backgroundColor: softGray,
                                                borderRadius: 2,
                                                position: 'relative',
                                                transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 4px 8px rgba(1,39,101,0.10)'
                                                }
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    top: 15,
                                                    right: 15,
                                                    backgroundColor: secondary,
                                                    color: 'white',
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Montserrat'
                                                }}>
                                                    {index + 1}
                                                </Box>
                                                <Typography variant="h6"
                                                            sx={{color: "#012765", mb: 1, fontFamily: 'Montserrat'}}>
                                                    {solution}
                                                </Typography>
                                                <Typography sx={{color: textBody, mb: 2, fontFamily: 'Arial'}}>
                                                    Learn effective techniques to manage and overcome this challenge.
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        backgroundColor: secondary,
                                                        fontFamily: 'Montserrat',
                                                        '&:hover': {
                                                            backgroundColor: '#e86c00'
                                                        }
                                                    }}
                                                >
                                                    Learn More
                                                </Button>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                            {/* Success Stories */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 2,
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(1,39,101,0.07)'
                                }}
                            >
                                <Typography variant="h5" sx={{
                                    color: "#012765",
                                    mb: 3,
                                    fontWeight: "600",
                                    textAlign: 'center',
                                    fontFamily: 'Montserrat'
                                }}>
                                    You're Not Alone
                                </Typography>
                                <Grid container spacing={3}>
                                    {[1, 2, 3].map((_, index) => (
                                        <Grid item xs={12} lg={4} key={index}>
                                            <Box sx={{
                                                p: 3,
                                                backgroundColor: softGray,
                                                borderRadius: 2,
                                                position: 'relative'
                                            }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: 60,
                                                        color: lightOrange,
                                                        position: 'absolute',
                                                        top: 10,
                                                        right: 20,
                                                        fontFamily: 'Georgia, serif'
                                                    }}
                                                >
                                                    "
                                                </Typography>
                                                <Typography sx={{
                                                    fontStyle: 'italic',
                                                    color: textBody,
                                                    mb: 2,
                                                    fontFamily: 'Arial'
                                                }}>
                                                    The strategies I learned here have been life-changing. I finally
                                                    feel in control of my emotions and have the tools to handle
                                                    difficult situations.
                                                </Typography>
                                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                    <Box
                                                        component="img"
                                                        src={`https://i.pravatar.cc/40?img=${index + 10}`}
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: '50%',
                                                            mr: 1
                                                        }}
                                                    />
                                                    <Typography sx={{
                                                        fontWeight: 600,
                                                        color: textMain,
                                                        fontFamily: 'Montserrat'
                                                    }}>
                                                        {['Sarah, 28', 'Michael, 34', 'David, 41'][index]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                        {/* Sidebar */}
                        <Grid item xs={12} lg={4}>
                            {/* Years of Experience Badge + Expert Image */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 0,
                                    mb: 4,
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(1,39,101,0.07)'
                                }}
                            >
                                <Box sx={{position: 'relative'}}>
                                    <Box
                                        component="img"
                                        src={expertImg}
                                        alt="Expert"
                                        sx={{width: '100%', height: 180, objectFit: 'cover'}}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 16,
                                            left: 16,
                                            background: secondary,
                                            color: 'white',
                                            px: 2.5,
                                            py: 1,
                                            borderRadius: 2,
                                            fontWeight: 700,
                                            fontSize: 18,
                                            fontFamily: 'Montserrat',
                                            boxShadow: '0 2px 8px rgba(255,127,30,0.15)'
                                        }}
                                    >
                                        12+ Years of Experience
                                    </Box>
                                </Box>
                                <Box sx={{p: 3}}>
                                    <Typography variant="h6" sx={{color: "#012765", mb: 1, fontFamily: 'Montserrat'}}>
                                        We are leading Mental Health's Consultation Centre for you.
                                    </Typography>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <ChatIcon sx={{color: secondary, mr: 1}}/>
                                        <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>Online
                                            Counseling</Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <GroupIcon sx={{color: secondary, mr: 1}}/>
                                        <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>Group
                                            Therapy</Typography>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: secondary,
                                            color: secondary,
                                            fontWeight: 700,
                                            borderRadius: 2,
                                            mt: 2,
                                            px: 3,
                                            py: 1.2,
                                            fontFamily: 'Montserrat',
                                            '&:hover': {
                                                backgroundColor: secondary,
                                                color: 'white',
                                                borderColor: secondary
                                            }
                                        }}
                                    >
                                        Our Counseling
                                    </Button>
                                </Box>
                            </Paper>
                            {/* Self Assessment */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 2,
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(1,39,101,0.07)',
                                    mb: 4
                                }}
                            >
                                <Typography variant="h6" sx={{color: "#012765", mb: 2, fontFamily: 'Montserrat',fontWeight:"600"}}>
                                    Understand Your Situation
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial'}}>
                                    Take our quick assessment to get personalized insights and recommendations.
                                </Typography>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: secondary,
                                        py: 1.5,
                                        fontFamily: 'Montserrat',
                                        '&:hover': {
                                            backgroundColor: '#e86c00'
                                        }
                                    }}
                                >
                                    Start Assessment
                                </Button>
                            </Paper>
                            {/* Expert Help */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 2,
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(1,39,101,0.07)',
                                    mb: 4
                                }}
                            >
                                <Typography variant="h6" sx={{color: "#012765", mb: 2, fontFamily: 'Montserrat',fontWeight:"600"}}>
                                    Expert Support
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial'}}>
                                    Connect with our qualified professionals for personalized guidance.
                                </Typography>
                                <Box sx={{mb: 3}}>
                                    {[
                                        {
                                            icon: <ChatIcon/>,
                                            title: '1-on-1 Counseling',
                                            desc: 'Personal sessions with licensed therapists'
                                        },
                                        {
                                            icon: <GroupIcon/>,
                                            title: 'Group Therapy',
                                            desc: 'Connect with others on similar journeys'
                                        },
                                        {
                                            icon: <SupportIcon/>,
                                            title: 'Text Support',
                                            desc: 'Immediate assistance via chat'
                                        }
                                    ].map((option, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 2,
                                                backgroundColor: softGray,
                                                borderRadius: 1,
                                                mb: 2,
                                                transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 4px 8px rgba(255,127,30,0.10)'
                                                }
                                            }}
                                        >
                                            <Box sx={{
                                                width: 40,
                                                height: 40,
                                                backgroundColor: lightOrange,
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 2,
                                                color: secondary
                                            }}>
                                                {option.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle1" sx={{
                                                    fontWeight: 600,
                                                    color: textMain,
                                                    fontFamily: 'Montserrat'
                                                }}>
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
                                        '&:hover': {
                                            backgroundColor: '#e86c00'
                                        }
                                    }}
                                >
                                    Book a Session
                                </Button>
                            </Paper>
                            {/* Resources */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 2,
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(1,39,101,0.07)'
                                }}
                            >
                                <Typography variant="h6" sx={{color: "#012765", mb: 2, fontFamily: 'Montserrat',fontWeight:"600"}}>
                                    Helpful Resources
                                </Typography>
                                {[
                                    {
                                        icon: <MenuBookIcon/>,
                                        title: 'Self-Help Workbook',
                                        desc: 'Practical exercises and tools'
                                    },
                                    {
                                        icon: <HeadphonesIcon/>,
                                        title: 'Guided Meditation',
                                        desc: 'Audio sessions for different needs'
                                    },
                                    {
                                        icon: <PsychologyIcon/>,
                                        title: 'Expert Articles',
                                        desc: 'Insights from professionals'
                                    },
                                    {
                                        icon: <VideoLibraryIcon/>,
                                        title: 'Video Tutorials',
                                        desc: 'Visual guides for techniques'
                                    }
                                ].map((resource, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            p: 2,
                                            borderBottom: index < 3 ? '1px solid #e2e8f0' : 'none'
                                        }}
                                    >
                                        <Box sx={{
                                            width: 40,
                                            height: 40,
                                            backgroundColor: lightOrange,
                                            borderRadius: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mr: 2,
                                            color: secondary
                                        }}>
                                            {resource.icon}
                                        </Box>
                                        <Box sx={{flex: 1}}>
                                            <Typography variant="subtitle1" sx={{
                                                fontWeight: 600,
                                                color: textMain,
                                                fontFamily: 'Montserrat'
                                            }}>
                                                {resource.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>
                                                {resource.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* Main CTA */}
                    <Box
                        sx={{
                            backgroundColor: primary,
                            color: 'white',
                            textAlign: 'center',
                            p: 6,
                            borderRadius: 2,
                            mt: 6
                        }}
                    >
                        <Typography className={"Montserrat"} variant="h4" sx={{mb: 2,fontWeight:"600"}}>
                            Ready to Take the Next Step?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you navigate through your challenges with professional
                            guidance tailored to your unique situation.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: secondary,
                                py: 1.5,
                                fontFamily: 'Montserrat',
                                '&:hover': {
                                    backgroundColor: '#e86c00'
                                }
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

export default StrugglingDetail; 