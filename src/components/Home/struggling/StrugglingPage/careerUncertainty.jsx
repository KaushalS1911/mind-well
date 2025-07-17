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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import GroupIcon from '@mui/icons-material/Group';
import SupportIcon from '@mui/icons-material/Support';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Placeholder images (replace with actual images if available)
import imgPlaceholder1 from '../../../../assets/images/Home/Struggling/careerhero.png';
import imgPlaceholder2 from '../../../../assets/images/Home/Struggling/anxious-man-working.jpg';
import imgPlaceholder3 from '../../../../assets/images/Home/Struggling/handsome-business-man.jpg';

const careerUncertaintyData = {
    title: 'What is Career Uncertainty and How to Find a Career That Suits You',
    description: 'Explore strategies to overcome career doubts and discover a path that aligns with your values and strengths',
    image: imgPlaceholder1,
    image1: imgPlaceholder2,
    firstimage: imgPlaceholder3,
    icon: <BusinessCenterIcon/>,
    solutionIcons: [
        <ExploreIcon fontSize="large"/>,
        <SchoolIcon fontSize="large"/>,
        <ChatIcon fontSize="large"/>,
        <LightbulbIcon fontSize="large"/>,
        <SupportAgentIcon fontSize="large"/>,
    ],
    sections: [
        {
            title: 'Understanding What Career Uncertainty Is',
            content: [
                {
                    subtitle: 'Defining Career Uncertainty',
                    text: "Career uncertainty is the difficulty in choosing or sticking with a particular career plan. It often shows up as feeling lost or confused about your next move. Several things can cause this, like changes in the economy, new technology, your personal values, or life events. When unsure, it's hard to commit or feel confident about your choices",
                },
                {
                    subtitle: 'The Impact of Career Uncertainty',
                    text: 'This kind of doubt can affect your mind and your work. You might feel anxious, stressed, or unmotivated. Professionally, it can lead to staying in jobs you dislike, missing chances for growth, or jumping from one role to another without a clear direction. Over time, this can make it tough to build a successful career',
                },
            ],
        },
        {
            title: 'Recognizing Signs of Career Uncertainty',
            content: [
                {
                    text: "Do any of these sound familiar?\n• Feeling overwhelmed when thinking about your options\n• Frequently changing jobs or avoiding making long-term plans\n• Lack of enthusiasm or purpose in your current role\n• Second-guessing your choices and feeling unsure about your skills\nWhen these signs appear, it's a sign you need to pause and explore what's really important to you",
                },
            ],
        },
        {
            title: "Why Career Uncertainty Is Increasing in Today's World",
            content: [
                {
                    subtitle: 'External Factors Contributing to Career Ambiguity',
                    text: 'A few big changes make career doubts more common. Rapid tech advances are changing entire industries. The job market is now more competitive, with many options vying for your attention. Plus, more people than ever are working freelance or gig jobs, which can feel unpredictable',
                },
                {
                    subtitle: 'Internal Factors Influencing Career Doubt',
                    text: "Sometimes, it's what happens inside your mind. Your values may shift as you grow, and fears of failure or making the wrong choice can hold you back. You might not know enough about your own strengths and interests to decide confidently. Without clear self-knowledge, choosing a career feels even harder",
                },
                {
                    subtitle: 'Data and Trends',
                    text: "Studies show many workers switch careers multiple times. The average job length is dropping, and workers say they want more clarity about their future. This trend points to more uncertainty in today's job scene. It's normal to feel confused when so much is changing all the time",
                },
            ],
        },
        {
            title: 'How to Identify Which Career Suits You',
            content: [
                {
                    subtitle: 'Self-Assessment as a Starting Point',
                    text: 'Begin with a simple inventory of your skills and interests. Ask yourself what you enjoy doing every day. You can also try tools like personality tests or the Strong Interest Inventory to get a clearer picture of your strengths and preferences',
                },
                {
                    subtitle: 'Exploring Your Values and Motivations',
                    text: 'What truly matters to you at work? Is it having freedom to be creative? Wanting job security? Helping others? Knowing your core values makes it easier to find careers that match your reasons for working',
                },
                {
                    subtitle: 'Research and Connect with Others',
                    text: 'Look into different industries and roles through online research. Reach out to people working in those fields and ask about their experiences. Informational interviews give you real stories and can spark your interest in new directions',
                },
                {
                    subtitle: 'Testing and Gaining Experience',
                    text: 'Trying out new careers through internships, volunteering, or side projects helps you understand what feels right. These opportunities provide practical experience and help reveal what you enjoy most',
                },
            ],
        },
        {
            title: 'Practical Steps to Clarify Your Career Path',
            content: [
                {
                    subtitle: 'Set Clear Goals and Make Plans',
                    text: 'Write down what you hope to achieve in the short and long term. Create simple action steps and deadlines. This way, you move forward with purpose, not just floating in uncertainty',
                },
                {
                    subtitle: 'Find Guidance and Mentors',
                    text: 'Talk to career coaches or counselors who can offer advice. Join industry groups or professional communities to meet people who can teach you more. Having a mentor can give you direction and confidence',
                },
                {
                    subtitle: 'Keep Learning and Improving Skills',
                    text: 'Invest in courses, certifications, or workshops related to your interests. Stay updated on industry news and trends. Learning new skills keeps you flexible and ready for change',
                },
                {
                    subtitle: 'Reflect and Stay Open to Change',
                    text: "Take time regularly to think about your progress and feelings. Are you happier with your choices? If not, be willing to adjust your plans. Flexibility helps you grow and find jobs that truly fit you\n\n\n Career uncertainty is a common challenge in today's busy world. It happens because of external changes and internal doubts. The key to overcoming it is to understand yourself better through self-assessment and research. Take practical steps like setting goals, seeking help, gaining experience, and staying open. Remember, your career path is not fixed; embrace change and continuous learning to build a satisfying future. Find what makes you happy and pushes you toward your goals. Your ideal career is easier to discover when you know yourself and are willing to explore",
                },
            ],
        },
    ],
    solutions: [
        'Self-assessment tools',
        'Career counseling',
        'Informational interviews',
        'Skill-building workshops',
        'Mentorship programs',
    ],
    testimonials: [
        {
            name: 'Emma, 29',
            text: "Career counseling helped me identify my strengths and find a path I'm excited about",
            image: 'https://i.pravatar.cc/40?img=13',
        },
        {
            name: 'Liam, 35',
            text: 'Connecting with a mentor gave me the clarity and confidence to switch careers',
            image: 'https://i.pravatar.cc/40?img=14',
        },
        {
            name: 'Sophie, 42',
            text: 'Exploring new roles through volunteering showed me what I truly enjoy doing',
            image: 'https://i.pravatar.cc/40?img=15',
        },
    ],
    references: [
        'U.S. Bureau of Labor Statistics. (2022). Employment Projections and Career Changes',
        'Holland, J. L. (1997). Making Vocational Choices: A Theory of Vocational Personalities and Work Environments',
        'LinkedIn. (2023). Workforce Confidence Survey: Career Mobility Trends',
    ],
    motivation:
        "Feeling unsure about your career path is more common than you might think. In today's ever-changing job market, many people face questions like, 'What should I do next?' or 'Is this the right job for me?' This confusion can cause stress and hold you back from reaching your goals. Knowing how to understand your feelings and take smart steps can help you find a career that truly fits your interests and values",
    counseling:
        'Our career counselors can guide you through uncertainty, helping you identify your strengths and build a fulfilling career',
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

const CareerUncertainty = () => {
    const navigate = useNavigate();
    const data = careerUncertaintyData;

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

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Gender options
    const genderOptions = ["Male", "Female", "Other"];

// Age options (1 to 100)
    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

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
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.phone,
                enquiry_type: 'Request a Callback - Career Uncertainty',
                message: formData.message
            };
            await axios.post('https://interactapiverse.com/mahadevasth/enquiry', payload);
            toast.success("Your message has been sent successfully! We'll get back to you shortly.");
            setFormData({ name: '', email: '', phone: '', age: '', message: '' });
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
                        Career Uncertainty
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
                                {/*  variant="contained"*/}
                                {/*  sx={{*/}
                                {/*    backgroundColor: secondary,*/}
                                {/*    color: 'white',*/}
                                {/*    fontWeight: 700,*/}
                                {/*    borderRadius: 3,*/}
                                {/*    px: 5,*/}
                                {/*    py: 1.5,*/}
                                {/*    fontSize: '1.1rem',*/}
                                {/*    fontFamily: 'Montserrat',*/}
                                {/*    boxShadow: '0 4px 16px rgba(255,127,30,0.3)',*/}
                                {/*    transition: 'transform 0.2s, box-shadow 0.2s',*/}
                                {/*    '&:hover': {*/}
                                {/*      backgroundColor: secondary,*/}
                                {/*      transform: 'translateY(-3px)',*/}
                                {/*      boxShadow: '0 6px 24px rgba(255,127,30,0.4)',*/}
                                {/*    },*/}
                                {/*  }}*/}
                                {/*>*/}
                                {/*  Book a Counsellor*/}
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
                                        Understanding Career Uncertainty
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
                                                        {/*<BusinessCenterIcon sx={{ color: secondary, mr: 1 }} />*/}
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
                                {/*  <Typography*/}
                                {/*    variant="h6"*/}
                                {/*    sx={{ color: primary, mb: 3, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                                {/*  >*/}
                                {/*    References*/}
                                {/*  </Typography>*/}
                                {/*  <Grid container spacing={2}>*/}
                                {/*    {data.references.map((ref, index) => (*/}
                                {/*      <Grid item xs={12} sm={6} key={index}>*/}
                                {/*        <Box*/}
                                {/*          sx={{*/}
                                {/*            p: 2,*/}
                                {/*            backgroundColor: softGray,*/}
                                {/*            borderRadius: 2,*/}
                                {/*            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',*/}
                                {/*          }}*/}
                                {/*        >*/}
                                {/*          <Typography sx={{ color: textBody, fontFamily: 'Arial', fontSize: '0.95rem' }}>*/}
                                {/*            • {ref}*/}
                                {/*          </Typography>*/}
                                {/*        </Box>*/}
                                {/*      </Grid>*/}
                                {/*    ))}*/}
                                {/*  </Grid>*/}
                                {/*</Box>*/}
                            </Paper>

                            {/*<Paper*/}
                            {/*  elevation={3}*/}
                            {/*  sx={{*/}
                            {/*    p: { xs: 3, sm: 5 },*/}
                            {/*    borderRadius: 4,*/}
                            {/*    background: 'white',*/}
                            {/*    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*    mb: 6,*/}
                            {/*  }}*/}
                            {/*>*/}
                            {/*  <Typography*/}
                            {/*    variant="h5"*/}
                            {/*    sx={{*/}
                            {/*      color: primary,*/}
                            {/*      mb: 3,*/}
                            {/*      fontFamily: 'Montserrat',*/}
                            {/*      fontWeight: 700,*/}
                            {/*      textAlign: 'center',*/}
                            {/*    }}*/}
                            {/*  >*/}
                            {/*    You're Not Alone*/}
                            {/*  </Typography>*/}
                            {/*  <Grid container spacing={3}>*/}
                            {/*    {data.testimonials.map((testimonial, index) => (*/}
                            {/*      <Grid item xs={12} xl={4} key={index}>*/}
                            {/*        <Box sx={{ p: 3, backgroundColor: softGray, borderRadius: 2, position: 'relative' }}>*/}
                            {/*          <Typography*/}
                            {/*            sx={{*/}
                            {/*              fontSize: 60,*/}
                            {/*              color: secondary,*/}
                            {/*              position: 'absolute',*/}
                            {/*              top: 0,*/}
                            {/*              right: 10,*/}
                            {/*              fontFamily: 'Georgia, serif',*/}
                            {/*            }}*/}
                            {/*          >*/}
                            {/*            "*/}
                            {/*          </Typography>*/}
                            {/*          <Typography sx={{ fontStyle: 'italic', color: textBody, mb: 2, fontFamily: 'Arial' }}>*/}
                            {/*            {testimonial.text}*/}
                            {/*          </Typography>*/}
                            {/*          <Box sx={{ display: 'flex', alignItems: 'center' }}>*/}
                            {/*            <Box*/}
                            {/*              component="img"*/}
                            {/*              src={testimonial.image}*/}
                            {/*              sx={{ width: 40, height: 40, borderRadius: '50%', mr: 1 }}*/}
                            {/*            />*/}
                            {/*            <Typography sx={{ fontWeight: 600, color: textMain, fontFamily: 'Montserrat' }}>*/}
                            {/*              {testimonial.name}*/}
                            {/*            </Typography>*/}
                            {/*          </Box>*/}
                            {/*        </Box>*/}
                            {/*      </Grid>*/}
                            {/*    ))}*/}
                            {/*  </Grid>*/}
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
                            {/*  elevation={3}*/}
                            {/*  sx={{*/}
                            {/*    p: 0,*/}
                            {/*    mb: 4,*/}
                            {/*    borderRadius: 4,*/}
                            {/*    overflow: 'hidden',*/}
                            {/*    background: 'white',*/}
                            {/*    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*  }}*/}
                            {/*>*/}
                            {/*  <Box sx={{ position: 'relative' }}>*/}
                            {/*    <Box*/}
                            {/*      component="img"*/}
                            {/*      src={data.image1}*/}
                            {/*      alt="Expert"*/}
                            {/*      sx={{ width: '100%', height: { xs: 250, sm: 300 }, objectFit: 'cover', borderRadius: '4px 4px 0 0' }}*/}
                            {/*    />*/}
                            {/*    <Box*/}
                            {/*      sx={{*/}
                            {/*        position: 'absolute',*/}
                            {/*        bottom: 16,*/}
                            {/*        left: 16,*/}
                            {/*        background: secondary,*/}
                            {/*        color: 'white',*/}
                            {/*        px: 3,*/}
                            {/*        py: 1,*/}
                            {/*        borderRadius: 2,*/}
                            {/*        fontWeight: 700,*/}
                            {/*        fontSize: { xs: '0.9rem', sm: '1rem' },*/}
                            {/*        fontFamily: 'Montserrat',*/}
                            {/*        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',*/}
                            {/*      }}*/}
                            {/*    >*/}
                            {/*      12+ Years of Experience*/}
                            {/*    </Box>*/}
                            {/*  </Box>*/}
                            {/*  <Box sx={{ p: 4 }}>*/}
                            {/*    <Typography*/}
                            {/*      variant="h6"*/}
                            {/*      sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*    >*/}
                            {/*      Leading Career Guidance Services*/}
                            {/*    </Typography>*/}
                            {/*    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>*/}
                            {/*      <ChatIcon sx={{ color: secondary, mr: 1.5 }} />*/}
                            {/*      <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
                            {/*        Career Counseling*/}
                            {/*      </Typography>*/}
                            {/*    </Box>*/}
                            {/*    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>*/}
                            {/*      <GroupIcon sx={{ color: secondary, mr: 1.5 }} />*/}
                            {/*      <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
                            {/*        Professional Networks*/}
                            {/*      </Typography>*/}
                            {/*    </Box>*/}
                            {/*    <Button*/}
                            {/*      variant="contained"*/}
                            {/*      sx={{*/}
                            {/*        backgroundColor: secondary,*/}
                            {/*        color: 'white',*/}
                            {/*        fontWeight: 700,*/}
                            {/*        borderRadius: 3,*/}
                            {/*        mt: 2,*/}
                            {/*        px: 4,*/}
                            {/*        py: 1.5,*/}
                            {/*        fontFamily: 'Montserrat',*/}
                            {/*        transition: 'transform 0.2s',*/}
                            {/*        '&:hover': { backgroundColor: secondary, transform: 'translateY(-3px)' },*/}
                            {/*      }}*/}
                            {/*    >*/}
                            {/*      Explore Counseling*/}
                            {/*    </Button>*/}
                            {/*  </Box>*/}
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
                            {/*        sx={{color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700}}*/}
                            {/*    >*/}
                            {/*        Assess Your Career Path*/}
                            {/*    </Typography>*/}
                            {/*    <Typography sx={{color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6}}>*/}
                            {/*        Take our quick assessment to gain personalized insights and recommendations for your*/}
                            {/*        career journey.*/}
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
                            {/*            '&:hover': {backgroundColor: secondary, transform: 'translateY(-3px)'},*/}
                            {/*        }}*/}
                            {/*        onClick={() => navigate("/resources/assessments")}*/}
                            {/*    >*/}
                            {/*        Start Assessment*/}
                            {/*    </Button>*/}
                            {/*</Paper>*/}

                            {/*<Paper*/}
                            {/*  elevation={3}*/}
                            {/*  sx={{*/}
                            {/*    p: 4,*/}
                            {/*    borderRadius: 4,*/}
                            {/*    background: 'white',*/}
                            {/*    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*    mb: 4,*/}
                            {/*  }}*/}
                            {/*>*/}
                            {/*  <Typography*/}
                            {/*    variant="h6"*/}
                            {/*    sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*  >*/}
                            {/*    Expert Support*/}
                            {/*  </Typography>*/}
                            {/*  <Typography sx={{ color: textBody, mb: 3, fontFamily: 'Arial', lineHeight: 1.6 }}>*/}
                            {/*    Connect with career professionals for tailored guidance to clarify your path and achieve your goals.*/}
                            {/*  </Typography>*/}
                            {/*  <Box sx={{ mb: 4 }}>*/}
                            {/*    {[*/}
                            {/*      {*/}
                            {/*        icon: <ChatIcon />,*/}
                            {/*        title: '1-on-1 Counseling',*/}
                            {/*        desc: 'Personal sessions with career coaches',*/}
                            {/*      },*/}
                            {/*      {*/}
                            {/*        icon: <GroupIcon />,*/}
                            {/*        title: 'Professional Networks',*/}
                            {/*        desc: 'Connect with industry mentors',*/}
                            {/*      },*/}
                            {/*      {*/}
                            {/*        icon: <SupportIcon />,*/}
                            {/*        title: 'Text Support',*/}
                            {/*        desc: 'Immediate assistance via chat',*/}
                            {/*      },*/}
                            {/*    ].map((option, index) => (*/}
                            {/*      <Box*/}
                            {/*        key={index}*/}
                            {/*        sx={{*/}
                            {/*          display: 'flex',*/}
                            {/*          alignItems: 'center',*/}
                            {/*          p: 2,*/}
                            {/*          backgroundColor: softGray,*/}
                            {/*          borderRadius: 2,*/}
                            {/*          mb: 2,*/}
                            {/*          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',*/}
                            {/*        }}*/}
                            {/*      >*/}
                            {/*        <Box*/}
                            {/*          sx={{*/}
                            {/*            width: 48,*/}
                            {/*            height: 48,*/}
                            {/*            backgroundColor: lightOrange,*/}
                            {/*            borderRadius: '50%',*/}
                            {/*            display: 'flex',*/}
                            {/*            alignItems: 'center',*/}
                            {/*            justifyContent: 'center',*/}
                            {/*            mr: 2,*/}
                            {/*            color: secondary,*/}
                            {/*          }}*/}
                            {/*        >*/}
                            {/*          {option.icon}*/}
                            {/*        </Box>*/}
                            {/*        <Box>*/}
                            {/*          <Typography*/}
                            {/*            variant="subtitle1"*/}
                            {/*            sx={{ fontWeight: 600, color: primary, fontFamily: 'Montserrat' }}*/}
                            {/*          >*/}
                            {/*            {option.title}*/}
                            {/*          </Typography>*/}
                            {/*          <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
                            {/*            {option.desc}*/}
                            {/*          </Typography>*/}
                            {/*        </Box>*/}
                            {/*      </Box>*/}
                            {/*    ))}*/}
                            {/*  </Box>*/}
                            {/*  <Button*/}
                            {/*    fullWidth*/}
                            {/*    variant="contained"*/}
                            {/*    sx={{*/}
                            {/*      backgroundColor: secondary,*/}
                            {/*      py: 1.5,*/}
                            {/*      fontFamily: 'Montserrat',*/}
                            {/*      fontWeight: 700,*/}
                            {/*      borderRadius: 3,*/}
                            {/*      transition: 'transform 0.2s',*/}
                            {/*      '&:hover': { backgroundColor: secondary, transform: 'translateY(-3px)' },*/}
                            {/*    }}*/}
                            {/*  >*/}
                            {/*    Book a Session*/}
                            {/*  </Button>*/}
                            {/*</Paper>*/}

                            {/*<Paper*/}
                            {/*  elevation={3}*/}
                            {/*  sx={{*/}
                            {/*    p: 4,*/}
                            {/*    borderRadius: 4,*/}
                            {/*    background: 'white',*/}
                            {/*    boxShadow: '0 8px 32px rgba(1,39,101,0.15)',*/}
                            {/*  }}*/}
                            {/*>*/}
                            {/*  <Typography*/}
                            {/*    variant="h6"*/}
                            {/*    sx={{ color: primary, mb: 2, fontFamily: 'Montserrat', fontWeight: 700 }}*/}
                            {/*  >*/}
                            {/*    Helpful Resources*/}
                            {/*  </Typography>*/}
                            {/*  {[*/}
                            {/*    {*/}
                            {/*      icon: <MenuBookIcon />,*/}
                            {/*      title: 'Career Planning Guide',*/}
                            {/*      desc: 'Practical steps to define your path',*/}
                            {/*      link: '#',*/}
                            {/*    },*/}
                            {/*    {*/}
                            {/*      icon: <HeadphonesIcon />,*/}
                            {/*      title: 'Career Clarity Podcast',*/}
                            {/*      desc: 'Insights from industry experts',*/}
                            {/*      link: '#',*/}
                            {/*    },*/}
                            {/*    {*/}
                            {/*      icon: <BusinessCenterIcon />,*/}
                            {/*      title: 'Career Articles',*/}
                            {/*      desc: 'Tips from career professionals',*/}
                            {/*      link: '#',*/}
                            {/*    },*/}
                            {/*    {*/}
                            {/*      icon: <VideoLibraryIcon />,*/}
                            {/*      title: 'Career Workshops',*/}
                            {/*      desc: 'Visual guides for skill-building',*/}
                            {/*      link: '#',*/}
                            {/*    },*/}
                            {/*  ].map((resource, index) => (*/}
                            {/*    <Box*/}
                            {/*      key={index}*/}
                            {/*      sx={{*/}
                            {/*        display: 'flex',*/}
                            {/*        alignItems: 'center',*/}
                            {/*        p: 2,*/}
                            {/*        borderBottom: index < 3 ? `1px solid ${softGray}` : 'none',*/}
                            {/*      }}*/}
                            {/*    >*/}
                            {/*      <Box*/}
                            {/*        sx={{*/}
                            {/*          width: 48,*/}
                            {/*          height: 48,*/}
                            {/*          backgroundColor: lightOrange,*/}
                            {/*          borderRadius: 1,*/}
                            {/*          display: 'flex',*/}
                            {/*          alignItems: 'center',*/}
                            {/*          justifyContent: 'center',*/}
                            {/*          mr: 2,*/}
                            {/*          color: secondary,*/}
                            {/*        }}*/}
                            {/*      >*/}
                            {/*        {resource.icon}*/}
                            {/*      </Box>*/}
                            {/*      <Box sx={{ flex: 1 }}>*/}
                            {/*        <Typography*/}
                            {/*          variant="subtitle1"*/}
                            {/*          sx={{ fontWeight: 600, color: primary, fontFamily: 'Montserrat' }}*/}
                            {/*        >*/}
                            {/*          <a href={resource.link} style={{ color: 'inherit', textDecoration: 'none' }}>*/}
                            {/*            {resource.title}*/}
                            {/*          </a>*/}
                            {/*        </Typography>*/}
                            {/*        <Typography variant="body2" sx={{ color: textBody, fontFamily: 'Arial' }}>*/}
                            {/*          {resource.desc}*/}
                            {/*        </Typography>*/}
                            {/*      </Box>*/}
                            {/*    </Box>*/}
                            {/*  ))}*/}
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
                            Ready to Find Your Path?
                        </Typography>
                        <Typography sx={{mb: 4, maxWidth: 700, mx: 'auto', fontFamily: 'Arial'}}>
                            Our career counselors are here to guide you through uncertainty and help you build a
                            fulfilling career
                        </Typography>
                        {/*<Button*/}
                        {/*  variant="contained"*/}
                        {/*  sx={{*/}
                        {/*    backgroundColor: secondary,*/}
                        {/*    py: 1.5,*/}
                        {/*    fontFamily: 'Montserrat',*/}
                        {/*    fontSize: '1.1rem',*/}
                        {/*    px: 4,*/}
                        {/*    '&:hover': { backgroundColor: secondary },*/}
                        {/*  }}*/}
                        {/*>*/}
                        {/*  Book a Counselor Now*/}
                        {/*</Button>*/}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default CareerUncertainty;