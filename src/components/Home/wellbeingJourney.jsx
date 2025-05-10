import React, {useState, useEffect} from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    ListItemIcon,
    ListItemText,
    Collapse,
    IconButton,
    Avatar,
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

import img from '../../assets/images/Home/wellbeing-journey/Feeling Happier.jpg';
import img1 from '../../assets/images/Home/wellbeing-journey/Be Mindful.jpg';
import img2 from '../../assets/images/Home/wellbeing-journey/Reduce Worry.jpg';
import img3 from '../../assets/images/Home/wellbeing-journey/Manage Stress.jpg';
import img4 from '../../assets/images/Home/wellbeing-journey/Increase Productivity.jpg';
import img5 from '../../assets/images/Home/wellbeing-journey/Improve Sleep.jpg';

const WellbeingJourney = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const savedCategory = localStorage.getItem('selectedCategory');
        if (savedCategory) {
            setSelectedCategory(savedCategory);
        }
    }, []);

    const categories = [
        {
            name: 'Feel Happier',
            icon: <EmojiEmotionsIcon/>,
            color: '#a98bf5',
            content: 'Discover techniques and practices to boost your mood, increase positive emotions, and find more joy in everyday experiences.',
            image: img,
        },
        {
            name: 'Be Mindful',
            icon: <SpaIcon/>,
            color: '#84c77a',
            content: 'Learn mindfulness techniques to stay present, appreciate each moment, and develop a deeper awareness of yourself and your surroundings.',
            image: img1,
        },
        {
            name: 'Reduce Worry',
            icon: <PsychologyIcon/>,
            color: '#e8a87c',
            content: 'Find effective strategies to manage excessive worry, overcome anxious thoughts, and develop a more peaceful mindset.',
            image: img2,
        },
        {
            name: 'Manage Stress',
            icon: <SelfImprovementIcon/>,
            color: '#66c7d4',
            content: 'Explore friendly approaches to handling stress, finding ways to navigate life\'s challenges with resilience and a calm, balanced mindset.',
            image: img3,
        },
        {
            name: 'Increase Productivity',
            icon: <AlarmIcon/>,
            color: '#2dc692',
            content: 'Discover methods to enhance your focus, organize your tasks effectively, and accomplish your goals with greater efficiency and satisfaction.',
            image: img4,
        },
        {
            name: 'Improve Sleep',
            icon: <NightsStayIcon/>,
            color: '#4a77c5',
            content: 'Learn techniques for better sleep quality, establish healthy bedtime routines, and wake up feeling refreshed and energized.',
            image: img5,
        },
    ];

    const selectedImage = selectedCategory
        ? categories.find(cat => cat.name === selectedCategory)?.image
        : categories[0].image;

    return (
        <Box component="section" sx={{py: 8, mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }}}>
            <Container maxWidth="xl">
                <Box textAlign="center" mb={3}>
                    <Typography
                        variant="h4"
                        className="Montserrat"
                        sx={{
                            fontSize: {
                                xs: '1.7rem',
                                sm: '1.85rem',
                                md: '2rem',
                                lg: '2.125rem'
                            },
                            letterSpacing: '-1px',
                            color: '#012765',
                            fontWeight: 700,
                            mb: 1
                        }}
                    >Simplifying Emotional Wellbeing
                    </Typography>
                    {/*<Typography*/}
                    {/*    variant="h3"*/}
                    {/*    className="Montserrat"*/}
                    {/*    sx={{*/}
                    {/*        fontSize: { xs: '28px', sm: '34px', md: '42px', lg: '46px' },*/}
                    {/*        color: '#012765',*/}
                    {/*        fontWeight: 700*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    here’s how we simplify it*/}
                    {/*</Typography>*/}
                </Box>

                <Box textAlign="center" mb={6} px={2}>
                    <Typography
                        sx={{
                            color: '#555',
                            fontWeight: 400,
                            fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
                            lineHeight: '1.5',
                        }}
                    >
                        Select from a range of psychology-backed wellness plans tailored to your needs. Each plan offers personalized goals and expert-guided interventions to support your journey toward emotional and mental well-being.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{height: '512px', width: '100%', boxShadow: 3, borderRadius: 2}}>
                            <img
                                src={selectedImage}
                                alt="Selected category"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box>
                            {categories.map((category) => {
                                const isOpen = openCategory === category.name;

                                return (
                                    <Paper
                                        key={category.name}
                                        onClick={() => {
                                            const newIsOpen = openCategory === category.name ? null : category.name;
                                            setOpenCategory(newIsOpen);
                                            setSelectedCategory(category.name);
                                            localStorage.setItem('selectedCategory', category.name);
                                        }}
                                        sx={{
                                            mb: 2,
                                            p: 2,
                                            bgcolor: isOpen ? '#f0f7ff' : '#fff',
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                            transition: '0.3s',
                                        }}
                                    >
                                        <Box display="flex" alignItems="center">
                                            <ListItemIcon>
                                                <Avatar sx={{bgcolor: category.color}}>
                                                    {category.icon}
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography fontWeight={600} fontSize={16} color="#333">
                                                        {category.name}
                                                    </Typography>
                                                }
                                            />
                                            <IconButton edge="end" disableRipple>
                                                {isOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                            </IconButton>
                                        </Box>

                                        <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                            <Box sx={{mt: 2, pl: 2}}>
                                                <Typography fontSize={16} color="text.secondary">
                                                    {category.content}
                                                </Typography>
                                            </Box>
                                        </Collapse>
                                    </Paper>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WellbeingJourney;
