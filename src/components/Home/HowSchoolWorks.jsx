import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Tabs,
    Tab,
    useTheme,
    styled,
    Divider,
} from "@mui/material";
import {
    School,
    Business,
    Person,
    Groups,
    Psychology,
    TrendingUp,
    EmojiObjects,
    Group,
    Work,
    People,
    BusinessCenter,
} from "@mui/icons-material";
import img1 from '../../assets/images/Home/works/worksschool.png'
import img2 from '../../assets/images/Home/works/Individual.png'
import img3 from '../../assets/images/Home/works/organization.png'
import img4 from '../../assets/images/Home/works/Corporate-Philanthropy-Feature.webp'

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    height: "100%",
    backgroundColor: "#F9FAFB",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "4px",
        height: "100%",
        background: "#FF7F1E",
    },
}));
const StyledTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
        backgroundColor: "#FF7A00",
        height: "4px",
    },
});
const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    marginRight: theme.spacing(1),
    color: "#4B5563",
    "&.Mui-selected": {
        color: "#012765",
    },
    "&:hover": {
        color: "#FF7A00",
    },
}));
const tabData = [
    {
        label: "Schools",
        icon: <School sx={{ color: "#FF7A00" }} />,
        image: img1,
        title: "Empowering Educational Institutions",
        description: "Transform your school's emotional wellness program with our comprehensive solutions.",
        features: [
            {
                icon: <Group sx={{ color: "#012765" }} />,
                title: "Student Well-being",
                description: "Enhance emotional intelligence and mental health support for students.",
            },
            {
                icon: <Psychology sx={{ color: "#012765" }} />,
                title: "Teacher Development",
                description: "Equip educators with tools to foster emotional growth in classrooms.",
            },
            {
                icon: <People sx={{ color: "#012765" }} />,
                title: "Parent Engagement",
                description: "Involve parents in creating a supportive emotional environment.",
            },
        ],
    },
    {
        label: "Corporates",
        icon: <BusinessCenter sx={{ color: "#FF7A00" }} />,
        image: img4,
        title: "Corporate Emotional Wellness",
        description: "Boost productivity and employee satisfaction through emotional intelligence.",
        features: [
            {
                icon: <Work sx={{ color: "#012765" }} />,
                title: "Employee Well-being",
                description: "Create a supportive work environment that values emotional health.",
            },
            {
                icon: <TrendingUp sx={{ color: "#012765" }} />,
                title: "Leadership Development",
                description: "Develop emotionally intelligent leaders who inspire and motivate.",
            },
            {
                icon: <Group sx={{ color: "#012765" }} />,
                title: "Team Building",
                description: "Foster strong team dynamics through emotional connection.",
            },
        ],
    },
    {
        label: "Individuals",
        icon: <Person sx={{ color: "#FF7A00" }} />,
        image: img2,
        title: "Personal Growth Journey",
        description: "Embark on a transformative journey of emotional self-discovery.",
        features: [
            {
                icon: <Psychology sx={{ color: "#012765" }} />,
                title: "Self-Awareness",
                description: "Develop deeper understanding of your emotions and reactions.",
            },
            {
                icon: <TrendingUp sx={{ color: "#012765" }} />,
                title: "Personal Development",
                description: "Build resilience and emotional strength for life's challenges.",
            },
            {
                icon: <People sx={{ color: "#012765" }} />,
                title: "Relationship Skills",
                description: "Enhance your ability to connect and communicate effectively.",
            },
        ],
    },
    {
        label: "Organizations",
        icon: <Groups sx={{ color: "#FF7A00" }} />,
        image: img3,
        title: "Organizational Transformation",
        description: "Drive cultural change through emotional intelligence initiatives.",
        features: [
            {
                icon: <Business sx={{ color: "#012765" }} />,
                title: "Cultural Development",
                description: "Build an emotionally intelligent organizational culture.",
            },
            {
                icon: <TrendingUp sx={{ color: "#012765" }} />,
                title: "Change Management",
                description: "Navigate organizational changes with emotional intelligence.",
            },
            {
                icon: <EmojiObjects sx={{ color: "#012765" }} />,
                title: "Strategic Growth",
                description: "Align emotional wellness with organizational goals.",
            },
        ],
    },
];
function HowSchoolWorks() {
    const [selectedTab, setSelectedTab] = useState(0);
    const theme = useTheme();
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const currentTabData = tabData[selectedTab];
    return (
        <Box sx={{ py: 10, backgroundColor: "#F8FAFC" }}>
            <Container maxWidth="xl">
                <Box
                    className="Montserrat"
                    sx={{
                        fontSize: { xs: "32px", sm: "36px", md: "42px" },
                        marginBottom: { xs: "25px", sm: "10px" },
                        lineHeight: "1.2",
                        color: "#012765",
                        fontWeight: "700",
                        textAlign: "center",
                    }}
                >
                    How Emotionally Yours Works
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#4B5563",
                        mb: 4,
                        textAlign: "center",
                    }}
                >
                    Discover how we can help transform emotional wellness in your context
                </Typography>
                <StyledTabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mb: 6,
                        justifyContent: { xs: 'flex-start', md: 'center' }, // fallback for flex behavior
                        '& .MuiTabs-flexContainer': {
                            justifyContent: { xs: 'flex-start', md: 'center' },
                            gap: { xs: 1, sm: 2, md: 3 }, // spacing between tabs
                        },
                        maxWidth: '100%',
                        overflowX: 'auto',
                    }}
                >
                    {tabData.map((tab, index) => (
                        <StyledTab
                            key={index}
                            icon={tab.icon}
                            label={tab.label}
                            iconPosition="start"
                            sx={{
                                fontSize: { xs: 12, sm: 14, md: 16 },
                                px: { xs: 2, sm: 3 },
                                py: 1,
                                minWidth: 'fit-content',
                            }}
                        />
                    ))}
                </StyledTabs>

                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ color: "#012765" }}
                            >
                                {currentTabData.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "16px",
                                    color: "#4B5563",
                                    lineHeight: "1.6",
                                    fontFamily: "Poppins",
                                    mb: 4,
                                }}
                            >
                                {currentTabData.description}
                            </Typography>
                            <Grid container spacing={3}>
                                {currentTabData.features.map((feature, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: "#E6EAF3",
                                                    borderRadius: "50%",
                                                    p: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {feature.icon}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ color: "#012765", mb: 1 }}
                                                >
                                                    {feature.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: "#4B5563" }}
                                                >
                                                    {feature.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={currentTabData.image}
                            alt={currentTabData.label}
                            sx={{
                                width: "100%",
                                maxWidth: "500px",
                                height: "auto",
                                display: "block",
                                margin: "0 auto",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default HowSchoolWorks;