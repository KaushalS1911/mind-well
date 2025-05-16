import React, {useState} from 'react';
import {Box, Container, Typography, Grid, Paper, Button, Divider, IconButton, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
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
import img5 from '../../../../assets/images/Home/Struggling/bullingtime.jpg';
import img12 from '../../../../assets/images/Home/Struggling/Bullying.webp';
import img19 from '../../../../assets/images/Home/Struggling/Bullying-Prevention.png';
import img2 from "../../../../assets/images/about/aboutHeader/aboutheader.jpg";

const bullyingData = {
    title: 'Understanding Bullying and Its Side Effects: A Comprehensive Guide to Protecting Youth and Promoting Awareness',
    description: 'Find support and strategies to address and heal from the effects of bullying, creating safer environments for all.',
    image: img5,
    image1: img12,
    firstimage: img19,
    icon: <ReportProblemIcon/>,
    solutionIcons: [
        <SpaIcon fontSize="large"/>,
        <LightbulbIcon fontSize="large"/>,
        <HeadphonesIcon fontSize="large"/>,
        <FitnessCenterIcon fontSize="large"/>,
        <BalanceIcon fontSize="large"/>,
    ],
    sections: [
        {
            title: 'What Is Bullying?',
            content: [
                {
                    text: 'Bullying is repeated aggressive or hurtful behavior with the goal of harming someone. It usually involves an imbalance of power, where the bully feels stronger or more influential than the victim. Bullying can take many forms, each with its own impact.',
                },
                {
                    subtitle: 'Types of Bullying',
                    text: '• Physical Bullying: Hitting, pushing, or damaging someone’s belongings.\n• Verbal Bullying: Name-calling, teasing, or threatening.\n• Social or Relational Bullying: Excluding someone, spreading rumors, or embarrassing them publicly.\n• Cyberbullying: Using social media, texts, or emails to harass or humiliate.\nIn most cases, bullying happens repeatedly, making it hard for victims to escape. The power difference fuels the cycle of harm.',
                },
            ],
        },
        {
            title: 'Impact of Bullying on Mental and Emotional Health',
            content: [
                {
                    text: 'The emotional toll of bullying is often severe. Victims may feel helpless or trapped, which can cause lasting harm.',
                },
                {
                    subtitle: 'Common Psychological Side Effects',
                    text: '• Anxiety and Depression: Feelings of constant worry or sadness are common among victims.\n• Low Self-Esteem: Victims often start believing they are worthless or at fault.\n• PTSD (Post-Traumatic Stress Disorder): Severe cases may lead to flashbacks, nightmares, or severe emotional distress.' +
                        '\n For example, Recent studies show that children who face frequent bullying are more likely to develop anxiety disorders and depression later in life. Experts agree that emotional wounds from bullying can be deep and long-lasting.',
                },
            ],
        },
        {
            title: 'Academic and Social Consequences of Bullying',
            content: [
                {
                    subtitle: 'Bullying doesn’t only affect feelings — it hits school work and social skills too.',
                    text: '• Effect on School and Learning \n • Lower grades due to decreased motivation.\n• School avoidance or skipping classes.\n• Higher chances of dropping out.\n• Isolation from peers.\n• Struggling to form healthy friendships.\n• Difficulty trusting others later in life.',
                },
            ],
        },
        {
            title: 'Physical Health Effects Linked to Bullying',
            content: [
                {
                    text: 'Stress from bullying can also hurt physical health over time.',
                },
                {
                    subtitle: 'Common Symptoms',
                    text: '• Sleep problems or insomnia.\n• Headaches, stomachaches, or other aches.\n• Symptoms that don’t seem to have a medical cause (psychosomatic issues).\n • Many victims find that their physical health worsens as emotional stress builds up.',
                },
            ],
        },
        {
            title: 'Long-term Side Effects of Bullying',
            content: [
                {
                    text: '• The scars left by bullying often extend beyond childhood.\n• Mental health issues like depression can continue into adulthood.\n• Increased risk of drug or alcohol abuse.\n• Difficulties maintaining personal relationships or holding jobs.\n • Research links childhood bullying to ongoing mental health struggles, showing that early acts of aggression can echo throughout life.',
                },
            ],
        },
        {
            title: 'Strategies for Prevention and Intervention',
            content: [
                {
                    text: 'Stopping bullying takes team effort. Schools, parents, and communities all play crucial roles.',
                },
                {
                    subtitle: 'Schools Can Help',
                    text: '• Create clear anti-bullying policies.\n• Set up easy ways for students to report bullying.\n• Hold workshops to teach students and teachers about respect and kindness.',
                },
                {
                    subtitle: 'Parents and Caregivers',
                    text: '• Watch for signs of bullying, such as withdrawal or changes in mood.\n• Talk openly with children about their feelings.\n• Encourage them to speak up and seek help if needed.',
                },
                {
                    subtitle: 'Digital Safety',
                    text: '• Monitor online activity and limit screen time.\n• Talk about respectful online behavior.\n• Report cyberbullying to social media platforms or authorities.',
                },
            ],
        },
        {
            title: 'Supporting Victims and Promoting Resilience',
            content: [
                {
                    text: '• Helping victims bounce back is key to stopping long-term damage.\n• Boost confidence by praising achievements.\n• Offer emotional support or connect them to counselors.\n• Encourage peer support groups where victims can share their experiences.\n\nEarly help stops problems from getting worse and can turn victims into resilience builders. Experts say trauma-informed care, which focuses on understanding and healing emotional wounds, is especially effective.\n\n\nTo summarize, Bullying causes serious harm—mentally, physically, and socially. It can lead to lifelong struggles if not addressed early. Prevention, awareness, and support are vital tools we can all use. Schools should stay strict with anti-bullying policies. Parents need to stay involved and open with their children. And in the digital world, safe online habits are more important than ever. If we all work together, we can reduce bullying and help those affected heal and thrive. Everyone deserves a safe, respectful environment to grow and succeed.',
                },
            ],
        },
    ],
    solutions: [
        'Assertiveness training',
        'Counseling and therapy',
        'Joining support groups',
        'Building resilience',
        'Reporting and intervention',
    ],
    testimonials: [
        {
            name: 'Sarah, 28',
            text: 'Counseling gave me the tools to stand up to bullying and rebuild my confidence.',
            image: 'https://i.pravatar.cc/40?img=10',
        },
        {
            name: 'Michael, 34',
            text: 'Support groups helped me feel less alone and stronger in facing my past.',
            image: 'https://i.pravatar.cc/40?img=11',
        },
        {
            name: 'David, 41',
            text: 'Therapy taught me to heal from bullying and advocate for others.',
            image: 'https://i.pravatar.cc/40?img=12',
        },
    ],
    references: [
        'American Psychological Association. (2020). Bullying: Impact on Mental Health.',
        'National Center for Education Statistics. (2019). Student Reports of Bullying.',
        'StopBullying.gov. (2021). Effects of Bullying on Youth.',
    ],
    motivation:
        'Bullying is a problem that affects many people, from students in school to adults in the workplace. With the rise of online platforms, bullying has become even easier to do and harder to escape. This makes understanding its side effects more important than ever. Bullying doesn’t only cause immediate pain but can also lead to long-term struggles with mental health, school, and social life. Knowing what bullying is and how it impacts people can help us protect those at risk and create safer environments. This guide offers insights, real stories, and practical tips to stop bullying and reduce its effects.',
    counseling:
        'Our counselors can provide tools and strategies to cope with bullying and rebuild your self-esteem. Take the first step towards healing today.',
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

const Bullying = () => {
    const navigate = useNavigate();
    const data = bullyingData;

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
                        Bullying
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
                                        Understanding Bullying
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
                                                        {/*<ReportProblemIcon sx={{color: secondary, mr: 1}}/>*/}
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
                            {/*            Leading Bullying Support Services*/}
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
                                    overcoming bullying.
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
                            {/*        Connect with professionals for tailored guidance to address bullying and build*/}
                            {/*        resilience.*/}
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
                            {/*            title: 'Bullying Prevention Guide',*/}
                            {/*            desc: 'Practical strategies to address bullying',*/}
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
                            {/*            desc: 'Insights from bullying specialists',*/}
                            {/*            link: '#',*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            icon: <VideoLibraryIcon/>,*/}
                            {/*            title: 'Video Tutorials',*/}
                            {/*            desc: 'Visual guides for resilience-building',*/}
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
                            Ready to Stand Against Bullying?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our counselors are trained to help you address bullying with professional guidance tailored
                            to your unique situation.
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

export default Bullying;