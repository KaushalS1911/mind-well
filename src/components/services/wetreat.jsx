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
        iconColor: "#FE6A00" // Orange icon for students
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
        bgColor: "#FF7F1E",
        textColor: "#fff",
        noteBg: "rgba(255, 255, 255, 0.2)",
        iconColor: "#fff" // White icon for professionals
    }
];

function Wetreat() {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ p: 3 }}>
                {/* Flex container for student & professional boxes */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
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
                                minWidth: { xs: '100%', md: '48%' } // Full width on small screens, side by side on medium+
                            }}
                            elevation={3}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 800, mb: "24px", fontSize: 24 }}>
                                {section.title}
                            </Typography>
                            <Typography sx={{ mb: 2, opacity: 0.9 }}>
                                {section.description}
                            </Typography>
                            {section.points.map((point, idx) => (
                                <Typography
                                    key={idx}
                                    sx={{ display: 'flex', alignItems: 'center', mb: 1, opacity: 0.9,lineHeight:2 }}
                                >
                                    <CheckCircleIcon sx={{ color: section.iconColor, mr: 1 }} />
                                    {point}
                                </Typography>
                            ))}
                            <Box sx={{
                                backgroundColor: section.noteBg,
                                p: 2,
                                borderRadius: 2,
                                mt: 2,
                                fontWeight:"600",
                                fontSize: 14
                            }}>
                                {section.note}
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    px:2.5,
                                    py:1.5,
                                    backgroundColor: "#fff",
                                    color: section.bgColor,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    '&:hover': { backgroundColor: "#f1f1f1" }
                                }}
                            >
                                {section.buttonText}
                            </Button>
                        </Paper>
                    ))}
                </Box>

                {/* Bottom Section */}
                <Box textAlign="center" mt={7}>
                    <Box sx={{ fontWeight: 700, mb: "16px",fontSize: 30,lineHeight: "36px",color:"#012765" }}>
                        Not Sure What You're Struggling With?
                    </Box>
                    <Typography sx={{ opacity: 0.7, mb: 4,fontSize: 18 }}>
                        Take our confidential mental health assessment to gain insight into your <br/> symptoms and receive personalized recommendations.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF7F1E",
                            color: "#fff",
                            textTransform: "none",
                            fontWeight: 600,
                            px: 4,
                            py:1.4,
                            fontSize: 15,
                            mb:10,
                            '&:hover': { backgroundColor: "#E56F1A" }
                        }}
                    >
                        Take Free Assessment
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Wetreat;
