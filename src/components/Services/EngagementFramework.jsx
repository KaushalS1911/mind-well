import React, { useState } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
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

// Data for frameworks
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
    'PEP': {
        title: 'Services-SHAPE Framework',
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
                    'Small Group-Based monthly workshops on Therapies for Self Care.',
                    'Individual Session Plans for Performance Enhancement or Known Issues.',
                    'Weekly One Day visit of Psychologist for added support.',
                ],
            },
        ],
    },
    'ESOP': {
        title: 'Coming Soon',
        sections: [
            {
                title: 'Coming Soon',
                items: ['Content will be available soon.'],
            },
        ],
    },
};

// Main component
const EngagementFramework = () => {
    const [currentTab, setCurrentTab] = useState('SHAPE');
    const framework = frameworks[currentTab];

    const renderSectionItems = (items) => {
        return items.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircleIcon sx={{ color: '#FF7F1E', fontSize: 20, mr: 1, mt: 0.5 }} />
                <Box sx={{ color: '#4B5563', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    {item}
                </Box>
            </Box>
        ));
    };

    return (
        <Box sx={{ pt: 8, mt: { md: 10, sm: 0 }, backgroundColor: 'white', px: {sm:"30px ",xs:"0",xl:"0"} }}>
            <Container maxWidth="xl">
                <CategoryTitle sx={{fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },}}>Engagement Framework</CategoryTitle>
                <SubTitle>
                    Comprehensive year-round support for emotional well-being and academic excellence
                </SubTitle>

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                    {framework.sections.map((section, sectionIndex) => (
                        <StyledPaper key={sectionIndex} elevation={3}>
                            <Box sx={{ fontSize: '18px', fontWeight: '700', color: '#012765', mb: '12px' }}>
                                {section.title}
                            </Box>
                            {renderSectionItems(section.items)}
                        </StyledPaper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default EngagementFramework;
