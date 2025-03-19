import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Checkbox,
    FormControlLabel,
    Link,
    Container,
    Box,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControl,
    Select,
    MenuItem,
    FormHelperText
} from "@mui/material";
import {Facebook, Twitter, Instagram, LinkedIn, ExpandMore} from "@mui/icons-material";
import {Phone, Email, LocationOn} from "@mui/icons-material";

const GetInTouch = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };
    const contactInfo = {
        phone: {
            title: "Phone",
            icon: <Phone sx={{color: "#FFA500", mr: 1}}/>,
            details: [
                "General Inquiries: +1 (123) 456-7890",
                "Support: +1 (800) 123-4567"
            ]
        },
        email: {
            title: "Email",
            icon: <Email sx={{color: "#FFA500", mr: 1}}/>,
            details: [
                "Info: info@mindwell.com",
                "Support: support@mindwell.com"
            ]
        },
        location: {
            title: "Office Locations",
            icon: <LocationOn sx={{color: "#FFA500", mr: 1}}/>,
            details: [
                "New York: 123 Broadway, Suite 456, New York, NY 10001",
                "San Francisco: 789 Market St, Suite 1011, San Francisco, CA 94103"
            ]
        }
    };

    const businessHours = [
        { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
        { day: "Saturday", time: "9:00 AM - 5:00 PM" },
        { day: "Sunday", time: "Closed" }
    ];

    const socialMediaLinks = [
        { name: "Facebook", icon: <Facebook fontSize="medium" />, url: "https://www.facebook.com" },
        { name: "Twitter", icon: <Twitter fontSize="medium" />, url: "https://www.twitter.com" },
        { name: "Instagram", icon: <Instagram fontSize="medium" />, url: "https://www.instagram.com" },
        { name: "LinkedIn", icon: <LinkedIn fontSize="medium" />, url: "https://www.linkedin.com" }
    ];

    return (
        <Container maxWidth="xl" sx={{p:"96px 0"}}>
            <Box
                sx={{
                    textAlign: "center",
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    margin:"0 0 64px"
                }}
            >
                <Typography
                    sx={{
                        color: "#002D62",
                        margin: "0 0 16px",
                        fontSize: { xs: "28px", sm: "36px" }, // Responsive font size
                        lineHeight: { xs: "32px", sm: "40px" }, // Adjust line height for smaller screens
                        fontWeight: "700"
                    }}
                >
                    Get in Touch
                </Typography>
                <Typography
                    sx={{
                        color: "#4F4F4F",
                        maxWidth: "600px",
                        fontSize: { xs: "16px", sm: "18px" }, // Responsive text
                        textAlign: "center" // Ensure it's centered
                    }}
                >
                    Have questions about our services? Reach out to our team for personalized support on your mental wellness journey.
                </Typography>
            </Box>



            <Grid container spacing={4}>
                {/* Left Side - Form */}
                <Grid item xs={12} lg={6}>
                    <Box sx={{
                        border: "1px solid transparent",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                        borderRadius: "10px",
                        padding: "32px",
                        height: "100%",

                    }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography sx={{
                                        fontSize: "24px",
                                        margin: "0 0 24px",
                                        fontWeight: "700",
                                        lineHeight: "32px"
                                    }}>
                                        Send Us a Message
                                    </Typography>
                                </Grid>

                                {/* First Name */}
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{margin: "0 0 4px", fontSize: "14px"}}>
                                        First Name*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Your first name"
                                        variant="outlined"
                                        InputProps={{
                                            sx: {borderRadius: "8px", height: "48px", fontSize: "16px"}
                                        }}
                                        {...register("firstName", {required: "First name is required"})}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                    />
                                </Grid>

                                {/* Last Name */}
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{margin: "0 0 4px", fontSize: "14px"}}>
                                        Last Name*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Your last name"
                                        variant="outlined"
                                        InputProps={{
                                            sx: {borderRadius: "8px", height: "48px", fontSize: "16px"}
                                        }}
                                        {...register("lastName", {required: "Last name is required"})}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                    />
                                </Grid>

                                {/* Email */}
                                <Grid item xs={12}>
                                    <Typography sx={{margin: "0 0 4px", fontSize: "14px"}}>
                                        Email Address*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="your.email@example.com"
                                        variant="outlined"
                                        InputProps={{
                                            sx: {borderRadius: "8px", height: "48px", fontSize: "16px"}
                                        }}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                </Grid>

                                {/* Phone Number */}
                                <Grid item xs={12}>
                                    <Typography sx={{margin: "0 0 4px", fontSize: "14px"}}>
                                        Phone Number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="(123) 456-7890"
                                        variant="outlined"
                                        InputProps={{
                                            sx: {borderRadius: "8px", height: "48px", fontSize: "16px"}
                                        }}
                                        {...register("phone", {
                                            pattern: {
                                                value: /^[0-9+\-\s()]{10,15}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                    />
                                </Grid>

                                {/* Inquiry Type */}
                                <Grid item xs={12}>
                                    <Typography sx={{margin: "0 0 4px", fontSize: "14px"}}>
                                        Inquiry Type*
                                    </Typography>
                                    <FormControl fullWidth error={!!errors.inquiryType}>
                                        <Select
                                            displayEmpty
                                            variant="outlined"
                                            sx={{
                                                borderRadius: "8px",
                                                height: "48px",
                                                fontSize: "16px",
                                                '& .MuiSelect-icon': {display: 'none'}  // Hides dropdown arrow
                                            }}
                                            defaultValue=""
                                            {...register("inquiryType", {required: "Inquiry type is required"})}
                                        >
                                            <MenuItem value="" sx={{color: "#a0a0a0"}} disabled>
                                                Select an inquiry type
                                            </MenuItem>
                                            {[
                                                "Individual Therapy",
                                                "Student Services",
                                                "Corporate Wellness",
                                                "Technical Support",
                                                "Billing & Payment",
                                                "Other"
                                            ].map((option) => (
                                                <MenuItem
                                                    key={option}
                                                    value={option}
                                                    sx={{
                                                        '&.Mui-selected': {
                                                            backgroundColor: "white",
                                                            color: "black",
                                                        },

                                                        '&:hover': {
                                                            backgroundColor: "#1976D2",
                                                            color: "white"
                                                        }
                                                    }}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors.inquiryType && (
                                            <FormHelperText>{errors.inquiryType.message}</FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>


                                {/* Message */}
                                <Grid item xs={12}>
                                    <Typography sx={{margin: "0 0 4px", fontSize: "14px"}}>
                                        Message*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="How can we help you?"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        InputProps={{
                                            sx: {borderRadius: "8px", fontSize: "16px"}
                                        }}
                                        {...register("message", {required: "Message is required"})}
                                        error={!!errors.message}
                                        helperText={errors.message?.message}
                                    />
                                </Grid>

                                {/* Privacy Policy */}
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="privacy-policy-checkbox" // Linking label to checkbox
                                                checked={privacyChecked}
                                                onChange={() => setPrivacyChecked(!privacyChecked)}
                                                {...register("privacyPolicy", { required: "You must agree to the privacy policy" })}
                                            />
                                        }
                                        label={
                                            <Typography sx={{ color: "#4F5866" }}>
                                                I agree to the{" "}
                                                <Link href="#" sx={{ color: "#012765", textDecoration: "none", fontWeight: "bold" }}>
                                                    Privacy Policy
                                                </Link>{" "}
                                                and consent to having my data processed.
                                            </Typography>
                                        }
                                    />
                                    {errors.privacyPolicy && (
                                        <Typography variant="body2" color="error">
                                            {errors.privacyPolicy.message}
                                        </Typography>
                                    )}
                                </Grid>


                                {/* Submit Button */}
                                <Grid item xs={12}>
                                    <Button fullWidth type="submit" variant="contained"
                                            sx={{
                                                backgroundColor: "#ff6600",
                                                color: "white",
                                                borderRadius: "8px",
                                                padding: "10px",

                                            }}>
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Box>
                </Grid>

                {/* Right Side - Contact Information, Business Hours & Social Media */}
                <Grid item xs={12} lg={6}>
                    <Grid container spacing={2}>

                        {/* Contact Information Box */}

                        <Grid item xs={12}>
                            <Box sx={{
                                backgroundColor: "#002D62",
                                color: "white",
                                padding: "32px",
                                margin: "0 0 32px",
                                borderRadius: 2
                            }}>

                                {/* Title */}
                                <Typography sx={{fontSize: "24px", margin: "0 0 24px", fontWeight:"700", lineHeight: "32px"}}>
                                    Contact Information
                                </Typography>

                                {/* Mapping through contactInfo object */}
                                {Object.values(contactInfo).map((info, index) => (
                                    <Box key={index} sx={{margin:"24px 0 0 "}}>
                                        {/* Icon & Title */}
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            {info.icon}
                                            <Typography sx={{fontSize: "18px", fontWeight: "500" , margin: "0 0 4px"}}>
                                                {info.title}
                                            </Typography>
                                        </Box>

                                        {/* Details */}
                                        <Typography sx={{ml: 4,color:"#CCD4E0"}}>
                                            {info.details.map((line, i) => (
                                                <span key={i}>{line}<br/></span>))}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>


                        {/* Business Hours & Social Media */}
                        <Grid item xs={12} container spacing={2}>
                            {/* Business Hours */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ padding:"24px", backgroundColor: "white", borderRadius: 2, boxShadow: 1 }}>
                                    {/* Title */}
                                    <Typography  sx={{ color: "#012765",fontSize: "18px",fontWeight:"700",margin: "0 0 16px", lineHeight: "28px"  }}>
                                        Business Hours
                                    </Typography>

                                    {/* Hours Details - Dynamically Rendered */}
                                    {businessHours.map((entry, index) => (
                                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", margin: "8px 0 0" }}>
                                            <Typography>{entry.day}:</Typography>
                                            <Typography>{entry.time}</Typography>
                                        </Box>
                                    ))}

                                    {/* Customer Support Message */}
                                    <Typography sx={{ mt: 2, fontSize: "14px", color: "#6B7280" }}>
                                        Customer support is available 24/7 through our app and online portal.
                                    </Typography>
                                </Box>
                            </Grid>


                            {/* Social Media */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    padding:"24px",
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    height: "100%",
                                }}>
                                    {/* Title */}
                                    <Typography  sx={{ color: "#002D62",fontWeight:"700", fontSize: "18px",margin: "0 0 16px", lineHeight: "28px"  }}>
                                        Connect With Us
                                    </Typography>

                                    {/* Social Media Icons - Dynamically Rendered */}
                                    <Box sx={{ display: "flex", gap: 2 }}>
                                        {socialMediaLinks.map((social, index) => (
                                            <IconButton
                                                key={index}
                                                sx={{
                                                    backgroundColor: "#002D62",
                                                    color: "white",
                                                    width: 40,
                                                    height: 40,
                                                    "&:hover": { backgroundColor: "#001B44" }
                                                }}
                                                component="a"
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.name}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        ))}
                                    </Box>

                                    {/* Description */}
                                    <Typography sx={{ margin:"16px 0 0", fontSize: "14px", color: "#6B7280" ,}}>
                                        Follow us on social media for the latest updates, mental health tips, and special offers.
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>

                        {/* FAQ Section */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    border: "1px solid transparent",
                                    backgroundColor: "#FFFFFF",
                                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                                    borderRadius: "10px",
                                    margin:"32px 0 0",
                                    padding:"24px"
                                }}
                            >
                                {/* FAQ Title */}
                                <Typography  sx={{ color: "#002D62",fontWeight:"700", fontSize: "18px",margin: "0 0 16px", lineHeight: "28px" }}>
                                    Frequently Asked Questions
                                </Typography>

                                {/* FAQ Items */}
                                {[
                                    {
                                        question: "How quickly can I get connected with a therapist?",
                                        answer: "After completing our matching questionnaire, you'll typically receive therapist matches within 24-48 hours. You can then schedule your first appointment based on availability, often within the same week."
                                    },
                                    {
                                        question: "Are your services covered by insurance?",
                                        answer: "Many of our services may be covered by insurance. We can provide you with the necessary documentation to submit for out-of-network reimbursement. Contact your insurance provider to verify your specific coverage."
                                    }
                                ].map((faq, index) => (
                                    <Box key={index} sx={{
                                        borderBottom:"1px solid #E5E7EB",
                                        padding:"0 0 16px"
                                    }}>
                                        <Typography  sx={{
                                            color: "#002D62",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            mt:2,
                                        }}>

                                            {faq.question} <ExpandMore sx={{color: "#FF7A00",fontWeight:"500",fontSize:"16px",margin:"0 0 10px",}}/>
                                        </Typography>
                                        <Typography sx={{ color: "#6B7280"}}>{faq.answer}</Typography>
                                    </Box>
                                ))}

                                {/* View All FAQs Link */}
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography
                                        sx={{
                                            mt: 2,
                                            color: "#FF7A00",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            display: "inline-block", // Ensures margin works
                                            transition: "color 0.3s ease-in-out",
                                            "&:hover": { color: "#012765" }
                                        }}
                                        component="a"
                                        href="/faqs"
                                    >
                                        View all FAQs →
                                    </Typography>
                                </Box>


                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GetInTouch;
