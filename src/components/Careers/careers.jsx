import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    useTheme,
    styled,
    IconButton,
    InputAdornment
} from '@mui/material';
import {
    Work,
    LocationOn,
    AttachFile,
    Close,
    Upload
} from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    }
}));

const JobCard = styled(Card)(({ theme }) => ({
    height: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[10],
    },
}));

const UploadButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#E6EAF3',
    color: '#012765',
    '&:hover': {
        backgroundColor: '#D1D9E6',
    }
}));

function Careers() {
    const theme = useTheme();
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: ''
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { ...formData, resume: selectedFile });
    };

    const jobs = [
        {
            title: 'Emotional Wellness Coach',
            location: 'Remote',
            type: 'Full-time',
            description: 'Join our team as an Emotional Wellness Coach and help individuals build resilience and emotional intelligence.'
        },
        {
            title: 'Program Coordinator',
            location: 'Hybrid',
            type: 'Full-time',
            description: 'Coordinate and manage our emotional wellness programs, ensuring smooth delivery and participant engagement.'
        },
        {
            title: 'Content Developer',
            location: 'Remote',
            type: 'Contract',
            description: 'Create engaging content for our emotional wellness programs and digital platforms.'
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                padding: "150px 0 100px 0",
                bgcolor: '#012765',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(1, 39, 101, 0.9) 0%, rgba(1, 39, 101, 0.7) 100%)',
                    zIndex: 1,
                }
            }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box className="Montserrat" sx={{
                        fontSize: { xs: "32px", sm: "36px", md: "42px" },
                        marginBottom: { xs: "25px", sm: "10px" },
                        lineHeight: "1.2",
                        textAlign: "center",
                        color: "#fff",
                        fontWeight: "700",
                    }}>
                        Join Our Team
                    </Box>
                    <Divider sx={{
                        backgroundColor: "#FE6A00",
                        height: 4,
                        width: 100,
                        mx: 'auto',
                        my: 3
                    }}/>
                    <Typography variant="h6" sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                    
                    }}>
                        Be part of our mission to transform emotional wellness and make a lasting impact on individuals and organizations.
                    </Typography>
                </Container>
            </Box>

            {/* Available Positions */}
            {/* <Box sx={{ py: 10, backgroundColor: '#F8FAFC' }}>
                <Container maxWidth="xl">
                    <Typography className="Montserrat" variant="h4" fontWeight="bold" gutterBottom sx={{ 
                        color: '#012765',
                        textAlign: 'center',
                        mb: 6
                    }}>
                        Available Positions
                    </Typography>
                    <Grid container spacing={4}>
                        {jobs.map((job, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <JobCard elevation={3}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#012765' }}>
                                            {job.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <LocationOn fontSize="small" sx={{ color: '#FF7A00' }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {job.location}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Work fontSize="small" sx={{ color: '#FF7A00' }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {job.type}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="body1" color="text.secondary" paragraph>
                                            {job.description}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#FF7A00',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#E66A00',
                                                }
                                            }}
                                        >
                                            Apply Now
                                        </Button>
                                    </CardContent>
                                </JobCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box> */}

            {/* Application Form */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="md">
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#012765', mb: 4 }}>
                            Apply for Position
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Position</InputLabel>
                                        <Select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleInputChange}
                                            label="Position"
                                        >
                                            {jobs.map((job, index) => (
                                                <MenuItem key={index} value={job.title}>
                                                    {job.title}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Years of Experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Cover Letter"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        multiline
                                        rows={4}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <UploadButton
                                        component="label"
                                        variant="contained"
                                        startIcon={<AttachFile />}
                                    >
                                        Upload Resume
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                        />
                                    </UploadButton>
                                    {selectedFile && (
                                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="body2">
                                                {selectedFile.name}
                                            </Typography>
                                            <IconButton
                                                size="small"
                                                onClick={() => setSelectedFile(null)}
                                            >
                                                <Close fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            backgroundColor: '#FF7A00',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#E66A00',
                                            }
                                        }}
                                    >
                                        Submit Application
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </StyledPaper>
                </Container>
            </Box>
        </Box>
    );
}

export default Careers; 