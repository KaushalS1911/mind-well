import React, {useState} from 'react';
import {Box, Container, Typography, Grid, Paper, Button, Divider, IconButton, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import GroupIcon from '@mui/icons-material/Group';
import SupportIcon from '@mui/icons-material/Support';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

// Image imports (retained from original)
import img6 from '../../../../assets/images/Home/Struggling/Overthinkinghero.jpg';
import img13 from '../../../../assets/images/Home/Struggling/Overthinking1.jpg';
import img20 from '../../../../assets/images/Home/Struggling/Overthinkingtime.jpg';

const overthinkingData = {
    title: 'What Is Overthinking? Why It is Bad for Success and How to Stop It',
    description: 'Discover techniques to quiet your mind, reduce excessive worry, and unlock your potential for success.',
    image: img6,
    image1: img13,
    firstimage: img20,
    icon: <PsychologyIcon/>,
    solutionIcons: [
        <SelfImprovementIcon fontSize="large"/>,
        <ChatIcon fontSize="large"/>,
        <ThumbUpAltIcon fontSize="large"/>,
        <LightbulbIcon fontSize="large"/>,
        <SupportAgentIcon fontSize="large"/>,
    ],
    sections: [
        {
            title: 'What Is Overthinking? Understanding the Roots of Excessive Mental Processing',
            content: [
                {
                    text: 'Overthinking happens when your mind keeps going over the same problems or choices. It involves continuous mental effort that does not lead anywhere. Instead of helping, it keeps you stuck, making it harder to move forward. Healthy reflection involves thinking about options to make better choices. Overthinking, on the other hand, is overdoing it, causing you to doubt yourself constantly or get lost in details that do not matter.',
                },
                {
                    subtitle: 'Types of Overthinking',
                    text: '• Rumination: Dwelling on past mistakes or negative experiences. It’s like replaying a bad scene again and again.\n• Worrying: Excess concern about what might happen in the future. Worry can grow worse when you obsess over worst-case scenarios.\n• Analysis paralysis: Overanalyzing every option so much that you become unable to choose at all. This makes decision-making slow and frustrating.',
                },
            ],
        },
        {
            title: 'Causes of Overthinking',
            content: [
                {
                    text: 'Why do some people keep overthinking? Several factors can lead to this habit:\n• Anxiety and fear of failure: Worrying about making mistakes can make you second-guess every move.\n• Perfectionism: Setting high standards makes it hard to accept mistakes or imperfect choices.\n• Information overload: Constant exposure to news, social media, or endless data can flood your mind, making it hard to focus.',
                },
            ],
        },
        {
            title: 'How Overthinking Affects Your Success',
            content: [
                {
                    subtitle: 'Diminished Decision-Making Ability',
                    text: 'When you overthink, decisions take longer or never happen at all. This hesitation can cause missed opportunities. For example, an entrepreneur who spends too much time analyzing every detail may delay launching a new product. That delay can mean the difference between success and falling behind.',
                },
                {
                    subtitle: 'Increased Stress and Anxiety',
                    text: 'Overthinking creates stress, which hurts your mental health. When your mind races with worries, your body reacts with stress responses. Over time, this can lead to feelings of anxiety or depression. Plus, high stress makes it harder to focus or stay motivated.',
                },
                {
                    subtitle: 'Decreased Creativity and Innovation',
                    text: 'A cluttered mind filled with overthinking struggles to think outside the box. When you second-guess every idea, spontaneous thoughts and new concepts get lost. Many innovative companies thrive because their team is not caught in endless analysis. Instead, they act quickly and learn as they go.',
                },
                {
                    subtitle: 'Negative Effect on Mental Health',
                    text: 'Overthinking can make mental health worse. It often leads to feelings of hopelessness, frustration, or doubt. Experts say that constantly dwelling on problems can turn into depression or anxiety disorders if it’s left unchecked.',
                },
            ],
        },
        {
            title: 'Why Overthinking Stops Success in Its Tracks',
            content: [
                {
                    subtitle: 'Analysis Paralysis Steals Your Momentum',
                    text: 'Think about a runner frozen at the start line. Overthinking is like that—waiting for the perfect moment causes delays. An overthinker may delay taking action because they fear making mistakes or are not sure if they have all the answers.',
                },
                {
                    subtitle: 'Fear of Mistakes Traps You',
                    text: 'Constant worry about making wrong choices often leads to avoiding decisions altogether. This fear keeps you stuck in place instead of moving forward. Over time, fear of mistakes becomes a barrier to growth.',
                },
                {
                    subtitle: 'Self-Confidence Takes a Hit',
                    text: 'When you overthink, you second-guess yourself constantly. This chips away at your trust in your own judgment. Without confidence, it gets even harder to make bold moves toward your goals.',
                },
                {
                    subtitle: 'Short-term vs. Long-term Results',
                    text: 'Overthinkers often chase perfect solutions and miss out on quick wins. By waiting too long or overanalyzing, they may lose chances to learn or grow now. Success often comes from taking imperfect action fast.',
                },
            ],
        },
        {
            title: 'Practical Strategies to Break Free from Overthinking and Boost Success',
            content: [
                {
                    subtitle: 'Practice Mindfulness and Focus on the Present',
                    text: 'Staying in the moment helps stop your mind from wandering into endless worries. Try simple techniques like deep breathing, meditation, or grounding exercises. These calm your mind and clear mental clutter.',
                },
                {
                    subtitle: 'Set Time Limits for Decisions',
                    text: 'Decide how long you will spend thinking about a choice. Use deadlines to cut off endless analysis. Tools like pros-and-cons lists or decision matrices help you act faster and make smarter choices.',
                },
                {
                    subtitle: 'Embrace Imperfection and Be Kind to Yourself',
                    text: 'Accept that mistakes are part of growth. Reframe failures as lessons. Study psychologist Brené Brown’s advice—show vulnerability and accept your flaws. This builds courage and reduces fear.',
                },
                {
                    subtitle: 'Limit Information Intake',
                    text: 'Reduce your exposure to overwhelming data or social media. Unfollow sources that cause stress. Less mental overload helps you stay focused and makes decision-making easier.',
                },
                {
                    subtitle: 'Adopt a Growth Mindset',
                    text: 'Focus on progress rather than perfection. Celebrate small wins, learn from setbacks, and keep moving forward. This shifts your view from fear of failure to confidence in growth.',
                },
                {
                    subtitle: 'Seek Support and SessionFeedback',
                    text: 'Talk with friends, mentors, or coaches. External ideas can help you break free from mental loops. Support boosts confidence and provides fresh perspectives.\n\n\n ' +
                        'We can say that overthinking can slow your progress and block success. It causes delays, stress, and less creativity. But you can break its hold with simple, practical steps. Practice mindfulness, set decision time limits, accept mistakes, and seek support. When you learn to think clearly and act confidently, you will see faster progress toward your goals. Remember, success is about acting—despite imperfections or doubts. Master your mindset, and turning ideas into achievements becomes easier than ever.',
                },
            ],
        },
    ],
    solutions: [
        'Mindfulness meditation',
        'Cognitive behavioral therapy',
        'Journaling thoughts',
        'Grounding techniques',
        'Professional counseling',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Mindfulness techniques helped me quiet my racing thoughts and focus on what matters.',
            image: 'https://i.pravatar.cc/40?img=10',
        },
        {
            name: 'Michael, 34',
            text: 'Counseling gave me tools to stop overanalyzing and start acting confidently.',
            image: 'https://i.pravatar.cc/40?img=11',
        },
        {
            name: 'David, 41',
            text: 'Learning to embrace imperfection changed how I approach decisions and boosted my success.',
            image: 'https://i.pravatar.cc/40?img=12',
        },
    ],
    references: [
        'Brown, B. (2012). Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live.',
        'American Psychological Association. (2020). Overthinking and Mental Health.',
        'Harvard Business Review. (2019). Overcoming Analysis Paralysis in Decision-Making.',
    ],
    motivation:
        'Overthinking is a common problem many people face. It can slow you down, cause stress, and even keep you from reaching your goals. You might think that thinking more will help you make better choices, but often, the opposite is true. When you analyze things too much, you can miss chances to grow and succeed. Some of the most successful people have fallen into the trap of overthinking—missing opportunities because they couldn’t make a decision fast enough. Recognizing overthinking and learning how to avoid it can change your life.',
    counseling:
        'Our counselors can help you develop strategies to manage overthinking and find mental calm. Begin your journey to a quieter mind today.',
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

const Overthinking = () => {
    const navigate = useNavigate();
    const data = overthinkingData;

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
                <Container sx={{position: 'relative', zIndex: 2}}>
                    <Typography
                        className="Montserrat"
                        sx={{
                            fontSize: {xs: '1.7rem', sm: '1.85rem', md: '2rem', lg: '2.125rem'},
                            fontWeight: 800,
                            color: secondary,
                            mb: 2,
                        }}
                    >
                        Overthinking
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
                    mx: { xs: '20px', sm: '70px', md: '90px', xl: 'auto' },
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
                                        Understanding Overthinking
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
                                                        <PsychologyIcon sx={{color: secondary, mr: 1}}/>
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
                                {/*                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',*/}
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
                            {/*            Leading Overthinking Support Services*/}
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
                                    Assess Your Situation
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>
                                    Take our quick assessment to gain personalized insights and recommendations for
                                    managing overthinking.
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
                                    onClick={() => navigate("/resources/assessments")}
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
                            {/*        Connect with professionals for tailored guidance to overcome overthinking and boost*/}
                            {/*        confidence.*/}
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
                            {/*            title: 'Overthinking Workbook',*/}
                            {/*            desc: 'Practical exercises to calm your mind',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <HeadphonesIcon/>,*/}
                            {/*            title: 'Guided Meditation',*/}
                            {/*            desc: 'Audio sessions for mental clarity',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <PsychologyIcon/>,*/}
                            {/*            title: 'Expert Articles',*/}
                            {/*            desc: 'Insights from mental health experts',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <VideoLibraryIcon/>,*/}
                            {/*            title: 'Video Tutorials',*/}
                            {/*            desc: 'Visual guides for decision-making',*/}
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
                            Ready to Clear Your Mind?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you overcome overthinking with professional guidance
                            tailored to your unique situation.
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

export default Overthinking;