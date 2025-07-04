import React from "react";
import { Typography, List, ListItem, Box } from "@mui/material";
import { Email, LocationOn } from "@mui/icons-material";
import { ContactInfoBox, InfoDetailBox } from "./styles";
import { CONTACT_INFO } from "./constants";

const ContactInfo = () => {
    // Function to render the appropriate icon based on icon name
    const renderIcon = (iconName) => {
        switch (iconName) {
            case "Email":
                return <Email sx={{ color: "#FF6600", mr: 1 }} />;
            case "LocationOn":
                return <LocationOn sx={{ color: "#FF6600", mr: 1 }} />;
            default:
                return null;
        }
    };

    return (
        <ContactInfoBox>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: "700" }}>
                Contact Information
            </Typography>

            <List>
                {CONTACT_INFO.map((info, index) => (
                    <ListItem key={index} sx={{ mt: 2, display: "block" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            {renderIcon(info.icon)}
                            <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                                {info.title}
                            </Typography>
                        </Box>
                        <InfoDetailBox>
                            {info.details.map((line, i) => (
                                <Typography key={i} variant="body2">
                                    {line}
                                </Typography>
                            ))}
                        </InfoDetailBox>
                    </ListItem>
                ))}
            </List>
        </ContactInfoBox>
    );
};

export default ContactInfo;
