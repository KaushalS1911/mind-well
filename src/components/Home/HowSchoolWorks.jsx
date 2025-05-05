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
import img2 from '../../assets/images/Home/works/COACHING.png'
import img3 from '../../assets/images/Home/works/company-employees.jpg'
import img4 from '../../assets/images/Home/works/higer-education.jpg'

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
        label: "Higher Education",
        icon: <BusinessCenter sx={{ color: "#FF7A00" }} />,
        image: img4,
        title: "Emotional Wellness in Higher Education",
        description: "Support students' mental health and success through emotional intelligence.",
        features: [
            {
                icon: <Work sx={{ color: "#012765" }} />,
                title: "Academic Stress Management",
                description: "Help students navigate pressure, deadlines, and workload with emotional balance.",
            },
            {
                icon: <TrendingUp sx={{ color: "#012765" }} />,
                title: "Life Skills Development",
                description: "Equip students with emotional and social skills for real-world readiness.",
            },
            {
                icon: <Group sx={{ color: "#012765" }} />,
                title: "Campus Community Building",
                description: "Foster a connected and inclusive environment for holistic growth.",
            },
        ],
    },

    {
        label: "Coaching Institutes",
        icon: <Person sx={{ color: "#FF7A00" }} />,
        image: img2,
        title: "Empowering Aspirants for Success",
        description: "Guiding learners through structured academic and personal development coaching.",
        features: [
            {
                icon: <Psychology sx={{ color: "#012765" }} />,
                title: "Focused Learning",
                description: "Offer subject-specific coaching to strengthen core academic foundations.",
            },
            {
                icon: <TrendingUp sx={{ color: "#012765" }} />,
                title: "Performance Tracking",
                description: "Monitor student progress and adjust teaching methods for better outcomes.",
            },
            {
                icon: <People sx={{ color: "#012765" }} />,
                title: "Mentorship & Guidance",
                description: "Provide career counseling and emotional support for holistic growth.",
            },
        ],
    },

    {
        label: "Workplaces",
        icon: <Groups sx={{ color: "#FF7A00" }} />,
        image: img3,
        title: "Emotionally Intelligent Workplaces",
        description: "Transform your organization by building emotionally intelligent teams and leaders.",
        features: [
            {
                icon: <Business sx={{ color: "#012765" }} />,
                title: "Emotionally Intelligent Culture",
                description: "Cultivate a workplace culture grounded in empathy, self-awareness, and collaboration.",
            },
            {
                icon: <TrendingUp sx={{ color: "#012765" }} />,
                title: "Leadership & Change Readiness",
                description: "Empower leaders to manage transitions and inspire teams through emotional intelligence.",
            },
            {
                icon: <EmojiObjects sx={{ color: "#012765" }} />,
                title: "Performance & Wellbeing",
                description: "Boost productivity and employee wellbeing through emotional wellness strategies.",
            },
        ],
    }

];
function HowSchoolWorks() {
    const [selectedTab, setSelectedTab] = useState(0);
    const theme = useTheme();
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const currentTabData = tabData[selectedTab];
    return (
        <Box sx={{padding:"96px 0 0 0" }}>
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
                    How "Emotionally Yours" Works
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#4B5563",
                        mb: 4,
                        textAlign: "center",
                    }}
                >
                    Discover how Emotional Health transforms your Growth and Success
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
                </Grid>
            </Container>
        </Box>
    );
}
export default HowSchoolWorks;