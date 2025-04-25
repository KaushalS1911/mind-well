import React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import img1 from '../../assets/images/about/Founder/Pandey Nidhi .png';
import img2 from '../../assets/images/about/Founder/Devesh Kumar.png';
import img3 from '../../assets/images/about/Founder/Ashutosh_Mishra.png';

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

const StyledPaper = styled(Paper)(({ theme }) => ({
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

const StyledAvatar = styled(Avatar)(({ theme }) => ({
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

const QRCode = styled(Box)(() => ({
    width: '80px',
    height: '80px',
    marginTop: 'auto',
    backgroundColor: '#E6EAF3',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#012765',
    fontSize: '12px',
    fontFamily: 'Poppins, sans-serif',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
}));

const founders = [
    {
        img: img1,
        role: "Founder & Director",
        name: "Pandey Nidhi",
        description: "Mass-com Graduate with experience in Media and Entertainment transitioned herself to a Therapeutic Counsellor.",
    },
    {
        img: img2,
        role: "Founder & CBO",
        name: "Devesh Tripathi",
        description: "MBA from IIT(Dhanbad) with over 24 years of experience in Corporate World. A Mental Health Advocate and Life Coach.",
    },
    {
        img: img3,
        role: "Founder & Director",
        name: "Ashutosh Mishra",
        description: "MBA from BHU with over 22 years of experience has transitioned into an entrepreneur. He also is Co-Founder at Agribid.",
    },
    {
        role: "Product Head",
        name: "Fatima Lobo",
        description: "Masters in Psychology, PGD In Therapeutic Counselling and a Certified NLP Practitioner with over 15 Years of experience.",
    },
    {
        role: "Director- Sales",
        name: "Chaman Kumar",
        description: "A visionary with a successful 25-year corporate career. Worked in Banks and NBFC institutions in sales & Business Development.",
    }
];

const FounderCard = React.memo(({ founder, icon = <PersonIcon /> }) => (
    <Grid item xs={12} sm={6} md={4}>
        <StyledPaper elevation={3}>
            <AvatarWrapper className="avatar-wrapper">
                <StyledAvatar>{founder.img ? <img src={founder.img} alt={founder.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : icon}</StyledAvatar>
            </AvatarWrapper>
            <Role>{founder.role}</Role>
            <Name>{founder.name}</Name>
            <Description>{founder.description}</Description>
            <QRCode>QR Code</QRCode>
        </StyledPaper>
    </Grid>
));

const Founders = () => (
    <Box sx={{ padding: "96px 0",  }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
            <Title>Founding members</Title>
            <SubTitle>
                Meet our experienced team of professionals dedicated to revolutionizing mental health care
            </SubTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 1200, margin: '0 auto' }}>
                <Grid container spacing={3} justifyContent="center">
                    {founders.slice(0, 3).map((founder, index) => (
                        <FounderCard key={index} founder={founder} />
                    ))}
                </Grid>
                <Grid container spacing={3} justifyContent="center">
                    {founders.slice(3, 5).map((founder, index) => (
                        <FounderCard key={index + 3} founder={founder} />
                    ))}
                </Grid>
            </Box>
        </Container>
    </Box>
);

export default Founders;
