import React from 'react';
import {Box, Container, Grid, Paper, Typography, Avatar} from '@mui/material';
import {styled} from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import img1 from '../../assets/images/about/AdvisoryCouncil/Dr. Pramod Pathak.png';
import img2 from '../../assets/images/about/AdvisoryCouncil/A N Tripathi.png';
import img3 from '../../assets/images/about/AdvisoryCouncil/Manish Kumar.png';
import img4 from '../../assets/images/about/AdvisoryCouncil/Pandey Rakesh.png';
import img5 from '../../assets/images/about/AdvisoryCouncil/sudhanshu kumar.png';

const Title = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    fontSize: '36px',
    lineHeight: '1.2',
    textAlign: 'center',
    marginBottom: '12px',
}));

const SubTitle = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 40px',
    lineHeight: '1.5',
    fontFamily: 'Poppins, sans-serif',
}));

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
}));

const Name = styled(Typography)(() => ({
    color: '#012765',
    fontWeight: 700,
    fontSize: '20px',
    marginBottom: '12px',
    fontFamily: 'Montserrat',
}));

const Description = styled(Typography)(() => ({
    color: '#4B5563',
    fontSize: '14px',
    lineHeight: 1.5,
    marginBottom: '16px',
    fontFamily: 'Poppins, sans-serif',
    flex: 1,
}));

const founders = [
    {
        img: img1,
        role: "Retd IIT Professor& Psychology Coach",
        name: "Dr. Pramod Pathak",
        description: "Ph.D in Stress Management, M.Sc. in Psychology and an MBA in HR. Former Professor and HOD of Management at IIT(ISM), Dhanbad is a Psychology Coach and our Chief Mentor.",
    },
    {
        img: img2,
        role: "Retired IIT COE",
        name: "Sh. A.N.Tripathi",
        description: "Superannuated from IIT(ISM), Dhanbad in different administrative roles covering Examination reforms and Digitisation to student affairs. Post retirement assignments as COE at IMS Unison, Dehradun",
    },
    {
        img: img3,
        role: "XLRI Alumni & Lead HR",
        name: "Sh. Manish Kumar",
        description: "Alumni of XISS, he has experience of Leading HR with MNCs and Large Corporates. With immense experience in different sectors he is a strategist and also a Mentor, Community Worker, Angel Investor and Columnist on Social Issues.",
    },
    {
        img: img4,
        role: "Certified Trainer from DoPT, GoI",
        name: "Sh. Pandey Rakesh",
        description: "M. A. Public Policy, M. Phil in Development Communication, Diploma in Psychological Counselling and Behaviour Modification, Certified Trainer from DoPT, GoI",
    },
    {
        img: img5,
        role: "Brand & Media Consultant",
        name: "Sh. Sudhanshu Chaudhary",
        description: "35 years of experience in the education sector as a media and brand consultant. Creatively convey knowledge by blending visual storytelling with academic insights and enriching the learning experience.",
    }
];

const AdvisoryCouncil = () => {
    return (
        <Box sx={{
            padding: "96px 0",
            backgroundColor: '#F3F4F6',
        }}>
            <Container maxWidth="xl" sx={{px: {xs: 2, sm: 3, md: 4, lg: 6}}}>
                <Box className={"Montserrat"} sx={{
                    fontSize: "36px",
                    marginBottom: "16px",
                    lineHeight: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#012765",
                    fontWeight: "700"
                }}>
                    Advisory Council
                </Box>
                <Box sx={{
                    maxWidth: 600,
                    mx: "auto",
                    mb: 8,
                    fontSize: "18px",
                    color: "#4B5563",
                    textAlign: "center",
                    lineHeight: "25px",
                }}>
                    Meet our experienced team of professionals dedicated to revolutionizing mental health care
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    maxWidth: 1200,
                    margin: '0 auto'
                }}>
                    {/* First row - 3 cards */}
                    <Grid container spacing={3} justifyContent="center">
                        {founders.slice(0, 3).map((founder, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <StyledPaper elevation={3}>
                                    <AvatarWrapper className="avatar-wrapper">
                                        <StyledAvatar>
                                            <img src={founder.img} alt={founder.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                        </StyledAvatar>
                                    </AvatarWrapper>
                                    <Box sx={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#012765",
                                        mb: "12px",
                                    }}>{founder.name}</Box>
                                    <Role>{founder.role}</Role>
                                    <Description>{founder.description}</Description>
                                </StyledPaper>
                            </Grid>
                        ))}
                    </Grid>
                    {/* Second row - 2 cards */}
                    <Grid container spacing={3} justifyContent="center">
                        {founders.slice(3, 5).map((founder, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index + 3}>
                                <StyledPaper elevation={3}>
                                    <AvatarWrapper className="avatar-wrapper">
                                        <StyledAvatar>
                                            <img src={founder.img} alt={founder.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                        </StyledAvatar>
                                    </AvatarWrapper>
                                    <Name>{founder.name}</Name>
                                    <Role>{founder.role}</Role>
                                    <Description>{founder.description}</Description>
                                </StyledPaper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default AdvisoryCouncil;