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
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Image imports (retained from original)
import img2 from '../../../../assets/images/Home/Struggling/Grief-Trauma.jpg';
import img9 from '../../../../assets/images/Home/Struggling/Signs-Your-Body-is-Releasing-Grief-Trauma.jpg';
import img16 from '../../../../assets/images/Home/Struggling/Grief-Traumatime.jpg';

const griefTraumaData = {
    title: 'Understanding Grief and Trauma: How to Heal and Move Forward',
    description: 'Discover effective strategies to process grief and trauma, rebuild resilience, and move toward healing',
    image: img2,
    image1: img9,
    firstimage: img16,
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
            title: 'What Is Grief?',
            content: [
                {
                    text: 'Grief is the natural emotional response to losing someone or something important. It happens when we face death, breakups, or major changes. For example, losing a loved one, ending a relationship, or losing a job can trigger intense feelings of sadness. These feelings come and go but can be overwhelming at times',
                },
                {
                    subtitle: 'The Stages of Grief',
                    text: "People often go through five stages of grief, but everyone experiences them differently. These are:\n- Denial: Refusing to accept the loss\n- Anger: Feeling upset or mad over what happened\n- Bargaining: Trying to make deals to fix it\n- Depression: Feeling deeply sad and hopeless\n- Acceptance: Coming to terms with the loss\nRemember, these stages don't always happen in order, and some people may skip some entirely. Grief is a personal journey",
                },
                {
                    subtitle: 'Recognizing Signs of Unhealthy Grief',
                    text: 'While grief is normal, sometimes it lasts too long or becomes intense. Signs include feeling sad for months, avoiding people and activities, or having trouble functioning. If grief starts to impact your work, sleep, or relationships, it may be time to seek help from a mental health professional',
                },
            ],
        },
        {
            title: 'What Is Trauma?',
            content: [
                {
                    text: 'Trauma is an emotional response to a very upsetting or overwhelming event. This event could be abuse, violence, an accident, or a natural disaster. Trauma can happen after a single incident, like a car crash, or over time through ongoing stress or abuse. When someone experiences trauma, their mind and body react strongly',
                },
                {
                    subtitle: 'Symptoms and Signs of Traumatic Impact :',
                    text: 'People who go through trauma may have flashbacks, intrusive thoughts, or feel numb. They might be always on alert, easily startled, or avoid places that remind them of the event. Physical signs can include trouble sleeping, being exhausted, or feeling tense most of the time',
                },
                {
                    subtitle: 'The Spectrum of Trauma-Related Disorders :',
                    text: 'Trauma can lead to different mental health issues:\n- Acute Stress Disorder: Short-term distress shortly after trauma\n- Post-Traumatic Stress Disorder (PTSD): Longer-lasting symptoms that interfere with life\nBoth can change how you feel and interact with others',
                },
            ],
        },
        {
            title: 'Comparing Grief and Trauma',
            content: [
                {
                    subtitle: 'Differentiating the Emotional Responses',
                    text: 'Grief usually involves feeling sad because of a loss, like losing a loved one. Trauma involves feeling overwhelmed by a frightening or violent event. Grief often leads to long-term mourning, while trauma may cause hyperarousal or avoidance behaviors. Still, both can hit hard and overlap in some cases',
                },
                {
                    subtitle: 'Overlapping Symptoms',
                    text: "Both grief and trauma can cause feelings of sadness, anxiety, trouble concentrating, and even physical symptoms like headaches. Sometimes, grief can evolve into trauma if it's intense or unresolved",
                },
                {
                    subtitle: 'When Grief Turns into Trauma or Vice Versa',
                    text: 'In some situations, grief can trigger trauma symptoms, especially if the loss was sudden, violent, or traumatic. Recognizing the difference helps choose the right path to healing. Mental health assessments can guide you toward the best treatment',
                },
            ],
        },
        {
            title: 'Effective Strategies for Managing Grief and Trauma',
            content: [
                {
                    subtitle: 'Self-Care Practices and Coping Techniques',
                    text: 'Taking care of yourself is vital. Here are some ways to cope:\n- Practice mindfulness or meditation\n- Write down your feelings in a journal\n- Engage in physical activity like walking or yoga\n- Reach out to trusted friends or family members\nThese actions help process emotions and reduce stress',
                },
                {
                    subtitle: 'Building Resilience Through Healthy Habits',
                    text: 'Building resilience means creating routines that give stability. Examples include:\n- Setting small, achievable goals\n- Establishing regular sleep schedules\n- Saying no to things that overwhelm you\n- Doing activities that bring joy and purpose\nThese habits strengthen your ability to face difficult times',
                },
                {
                    subtitle: 'When and How to Seek Professional Help',
                    text: 'If symptoms persist or interfere with daily life, seek professional help. Grief counseling or trauma-focused therapy can provide tailored support. Early intervention improves outcomes',
                },
            ],
        },
        {
            title: 'Expert Insights and Evidence-Based Recommendations',
            content: [
                {
                    text: 'Mental health professionals emphasize that early intervention improves outcomes. Research shows that therapy can significantly reduce symptoms and improve quality of life. ' +
                        'Experts suggest being patient and gentle with yourself. Healing takes time, and waiting too long can make things worse. Psychologists recommend small steps: start by accepting ' +
                        'your feelings and asking for support. Overcoming grief and trauma is a process, but with dedication, recovery is within reach\n\n Psychologists recommend small steps. Start by' +
                        ' accepting your feelings and asking for support. Overcoming grief and trauma is a process, but with dedication, recovery is within reach\n\n To summarize understanding the difference' +
                        ' between grief and trauma helps you navigate the road to healing. Grief mostly deals with loss, while trauma involves a shocking or frightening event. Both affect mental health deeply ' +
                        'but can be managed with the right tools. Be patient, kind to yourself, and seek help when needed. Healing is a journey, and better days are ahead. Prioritize your mental health and take' +
                        ' steps to rebuild your strength. You deserve to move forward and find peace again',
                },
            ],
        },
    ],
    solutions: [
        'Practice mindfulness and meditation',
        'Engage in physical activity',
        'Join support groups',
        'Seek grief counseling',
        'Explore trauma-focused therapy',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Counseling helped me process my grief and find hope again',
            image: 'https://i.pravatar.cc/40?img=10',
        },
        {
            name: 'Michael, 34',
            text: 'Trauma therapy gave me tools to manage my flashbacks',
            image: 'https://i.pravatar.cc/40?img=11',
        },
        {
            name: 'David, 41',
            text: 'Support groups made me feel understood and less alone',
            image: 'https://i.pravatar.cc/40?img=12',
        },
    ],
    references: [
        'American Psychological Association. Grief and Loss',
        'National Institute of Mental Health. Post-Traumatic Stress Disorder',
        'World Health Organization. Mental Health and Trauma',
    ],
    motivation:
        'Grief and trauma affect millions of people every day. They can turn life upside down and leave you feeling lost. Knowing what they are, how to spot them, and ways to cope makes a big difference. Healing is possible, but it takes time and effort. This piece of information will explain the differences between grief and trauma, signs to watch for, and ways to start feeling better',
    counseling:
        'Our specialized grief and trauma counselors offer personalized strategies to help you heal. Start your journey to recovery today',
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

const GriefTrauma = () => {
    const navigate = useNavigate();
    const data = griefTraumaData;
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
        callbackRequest: '',
        termsAccepted: false,
    });

    // Gender options
    const genderOptions = ["Male", "Female", "Third"];
    
    // Callback request options
    const callbackRequestOptions = ["Self", "Child"];

    // Age options based on callback request selection
    const getAgeOptions = (callbackRequest) => {
        if (callbackRequest === "Self") {
            return Array.from({length: 83}, (_, i) => i + 18); // 18 to 100
        } else if (callbackRequest === "Child") {
            return Array.from({length: 25}, (_, i) => i + 1); // 1 to 25
        }
        return []; // Default empty array
    };

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => {
            const newData = {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            };
            
            // Reset age when callback request changes
            if (name === 'callbackRequest') {
                newData.age = '';
            }
            
            return newData;
        });
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
        
        if (!formData.callbackRequest) newErrors.callbackRequest = 'Callback request is required';
        
        if (!formData.termsAccepted) newErrors.termsAccepted = 'Please accept the terms and conditions';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.phone,
                enquiry_type: 'Request a Callback - Grief & Trauma',
                message: formData.message
            };
            await axios.post('https://interactapiverse.com/mahadevasth/enquiry', payload);
            toast.success("Your message has been sent successfully! We'll get back to you shortly.");
            setFormData({
                name: '',
                email: '',
                phone: '',
                age: '',
                message: '',
                gender: '',
                callbackRequest: '',
                termsAccepted: false,
            });
            setErrors({});
        } catch (error) {
            console.error('API Error:', error);
            toast.error('Failed to send your message. Please try again later.');
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
                        Grief & Trauma
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
                                {/*<Box sx={{ position: 'absolute', top: -40, left: -50, zIndex: 1, opacity: 0.7 }}>{doodleSVG}</Box>*/}
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
                                        Understanding Grief & Trauma
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
                                                        {/*<SelfImprovementIcon sx={{ color: secondary, mr: 1 }} />*/}
                                                        {item.subtitle}
                                                    </Typography>
                                                )}
                                                <Typography
                                                    sx={{
                                                        color: textBody,
                                                        fontFamily: 'Arial',
                                                        lineHeight: 1.7,
                                                        fontSize: {xs: '0.95rem', sm: '1rem'},
                                                        whiteSpace: 'pre-line',
                                                    }}
                                                >
                                                    {item.text}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                ))}

                                {/*<Box sx={{ mt: 6 }}>*/}
                                {/*    <Typography*/}
                                {/*        variant="h6"*/}
                                {/*        sx={{ color: primary, mb: 3, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
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
                                {/*                    <Typography sx={{ color: textBody, fontFamily: 'Arial', fontSize: '0.95rem' }}>*/}
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
                            {/*        p: { xs: 3, sm: 5 },*/}
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
                            {/*                <Box sx={{ p: 3, backgroundColor: softGray, borderRadius: 2, position: 'relative' }}>*/}
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
                            {/*                    <Typography sx={{ fontStyle: 'italic', color: textBody, mb: 2, fontFamily: 'Arial' }}>*/}
                            {/*                        {testimonial.text}*/}
                            {/*                    </Typography>*/}
                            {/*                    <Box sx={{ display: 'flex', alignItems: 'center' }}>*/}
                            {/*                        <Box*/}
                            {/*                            component="img"*/}
                            {/*                            src={testimonial.image}*/}
                            {/*                            sx={{ width: 40, height: 40, borderRadius: '50%', mr: 1 }}*/}
                            {/*                        />*/}
                            {/*                        <Typography sx={{ fontWeight: 600, color: textMain, fontFamily: 'Montserrat' }}>*/}
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

                                        {/* Callback Request Dropdown */}
                                        <Grid item xs={12}>
                                            <FormControl fullWidth required sx={formFieldStyle} error={!!errors.callbackRequest}>
                                                <InputLabel>Request a Call</InputLabel>
                                                <Select
                                                    name="callbackRequest"
                                                    value={formData.callbackRequest}
                                                    onChange={handleInputChange}
                                                    label="Callback Request"
                                                >
                                                    {callbackRequestOptions.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
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
                                                    disabled={!formData.callbackRequest}
                                                    MenuProps={{
                                                        PaperProps: {
                                                            style: {
                                                                maxHeight: 200,
                                                            },
                                                        },
                                                        anchorOrigin: {
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        },
                                                        transformOrigin: {
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        },
                                                    }}
                                                >
                                                    {getAgeOptions(formData.callbackRequest).map((age) => (
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

                                        {/* Terms and Conditions Checkbox */}
                                        <Grid item xs={12}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                                <input
                                                    type="checkbox"
                                                    name="termsAccepted"
                                                    checked={formData.termsAccepted}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        marginTop: '4px',
                                                        accentColor: '#FF7F1E'
                                                    }}
                                                />
                                                <Typography 
                                                    variant="body2" 
                                                    sx={{ 
                                                        color: textBody, 
                                                        fontSize: '0.875rem',
                                                        lineHeight: 1.4
                                                    }}
                                                >
                                                    I agree to the Terms and Conditions and consent to being contacted for callback requests.
                                                </Typography>
                                            </Box>
                                            {errors.termsAccepted && (
                                                <Typography 
                                                    variant="caption" 
                                                    sx={{ 
                                                        color: 'error.main', 
                                                        mt: 0.5,
                                                        display: 'block'
                                                    }}
                                                >
                                                    {errors.termsAccepted}
                                                </Typography>
                                            )}
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                disabled={!formData.termsAccepted}
                                                sx={{
                                                    backgroundColor: formData.termsAccepted ? secondary : '#ccc',
                                                    py: 1.5,
                                                    fontFamily: "Montserrat",
                                                    fontWeight: 700,
                                                    borderRadius: 3,
                                                    transition: "transform 0.2s",
                                                    "&:hover": {
                                                        backgroundColor: formData.termsAccepted ? secondary : '#ccc',
                                                        transform: formData.termsAccepted ? "translateY(-3px)" : "none",
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
                            {/*            Leading Grief & Trauma Counseling*/}
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
                            {/*                '&:hover': { backgroundColor: secondary, transform: 'translateY(-3px)' },*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            Explore Counseling*/}
                            {/*        </Button>*/}
                            {/*    </Box>*/}
                            {/*</Paper>*/}

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
                            {/*        sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*    >*/}
                            {/*        Assess Your Mental Health*/}
                            {/*    </Typography>*/}
                            {/*    <Typography sx={{ color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6 }}>*/}
                            {/*        Take our quick assessment to gain personalized insights and recommendations for healing.*/}
                            {/*    </Typography>*/}
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
                            {/*            '&:hover': { backgroundColor: secondary, transform: 'translateY(-3px)' },*/}
                            {/*        }}*/}
                            {/*        onClick={() => navigate("/resources/assessments")}*/}
                            {/*    >*/}
                            {/*        Start Assessment*/}
                            {/*    </Button>*/}
                            {/*</Paper>*/}

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
                            {/*        sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*    >*/}
                            {/*        Expert Support*/}
                            {/*    </Typography>*/}
                            {/*    <Typography sx={{ color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6 }}>*/}
                            {/*        Connect with professionals for tailored guidance to navigate grief and trauma.*/}
                            {/*    </Typography>*/}
                            {/*    <Box sx={{ mb: 4 }}>*/}
                            {/*        {[*/}
                            {/*            {*/}
                            {/*                icon: <ChatIcon />,*/}
                            {/*                title: '1-on-1 Counseling',*/}
                            {/*                desc: 'Personal sessions with licensed therapists',*/}
                            {/*            },*/}
                            {/*            {*/}
                            {/*                icon: <GroupIcon />,*/}
                            {/*                title: 'Support Groups',*/}
                            {/*                desc: 'Connect with others on similar journeys',*/}
                            {/*            },*/}
                            {/*            {*/}
                            {/*                icon: <SupportIcon />,*/}
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
                            {/*                        sx={{ fontWeight: 600, color: primary, fontFamily: 'Montserrat' }}*/}
                            {/*                    >*/}
                            {/*                        {option.title}*/}
                            {/*                    </Typography>*/}
                            {/*                    <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
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
                            {/*            '&:hover': { backgroundColor: secondary, transform: 'translateY(-3px)' },*/}
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
                            {/*        sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*    >*/}
                            {/*        Helpful Resources*/}
                            {/*    </Typography>*/}
                            {/*    {[*/}
                            {/*        {*/}
                            {/*            icon: <MenuBookIcon />,*/}
                            {/*            title: 'Grief Workbook',*/}
                            {/*            desc: 'Practical exercises for processing loss',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <HeadphonesIcon />,*/}
                            {/*            title: 'Guided Meditation',*/}
                            {/*            desc: 'Audio sessions for emotional healing',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <PsychologyIcon />,*/}
                            {/*            title: 'Expert Articles',*/}
                            {/*            desc: 'Insights from trauma professionals',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <VideoLibraryIcon />,*/}
                            {/*            title: 'Video Tutorials',*/}
                            {/*            desc: 'Visual guides for coping techniques',*/}
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
                            {/*            <Box sx={{ flex: 1 }}>*/}
                            {/*                <Typography*/}
                            {/*                    variant="subtitle1"*/}
                            {/*                    sx={{ fontWeight: 600, color: primary, fontFamily: 'Montserrat' }}*/}
                            {/*                >*/}
                            {/*                    <a href={resource.link} style={{ color: 'inherit', textDecoration: 'none' }}>*/}
                            {/*                        {resource.title}*/}
                            {/*                    </a>*/}
                            {/*                </Typography>*/}
                            {/*                <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
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
                            Ready to Begin Your Healing Journey?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you navigate grief and trauma with professional guidance
                            tailored to your unique situation
                        </Typography>
                        {/*<Button*/}
                        {/*    variant="contained"*/}
                        {/*    sx={{*/}
                        {/*        backgroundColor: secondary,*/}
                        {/*        py: 1.5,*/}
                        {/*        fontFamily: 'Montserrat',*/}
                        {/*        fontSize: '1.1rem',*/}
                        {/*        px: 4,*/}
                        {/*        '&:hover': { backgroundColor: secondary },*/}
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

export default GriefTrauma;