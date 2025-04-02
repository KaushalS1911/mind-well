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
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

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
        text: "Look at this picture. How do you think this person is feeling? (Show a picture of a happy face)",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 2,
        text: "How do you feel when you get to play with your favourite toy?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 3,
        text: "When someone takes your toy without asking, how do you feel?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 4,
        text: "How do you feel when you lose a game?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 5,
        text: "When you get a hug from a family member, how do you feel?specify",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 6,
        text: "What do you do when you feel happy?",
        options: [
            {label: "Smile And Laugh", value: "0"},
            {label: "Cry", value: "1"},
            {label: "Yell", value: "2"},
            {label: "Stay Quiet", value: "3"},
        ]
    },
    {
        id: 7,
        text: "What do you do when you feel sad?",
        options: [
            {label: "Talk To Someone", value: "0"},
            {label: "Cry", value: "1"},
            {label: "Hit Something", value: "2"},
            {label: "Stay Quiet", value: "3"},
        ]
    },
    {
        id: 8,
        text: "If you feel angry, what can you do to feel better?",
        options: [
            {label: "Talk To Someone", value: "0"},
            {label: "Take Deep Breaths", value: "1"},
            {label: "Hit Something", value: "2"},
            {label: "Stay Quiet", value: "3"},
        ]
    },
    {
        id: 9,
        text: "When you are scared, what do you do?",
        options: [
            {label: "Talk To Someone", value: "0"},
            {label: "Cry", value: "1"},
            {label: "Yell", value: "2"},
            {label: "Stay Quiet", value: "3"},
        ]
    },
    {
        id: 10,
        text: "What do you do when you feel frustrated?",
        options: [
            {label: "Talk To Someone", value: "0"},
            {label: "Take Deep Breaths", value: "1"},
            {label: "Hit Something", value: "2"},
            {label: "Stay Quiet", value: "3"},
        ]
    },
    {
        id: 11,
        text: "If your friend is crying, how do you think they feel?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 12,
        text: "If your friend is yelling, how do you think they feel?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 13,
        text: "If your friend is laughing, how do you think they feel?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 14,
        text: "If your friend is very quiet, how do you think they feel? ",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
    {
        id: 15,
        text: "If your friend is playing alone, how do you think they feel?",
        options: [
            {label: "Happy", value: "0"},
            {label: "Sad", value: "1"},
            {label: "Angry", value: "2"},
            {label: "Scared", value: "3"},
        ]
    },
];

const getScoreCategory = (score) => {
    if (score >= 61 && score <= 80) {
        return {
            level: "High Score",
            interpretation: "The child has a strong understanding of emotions and demonstrates effective emotional regulation skills.",
            recommendations: [
                {
                    description: "Encourage continued emotional development through positive reinforcement and activities that promote emotional intelligence. Engage the child in more complex emotional awareness activities to further enhance their skills."
                },
            ]
        };
    } else if (score >= 41 && score <= 60) {
        return {
            level: "Moderate-High Score",
            interpretation: " The child has a good understanding of emotions and generally manages and expresses emotions appropriately, but there may be some areas needing slight improvement.",
            recommendations: [
                {
                    description: "Provide additional support through structured activities and discussions that focus on understanding and managing emotions. Reinforce positive behaviors and work on specific areas where the child showed some difficulty."
                },
            ]
        };
    } else if (score >= 21 && score <= 40) {
        return {
            level: "Moderate Score",
            interpretation: "The child has a basic understanding of emotions but shows inconsistencies in emotional regulation and expression.",
            recommendations: [
                {
                    description: "Engage the child in more frequent and varied emotional learning activities. Use role-playing, storytelling, and interactive games to help the child better recognize and manage emotions. Consider involving a school counselor or psychologist if needed for targeted interventions."
                },
            ]
        };
    } else if (score >= 11 && score <= 20) {
        return {
            level: "Low-Moderate Score",
            interpretation: "The child has significant difficulty in identifying and managing emotions, indicating a need for targeted emotional learning and support.",
            recommendations: [
                {
                    description: "Implement a structured emotional learning program with daily activities focused on identifying and managing emotions. Collaborate with teachers and parents to ensure consistent support across environments. Consider professional guidance from a child psychologist or counselor to develop personalized strategies for improvement."
                },
            ]
        };
    } else {
        return {
            level: "Low Score",
            interpretation: "The child has major challenges in understanding and regulating emotions, which could impact their social interactions and overall well-being.",
            recommendations: [
                {
                    description: "Immediate intervention is recommended. Develop a comprehensive support plan involving teachers, parents, and mental health professionals. Intensive emotional learning activities and one-on-one counseling sessions may be necessary to address the child's needs. Close monitoring and continuous support will be crucial for progress."
                },
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

const EmotionalAwarenessQuestions = () => {
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
            <Container maxWidth="lg">
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

                    <Grid container spacing={4}>
                        {/* Score Display Section */}
                        <Grid item xs={12} md={6}>
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
                                                        totalScore >= 21 ? '#ffdd00' : totalScore >= 11 ? '#90EE90' : '#00ff00',
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
                        </Grid>

                        {/* Recommendations Section */
                        }
                        <Grid item xs={12} md={6}>
                            <Card sx={{
                                p: 4,
                                height: '100%',
                                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                borderRadius: 4
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2
                                }}>
                                    <TipsAndUpdatesIcon sx={{color: '#F5811E', mr: 2, fontSize: 30}}/>
                                    <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                        Recommendations
                                    </Typography>
                                </Box>

                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    {result.recommendations.map((rec, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                p: 2.5,
                                                borderRadius: 2,
                                                bgcolor: 'rgba(245, 129, 30, 0.05)',
                                                border: '1px solid rgba(245, 129, 30, 0.1)',
                                                transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#F5811E',
                                                    fontSize: "19px",
                                                    fontWeight: 600,
                                                    mb: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1
                                                }}
                                            >
                                                {/*<AssignmentTurnedInIcon sx={{fontSize: 20}}/>*/}
                                                {rec.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{color: '#4A5568', textAlign: "justify",}}>
                                                {rec.description}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Action Buttons */
                    }
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center',
                        mt: 4
                    }}>
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/assessments/emotional-awareness')}
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

export default EmotionalAwarenessQuestions;