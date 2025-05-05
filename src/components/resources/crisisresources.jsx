import React from "react";
import {
    Container,
    Grid,
    Box,
    TextField,
    Button,
    Typography,
} from "@mui/material";
import {Phone} from "@mui/icons-material";

// Reusable Card component for Crisis Resources
const CrisisResourceCard = ({title, description, icon, contact}) => (
    <Grid item xs={12} md={4}>
        <Box sx={{boxShadow: 1, borderRadius: 2, padding: 3, height: "100%"}}>
            <Typography variant="h6" sx={{color: "#012765", mb: 1}}>
                {title}
            </Typography>
            <Typography sx={{color: "#4B5563", fontSize: 14, mb: 2, lineHeight: "20px"}}>
                {description}
            </Typography>
            <Box sx={{color: "#FE6A00", display: "flex", alignItems: "center", gap: 1}}>
                {icon} {contact}
            </Box>
        </Box>
    </Grid>
);

function CrisisResources() {
    const crisisResources = [
        {
            title: "National Suicide Prevention Lifeline",
            description: "24/7, free and confidential support for people in distress.",
            icon: <Phone sx={{color: "#FF7A00", fontSize: 20}}/>,
            contact: "988",
        },
        {
            title: "Crisis Text Line",
            description: "Text with a trained crisis counselor 24/7.",
            contact: "Text HOME to 741741",
        },
        {
            title: "Emergency Services",
            description: "For immediate danger, call emergency services.",
            icon: <Phone sx={{color: "#FF7A00", fontSize: 20}}/>,
            contact: "911",
        },
    ];

    return (
        <Box sx={{backgroundColor: "#F8FAFC",}}>
            <Box component="section" sx={{mx: {xs: '20px', sm: '30px', md: '50px', xl: 'auto'}}}>
                <Container maxWidth="xl" sx={{mt: 4, padding: "30px 0"}}>
                    {/* Crisis Resources Section */}
                    <Box sx={{ borderRadius: 2, padding: "40px", marginBottom: "60px"}}>
                        <Typography variant="h5" sx={{color: "#012765", fontWeight: "700", mb: 4}}>
                            Crisis Resources
                        </Typography>
                        <Typography sx={{color: "#4B5563", mb: 4, fontSize: "16px"}}>
                            If you or someone you know is experiencing a mental health emergency, please contact these
                            resources
                            for immediate support.
                        </Typography>

                        {/* Crisis Resource Cards */}
                        <Grid container spacing={2}>
                            {crisisResources.map((resource, index) => (
                                <CrisisResourceCard key={index} {...resource} />
                            ))}
                        </Grid>

                        {/* Note Section */}
                        <Box sx={{backgroundColor: "#ECEFF3", padding: 2, marginTop: 3, borderRadius: 1}}>
                            <Typography sx={{fontSize: "14px", color: "#012765"}}>
                                <b>Note:</b> "Emotionally Yours" is not a crisis service. If you are experiencing a
                                mental
                                health
                                emergency, please contact the resources above for immediate assistance.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Newsletter Subscription Section */}
                    <Box
                        sx={{
                            backgroundColor: "#FE6A00",
                            padding: "40px",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: {xs: "column", md: "row"},
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "20px",
                        }}
                    >
                        {/* Left Section - 50% Width */}
                        <Box sx={{flex: 1, minWidth: "50%"}}>
                            <Typography sx={{color: "#FFFFFF", fontSize: "24px", fontWeight: "700", mb: 2}}>
                                Subscribe to Our Mental Wellness Newsletter
                            </Typography>
                            <Typography sx={{color: "#FFFFFF", fontSize: "16px"}}>
                                Get the latest mental health tips, resources, and insights delivered to your inbox
                                bi-weekly.
                            </Typography>
                        </Box>

                        {/* Right Section - 50% Width (Input, Button & Privacy Text) */}
                        <Box sx={{width: "100%"}}>
                            {/* Input & Button Section */}
                            <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 2}}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Your email address"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            backgroundColor: "#FFFFFF",
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "12px 16px",
                                        },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#012765",
                                        color: "#FFFFFF",
                                        padding: "12px 24px",
                                        borderRadius: "0.375rem",
                                        transition: ".3s",
                                        "&:hover": {backgroundColor: "#011B40"},
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Box>

                            {/* Privacy Text Below */}
                            <Typography sx={{color: "#FFFFFF", fontSize: "12px", mt: 1}}>
                                We respect your privacy. Unsubscribe at any time.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default CrisisResources;
