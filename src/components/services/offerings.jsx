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

const offerings = ["Individual Therapy", "Couples Therapy", "Teen Counseling", "Group Sessions"];

const therapyData = [
    {
        maindescription: "One-on-one therapy sessions with a licensed professional who can help you navigate life's challenges, manage symptoms, and develop coping strategies.",
        firsttitle: "Personalized approach", fstitle: "Treatment tailored to your specific needs and goals",
        secondtitle: "Flexible scheduling", sstitle: "Book sessions that fit into your busy life",
        thirdtitle: "Private and secure", tstitle: "Confidential sessions in a safe environment",
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
        maindescription: "Strengthen your relationship with therapy that helps you and your partner communicate better, resolve conflicts, and build a healthier connection.",
        firsttitle: "Improved communication", fstitle: "Learn to express needs and listen effectively",
        secondtitle: "Conflict resolution", sstitle: "Develop healthy ways to resolve disagreements",
        thirdtitle: "Rebuilding intimacy", tstitle: "Strengthen emotional and physical connection",
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
        maindescription: "Specialized support for teenagers dealing with the unique challenges of adolescence, from academic pressure to identity formation and peer relationships.",
        firsttitle: "Age-appropriate approach", fstitle: "Methods tailored specifically for teens",
        secondtitle: "Building resilience", sstitle: "Develop coping skills for life's challenges",
        thirdtitle: "Parent collaboration", tstitle: "Optional support for parents to help their teens",
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
        maindescription: "Join a supportive community of individuals facing similar challenges. Our therapist-led group sessions provide connection, shared insights, and collective growth.",
        firsttitle: "Community support", fstitle: "Connect with others who understand your experience",
        secondtitle: "Cost-effective option", sstitle: "More affordable than individual therapy",
        thirdtitle: "Professional facilitation", tstitle: "Led by experienced group therapists",
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
                    Our Mental Healthcare Offerings
                </Typography>
                <Box  variant="body1" align="center"
                            sx={{color: "#4B5563", mt: 1, mb: 7.5}}>
                    Comprehensive support for your mental wellbeing, tailored to your unique <br/> needs and
                    preferences.
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mb: 7 }}>
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
                                width: "100%",
                            },
                            "& .MuiTabs-indicator": { display: "none" },
                            "& .MuiTab-root": {
                                textTransform: "none",
                                fontWeight: 500,
                                px: 3,
                                fontSize: 16,
                                borderRadius: 2,
                                backgroundColor: selectedTab === 0 ? "#E5E7EB" : "#F3F4F6",
                                mx: { sm: 1, xs: 0 },
                                minWidth: "auto",
                                width: { xs: "auto", sm: "auto" },
                                mb: { xs: 1, sm: 0 },
                            },
                            "& .Mui-selected": {
                                backgroundColor: "#012765",
                                color: "#fff",
                                border: "2px solid #DD6006", // Border added here
                            },
                            "& .css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                                color: "#fff",
                            },
                        }}
                    >
                        {offerings.map((offer, index) => (
                            <Tab key={index} label={offer} />
                        ))}
                    </Tabs>
                </Box>



                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{color: "#012765", fontWeight: 700,}}>
                            {offerings[selectedTab]}
                        </Typography>
                        <Typography variant="body1" sx={{color: "#515863", mt: 1, mb: 2, fontSize: 17, width: "95%"}}>
                            {selectedData.maindescription}
                        </Typography>
                        {[selectedData.firsttitle, selectedData.secondtitle, selectedData.thirdtitle].map((title, index) => (
                            <Box key={index} sx={{display: "flex", alignItems: "center", mb: 2}}>
                                <CheckCircleIcon sx={{color: "#FF7F1E", fontSize: 20, mr: 1}}/>
                                <Box>
                                    <Typography fontWeight="normal">{title}</Typography>
                                    <Typography variant="body2" sx={{color: "#4B5563"}}>
                                        {selectedData[["fstitle", "sstitle", "tstitle"][index]]}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        <Button variant="contained" sx={{
                            backgroundColor: "#FF7F1E",
                            textTransform: "none",
                            fontWeight: "bold",
                            mt: 2,
                            px: 3,
                            py: 1.5
                        }}>
                            Learn More
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{p: 3, borderRadius: 3, backgroundColor: "#F9FAFB"}}>
                            <Typography variant="h6" fontWeight="bold" sx={{color: "#012765"}}>
                                {selectedData.maintitle}
                            </Typography>
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
                                        <Typography sx={{fontWeight: "600"}}>{therapy.title}</Typography>
                                        <Typography variant="body2"
                                                    sx={{color: "#4B5563"}}>{therapy.description}</Typography>
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