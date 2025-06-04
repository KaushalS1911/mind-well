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
    FormControl, InputLabel, Select, MenuItem
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

// Replace with actual image paths
import img from '../../../../assets/images/Home/Struggling/Anxiety-and-Stress-in-the-Workplace.jpg';
import img7 from '../../../../assets/images/Home/Struggling/stress.jpg';
import img14 from '../../../../assets/images/Home/Struggling/stresstime.webp';
import {AttachFile, Close} from "@mui/icons-material";

const stressAnxietyData = {
    title: 'Stress and Anxiety: Understanding, Managing, and Overcoming Mental Health Challenges',
    description: 'Discover effective strategies to understand, manage, and overcome stress and anxiety for a healthier, happier life',
    image: img,
    image1: img7,
    firstimage: img14,
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
            title: 'What Are Stress and Anxiety?',
            content: [
                {
                    subtitle: 'Understanding Stress',
                    text: 'Stress happens when you face pressures or demands that feel overwhelming. It’s your body\'s way of reacting to threats or challenges',
                },
                {
                    subtitle: 'Understanding Anxiety',
                    text: 'Anxiety is a feeling of excessive worry or fear that does not go away easily. Unlike stress, it often involves a persistent pattern of negative thoughts. Normal anxiety helps us stay alert, but those with anxiety disorders feel it too much',
                },
                {
                    subtitle: 'Key Differences Between Stress and Anxiety:',
                    text: 'Stress usually comes from external sources and disappears when the problem ends.\n' +
                        'Anxiety tends to linger, even without clear triggers, and can dominate your thoughts.\n' +
                        'Both affect physical health but in different ways—stress can cause fatigue, while anxiety might cause chest tightness or racing thoughts',
                },
            ],
        },
        {
            title: 'Causes and Risk Factors of Stress and Anxiety:',
            content: [
                {
                    subtitle: 'External Factors',
                    text: 'Things like work overload, financial struggles, or relationship issues can set off stress or anxiety. Major life changes, like moving or losing a loved one, also play a big role. Traumatic events, such as accidents or abuse, can make anxiety worse',
                },
                {
                    subtitle: 'Internal Factors',
                    text: 'Your genes and family history matter. If anxiety runs in your family, your chances of developing it are higher. Your personality also influences your risk. For example, perfectionists or people with low confidence tend to be more anxious',
                },
                {
                    subtitle: 'Societal and Environmental Influences',
                    text: 'Social media and constant screen time can increase feelings of inadequacy and stress. Cultural or societal pressures to succeed or look a certain way can also heighten anxiety levels',
                },
            ],
        },
        {
            title: 'Statistics and Data:',
            content: [
                {
                    text: 'Out of 1,479 respondents, 9.6% experienced mild stress, 84.9% experienced moderate stress, and 5.5% experienced severe stress according to the PSS. Females experienced significantly higher stress levels when compared with males, but both experienced moderate stress levels',
                },
            ],
        },
        {
            title: 'Recognizing Symptoms and When to Seek Help:',
            content: [
                {
                    subtitle: 'Common Physical Symptoms',
                    text: 'You might notice fast heartbeat, fatigue, tense muscles, or frequent headaches. Some people get upset stomachs or struggle to sleep',
                },
                {
                    subtitle: 'Psychological and Emotional Indicators',
                    text: 'Worrying constantly, being irritable, or finding it hard to focus are signs. Sleep problems and feeling on edge are common too',
                },
                {
                    subtitle: 'When to Consult a Professional:',
                    text: 'If your symptoms are severe, last for weeks, or interfere with your daily routines, it’s time to see a professional. Early help can prevent things from getting worse',
                },
            ],
        },
        {
            title: 'Effective Strategies for Managing Stress and Anxiety:',
            content: [
                {
                    subtitle: 'Lifestyle Modifications',
                    text: 'Regular workouts can clear your mind and boost mood. Eating healthy and sleeping well also help. Cutting back on caffeine and alcohol reduces symptoms of anxiety',
                },
                {
                    subtitle: 'Mindfulness and Relaxation Techniques',
                    text: 'Practicing deep breathing, meditation, or progressive muscle relaxation can calm your mind. Doing these daily makes a big difference',
                },
                {
                    subtitle: 'Cognitive Behavioral Techniques',
                    text: 'Challenge negative thoughts that make anxiety worse. Replace them with positive or neutral ideas. Building healthy habits for coping can change how you react to stress',
                },
                {
                    subtitle: 'Important Tips:',
                    text: 'Keep a stress journal. Write down what triggers your feelings.\n' +
                        'Break big tasks into small steps.\n' +
                        'Set daily routines and stick to them.\n' +
                        'Make time for hobbies or spending time with loved ones.\n' +
                        'Professional Treatment Options',
                },
            ],
        },
        {
            title: 'Professional Treatment Options',
            content: [
                {
                    subtitle: 'Support Systems:',
                    text: 'A strong support network makes a big difference. Talking with friends or joining a support group can lessen feelings of loneliness and make managing anxiety easier',
                },
            ],
        },
        {
            title: 'Preventative Measures and Long-Term Management:',
            content: [
                {
                    subtitle: 'Building Resilience',
                    text: 'Work on your emotional strength. Practice mindfulness, stay positive, and learn how to bounce back from setbacks',
                },
                {
                    subtitle: 'Routine Self-Care Practices',
                    text: 'Exercise regularly, pursue hobbies, and take time to relax. Making these habits part of your life keeps stress in check',
                },
                {
                    subtitle: 'Reducing External Stressors',
                    text: 'Learn to say no when you’re overwhelmed. Manage your time better and set clear boundaries at work and home',
                },
                {
                    subtitle: 'Monitoring and Maintaining Mental Health',
                    text: 'Use journals or apps to track your mood. Recognize early signs of stress or anxiety so you can address them quickly',
                },
            ],
        },
        {
            title: 'Real-Life Example',
            content: [
                {
                    text: 'For example, xyz started feeling anxious before work meetings. Her chest felt tight, and she couldn’t sleep. After talking to a counselor, she learned her symptoms were part of an anxiety disorder. Getting help improved her life\n',
                },
            ],
        },
    ],
    solutions: [
        'Practice mindfulness and meditation',
        'Regular physical exercise',
        'Healthy sleep habits',
        'Time management techniques',
        'Professional counseling',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Counseling gave me tools to manage my anxiety. I feel empowered and in control now',
            image: 'https://i.pravatar.cc/40?img=10'
        },
        {
            name: 'Michael, 34',
            text: 'The strategies I learned transformed my stress into productivity. Highly recommend!',
            image: 'https://i.pravatar.cc/40?img=11'
        },
        {
            name: 'David, 41',
            text: 'Joining a support group made me feel understood and less alone',
            image: 'https://i.pravatar.cc/40?img=12'
        },
    ],
    references: [
        'World Health Organization. Mental Health Data',
        'Mayo Clinic. Coping Skills for Anxiety',
        'National Institute of Mental Health. Stress and Anxiety Facts',
    ],
    motivation: 'Millions of people around the world deal with stress and anxiety daily. These feelings can weigh you down and affect your mood, sleep, and even your health. Recognizing the signs early can help you avoid bigger problems later. This piece of information will explain what stress and anxiety are, why they happen, how they affect you, and what steps you can take to feel better',
    counseling: 'Our expert therapists offer personalized strategies to manage stress and anxiety. Start your journey to better mental health today',
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


const data = stressAnxietyData;

const StressAnxiety = () => {
    const navigate = useNavigate();

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
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';

        if (!formData.age.trim()) newErrors.age = 'Age is required';
        else if (+formData.age < 1 || +formData.age > 120) newErrors.age = 'Enter a valid age between 1 and 120';

        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If validation passed
        console.log('Submitted data:', formData);

        // Reset
        setFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            message: ''
        });
        setErrors({});
    };

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
                <Container sx={{position: 'relative', zIndex: 2, mt: 5}}>
                    <Box
                    >
                        <Typography
                            className="Montserrat"
                            sx={{
                                fontSize: {
                                    xs: '1.7rem',
                                    sm: '1.85rem',
                                    md: '2rem',
                                    lg: '2.125rem',
                                },
                                fontWeight: 800,
                                color: secondary,
                                mb: 2,
                            }}
                        >
                            Stress & Anxiety
                        </Typography>
                        <Divider sx={{backgroundColor: secondary, height: 4, width: 120, margin: 'auto', my: 3}}/>
                        <Typography
                            variant="h6"
                            sx={{fontWeight: 400, maxWidth: 800, mx: 'auto', fontFamily: 'Arial', lineHeight: 1.6}}
                        >
                            {data.description}
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Main Content Section */}
            <Box
                sx={{
                    minHeight: '100vh',
                    pt: 8,
                    position: 'relative',
                    overflow: 'hidden',
                    mx: {xs: '20px', sm: '70px', md: '90px', xl: 'auto'}
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
                            '&:hover': {
                                backgroundColor: primary,
                                color: 'white',
                            },
                        }}
                    >
                        Back
                    </Button>

                    {/* Introduction Section */}
                    <Grid container spacing={4} alignItems="center" sx={{mb: {xs: 8, md: 12}}}>
                        <Grid item xs={12} lg={5}>
                            <Box
                            >
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
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={7}>
                            <Box
                            >
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
                                        Understanding Stress & Anxiety
                                    </Typography>
                                </Box>

                                {data.sections.map((section, index) => (
                                    <Box
                                    >
                                        <Box sx={{mb: 5}}>
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
                                                <Box key={idx} sx={{mb: 3, textAlign: "justify"}}>
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
                                            {section.title === 'Statistics and Data' && (
                                                <Box
                                                    sx={{
                                                        p: 3,
                                                        backgroundColor: lightOrange,
                                                        borderRadius: 2,
                                                        mt: 3,
                                                        boxShadow: '0 4px 16px rgba(255,127,30,0.1)',
                                                    }}
                                                >
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            fontWeight: 600,
                                                            color: primary,
                                                            mb: 2,
                                                            fontFamily: 'Montserrat'
                                                        }}
                                                    >
                                                        Key Insight
                                                    </Typography>
                                                    <Typography sx={{color: textBody, fontFamily: 'Arial'}}>
                                                        {section.content[0].text}
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>
                                        <Divider sx={{my: 3, backgroundColor: softGray}}/>
                                    </Box>
                                ))}

                                <Box sx={{mt: 6}}>
                                    <Typography
                                        variant="h6"
                                        sx={{color: primary, mb: 3, fontFamily: 'Montserrat', fontWeight: 700}}
                                    >
                                        References
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {data.references.map((ref, index) => (
                                            <Grid item xs={12} sm={6} key={index}>
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: softGray,
                                                        borderRadius: 2,
                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                        height: "100%"
                                                    }}
                                                >
                                                    <Typography sx={{
                                                        color: textBody,
                                                        fontFamily: 'Arial',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        • {ref}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Sidebar */}
                        <Grid item xs={12} lg={4}>
                            <Paper elevation={3}
                                   sx={{
                                       p: 4,
                                       borderRadius: 4,
                                       background: 'white',
                                       boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                       mb: 4,
                                   }}>
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
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Age"
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleInputChange}
                                                required
                                                error={!!errors.age}
                                                helperText={errors.age}
                                                sx={formFieldStyle}
                                            />
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
                                                    fontFamily: 'Montserrat',
                                                    fontWeight: 700,
                                                    borderRadius: 3,
                                                    transition: 'transform 0.2s',
                                                    '&:hover': {
                                                        backgroundColor: secondary,
                                                        transform: 'translateY(-3px)'
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
                            {/*    <Box sx={{ position: 'relative' }}>*/}
                            {/*        <Box*/}
                            {/*            component="img"*/}
                            {/*            src={data.image1}*/}
                            {/*            alt="Expert"*/}
                            {/*            sx={{ width: '100%', height: { xs: 250, sm: 300 }, objectFit: 'cover', borderRadius: '4px 4px 0 0' }}*/}
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
                            {/*                fontSize: { xs: '0.9rem', sm: '1rem' },*/}
                            {/*                fontFamily: 'Montserrat',*/}
                            {/*                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            12+ Years of Experience*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*    <Box sx={{ p: 4 }}>*/}
                            {/*        <Typography*/}
                            {/*            variant="h6"*/}
                            {/*            sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*        >*/}
                            {/*            Leading Mental Health Consultation*/}
                            {/*        </Typography>*/}
                            {/*        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>*/}
                            {/*            <ChatIcon sx={{ color: secondary, mr: 1.5 }} />*/}
                            {/*            <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
                            {/*                Online Counseling*/}
                            {/*            </Typography>*/}
                            {/*        </Box>*/}
                            {/*        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>*/}
                            {/*            <GroupIcon sx={{ color: secondary, mr: 1.5 }} />*/}
                            {/*            <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
                            {/*                Group Therapy*/}
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
                            {/*                '&:hover': {*/}
                            {/*                    backgroundColor: secondary,*/}
                            {/*                    transform: 'translateY(-3px)',*/}
                            {/*                },*/}
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
                                    Assess Your Mental Health
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>
                                    Take our quick assessment to gain personalized insights and recommendations
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
                                        '&:hover': {
                                            backgroundColor: secondary,
                                            transform: 'translateY(-3px)',
                                        },
                                    }}
                                    onClick={() => navigate("/assessments/general-stress")}
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
                            className={'Montserrat'}
                            sx={{
                                mb: 2,
                                fontWeight: '600',
                                fontSize: {
                                    xs: '1.7rem',
                                    sm: '1.85rem',
                                    md: '2rem',
                                    lg: '2.125rem',
                                },
                            }}
                        >
                            Ready to Take the Next Step?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you navigate through your challenges with professional
                            guidance tailored to
                            your unique situation
                        </Typography>
                        {/*<Button*/}
                        {/*    variant="contained"*/}
                        {/*    sx={{*/}
                        {/*        backgroundColor: secondary,*/}
                        {/*        py: 1.5,*/}
                        {/*        fontFamily: 'Montserrat',*/}
                        {/*        fontSize: '1.1rem',*/}
                        {/*        px: 4,*/}
                        {/*        '&:hover': {*/}
                        {/*            backgroundColor: secondary,*/}
                        {/*        },*/}
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

export default StressAnxiety;