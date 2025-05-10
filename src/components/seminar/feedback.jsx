import { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Card,
    CardContent,
    Avatar,
    Rating,
    Divider,
    Button,
    TextField,
    Tab,
    Tabs,
    IconButton,
    Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterListIcon from '@mui/icons-material/FilterList';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';

// Custom theme colors to match Emotionally Yours website
const theme = {
    palette: {
        primary: {
            main: '#002B5B', // Dark blue from website
            light: '#3D5A80'
        },
        secondary: {
            main: '#FF7D00', // Orange from website
            light: '#FFB74D'
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff'
        },
        text: {
            primary: '#333333',
            secondary: '#666666'
        }
    }
};

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: theme.palette.secondary.main,
    }
});

const StyledQuoteIcon = styled(FormatQuoteIcon)({
    color: '#E0E0E0',
    fontSize: '2.5rem',
    transform: 'rotate(180deg)'
});

const StyledFilterChip = styled(Chip)(({ selected }) => ({
    margin: '0 4px',
    fontWeight: 'medium',
    backgroundColor: selected ? theme.palette.secondary.main : '#f0f0f0',
    color: selected ? 'white' : theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: selected ? theme.palette.secondary.light : '#e0e0e0',
    }
}));

const StyledPaginationButton = styled(IconButton)({
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    },
    '&.Mui-disabled': {
        backgroundColor: '#f0f0f0',
    }
});

const Feedback = () => {
    const [tabValue, setTabValue] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [feedbackForm, setFeedbackForm] = useState({
        name: '',
        email: '',
        seminarId: '',
        rating: 5,
        comment: ''
    });

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setCurrentPage(0);
    };

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => prev - 1);
    };

    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedbackForm({ ...feedbackForm, [name]: value });
    };

    const handleRatingChange = (event, newValue) => {
        setFeedbackForm({ ...feedbackForm, rating: newValue });
    };

    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', feedbackForm);
        alert("Thank you for your feedback! It helps us improve our seminars.");
        setFeedbackForm({
            name: '',
            email: '',
            seminarId: '',
            rating: 5,
            comment: ''
        });
    };

    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            role: "HR Manager, Tech Solutions",
            rating: 5,
            date: "April 15, 2025",
            comment: "The 'Building Emotional Resilience' workshop transformed our team's approach to stress management. Our productivity has improved significantly, and the team is much more collaborative now.",
            image: null, // You can add profile image URLs here
            seminar: "Building Emotional Resilience in the Workplace",
            category: "Workplace Wellness"
        },
        {
            id: 2,
            name: "Sunita Patel",
            role: "Principal, DPS School",
            rating: 5,
            date: "March 28, 2025",
            comment: "Dr. Rajan's insights on emotional intelligence have been invaluable for our teachers. The practical techniques shared are now being implemented in classrooms with excellent results.",
            image: null,
            seminar: "Emotional Intelligence for K-12 Educators",
            category: "Education"
        },
        {
            id: 3,
            name: "Arjun Singh",
            role: "UPSC Aspirant",
            rating: 4,
            date: "February 18, 2025",
            comment: "The mindfulness techniques taught in the seminar helped me maintain focus during my preparation. The stress management strategies were particularly helpful during my interview preparation.",
            image: null,
            seminar: "Managing Stress for UPSC Aspirants",
            category: "Student Wellness"
        },
        {
            id: 4,
            name: "Meera Desai",
            role: "Team Lead, Infosys",
            rating: 5,
            date: "April 2, 2025",
            comment: "Vikram's leadership seminar was eye-opening. I've implemented several strategies with my team, and we're already seeing improved communication and team cohesion.",
            image: null,
            seminar: "Leadership and Emotional Wellness",
            category: "Leadership"
        },
        {
            id: 5,
            name: "Ramesh Patel",
            role: "Farmer, Nashik",
            rating: 5,
            date: "April 14, 2025",
            comment: "I never thought emotional wellness was important for farmers like us. This seminar changed my perspective and has helped me cope with the seasonal stresses of farming.",
            image: null,
            seminar: "Emotional Wellness for Farmers",
            category: "Community Wellness"
        },
        {
            id: 6,
            name: "Priya Sharma",
            role: "Parent & IT Professional",
            rating: 4,
            date: "March 30, 2025",
            comment: "The parent-teacher workshop provided excellent frameworks for supporting children's emotional development. Now I better understand how to communicate with both my child and their teachers.",
            image: null,
            seminar: "Parent-Teacher Emotional Intelligence Workshop",
            category: "Education"
        }
    ];

    // Sample past seminars for dropdown
    const pastSeminars = [
        { id: 1, title: "Building Emotional Resilience in the Workplace" },
        { id: 2, title: "Emotional Intelligence for K-12 Educators" },
        { id: 3, title: "Managing Stress for UPSC Aspirants" },
        { id: 4, title: "Leadership and Emotional Wellness" },
        { id: 5, title: "Emotional Wellness for Farmers" },
        { id: 6, title: "Parent-Teacher Emotional Intelligence Workshop" },
    ];

    // Filter testimonials based on selected category
    const filteredTestimonials = selectedCategory === 'All'
        ? testimonials
        : testimonials.filter(t => t.category === selectedCategory);

    // Paginate testimonials - 3 per page
    const testimonialsPerPage = 3;
    const pageCount = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
    const displayedTestimonials = filteredTestimonials.slice(
        currentPage * testimonialsPerPage,
        (currentPage + 1) * testimonialsPerPage
    );

    // All unique categories for filter
    const categories = ['All', ...new Set(testimonials.map(t => t.category))];

    return (
        <Box sx={{ pt: 10, mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' } }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h2" gutterBottom sx={{
                        letterSpacing: '-1px',
                        fontSize: {
                            xs: '1.7rem',
                            sm: '1.85rem',
                            md: '2rem',
                            lg: '2.125rem'
                        },
                        color: '#012765',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        fontFamily: 'Montserrat',
                        mb: 1,
                    }}>
                        Seminar Success Stories
                    </Typography>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary, maxWidth: '800px', mx: 'auto', mb: 3 }}>
                        See how our seminars are making a difference in various communities
                    </Typography>

                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        centered
                        sx={{
                            '& .MuiTab-root': {
                                fontWeight: 'medium',
                                fontSize: '1rem',
                                color: theme.palette.text.secondary,
                                '&.Mui-selected': {
                                    color: theme.palette.secondary.main
                                }
                            },
                            borderBottom: 1,
                            borderColor: 'divider',
                            maxWidth: 500,
                            margin: '0 auto',
                            mb: 4
                        }}
                    >
                        <Tab label="Testimonials" />
                        <Tab label="Share Feedback" />
                    </Tabs>
                </Box>

                {tabValue === 0 && (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Button
                                startIcon={<FilterListIcon />}
                                onClick={() => setShowFilters(!showFilters)}
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                Filter by Category
                            </Button>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <StyledPaginationButton
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 0}
                                    size="small"
                                >
                                    <ArrowBackIosNewIcon fontSize="small" />
                                </StyledPaginationButton>
                                <Typography variant="body2" sx={{ mx: 2 }}>
                                    {currentPage + 1} / {pageCount}
                                </Typography>
                                <StyledPaginationButton
                                    onClick={handleNextPage}
                                    disabled={currentPage >= pageCount - 1}
                                    size="small"
                                >
                                    <ArrowForwardIosIcon fontSize="small" />
                                </StyledPaginationButton>
                            </Box>
                        </Box>

                        {showFilters && (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 3, justifyContent: 'center' }}>
                                {categories.map(category => (
                                    <StyledFilterChip
                                        key={category}
                                        label={category}
                                        clickable
                                        selected={selectedCategory === category}
                                        onClick={() => handleCategoryFilter(category)}
                                    />
                                ))}
                            </Box>
                        )}

                        <Grid container spacing={3}>
                            {displayedTestimonials.map((testimonial) => (
                                <Grid item xs={12} md={4} key={testimonial.id}>
                                    <Card elevation={2} sx={{ height: '100%', borderRadius: 2 }}>
                                        <CardContent sx={{ position: 'relative', pt: 4, pb: 3 }}>
                                            <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                                                <StyledQuoteIcon />
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, mt: 2 }}>
                                                <Chip
                                                    label={testimonial.category}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: theme.palette.primary.light,
                                                        color: 'white',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <EventIcon sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mr: 0.5 }} />
                                                    <Typography variant="caption" color="text.secondary">
                                                        {testimonial.date}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Typography variant="body1" color="text.primary" sx={{ mb: 3, fontStyle: 'italic' }}>
                                                "{testimonial.comment}"
                                            </Typography>

                                            <Divider sx={{ my: 2 }} />

                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar
                                                    src={testimonial.image}
                                                    sx={{
                                                        bgcolor: theme.palette.secondary.main,
                                                        width: 48,
                                                        height: 48,
                                                        mr: 2
                                                    }}
                                                >
                                                    {testimonial.name.charAt(0)}
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="subtitle1" fontWeight="medium">
                                                        {testimonial.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {testimonial.role}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ ml: 'auto' }}>
                                                    <StyledRating
                                                        value={testimonial.rating}
                                                        readOnly
                                                        size="small"
                                                        icon={<StarIcon fontSize="inherit" />}
                                                        emptyIcon={<StarIcon fontSize="inherit" />}
                                                    />
                                                </Box>
                                            </Box>

                                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2, fontStyle: 'italic' }}>
                                                Re: {testimonial.seminar}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}

                {tabValue === 1 && (
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 'medium' }}>
                                    Share Your Experience
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    Your feedback helps us improve our seminars and workshops. Please share your thoughts about a seminar you attended.
                                </Typography>

                                <form onSubmit={handleSubmitFeedback}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={feedbackForm.name}
                                                onChange={handleFeedbackChange}
                                                margin="normal"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={feedbackForm.email}
                                                onChange={handleFeedbackChange}
                                                margin="normal"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                select
                                                fullWidth
                                                label="Select Seminar"
                                                name="seminarId"
                                                value={feedbackForm.seminarId}
                                                onChange={handleFeedbackChange}
                                                margin="normal"
                                                required
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                <option value="">Select a seminar you attended</option>
                                                {pastSeminars.map((seminar) => (
                                                    <option key={seminar.id} value={seminar.id}>
                                                        {seminar.title}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box sx={{ mb: 1 }}>
                                                <Typography component="legend" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                                                    Rate your experience
                                                </Typography>
                                                <StyledRating
                                                    name="rating"
                                                    value={feedbackForm.rating}
                                                    onChange={handleRatingChange}
                                                    precision={1}
                                                    icon={<StarIcon fontSize="inherit" />}
                                                    emptyIcon={<StarIcon fontSize="inherit" />}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Your Feedback"
                                                name="comment"
                                                value={feedbackForm.comment}
                                                onChange={handleFeedbackChange}
                                                margin="normal"
                                                required
                                                multiline
                                                rows={4}
                                                placeholder="Please share your experience, what you learned, and any suggestions for improvement."
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                    mt: 2,
                                                    py: 1.5,
                                                    bgcolor: theme.palette.secondary.main,
                                                    '&:hover': {
                                                        bgcolor: theme.palette.secondary.light
                                                    },
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Submit Feedback
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, bgcolor: theme.palette.primary.main, color: 'white', mb: 4 }}>
                                <Typography variant="h6" gutterBottom fontWeight="medium">
                                    Why Your Feedback Matters
                                </Typography>
                                <Typography variant="body2" paragraph>
                                    Your insights help us continually improve our seminars to better serve our community's emotional wellness needs.
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                                    <Box sx={{
                                        bgcolor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        width: 32,
                                        height: 32,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 2
                                    }}>
                                        <Typography variant="body1" fontWeight="bold">1</Typography>
                                    </Box>
                                    <Typography variant="body2">
                                        Helps us improve content and delivery
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                                    <Box sx={{
                                        bgcolor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        width: 32,
                                        height: 32,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 2
                                    }}>
                                        <Typography variant="body1" fontWeight="bold">2</Typography>
                                    </Box>
                                    <Typography variant="body2">
                                        Identifies new topics of interest
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                                    <Box sx={{
                                        bgcolor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        width: 32,
                                        height: 32,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 2
                                    }}>
                                        <Typography variant="body1" fontWeight="bold">3</Typography>
                                    </Box>
                                    <Typography variant="body2">
                                        Allows us to better support your journey
                                    </Typography>
                                </Box>
                            </Paper>

                            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 'medium' }}>
                                    Upcoming Featured Seminar
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <EventIcon fontSize="small" sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                                    <Typography variant="body2" fontWeight="medium">
                                        May 25, 2025 | 10:00 AM - 12:00 PM
                                    </Typography>
                                </Box>
                                <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                                    Building Emotional Resilience in the Workplace
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    Learn strategies to manage stress and build emotional resilience in high-pressure workplace environments.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.primary.main,
                                        borderColor: theme.palette.primary.main,
                                        '&:hover': {
                                            borderColor: theme.palette.primary.light,
                                            bgcolor: 'rgba(0,43,91,0.04)'
                                        }
                                    }}
                                >
                                    Register Now
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default Feedback;