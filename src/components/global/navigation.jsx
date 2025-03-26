import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Box,
    Collapse, Link
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.jpg";

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navItems = [
        { label: "Home Page", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Engagement", path: "/engagement" },
        { label: "Partner", path: "/partner" },
        { label: "Careers", path: "/careers" },
        { label: "Resources", path: "/resources" },
        { label: "Contact Us", path: "/contact" }
    ];

    return (
        <Box>
            <AppBar sx={{ backgroundColor: "white", color: "navy", position: { md: "fixed", xs: "static" } }}>
                <Toolbar sx={{
                    justifyContent: "space-between",
                    margin: { xl: "0 172px", lg: "0 80px" },
                    padding: "12px 16px"
                }}>
                    <Box sx={{
                        height: "70px",
                        width: "70px",
                    }}>
                        <Link href="/">
                            <img src={logo} alt="logo" style={{
                                height: "100%",
                                cursor: "pointer"
                            }} />
                        </Link>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.path} passHref style={{ textDecoration: "none" }}>
                                <Box sx={{
                                    color: "#012765",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    transition: "color 0.3s ease",
                                    cursor: "pointer",
                                    "&:hover": { color: "#FF6600" },
                                }}>
                                    {item.label}
                                </Box>
                            </Link>
                        ))}
                    </Box>

                    <Link href="/get-started" passHref style={{ textDecoration: "none" }}>
                        <Box
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                                borderRadius: "0.375rem",
                                cursor: "pointer",
                                backgroundColor: "#FE6A00",
                                padding: "8px 20px",
                                display: { md: "flex", xs: "none" },
                                transition: "0.5s",
                                "&:hover": { backgroundColor: "#da5e05" }
                            }}>
                            Get Started
                        </Box>
                    </Link>

                    {/* Mobile Menu Icon */}
                    <IconButton edge="end" color="inherit" aria-label="menu"
                                sx={{ display: { md: "none" } }} onClick={handleMobileMenuToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu */}
            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit sx={{ display: { xs: "block", md: "none" } }}>
                <List sx={{ backgroundColor: "#fff", color: "#000", padding: "8px 16px 16px" }}>
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.path} passHref style={{ textDecoration: "none" }}>
                            <ListItem
                                sx={{
                                    p: 0,
                                    cursor: "pointer",
                                    "&:hover .MuiTypography-root": { color: "#FF6600" },
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: "16px",
                                        letterSpacing: "1px",
                                        color: "#012765",
                                        padding: "8px 0",
                                    }}
                                />
                            </ListItem>
                        </Link>
                    ))}

                    <Link href="/get-started" passHref style={{ textDecoration: "none" }}>
                        <Box
                            sx={{
                                backgroundColor: "#FE6A00",
                                color: "#fff",
                                cursor: "pointer",
                                textAlign: "center",
                                borderRadius: "0.375rem",
                                padding: "8px 20px",
                                width: "100%",
                                marginTop: "26px",
                                "&:hover": { backgroundColor: "#da5e05" }
                            }}
                        >
                            Get Started
                        </Box>
                    </Link>
                </List>
            </Collapse>
        </Box>
    );
}

export default Navigation;
