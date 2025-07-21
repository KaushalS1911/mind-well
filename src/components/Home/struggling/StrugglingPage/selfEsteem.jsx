import React, {useState} from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Button,
    Divider,
    IconButton,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
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
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Image imports (retained from original)
import img4 from '../../../../assets/images/Home/Struggling/Self-esteemhero.webp';
import img11 from '../../../../assets/images/Home/Struggling/Self-esteemtime.jpg';
import img18 from '../../../../assets/images/Home/Struggling/self-esteem2.jpg';

const selfEsteemData = {
    title: "Let's Talk About Self-Esteem: The Ultimate Guide to Building Confidence and Self-Worth",
    description: 'Learn how to cultivate self-confidence, embrace your unique strengths, and build a positive self-image',
    image: img4,
    image1: img11,
    firstimage: img18,
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
            title: 'What Is Self-Esteem and Why Does It Matter?',
            content: [
                {
                    text: "Self-esteem is how much you appreciate who you are. It's your inner gauge of your value. Having high self-esteem means you believe in yourself and your abilities. Low self-esteem comes with feelings of doubt and self-criticism. Self-confidence is often confused with self-esteem, but it's not the same. Confidence is about trusting your skills in specific situations. Self-efficacy is your belief that you can succeed at tasks. Think of self-esteem as a bigger picture of how you see yourself overall",
                },
                {
                    subtitle: 'The Significance of Healthy Self-Esteem :',
                    text: "Good self-esteem impacts every part of your life. It helps you make decisions, handle stress, and bounce back from setbacks. When your self-esteem is high, you are more likely to take risks and try new things. Experts say low self-esteem is linked to anxiety and depression, affecting up to 1 in 4 adults. In the workplace, school, college, or personal life, self-esteem plays a huge role. Feeling confident can open doors, while doubts may hold you back. Whether it's landing that job, starting a new hobby, or building a good relationship, your sense of worth makes a difference",
                },
            ],
        },
        {
            title: 'The Psychological Foundations of Self-Esteem',
            content: [
                {
                    text: 'Self-esteem starts in childhood—families, school, and society shape how you see yourself. Supportive environments boost your confidence, while criticism or neglect can do the opposite. Your early experiences and societal influences create your inner voice. This voice can be kind and encouraging or harsh and doubting. Understanding these roots helps you change your narrative for the better',
                },
            ],
        },
        {
            title: 'Common Causes of Low Self-Esteem',
            content: [
                {
                    subtitle: 'Childhood and Upbringing',
                    text: 'Growing up in a home with constant criticism or neglect can damage self-esteem. Overly protective parents or harsh teachers might make you doubt your worth. Family dynamics and early life messages stick with us into adulthood',
                },
                {
                    subtitle: 'Societal and Cultural Influences',
                    text: 'Media plays a big role today. Constant exposure to images of "perfect" bodies and glamorous lifestyles can leave you feeling inadequate. Cultural stereotypes about gender roles, success, or beauty also influence how you see yourself',
                },
                {
                    subtitle: 'Life Events and Personal Experiences',
                    text: 'Failures, rejections, or traumatic events can lower self-esteem. A bad breakup or losing a job may shake your confidence. Mental health issues like anxiety or depression often feed into feelings of worthlessness',
                },
                {
                    subtitle: 'Modern Factors',
                    text: "Social media creates a comparison trap. Seeing others' highlight reels makes you feel you don't measure up. Additionally, job pressures or academic stress can leave you doubting your abilities",
                },
            ],
        },
        {
            title: 'Signs of Low Self-Esteem and Its Effects',
            content: [
                {
                    subtitle: 'Recognizing the Symptoms',
                    text: 'Notice if you often talk negatively about yourself. Do you second-guess your choices or strive for perfection? Avoiding social events or challenges might be signs too',
                },
                {
                    subtitle: 'Effects on Personal Well-Being',
                    text: 'When self-esteem drops, mental health can suffer. Anxiety and depression are common companions. Low confidence can also hurt your career by making you hesitant to show your skills or take on new tasks. In relationships, self-doubt might cause you to settle or stay silent. Recognizing these signs is the first step toward change',
                },
                {
                    subtitle: 'When to Seek Help',
                    text: 'If feelings of worthlessness or hopelessness last for weeks, talk to a mental health professional. Therapy, coaching, or support groups can help rebuild your confidence and teach healthier habits',
                },
            ],
        },
        {
            title: 'Strategies to Boost and Maintain Healthy Self-Esteem',
            content: [
                {
                    subtitle: 'Practicing Self-Compassion',
                    text: "Be kind to yourself. Kristin Neff's research shows that self-compassion reduces stress and builds resilience. Try daily exercises like writing yourself a supportive note or pausing before criticizing yourself",
                },
                {
                    subtitle: 'Challenging Negative Self-Talk',
                    text: "Notice when your inner voice is harsh. Reframe those thoughts, replacing 'I can't do this' with 'I'll try my best.' Use journaling to identify limiting beliefs and affirmations to boost confidence",
                },
                {
                    subtitle: 'Setting Achievable Goals',
                    text: 'Use SMART goals—Specific, Measurable, Attainable, Realistic, Time-bound. Completing small tasks gives you a sense of progress. Each success builds your belief in your abilities over time',
                },
                {
                    subtitle: 'Cultivating a Positive Environment',
                    text: 'Surround yourself with supportive, uplifting people. Engage in activities that make you feel good, like hobbies or volunteering. Positive environments reinforce your sense of worth',
                },
                {
                    subtitle: 'Embracing Failure and Learning from Mistakes',
                    text: "Failures aren't the end—they're lessons. Many successful people faced setbacks before reaching their goals. Resilience is built by accepting mistakes and trying again",
                },
                {
                    subtitle: 'Developing Self-Awareness and Mindfulness',
                    text: 'Practicing mindfulness helps you understand your feelings and reactions. Simple meditation or reflection breaks can increase self-awareness and self-acceptance',
                },
            ],
        },
        {
            title: 'The Role of Self-Care and Lifestyle in Enhancing Self-Esteem',
            content: [
                {
                    subtitle: 'Physical Health and Its Impact',
                    text: 'Exercise boosts mood. Eating nutritious foods and getting enough sleep help your brain and self-image. As health expert Dr. John Ratey says, physical activity is a quick way to improve your self-esteem',
                },
                {
                    subtitle: 'Building a Supportive Routine',
                    text: 'Include habits like journaling, hobbies, or social time in your daily life. These routines reinforce positive feelings about yourself and keep your mind focused on growth',
                },
                {
                    subtitle: 'Avoiding Toxic Influences',
                    text: 'Limit time on social media if it causes comparison or envy. Seek out environments and people who uplift you. Reducing exposure to negativity helps protect your self-esteem',
                },
            ],
        },
        {
            title: 'Measuring Progress and Maintaining Self-Esteem Over Time',
            content: [
                {
                    subtitle: 'Tracking Personal Growth',
                    text: 'Use journals or apps to note your achievements. Regularly check in on your goals and feelings. Celebrate each milestone, no matter how small',
                },
                {
                    subtitle: 'Strategies for Long-term Maintenance',
                    text: 'Keep learning, attending therapy, or working with a coach. Life changes, but your confidence can remain steady if you stay flexible and resilient',
                },
                {
                    subtitle: 'Recognizing and Celebrating Achievements',
                    text: 'Make it a habit to recognize your wins. This practice reminds you of your worth and keeps your self-esteem growing',
                },
                {
                    subtitle: 'Take action today',
                    text: 'Make it a habit to recognize your wins. This practice reminds you of your worth and keeps your self-esteem growing',
                },
            ],
        },
    ],
    solutions: [
        'Practice positive affirmations',
        'Engage in cognitive behavioral therapy',
        'Adopt self-compassion practices',
        'Set SMART goals',
        'Seek professional counseling',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Counseling helped me silence my inner critic and embrace my worth',
            image: 'https://i.pravatar.cc/40?img=10',
        },
        {
            name: 'Michael, 34',
            text: 'Mindfulness practices gave me the confidence to pursue my goals',
            image: 'https://i.pravatar.cc/40?img=11',
        },
        {
            name: 'David, 41',
            text: 'Therapy taught me to celebrate my achievements and believe in myself',
            image: 'https://i.pravatar.cc/40?img=12',
        },
    ],
    references: [
        'Neff, K. (2011). Self-Compassion: The Proven Power of Being Kind to Yourself',
        'Ratey, J. J. (2008). Spark: The Revolutionary New Science of Exercise and the Brain',
        'American Psychological Association. Self-Esteem and Mental Health',
    ],
    motivation:
        "When you think about your success and happiness, one thing often stands out: self-esteem. It's the confidence you feel about yourself, how much you value your worth. Strong self-esteem can boost your mental health, help you connect better with others, and push you toward your goals. But many people struggle with feeling unsure or low about themselves",
    counseling:
        'Our counselors can help you develop strategies to boost your self-esteem and live with greater confidence. Start your journey to self-acceptance today',
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

const SelfEsteem = () => {
    const navigate = useNavigate();
    const data = selfEsteemData;
    const formFieldStyle = {
        "& label.Mui-focused": {color: "#FF7F1E"},
        "& .MuiOutlinedInput-root": {
            "& fieldset": {borderColor: "#FF7F1E"},
            "&:hover fieldset": {borderColor: "#FF7F1E"},
            "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        message: '',
        gender: '',
    });

    // Gender options
    const genderOptions = ["Male", "Female", "Other"];

// Age options (1 to 100)
    const ageOptions = Array.from({length: 100}, (_, i) => i + 1);

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';

        if (!(formData.age ?? '').toString().trim()) newErrors.age = 'Age is required';
        else if (+formData.age < 1 || +formData.age > 120) newErrors.age = 'Enter a valid age between 1 and 120';

        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // Create payload without age field
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.phone,
                enquiry_type: "Request a Callback - Self-Esteem",
                message: formData.message
            };

            await axios.post(
                "https://interactapiverse.com/mahadevasth/enquiry",
                payload
            );

            toast.success("Your message has been sent successfully! We'll get back to you shortly.");

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                age: '',
                message: ''
            });
            setErrors({});

        } catch (error) {
            console.error("API Error:", error);
            toast.error("Failed to send your message. Please try again later.");
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                <Container sx={{position: 'relative', zIndex: 2, mt: 5}}>
                    <Typography
                        className="Montserrat"
                        sx={{
                            fontSize: {xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem'},
                            fontWeight: 800,
                            color: secondary,
                            mb: 2,
                        }}
                    >
                        Self-Esteem
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
                    mx: {xs: '20px', sm: '70px', md: '90px', xl: 'auto'},
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
                        <Grid item xs={12} lg={5}>
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

                        <Grid item xs={12} lg={7}>
                            <Box sx={{position: 'relative', px: {xs: 2, sm: 4}, mt: {xs: 4, md: 0}}}>
                                <Typography
                                    className="Montserrat"
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,
                                        color: primary,
                                        mb: 3,
                                        fontSize: {xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem'},
                                    }}
                                >
                                    {data.title}
                                </Typography>
                                {/*<Box sx={{*/}
                                {/*    position: 'absolute',*/}
                                {/*    top: -40,*/}
                                {/*    left: -50,*/}
                                {/*    zIndex: 1,*/}
                                {/*    opacity: 0.7*/}
                                {/*}}>{doodleSVG}</Box>*/}
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
                                {/*<Button*/}
                                {/*    variant="contained"*/}
                                {/*    sx={{*/}
                                {/*        backgroundColor: secondary,*/}
                                {/*        color: 'white',*/}
                                {/*        fontWeight: 700,*/}
                                {/*        borderRadius: 3,*/}
                                {/*        px: 5,*/}
                                {/*        py: 1.5,*/}
                                {/*        fontSize: '1.1rem',*/}
                                {/*        fontFamily: 'Montserrat',*/}
                                {/*        boxShadow: '0 4px 16px rgba(255,127,30,0.3)',*/}
                                {/*        transition: 'transform 0.2s, box-shadow 0.2s',*/}
                                {/*        '&:hover': {*/}
                                {/*            backgroundColor: secondary,*/}
                                {/*            transform: 'translateY(-3px)',*/}
                                {/*            boxShadow: '0 6px 24px rgba(255,127,30,0.4)',*/}
                                {/*        },*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    Book a Counsellor*/}
                                {/*</Button>*/}
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
                                        Understanding Self-Esteem
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
                                            <Box key={idx} sx={{mb: 3}}>
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
                                                        {/*<SelfImprovementIcon sx={{color: secondary, mr: 1}}/>*/}
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
                                {/*                    <Typography sx={{*/}
                                {/*                        color: textBody,*/}
                                {/*                        fontFamily: 'Arial',*/}
                                {/*                        fontSize: '0.95rem'*/}
                                {/*                    }}>*/}
                                {/*                        • {ref}*/}
                                {/*                    </Typography>*/}
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
                                    p: 4,
                                    borderRadius: 4,
                                    background: "white",
                                    boxShadow: "0 8px 32px rgba(1,39,101,0.15)",
                                    mb: 4,
                                }}
                            >
                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                error={!!errors.name}
                                                helperText={errors.name}
                                                sx={formFieldStyle}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                error={!!errors.email}
                                                helperText={errors.email}
                                                sx={formFieldStyle}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                error={!!errors.phone}
                                                helperText={errors.phone}
                                                sx={formFieldStyle}
                                            />
                                        </Grid>

                                        {/* Gender Field */}
                                        <Grid item xs={12}>
                                            <FormControl fullWidth required sx={formFieldStyle} error={!!errors.gender}>
                                                <InputLabel>Gender</InputLabel>
                                                <Select
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleInputChange}
                                                    label="Gender"
                                                >
                                                    {genderOptions.map((gender) => (
                                                        <MenuItem key={gender} value={gender}>
                                                            {gender}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        {/* Age Dropdown */}
                                        <Grid item xs={12}>
                                            <FormControl fullWidth required sx={formFieldStyle} error={!!errors.age}>
                                                <InputLabel>Age</InputLabel>
                                                <Select
                                                    name="age"
                                                    value={formData.age}
                                                    onChange={handleInputChange}
                                                    label="Age"
                                                >
                                                    {ageOptions.map((age) => (
                                                        <MenuItem key={age} value={age}>
                                                            {age}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label="Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                error={!!errors.message}
                                                helperText={errors.message}
                                                sx={formFieldStyle}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                sx={{
                                                    backgroundColor: secondary,
                                                    py: 1.5,
                                                    fontFamily: "Montserrat",
                                                    fontWeight: 700,
                                                    borderRadius: 3,
                                                    transition: "transform 0.2s",
                                                    "&:hover": {
                                                        backgroundColor: secondary,
                                                        transform: "translateY(-3px)",
                                                    },
                                                }}
                                            >
                                                Request a CallBack
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            {/*<Paper*/}
                            {/*    elevation={3}*/}
                            {/*    sx={{*/}
                            {/*        p: 0,*/}
                            {/*        mb: 4,*/}
                            {/*        borderRadius: 4,*/}
                            {/*        overflow: 'hidden',*/}
                            {/*        background: 'white',*/}
                            {/*        boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Box sx={{position: 'relative'}}>*/}
                            {/*        <Box*/}
                            {/*            component="img"*/}
                            {/*            src={data.image1}*/}
                            {/*            alt="Expert"*/}
                            {/*            sx={{*/}
                            {/*                width: '100%',*/}
                            {/*                height: {xs: 250, sm: 300},*/}
                            {/*                objectFit: 'cover',*/}
                            {/*                borderRadius: '4px 4px 0 0'*/}
                            {/*            }}*/}
                            {/*        />*/}
                            {/*        <Box*/}
                            {/*            sx={{*/}
                            {/*                position: 'absolute',*/}
                            {/*                bottom: 16,*/}
                            {/*                left: 16,*/}
                            {/*                background: secondary,*/}
                            {/*                color: 'white',*/}
                            {/*                px: 3,*/}
                            {/*                py: 1,*/}
                            {/*                borderRadius: 2,*/}
                            {/*                fontWeight: 700,*/}
                            {/*                fontSize: {xs: '0.9rem', sm: '1rem'},*/}
                            {/*                fontFamily: 'Montserrat',*/}
                            {/*                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            12+ Years of Experience*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*    <Box sx={{p: 4}}>*/}
                            {/*        <Typography*/}
                            {/*            variant="h6"*/}
                            {/*            sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}*/}
                            {/*        >*/}
                            {/*            Leading Self-Esteem Counseling*/}
                            {/*        </Typography>*/}
                            {/*        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>*/}
                            {/*            <ChatIcon sx={{color: secondary, mr: 1.5}}/>*/}
                            {/*            <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>*/}
                            {/*                Online Counseling*/}
                            {/*            </Typography>*/}
                            {/*        </Box>*/}
                            {/*        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>*/}
                            {/*            <GroupIcon sx={{color: secondary, mr: 1.5}}/>*/}
                            {/*            <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>*/}
                            {/*                Support Groups*/}
                            {/*            </Typography>*/}
                            {/*        </Box>*/}
                            {/*        <Button*/}
                            {/*            variant="contained"*/}
                            {/*            sx={{*/}
                            {/*                backgroundColor: secondary,*/}
                            {/*                color: 'white',*/}
                            {/*                fontWeight: 700,*/}
                            {/*                borderRadius: 3,*/}
                            {/*                mt: 2,*/}
                            {/*                px: 4,*/}
                            {/*                py: 1.5,*/}
                            {/*                fontFamily: 'Montserrat',*/}
                            {/*                transition: 'transform 0.2s',*/}
                            {/*                '&:hover': {backgroundColor: secondary, transform: 'translateY(-3px)'},*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            Explore Counseling*/}
                            {/*        </Button>*/}
                            {/*    </Box>*/}
                            {/*</Paper>*/}

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
                                    Assess Your Self-Esteem
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>
                                    Take our quick assessment to gain personalized insights and recommendations for
                                    building confidence
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
                                    onClick={() => navigate("/assessments/self-esteem-scale")}
                                >
                                    Start Assessment
                                </Button>
                            </Paper>

                            {/*<Paper*/}
                            {/*    elevation={3}*/}
                            {/*    sx={{*/}
                            {/*        p: 4,*/}
                            {/*        borderRadius: 4,*/}
                            {/*        background: 'white',*/}
                            {/*        boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*        mb: 4,*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Typography*/}
                            {/*        variant="h6"*/}
                            {/*        sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}*/}
                            {/*    >*/}
                            {/*        Expert Support*/}
                            {/*    </Typography>*/}
                            {/*    <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>*/}
                            {/*        Connect with professionals for tailored guidance to boost your self-esteem.*/}
                            {/*    </Typography>*/}
                            {/*    <Box sx={{mb: 4}}>*/}
                            {/*        {[*/}
                            {/*            {*/}
                            {/*                icon: <ChatIcon/>,*/}
                            {/*                title: '1-on-1 Counseling',*/}
                            {/*                desc: 'Personal sessions with licensed therapists',*/}
                            {/*            },*/}
                            {/*            {*/}
                            {/*                icon: <GroupIcon/>,*/}
                            {/*                title: 'Support Groups',*/}
                            {/*                desc: 'Connect with others on similar journeys',*/}
                            {/*            },*/}
                            {/*            {*/}
                            {/*                icon: <SupportIcon/>,*/}
                            {/*                title: 'Text Support',*/}
                            {/*                desc: 'Immediate assistance via chat',*/}
                            {/*            },*/}
                            {/*        ].map((option, index) => (*/}
                            {/*            <Box*/}
                            {/*                key={index}*/}
                            {/*                sx={{*/}
                            {/*                    display: 'flex',*/}
                            {/*                    alignItems: 'center',*/}
                            {/*                    p: 2,*/}
                            {/*                    backgroundColor: softGray,*/}
                            {/*                    borderRadius: 2,*/}
                            {/*                    mb: 2,*/}
                            {/*                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',*/}
                            {/*                }}*/}
                            {/*            >*/}
                            {/*                <Box*/}
                            {/*                    sx={{*/}
                            {/*                        width: 48,*/}
                            {/*                        height: 48,*/}
                            {/*                        backgroundColor: lightOrange,*/}
                            {/*                        borderRadius: '50%',*/}
                            {/*                        display: 'flex',*/}
                            {/*                        alignItems: 'center',*/}
                            {/*                        justifyContent: 'center',*/}
                            {/*                        mr: 2,*/}
                            {/*                        color: secondary,*/}
                            {/*                    }}*/}
                            {/*                >*/}
                            {/*                    {option.icon}*/}
                            {/*                </Box>*/}
                            {/*                <Box>*/}
                            {/*                    <Typography*/}
                            {/*                        variant="subtitle1"*/}
                            {/*                        sx={{fontWeight: 600, color: primary, fontFamily: 'Montserrat'}}*/}
                            {/*                    >*/}
                            {/*                        {option.title}*/}
                            {/*                    </Typography>*/}
                            {/*                    <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>*/}
                            {/*                        {option.desc}*/}
                            {/*                    </Typography>*/}
                            {/*                </Box>*/}
                            {/*            </Box>*/}
                            {/*        ))}*/}
                            {/*    </Box>*/}
                            {/*    <Button*/}
                            {/*        fullWidth*/}
                            {/*        variant="contained"*/}
                            {/*        sx={{*/}
                            {/*            backgroundColor: secondary,*/}
                            {/*            py: 1.5,*/}
                            {/*            fontFamily: 'Montserrat',*/}
                            {/*            fontWeight: 700,*/}
                            {/*            borderRadius: 3,*/}
                            {/*            transition: 'transform 0.2s',*/}
                            {/*            '&:hover': {backgroundColor: secondary, transform: 'translateY(-3px)'},*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        Book a Session*/}
                            {/*    </Button>*/}
                            {/*</Paper>*/}

                            {/*<Paper*/}
                            {/*    elevation={3}*/}
                            {/*    sx={{*/}
                            {/*        p: 4,*/}
                            {/*        borderRadius: 4,*/}
                            {/*        background: 'white',*/}
                            {/*        boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Typography*/}
                            {/*        variant="h6"*/}
                            {/*        sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}*/}
                            {/*    >*/}
                            {/*        Helpful Resources*/}
                            {/*    </Typography>*/}
                            {/*    {[*/}
                            {/*        {*/}
                            {/*            icon: <MenuBookIcon/>,*/}
                            {/*            title: 'Self-Esteem Workbook',*/}
                            {/*            desc: 'Practical exercises for confidence',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <HeadphonesIcon/>,*/}
                            {/*            title: 'Guided Meditation',*/}
                            {/*            desc: 'Audio sessions for self-acceptance',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <PsychologyIcon/>,*/}
                            {/*            title: 'Expert Articles',*/}
                            {/*            desc: 'Insights from self-esteem experts',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <VideoLibraryIcon/>,*/}
                            {/*            title: 'Video Tutorials',*/}
                            {/*            desc: 'Visual guides for confidence-building',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*    ].map((resource, index) => (*/}
                            {/*        <Box*/}
                            {/*            key={index}*/}
                            {/*            sx={{*/}
                            {/*                display: 'flex',*/}
                            {/*                alignItems: 'center',*/}
                            {/*                p: 2,*/}
                            {/*                borderBottom: index < 3 ? `1px solid ${softGray}` : 'none',*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            <Box*/}
                            {/*                sx={{*/}
                            {/*                    width: 48,*/}
                            {/*                    height: 48,*/}
                            {/*                    backgroundColor: lightOrange,*/}
                            {/*                    borderRadius: 1,*/}
                            {/*                    display: 'flex',*/}
                            {/*                    alignItems: 'center',*/}
                            {/*                    justifyContent: 'center',*/}
                            {/*                    mr: 2,*/}
                            {/*                    color: secondary,*/}
                            {/*                }}*/}
                            {/*            >*/}
                            {/*                {resource.icon}*/}
                            {/*            </Box>*/}
                            {/*            <Box sx={{flex: 1}}>*/}
                            {/*                <Typography*/}
                            {/*                    variant="subtitle1"*/}
                            {/*                    sx={{fontWeight: 600, color: primary, fontFamily: 'Montserrat'}}*/}
                            {/*                >*/}
                            {/*                    <a href={resource.link}*/}
                            {/*                       style={{color: 'inherit', textDecoration: 'none'}}>*/}
                            {/*                        {resource.title}*/}
                            {/*                    </a>*/}
                            {/*                </Typography>*/}
                            {/*                <Typography variant="body2" sx={{color: textBody, fontFamily: 'Arial'}}>*/}
                            {/*                    {resource.desc}*/}
                            {/*                </Typography>*/}
                            {/*            </Box>*/}
                            {/*        </Box>*/}
                            {/*    ))}*/}
                            {/*</Paper>*/}
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
                            Ready to Build Your Confidence?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you boost your self-esteem with professional guidance
                            tailored to your unique journey
                        </Typography>
                        {/*<Button*/}
                        {/*    variant="contained"*/}
                        {/*    sx={{*/}
                        {/*        backgroundColor: secondary,*/}
                        {/*        py: 1.5,*/}
                        {/*        fontFamily: 'Montserrat',*/}
                        {/*        fontSize: '1.1rem',*/}
                        {/*        px: 4,*/}
                        {/*        '&:hover': {backgroundColor: secondary},*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    Book a Counselor Now*/}
                        {/*</Button>*/}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default SelfEsteem;
