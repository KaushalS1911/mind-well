import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Button,
    Stack,
    Chip,
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, CardActions, DialogTitle, DialogContent, TextField, DialogActions, Dialog, IconButton,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {seminars} from "./sessionSeminar.jsx";
import img1 from '../../assets/images/session/colleagues-office-stretching-work-day.jpg';
import img2 from '../../assets/images/session/teacher-playing-with-kids.jpg';
import img3 from '../../assets/images/session/anonymous-girl-studying-brick-pavement.jpg';
import img4 from '../../assets/images/session/woman-office-stretching-work-day.jpg';
import img5 from '../../assets/images/session/asian-female-farmer.jpg';
import img6 from '../../assets/images/session/girl-with-down-syndrome-painting-with-colors.jpg';
import img7 from '../../assets/images/session/man-using-laptop-office-doing-document-analysis.jpg';
import img8 from '../../assets/images/session/medium-shot-young-people-church-praying.jpg';
import RelatedSession from './RelatedSession.jsx';
import SeminarResources from './SeminarResources';
import ContactSupport from './ContactSupport';
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

const SingleSession = () => {
    const {id} = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedSeminar, setSelectedSeminar] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
    });

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
        let errors = {};
        let isValid = true;
        if (!formData.name.trim()) {
            errors.name = 'Full name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Enter a valid email';
            isValid = false;
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Enter a valid 10-digit phone number';
            isValid = false;
        }

        setFormErrors(errors);

        if (!isValid) return;
        console.log('Registration submitted:', formData);
        alert("Thank you for registering! We'll send confirmation details to your email shortly.");
        setOpenDialog(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
        });
        setFormErrors({
            name: '',
            email: '',
            phone: '',
        });
    };

    const navigate = useNavigate();
    const seminar = seminars.find((seminar) => seminar.id == id);

    const galleryImages = [
        {src: img1, title: 'Workshop Activities'},
        {src: img2, title: 'Interactive Learning'},
        {src: img3, title: 'Student Engagement'},
        {src: img4, title: 'Professional Development'},
        {src: img5, title: 'Community Building'},
        {src: img6, title: 'Creative Expression'},
        {src: img7, title: 'Skill Development'},
        {src: img8, title: 'Group Dynamics'},
    ];

    const learningOutcomes = [
        'Master emotional intelligence techniques for better workplace relationships',
        'Develop effective stress management strategies',
        'Learn practical mindfulness exercises for daily practice',
        'Enhance leadership skills through emotional awareness',
        'Build resilience in challenging situations',
        'Improve communication and conflict resolution abilities',
    ];

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
    const StyledButton = styled(Button)(({theme}) => ({
        borderRadius: '12px',
        padding: '12px 30px',
        fontWeight: 700,
        fontSize: '1.1rem',
        textTransform: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    }));

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

    return (
        <Box sx={{pt: {xs: 0, md: 0}}}>
            <Box
                sx={{
                    minHeight: {xs: 280, sm: 350, md: 420},
                    width: '100%',
                    background: `linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 100%), url(${seminar.singleImage || ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: {xs: 2, sm: 4, md: 0},
                }}
            >

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 1,
                    }}
                />
                <Container maxWidth="xl" sx={{position: 'relative', zIndex: 2}}>
                    <Box
                        sx={{
                            color: 'white',
                            py: {xs: 6, sm: 8, md: 14},
                            mx: {xs: 0, md: 2},
                            mt: {xs: 2, md: 10},
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-block',
                                mb: 2,
                                px: 2.5,
                                py: 0.5,
                                bgcolor: 'rgba(255,98,0,0.9)',
                                borderRadius: 2,
                                fontWeight: 700,
                                fontSize: {xs: '0.85rem', sm: '1rem'},
                                letterSpacing: 1,
                                mt: 5,
                            }}
                        >
                            {seminar.category}
                        </Box>

                        <Typography
                            className={"Montserrat"}
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: '1.75rem',
                                    sm: '2rem',
                                    md: '2.25rem',
                                    lg: '2.5rem',
                                },
                                lineHeight: 1.2,
                                fontWeight: 700,
                                color: '#fff',
                                mb: 2,
                                mt: 3,
                                px: {xs: 2, sm: 4},
                            }}
                        >
                            {seminar.title}
                        </Typography>

                        <Stack
                            direction={{xs: 'column', sm: 'row'}}
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                flexWrap: 'wrap',
                                mb: 4,
                                mt: 2,
                                px: {xs: 2, sm: 4},
                                gap: {xs: 1, sm: 3},
                            }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <EventIcon sx={{fontSize: {xs: 18, sm: 20}}}/>
                                <Typography sx={{fontSize: {xs: '0.95rem', sm: '1.05rem'}, fontWeight: 500}}>
                                    {seminar.date}
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <AccessTimeIcon sx={{fontSize: {xs: 18, sm: 20}}}/>
                                <Typography sx={{fontSize: {xs: '0.95rem', sm: '1.05rem'}, fontWeight: 500}}>
                                    {seminar.time}
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <LocationOnIcon sx={{fontSize: {xs: 18, sm: 20}}}/>
                                <Typography sx={{fontSize: {xs: '0.95rem', sm: '1.05rem'}, fontWeight: 500}}>
                                    {seminar.location}
                                </Typography>
                            </Box>
                        </Stack>

                        {seminar.status === 'upcoming' && (
                            <CardActions sx={{p: {xs: 2, sm: 2}, pt: 0, width: '100%', maxWidth: 300}}>
                                <StyledButton
                                    variant="contained"
                                    onClick={() => handleOpenDialog(seminar)}
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
                        )}
                    </Box>
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
                        Register for Session
                    </DialogTitle>
                    <DialogContent sx={{p: 5, bgcolor: theme.palette.background.paper}}>
                        {selectedSeminar && (
                            <Box>
                                <Typography variant="h5"
                                            sx={{fontWeight: 600, mb: 2, color: theme.palette.text.primary}}>
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
                                    error={!!formErrors.name}
                                    helperText={formErrors.name}
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
                                    error={!!formErrors.email}
                                    helperText={formErrors.email}
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
                                    error={!!formErrors.phone}
                                    helperText={formErrors.phone}
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

            <Box sx={{mx: {xs: '20px', sm: '70px', md: '90px', xl: '100px'}}}>
                <Container maxWidth="xl" sx={{py: 8}}>
                    <Button
                        onClick={() => navigate(-1)}
                        startIcon={<ArrowBackIcon/>}
                        sx={{
                            mb: 4,
                            color: "#012765",
                            fontWeight: 600,
                            fontFamily: 'Montserrat',
                            '&:hover': {
                                backgroundColor: "#012765",
                                color: 'white',
                            },
                        }}
                    >
                        Back
                    </Button>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: {xs: 220, sm: 300, md: 620},
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#fff',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={seminar.image}
                                    alt={seminar.title}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography className={"Montserrat"} variant="h3" sx={{
                                fontWeight: 800, mb: 2, color: '#012765', fontSize: {
                                    xs: '1.7rem',
                                    sm: '1.85rem',
                                    md: '2rem',
                                    lg: '2.225rem'
                                }, lineHeight: 1.2
                            }}>
                                {seminar.title}
                            </Typography>
                            <Typography variant="body1" sx={{
                                mb: 3,
                                color: '#4A5568',
                                lineHeight: 1.8,
                                fontSize: {xs: '1rem', sm: '1.1rem', md: '1.15rem'},
                                textAlign: "justify"
                            }}>
                                {seminar.description}
                            </Typography>
                            <Box component="ul" sx={{pl: 2, mb: 3}}>
                                {learningOutcomes.slice(0, 4).map((item, idx) => (
                                    <Box component="li" key={idx} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 1,
                                        color: '#4A5568',
                                        fontSize: {xs: '1rem', sm: '1.1rem'},
                                        listStyle: 'none'
                                    }}>
                                        <CheckCircleIcon sx={{color: '#FF6200', fontSize: 22, mr: 1}}/>
                                        {item}
                                    </Box>
                                ))}
                            </Box>
                            {/*<Box>*/}
                            {/*    <Button*/}
                            {/*        variant="text"*/}
                            {/*        sx={{*/}
                            {/*            fontWeight: 700,*/}
                            {/*            color: '#012765',*/}
                            {/*            borderBottom: '2px solid #FF6200',*/}
                            {/*            borderRadius: 0,*/}
                            {/*            px: 0,*/}
                            {/*            textTransform: 'none',*/}
                            {/*            fontSize: {xs: '1rem', sm: '1.1rem'},*/}
                            {/*            '&:hover': {*/}
                            {/*                bgcolor: 'transparent',*/}
                            {/*                color: '#FF6200',*/}
                            {/*                borderBottom: '2px solid #FF6200',*/}
                            {/*            },*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        Discover Now*/}
                            {/*    </Button>*/}
                            {/*</Box>*/}
                        </Grid>
                    </Grid>
                </Container>

                {/*<Box sx={{pb: 8}}>*/}
                {/*    <Container maxWidth="xl">*/}
                {/*        <Typography className={"Montserrat"} variant="h4" sx={{*/}
                {/*            mb: 6, fontWeight: 700, color: '#012765', textAlign: 'center', fontSize: {*/}
                {/*                xs: '1.7rem',*/}
                {/*                sm: '1.85rem',*/}
                {/*                md: '2rem',*/}
                {/*                lg: '2.225rem'*/}
                {/*            },*/}
                {/*        }}>*/}
                {/*            Session Gallery*/}
                {/*        </Typography>*/}
                {/*        <Grid container spacing={3}>*/}
                {/*            {galleryImages.map((image, index) => (*/}
                {/*                <Grid item xs={12} sm={6} md={4} key={index}>*/}
                {/*                    <Paper*/}
                {/*                        sx={{*/}
                {/*                            position: 'relative',*/}
                {/*                            borderRadius: '16px',*/}
                {/*                            overflow: 'hidden',*/}
                {/*                            display: 'flex',*/}
                {/*                            alignItems: 'center',*/}
                {/*                            justifyContent: 'center',*/}
                {/*                            cursor: 'pointer',*/}
                {/*                            '&:hover img': {transform: 'scale(1.05)'},*/}
                {/*                            '&:hover .hover-overlay': {*/}
                {/*                                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 100%)',*/}
                {/*                            },*/}
                {/*                            '&:hover .hover-text': {*/}
                {/*                                transform: 'translateY(0%)',*/}
                {/*                                opacity: 1,*/}
                {/*                            },*/}
                {/*                        }}*/}
                {/*                        onClick={() => setSelectedImage(image)}*/}
                {/*                    >*/}
                {/*                        <Box*/}
                {/*                            component="img"*/}
                {/*                            src={image.src}*/}
                {/*                            alt={image.title}*/}
                {/*                            sx={{*/}
                {/*                                maxWidth: '100%',*/}
                {/*                                maxHeight: '100%',*/}
                {/*                                objectFit: 'contain',*/}
                {/*                                transition: 'transform 0.4s ease',*/}
                {/*                            }}*/}
                {/*                        />*/}
                {/*                        <Box*/}
                {/*                            className="hover-overlay"*/}
                {/*                            sx={{*/}
                {/*                                position: 'absolute',*/}
                {/*                                top: 0,*/}
                {/*                                left: 0,*/}
                {/*                                right: 0,*/}
                {/*                                bottom: 0,*/}
                {/*                                color: 'white',*/}
                {/*                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',*/}
                {/*                                transition: 'background 0.4s ease',*/}
                {/*                                pointerEvents: 'none',*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <Box*/}
                {/*                                className="hover-text"*/}
                {/*                                sx={{*/}
                {/*                                    position: 'absolute',*/}
                {/*                                    bottom: 0,*/}
                {/*                                    left: 0,*/}
                {/*                                    right: 0,*/}
                {/*                                    textAlign: 'center',*/}
                {/*                                    transform: 'translateY(100%)',*/}
                {/*                                    opacity: 0,*/}
                {/*                                    transition: 'transform 0.4s ease, opacity 0.4s ease',*/}
                {/*                                    py: 2,*/}
                {/*                                    pointerEvents: 'none',*/}
                {/*                                }}*/}
                {/*                            >*/}
                {/*                                <Typography variant="h6" sx={{fontWeight: 500, fontSize: '17px'}}>*/}
                {/*                                    {image.title}*/}
                {/*                                </Typography>*/}
                {/*                            </Box>*/}
                {/*                        </Box>*/}
                {/*                    </Paper>*/}
                {/*                </Grid>*/}
                {/*            ))}*/}
                {/*        </Grid>*/}

                {/*        {selectedImage && (*/}
                {/*            <Box*/}
                {/*                sx={{*/}
                {/*                    position: 'fixed',*/}
                {/*                    top: 0,*/}
                {/*                    left: 0,*/}
                {/*                    right: 0,*/}
                {/*                    bottom: 0,*/}
                {/*                    backgroundColor: 'rgba(0, 0, 0, 0.970)',*/}
                {/*                    zIndex: 1300,*/}
                {/*                    display: 'flex',*/}
                {/*                    justifyContent: 'center',*/}
                {/*                    alignItems: 'center',*/}
                {/*                    p: 2,*/}
                {/*                }}*/}
                {/*                onClick={() => setSelectedImage(null)}*/}
                {/*            >*/}
                {/*                <IconButton*/}
                {/*                    sx={{position: 'absolute', top: 20, right: 20, color: 'white'}}*/}
                {/*                    onClick={() => setSelectedImage(null)}*/}
                {/*                >*/}
                {/*                    <CloseIcon/>*/}
                {/*                </IconButton>*/}
                {/*                <Box*/}
                {/*                    sx={{maxWidth: '90%', maxHeight: '90vh', position: 'relative'}}*/}
                {/*                    onClick={(e) => e.stopPropagation()}*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        src={selectedImage.src}*/}
                {/*                        alt={selectedImage.title}*/}
                {/*                        style={{*/}
                {/*                            width: '100%',*/}
                {/*                            height: 'auto',*/}
                {/*                            maxHeight: '90vh',*/}
                {/*                            objectFit: 'contain',*/}
                {/*                        }}*/}
                {/*                    />*/}
                {/*                    <Box*/}
                {/*                        sx={{*/}
                {/*                            position: 'absolute',*/}
                {/*                            bottom: 0,*/}
                {/*                            left: 0,*/}
                {/*                            right: 0,*/}
                {/*                            backgroundColor: 'rgba(0, 0, 0, 0.7)',*/}
                {/*                            color: 'white',*/}
                {/*                            p: 2,*/}
                {/*                        }}*/}
                {/*                    >*/}
                {/*                        <Typography variant="h6" sx={{fontWeight: 400, fontSize: '17px'}}>*/}
                {/*                            {selectedImage.title}*/}
                {/*                        </Typography>*/}
                {/*                    </Box>*/}
                {/*                </Box>*/}
                {/*            </Box>*/}
                {/*        )}*/}

                {/*    </Container>*/}
                {/*</Box>*/}

                {/*<SeminarResources /> */}

                {/*<RelatedSession currentId={id} seminars={seminars}/>*/}
                {/*<ContactSupport/>*/}
            </Box>
        </Box>
    );
};

export default SingleSession;