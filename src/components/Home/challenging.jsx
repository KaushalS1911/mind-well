import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Paper,
    Grid,
    Card,
    CardContent,
    Avatar,
    Chip,
    CardMedia,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AlarmIcon from '@mui/icons-material/Alarm';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import img from '../../assets/images/Home/why-choose-us/why-choose-us.jpg'

const Challenging = () => {
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
        <Box sx={{ padding:"96px 0" }}>
            <Container maxWidth="xl" >
                <Box textAlign="center" mb={2}>
                    <Typography className={'Montserrat'} variant="h4" gutterBottom  sx={{
                        fontSize: { xs: '32px', md: '40px' },
                        marginBottom: "16px",
                        lineHeight: 0.6,
                        display: "flex",
                        justifyContent: "center",
                        color: "#012765",
                        fontWeight: 700
                    }}>
                        The wellbeing journey can be challenging,
                    </Typography>
                    <Typography variant="h3" className={'Montserrat'} sx={{
                        fontSize: { xs: '32px', md: '40px' },
                        marginBottom: "16px",
                        display: "flex",
                        justifyContent: "center",
                        color: "#012765",
                        fontWeight: 700
                    }}>
                        but here's how we can make it easier.
                    </Typography>
                </Box>

                <Box textAlign="center" mb={6} px={2}>
                    <Typography variant="h6" component="p" sx={{ color: '#555', fontWeight: 400 }}>
                        Choose from a variety of wellness plans tailored to your needs.
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ color: '#555', fontWeight: 400 }}>
                        Each plan includes personalised goals and expert guidance to help you achieve optimal well-being.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Left side - Featured content card */}
                    <Grid item xs={12} md={6}>
                        <Card elevation={1} sx={{ borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                            <Box>
                                <img src={img} alt="" />
                            </Box>
                        </Card>
                    </Grid>

                    {/* Right side - Category list */}
                    <Grid item xs={12} md={6}>
                        <List>
                            {categories.map((category) => {
                                const isSelected = category.name === selectedCategory;

                                return (
                                    <Box key={category.name} sx={{ mb: 2 }}>
                                        {/* Title */}
                                        <ListItem disablePadding>
                                            <Paper
                                                elevation={0}
                                                onClick={() =>
                                                    setSelectedCategory(prev =>
                                                        prev === category.name ? null : category.name
                                                    )
                                                }
                                                sx={{
                                                    width: '100%',
                                                    p: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    bgcolor: isSelected ? '#f0f7ff' : 'white',
                                                    boxShadow: '0 2px 8px -1px rgba(0, 0, 0, 0.15)',
                                                    cursor: 'pointer',
                                                    transition: 'background 0.2s',
                                                    '&:hover': {
                                                        bgcolor: isSelected ? '#f0f7ff' : '#f9f9f9',
                                                    },
                                                }}
                                            >
                                                <ListItemIcon>
                                                    <Avatar sx={{ bgcolor: category.color }}>
                                                        {category.icon}
                                                    </Avatar>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography fontWeight={500} fontSize={22} color="#333">
                                                            {category.name}
                                                        </Typography>
                                                    }
                                                />
                                            </Paper>
                                        </ListItem>

                                        {/* Expanding content */}
                                        <Collapse in={isSelected} timeout="auto" unmountOnExit>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    width: '100%',
                                                    padding: '0 20px 14px 20px',
                                                    bgcolor: '#f0f7ff',
                                                    transition: 'all 0.3s ease-in-out'
                                                }}
                                            >
                                                <Typography fontSize={18}>
                                                    {category.content}
                                                </Typography>
                                            </Paper>
                                        </Collapse>
                                    </Box>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Challenging;
