import React, { useState } from 'react';
import { Box, Container, Typography, Button, Paper, Radio, RadioGroup, FormControlLabel, FormControl, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

const NavigationButton = styled(Button)(({ theme }) => ({
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
        text: "I feel good about myself.",
    },
    {
        id: 2,
        text: "I am happy with the way I look.",
    },
    {
        id: 3,
        text: "I feel proud of the things I do.",
    },
    {
        id: 4,
        text: " I believe I can do things well.",
    },
    {
        id: 5,
        text: " I think I am a good person.",
    },
    {
        id: 6,
        text: "I feel confident when I try new things.",
    },
    {
        id: 7,
        text: "I feel good about my abilities.",
    },
    {
        id: 8,
        text: "I think positively about myself.",
    },
    {
        id: 9,
        text: "I feel that others like me.",
    },
    {
        id: 10,
        text: "I am satisfied with my achievements.",
    },
    {
        id: 11,
        text: "I feel comfortable in social situations.",
    },
    {
        id: 12,
        text: "I can handle my problems well",
    },
    {
        id: 13,
        text: "I feel respected by others.",
    },
    {
        id: 14,
        text: "I believe I am important.",
    },
    {
        id: 15,
        text: "I accept my mistakes and learn from them.",
    },
    {
        id: 16,
        text: "I feel happy with my friendships.",
    },
    {
        id: 17,
        text: "I like myself even when things go wrong.",
    },
    {
        id: 18,
        text: "I believe I can achieve my goals.",
    },
    {
        id: 19,
        text: "I feel positive about my future.",
    },
    {
        id: 20,
        text: "I think I am special.",
    },
];

const options = [
    { value: 4, label: 'Always' },
    { value: 3, label: 'Often' },
    { value: 2, label: 'Sometimes' },
    { value: 1, label: 'Rarely' },
    { value: 0, label: 'Never' },
];

const getScoreCategory = (totalScore) => {
    if (totalScore <= 12) {
        return {
            level: 'Low Stress/Anxiety',
            report: 'You appear to control Strain and tension well. Keep Practicing healthful habits. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, we suggest to engage with certified Psychologists and Professionals.'
        };
    } else if (totalScore <= 24) {
        return {
            level: 'Moderate Stress/Anxiety',
            report: 'You may be experiencing stress or anxiety at manageable levels. Consider mindfulness, self-care, or seeking support if needed. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, we suggest to engage with certified Psychologists and Professionals.'
        };
    } else if (totalScore <= 36) {
        return {
            level: 'High Stress/Anxiety',
            report: 'Your stress and anxiety levels may be impacting your daily life. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, it is recommended that you engage with certified Psychologists and Professionals.'
        };
    } else {
        return {
            level: 'Severe Stress/Anxiety',
            report: 'Significant levels of stress and anxiety are present. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, it is strongly advised that you engage with certified Psychologists and Professionals.'
        };
    }
};

const GaugeChart = ({ score, maxScore }) => {
    const percentage = (score / maxScore) * 100;
    const data = [
        { name: 'Score', value: percentage },
        { name: 'Remaining', value: 100 - percentage }
    ];

    const getColor = (percentage) => {
        if (percentage <= 25) return '#4CAF50'; // Green for low stress
        if (percentage <= 50) return '#FFC107'; // Yellow for moderate stress
        if (percentage <= 75) return '#FF9800'; // Orange for high stress
        return '#F44336'; // Red for severe stress
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
                            <Cell fill={getColor(percentage)} />
                            <Cell fill="#E6EAF3" />
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
                        fontSize: { xs: '3rem', sm: '4rem' }
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

const SelfEsteemScaleQuestions = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (value) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = parseInt(value);
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else {
            navigate(-1);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setAnswers(new Array(questions.length).fill(null));
        setShowResults(false);
    };

    const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const scoreCategory = getScoreCategory(totalScore);

    if (showResults) {
        return (
            <Box sx={{
                minHeight: 'calc(100vh - 72px)',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#F3F4F6',
                mt: { xs: '64px', sm: '72px' },
                py: { xs: 4, md: 6 },
            }}>
                <Container maxWidth="md">
                    <StyledPaper>
                        <Typography variant="h4" sx={{
                            mb: 4,
                            color: '#012765',
                            fontWeight: 700,
                            fontFamily: 'Montserrat',
                            textAlign: 'center'
                        }}>
                            Assessment Results
                        </Typography>

                        <GaugeChart score={totalScore} maxScore={48} />

                        <Box sx={{
                            mb: 4,
                            p: 4,
                            backgroundColor: '#F8FAFC',
                            borderRadius: 3,
                            border: '1px solid #E6EAF3',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                backgroundColor: '#FF7F1E',
                                borderRadius: '3px 3px 0 0'
                            }
                        }}>
                            <Typography sx={{
                                color: '#4B5563',
                                fontSize: '16px',
                                lineHeight: 1.8,
                                fontFamily: 'Poppins',
                                mb: 3
                            }}>
                                {scoreCategory.report}
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mt: 3,
                                p: 2,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 2,
                                border: '1px solid #E6EAF3'
                            }}>
                                <Typography sx={{
                                    color: '#012765',
                                    fontSize: '14px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 500
                                }}>
                                    Note: This is a self-assessment tool and not a diagnostic test. For professional evaluation, please consult with a certified mental health professional.
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            mt: 4
                        }}>
                            <NavigationButton
                                variant="outlined"
                                onClick={() => navigate('/assessments/self-esteem-scale')}
                                sx={{
                                    color: '#012765',
                                    borderColor: '#012765',
                                    '&:hover': {
                                        borderColor: '#012765',
                                        backgroundColor: '#F8FAFC'
                                    }
                                }}
                            >
                                Back to Start
                            </NavigationButton>
                            <NavigationButton
                                variant="contained"
                                onClick={handleRestart}
                                sx={{
                                    backgroundColor: '#FF7F1E',
                                    '&:hover': { backgroundColor: '#E66C00' },
                                    boxShadow: '0 4px 12px rgba(255, 127, 30, 0.2)'
                                }}
                            >
                                Take Again
                            </NavigationButton>
                        </Box>
                    </StyledPaper>
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F3F4F6',
            mt: { xs: '64px', sm: '72px' },
            py: { xs: 4, md: 6 },
        }}>
            <Container maxWidth="md">
                <StyledPaper>
                    <Box sx={{ mb: 4 }}>
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

                    <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
                        <RadioGroup
                            value={answers[currentQuestion] || ''}
                            onChange={(e) => handleAnswer(e.target.value)}
                        >
                            {options.map((option) => (
                                <FormControlLabel
                                    key={option.value}
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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <NavigationButton
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={handleBack}
                            sx={{ color: '#012765', borderColor: '#012765' }}
                        >
                            Back
                        </NavigationButton>
                        <NavigationButton
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleNext}
                            disabled={answers[currentQuestion] === null}
                            sx={{
                                backgroundColor: '#FF7F1E',
                                '&:hover': { backgroundColor: '#E66C00' },
                                '&.Mui-disabled': {
                                    backgroundColor: '#E6EAF3',
                                    color: '#9CA3AF',
                                }
                            }}
                        >
                            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                        </NavigationButton>
                    </Box>
                </StyledPaper>
            </Container>
        </Box>
    );
};

export default SelfEsteemScaleQuestions;