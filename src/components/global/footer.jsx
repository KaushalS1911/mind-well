import React from "react";
import {Box, Typography, Grid, IconButton, Link, Button, TextField, Container} from "@mui/material";
import {Facebook, Twitter, Instagram, LinkedIn} from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const socialMedia = [
    {icon: <Facebook/>, link: "#"},
    {icon: <Twitter/>, link: "#"},
    {icon: <Instagram/>, link: "#"},
    {icon: <LinkedIn/>, link: "#"},
];

const navigationLinks = ["Home", "About Us", "Services", "Experts", "Centres", "Partners", "Resources", "Contact"];
const services = ["Individual Therapy", "Couples Therapy", "Student Services", "Corporate Wellness", "Therapy Types", "Mental Health Assessments"];
const contactDetails = {
    phone: "+1 (123) 456-7890",
    email: "info@mindwell.com",
    address: "123 Broadway, Suite 456, New York, NY 10001",
};

const paymentMethods = ["VISA", "MC", "AMEX", "HSA"];

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "#002b5c", color: "white", padding: "64px 0 32px"}}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} lg={5}>
                        <Box
                            sx={{
                                fontWeight: 700,
                                fontSize: "24px",
                                lineHeight: "30px",
                                margin: "0px 0px 24px",
                            }}
                        >
                            MindWell
                        </Box>
                        <Box
                            sx={{
                                margin: "0 0 24px",
                                fontSize: "16px",
                                width: {lg: "70%"},
                                color: "#FFFFFFCC"
                            }}
                        >
                            MindWell provides accessible, professional mental health services for students and
                            professionals. Our mission is to make quality therapy and mental wellness resources
                            available to everyone who needs them.
                        </Box>


                        <Box sx={{display: "flex", gap: 2, mt: 2}}>
                            {socialMedia.map((item, index) => (
                                <IconButton
                                    key={index}
                                    component={Link}
                                    href={item.link}
                                    sx={{
                                        padding: "10px 10px",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "50%",
                                        transition: "all 0.3s ease-in-out",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#FE6A00",
                                            color: "white",
                                        },
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Box>


                        <Box sx={{display: "flex", mt: 3, gap: 2}}>

                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#000",
                                padding: "8px 16px",
                                borderRadius: 2,
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "#1F2937",
                                }
                            }}>
                                <Typography component={"span"}><NotificationsIcon sx={{fontSize: 20}}/></Typography>
                                <Box sx={{ml: 1}}>
                                    <Typography sx={{fontSize: "12px", fontWeight: "400", lineHeight: "16px"}}>Download
                                        on the</Typography>
                                    <Typography sx={{fontSize: "14px", fontWeight: "600", lineHeight: "18px"}}>App
                                        Store</Typography>

                                </Box>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#000",
                                padding: "8px 16px",
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: "#1F2937",
                                }
                            }}>
                                <Typography component={"span"}><PlayArrowIcon sx={{fontSize: 20}}/></Typography>
                                <Box sx={{ml: 1}}>
                                    <Typography sx={{fontSize: "12px", fontWeight: "400", lineHeight: "16px"}}> Get it
                                        on</Typography>
                                    <Typography sx={{fontSize: "14px", fontWeight: "600", lineHeight: "18px"}}>Google
                                        Play</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={4} lg={2}>
                        <Box sx={{
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "30px",
                            margin: "0px 0px 24px"
                        }}>
                            Navigate
                        </Box>
                        {navigationLinks.map((link, index) => (
                            <Box key={index} sx={{
                                fontSize: "16px",
                                margin: "15px 0px 0px ",
                                color: "#FFFFFFCC",
                                transition: "0.3s",
                                '&:hover': {
                                    color: "#fff",
                                    textDecoration: "underline",
                                }
                            }}>
                                <Link href="#" color="inherit" underline="none">
                                    {link}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={4} lg={3}>
                        <Box sx={{
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "30px",
                            margin: "0px 0px 24px"
                        }}>
                            Services
                        </Box>
                        {services.map((service, index) => (
                            <Box key={index} sx={{
                                fontSize: "16px",
                                margin: "15px 0px 0px ",
                                color: "#FFFFFFCC",
                                transition: "0.3s",
                                '&:hover': {
                                    color: "#fff",
                                    textDecoration: "underline",
                                }
                            }}>
                                <Link href="#" color="inherit" underline="none">
                                    {service}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={4} lg={2}>
                        <Box sx={{
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "30px",
                            margin: "0px 0px 24px",

                        }}>
                            Contact Us
                        </Box>
                        <Box
                            sx={{
                                fontSize: "16px",
                                margin: "16px 0px 0px ",
                                color: "#FFFFFFCC"
                            }}
                        >
                            <Typography sx={{
                                fontSize: "16px",
                                margin: "16px 0px 0px ",
                                alignItems: "center"
                            }}><CallIcon sx={{
                                color: "#FE6A00",
                            }}/> {contactDetails.phone}</Typography>
                            <Typography sx={{
                                fontSize: "16px",
                                margin: "16px 0px 0px "
                            }}><MailOutlineIcon sx={{
                                color: "#FE6A00",
                            }}/> {contactDetails.email}</Typography>
                            <Typography sx={{
                                fontSize: "16px",
                                margin: "16px 0px 0px "
                            }}><LocationOnIcon sx={{
                                color: "#FE6A00",
                            }}/> {contactDetails.address}</Typography>
                        </Box>
                        <Box sx={{margin: "32px 0px 16px", fontSize: "18px", fontWeight: "bold"}}>
                            We Accept
                        </Box>
                        <Box sx={{display: "flex", gap: 1, mt: 1}}>
                            {paymentMethods.map((method, index) => (
                                <Box key={index} variant="contained" sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    color: "#FFFFFFCC",
                                    fontWeight: "500",
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    width: "48px",
                                    display: "flex",
                                    height: "32px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "4px",
                                }}>
                                    {method}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>


                <Box sx={{textAlign: "center", mt: 5, borderTop: "1px solid #345284", padding: "48px 0 40px"}}>
                    <Box sx={{
                        fontSize: "20px",
                        margin: "0px 0px 8px",
                    }}>
                        Subscribe to Our Newsletter
                    </Box>
                    <Box sx={{fontSize: "16px", color: "#FFFFFFB3"}}>
                        Get the latest mental health tips and resources delivered straight to your inbox.
                    </Box>
                    <Box sx={{mt: 2}}>
                        <Grid container spacing={1} justifyContent="center">

                            <Grid item xs={12} sm={6} md={4} lg={5}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    placeholder="Your email address"
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid>


                            <Grid item xs={12} sm="auto">
                                <Button
                                    variant="contained"
                                    color="warning"
                                    sx={{width: {xs: "100%", sm: "auto",padding: "8px 24px"}}}
                                >
                                    Subscribe
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>


                <Box
                    sx={{
                        borderTop: "1px solid #345284",
                        color: "white",
                        padding: "32px 16px 0", // Added side padding for smaller screens
                    }}
                >
                    <Grid container spacing={2} alignItems="center" color={"#FFFFFFCC"}>
                        {/* Copyright Section */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="body2"
                                textAlign={{xs: "center"}}
                                sx={{fontSize: "14px"}} // Responsive font size
                            >
                                © 2023 MindWell. All rights reserved.
                            </Typography>
                        </Grid>

                        {/* Links Section */}
                        <Grid item xs={12} md={8}>
                            <Box textAlign={{xs: "center", sm: "center"}}>
                                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"].map(
                                    (item, index) => (
                                        <Link
                                            key={index}
                                            href="#"
                                            underline="none"
                                            sx={{
                                                marginX: {xs: "8px", sm: "16px"}, // Adjust spacing for smaller screens
                                                fontSize: "14px",
                                                color: "#FFFFFFCC",
                                                display: "inline-block", // Ensures spacing applies correctly
                                            }}
                                        >
                                            {item}
                                        </Link>
                                    )
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        textAlign: "center",
                        pt: 3,
                        borderTop: "1px solid #345284",
                        margin: "32px 0 0",
                        padding: "24px 0 0",
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "12px",
                                marginBottom: 2,
                                color: "#FFFFFFCC"
                            }}
                        >
                            Disclaimer: The content provided on this website is for informational purposes only and is
                            not intended to be a
                            substitute for professional medical advice, diagnosis, or treatment. Always seek the advice
                            of your physician
                            or other qualified health provider with any questions you may have regarding a medical
                            condition.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "12px",
                                color: "#FFFFFFCC",
                            }}
                        >
                            If you are in crisis or think you may have an emergency, call your doctor or emergency
                            services immediately.
                            MindWell does not offer crisis counseling or emergency services.
                        </Typography>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;