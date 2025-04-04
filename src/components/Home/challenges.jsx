import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    ListItem,
    styled
} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from "../../assets/images/Home/Herosection/home2.jpeg";
import img2 from "../../assets/images/Home/Herosection//home1.jpeg";
import img3 from "../../assets/images/Home/Herosection/home3.jpeg";

const StyledCard = styled(Card)(({theme}) => ({
    height: '100%',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
}));

const StyledListItem = styled(ListItem)({
    padding: '4px 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
});

const ChallengeCard = ({title, img, challenges}) => (
    <StyledCard sx={{p: 0}}>
        <Box sx={{
            height: '300px',
        }}>
            <img src={img} alt={"img"} style={{height: '100%', width: '100%', objectFit: "cover"}}/>
        </Box>
        <Box sx={{
            padding: '12px',
        }}>
            <Box sx={{
                fontSize: {xs: '18px', md: '20px'},
                color: "#012765",
                fontWeight: 700,
                my: 2,

            }}>
                {title}
            </Box>
            <Box>
                {challenges.map((challenge, index) => (
                    <StyledListItem key={index}>
                        <CheckCircleIcon sx={{
                            color: "#FE6A00",
                            fontSize: {xs: '18px', sm: '20px'},
                            mt: '2px'
                        }}/>
                        <Typography sx={{
                            fontSize: {xs: '14px', sm: '15px'},
                            color: '#012765',
                            lineHeight: 1.6
                        }}>
                            {challenge}
                        </Typography>
                    </StyledListItem>
                ))}
            </Box>
        </Box>
    </StyledCard>
);

const Challenges = () => {
    const categories = [
        {
            img: img1,
            title: 'Personal Challenges',
            image: '/path-to-personal-image.jpg',
            challenges: [
                'Anxiety & Stress',
                'Depression',
                'Self-Esteem Issues',
                'Trauma & PTSD',
                'Grief & Loss'
            ]
        },
        {
            img: img2,
            title: 'Relationship Issues',
            image: '/path-to-relationship-image.jpg',
            challenges: [
                'Couples Conflict',
                'Communication Problems',
                'Family Issues',
                'Parenting Challenges',
                'Trust Issues'
            ]
        },
        {
            img: img3,
            title: 'Professional Challenges',
            image: '/path-to-professional-image.jpg',
            challenges: [
                'Workplace Stress',
                'Career Transitions',
                'Burnout',
                'Work-Life Balance',
                'Academic Pressure'
            ]
        }
    ];

    return (
        <Container maxWidth="xl" sx={{py: {xs: 6, sm: 8}}}>
            <Box className={"Montserrat"}
                sx={{
                    fontSize: {xs: '26px', sm: '32px', md: '36px'},
                    fontWeight: 700,
                    color: "#012765",
                    mb: {xs: 4, sm: 6},
                    textAlign: 'center',
                }}
            >
                What Are You Struggling With?
            </Box>

            <Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ChallengeCard
                            title={category.title}
                            // image={category.image}
                            challenges={category.challenges}
                            img={category.img}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Challenges;
