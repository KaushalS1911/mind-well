import React, { useState } from 'react';
import {
    Box, Typography, Grid, Button, TextField, Paper, Link, Container
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ContactSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <Box sx={{ py: 8 }}>
            <Typography className={"Montserrat"} variant="h4" sx={{
                fontWeight: 700,
                color: '#012765',
                mb: 4,
                textAlign: 'center',
                fontSize: {
                    xs: '1.7rem',
                    sm: '1.85rem',
                    md: '2rem',
                    lg: '2.225rem'
                },
            }}>
                Need Help? Contact Us
            </Typography>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: { xs: 3, sm: 5 },
                                boxShadow: 2,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #E8EDFF 0%, #F4F7FE 100%)',
                            }}
                        >
                            <SupportAgentIcon sx={{ color: '#FF6200', fontSize: 70, mb: 2 }} />
                            <Typography sx={{
                                color: '#012765',
                                fontWeight: 700,
                                fontSize: { xs: '1.15rem', sm: '1.25rem' },
                                mb: 2,
                                textAlign: 'center'
                            }}>
                                Our support team is here for you!
                            </Typography>
                            <Typography
                                sx={{ color: '#4A5568', mb: 3, fontSize: { xs: '1rem', sm: '1.1rem' }, textAlign: 'center' }}>
                                If you have any questions about this seminar, registration, or need special assistance, our
                                team is here to help!
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <EmailIcon sx={{ color: '#FF6200', mr: 1 }} />
                                <Box
                                      sx={{ color: '#012765', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                                    connect@emotionallyours.com
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ color: '#FF6200', mr: 1 }} />
                                <Box
                                      sx={{ color: '#012765', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                                    +91 12345 67890
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper sx={{
                            p: { xs: 3, sm: 5 },
                            boxShadow: 2,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Typography sx={{
                                fontWeight: 600,
                                color: '#012765',
                                mb: 2,
                                fontSize: { xs: '1.05rem', sm: '1.15rem' }
                            }}>
                                Send us a message
                            </Typography>
                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="name"
                                            label="Your Name"
                                            fullWidth
                                            size="small"
                                            value={formData.name}
                                            onChange={handleChange}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="email"
                                            label="Your Email"
                                            fullWidth
                                            size="small"
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="message"
                                            label="Message"
                                            fullWidth
                                            multiline
                                            rows={3}
                                            size="small"
                                            value={formData.message}
                                            onChange={handleChange}
                                            error={!!errors.message}
                                            helperText={errors.message}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#FF6200',
                                                color: '#fff',
                                                fontWeight: 700,
                                                textTransform: 'none',
                                                fontSize: { xs: '1rem', sm: '1.1rem' },
                                                borderRadius: '8px',
                                                px: 4,
                                                '&:hover': { bgcolor: '#FF8C00' },
                                            }}
                                            fullWidth
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSupport;
