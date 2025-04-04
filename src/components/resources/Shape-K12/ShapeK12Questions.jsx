import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    LinearProgress,
    CircularProgress,
    Grid,
    Card, Dialog, DialogActions,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import PdfView from "../../global/pdf-view.jsx";

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

const NavigationButton = styled(Button)(({theme}) => ({
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
    fontFamily: 'Poppins',
}));

const questions = [
    {
        id: 1,
        text: "How often does your child seem happy?",
        options: [
            {label: "Very Often", value: "0"},
            {label: "Often", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Rarely", value: "3"},
            {label: "Never", value: "4"}
        ]
    },
    {
        id: 2,
        text: "Does your child express sadness or tearfulness?",
        options: [
            {label: "Yes", value: "0"},
            {label: "No", value: "1"},
            {label: "Occasionally", value: "2"}
        ]
    },
    {
        id: 3,
        text: "How often does your child express feelings of anger or frustration?",
        options: [
            {label: "Very Often", value: "0"},
            {label: "Often", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Rarely", value: "3"},
            {label: "Never", value: "4"}
        ]
    },
    {
        id: 4,
        text: "How would you rate your child's overall mood lately?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Content", value: "1"},
            {label: "Neutral", value: "2"},
            {label: "Sad", value: "3"},
            {label: "Angry", value: "4"}
        ]
    },
    {
        id: 5,
        text: "Does your child express worries or anxiety about specific things?",
        options: [
            {label: "Academic performance", value: "0"},
            {label: "Social relationships", value: "1"},
            {label: "Family matters", value: "2"},
            {label: "Other (please specify)", value: "3"}
        ]
    },

    // Behavioral Wellbeing
    {
        id: 6,
        text: "How does your child typically behave at home?",
        options: [
            {label: "Cooperative", value: "0"},
            {label: "Defiant", value: "1"},
            {label: "Quiet", value: "2"},
            {label: "Hyperactive", value: "3"},
            {label: "Withdrawn", value: "4"}
        ]
    },
    {
        id: 7,
        text: "How does your child behave in social settings (e.g., with friends, at school)?",
        options: [
            {label: "Sociable and outgoing", value: "0"},
            {label: "Shy and reserved", value: "1"},
            {label: "Aggressive", value: "2"},
            {label: "Passive", value: "3"},
            {label: "Other (please specify)", value: "4"}
        ]
    },
    {
        id: 8,
        text: "Does your child exhibit repetitive behaviors (e.g., hand-flapping, rocking)?",
        options: [
            {label: "Yes", value: "0"},
            {label: "No", value: "1"}
        ]
    },

    // Physical Wellbeing
    {
        id: 9,
        text: "How would you describe your child's overall physical health?",
        options: [
            {label: "Poor", value: "0"},
            {label: "Average", value: "1"},
            {label: "Good", value: "2"},
            {label: "Very Good", value: "3"}
        ]
    },
    {
        id: 10,
        text: "How often does your child engage in physical activity (e.g., playing sports, outdoor play)?",
        options: [
            {label: "Everyday", value: "0"},
            {label: "Occasionally", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Never", value: "3"}
        ]
    },

    // Academic Wellbeing
    {
        id: 11,
        text: "How do you rate your child's last year's academic performance?",
        options: [
            {label: "Outstanding (Above 90%)", value: "0"},
            {label: "Very Good (80%-90%)", value: "1"},
            {label: "Good (70%-80%)", value: "2"},
            {label: "Average (50%-70%)", value: "3"},
            {label: "Poor (Less than 50%)", value: "4"}
        ]
    },
    {
        id: 12,
        text: "Are you worried about your child’s performance?",
        options: [
            {label: "Yes", value: "0"},
            {label: "No", value: "1"},
            {label: "Don’t Know", value: "2"}
        ]
    },

    // Nutritional Wellbeing
    {
        id: 13,
        text: "What are your child's eating habits like?",
        options: [
            {label: "Poor", value: "0"},
            {label: "Average", value: "1"},
            {label: "Good", value: "2"},
            {label: "Very Good", value: "3"}
        ]
    },
    {
        id: 14,
        text: "How often does your child demand outside/junk food?",
        options: [
            {label: "Regularly", value: "0"},
            {label: "Occasionally", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Never", value: "3"}
        ]
    },

    // Digital Wellbeing
    {
        id: 15,
        text: "How much time does your child spend using screens (e.g., TV, computer, tablet, smartphone) each day?",
        options: [
            {label: "Less Than 1 Hour", value: "0"},
            {label: "1-4 Hours", value: "1"},
            {label: "Beyond 4 Hours", value: "2"}
        ]
    },
    {
        id: 16,
        text: "Does your child sleep or eat while using mobile/laptop/other electronic devices?",
        options: [
            {label: "Regularly", value: "0"},
            {label: "Sometimes", value: "1"},
            {label: "Never", value: "2"}
        ]
    },

    // Safety and Environmental Wellbeing
    {
        id: 17,
        text: "Does your child feel safe at home, school, and in the community?",
        options: [
            {label: "Yes", value: "0"},
            {label: "No", value: "1"},
            {label: "Don’t Know", value: "2"}
        ]
    }
];

const getScoreCategory = (score) => {
    if (score >= 61 && score <= 80) {
        return {
            level: "High Academic Stress",
            interpretation: "You experience high levels of academic stress but have developed effective coping strategies to manage it. This indicates a strong ability to handle pressure while maintaining mental and emotional balance.",
            recommendations: [
                {
                    title: "Maintain Current Strategies",
                    description: "Continue using and refining your current coping strategies to ensure they remain effective."
                },
                {
                    title: "Share Techniques",
                    description: "Consider sharing your successful coping techniques with peers, which can help reinforce your own strategies and provide support to others."
                },
                {
                    title: "Balance Life",
                    description: "Maintain a balanced lifestyle, incorporating academic responsibilities and personal well-being activities to sustain mental and emotional health."
                }
            ]
        };
    } else if (score >= 41 && score <= 60) {
        return {
            level: "Moderate-High Academic Stress",
            interpretation: "You experience moderate to high levels of academic stress and use some effective coping strategies but may need improvement in certain areas. While you have some good techniques in place, there is room to enhance your ability to manage stress.",
            recommendations: [
                {
                    title: "Develop Targeted Strategies",
                    description: "Identify specific areas of stress and develop targeted coping strategies to address them effectively."
                },
                {
                    title: "Engage in Workshops",
                    description: "Consider participating in stress management workshops or seeking guidance from academic advisors or counsellors to improve coping skills."
                },
                {
                    title: "Time Management & Self-Care",
                    description: "Focus on enhancing time management and self-care routines to better handle academic pressures."
                }
            ]
        };
    } else if (score >= 21 && score <= 40) {
        return {
            level: "Moderate Academic Stress",
            interpretation: "You experience moderate levels of academic stress and have inconsistent coping strategies. You may sometimes manage stress well but struggle at other times.",
            recommendations: [
                {
                    title: "Increase Effective Strategies",
                    description: "Promote the use of effective coping strategies such as time management, relaxation techniques, and seeking support from friends, family, or professionals."
                },
                {
                    title: "Stress Reduction Programs",
                    description: "Consider participating in stress reduction programs to learn and implement new coping methods."
                },
                {
                    title: "Structured Plan",
                    description: "Create a structured study and relaxation plan to manage your academic workload more effectively."
                }
            ]
        };
    } else if (score >= 11 && score <= 20) {
        return {
            level: "Low-Moderate Academic Stress",
            interpretation: "You experience low to moderate levels of academic stress but have limited or ineffective coping strategies. This suggests that while your stress levels are not very high, the strategies in place to manage stress are not sufficiently effective.",
            recommendations: [
                {
                    title: "Develop New Strategies",
                    description: "Work on developing and practicing new coping strategies that can help manage stress better."
                },
                {
                    title: "Seek Support",
                    description: "Consider seeking regular support from peers, professors, or counsellors to gain different perspectives and coping methods."
                },
                {
                    title: "Build a Routine",
                    description: "Focus on building a routine that includes regular breaks, physical activity, and adequate sleep to maintain overall well-being."
                }
            ]
        };
    } else {
        return {
            level: "Low Academic Stress",
            interpretation: "You experience low levels of academic stress but may still benefit from improved coping strategies. Even though your stress is currently low, having robust coping mechanisms in place can help prevent future stress buildup.",
            recommendations: [
                {
                    title: "Proactive Coping",
                    description: "Adopt proactive coping strategies to maintain low stress levels and prevent future stress buildup."
                },
                {
                    title: "Well-Being Activities",
                    description: "Participate in activities that support overall well-being and help in preventing stress."
                },
                {
                    title: "Monitor Stress Levels",
                    description: "Stay vigilant about any potential increase in stress levels and address them promptly to ensure they do not escalate."
                }
            ]
        };
    }
};

const GaugeChartComponent = ({score, maxScore}) => {
    const percentage = (score / maxScore) * 100;
    const data = [
        {name: 'Score', value: percentage},
        {name: 'Remaining', value: 100 - percentage}
    ];

    const getColor = (percentage) => {
        if (percentage <= 25) return '#4CAF50';
        if (percentage <= 50) return '#FFC107';
        if (percentage <= 75) return '#FF9800';
        return '#F44336';
    };

    const getStressLevel = (percentage) => {
        if (percentage <= 25) return 'Low';
        if (percentage <= 50) return 'Moderate';
        if (percentage <= 75) return 'High';
        return 'Severe';
    };

    return (
        <Box sx={{
            width: '100%',
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
            position: 'relative'
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            <Cell fill={getColor(percentage)}/>
                            <Cell fill="#E6EAF3"/>
                        </Pie>
                        <Tooltip
                            formatter={(value) => [`${value.toFixed(1)}%`, '']}
                            contentStyle={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E6EAF3',
                                borderRadius: '8px',
                                fontFamily: 'Poppins'
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <Box sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="h2" sx={{
                        color: getColor(percentage),
                        fontWeight: 700,
                        fontFamily: 'Montserrat',
                        lineHeight: 1,
                        fontSize: {xs: '3rem', sm: '4rem'}
                    }}>
                        {score}
                    </Typography>
                    <Typography sx={{
                        color: '#4B5563',
                        fontSize: '1rem',
                        fontFamily: 'Poppins',
                        fontWeight: 500
                    }}>
                        Points
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: `${getColor(percentage)}20`,
                padding: '8px 16px',
                borderRadius: '20px',
                border: `1px solid ${getColor(percentage)}40`
            }}>
                <Typography sx={{
                    color: getColor(percentage),
                    fontSize: '1rem',
                    fontFamily: 'Poppins',
                    fontWeight: 600
                }}>
                    {getStressLevel(percentage)} Stress Level
                </Typography>
            </Box>
        </Box>
    );
};

const ShapeK12Questions = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(20).fill(''));
    const [showResults, setShowResults] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const handleAnswerChange = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = event.target.value;
        setAnswers(newAnswers);
    };

    const calculateScore = () => {
        return answers.reduce((sum, value) => sum + parseInt(value || '0', 10), 0);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const score = calculateScore();
            setTotalScore(score);
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    if (showResults) {
        const result = getScoreCategory(totalScore);
        const percentage = (totalScore / 80) * 100;

        return (
            <>
                <Container maxWidth="md">
                    <Box
                        mt={12}
                        sx={{
                            py: 5,
                            px: {xs: 2, md: 4},
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        {/* Header Section */}
                        <Box sx={{textAlign: 'center', mb: 4}}>
                            <Typography
                                className={"Montserrat"}
                                variant="h3"
                                sx={{
                                    color: '#0D2152',
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: {xs: '2rem', md: '2.5rem'}
                                }}
                            >
                                Your Assessment Results
                            </Typography>

                        </Box>

                        <Card sx={{
                            p: 4,
                            height: '100%',
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            borderRadius: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: "space-between"
                        }}>
                            <Box>
                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 3
                                }}>
                                    <CircularProgress
                                        variant="determinate"
                                        value={percentage}
                                        size={200}
                                        thickness={4}
                                        sx={{
                                            color: totalScore >= 61 ? '#ff4d4d' :
                                                totalScore >= 41 ? '#ffa500' :
                                                    totalScore >= 21 ? '#ffdd00' : totalScore >= 11 ? '#90EE90' : '#47e447',
                                        }}
                                    />
                                    {/*<CircularProgress*/}
                                    {/*    variant="determinate"*/}
                                    {/*    value={percentage}*/}
                                    {/*    size={200}*/}
                                    {/*    thickness={4}*/}
                                    {/*    sx={{*/}
                                    {/*        color: totalScore >= 61 ? '#ff4d4d' :*/}
                                    {/*            totalScore >= 41 ? '#ffa500' :*/}
                                    {/*                totalScore >= 21 ? '#ffff00' :*/}
                                    {/*                    totalScore >= 11 ? '#90EE90' : '#00ff00',*/}
                                    {/*        position: 'absolute',*/}
                                    {/*        left: 34,*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="h3" sx={{fontWeight: 700, color: '#0D2152'}}>
                                            {totalScore}
                                        </Typography>
                                        <Typography variant="h5" sx={{color: '#4A5568'}}>
                                            out of 80
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#F5811E',
                                        fontWeight: 600,
                                        mb: 2,
                                        textAlign: 'center',
                                    }}
                                >
                                    {result.level}
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    p: 2.5,
                                    borderRadius: 2,
                                    bgcolor: 'rgb(227,234,246)',
                                    border: '1px solid rgba(245, 129, 30, 0.1)',
                                    transition: 'transform 0.2s',
                                    textAlign: "justify",
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                    }
                                }}
                            >
                                {result.interpretation}
                            </Typography>
                        </Card>

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                mt: 4,
                            }}
                        >
                            {/* Save Results Button - Downloads PDF */}
                            <PDFDownloadLink
                                document={<PdfView data={{
                                    totalScore: totalScore,
                                    level: result.level,
                                    interpretation: result.interpretation,
                                    recommendations: result.recommendations
                                }}/>}
                                fileName="Emotional_Awareness_Report.pdf"
                                style={{textDecoration: "none"}}
                            >
                                {({loading}) => (
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#F5811E",
                                            borderColor: "#F5811E",
                                            py: 1.5,
                                            px: 4,
                                            "&:hover": {
                                                borderColor: "#E26C0A",
                                                bgcolor: "rgba(245, 129, 30, 0.1)",
                                            },
                                        }}
                                    >
                                        {loading ? "Preparing..." : "Download Results"}
                                    </Button>
                                )}
                            </PDFDownloadLink>

                            <Button
                                variant="contained"
                                onClick={() => navigate("/resources?scrollTo=assessments")}
                                sx={{
                                    bgcolor: "#F5811E",
                                    color: "#fff",
                                    py: 1.5,
                                    px: 4,
                                    "&:hover": {bgcolor: "#E26C0A"},
                                }}
                            >
                                Return to Assessments
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </>
        )
            ;
    }

    return (
        <Box sx={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F3F4F6',
            mt: {xs: '64px', sm: '72px'},
            py: {xs: 4, md: 6},
        }}>
            <Container maxWidth="md">
                <StyledPaper>
                    <Box sx={{mb: 4}}>
                        <Typography variant="h6" sx={{
                            mb: 1,
                            color: '#012765',
                            fontFamily: 'Montserrat'
                        }}>
                            Question {currentQuestion + 1} of {questions.length}
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: '#E6EAF3',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#FF7F1E',
                                }
                            }}
                        />
                    </Box>

                    <Typography sx={{
                        mb: 4,
                        color: '#012765',
                        fontSize: '20px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        fontFamily: 'Poppins'
                    }}>
                        {questions[currentQuestion].text}
                    </Typography>

                    <FormControl component="fieldset" sx={{width: '100%', mb: 4}}>
                        <RadioGroup
                            value={answers[currentQuestion]}
                            onChange={handleAnswerChange}
                        >
                            {questions[currentQuestion].options.map((option) => (
                                <FormControlLabel
                                    key={option.label}
                                    value={option.value}
                                    control={
                                        <Radio
                                            sx={{
                                                color: '#012765',
                                                '&.Mui-checked': {
                                                    color: '#FF7F1E',
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: '16px',
                                            color: '#4B5563'
                                        }}>
                                            {option.label}
                                        </Typography>
                                    }
                                    sx={{
                                        mb: 1,
                                        p: 1.5,
                                        borderRadius: 2,
                                        width: '100%',
                                        backgroundColor: answers[currentQuestion] === option.value ? '#FFF5EB' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: '#F8FAFC',
                                        },
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        {currentQuestion !== 0 ?
                            <NavigationButton
                                variant="outlined"
                                startIcon={<ArrowBackIcon/>}
                                onClick={handlePrevious}
                                sx={{color: '#012765', borderColor: '#012765'}}
                            >
                                Back
                            </NavigationButton> : <Box/>}
                        <NavigationButton
                            variant="contained"
                            endIcon={<ArrowForwardIcon/>}
                            onClick={handleNext}
                            disabled={!answers[currentQuestion]}
                            sx={{
                                backgroundColor: '#FF7F1E',
                                '&:hover': {backgroundColor: '#E66C00'},
                                '&.Mui-disabled': {
                                    backgroundColor: '#E6EAF3',
                                    color: '#9CA3AF',
                                }
                            }}
                        >
                            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                        </NavigationButton>
                    </Box>
                </StyledPaper>
            </Container>
        </Box>
    );
};

export default ShapeK12Questions;