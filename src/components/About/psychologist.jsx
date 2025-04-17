import React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
        '& .avatar-wrapper': {
            transform: 'scale(1.05)',
            borderColor: '#FF7F1E',
        },
    },
}));

const AvatarWrapper = styled(Box)(() => ({
    position: 'relative',
    marginBottom: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: -2,
        left: -2,
        right: -2,
        bottom: -2,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #FF7F1E, #FFA41E)',
        opacity: 0.2,
    },
}));

const StyledAvatar = styled(Avatar)(({theme}) => ({
    width: 120,
    height: 120,
    backgroundColor: '#E6EAF3',
    border: '3px solid #E6EAF3',
    position: 'relative',
    zIndex: 1,
    '& .MuiSvgIcon-root': {
        width: '50%',
        height: '50%',
        color: '#012765',
    },
}));

const Role = styled(Typography)(() => ({
    color: '#FF7F1E',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '4px',
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    textAlign: 'center',
}));

const Name = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontSize: '20px',
    marginBottom: '12px',
    fontFamily: 'Montserrat',
    textAlign: 'center',
}));

const Description = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '14px',
    lineHeight: 1.5,
    marginBottom: '16px',
    fontFamily: 'Poppins, sans-serif',
    flex: 1,
    textAlign: 'center',
}));

const founders = [
    {
        role: "Wellness Consultant",
        name: "Pratibha Sanganeria",
        skill1: "Client centered therapy",
        skill2: "DBT, movement therapy (currently upskilling)",
        skill3: "Workshop facilitation",
    },
    {
        role: "Psychologist",
        name: "Anshita Raghav",
        skill1: "Workplace Psychology\n",
        skill2: "Training\n",
        skill3: "Counselling\n",
    },
    {
        role: "Consultant Psychologist",
        name: "Vedanshi Gupta",
        skill1: "Person Centred Therapy\n",
        skill2: "CBT, ACT and Gestalt\n",
        skill3: "School Counselor\n",
    },
    {
        role: "Wellness Consultant",
        name: "Anjali Sinha",
        skill1: "Eclectic approach\n",
        skill2: "CBT\n",
        skill3: "Special Educator & Speec\n",
    },
    {
        role: "Wellness Consultant",
        name: "Aishwarya Saxena",
        skill1: "CBT and Behaviour Modif\n",
        skill2: "Mindfulness\n",
        skill3: "School Counselor\n",
    },
    {
        role: "Wellness Consultant",
        name: "Fatima Lobo",
        skill1: "NLP Therapist\n",
        skill2: "CBT, REBT\n",
        skill3: "Counsellor\n",
    },
    {
        role: "Counselling Psychologist",
        name: "Pratibha Kotak",
        skill1: "Couple Counselling\n",
        skill2: "Rehabilitation\n",
        skill3: "REBT\n",
    },
];

const Psychologist = () => {
    return (
        <Box sx={{ padding: '96px 0', backgroundColor: '#F3F4F6' }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Montserrat',
                        fontSize: '36px',
                        color: '#012765',
                        textAlign: 'center',
                        fontWeight: 700,
                        mb: 2,
                    }}
                >
                    Psychologists
                </Typography>
                <Typography
                    sx={{
                        maxWidth: 700,
                        mx: 'auto',
                        mb: 8,
                        fontSize: '18px',
                        color: '#4B5563',
                        textAlign: 'center',
                        lineHeight: '25px',
                    }}
                >
                    Our team of psychologists brings together years of experience, compassionate care, and evidence-based practices to support your mental well-being.
                </Typography>


                <Grid container spacing={3}>
                    {founders.map((founder, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledPaper>
                                <AvatarWrapper className="avatar-wrapper">
                                    <StyledAvatar>
                                        <PersonIcon/>
                                    </StyledAvatar>
                                </AvatarWrapper>

                                <Role>{founder.role}</Role>
                                <Name>{founder.name}</Name>

                                <Box sx={{textAlign:"center"}}>
                                    {[founder.skill1, founder.skill2, founder.skill3].map(
                                        (skill, idx) =>
                                            skill && (
                                                <span
                                                    key={idx}
                                                    sx={{
                                                        fontSize: '14px',
                                                        color: '#333',
                                                    }}
                                                >
                                                    {skill},
                                                </span>
                                            )
                                    )}
                                </Box>
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Psychologist;
