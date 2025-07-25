import React from 'react';
import {Box, Container, Grid, Paper, Typography, Avatar} from '@mui/material';
import {styled} from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import img1 from '../../assets/images/about/Founder/Pandey Nidhi.png';
import img2 from '../../assets/images/about/Founder/Devesh Kumar.png';
import img3 from '../../assets/images/about/Founder/Ashutosh_Mishra.png';
import img4 from '../../assets/images/about/Founder/Fatima Lobo.png';
import img5 from '../../assets/images/about/Founder/Chaman Kumar.png';

import img6 from '../../assets/images/about/Founder/nidhi.png';
import img7 from '../../assets/images/about/Founder/devesh.png';
import img8 from '../../assets/images/about/Founder/ashutosh.png';
import img9 from '../../assets/images/about/Founder/fatima.png';
import img10 from '../../assets/images/about/Founder/chaman1.png';
import {LinkedIn} from "@mui/icons-material";


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
    fontFamily: 'Poppins, sans-serif',
    flex: 1,
    textAlign: 'center',
}));

const founders = [
    {
        img: img1,
        qr: img6,
        role: "Founder & Director",
        name: "Pandey Nidhi",
        description: "Mass-com Graduate with experience in Media and Entertainment transitioned herself to a Therapeutic Counsellor",
        link: "https://www.linkedin.com/in/pandey-nidhii-2902ba219/",
    },
    {
        img: img2,
        qr: img7,
        role: "Founder & CBO",
        name: "Devesh Tripathi",
        description: "MBA from IIT(Dhanbad) with over 24 years of experience in Corporate World. A Mental Health Advocate and Life Coach",
        link: "https://www.linkedin.com/in/devesh-tripathi-22b75a14/",
    },
    {
        img: img3,
        qr: img8,
        role: "Founder & Director",
        name: "Ashutosh Mishra",
        description: "MBA from BHU with over 22 years of experience has transitioned into an entrepreneur. He also is Co-Founder at Agribid",
        link: "https://www.linkedin.com/in/ashutosh-mishra-3240b68/",
    },
    // {
    //     img: img4,
    //     qr:img9,
    //     role: "Product Head",
    //     name: "Fatima Lobo",
    //     description: "Masters in Psychology, PGD In Therapeutic Counselling and a Certified NLP Practitioner with over 15 Years of experience.",
    //     link: "https://www.linkedin.com/in/fatima-lobo-89a442332/",
    // },
    // {
    //     img: img5,
    //     qr:img10,
    //     role: "Director- Sales",
    //     name: "Chaman Kumar",
    //     description: "A visionary with a successful 25-year corporate career. Worked in Banks and NBFC institutions in sales & Business Development.",
    //     link: "https://www.linkedin.com/in/chaman-kumar-b3aa8528/",
    //
    // }
];


const Founders = ({icon = <PersonIcon/>}) => {
    return (
        <Box sx={{padding: '0 0 96px 0'}}>
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
                            lg: '2.125rem',
                        },
                        color: '#012765',
                        textAlign: 'center',
                        fontWeight: 700,
                        mb: 8,
                    }}
                >
                    Founders
                </Typography>
                {/*<Typography*/}
                {/*    sx={{*/}
                {/*        maxWidth: 700,*/}
                {/*        mx: 'auto',*/}
                {/*        mb: 8,*/}
                {/*        fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },*/}
                {/*        color: '#4B5563',*/}
                {/*        textAlign: 'center',*/}
                {/*        lineHeight: '25px',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    From therapeutic counseling to business strategy and tech-driven support, our team brings heart, experience, and expertise to guide you on your wellness journey*/}
                {/*</Typography>*/}

                <Grid container spacing={3}>
                    {founders.map((founder, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <StyledPaper>
                                <AvatarWrapper className="avatar-wrapper">
                                    <StyledAvatar>
                                        {founder.img ? (
                                            <img
                                                src={founder.img}
                                                alt={founder.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                        ) : (
                                            icon
                                        )}
                                    </StyledAvatar>
                                </AvatarWrapper>

                                <Role>{founder.role}</Role>
                                <Name>{founder.name}</Name>
                                <Description>{founder.description}</Description>
                                {founder.link && (
                                    <Box sx={{mt: 2, display: 'flex', justifyContent: 'center'}}>
                                        <Box
                                            component="a"
                                            href={founder.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: '50%',
                                                backgroundColor: '#002D62',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: '0.3s',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#001f44',
                                                },
                                            }}
                                        >
                                            <LinkedIn sx={{fontSize: 28}}/>
                                        </Box>
                                    </Box>
                                )}
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Founders;
