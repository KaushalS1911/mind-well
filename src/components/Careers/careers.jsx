import React, {useState} from 'react';
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
    IconButton
} from '@mui/material';
import {
    Work,
    LocationOn,
    AttachFile,
    Close
} from '@mui/icons-material';
import img2 from "../../assets/images/career/istockphoto2.jpg";

// Styled Components
const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    }
}));

const JobCard = styled(Card)(({theme}) => ({
    height: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[10],
    },
}));

const UploadButton = styled(Button)(({theme}) => ({
    backgroundColor: '#E6EAF3',
    color: '#012765',
    '&:hover': {
        backgroundColor: '#D1D9E6',
    }
}));

const formFieldStyle = {
    "& label.Mui-focused": {color: "#FF7F1E"},
    "& .MuiOutlinedInput-root": {
        "& fieldset": {borderColor: "#FF7F1E"},
        "&:hover fieldset": {borderColor: "#FF7F1E"},
        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
    }
};

const JOBS = [
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

// Hero Section
const HeroSection = () => (
    <Box sx={{
        py: {xs: 8, sm: 10, md: 18},
        // pb: 14,
        position: 'relative',
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
    }}>
        <Box sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1
        }}/>
        <Container sx={{position: 'relative', zIndex: 2}}>
            <Typography className={"Montserrat"} sx={{
                fontSize: {xs: '1.7rem', sm: '2rem', md: '2.25rem'},
                fontWeight: '700',
                color: "#FE6A00",
                mt: 8,
                mb: 2
            }}>
                Join Our Team
            </Typography>
            <Divider sx={{backgroundColor: "#FF7A00", height: 4, width: 100, margin: "auto", my: 3}}/>
            <Typography variant="h6" sx={{color: '#fff', fontWeight: 400}}>
                Be part of our mission to transform emotional wellness and make a lasting impact on individuals
                and organizations.
            </Typography>
        </Container>
    </Box>
);

// Job Listings


// Application Form
const ApplicationForm = ({
                             formData,
                             handleInputChange,
                             handleSubmit,
                             selectedFile,
                             handleFileChange,
                             setSelectedFile
                         }) => (
    <Box sx={{pt: 10}}>
        <Container maxWidth="md">
            <StyledPaper elevation={3}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{color: '#012765', mb: 4}}>
                    Apply for Position
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Full Name" name="name" value={formData.name}
                                       onChange={handleInputChange} required sx={formFieldStyle}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Email" type="email" name="email" value={formData.email}
                                       onChange={handleInputChange} required sx={formFieldStyle}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Phone Number" name="phone" value={formData.phone}
                                       onChange={handleInputChange} required sx={formFieldStyle}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth required sx={formFieldStyle}>
                                <InputLabel>Position</InputLabel>
                                <Select name="position" value={formData.position} onChange={handleInputChange}
                                        label="Position">
                                    {JOBS.map((job, index) => (
                                        <MenuItem key={index} value={job.title}>{job.title}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Years of Experience" name="experience"
                                       value={formData.experience} onChange={handleInputChange} required
                                       sx={formFieldStyle}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Cover Letter" name="message" value={formData.message}
                                       onChange={handleInputChange} multiline rows={4} required sx={formFieldStyle}/>
                        </Grid>
                        <Grid item xs={12}>
                            <UploadButton component="label" startIcon={<AttachFile/>}>
                                Upload Resume
                                <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileChange}/>
                            </UploadButton>
                            {selectedFile && (
                                <Box sx={{mt: 2, display: 'flex', alignItems: 'center', gap: 1}}>
                                    <Typography variant="body2">{selectedFile.name}</Typography>
                                    <IconButton size="small" onClick={() => setSelectedFile(null)}>
                                        <Close fontSize="small"/>
                                    </IconButton>
                                </Box>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" size="large" sx={{
                                backgroundColor: '#FF7A00',
                                color: 'white',
                                '&:hover': {backgroundColor: '#E66A00'}
                            }}>
                                Submit Application
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </StyledPaper>
        </Container>
    </Box>
);

// Main Component
function Careers() {
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
        if (file) setSelectedFile(file);
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', {...formData, resume: selectedFile});
        // Add submission logic here (API, Firebase, etc.)
    };

    return (
        <Box>
            <HeroSection/>
            <Box sx={{
                mx: {xs: '20px', sm: '70px', md: '90px', xl: '100px'}
            }}>
                <ApplicationForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    selectedFile={selectedFile}
                    handleFileChange={handleFileChange}
                    setSelectedFile={setSelectedFile}
                />
            </Box>
        </Box>
    );
}

export default Careers;
