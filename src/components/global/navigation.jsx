import React, {useEffect, useState} from "react";
import {
    AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Box, Collapse, Link, Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/Emotionally Yours Logo.png";
import {useLocation, useNavigate} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import {Facebook, Instagram, LinkedIn, YouTube} from "@mui/icons-material";
import {styled} from "@mui/material/styles";


const SOCIAL_MEDIA_LINKS = [{icon: <LinkedIn/>, link: "https://www.linkedin.com/company/emotionallyours/"}, {
    icon: <Facebook/>, link: "https://www.facebook.com/share/1AmSYda79K/"
}, {icon: <Instagram/>, link: "https://www.instagram.com/mann_miitr?igsh=cWp1aWNiNm1vNzNx"}, {
    icon: <YouTube/>,
    link: "https://youtube.com/@emotionallyours?si=6h0Su7ZsmTpj0QbL"
}];

const StyledButton = styled(Button)(({theme}) => ({
    borderRadius: '12px',
    padding: '12px 30px',
    fontWeight: 700,
    fontSize: '1.1rem',
    textTransform: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
}));

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoverMenu, setHoverMenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const [openSubmenu, setOpenSubmenu] = useState(null);

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
        {
            label: "About Us", path: "/about", submenu: [{label: "Gallery", path: "/gallery"}]
        },
        {
            label: "Services",
            path: "/services",
            submenu: [{label: "SHAPE", path: "/services/shape"}, {
                label: "SHAPE+",
                path: "/services/shape-plus"
            }, {label: "ESOP", path: "/services/esop"}, {label: "PEP", path: "/services/pep"},],
        }, // {label: "Partner", path: "/partner"},
        {
            label: "Resources", // path: "/resources",
            submenu: [// { label: "Journaling", path: "/resources/journaling" },
                // {
                //     label: "Assessments",
                //     path: "/resources/assessments"
                // }, // {label: "Self Help Tools", path: "/resources/selfHelpTools"},
                // {label: "Forms", path: "/resources/forms"},
                {label: "Blogs", path: "/resources/blogs"},],
        }, // {label: "Session", path: "/session"},
        {label: "Careers", path: "/careers"},
        // {label: "Book Appointment", path: "/book-appointment"},
        {label: "Contact Us", path: "/contact"},];

    return (<Box>
        <AppBar
            sx={{
                backgroundColor: "white", color: "navy", position: {md: "fixed", xs: "static"},
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: {xl: "0 122px", lg: "0", xs: "0 19px"},
                    padding: {xl: "12px 16px", xs: "12px 10px"},
                }}
            >
                <Box sx={{height: "70px", width: {lg: "250px", md: "210px", xs: "220px"}}}>
                    <RouterLink to="/" style={{display: "inline-block", height: "100%"}}>
                        <img
                            src={logo}
                            alt="Emotionally Yours Logo"
                            style={{height: "100%", width: "100%", objectFit: "contain", cursor: "pointer"}}
                        />
                    </RouterLink>
                </Box>


                {/* Desktop Menu */}
                <Box sx={{display: {xs: "none", lg: "flex"}, gap: 2}}>
                    {navItems.map((item) => item.submenu ? (<Box
                        key={item.label}
                        sx={{
                            position: "relative", display: "flex", alignItems: "center", gap: "4px",
                        }}
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
                        {hoverMenu === item.label && (<Box
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
                            {item.submenu.map((sub) => (<Box
                                key={sub.label}
                                onClick={() => {
                                    // handleScrollToSection(sub.sectionId, item.path)
                                    navigate(sub.path);
                                }}
                                sx={{
                                    padding: "10px",
                                    color: "#012765",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "#FF6600", color: "#fff",
                                    },
                                }}
                            >
                                {sub.label}
                            </Box>))}
                        </Box>)}
                    </Box>) : (<Link
                        key={item.label}
                        href={item.path}
                        style={{textDecoration: "none"}}
                    >
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
                    </Link>))}
                </Box>

                <Box>
                    <StyledButton
                        variant="contained"
                        onClick={() => navigate('/resources/assessments')}
                        fullWidth
                        sx={{
                            bgcolor: 'rgba(255,98,0,0.9)',
                            color: '#fff',
                            fontWeight: 600,
                            py: 1,
                            fontSize: {xs: '0.9rem', sm: '1rem'},
                            display: {lg: "flex", xs: "none"}
                        }}
                    >
                        Self Assessments
                    </StyledButton>
                </Box>

                <Box sx={{display: "flex", gap: 1}}>
                    {SOCIAL_MEDIA_LINKS.map((item, index) => (<IconButton
                        key={index}
                        component={Link}
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                        sx={{
                            padding: "10px",
                            backgroundColor: "#002D62",
                            borderRadius: "50%",
                            color: "white",
                            display: {lg: "flex", xs: "none"},
                            transition: "0.5s",
                            '&:hover': {
                                backgroundColor: "#FE6A00",
                            }
                        }}
                    >
                        {item.icon}
                    </IconButton>))}
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    edge="end"
                    color="inherit"
                    sx={{display: {lg: "none"}}}
                    onClick={handleMobileMenuToggle}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>

        {/* Mobile Menu */}
        <Collapse
            in={mobileMenuOpen}
            timeout="auto"
            unmountOnExit
            sx={{display: {xs: "block", lg: "none"}}}
            onExited={() => setMobileMenuOpen(false)}
        >
            <List
                sx={{
                    backgroundColor: "#fff", color: "#000", padding: "8px 16px 16px", mt: {md: 13, xs: 0}
                }}
            >
                {navItems.map((item, index) => (<Box key={index}>
                    <ListItem
                        sx={{
                            p: 0,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Title Click → navigate to main path */}
                        <Box
                            onClick={() => {
                                setMobileMenuOpen(false);
                                navigate(item.path);
                            }}
                            style={{flexGrow: 1}}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: "16px", letterSpacing: "1px", color: "#012765", padding: "8px 0",
                                }}
                            />
                        </Box>

                        {/* Arrow Click → expand/collapse submenu */}
                        {item.submenu && (<IconButton
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation(); // stop bubbling to parent
                                setOpenSubmenu(openSubmenu === index ? null : index);
                            }}
                        >
                            <KeyboardArrowDownIcon
                                sx={{
                                    transition: "0.3s",
                                    transform: openSubmenu === index ? "rotate(180deg)" : "rotate(0deg)",
                                    color: "#012765",
                                }}
                            />
                        </IconButton>)}
                    </ListItem>

                    {/* Submenu Items */}
                    {item.submenu && (<Collapse in={openSubmenu === index} timeout="auto" unmountOnExit>
                        <List sx={{paddingLeft: "20px"}}>
                            {item.submenu.map((sub, subIndex) => (<ListItem
                                key={subIndex}
                                sx={{
                                    p: 0,
                                    cursor: "pointer",
                                    "&:hover .MuiTypography-root": {color: "#FF6600"},
                                }}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    navigate(sub.path);
                                }}
                            >
                                <ListItemText
                                    primary={sub.label}
                                    primaryTypographyProps={{
                                        fontSize: "14px", color: "#012765", padding: "4px 0",
                                    }}
                                />
                            </ListItem>))}
                        </List>
                    </Collapse>)}
                </Box>))}

                <Box sx={{px: 3, py: 2}}>
                    <StyledButton
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            navigate('/resources/assessments');
                            setMobileMenuOpen(false);
                        }}
                        sx={{
                            bgcolor: 'rgba(255,98,0,0.9)',
                            color: '#fff',
                            '&:hover': {
                                bgcolor: 'rgba(255,98,0,1)',
                            },
                            mb: 2
                        }}
                    >
                        Self Assessments
                    </StyledButton>
                </Box>

                {/* Mobile Social Icons */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    px: 3,
                    py: 2,
                    borderTop: "1px solid rgba(0,0,0,0.05)"
                }}>
                    {SOCIAL_MEDIA_LINKS.map((item, index) => (
                        <IconButton
                            key={index}
                            component={Link}
                            href={item.link}
                            target="_blank"
                            rel="noopener"
                            sx={{
                                padding: "10px",
                                backgroundColor: "#002D62",
                                borderRadius: "50%",
                                color: "white",
                                '&:hover': {
                                    backgroundColor: "#001f44",
                                }
                            }}
                        >
                            {item.icon}
                        </IconButton>
                    ))}
                </Box>
            </List>
        </Collapse>
    </Box>);
}

export default Navigation;
