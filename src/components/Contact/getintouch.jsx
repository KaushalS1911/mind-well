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
// Import FAQSection for future use if needed
// import FAQSection from "./FAQSection";

/**
 * GetInTouch component - Main contact page component
 * Displays a contact form and contact information in a responsive layout
 */
const GetInTouch = () => {
    // State to track loading and success/error status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Handler for form submission
    const handleSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            
            // Prepare the payload according to the required format
            const payload = {
                name: `${data.firstName} ${data.lastName}`, // Assuming your form has 'firstName' and 'lastName' fields
                email: data.email,
                mobile: data.phone, // Assuming your form has a 'phone' field
                enquiry_type: data.inquiryType || "General", // Default to "General" if not provided
                message: data.message
            };
            
            // Make the API call
            const response = await axios.post(
                "https://interactapiverse.com/mahadevasth/enquiry", 
                payload
            );
            
            setSubmitStatus({ success: true, message: "Your enquiry has been submitted successfully!" });
            toast.success("Your message has been sent successfully! We'll get back to you shortly.");
            
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
        <Box component="section" sx={{mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }}}>
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
            
            {/* Rest of your component... */}
            <Container maxWidth="xl" sx={{pt: 12, mt: {md: 10, sm: 0}}}>
                {/* Header Section */}
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
                            lineHeight: {xs: "32px", sm: "40px"},
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

                {/* Main Content */}
                <Grid container spacing={4}>
                    {/* Left Side - Form */}
                    <Grid item xs={12} lg={6}>
                        <ContactForm 
                            onSubmit={handleSubmit} 
                            isSubmitting={isSubmitting}
                            submitStatus={submitStatus}
                        />
                    </Grid>

                    {/* Right Side - Contact Information, Business Hours & Social Media */}
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

                        {/* FAQs section - currently commented out but available for future use */}
                        {/* <FAQSection /> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GetInTouch;