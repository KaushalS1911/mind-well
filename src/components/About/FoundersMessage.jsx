import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../../assets/images/about/Founder/Chaman Kumar.png';

const Section = styled(Box)(({ theme }) => ({
    padding: '60px 0',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
        padding: '40px 16px',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#012765',
    marginBottom: '40px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}));

const MainContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '24px',
    },
}));

const ImageSection = styled(Box)(({ theme }) => ({
    flex: '0 0 300px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        flex: 'none',
    },
    '& img': {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
}));

const TextSection = styled(Box)({
    flex: 1,
});

const Quote = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    color: '#FF7F1E',
    fontStyle: 'italic',
    marginBottom: '24px',
    padding: '0 20px',
    borderLeft: '3px solid #FF7F1E',
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        padding: '0 12px',
    },
}));

const Text = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#4B5563',
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
    },
}));

const Signature = styled(Box)({
    marginTop: '32px',
});

const Name = styled(Typography)({
    fontSize: '18px',
    fontWeight: 600,
    color: '#012765',
});

const Role = styled(Typography)({
    fontSize: '14px',
    color: '#FF7F1E',
});

const FoundersMessage = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Section>
            <Container maxWidth="xl">
                <Box
                    className="Montserrat"
                    sx={{
                        fontSize: {
                            xs: '1.7rem',
                            sm: '1.85rem',
                            md: '2rem',
                            lg: '2.125rem'
                        },
                        marginBottom: "16px",
                        lineHeight: "40px",
                        display: "flex",
                        justifyContent: "center",
                        color: "#012765",
                        fontWeight: "700",
                        textAlign: "center",
                        mb:5
                    }}>Founder's Message</Box>
                <MainContent>
                    <ImageSection>
                        <img src={img1} alt="Chaman Kumar" />
                    </ImageSection>
                    <TextSection>
                        <Quote>
                            "Empowering Mindsets, Shaping Futures – Your Role in Building a Productive Nation"
                        </Quote>
                        <Text>Dear Team,</Text>
                        <Text>
                            As sales professionals and brand ambassadors of "Emotionally Yours" and our flagship
                            offerings – SHAPE, SHAPE+, and ESOP – you hold the key to unlocking a powerful
                            transformation in the minds of today's students and workforce to build a positive
                            mindset to help nations in the journey of a "developed nation".
                        </Text>
                        <Text>
                            These programs aren't just products; they are purpose-driven solutions designed to
                            address the core emotional and psychological needs that drive individuals'
                            productivity, performance, and purpose.
                        </Text>
                        <Text>
                            SHAPE helps students build self-awareness, emotional resilience, and growth-oriented
                            habits.
                        </Text>
                        <Text>
                            SHAPE+ strengthens aspirants and young adults in their transitional phases, instilling
                            confidence, clarity, and emotional agility.
                        </Text>
                        <Text>
                            ESOP supports organizations by cultivating a wellness-first, emotionally intelligent
                            workforce ready to thrive in demanding business environments.
                        </Text>
                        <Text>
                            Through your outreach efforts, you're not just selling a program – you're contributing
                            to a national mission: building a stronger, more productive future by nurturing
                            healthier mindsets from school to the workplace.
                        </Text>
                        <Text>Let's lead with empathy, insight, and conviction. The change begins with you.</Text>
                        <Text>Warm Regards,</Text>
                        <Signature>
                            <Name>Chaman Kumar</Name>
                            <Role>Director and Chief Sales Officer</Role>
                            <Role>Emotionally Yours</Role>
                        </Signature>
                    </TextSection>
                </MainContent>
            </Container>
        </Section>
    );
};

export default FoundersMessage;
