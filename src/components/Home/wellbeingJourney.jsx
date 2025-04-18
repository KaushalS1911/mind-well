import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    Avatar,
    List,
    ListItemIcon,
    ListItemText,
    Collapse,
    IconButton,
    Paper
} from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AlarmIcon from '@mui/icons-material/Alarm';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import img from '../../assets/images/Home/wellbeing journey/journey.jpg';

const WellbeingJourney = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            name: 'Feel Happier',
            icon: <EmojiEmotionsIcon />,
            color: '#a98bf5',
            content: 'Discover techniques and practices to boost your mood, increase positive emotions, and find more joy in everyday experiences.'
        },
        {
            name: 'Be Mindful',
            icon: <SpaIcon />,
            color: '#84c77a',
            content: 'Learn mindfulness techniques to stay present, appreciate each moment, and develop a deeper awareness of yourself and your surroundings.'
        },
        {
            name: 'Reduce Worry',
            icon: <PsychologyIcon />,
            color: '#e8a87c',
            content: 'Find effective strategies to manage excessive worry, overcome anxious thoughts, and develop a more peaceful mindset.'
        },
        {
            name: 'Manage Stress',
            icon: <SelfImprovementIcon />,
            color: '#66c7d4',
            content: 'Explore friendly approaches to handling stress, finding ways to navigate life\'s challenges with resilience and a calm, balanced mindset.'
        },
        {
            name: 'Increase Productivity',
            icon: <AlarmIcon />,
            color: '#2dc692',
            content: 'Discover methods to enhance your focus, organize your tasks effectively, and accomplish your goals with greater efficiency and satisfaction.'
        },
        {
            name: 'Improve Sleep',
            icon: <NightsStayIcon />,
            color: '#4a77c5',
            content: 'Learn techniques for better sleep quality, establish healthy bedtime routines, and wake up feeling refreshed and energized.'
        },
    ];

    return (
        <Box sx={{ py: 12 }}>
            <Container maxWidth="xl">
                <Box textAlign="center" mb={3}>
                    <Typography variant="h4" className="Montserrat" sx={{
                        fontSize: { xs: '32px', md: '40px' },
                        color: "#012765",
                        fontWeight: 700,
                        mb: 1
                    }}>
                        The wellbeing journey can be challenging,
                    </Typography>
                    <Typography variant="h3" className="Montserrat" sx={{
                        fontSize: { xs: '32px', md: '40px' },
                        color: "#012765",
                        fontWeight: 700
                    }}>
                        but here's how we can make it easier.
                    </Typography>
                </Box>

                <Box textAlign="center" mb={6} px={2}>
                    <Typography variant="h6" sx={{ color: '#555', fontWeight: 400 }}>
                        Choose from a variety of wellness plans tailored to your needs.
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#555', fontWeight: 400 }}>
                        Each plan includes personalised goals and expert guidance to help you achieve optimal well-being.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={img}
                                alt="Why choose us"
                                style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:"10px" }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <List>
                            {categories.map((category) => {
                                const isSelected = selectedCategory === category.name;

                                return (
                                    <Paper
                                        key={category.name}
                                        onClick={() =>
                                            setSelectedCategory(prev => prev === category.name ? null : category.name)
                                        }
                                        sx={{
                                            mb: 2,
                                            p: 2,
                                            bgcolor: isSelected ? '#f0f7ff' : '#fff',
                                            cursor: 'pointer',
                                            borderRadius: "10px",
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            transition: '0.3s',
                                        }}
                                    >
                                        <Box display="flex" alignItems="center">
                                            <ListItemIcon sx={{ minWidth: 48 }}>
                                                <Avatar sx={{ bgcolor: category.color }}>
                                                    {category.icon}
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography fontWeight={600} fontSize={20} color="#333">
                                                        {category.name}
                                                    </Typography>
                                                }
                                            />
                                            <IconButton edge="end" disableRipple>
                                                {isSelected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                            </IconButton>
                                        </Box>

                                        <Collapse in={isSelected} timeout="auto" unmountOnExit>
                                            <Box sx={{ mt: 2, pl: 2 }}>
                                                <Typography fontSize={16} color="text.secondary">
                                                    {category.content}
                                                </Typography>
                                            </Box>
                                        </Collapse>
                                    </Paper>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default WellbeingJourney;
