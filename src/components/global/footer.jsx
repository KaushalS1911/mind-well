import React from "react";
import {Box, Typography, Grid, IconButton, Link, Button, TextField, Container, Divider} from "@mui/material";
import {Facebook, Twitter, Instagram, LinkedIn, YouTube} from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CallIcon from '@mui/icons-material/Call';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import logo from "../../assets/Emotionally Yours Logo1.jpg";
import {Link as RouterLink} from "react-router-dom";


const SOCIAL_MEDIA_LINKS = [
    {icon: <LinkedIn/>, link: "https://www.linkedin.com/company/emotionallyours/"},
    {icon: <Facebook/>, link: "https://www.facebook.com/share/1AmSYda79K/"},
    {icon: <Instagram/>, link: "https://www.instagram.com/mann_miitr?igsh=cWp1aWNiNm1vNzNx"},
    {icon: <YouTube/>, link: "https://youtube.com/@emotionallyours?si=6h0Su7ZsmTpj0QbL"}
];

const navigationLinks = [
    {name: "Home", path: "/"},
    {name: "About Us", path: "/about"},
    // {name: "Services", path: "/services"},
    {name: "Gallery", path: "/gallery"},
    // {name: "Resources", path: "/resources"},
    {name: "Contact", path: "/contact"},
];
const services = [
    {name: "SHAPE", path: "/services/shape"},
    {name: "SHAPE+", path: "/services/shape-plus"},
    {name: "ESOP", path: "/services/esop"},
    {name: "PEP", path: "/services/pep"},
]

const contactDetails = {
    emails: [
        {icon: <MailOutlineIcon/>, value: "connect@emotionallyours.com"},
    ],
    addresses: [
        {
            icon: <LocationOnIcon/>,
            value: "HO: B-204, Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri East, Mumbai-400093."
        },
        {icon: <PinDropIcon/>, value: "RO: B-205, Noida One, Sector 62, Noida, Uttar Pradesh 201309"}
    ]
};
const paymentMethods = ["VISA", "MC", "AMEX", "HSA"];

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "#002b5c", color: "white", padding: "70px 20px 45px", mt: 10}}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} lg={5}>
                        <Box sx={{height: "70px", width: "270px", mb: 2}}>
                            <RouterLink to="/" style={{display: "inline-block", height: "100%"}}>
                                <img
                                    src={logo}
                                    alt="Emotionally Yours Logo"
                                    style={{
                                        height: "100%",
                                        width: "auto",
                                        objectFit: "contain",
                                        borderRadius: 10,
                                        cursor: "pointer"
                                    }}
                                />
                            </RouterLink>
                        </Box>
                        <Box
                            sx={{
                                margin: "0 0 24px",
                                fontSize: "16px",
                                width: {lg: "70%"},
                                color: "#FFFFFFCC",
                                textAlign: "justify"
                            }}
                        >
                            "Emotionally Yours" provides accessible, professional mental health services for students
                            and
                            professionals. Our mission is to make quality therapy and mental wellness resources
                            available to everyone who needs them
                        </Box>


                        <Box sx={{display: "flex", gap: 2, mt: 2}}>
                            {SOCIAL_MEDIA_LINKS.map((item, index) => (
                                <IconButton
                                    key={index}
                                    component={Link}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener"
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


                        {/*<Box sx={{display: "flex", mt: 3, gap: 2}}>*/}

                        {/*    <Box sx={{*/}
                        {/*        display: "flex",*/}
                        {/*        justifyContent: "center",*/}
                        {/*        alignItems: "center",*/}
                        {/*        backgroundColor: "#000",*/}
                        {/*        padding: "8px 16px",*/}
                        {/*        borderRadius: 2,*/}
                        {/*        cursor: "pointer",*/}
                        {/*        "&:hover": {*/}
                        {/*            backgroundColor: "#1F2937",*/}
                        {/*        }*/}
                        {/*    }}>*/}
                        {/*        <Typography component={"span"}><NotificationsIcon sx={{fontSize: 20}}/></Typography>*/}
                        {/*        <Box sx={{ml: 1}}>*/}
                        {/*            <Typography sx={{fontSize: "12px", fontWeight: "400", lineHeight: "16px"}}>*/}
                        {/*                Download on the*/}
                        {/*            </Typography>*/}
                        {/*            <Typography sx={{fontSize: "14px", fontWeight: "600", lineHeight: "18px"}}>*/}
                        {/*                App Store*/}
                        {/*            </Typography>*/}
                        {/*        </Box>*/}
                        {/*    </Box>*/}
                        {/*    <Box sx={{*/}
                        {/*        display: "flex",*/}
                        {/*        justifyContent: "center",*/}
                        {/*        alignItems: "center",*/}
                        {/*        backgroundColor: "#000",*/}
                        {/*        padding: "8px 16px",*/}
                        {/*        borderRadius: 2,*/}
                        {/*        cursor: "pointer",*/}
                        {/*        "&:hover": {*/}
                        {/*            backgroundColor: "#1F2937",*/}
                        {/*        }*/}
                        {/*    }}>*/}
                        {/*        <Typography component={"span"}><PlayArrowIcon sx={{fontSize: 20}}/></Typography>*/}
                        {/*        <Box sx={{ml: 1}}>*/}
                        {/*            <Typography sx={{fontSize: "12px", fontWeight: "400", lineHeight: "16px"}}>*/}
                        {/*                Get it on*/}
                        {/*            </Typography>*/}
                        {/*            <Typography sx={{fontSize: "14px", fontWeight: "600", lineHeight: "18px"}}>*/}
                        {/*                Google Play*/}
                        {/*            </Typography>*/}
                        {/*        </Box>*/}
                        {/*    </Box>*/}
                        {/*</Box>*/}
                    </Grid>


                    <Grid item xs={12} sm={3} lg={2}>
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
                                mt: 1, fontSize: "16px",
                                margin: "15px 0px 0px ",
                                color: "#FFFFFFCC",
                                transition: "0.3s",
                                '&:hover': {
                                    color: "#fff",
                                    textDecoration: "underline",
                                }
                            }}>
                                <Link component={RouterLink} to={link.path} color="inherit" underline="none">
                                    {link.name}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={3} lg={2}>
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
                                mt: 1, fontSize: "16px",
                                margin: "15px 0px 0px ",
                                color: "#FFFFFFCC",
                                transition: "0.3s",
                                '&:hover': {
                                    color: "#fff",
                                    textDecoration: "underline",
                                }
                            }}>
                                <Link href={service.path} passHref color="inherit" underline="none">
                                    <Box component="a">
                                        {service.name}
                                    </Box>
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={5} md={6} lg={3}>
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
                                marginTop: "16px",
                                color: "#FFFFFFCC"
                            }}
                        >
                            {/* Emails */}
                            {contactDetails.emails.map((email, index) => (
                                <Box
                                    key={`email-${index}`}
                                    sx={{
                                        fontSize: "14px",
                                        marginTop: "16px",
                                        display: "flex",
                                        textAlign: "justify",
                                    }}
                                >
                                    <Box sx={{color: "#FE6A00", mr: 1}}>
                                        {email.icon}
                                    </Box>
                                    {email.value}
                                </Box>
                            ))}

                            {/* Addresses */}
                            {contactDetails.addresses.map((address, index) => (
                                <Box
                                    key={`address-${index}`}
                                    sx={{
                                        fontSize: "14px",
                                        marginTop: "16px",
                                        display: "flex",
                                        textAlign: "justify",
                                    }}
                                >
                                    <Box sx={{color: "#FE6A00", mr: 1}}>
                                        {address.icon}
                                    </Box>
                                    {address.value}
                                </Box>
                            ))}
                        </Box>

                        {/*<Box sx={{margin: "32px 0px 16px", fontSize: "18px", fontWeight: "bold"}}>*/}
                        {/*    We Accept*/}
                        {/*</Box>*/}
                        {/*<Box sx={{display: "flex", gap: 1, mt: 1}}>*/}
                        {/*    {paymentMethods.map((method, index) => (*/}
                        {/*        <Box key={index} variant="contained" sx={{*/}
                        {/*            backgroundColor: "rgba(255, 255, 255, 0.1)",*/}
                        {/*            color: "#FFFFFFCC",*/}
                        {/*            fontWeight: "500",*/}
                        {/*            fontSize: "12px",*/}
                        {/*            lineHeight: "16px",*/}
                        {/*            width: "48px",*/}
                        {/*            display: "flex",*/}
                        {/*            height: "32px",*/}
                        {/*            justifyContent: "center",*/}
                        {/*            alignItems: "center",*/}
                        {/*            borderRadius: "4px",*/}
                        {/*        }}>*/}
                        {/*            {method}*/}
                        {/*        </Box>*/}
                        {/*    ))}*/}
                        {/*</Box>*/}
                    </Grid>
                </Grid>


                {/*<Box sx={{textAlign: "center", mt: 5, borderTop: "1px solid #345284", padding: "48px 0 40px"}}>*/}
                {/*    <Box sx={{*/}
                {/*        fontSize: "20px",*/}
                {/*        margin: "0px 0px 8px",*/}
                {/*    }}>*/}
                {/*        Subscribe to Our Newsletter*/}
                {/*    </Box>*/}
                {/*    <Box sx={{fontSize: "16px", color: "#FFFFFFB3"}}>*/}
                {/*        Get the latest mental health tips and resources delivered straight to your inbox.*/}
                {/*    </Box>*/}
                {/*    <Box sx={{mt: 2}}>*/}
                {/*        <Grid container spacing={1} justifyContent="center">*/}

                {/*            <Grid item xs={12} sm={6} md={4} lg={5}>*/}
                {/*                <TextField*/}
                {/*                    fullWidth*/}
                {/*                    size="small"*/}
                {/*                    variant="outlined"*/}
                {/*                    placeholder="Your email address"*/}
                {/*                    sx={{*/}
                {/*                        backgroundColor: "white",*/}
                {/*                        borderRadius: 1,*/}
                {/*                    }}*/}
                {/*                />*/}
                {/*            </Grid>*/}


                {/*            <Grid item xs={12} sm="auto">*/}
                {/*                <Button*/}
                {/*                    variant="contained"*/}
                {/*                    color="warning"*/}
                {/*                    sx={{width: {xs: "100%", sm: "auto", padding: "8px 24px"}}}*/}
                {/*                >*/}
                {/*                    Subscribe*/}
                {/*                </Button>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Box>*/}
                {/*</Box>*/}


                {/*<Box*/}
                {/*    sx={{*/}
                {/*        borderTop: "1px solid #345284",*/}
                {/*        borderBottom: "1px solid #345284",*/}
                {/*        color: "white",*/}
                {/*        padding: "32px 16px 32px ",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Grid container spacing={2} alignItems="center" color={"#FFFFFFCC"}>*/}
                {/*        /!* Copyright Section *!/*/}
                {/*        <Grid item xs={12} md={4}>*/}
                {/*            <Box*/}
                {/*                sx={{fontSize: "14px", textAlign: "center"}}*/}
                {/*            >*/}
                {/*                © 2023 Emotionally Yours. All rights reserved.*/}
                {/*            </Box>*/}
                {/*        </Grid>*/}

                {/*        /!* Links Section *!/*/}
                {/*        <Grid item xs={12} md={8}>*/}
                {/*            <Box textAlign={{xs: "center", sm: "center"}}>*/}
                {/*                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"].map(*/}
                {/*                    (item, index) => (*/}
                {/*                        <Link*/}
                {/*                            key={index}*/}
                {/*                            href="#"*/}
                {/*                            underline="none"*/}
                {/*                            sx={{*/}
                {/*                                marginX: {xs: "8px", sm: "16px"},*/}
                {/*                                fontSize: "14px",*/}
                {/*                                color: "#FFFFFFCC",*/}
                {/*                                display: "inline-block",*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            {item}*/}
                {/*                        </Link>*/}
                {/*                    )*/}
                {/*                )}*/}
                {/*            </Box>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Box>*/}

                {/*<Box*/}
                {/*    sx={{*/}
                {/*        textAlign: "center",*/}
                {/*        marginTop: "32px",*/}
                {/*        paddingTop: "24px",*/}
                {/*        width: {xs: "90%", sm: "80%", md: "60%"},*/}
                {/*        mx: "auto",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Box*/}
                {/*        sx={{*/}
                {/*            fontSize: "12px",*/}
                {/*            marginBottom: 2,*/}
                {/*            color: "#FFFFFFCC",*/}
                {/*            textAlign: "center",*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Disclaimer: The content provided on this website is for informational purposes only and is not*/}
                {/*        intended to be a*/}
                {/*        substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of*/}
                {/*        your physician*/}
                {/*        or other qualified health provider with any questions you may have regarding a medical*/}
                {/*        condition.*/}
                {/*    </Box>*/}
                {/*    <Box*/}
                {/*        sx={{*/}
                {/*            fontSize: "12px",*/}
                {/*            color: "#FFFFFFCC",*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        If you are in crisis or think you may have an emergency, call your doctor or emergency services*/}
                {/*        immediately.*/}
                {/*        Emotionally Yours does not offer crisis counseling or emergency services.*/}
                {/*    </Box>*/}
                {/*</Box>*/}
                {/* --- Disclaimer & Attribution Section Fixed --- */}
                <Box>
                    <Divider sx={{my: 4, borderColor: "#ffffff33", width: "100%"}}/>
                    <Box sx={{
                        maxWidth: "900px",
                        mx: "auto",
                        textAlign: 'center',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        {/* Legal Info */}
                        <Typography variant="subtitle2" gutterBottom>
                            Disclaimer
                        </Typography>
                        <Typography variant="body2" sx={{color: "#FFFFFFCC", mb: 2}}>
                            We are not a medical service or suicide prevention helpline. If you are feeling
                            suicidal, we suggest you immediately call a suicide prevention helpline like KIRAN:
                            18005990019 (24 hours, 7 days a week)
                        </Typography>

                        <Typography variant="subtitle2" gutterBottom>
                            Attribution
                        </Typography>
                        <Typography variant="body2" sx={{color: "#FFFFFFCC"}}>
                            "Emotionally Yours" provides attribution to Freepik for images
                        </Typography>
                    </Box>
                </Box>


            </Container>
        </Box>
    );
};

export default Footer;