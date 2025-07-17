import React from "react";
import { Typography, List, ListItem, Box } from "@mui/material";
import {
    MarkAsUnread,
    MailOutline,
    MyLocation,
    LocationOn
} from "@mui/icons-material";
import { ContactInfoBox, InfoDetailBox } from "./styles";
import { CONTACT_INFO } from "./constants";

// Icon rendering function
const renderIcon = (iconName) => {
    const iconProps = { sx: { color: "#FF6600", mr: 1 } };

    switch (iconName) {
        case "MarkAsUnread":
            return <MarkAsUnread {...iconProps} />;
        case "MailOutline":
            return <MailOutline {...iconProps} />;
        case "MyLocation":
            return <MyLocation {...iconProps} />;
        case "LocationOn":
            return <LocationOn {...iconProps} />;
        default:
            return null;
    }
};

const ContactInfo = () => {
    return (
        <ContactInfoBox>
            <Typography variant="h5" sx={{ mb: 0, fontWeight: "700" }}>
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
                            {info.details1.map((line, i) => (
                                <Typography key={i} variant="body2">
                                    {line}
                                </Typography>
                            ))}
                        </InfoDetailBox>
                        <InfoDetailBox>
                            {info.details2.map((line, i) => (
                                <Typography key={i} variant="body2" mt="15px">
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
