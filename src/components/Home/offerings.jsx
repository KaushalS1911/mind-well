import React, {useState} from "react";
import {Box, Button, Container, Divider, Grid, Paper, Tab, Tabs, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PersonIcon from '@mui/icons-material/Person';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BoltIcon from '@mui/icons-material/Bolt';

const offerings = ["SHAPE", "SHAPE+", "PEP", "ESOP"];

const therapyData = [
    {
        maindescription: "A year-long structured program prioritizing awareness, training, and implementation, offered in collaboration with academic institutions.",
        firsttitle: " Self-Help", fstitle: "Resources and DIY tools available through a freemium app",
        secondtitle: "Regular Participation", sstitle:"Mood tracking, self-assessments, and journaling for frequent engagement",
        thirdtitle: "Personalized Support", tstitle: "Tailored guidance from trusted psychologists via one-on-one sessions",
        maintitle: "What type of therapy are you looking for?",
        options: [
            {
                title: "Cognitive Behavioral Therapy (CBT)",
                description: "Change negative patterns of thinking and behavior.",
                icon: <SentimentSatisfiedAltIcon/>
            },
            {
                title: "Mindfulness-Based Therapy",
                description: "Become more aware of thoughts without judgment.",
                icon: <ErrorOutlineIcon/>
            },
            {
                title: "Psychodynamic Therapy",
                description: "Understand how past experiences influence present behavior.",
                icon: <PersonIcon/>
            },
            {
                title: "Solution-Focused Therapy",
                description: "Focus on solutions rather than problems.",
                icon: <PeopleOutlineIcon/>
            }
        ]
    },
    {
        maindescription: "A 12-month organized plan designed to enhance stream-specific awareness, impart training & preparing individuals battling higher education challenges.",
        firsttitle: "Preliminary Evaluation and Insight", fstitle: "Provides mental health reports incorporating insights from assessments",
        secondtitle: "Training and Capability Building", sstitle: "Coping tactics for academic stress, emotional regulation, and engagement.",
        thirdtitle: "Practical Execution & Assistance", tstitle: "Both online & offline counselling support, mixed with peer groups/classrooms",
        maintitle: "Common Relationship Challenges",
        options: [
            {
                title: "Communication Issues",
                description: "Difficulty expressing needs or understanding each other",
                icon: <TextsmsIcon/>
            },
            {
                title: "Trust Issues",
                description: "Rebuilding trust after betrayal or disappointment",
                icon: <ErrorOutlineIcon/>
            },
            {
                title: "Intimacy Challenges",
                description: "Reconnecting emotionally and physically",
                icon: <FavoriteIcon/>
            },
            {
                title: "Financial Conflicts",
                description: "Navigating money disagreements and planning",
                icon: <CurrencyRupeeIcon/>
            }
        ]
    },
    {
        maindescription: "Specialized program for exam aspirants & mentors treading with unique personal issues, life challenges that abruptly impacts cognitive performance.",
        firsttitle: "Awareness Seminars", fstitle: "Emotional wellness awareness & assessments sessions and workshops",
        secondtitle: "Individual Assessments", sstitle: "Psychometric tests for all aspirants to evaluate the intensity of issues",
        thirdtitle: "Expert Guidance", tstitle: "One day visit per week to our psychologist for additional assistance.",
        maintitle: "Common Teen Challenges",
        options: [
            {
                title: "Academic Stress",
                description: "Managing school pressure and expectations",
                icon: <ImportContactsIcon/>
            },
            {
                title: "Social Anxiety",
                description: "Navigating peer relationships and social pressure",
                icon: <PeopleOutlineIcon/>
            },
            {
                title: "Identity & Self-Esteem",
                description: "Developing a positive sense of self",
                icon: <ContentCopyIcon/>
            },
            {
                title: "Depression & Anxiety",
                description: "Managing mood and worry during adolescence",
                icon: <GppGoodIcon/>
            }
        ]
    },
    {
        maindescription: "Service targets workplace emotional wellness, employee engagement, resilience, and growth through research-based, reinforcing services.",
        firsttitle: "Burnout Identification", fstitle: "With awareness workshops, general psychometric tests, assessments",
        secondtitle: "Proactive ServicesShap", sstitle: "Creating self-help groups combined with DIY Tools through our app",
        thirdtitle: "Retention via Motivation", tstitle: "Individual sessions with psychologists, researched reinforcement model",
        maintitle: "Available Group Topics",
        options: [
            {title: "Anxiety Management", description: "Mondays at 6:00 PM | 8 Sessions", icon: <PublicIcon/>},
            {
                title: "Mindfulness Practice",
                description: "Wednesdays at 7:00 PM | 6 Sessions",
                icon: <AutoAwesomeIcon/>
            },
            {
                title: "Grief Support",
                description: "Tuesdays at 5:30 PM | 10 Sessions",
                icon: <SentimentSatisfiedAltIcon/>
            },
            {title: "Stress Management", description: "Thursdays at 6:30 PM | 8 Sessions", icon: <BoltIcon/>}
        ]
    }
];

const Offerings = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const selectedData = therapyData[selectedTab];

    return (
        <Box sx={{p: "96px 0 0 0", backgroundColor: "white"}}>
            <Container maxWidth="xl">
                <Typography className={"Montserrat"} variant="h4" align="center" color="#012765"
                            sx={{fontWeight: "700"}}>
                    Emotionally Yours Service Offerings
                </Typography>
                <Box variant="body1" align="center"
                     sx={{color: "#4B5563", mt: 1, mb: 7.5}}>
                    Transformative programs designed to foster your emotions, promote personal & professional growth.
                </Box>

                <Box sx={{display: "flex", justifyContent: "center", mb: 7}}>
                    <Tabs
                        value={selectedTab}
                        onChange={(event, newValue) => setSelectedTab(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                        orientation="horizontal"
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            "& .MuiTabs-flexContainer": {
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "16px",
                                width: "100%",
                            },
                            "& .MuiTabs-indicator": {display: "none"},
                            "& .MuiTab-root": {
                                fontFamily: "Montserrat",
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#012765",
                                textTransform: "none",
                                padding: "12px 24px",
                                borderRadius: "30px",
                                minHeight: "48px",
                                border: "2px solid #012765",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                position: "relative",
                                overflow: "hidden",
                                backgroundColor: "transparent",
                                mx: {sm: 0, xs: 0},
                                minWidth: "auto",
                                width: {xs: "auto", sm: "auto"},
                                mb: {xs: 1, sm: 0},
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "#FF7F1E",
                                    transform: "scaleX(0)",
                                    transformOrigin: "left",
                                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    borderRadius: "30px",
                                    opacity: 0.1,
                                },
                                "&:hover": {
                                    backgroundColor: "rgba(1, 39, 101, 0.05)",
                                    color: "#012765",
                                    borderColor: "#FF7F1E",
                                    "&::before": {
                                        transform: "scaleX(1)",
                                    },
                                },
                                "&.Mui-selected": {
                                    color: "white",
                                    backgroundColor: "#012765",
                                    border: "2px solid #012765",
                                    fontWeight: 700,
                                    boxShadow: "0 4px 10px rgba(1, 39, 101, 0.2)",
                                    "&:hover": {
                                        backgroundColor: "#012765",
                                        borderColor: "#FF7F1E",
                                    },
                                    "&::before": {
                                        transform: "scaleX(1)",
                                        background: "#FF7F1E",
                                        opacity: 0.15,
                                    },
                                },
                                "&:focus": {
                                    outline: "none",
                                    color: "white",
                                    backgroundColor: "#012765",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: -3,
                                        left: -3,
                                        right: -3,
                                        bottom: -3,
                                        border: "2px solid #FF7F1E",
                                        borderRadius: "34px",
                                        opacity: 0.5,
                                    },
                                },
                                "&:active": {
                                    transform: "scale(0.98)",
                                },
                            },
                        }}
                    >
                        {offerings.map((offer, index) => (
                            <Tab key={index} label={offer}/>
                        ))}
                    </Tabs>
                </Box>


                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box className={"Montserrat"} sx={{fontSize: "24px", color: "#012765", fontWeight: 700,}}>
                            {offerings[selectedTab]}
                        </Box>
                        <Box sx={{color: "#515863", mt: 1, mb: 2, fontSize: "16px", width: "95%"}}>
                            {selectedData.maindescription}
                        </Box>
                        {[selectedData.firsttitle, selectedData.secondtitle, selectedData.thirdtitle].map((title, index) => (
                            <Box key={index} sx={{display: "flex", alignItems: "center", mb: 2}}>
                                <CheckCircleIcon sx={{color: "#FF7F1E", fontSize: 20, mr: 1}}/>
                                <Box>
                                    <Box sx={{
                                        fontSize: "16px",
                                        color: "#1f2937",
                                        fontWeight: "500"
                                    }}>{title}</Box>
                                    <Box sx={{fontSize: "14px", color: "#6b7280", lineHeight: "1.25rem"}}>
                                        {selectedData[["fstitle", "sstitle", "tstitle"][index]]}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                        <Box sx={{
                            backgroundColor: "#FE6A00",
                            display: "inline-block",
                            textTransform: "none",
                            fontWeight: "600",
                            borderRadius: "7px",
                            cursor: "pointer",
                            color: "#fff",
                            mt: 2,
                            px: 3,
                            py: 1.5
                        }}>
                            Learn More
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{p: 3, borderRadius: 3, backgroundColor: "#F9FAFB"}}>
                            <Box sx={{fontSize: "20px", fontWeight: "700", margin: "0 0 24px", color: "#012765"}}>
                                {selectedData.maintitle}
                            </Box>
                            {selectedData.options.map((therapy, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: 2,
                                        mt: 2,
                                        borderRadius: 2,
                                        backgroundColor: "#fff",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        "&:hover": {boxShadow: "1px 1px 3px gray"}
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 40,
                                            height: 40,
                                            borderRadius: "50%",
                                            backgroundColor: "#E6EAF3",
                                            mr: 2
                                        }}
                                    >
                                        {therapy.icon}
                                        {/* If you want to add an icon, you can replace this comment with an icon */}
                                    </Box>
                                    <Box>
                                        <Box sx={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#1f2937"
                                        }}>{therapy.title}</Box>
                                        <Box sx={{
                                            fontSize: "14px",
                                            color: "#6b7280",
                                            lineHeight: "1.25rem"
                                        }}>{therapy.description}</Box>
                                    </Box>
                                </Box>
                            ))}
                        </Paper>
                    </Grid>
                    <Divider sx={{
                        width: "100%",
                        mt: 13
                    }}/>
                </Grid>
            </Container>
        </Box>
    );
};

export default Offerings;