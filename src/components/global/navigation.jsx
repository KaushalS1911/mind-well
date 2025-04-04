import React, {useEffect, useState} from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Box,
    Collapse,
    Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/logo.jpg";
import {useLocation, useNavigate} from "react-router-dom";

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoverMenu, setHoverMenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleScrollToSection = (sectionId, parentPath) => {
        if (location.pathname !== parentPath) {
            navigate(`${parentPath}?scrollTo=${sectionId}`);
        } else {
            scrollToSection(sectionId);
        }
    };

    const scrollToSection = (sectionId) => {
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                const offset = 100;
                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({top, behavior: "smooth"});
            }
        }, 100);
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get("scrollTo");
        if (scrollTo) {
            scrollToSection(scrollTo);
        }
    }, [location]);

    const navItems = [
        {label: "Home", path: "/"},
        {label: "About Us", path: "/about"},
        {
            label: "Engagement",
            path: "/engagement",
            submenu: [
                {label: "Shape", sectionId: "shape"},
                {label: "ESOP", sectionId: "esop"},
            ],
        },
        {label: "Partner", path: "/partner"},
        {label: "Careers", path: "/careers"},
        {
            label: "Resources",
            path: "/resources",
            submenu: [
                {label: "Journaling", sectionId: "featured-latest-help"},
                {label: "Assessments", sectionId: "assessments"},
                {label: "Self Help Tools", sectionId: "self-help-tools"},
                {label: "Forms", sectionId: "forms"},
                {label: "Blogs", sectionId: "blogs"},
            ],
        },
        {label: "Contact Us", path: "/contact"},
    ];

    return (
        <Box>
            <AppBar sx={{backgroundColor: "white", color: "navy", position: {md: "fixed", xs: "static"}}}>
                <Toolbar
                    sx={{justifyContent: "space-between", margin: {xl: "0 172px", lg: "0 80px"}, padding: "12px 16px"}}>
                    <Box sx={{height: "70px", width: "70px"}}>
                        <Link href="/">
                            <img src={logo} alt="logo" style={{height: "100%", cursor: "pointer"}}/>
                        </Link>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{display: {xs: "none", md: "flex"}, gap: 2}}>
                        {navItems.map((item) =>
                            item.submenu ? (
                                <Box
                                    key={item.label}
                                    sx={{position: "relative", display: "flex", alignItems: "center", gap: "4px"}}
                                    onMouseEnter={() => setHoverMenu(item.label)}
                                    onMouseLeave={() => setHoverMenu(null)}
                                >
                                    <Box
                                        sx={{
                                            color: "#012765",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                            "&:hover": {color: "#FF6600"},
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                        }}
                                        onClick={() => navigate(item.path)}
                                    >
                                        {item.label}
                                        <KeyboardArrowDownIcon fontSize="small"/>
                                    </Box>
                                    {hoverMenu === item.label && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                backgroundColor: "white",
                                                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                                borderRadius: "5px",
                                                zIndex: 10,
                                                width: "150px",
                                            }}
                                        >
                                            {item.submenu.map((sub) => (
                                                <Box
                                                    key={sub.label}
                                                    onClick={() => handleScrollToSection(sub.sectionId, item.path)}
                                                    sx={{
                                                        padding: "10px",
                                                        color: "#012765",
                                                        fontSize: "14px",
                                                        cursor: "pointer",
                                                        "&:hover": {backgroundColor: "#FF6600", color: "#fff"},
                                                    }}
                                                >
                                                    {sub.label}
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <Link key={item.label} href={item.path} style={{textDecoration: "none"}}>
                                    <Box
                                        sx={{
                                            color: "#012765",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                            "&:hover": {color: "#FF6600"},
                                        }}
                                    >
                                        {item.label}
                                    </Box>
                                </Link>
                            )
                        )}
                    </Box>

                    <Link href="/contact" style={{textDecoration: "none"}}>
                        <Box
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                                borderRadius: "0.375rem",
                                cursor: "pointer",
                                backgroundColor: "#FE6A00",
                                padding: "8px 20px",
                                display: {md: "flex", xs: "none"},
                                transition: "0.5s",
                                "&:hover": {backgroundColor: "#da5e05"},
                            }}
                        >
                            Get Started
                        </Box>
                    </Link>

                    {/* Mobile Menu Icon */}
                    <IconButton edge="end" color="inherit" sx={{display: {md: "none"}}}
                                onClick={handleMobileMenuToggle}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu */}
            <Collapse
                in={mobileMenuOpen}
                timeout="auto"
                unmountOnExit
                sx={{display: {xs: "block", md: "none"}}}
                onExited={() => setMobileMenuOpen(false)}
            >
                <List sx={{backgroundColor: "#fff", color: "#000", padding: "8px 16px 16px"}}>
                    {navItems.map((item, index) => (
                        <Box key={index}>
                            <ListItem
                                sx={{p: 0, cursor: "pointer", "&:hover .MuiTypography-root": {color: "#FF6600"}}}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    window.location.href = item.path;
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: "16px",
                                        letterSpacing: "1px",
                                        color: "#012765",
                                        padding: "8px 0"
                                    }}
                                />
                            </ListItem>

                            {item.submenu && (
                                <List sx={{paddingLeft: "20px"}}>
                                    {item.submenu.map((sub, subIndex) => (
                                        <ListItem
                                            key={subIndex}
                                            sx={{
                                                p: 0,
                                                cursor: "pointer",
                                                "&:hover .MuiTypography-root": {color: "#FF6600"}
                                            }}
                                            onClick={() => {
                                                handleScrollToSection(sub.sectionId, item.path);
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            <ListItemText primary={sub.label} primaryTypographyProps={{
                                                fontSize: "14px",
                                                color: "#012765",
                                                padding: "4px 0"
                                            }}/>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </Box>
                    ))}
                    <Link href="/contact" passHref style={{textDecoration: "none"}}>
                        <Box
                            component="a"
                            sx={{
                                backgroundColor: "#FE6A00",
                                color: "#fff",
                                cursor: "pointer",
                                textAlign: "center",
                                borderRadius: "0.375rem",
                                padding: "8px 20px",
                                width: "100%",
                                marginTop: "26px",
                                textDecoration: "none",
                                "&:hover": {backgroundColor: "#da5e05"},
                            }}
                            onClick={() => setMobileMenuOpen(false)}
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
