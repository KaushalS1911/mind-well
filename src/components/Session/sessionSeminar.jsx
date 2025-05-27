import React, {useState} from 'react';
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
    DialogTitle,
    TextField,
    LinearProgress,
    Stack,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import img1 from '../../assets/images/session/colleagues-office-stretching-work-day.jpg';
import img2 from '../../assets/images/session/teacher-playing-with-kids.jpg';
import img3 from '../../assets/images/session/anonymous-girl-studying-brick-pavement.jpg';
import img4 from '../../assets/images/session/woman-office-stretching-work-day.jpg';
import img5 from '../../assets/images/session/asian-female-farmer.jpg';
import img6 from '../../assets/images/session/girl-with-down-syndrome-painting-with-colors.jpg';
import img7 from '../../assets/images/session/man-using-laptop-office-doing-document-analysis.jpg';
import img8 from '../../assets/images/session/medium-shot-young-people-church-praying.jpg';
import img9 from '../../assets/images/session/SingleSession/medium-shot-smiley-colleagues-sticking-post-its.jpg';
import img10 from '../../assets/images/session/SingleSession/medium-shot-woman-girl-playing-memory-game.jpg';
import img11 from '../../assets/images/session/SingleSession/apple-feather-near-drawing-supplies.jpg';
import img12 from '../../assets/images/session/SingleSession/low-angle-view-businessman-standing-front-building-outstretching-his-arms.jpg';
import img13 from '../../assets/images/session/SingleSession/man-looking-up-with-field-background.jpg';
import img14 from '../../assets/images/session/SingleSession/kids-being-part-sunday-school.jpg';
import img15 from '../../assets/images/session/SingleSession/educational-conept-tired-student-library.jpg';
import img16 from '../../assets/images/session/SingleSession/group-friends-encouraging-rehab-patient.jpg';
import {useNavigate} from "react-router-dom";

export const seminars = [
    {
        id: 1,
        title: 'Building Emotional Resilience in the Workplace',
        date: 'May 25, 2025',
        time: '10:00 AM - 12:00 PM',
        location: 'Virtual',
        facilitator: 'Dr. Ananya Sharma',
        category: 'Workplace Wellness',
        description:
            'Join this transformative workshop to master emotional resilience in high-pressure work environments. Learn evidence-based techniques like cognitive restructuring, stress mapping, and mindfulness to manage workplace challenges. Perfect for professionals aiming to boost mental clarity, productivity, and team collaboration.',
        spots: 30,
        spotsLeft: 12,
        image: img1,
        singleImage: img9,
        status: 'upcoming',
    },
    {
        id: 2,
        title: 'Emotional Intelligence for K-12 Educators',
        date: 'June 2, 2025',
        time: '3:00 PM - 5:00 PM',
        location: 'Mumbai Office',
        facilitator: 'Dr. Rajan Mehta',
        category: 'Education',
        description:
            'This engaging session empowers K-12 educators to harness emotional intelligence for better classroom dynamics. Explore strategies to foster empathy, manage conflicts, and create inclusive learning spaces. Includes hands-on activities, case studies, and practical tools to integrate EI into daily teaching.',
        spots: 25,
        spotsLeft: 8,
        image: img2,
        singleImage: img10,
        status: 'upcoming',
    },
    {
        id: 3,
        title: 'Mindfulness Practices for Exam Preparation',
        date: 'June 10, 2025',
        time: '4:00 PM - 6:00 PM',
        location: 'Virtual',
        facilitator: 'Ms. Priya Desai',
        category: 'Student Wellness',
        description:
            'Designed for students, this workshop teaches mindfulness techniques to conquer exam stress and enhance focus. Learn guided meditation, breathing exercises, and visualization methods to stay calm under pressure. Participants will craft a personalized mindfulness plan for exam success.',
        spots: 50,
        spotsLeft: 23,
        image: img3,
        singleImage: img11,
        status: 'upcoming',
    },
    {
        id: 4,
        title: 'Leadership and Emotional Wellness',
        date: 'June 15, 2025',
        time: '9:00 AM - 12:00 PM',
        location: 'Delhi Office',
        facilitator: 'Mr. Vikram Singh',
        category: 'Leadership',
        description:
            'Discover how emotional wellness fuels exceptional leadership in this immersive workshop. Topics include emotional regulation, empathetic decision-making, and building resilient teams. Through group discussions and practical exercises, leaders will gain tools to inspire and thrive in organizational settings.',
        spots: 20,
        spotsLeft: 5,
        image: img4,
        singleImage: img12,
        status: 'upcoming',
    },
    {
        id: 101,
        title: 'Emotional Wellness for Farmers',
        date: 'April 12, 2025',
        time: '9:00 AM - 12:00 PM',
        location: 'Rural Development Center, Pune',
        category: 'Community Wellness',
        description:
            'This impactful session equipped farmers with strategies to cope with stress in agricultural life. Participants explored mindfulness, peer support techniques, and emotional resilience tools through interactive discussions and practical exercises tailored to rural challenges.',
        participants: 45,
        image: img5,
        singleImage: img13,
        status: 'past',
    },
    {
        id: 102,
        title: 'Parent-Teacher Workshop',
        date: 'March 28, 2025',
        time: '9:00 AM - 12:00 PM',
        location: 'IES School, Thane',
        category: 'Education',
        description:
            'A collaborative workshop for parents and teachers to enhance emotional intelligence. The session focused on effective communication, empathy, and partnership-building, with role-playing activities to strengthen relationships for better student outcomes.',
        participants: 32,
        image: img6,
        singleImage: img14,
        status: 'past',
    },
    {
        id: 103,
        title: 'Managing Stress for UPSC Aspirants',
        time: '9:00 AM - 12:00 PM',
        date: 'February 15, 2025',
        location: 'Drishti IAS, New Delhi',
        category: 'Student Wellness',
        description:
            'Tailored for UPSC aspirants, this workshop provided stress management techniques to excel in high-pressure exam preparation. Participants learned mindfulness, time management, and emotional coping strategies to maintain focus and resilience.',
        participants: 65,
        image: img7,
        singleImage: img15,
        status: 'past',
    },
    {
        id: 104,
        title: 'Workplace Mental Health Awareness',
        date: 'May 2, 2025',
        time: '9:00 AM - 12:00 PM',
        location: 'TechHub, Bengaluru',
        category: 'Corporate Wellness',
        description:
            'This seminar focused on creating mentally healthy workplaces. HR professionals and employees explored strategies for reducing burnout, fostering a culture of openness, and implementing effective mental health policies through expert talks and group activities.',
        participants: 58,
        image: img8,
        singleImage: img16,
        status: 'past',
    },
];

const theme = {
    palette: {
        primary: {
            main: '#003087',
            light: '#4C6DBF',
        },
        secondary: {
            main: '#FF6200',
            light: '#FF8C00',
        },
        background: {
            default: '#F4F7FE',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#012765',
            secondary: '#4A5568',
        },
    },
    typography: {
        fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
        h1: {fontWeight: 700, letterSpacing: '-0.03em'},
        h5: {fontWeight: 600},
        body1: {fontSize: '1.1rem', lineHeight: 1.8},
        body2: {fontSize: '0.9rem', lineHeight: 1.6},
    },
};


const StyledButton = styled(Button)(({theme}) => ({
    borderRadius: '12px',
    padding: '14px 36px',
    fontWeight: 700,
    fontSize: '1.1rem',
    textTransform: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
}));

const StyledChip = styled(Chip)(({categoryColor}) => ({
    borderRadius: '8px',
    backgroundColor: categoryColor,
    color: '#fff',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '6px 12px',
    marginBottom: '20px',
}));

const StyledCard = styled(Card)(({theme}) => ({
    borderRadius: '20px',
    boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    height: "100%"
}));

const StyledTabs = styled(Tabs)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px 16px 0 0',
    padding: '8px',
    overflowX: 'auto',
    '& .MuiTab-root': {
        fontWeight: 700,
        fontSize: '1.2rem',
        padding: '16px 32px',
        color: theme.palette.text.secondary,
        textTransform: 'none',
        borderRadius: '12px',
        whiteSpace: 'nowrap',
        '&.Mui-selected': {
            color: theme.palette.primary.main,
            backgroundColor: '#E8EDFF',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            padding: '12px 16px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
            padding: '10px 12px',
        },
    },
    '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.primary.main,
        height: '6px',
        borderRadius: '4px',
    },
}));

const SeminarImage = styled('img')({
    width: '100%',
    height: '250px',
    objectFit: {xs: 'contain', sm: "cover"},
    borderRadius: '20px 20px 0 0',
});

const SessionSeminar = () => {
    const [tabValue, setTabValue] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedSeminar, setSelectedSeminar] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
    });
    const navigate = useNavigate();

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
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        console.log('Registration submitted:', formData);
        alert("Thank you for registering! We'll send confirmation details to your email shortly.");
        setOpenDialog(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
        });
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Workplace Wellness': '#4C6DBF',
            'Education': '#098051',
            'Student Wellness': '#9B2FAE',
            'Leadership': '#FF6200',
            'Community Wellness': '#D32F2F',
        };
        return colors[category] || '#6B7280';
    };

    return (
        <Box sx={{pt: {xs: 8, md: 18},}}>
            <Container maxWidth="xl">
                <Box sx={{
                    textAlign: 'center',
                    mb: {xs: 6, md: 10},
                    mx: {xs: '20px', sm: '70px', md: '90px', xl: '100px'},
                }}>
                    <Typography
                        className={"Montserrat"}
                        variant="h1"
                        component="h1"
                        sx={{
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
                            mb: 1,
                        }}
                    >
                        Sessions & Workshops
                    </Typography>
                    <Typography
                        variant="h6" sx={{color: theme.palette.text.secondary, maxWidth: '800px', mx: 'auto', mb: 3}}
                    >
                        Unlock your potential with our expert-led sessions on emotional intelligence, wellness, and
                        professional growth.
                    </Typography>
                </Box>

                <Paper sx={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)'}}>
                    <Box sx={{mx: {xs: "10px", sm: '40px', md: '90px', lg: "50px", xl: 'auto'}}}>
                        <StyledTabs value={tabValue} onChange={handleTabChange} variant="scrollable"
                                    scrollButtons="auto">
                            {/*<Tab label="Upcoming Session"/>*/}
                            {/*<Tab label="Past Session"/>*/}
                        </StyledTabs>

                        <Box sx={{p: {xs: 2, sm: 3, md: 4}}}>
                            {tabValue === 0 && (
                                <Grid container spacing={{xs: 2, sm: 3, md: 4}}>
                                    {seminars.filter(s => s.status === 'upcoming').map((seminar) => (
                                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}
                                               key={seminar.id}>
                                            <StyledCard
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <SeminarImage src={seminar.image} alt={seminar.title}/>
                                                <CardContent sx={{p: {xs: 2, sm: 3}}}>
                                                    <StyledChip
                                                        label={seminar.category}
                                                        categoryColor={getCategoryColor(seminar.category)}
                                                    />
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            my: 2,
                                                            fontWeight: 600,
                                                            color: theme.palette.text.primary,
                                                        }}
                                                    >
                                                        {seminar.title}
                                                    </Typography>

                                                    <Stack spacing={1.5} sx={{mb: 2}}>
                                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                            <EventIcon fontSize="small"
                                                                       sx={{color: theme.palette.text.secondary}}/>
                                                            <Typography variant="body2"
                                                                        sx={{color: theme.palette.text.secondary}}>
                                                                {seminar.date} | {seminar.time}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                            <LocationOnIcon fontSize="small"
                                                                            sx={{color: theme.palette.text.secondary}}/>
                                                            <Typography variant="body2"
                                                                        sx={{color: theme.palette.text.secondary}}>
                                                                {seminar.location}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                            <PersonIcon fontSize="small"
                                                                        sx={{color: theme.palette.text.secondary}}/>
                                                            <Typography variant="body2"
                                                                        sx={{color: theme.palette.text.secondary}}>
                                                                {seminar.facilitator}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>

                                                    <Box>
                                                        <CardActions sx={{px: {xs: 2, sm: 2}, pt: 0, mb: 2,  width: '100%', maxWidth: 300}}>
                                                            <StyledButton
                                                                variant="contained"
                                                                onClick={() => navigate(`/${seminar.id}/session`)}
                                                                fullWidth
                                                                sx={{
                                                                    bgcolor: 'rgba(255,98,0,0.9)',
                                                                    color: '#fff',
                                                                    fontWeight: 600,
                                                                    py: 1.25,
                                                                    fontSize: {xs: '0.9rem', sm: '1rem'},
                                                                }}
                                                            >
                                                                Register Now
                                                            </StyledButton>
                                                        </CardActions>

                                                        <Box sx={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            mb: 1
                                                        }}>
                                                            <Typography variant="body2" sx={{
                                                                fontWeight: 600,
                                                                color: theme.palette.text.secondary
                                                            }}>
                                                                Available Spots
                                                            </Typography>
                                                            <Typography variant="body2" sx={{
                                                                fontWeight: 600,
                                                                color: theme.palette.text.secondary
                                                            }}>
                                                                {seminar.spotsLeft}/{seminar.spots}
                                                            </Typography>
                                                        </Box>
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={(seminar.spotsLeft / seminar.spots) * 100}
                                                            sx={{
                                                                height: 8,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#E2E8F0',
                                                                '& .MuiLinearProgress-bar': {
                                                                    backgroundColor: theme.palette.secondary.main,
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}

                            {tabValue === 1 && (
                                <Grid container spacing={{xs: 2, sm: 3, md: 4}}>
                                    {seminars.filter(s => s.status === 'past').map((seminar) => (
                                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={seminar.id}
                                              onClick={() => navigate(`/${seminar.id}/session`)}
                                              style={{cursor: 'pointer'}}>
                                            <StyledCard
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <SeminarImage src={seminar.image} alt={seminar.title}/>
                                                <CardContent sx={{p: {xs: 2, sm: 3}}}>
                                                    <StyledChip
                                                        label={seminar.category}
                                                        categoryColor={getCategoryColor(seminar.category)}
                                                    />
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            my: 2,
                                                            fontWeight: 600,
                                                            color: theme.palette.text.primary,
                                                        }}
                                                    >
                                                        {seminar.title}
                                                    </Typography>

                                                    <Stack spacing={1.5}>
                                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                            <EventIcon fontSize="small"
                                                                       sx={{color: theme.palette.text.secondary}}/>
                                                            <Typography variant="body2"
                                                                        sx={{color: theme.palette.text.secondary}}>
                                                                {seminar.date}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                            <LocationOnIcon fontSize="small"
                                                                            sx={{color: theme.palette.text.secondary}}/>
                                                            <Typography variant="body2"
                                                                        sx={{color: theme.palette.text.secondary}}>
                                                                {seminar.location}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                                            <GroupIcon fontSize="small"
                                                                       sx={{color: theme.palette.text.secondary}}/>
                                                            <Typography variant="body2"
                                                                        sx={{color: theme.palette.text.secondary}}>
                                                                Participants: {seminar.participants}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </CardContent>
                                            </StyledCard>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Box>

                    </Box>
                </Paper>
            </Container>
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle
                    sx={{
                        bgcolor: theme.palette.background.paper,
                        py: 4,
                        px: 5,
                        fontWeight: 700,
                        fontSize: '1.75rem',
                        color: theme.palette.text.primary,
                    }}
                >
                    Register for Seminar
                </DialogTitle>
                <DialogContent sx={{p: 5, bgcolor: theme.palette.background.paper}}>
                    {selectedSeminar && (
                        <Box>
                            <Typography variant="h5" sx={{fontWeight: 600, mb: 2, color: theme.palette.text.primary}}>
                                {selectedSeminar.title}
                            </Typography>
                            <Typography variant="body2"
                                        sx={{mb: 4, color: theme.palette.text.secondary, fontSize: '1rem'}}>
                                {selectedSeminar.date} | {selectedSeminar.time} | {selectedSeminar.location}
                            </Typography>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                margin="normal"
                                required
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {borderRadius: '12px'},
                                    '& .MuiInputLabel-root': {fontSize: '1rem'},
                                }}
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
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {borderRadius: '12px'},
                                    '& .MuiInputLabel-root': {fontSize: '1rem'},
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                margin="normal"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {borderRadius: '12px'},
                                    '& .MuiInputLabel-root': {fontSize: '1rem'},
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Organization/School (Optional)"
                                name="organization"
                                value={formData.organization}
                                onChange={handleInputChange}
                                margin="normal"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {borderRadius: '12px'},
                                    '& .MuiInputLabel-root': {fontSize: '1rem'},
                                }}
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions
                    sx={{
                        p: 4,
                        bgcolor: theme.palette.background.paper,
                        justifyContent: 'space-between',
                        borderTop: '1px solid #E2E8F0',
                    }}
                >
                    <StyledButton
                        onClick={handleCloseDialog}
                        variant="outlined"
                        sx={{
                            color: theme.palette.text.secondary,
                            borderColor: theme.palette.text.secondary,
                            fontWeight: 600,
                        }}
                    >
                        Cancel
                    </StyledButton>
                    <StyledButton
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: '#fff',
                            '&:hover': {
                                bgcolor: theme.palette.secondary.light,
                            },
                        }}
                    >
                        Register
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SessionSeminar;