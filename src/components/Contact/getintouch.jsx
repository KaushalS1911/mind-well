import React, { useState } from "react";
import axios from "axios";
import {
    Grid,
    Typography,
    Container,
    Box
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import extracted components
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import BusinessHours from "./BusinessHours";
import SocialMedia from "./SocialMedia";

const GetInTouch = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [resetTrigger, setResetTrigger] = useState(false);

    const handleSubmit = async (data) => {
        try {
            setIsSubmitting(true);

            const payload = {
                name: `${data.firstName} ${data.lastName}`,
                email: data.email,
                mobile: data.phone,
                enquiry_type: data.inquiryType || "General",
                message: data.message
            };

            await axios.post(
                "https://interactapiverse.com/mahadevasth/enquiry",
                payload
            );

            setSubmitStatus({
                success: true,
                message: "Your enquiry has been submitted successfully!"
            });
            toast.success("Your message has been sent successfully! We'll get back to you shortly.");

            setResetTrigger(prev => !prev); // Toggle to trigger reset

        } catch (error) {
            console.error("API Error:", error);
            setSubmitStatus({
                success: false,
                message: "Failed to submit your enquiry. Please try again later."
            });
            toast.error("Failed to send your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box component="section" sx={{ mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' } }}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Container maxWidth="xl" sx={{ pt: 12, mt: { md: 10, sm: 0 } }}>
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 8,
                        px: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Typography
                        className="Montserrat"
                        variant="h3"
                        sx={{
                            color: "#002D62",
                            mb: 2,
                            fontSize: {
                                xs: '1.7rem',
                                sm: '1.85rem',
                                md: '2rem',
                                lg: '2.125rem'
                            },
                            lineHeight: { xs: "32px", sm: "40px" },
                            fontWeight: "700"
                        }}
                    >
                        Get in Touch
                    </Typography>
                    <Typography
                        sx={{
                            color: "#4F4F4F",
                            maxWidth: "600px",
                            fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' },
                            textAlign: "center"
                        }}
                    >
                        Have questions about our services? Reach out to our team for personalized support on your mental
                        wellness journey
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <ContactForm
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            submitStatus={submitStatus}
                            resetTrigger={resetTrigger}
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <ContactInfo />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <BusinessHours />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SocialMedia />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GetInTouch;
