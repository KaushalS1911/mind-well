import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { InfoCardBox, SocialIconButton, styles } from "./styles";
import { SOCIAL_MEDIA_LINKS } from "./constants";

const SocialMedia = () => {
    // Function to render the appropriate icon based on icon name
    const renderIcon = (iconName) => {
        switch (iconName) {
            case "LinkedIn":
                return <LinkedIn />;
            case "Facebook":
                return <Facebook />;
            case "Instagram":
                return <Instagram />;
            case "YouTube":
                return <YouTube />;
            default:
                return null;
        }
    };

    return (
        <InfoCardBox>
            <Typography sx={styles.sectionTitle}>
                Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                {SOCIAL_MEDIA_LINKS.map((item, index) => (
                    <SocialIconButton
                        key={index}
                        component={Link}
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                    >
                        {renderIcon(item.icon)}
                    </SocialIconButton>
                ))}
            </Box>
            <Typography sx={{ mt: 2, fontSize: "14px", color: "#6B7280" }}>
                Follow us on social media for the latest updates, mental health tips, and
                special offers
            </Typography>
        </InfoCardBox>
    );
};

export default SocialMedia;
