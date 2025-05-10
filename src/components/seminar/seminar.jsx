import { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Button,
    Tabs,
    Tab,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    LinearProgress,
    Divider,
    Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

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
        text: {
            primary: '#333333',
            secondary: '#666666'
        }
    }
};

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '4px',
    padding: '8px 24px',
    fontWeight: 'bold',
}));

const StyledChip = styled(Chip)(({ categoryColor }) => ({
    marginBottom: '8px',
    backgroundColor: categoryColor || theme.palette.primary.light,
    color: '#ffffff',
    fontWeight: 'medium',
}));

const Seminar = () => {
    const [tabValue, setTabValue] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedSeminar, setSelectedSeminar] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: ''
    });Seminar

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleOpenDialog = (seminar) => {
        setSelectedSeminar(seminar);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Registration submitted:', formData);
        alert("Thank you for registering! We'll send confirmation details to your email shortly.");
        setOpenDialog(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: ''
        });
    };

    const getCategoryColor = (category) => {
        const colors = {
            "Workplace Wellness": "#3D5A80", // Blue
            "Education": "#2E8B57", // Green
            "Student Wellness": "#8A2BE2", // Purple
            "Leadership": "#FF7D00", // Orange
            "Community Wellness": "#DC3545" // Red
        };
        return colors[category] || "#666666";
    };

    const upcomingSeminars = [
        {
            id: 1,
            title: "Building Emotional Resilience in the Workplace",
            date: "May 25, 2025",
            time: "10:00 AM - 12:00 PM",
            location: "Virtual",
            facilitator: "Dr. Ananya Sharma",
            category: "Workplace Wellness",
            description: "Learn strategies to manage stress and build emotional resilience in high-pressure workplace environments.",
            spots: 30,
            spotsLeft: 12,
        },
        {
            id: 2,
            title: "Emotional Intelligence for K-12 Educators",
            date: "June 2, 2025",
            time: "3:00 PM - 5:00 PM",
            location: "Mumbai Office",
            facilitator: "Dr. Rajan Mehta",
            category: "Education",
            description: "A focused workshop for teachers to develop emotional intelligence skills they can incorporate into their classroom practices.",
            spots: 25,
            spotsLeft: 8,
        },
        {
            id: 3,
            title: "Mindfulness Practices for Exam Preparation",
            date: "June 10, 2025",
            time: "4:00 PM - 6:00 PM",
            location: "Virtual",
            facilitator: "Ms. Priya Desai",
            category: "Student Wellness",
            description: "Equip aspirants with mindfulness techniques specifically designed to manage exam-related stress and anxiety.",
            spots: 50,
            spotsLeft: 23,
        },
        {
            id: 4,
            title: "Leadership and Emotional Wellness",
            date: "June 15, 2025",
            time: "9:00 AM - 12:00 PM",
            location: "Delhi Office",
            facilitator: "Mr. Vikram Singh",
            category: "Leadership",
            description: "Exploring the connection between emotional wellness and effective leadership in organizations.",
            spots: 20,
            spotsLeft: 5,
        }
    ];

    const pastSeminars = [
        {
            id: 101,
            title: "Emotional Wellness for Farmers",
            date: "April 12, 2025",
            location: "Rural Development Center, Pune",
            category: "Community Wellness",
            participants: 45,
        },
        {
            id: 102,
            title: "Parent-Teacher Emotional Intelligence Workshop",
            date: "March 28, 2025",
            location: "IES School, Thane",
            category: "Education",
            participants: 32,
        },
        {
            id: 103,
            title: "Managing Stress for UPSC Aspirants",
            date: "February 15, 2025",
            location: "Drishti IAS, New Delhi",
            category: "Student Wellness",
            participants: 65,
        },
    ];

    return (
        <Box sx={{  pt: 20,mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' } }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h2" gutterBottom sx={{letterSpacing: '-1px',
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
                        mb: 3,}}>
                        Seminars & Workshops
                    </Typography>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary, maxWidth: '800px', mx: 'auto' }}>
                        Join our expert-led sessions designed to enhance emotional intelligence and mental wellness across various domains.
                    </Typography>
                </Box>

                <Paper elevation={0} sx={{ bgcolor: 'white', borderRadius: 2 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="secondary"
                        textColor="inherit"
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
                            borderColor: 'divider'
                        }}
                    >
                        <Tab label="Upcoming Seminars" sx={{ width: '50%' }} />
                        <Tab label="Past Seminars" sx={{ width: '50%' }} />
                    </Tabs>

                    <Box sx={{ p: 3 }}>
                        {tabValue === 0 && (
                            <Grid container spacing={3}>
                                {upcomingSeminars.map((seminar) => (
                                    <Grid item xs={12} lg={6} key={seminar.id}>
                                        <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                    <Box>
                                                        <StyledChip
                                                            label={seminar.category}
                                                            size="small"
                                                            categoryColor={getCategoryColor(seminar.category)}
                                                        />
                                                        <Typography variant="h6" component="h3" gutterBottom>
                                                            {seminar.title}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ textAlign: 'right' }}>
                                                        <Typography variant="subtitle2" sx={{ fontWeight: 'medium' }}>
                                                            {seminar.date}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {seminar.time}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                    {seminar.description}
                                                </Typography>

                                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <PersonIcon fontSize="small" color="action" />
                                                        <Typography variant="body2" color="text.secondary">
                                                            {seminar.facilitator}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <LocationOnIcon fontSize="small" color="action" />
                                                        <Typography variant="body2" color="text.secondary">
                                                            {seminar.location}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <Box sx={{ mt: 2 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, justifyContent: 'space-between' }}>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Available Spots
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {seminar.spotsLeft}/{seminar.spots}
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={(seminar.spotsLeft / seminar.spots) * 100}
                                                        sx={{
                                                            height: 8,
                                                            borderRadius: 1,
                                                            backgroundColor: '#e0e0e0',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: theme.palette.secondary.main
                                                            }
                                                        }}
                                                    />
                                                </Box>
                                            </CardContent>
                                            <CardActions sx={{ px: 2, pb: 2 }}>
                                                <StyledButton
                                                    variant="contained"
                                                    onClick={() => handleOpenDialog(seminar)}
                                                    sx={{
                                                        bgcolor: theme.palette.primary.main,
                                                        '&:hover': {
                                                            bgcolor: theme.palette.primary.light
                                                        }
                                                    }}
                                                >
                                                    Register Now
                                                </StyledButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}

                        {tabValue === 1 && (
                            <Grid container spacing={3}>
                                {pastSeminars.map((seminar) => (
                                    <Grid item xs={12} sm={6} md={4} key={seminar.id}>
                                        <Card elevation={2} sx={{ height: '100%', borderRadius: 2 }}>
                                            <CardContent>
                                                <StyledChip
                                                    label={seminar.category}
                                                    size="small"
                                                    categoryColor={getCategoryColor(seminar.category)}
                                                />
                                                <Typography variant="h6" component="h3" gutterBottom>
                                                    {seminar.title}
                                                </Typography>

                                                <Stack spacing={1} sx={{ mt: 2 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <EventIcon fontSize="small" color="action" />
                                                        <Typography variant="body2" color="text.secondary">
                                                            {seminar.date}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <LocationOnIcon fontSize="small" color="action" />
                                                        <Typography variant="body2" color="text.secondary">
                                                            {seminar.location}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <GroupIcon fontSize="small" color="action" />
                                                        <Typography variant="body2" color="text.secondary">
                                                            Participants: {seminar.participants}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                            <CardActions sx={{ px: 2, pb: 2 }}>
                                                <Button
                                                    variant="outlined"
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        borderColor: theme.palette.primary.main
                                                    }}
                                                >
                                                    View Resources
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>
                </Paper>

                {/* Call to Action */}
                <Paper
                    elevation={3}
                    sx={{
                        mt: 6,
                        p: 4,
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        borderRadius: 2
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
                                Looking for a custom seminar?
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ color: theme.palette.secondary.light, mb: 2 }}>
                                Get in touch with our team.
                            </Typography>
                            <Typography variant="body1">
                                We offer tailored sessions for schools, organizations, and aspirant coaching centers.
                                Our expert psychologists can design content specific to your needs.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2 }}>
                                <Typography variant="subtitle1" sx={{ mb: 2, color: theme.palette.text.primary }}>
                                    Request Information
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    size="small"
                                    sx={{ mb: 2 }}
                                />
                                <StyledButton
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        bgcolor: theme.palette.secondary.main,
                                        '&:hover': {
                                            bgcolor: theme.palette.secondary.light
                                        }
                                    }}
                                >
                                    Request Info
                                </StyledButton>
                                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: theme.palette.text.secondary }}>
                                    We care about your data. Read our Privacy Policy.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* Registration Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ borderBottom: '1px solid #e0e0e0', pb: 2 }}>
                    Register for Seminar
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                    {selectedSeminar && (
                        <Box>
                            <DialogContentText component="div">
                                <Typography variant="subtitle1" fontWeight="medium">
                                    {selectedSeminar.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {selectedSeminar.date} | {selectedSeminar.time}
                                </Typography>
                            </DialogContentText>
                            <Box sx={{ mt: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="Organization/School (Optional)"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                            </Box>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions sx={{ px: 3, py: 2, borderTop: '1px solid #e0e0e0' }}>
                    <Button onClick={handleCloseDialog} sx={{ color: theme.palette.text.secondary }}>
                        Cancel
                    </Button>
                    <StyledButton
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            '&:hover': {
                                bgcolor: theme.palette.primary.light
                            }
                        }}
                    >
                        Register
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Seminar;