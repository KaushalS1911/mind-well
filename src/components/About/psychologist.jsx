import React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import img1 from '../../assets/images/about/Psychologists/Pratibha Sanganeria.png'
import img2 from '../../assets/images/about/Psychologists/Anshita Raghav.jpeg'
import img3 from '../../assets/images/about/Psychologists/Vedanshi Gupta.png'
import img4 from '../../assets/images/about/Psychologists/Anjali Sinha.png'
import img5 from '../../assets/images/about/Psychologists/Aishwarya Saxena.jpeg'
import img6 from '../../assets/images/about/Psychologists/Pratibha Kotak.png'
import img7 from '../../assets/images/about/Psychologists/Liza Hazarika.png'
import img8 from '../../assets/images/about/Psychologists/Anju Sinha.jpeg'

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
    backgroundColor: '#FFFFFF',
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
        img: img4,
        role: "Psychologist / Sp. Educator",
        name: "Anjali Sinha",
        skills: "Eclectic approach, CBT, Special Educator & Speec",
    },
    {
        img: img7,
        role: "Psychologist",
        name: "Liza Hazarika",
        skills: "Certified Queer Affirmative, Spiritual Therapist",
    },
    {
        img: img8,
        role: "Psychotherapist",
        name: "Anju Sinha",
        skills: "CBT, REBT, Rehab Counselling",
    },
    {
        img: img2,
        role: "Psychologist / Soft Skills",
        name: "Anshita Raghav",
        skills: "Trauma- Informed Psychologist, Workplace Consultant, Trainer",

    },
    {
        img: img6,
        role: "Psychologist",
        name: "Pratibha Kotak",
        skills: "Couple Counselling, Rehabilitation, REBT",
    },
    {
        img: img1,
        role: "Psychologist",
        name: "Pratibha Sanganeria",
        skills: "Client centered therapy, DBT",
    },
    {
        img: img3,
        role: "Consultant Psychologist",
        name: "Vedanshi Gupta",
        skills: "Person Centred Therapy, CBT, ACT and Gestalt, School Counselor",
    },
    {
        img: img5,
        role: "Psychologist ",
        name: "Aishwarya Saxena",
        skills: "CBT, Mindfulness, School Counselor",

    },



];

const Psychologist = ({ icon = <PersonIcon /> }) => {
    return (
        <Box sx={{ padding: '0 0 96px 0', }}>
            <Container maxWidth="xl">
                <Typography
                    className={"Montserrat"}
                    variant="h4"
                    sx={{
                        fontFamily: 'Montserrat',
                        fontSize: {
                            xs: '1.7rem',
                            sm: '1.85rem',
                            md: '2rem',
                            lg: '2.125rem'
                        },
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
                        fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
                        color: '#4B5563',
                        textAlign: 'center',
                        lineHeight: '25px',
                    }}
                >
                    Our experienced psychologists provide compassionate, personalized care to support mental wellness, emotional resilience, and meaningful personal growth.
                </Typography>


                <Grid container spacing={3}>
                    {founders.map((founder, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledPaper>
                                <AvatarWrapper className="avatar-wrapper">
                                    <StyledAvatar>{founder.img ? <img src={founder.img} alt={founder.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : icon}</StyledAvatar>
                                </AvatarWrapper>

                                <Role>{founder.role}</Role>
                                <Name>{founder.name}</Name>

                                <Box sx={{textAlign:"center"}}>
                                    {founder.skills}
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
