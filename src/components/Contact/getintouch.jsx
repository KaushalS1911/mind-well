import React from "react";
import {useForm, Controller} from "react-hook-form";
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
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from "@mui/material";
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    ExpandMore,
    YouTube,
    Phone,
    Email,
    LocationOn
} from "@mui/icons-material";

// Constants for reusability
const INQUIRY_TYPES = [
    "Individual Therapy",
    "Student Services",
    "Corporate Wellness",
    "Technical Support",
    "Billing & Payment",
    "Other"
];

const CONTACT_INFO = [
    // {
    //     title: "Phone",
    //     icon: <Phone sx={{color: "#FF6600", mr: 1}}/>,
    //     details: ["+91 7977135096"]
    // },
    {
        title: "Email",
        icon: <Email sx={{color: "#FF6600", mr: 1}}/>,
        details: [
            "connect@mahadevasth.com"
        ]
    },
    {
        title: "Office Locations",
        icon: <LocationOn sx={{color: "#FF6600", mr: 1}}/>,
        details: [
            "B-204, Kanakia Wall Street, Andheri - Kurla Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093"
        ]
    }
];

const BUSINESS_HOURS = [
    {day: "Monday - Saturday", time: "7:00 AM onwards"},
    {day: "Sunday", time: "As per Commitment"}
];

const SOCIAL_MEDIA_LINKS = [
    {icon: <LinkedIn/>, link: "https://www.linkedin.com/company/emotionallyours/"},
    {icon: <Facebook/>, link: "https://www.facebook.com/share/1AmSYda79K/"},
    {icon: <Instagram/>, link: "https://www.instagram.com/mann_miitr?igsh=cWp1aWNiNm1vNzNx"},
    {icon: <YouTube/>, link: "https://youtube.com/@emotionallyours?si=6h0Su7ZsmTpj0QbL"}
];

const FAQS = [
    {
        question: "How quickly can I get connected with a therapist?",
        answer: "After completing our matching questionnaire, you'll typically receive therapist matches within 24-48 hours. You can then schedule your first appointment based on availability, often within the same week."
    },
    {
        question: "Are your services covered by insurance?",
        answer: "Many of our services may be covered by insurance. We can provide you with the necessary documentation to submit for out-of-network reimbursement. Contact your insurance provider to verify your specific coverage."
    }
];

// Reusable style objects
const styles = {
    sectionTitle: {
        color: "#002D62",
        fontWeight: "700",
        fontSize: "18px",
        marginBottom: 2,
        lineHeight: "28px"
    },
    cardBox: {
        padding: 3,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 1,
        height: "100%"
    },
    formLabel: {
        margin: "0 0 4px",
        fontSize: "14px"
    },
    inputField: {
        borderRadius: "8px",
        height: "48px",
        fontSize: "16px"
    }
};

// Component for contact form
const ContactForm = ({onSubmit}) => {
    const {register, handleSubmit, control, formState: {errors}} = useForm();

    return (
        <Card sx={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            borderRadius: "10px",
            height: "100%"
        }}>
            <CardContent sx={{p: 4}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{mb: 3, fontWeight: "700"}}>
                                Send Us a Message
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography sx={styles.formLabel}>First Name*</Typography>
                            <TextField
                                fullWidth
                                placeholder="Your first name"
                                variant="outlined"
                                InputProps={{sx: styles.inputField}}
                                {...register("firstName", {required: "First name is required"})}
                                error={!!errors.firstName}
                                helperText={errors.firstName?.message}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography sx={styles.formLabel}>Last Name*</Typography>
                            <TextField
                                fullWidth
                                placeholder="Your last name"
                                variant="outlined"
                                InputProps={{sx: styles.inputField}}
                                {...register("lastName", {required: "Last name is required"})}
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Email Address*</Typography>
                            <TextField
                                fullWidth
                                placeholder="your.email@example.com"
                                variant="outlined"
                                InputProps={{sx: styles.inputField}}
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

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Phone Number</Typography>
                            <TextField
                                fullWidth
                                placeholder="(123) 456-7890"
                                variant="outlined"
                                InputProps={{sx: styles.inputField}}
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

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Inquiry Type*</Typography>
                            <FormControl fullWidth error={!!errors.inquiryType}>
                                <Select
                                    displayEmpty
                                    variant="outlined"
                                    sx={{
                                        borderRadius: "8px",
                                        height: "48px",
                                        fontSize: "16px",
                                        '& .MuiSelect-icon': {display: 'none'}
                                    }}
                                    defaultValue=""
                                    {...register("inquiryType", {required: "Inquiry type is required"})}
                                >
                                    <MenuItem value="" sx={{color: "#a0a0a0"}} disabled>
                                        Select an inquiry type
                                    </MenuItem>
                                    {INQUIRY_TYPES.map((option) => (
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

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Message*</Typography>
                            <TextField
                                fullWidth
                                placeholder="How can we help you?"
                                multiline
                                rows={4}
                                variant="outlined"
                                InputProps={{sx: {borderRadius: "8px", fontSize: "16px"}}}
                                {...register("message", {required: "Message is required"})}
                                error={!!errors.message}
                                helperText={errors.message?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Controller
                                        name="privacyPolicy"
                                        control={control}
                                        rules={{required: "You must agree to the privacy policy"}}
                                        render={({field}) => (
                                            <Checkbox
                                                id="privacy-policy-checkbox"
                                                {...field}
                                                checked={!!field.value}
                                            />
                                        )}
                                    />
                                }
                                label={
                                    <Typography sx={{color: "#4F5866"}}>
                                        I agree to the{" "}
                                        <Link href="#" sx={{
                                            color: "#012765",
                                            textDecoration: "none",
                                            fontWeight: "bold"
                                        }}>
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

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#ff6600",
                                    color: "white",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    '&:hover': {
                                        backgroundColor: "#e65c00"
                                    }
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

// Component for contact information
const ContactInfo = () => (
    <Box sx={{
        backgroundColor: "#002D62",
        color: "white",
        padding: {sm:4,xs:2.8},
        marginBottom: 4,
        borderRadius: 2
    }}>
        <Typography variant="h5" sx={{mb: 3, fontWeight: "700"}}>
            Contact Information
        </Typography>

        <List>
            {CONTACT_INFO.map((info, index) => (
                <ListItem key={index} sx={{mt: 2, display: "block"}}>
                    <Box sx={{display: "flex", alignItems: "center", mb: 1}}>
                        {info.icon}
                        <Typography variant="subtitle1" sx={{fontWeight: "500"}}>
                            {info.title}
                        </Typography>
                    </Box>
                    <Box sx={{ml: 4, color: "#CCD4E0"}}>
                        {info.details.map((line, i) => (
                            <Typography key={i} variant="body2">
                                {line}
                            </Typography>
                        ))}
                    </Box>
                </ListItem>
            ))}
        </List>
    </Box>
);

// Component for business hours
const BusinessHours = () => (
    <Box sx={styles.cardBox}>
        <Typography sx={styles.sectionTitle}>
            Business Hours
        </Typography>
        {BUSINESS_HOURS.map((entry, index) => (
            <Box key={index} sx={{display: "flex", justifyContent: "space-between", mt: 1}}>
                <Typography>{entry.day}:</Typography>
                <Typography>{entry.time}</Typography>
            </Box>
        ))}
        {/*<Typography sx={{mt: 2, fontSize: "14px", color: "#6B7280"}}>*/}
        {/*    Customer support is available 24/7 through our app and online portal.*/}
        {/*</Typography>*/}
    </Box>
);

// Component for social media
const SocialMedia = () => (
    <Box sx={styles.cardBox}>
        <Typography sx={styles.sectionTitle}>
            Connect With Us
        </Typography>
        <Box sx={{display: "flex", gap: 2, mt: 2}}>
            {SOCIAL_MEDIA_LINKS.map((item, index) => (
                <IconButton
                    key={index}
                    component={Link}
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                        padding: "10px",
                        backgroundColor: "#002D62",
                        borderRadius: "50%",
                        color: "white",
                        '&:hover': {
                            backgroundColor: "#001f44",
                        }
                    }}
                >
                    {item.icon}
                </IconButton>
            ))}
        </Box>
        <Typography sx={{mt: 2, fontSize: "14px", color: "#6B7280"}}>
            Follow us on social media for the latest updates, mental health tips, and
            special offers.
        </Typography>
    </Box>
);

// Component for FAQs
const FAQSection = () => (
    <Card sx={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "10px",
        mt: 4
    }}>
        <CardContent sx={{p: 3}}>
            <Typography sx={styles.sectionTitle}>
                Frequently Asked Questions
            </Typography>
            {FAQS.map((faq, index) => (
                <Box key={index} sx={{borderBottom: "1px solid #E5E7EB", py: 2}}>
                    <Box sx={{
                        color: "#002D62",
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: "500",
                        mb: 1
                    }}>
                        <Typography>{faq.question}</Typography>
                        <ExpandMore sx={{color: "#FF7A00"}}/>
                    </Box>
                    <Typography sx={{color: "#6B7280"}}>{faq.answer}</Typography>
                </Box>
            ))}
            <Link
                sx={{
                    mt: 2,
                    color: "#FF6600",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {color: "#012765"}
                }}
                href="/faqs"
            >
                View all FAQs →
            </Link>
        </CardContent>
    </Card>
);

// Main component
const GetInTouch = () => {
    const handleSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Box component="section" sx={{mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }}}>
            <Container maxWidth="xl" sx={{py: 12, mt: {md: 10, sm: 0}}}>
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
                        wellness journey.
                    </Typography>
                </Box>

                {/* Main Content */}
                <Grid container spacing={4}>
                    {/* Left Side - Form */}
                    {/*<Grid item xs={12} lg={6}>*/}
                    {/*    <ContactForm onSubmit={handleSubmit}/>*/}
                    {/*</Grid>*/}

                    {/* Right Side - Contact Information, Business Hours & Social Media */}
                    <Grid item xs={12}>
                        <ContactInfo/>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <BusinessHours/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SocialMedia/>
                            </Grid>
                        </Grid>

                        <FAQSection/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GetInTouch;