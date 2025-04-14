import React, {useState} from 'react';
import {Box, Typography, Paper, Container, Tabs, Tab} from '@mui/material';
import {styled} from '@mui/material/styles';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const CategoryTitle = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    fontSize: '36px',
    lineHeight: '40px',
    textAlign: 'center',
    marginBottom: '16px',
}));

const SubTitle = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto 48px',
    lineHeight: '25px',
}));

const FrameworkTitle = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontSize: '24px',
    marginBottom: '24px',
}));

const StyledTabs = styled(Tabs)(() => ({
    marginBottom: '32px',
    '& .MuiTabs-indicator': {
        display: 'none',
    },
    '& .MuiTabs-flexContainer': {
        gap: '16px',
        justifyContent: 'center',
    },
}));

const StyledTab = styled(Tab)(() => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 600,
    color: '#012765',
    textTransform: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    minHeight: '48px',
    border: '2px solid #012765',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#FF7F1E',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: '30px',
        opacity: 0.1,
    },
    '&:hover': {
        backgroundColor: 'rgba(1, 39, 101, 0.05)',
        color: '#012765',
        borderColor: '#FF7F1E',
        '&::before': {
            transform: 'scaleX(1)',
        },
    },
    '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#012765',
        border: '2px solid #012765',
        fontWeight: 700,
        boxShadow: '0 4px 10px rgba(1, 39, 101, 0.2)',
        '&:hover': {
            backgroundColor: '#012765',
            borderColor: '#FF7F1E',
        },
        '&::before': {
            transform: 'scaleX(1)',
            background: '#FF7F1E',
            opacity: 0.15,
        },
    },
    '&:focus': {
        outline: 'none',
        color: 'white',
        backgroundColor: '#012765',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: -3,
            left: -3,
            right: -3,
            bottom: -3,
            border: '2px solid #FF7F1E',
            borderRadius: '34px',
            opacity: 0.5,
        },
    },
    '&:active': {
        transform: 'scale(0.98)',
    },
}));

const frameworks = {
    'SHAPE': {
        title: 'Baseline Assessment & Awareness',
        sections: [
            {
                title: 'Baseline Assessment & Awareness',
                items: [
                    'Conduct Emotional Wellness Surveys for students, teachers, and parents.',
                    'Organize Awareness Workshops on emotional intelligence, mindfulness, and stress management.',
                    'Provide School Emotional Well-Being Reports with data insights and recommendations.',
                ],
            },
            {
                title: 'Training & Capacity Building',
                items: [
                    'Student Sessions: Coping strategies for academic stress, emotional regulation, and motivation.',
                    'Teacher Training: Managing stress, mindful teaching techniques, and student engagement strategies.',
                    'Parent Workshops: Supporting children emotionally, managing expectations, and reducing academic pressure.',
                ],
            },
            {
                title: 'Practical Implementation & Support',
                items: [
                    'Personalized Counseling Support (Online/Offline) for students and teachers.',
                    'Peer Support Groups to encourage emotional sharing and resilience-building.',
                    'Emotionally Intelligent Classrooms: Incorporating mindfulness, gratitude exercises, and journaling.',
                ],
            },
            {
                title: 'Impact Measurement & Future Roadmap',
                items: [
                    'Conduct Post-Intervention Assessments to measure improvement in emotional well-being.',
                    'Organize Feedback & Experience Sharing Sessions with all stakeholders.',
                    'Develop a Sustainability Plan with school leadership for long-term implementation.',
                ],
            },
        ],
    },
    'SHAPE+': {
        title: 'Coming Soon',
        sections: [{
            title: 'Coming Soon',
            items: ['Content will be available soon.'],
        }],
    },
    'PEP-UPSC': {
        title: 'ServicesShap Framework',
        sections: [
            {
                title: 'Mentors : The First Responders',
                items: [
                    'Conduct Emotional Wellness Awareness and Assessments for Mentors.',
                    'Organize Train-The-Trainer Workshops for Mentors.',
                ],
            },
            {
                title: 'Aspirants : The Beneficiaries',
                items: [
                    'Conduct Emotional Wellness Awareness sessions for all batches.',
                    'Self Assessment Tests for all aspirants to gauge the levels of the issues.',
                    'Small GroupnBased monthly workshops on Therapies for Self Care.',
                    'Individual Session Plans for Performance Enhancement or Known Issues.',
                    'Weekly One Day visit of Psychologist for added support.',
                ],
            }
        ],
    },
    'ESOP': {
        title: 'Coming Soon',
        sections: [{
            title: 'Coming Soon',
            items: ['Content will be available soon.'],
        }],
    },
};

const EngagementFramework = () => {
    const [currentTab, setCurrentTab] = useState('SHAPE');

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const framework = frameworks[currentTab];

    return (
        <Box sx={{py: 8, mt: {md: 10, sm: 0}, backgroundColor: 'white'}}>
            <Container maxWidth="xl">
                <CategoryTitle>
                    Engagement Framework
                </CategoryTitle>
                <Box sx={{
                    color: "#4B5563",
                    mt: 1,
                    mb: 7,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 18
                }}>
                    Comprehensive year-round support for emotional well-being and academic excellence
                </Box>

                {/*<StyledTabs*/}
                {/*    value={currentTab}*/}
                {/*    onChange={handleTabChange}*/}
                {/*    variant="scrollable"*/}
                {/*    scrollButtons="auto"*/}
                {/*    TabIndicatorProps={{style: {display: "none"}}}*/}
                {/*    sx={{width: "100%", maxWidth: "100vw", overflowX: "auto"}}*/}
                {/*>*/}
                {/*    {Object.keys(frameworks).map((category) => (*/}
                {/*        <StyledTab*/}
                {/*            key={category}*/}
                {/*            label={category}*/}
                {/*            value={category}*/}
                {/*            sx={{*/}
                {/*                fontSize: {xs: "12px", sm: "14px", md: "16px"},*/}
                {/*                minWidth: "80px",*/}
                {/*                padding: {xs: "6px", sm: "15px", md: "16px"},*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</StyledTabs>*/}

                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3}}>
                    {framework.sections.map((section, sectionIndex) => (
                        <StyledPaper key={sectionIndex} elevation={3}>
                            <Box sx={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "#012765",
                                mb: "12px",
                            }}>
                                {section.title}
                            </Box>
                            <Box>
                                {section.items.map((item, index) => (
                                    <Box key={index} sx={{display: 'flex', alignItems: 'flex-start', mb: 2}}>
                                        <CheckCircleIcon sx={{color: '#FF7F1E', fontSize: 20, mr: 1, mt: 0.5}}/>
                                        <Box sx={{
                                            color: '#4B5563',
                                            fontSize: '16px',
                                            fontFamily: 'Poppins, sans-serif'
                                        }}>
                                            {item}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </StyledPaper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default EngagementFramework; 