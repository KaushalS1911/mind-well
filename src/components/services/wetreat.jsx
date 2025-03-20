import React from 'react';
import {Box, Typography, Button, Paper, Container} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const sections = [
    {
        title: "For Students",
        description: "College and university life bring unique mental health challenges Our therapists understand the specific pressures students face:",
        points: [
            "Academic pressure and exam stress",
            "Social anxiety and forming new relationships",
            "Identity development and future decisions",
            "Time management and burnout prevention",
            "Balancing studies, work, and social life"
        ],
        note: "Special student rates available with valid ID",
        buttonText: "Student Support Programs",
        bgColor: "#224379",
        textColor: "#fff",
        noteBg: "rgba(255, 255, 255, 0.2)",
        iconColor: "#FE6A00"
    },
    {
        title: "For Professionals",
        description: "Working professionals face unique stressors in today’s fast-paced work environment. Our therapists can help with:",
        points: [
            "Workplace stress and burnout",
            "Work-life balance and boundaries",
            "Performance anxiety and imposter syndrome",
            "Career transitions and decision-making",
            "Leadership challenges and workplace relationships"
        ],
        note: "Early morning, evening, and weekend appointments available",
        buttonText: "Professional Support Programs",
        bgColor: "#FE7717",
        textColor: "#fff",
        noteBg: "rgba(255, 255, 255, 0.2)",
        iconColor: "#fff"
    }
];

function Wetreat() {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{p: 3}}>
                {/* Flex container for student & professional boxes */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: "center",
                        gap: 3
                    }}
                >
                    {sections.map((section, index) => (
                        <Paper
                            key={index}
                            sx={{
                                flex: 1,
                                backgroundColor: section.bgColor,
                                color: section.textColor,
                                p: 4,
                                borderRadius: 3,
                                minWidth: {xs: '100%', md: '48%'}
                            }}
                            elevation={3}
                        >
                            <Box sx={{fontWeight: 700, mb: "16px", fontSize: "24px", lineHeight: "2rem"}}>
                                {section.title}
                            </Box>
                            <Box sx={{fontSize: "16px", color: "#fff", mb: "24px", opacity: "0.9"}}>
                                {section.description}
                            </Box>
                            <Box sx={{
                                mb: "32px"
                            }}>
                                {section.points.map((point, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: "16px",
                                            mb: 1,
                                            opacity: 0.9,
                                            lineHeight: 2
                                        }}
                                    >
                                        <CheckCircleIcon sx={{color: section.iconColor, mr: 1}}/>
                                        {point}
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{
                                backgroundColor: section.noteBg,
                                p: "16px",
                                margin: "0 0 24px",
                                borderRadius: 2,
                                fontWeight: "500",
                                fontSize: "16px",
                                lineHeight: "1.25rem",
                            }}>
                                {section.note}
                            </Box>
                            <Box
                                sx={{
                                    padding: "12px 24px",
                                    backgroundColor: "#fff",
                                    color: "#012765",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    borderRadius: "0.375rem",
                                    display: "inline-block",
                                    transition: "0.5s",
                                    cursor: "pointer",
                                    '&:hover': {backgroundColor: "#f1f1f1"}
                                }}
                            >
                                {section.buttonText}
                            </Box>
                        </Paper>
                    ))}
                </Box>

                {/* Bottom Section */}
                <Box textAlign="center" mt={7}>
                    <Box className={"Montserrat"}
                         sx={{fontWeight: 700, mb: "16px", fontSize: 30, lineHeight: "36px", color: "#012765"}}>
                        Not Sure What You're Struggling With?
                    </Box>
                    <Box sx={{opacity: 0.7, color: "#4b5563", mb: 4, fontSize: "18px"}}>
                        Take our confidential mental health assessment to gain insight into your <br/> symptoms and
                        receive personalized recommendations.
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#fe6a00",
                            display: "inline-block",
                            color: "#fff",
                            textTransform: "none",
                            fontWeight: 600,
                            padding: "12px 32px",
                            fontSize: "16px",
                            mb: 10,
                            borderRadius: "0.375rem",
                            transition: "0.5s",
                            cursor: "pointer",
                            '&:hover': {backgroundColor: "#E56F1A"}
                        }}
                    >
                        Take Free Assessment
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Wetreat;
