import React from 'react';
import {Box, Container, Grid, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';

const Title = styled(Typography)(() => ({
    color: 'white',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    fontSize: '36px',
    lineHeight: '40px',
    textAlign: 'center',
    marginBottom: '16px',
}));

const SubTitle = styled(Typography)(() => ({
    color: '#D1E1FF',
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: 800,
    margin: '0 auto 48px',
    lineHeight: '28px',
    fontFamily: 'Poppins, sans-serif',
}));

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        '& .icon-wrapper': {
            backgroundColor: '#FF7F1E',
            '& svg': {
                color: 'white',
                transform: 'scale(1.1)',
            },
        },
    },
}));

const IconWrapper = styled(Box)(() => ({
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    backgroundColor: '#E6EAF3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '& svg': {
        fontSize: '28px',
        color: '#012765',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));

const GoalTitle = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontSize: '20px',
    marginBottom: '16px',
    fontFamily: 'Montserrat',
}));

const GoalDescription = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '16px',
    lineHeight: '1.6',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '20px',
}));

const BulletPoint = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    '&:last-child': {
        marginBottom: 0,
    },
}));

const goals = [
    {
        icon: <SchoolIcon/>,
        title: "Academic Excellence",
        description: "Foster an environment that promotes academic achievement while maintaining emotional well-being.",
        points: [
            "Improve academic performance through mental wellness",
            "Develop effective study-life balance strategies",
            "Create supportive learning environments"
        ]
    },
    {
        icon: <PsychologyIcon/>,
        title: "Mental Health Support",
        description: "Provide comprehensive mental health resources and support systems for all students.",
        points: [
            "Early identification of mental health concerns",
            "Accessible counseling and support services",
            "Stress management and coping skills development"
        ]
    },
    {
        icon: <GroupsIcon/>,
        title: "Community Building",
        description: "Create a strong, supportive community that promotes emotional well-being and mutual support.",
        points: [
            "Foster peer support networks",
            "Engage parents and educators",
            "Build lasting support systems"
        ]
    },
    {
        icon: <FlagIcon/>,
        title: "Sustainable Impact",
        description: "Establish long-term programs and initiatives that create lasting positive change.",
        points: [
            "Implement evidence-based programs",
            "Measure and track progress",
            "Continuous improvement and adaptation"
        ]
    }
];

const Goals = () => {
    return (
        <Box sx={{
            py: 8,
            backgroundColor: '#012765',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(1, 39, 101, 0) 0%, rgba(1, 39, 101, 0.8) 100%)',
                pointerEvents: 'none',
            }
        }}>
            <Container maxWidth="xl">
                <Box className={"Montserrat"} sx={{
                    fontSize: "36px",
                    marginBottom: "16px",
                    lineHeight: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "700"
                }}>
                    Our Strategic Goals
                </Box>
                <Box sx={{
                    maxWidth: 600,
                    mx: "auto",
                    mb: 8,
                    fontSize: "18px",
                    color: "#fff",
                    textAlign: "center",
                    lineHeight: "25px",
                }}>
                    Building a foundation for success through targeted objectives and measurable outcomes
                </Box>

                <Grid container spacing={4}>
                    {goals.map((goal, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                            <StyledPaper elevation={3}>
                                <IconWrapper className="icon-wrapper">
                                    {goal.icon}
                                </IconWrapper>
                                <Box sx={{
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    color: "#012765",
                                    mb: "12px",
                                }}>
                                    {goal.title}
                                </Box>
                                <GoalDescription>
                                    {goal.description}
                                </GoalDescription>
                                <Box sx={{mt: 'auto'}}>
                                    {goal.points.map((point, idx) => (
                                        <BulletPoint key={idx}>
                                            <Box sx={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF7F1E',
                                                mr: 2
                                            }}/>
                                            <Typography sx={{
                                                color: '#4B5563',
                                                fontSize: '14px',
                                                fontFamily: 'Poppins, sans-serif',
                                            }}>
                                                {point}
                                            </Typography>
                                        </BulletPoint>
                                    ))}
                                </Box>
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Goals; 