import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../../assets/images/about/Founder/founders.jpeg';

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
    marginTop: "12%",
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
                    }}>Founder's Note</Box>
                <MainContent>
                    <ImageSection>
                        <img src={img1} alt="Chaman Kumar" />
                    </ImageSection>
                    <TextSection>
                        <Quote>
                            "Emotionally Yours" began as our own search for healing, now, it’s a space where others can feel seen, heard, and held too."                        </Quote>
                        <Text>Namaste!</Text>
                        <Text  sx={{textAlign:" justify"}}>
                            At Emotionally Yours, we began our journey with a core belief: Emotional Wellness is not a luxury, it’s the foundation for personal, academic and professional success. I a world that is constantly accelerating, where academic pressure weighs heavy on young minds and workplace stress silently drains potential, we felt the need to intervene meaningfully and mindfully.
                        </Text>
                        <Text  sx={{textAlign:" justify"}}>
                            The SHAPE and ESOP programs were born out of lived experiences, research and countless conversations with students, teachers, professionals and leaders across sectors.

                        </Text>
                        <Text  sx={{textAlign:" justify"}}>
                            Through SHAPE (Student’s Health Assessment & Performance Evaluation), we aim to empower academic institutions with structured emotional wellness support on a reinforcement model. This is not just about stress relief or motivation; it’s about equipping the students and the ecosystem around them with tools to manage academic pressure, enhance focus, tke informed career choices and foster meaning relationships.

                        </Text >
                        <Text sx={{textAlign:" justify"}}>
                            Our ESOP (Employee’s Self Ownership Program) was designed with similar philosophy, adapted to workplace. Organisations thrive when people do and yet, burnout, stagnation and disengagement are alarmingly common. ESOP does not offer a One-Size-Fits-ALL training; it identifies where each employee stands on the performance and engagement spectrum and offered targeted and human centric solutions, whether through Self-Assessments, Psychometric Tests, On-on-One Counselling or interactive workshops under leadership taskforces.

                        </Text>
                        <Text sx={{textAlign:" justify"}}>
                            As we continue to scale SHAPE and ESOP across geographies and sectors, our mission remains clear: to make emotional wellness a part of everyday language and leadership. Because when people feel well, they perform well. And when they perform well, they build a future that’s not just successful, but meaningful.

                        </Text>
                        <Text>Emotionally Yours</Text>
                        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Signature>
                                <Name>Pandey Nidhi</Name>
                                <Role>Founder & Director</Role>
                            </Signature>
                            <Signature>
                                <Name>Devesh Tripathi</Name>
                                <Role>Founder & CBO</Role>
                            </Signature>
                        </Box>
                    </TextSection>
                </MainContent>
            </Container>
        </Section>
    );
};

export default FoundersMessage;
