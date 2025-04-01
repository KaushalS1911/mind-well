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
    Card,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';

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
        text: "How do you typically handle high-pressure situations?",
        options: [
            {label: "Stay calm and focused", value: "0"},
            {label: "Get anxious but manage to push through", value: "1"},
            {label: "Struggle to maintain composure", value: "2"},
            {label: " Avoid the situation altogether", value: "3"},
        ]
    },
    {
        id: 2,
        text: "When faced with multiple deadlines, how do you prioritize tasks?",
        options: [
            {label: "By urgency and importance", value: "0"},
            {label: "By deadlines only", value: "1"},
            {label: "Randomly", value: "2"},
            {label: "Often get overwhelmed and delay decision-making", value: "3"},
        ]
    },
    {
        id: 3,
        text: "How often do you take breaks to manage stress during study sessions?",
        options: [
            {label: "Regularly, every 1-2 hours", value: "0"},
            {label: "Occasionally, when I feel tired", value: "1"},
            {label: "Rarely, only when exhausted", value: "2"},
            {label: "Never, I just push through", value: "3"},
        ]
    },
    {
        id: 4,
        text: "What techniques do you use to cope with exam-related anxiety?",
        options: [
            {label: "Deep breathing and meditation", value: "0"},
            {label: "Talking to friends and family", value: "1"},
            {label: "Ignoring it and hoping it goes away", value: "2"},
            {label: "Procrastinating or avoiding study", value: "3"},
        ]
    },
    {
        id: 5,
        text: "How do you react to failure or setbacks?",
        options: [
            {label: "Analyse what went wrong and try again", value: "0"},
            {label: "Feel disappointed but move on quickly", value: "1"},
            {label: "Get very upset and demotivated", value: "2"},
            {label: "Consider giving up", value: "3"},
        ]
    },
    {
        id: 6,
        text: "When you receive criticism, how do you respond?",
        options: [
            {label: "Constructively, using it to improve", value: "0"},
            {label: "Neutrally, with little impact on my emotions", value: "1"},
            {label: "Defensively, often taking it personally", value: "2"},
            {label: "Negatively, feeling discouraged", value: "3"},
        ]
    },
    {
        id: 7,
        text: "How do you deal with feelings of frustration during your preparation?",
        options: [
            {label: "Find a way to resolve the issue causing frustration", value: "0"},
            {label: "Take a break and come back to it later", value: "1"},
            {label: "Vent to friends or family", value: "2"},
            {label: "Let it affect my motivation and productivity", value: "3"}
        ]
    },
    {
        id: 8,
        text: "How often do you reflect on your emotional responses to situations?",
        options: [
            {label: "Frequently, to understand and improve", value: "0"},
            {label: "Sometimes, when things go wrong", value: "1"},
            {label: "Rarely, only in extreme cases", value: "2"},
            {label: "Never, I don't think about my emotions much", value: "3"}
        ]
    },
    {
        id: 9,
        text: "How do you make decisions when you have insufficient information?",
        options: [
            {label: "Gather as much information as possible and then decide", value: "0"},
            {label: "Go with my intuition", value: "1"},
            {label: "Seek advice from others", value: "2"},
            {label: "Postpone the decision until more information is available", value: "3"}
        ]
    },
    {
        id: 10,
        text: "When making a tough decision, what is your primary consideration?",
        options: [
            {label: "Long-term consequences", value: "0"},
            {label: "Immediate benefits", value: "1"},
            {label: "Opinions of others", value: "2"},
            {label: "Avoiding conflict", value: "3"}
        ]
    },
    {
        id: 11,
        text: "How confident are you in your decision-making abilities?",
        options: [
            {label: "Very confident", value: "0"},
            {label: "Fairly confident", value: "1"},
            {label: "Sometimes doubt my decisions", value: "2"},
            {label: "Often unsure and second-guess myself", value: "3"}
        ]
    },
    {
        id: 12,
        text: "How do you handle situations where you have made a wrong decision?",
        options: [
            {label: "Accept it, learn from it, and move on", value: "0"},
            {label: "Feel regret but try to fix it", value: "1"},
            {label: "Get upset and dwell on it", value: "2"},
            {label: "Blame external factors", value: "3"}
        ]
    },
    {
        id: 13,
        text: "What motivates you to pursue your chosen career path?",
        options: [
            {label: "Desire to make a positive impact on society", value: "0"},
            {label: "Prestige and respect associated with the job", value: "1"},
            {label: "Job security and benefits", value: "2"},
            {label: "Pressure from family or peers", value: "3"}
        ]
    },
    {
        id: 14,
        text: "How do you keep yourself motivated during tough times?",
        options: [
            {label: "Remind myself of my goals and aspirations", value: "0"},
            {label: "Seek inspiration from successful people", value: "1"},
            {label: "Take breaks and relax", value: "2"},
            {label: "Struggle to stay motivated", value: "3"}
        ]
    },
    {
        id: 15,
        text: "How do you handle distractions while studying?",
        options: [
            {label: "Create a strict study schedule and stick to it", value: "0"},
            {label: "Limit distractions by creating a study-friendly environment", value: "1"},
            {label: "Occasionally give in to distractions but get back on track", value: "2"},
            {label: "Often find myself distracted and unable to focus", value: "3"}
        ]
    },
    {
        id: 16,
        text: "How committed are you to your preparation routine?",
        options: [
            {label: "Fully committed, rarely miss a study session", value: "0"},
            {label: "Mostly committed, but sometimes flexible", value: "1"},
            {label: "Somewhat committed, often get sidetracked", value: "2"},
            {label: "Struggle to maintain a consistent routine", value: "3"}
        ]
    },
    {
        id: 17,
        text: "How do you handle conflicts or disagreements with others?",
        options: [
            {label: "Try to understand their perspective and resolve amicably", value: "0"},
            {label: "Stand firm on my viewpoint but remain respectful", value: "1"},
            {label: "Avoid confrontation as much as possible", value: "2"},
            {label: "Get frustrated and let emotions take over", value: "3"}
        ]
    },
    {
        id: 18,
        text: "How often do you seek feedback from others about your performance?",
        options: [
            {label: "Regularly, to improve and grow", value: "0"},
            {label: "Occasionally, when I feel it's needed", value: "1"},
            {label: "Rarely, only when asked", value: "2"},
            {label: "Never, I rely on self-assessment", value: "3"}
        ]
    },
    {
        id: 19,
        text: "How do you contribute to group study sessions or discussions?",
        options: [
            {label: "Actively participate and share my knowledge", value: "0"},
            {label: "Listen and contribute when I have something valuable to add", value: "1"},
            {label: "Mostly listen, rarely contribute", value: "2"},
            {label: "Prefer to study alone and avoid group sessions", value: "3"}
        ]
    },
    {
        id: 20,
        text: "When working with others, what role do you typically take?",
        options: [
            {label: "Leader, organizing and directing the group", value: "0"},
            {label: "Collaborator, working closely with others", value: "1"},
            {label: "Supporter, helping where needed", value: "2"},
            {label: "Observer, letting others take the lead", value: "3"}
        ]
    },
];

const getScoreCategory = (score) => {
    if (score >= 61 && score <= 80) {
        return {
            level: "High Academic Stress",
            interpretation: "You have demonstrated excellent stress management, emotional resilience, and decision-making skills, which are crucial for your exam preparation. Your ability to stay calm under pressure and maintain a positive mindset is commendable, and these traits will serve you well not only in your exams but also in your future career. Keep up the good work, continue refining your skills, and remember that consistent effort and self-belief are key to achieving your goals. With your determination and resilience, you are well-equipped to overcome any challenges that come your way.",
        };
    } else if (score >= 41 && score <= 60) {
        return {
            level: "Moderate-High Academic Stress",
            interpretation: "You have demonstrated good skills and behaviors, but there are some areas that could benefit from improvement. Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the challenges ahead. Developing a robust set of stress management skills will help you stay calm and focused under pressure, while refining your decision-making strategies will ensure you can navigate complex situations with confidence. By addressing these areas, you'll be better equipped to tackle any obstacles and achieve your goals more effectively.",
        };
    } else if (score >= 21 && score <= 40) {
        return {
            level: "Moderate Academic Stress",
            interpretation: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine. Practicing stress-relief techniques will help you stay calm under pressure and maintain a positive outlook. Emotional intelligence training will aid you in understanding your emotions and managing them effectively. Structured decision-making practices will assist you in comprehending and resolving complex situations. By adopting these measures, you can enhance your abilities and make progress towards your goals.",
        };
    } else if (score >= 11 && score <= 20) {
        return {
            level: "Low-Moderate Academic Stress",
            interpretation: "There are several areas of concern that need to be addressed. It's crucial to prioritize the development of better stress management techniques, emotional resilience, and consistent study habits. Improving your stress management skills will empower you to handle pressure effectively; while enhancing emotional resilience will help you bounce back from setbacks with confidence. Developing consistent study habits will ensure you stay organized and focused on your goals. Don't hesitate to seek guidance from mentors and utilize resources that can support you in these areas of growth. By actively working on these aspects, you'll build a strong foundation for achieving success in your endeavours.",
        };
    } else {
        return {
            level: "Low Academic Stress",
            interpretation: "Your responses indicate major development is needed in almost all aspects. It's essential to prioritize building a strong foundation in stress management, emotional intelligence, and disciplined study routines. These skills are crucial for navigating challenges effectively and achieving your goals. Seeking professional guidance or training can provide valuable insights and strategies to accelerate your growth in these areas. By committing to improving these foundational skills, you'll enhance your readiness and capability to succeed in your endeavours.",
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

const ExamStressGaugeQuestions = () => {
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
            <Container maxWidth="md">
                <Box
                    mt={12}
                    sx={{
                        py: 10,
                        px: {xs: 2, md: 10},
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

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Card sx={{
                            p: 4,
                            height: '100%',
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            borderRadius: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: "space-between",
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
                                                    totalScore >= 21 ? '#ffff00' : totalScore >= 11 ? '#90EE90' : '#00ff00',
                                        }}
                                    />
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
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center',
                        mt: 4
                    }}>
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/assessments/exam-stress')}
                            sx={{
                                color: '#F5811E',
                                borderColor: '#F5811E',
                                py: 1.5,
                                px: 4,
                                '&:hover': {
                                    borderColor: '#E26C0A',
                                    bgcolor: 'rgba(245, 129, 30, 0.1)'
                                }
                            }}
                        >
                            Save Results
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/resources?scrollTo=assessments')}
                            sx={{
                                bgcolor: '#F5811E',
                                color: '#fff',
                                py: 1.5,
                                px: 4,
                                '&:hover': {bgcolor: '#E26C0A'}
                            }}
                        >
                            Return to Assessments
                        </Button>
                    </Box>
                </Box>
            </Container>
        );
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

export default ExamStressGaugeQuestions;