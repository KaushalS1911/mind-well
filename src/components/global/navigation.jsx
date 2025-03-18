import React, {useState} from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Box,
    Collapse
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navItems = ["ABOUT US", "SERVICES", "EXPERTS", "CENTRES", "PARTNERS", "RESOURCES"];

    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor: "white", color: "navy"}}>
                <Toolbar sx={{
                    justifyContent: "space-between",
                    margin: {xl: "0 172px", lg: "0 80px"},
                    padding: "12px 16px"
                }}>
                    <Box sx={{fontWeight: "700", lineHeight: "2rem", fontSize: "24px", color: "#012765"}}>
                        MindWell
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{display: {xs: "none", md: "flex"}, gap: 2}}>
                        {navItems.map((item) => (
                            <Box key={item} sx={{
                                color: "#012765",
                                fontSize: "16px",
                                fontWeight: "500",
                                transition: "color 0.3s ease",
                                cursor: "pointer",
                                "&:hover": {color: "#FF6600"},
                            }}>
                                {item}
                            </Box>
                        ))}
                    </Box>

                    <Button variant="contained"
                            sx={{
                                backgroundColor: "#FE6A00",
                                padding: "8px 20px",
                                display: {md: "flex", xs: "none"},
                                "&:hover": {backgroundColor: "#da5e05"}
                            }}>
                        Get Started
                    </Button>

                    {/* Mobile Menu Icon */}
                    <IconButton edge="end" color="inherit" aria-label="menu"
                                sx={{display: {md: "none"}}} onClick={handleMobileMenuToggle}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu */}
            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit sx={{display: {xs: "block", md: "none"}}}>
                <List sx={{backgroundColor: "#fff", color: "#000", padding: "8px 16px 16px"}}>
                    {navItems.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                p: 0,
                                cursor: "pointer",
                                "&:hover .MuiTypography-root": { color: "#FF6600" }, // Proper hover effect
                            }}
                        >
                            <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                    fontSize: "16px",
                                    letterSpacing: "1px",
                                    color: "#012765",
                                    padding: "8px 0",
                                }}
                            />
                        </ListItem>
                    ))}

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#FE6A00",
                            padding: "8px 20px",
                            width: "100%",
                            marginTop: "26px",
                            "&:hover": {backgroundColor: "#da5e05"}
                        }}
                    >
                        Get Started
                    </Button>

                </List>
            </Collapse>
        </Box>
    );
}

export default Navigation;
