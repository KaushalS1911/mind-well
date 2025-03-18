import React from "react";
import { Box, Typography, Grid, IconButton, Link, Button, TextField, Container } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const socialMedia = [
    { icon: <Facebook />, link: "#" },
    { icon: <Twitter />, link: "#" },
    { icon: <Instagram />, link: "#" },
    { icon: <LinkedIn />, link: "#" },
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
        <Box sx={{ backgroundColor: "#002b5c", color: "white", py: 5, px: 3 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Box sx={{
                            fontWeight:700,
                            fontSize:"24px",
                            lineHeight:"30px",
                            margin:"0px 0px 24px"
                        }}>
                            MindWell
                        </Box>
                        <Box sx={{
                            margin:"0 0 24px",
                            fontSize:"16px",
                        }}>
                            MindWell provides accessible, professional mental health services for students and professionals. Our mission is to make quality therapy and mental wellness resources available to everyone who needs them.
                        </Box>
                        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                            {socialMedia.map((item, index) => (
                                <IconButton key={index} component={Link} href={item.link} sx={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "50%",
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",


                                }}>
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Box  sx={{
                            fontWeight:700,
                            fontSize:"24px",
                            lineHeight:"30px",
                            margin:"0px 0px 24px"
                        }}>
                            Navigate
                        </Box>
                        {navigationLinks.map((link, index) => (
                            <Box key={index} sx={{
                                fontSize:"16px",
                                margin:"12px 0px 0px "
                            }}>
                                <Link href="#" color="inherit" underline="none">
                                    {link}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Box  sx={{
                            fontWeight:700,
                            fontSize:"24px",
                            lineHeight:"30px",
                            margin:"0px 0px 24px"
                        }}>
                            Services
                        </Box>
                        {services.map((service, index) => (
                            <Box key={index} sx={{
                                fontSize:"16px",
                                margin:"12px 0px 0px "
                            }}>
                                <Link href="#" color="inherit" underline="none">
                                    {service}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box  sx={{
                            fontWeight:700,
                            fontSize:"24px",
                            lineHeight:"30px",
                            margin:"0px 0px 24px"
                        }}>
                            Contact Us
                        </Box>
                        <Box
                            sx={{
                                fontSize:"16px",
                                margin:"16px 0px 0px "
                            }}
                        >
                        <Typography  sx={{
                            fontSize:"16px",
                            margin:"16px 0px 0px "
                        }}>📞 {contactDetails.phone}</Typography>
                        <Typography  sx={{
                            fontSize:"16px",
                            margin:"16px 0px 0px "
                        }}>✉️ {contactDetails.email}</Typography>
                        <Typography  sx={{
                            fontSize:"16px",
                            margin:"16px 0px 0px "
                        }}>📍 {contactDetails.address}</Typography>
                        <Box  sx={{ margin:"32px 0px 16px",fontSize:"18px" }}>
                            We Accept
                        </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                            {paymentMethods.map((method, index) => (
                                <Button key={index} variant="contained" sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    color: "white",
                                    fontWeight: "500",
                                    fontSize:"12px",
                                    lineHeight:"16px",
                                }}>
                                    {method}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Newsletter Subscription Section */}
                <Box sx={{ textAlign: "center", mt: 5,borderTop: "1px solid #345284" , padding:"48px 0 40px"}}>
                    <Box sx={{
                        fontSize:"20px",
                        margin:"0px 0px 8px",
                    }}>
                        Subscribe to Our Newsletter
                    </Box>
                    <Box sx={{ fontSize:"16px" }}>
                        Get the latest mental health tips and resources delivered straight to your inbox.
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Your email address"
                            sx={{ backgroundColor: "white", borderRadius: 1, width: "500px" }}
                        />
                        <Button variant="contained" color="warning" >
                            Subscribe
                        </Button>
                    </Box>
                </Box>

                {/* Footer Bottom Section */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #345284",
                    padding: "32px 0 0",
                }}>
                <Box >© 2023 MindWell. All rights reserved.</Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, }}>
                    {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"].map((item, index) => (
                        <Link key={index} href="#" color="inherit" underline="none">
                            {item}
                        </Link>
                    ))}
                </Box>
                </Box>

                <Box sx={{ textAlign: "center", pt: 3, borderTop: "1px solid #345284",margin:"32px 0 0 ",padding:"24px 0 0" }}>

                    <Typography variant="body2" sx={{ fontSize:"12px",margin:"0 304px" }}>
                        Disclaimer: The content provided on this website is for informational purposes only and is not intended to be a
                        substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician
                        or other qualified health provider with any questions you may have regarding a medical condition.
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize:"12px",margin:"0 304px" }}>
                        If you are in crisis or think you may have an emergency, call your doctor or emergency services immediately.
                        MindWell does not offer crisis counseling or emergency services.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
