import React, {useState} from 'react';
import {Box, Container, Typography, Grid, Paper, Button, Divider, IconButton, TextField} from '@mui/material';
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
import img3 from '../../../../assets/images/Home/Struggling/Substance-Abuse-Tel.webp';
import img10 from '../../../../assets/images/Home/Struggling/addiction feature.png';
import img17 from '../../../../assets/images/Home/Struggling/Addictiontime.jpg';

const addictionData = {
    title: 'Let’s Talk About Addiction: Why Quitting Is Essential for a Healthier Life',
    description: 'Discover effective strategies to break free from addiction and build a healthier, happier life.',
    image: img3,
    image1: img10,
    firstimage: img17,
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
            title: 'Understanding Addiction: Definitions and Types :',
            content: [
                {
                    text: 'Addiction is a strong dependence on a substance or behavior. It can be about drugs, alcohol, gambling, or even screens like social media or video games. These habits take control, making it tough to stop even when they cause harm. Not all addictions are the same, but they all change how the brain works.',
                },
            ],
        },
        {
            title: 'How Addiction Affects the Brain :',
            content: [
                {
                    text: 'When you use an addictive substance or engage in certain behaviors, your brain releases dopamine—a chemical that makes you feel good. Over time, your brain starts to rely on these feelings. It’s like your reward system gets hijacked. The more you repeat the act, the harder it becomes to feel happy or normal without it. Studies show that addiction physically changes the brain, making quitting a challenge.',
                },
            ],
        },
        {
            title: 'Factors Contributing to Addiction :',
            content: [
                {
                    text: 'Many things can make you more prone to addiction. Genetics play a role—if family members have addiction issues, you might too. The environment matters as well; stress, peer pressure, or trauma can push someone toward addictive behaviours. Mental health issues like depression or anxiety often go together with addiction, making recovery even harder without help.',
                },
            ],
        },
        {
            title: 'The Consequences of Continued Addiction :',
            content: [
                {
                    subtitle: 'Physical Health Risks',
                    text: 'Continuing addiction damages your body. Long-term alcohol use can lead to liver disease, while drugs might cause heart problems or neurological damage. Overdose is a real danger that can kill instantly. The longer you stay caught in addiction’s grip, the higher the risk of serious health problems.',
                },
                {
                    subtitle: 'Mental and Emotional Impact',
                    text: 'Addiction doesn’t only hurt your body. It can also mess with your mind. Feelings of anxiety or depression often come with addiction. You may feel emotionally unstable, and mental health disorders can only worsen if addiction continues unchecked.',
                },
                {
                    subtitle: 'Social and Economic Consequences',
                    text: 'Addiction can ruin relationships with friends and family. It often causes loneliness and social withdrawal. Financial problems are common too—spending money on substances or addictive behaviours drains savings and can ruin job prospects. Over time, addiction may lead to unemployment and poverty.',
                },
                {
                    subtitle: 'Societal Impact',
                    text: 'When many people struggle with addiction, society feels the burden. Healthcare costs soar, and law enforcement must deal with related crimes. Families suffer when a loved one is addicted, creating a ripple effect that harms entire communities.',
                },
            ],
        },
        {
            title: 'The Benefits of Quitting Addiction :',
            content: [
                {
                    subtitle: 'Improved Physical and Mental Health',
                    text: 'Stopping addiction leads to better health. Liver function, heart health, and brain function improve. Emotionally, many report feeling calmer and more balanced. The mind clears, and there’s a new ability to handle stress without turning to old habits.',
                },
                {
                    subtitle: 'Better Relationships and Social Life',
                    text: 'When you quit, trust with loved ones often rebuilds. You become more present and available. Cultivating a healthy social network encourages growth and support, which sustains long-term sobriety.',
                },
                {
                    subtitle: 'Increased Productivity and Financial Stability',
                    text: 'Quitters find it easier to hold down jobs and set goals. Not spending on substances saves money. Over time, this adds up and creates financial stability. Feeling productive and financially secure boosts self-esteem.',
                },
                {
                    subtitle: 'Personal Growth and Self-Empowerment',
                    text: 'Quitting builds resilience and self-control. You reclaim control over your life. Many discover hobbies, passions, or new careers that were once out of reach. It’s a chance to grow and become the best version of yourself.',
                },
            ],
        },
        {
            title: 'Effective Strategies for Quitting and Recovery:',
            content: [
                {
                    subtitle: 'Professional Help and Treatment Options',
                    text: 'A structured detox might be necessary for severe addiction. Medical help can ease withdrawal symptoms. Counseling, therapy, and support groups like Alcoholics Anonymous or Narcotics Anonymous provide ongoing encouragement and tools to stay sober.',
                },
                {
                    subtitle: 'Lifestyle Changes and Healthy Habits',
                    text: 'Changing daily routines helps break old patterns. Exercise, good nutrition, and mindfulness reduce stress and improve mood. Developing new hobbies fills the void left by old habits.',
                },
                {
                    subtitle: 'Building a Support System',
                    text: 'Surround yourself with family, friends, or peer groups who understand your journey. Seeking help is brave, and maintaining motivation often relies on support from others. Share your goals and setbacks openly.',
                },
                {
                    subtitle: 'Overcoming Relapse and Maintaining Sobriety',
                    text: 'Relapse can happen. Recognize triggers such as stress, certain places, or emotional lows. Have a plan for avoiding high-risk situations.' +
                        ' Building long-term plans keeps you on track, even when facing tough times.:\n\n Lastly, addiction has a deep impact on your health, relationships,' +
                        ' and life. Quitting is not easy, but it is worth every effort. Recovery is real and happening for many each day. With the right help and attitude,' +
                        ' you can break free from addiction and reclaim a healthier, happier life.:\n\n If you or someone you know struggles with addiction, don’t wait. Reach out' +
                        ' for help, explore resources, and commit to making a change. A brighter future starts today.',

                },
            ],
        },
    ],
    solutions: [
        'Join support groups like AA or NA',
        'Engage in behavioral therapy',
        'Explore medication-assisted treatment',
        'Adopt healthy lifestyle changes',
        'Seek professional counseling',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Counseling gave me the tools to stay sober and rebuild my life.',
            image: 'https://i.pravatar.cc/40?img=10',
        },
        {
            name: 'Michael, 34',
            text: 'Support groups helped me feel understood and motivated.',
            image: 'https://i.pravatar.cc/40?img=11',
        },
        {
            name: 'David, 41',
            text: 'Therapy helped me overcome my triggers and stay on track.',
            image: 'https://i.pravatar.cc/40?img=12',
        },
    ],
    references: [
        'National Institute on Drug Abuse. Understanding Drug Use and Addiction.',
        'World Health Organization. Substance Abuse and Mental Health.',
        'American Psychological Association. Addiction Recovery Strategies.',
    ],
    motivation:
        'Addiction is everywhere today. From social media to alcohol, many people struggle with habits they can’t shake. It’s a problem that affects millions worldwide, costing lives and tearing families apart. Understanding addiction and knowing why quitting is so important can help you or someone you love start fresh. The good news? Recovery is possible, and life gets better when you take that first step.',
    counseling:
        'Our addiction specialists provide personalized treatment plans to help you overcome addiction and embrace a healthier future. Start your recovery today.',
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

const Addiction = () => {
    const navigate = useNavigate();
    const data = addictionData;

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Optional validation
        if (!formData.name || !formData.email || !formData.phone || !formData.age || !formData.message) {
            alert('Please fill out all fields');
            return;
        }

        console.log('Submitted data:', formData);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            message: ''
        });
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
                        Addiction
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
                                        Understanding Addictions
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
                            <Paper elevation={3}
                                   sx={{
                                       p: 4,
                                       borderRadius: 4,
                                       background: 'white',
                                       boxShadow: '0 8px 32px rgba(1,39,101,0.15)',
                                       mb: 4,
                                   }}>
                                <Box onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} >
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                sx={formFieldStyle}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                sx={formFieldStyle}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                sx={formFieldStyle}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <TextField
                                                fullWidth
                                                label="Age"
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleInputChange}
                                                required
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
                                                    '&:hover': { backgroundColor: secondary, transform: 'translateY(-3px)' },
                                                }}
                                            >
                                                Request a callBack
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
                            {/*            Leading Grief & Trauma Counseling*/}
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
                                    Assess Your Mental Health
                                </Typography>
                                <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>
                                    Take our quick assessment to gain personalized insights and recommendations for
                                    healing.
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
                            {/*        Connect with professionals for tailored guidance to navigate grief and trauma.*/}
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
                            {/*            title: 'Grief Workbook',*/}
                            {/*            desc: 'Practical exercises for processing loss',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <HeadphonesIcon/>,*/}
                            {/*            title: 'Guided Meditation',*/}
                            {/*            desc: 'Audio sessions for emotional healing',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <PsychologyIcon/>,*/}
                            {/*            title: 'Expert Articles',*/}
                            {/*            desc: 'Insights from trauma professionals',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <VideoLibraryIcon/>,*/}
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
                            Ready to Begin Your Healing Journey?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you navigate grief and trauma with professional guidance
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

export default Addiction;