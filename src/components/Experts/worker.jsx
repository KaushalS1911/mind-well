import React, {useState} from "react";
import {Box, Button, Card, CardContent, Typography, Chip, Grid, Container, Stack, Divider} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";


function Worker() {

    const experts = [
        {
            initials: "DR",
            name: "Dr. Rachel Chen",
            title: "Clinical Psychologist, Ph.D.",
            rating: "5.0 (230 reviews)",
            experience: "12 years experience",
            specialization: "Specializes in anxiety, depression, trauma, and relationships issues using evidence-based approaches including CBT and mindfulness.",
            tags: ["Anxiety", "Depression", "Trauma"],
            category: "Psychologist",
        },
        {
            initials: "DM",
            name: "Dr. Marcus Johnson",
            title: "Psychiatrist, M.D.",
            rating: "4.8 (245 reviews)",
            experience: "15 years experience",
            specialization: "Specializes in medication management for mood disorders, anxiety, ADHD, and treatment-resistant depression with a holistic approach.",
            tags: ["Bipolar", "ADHD", "Depression"],
            category: "Psychiatrist",
        },
        {
            initials: "SG",
            name: "Sarah Garcia, LMFT",
            title: "Licensed Marriage & Family Therapist",
            rating: "4.8 (187 reviews)",
            experience: "8 years experience",
            specialization: "Specializes in couples therapy, family dynamics, and individual therapy for relationships, self-esteem, and life transitions.",
            tags: ["Relationships", "Family", "Life Changes"],
            category: "Counselor",
        },
        {
            initials: "JW",
            name: "James Wilson, LCSW",
            title: "Licensed Clinical Social Worker",
            rating: "4.2 (90 reviews)",
            experience: "10 years experience",
            specialization: "Specializes in trauma recovery, grief counseling, substance abuse, and crisis intervention with a compassionate approach.",
            tags: ["Trauma", "Grief", "Addiction"],
            category: "Social Worker",
        },
        {
            initials: "LP",
            name: "Dr. Lisa Park",
            title: "Clinical Psychologist, Psy.D.",
            rating: "5.0 (172 reviews)",
            experience: "9 years experience",
            specialization: "Specializes in anxiety, OCD, phobias, and performance anxiety using evidence-based treatments and mindfulness techniques.",
            tags: ["Anxiety", "OCD", "Phobias"],
            category: "Psychologist",
        },
        {
            initials: "MT",
            name: "Michael Torres, LPC",
            title: "Licensed Professional Counselor",
            rating: "4.7 (86 reviews)",
            experience: "7 years experience",
            specialization: "Specializes in career counseling, life transitions, stress management, and personal growth. Expert in helping young professionals thrive.",
            tags: ["Career", "Life Transitions"],
            category: "Counselor",
        },
        {
            initials: "AK",
            name: "Dr. Aisha Khan",
            title: "Psychiatrist, M.D",
            rating: "4.8 (91 reviews)",
            experience: "11+ years experience",
            specialization: "Specializes in medication management for depression, anxiety, bipolar disorder, and ADHD with an integrative approach.",
            tags: ["Depression", "Bipolar","ADHD"],
            category: "Counselor",
        },
        {
            initials: "RN",
            name: "Robert Nguyen, LMSW",
            title: "Licensed Master Social Worker",
            rating: "4.9 (76 reviews)",
            experience: "6+ years experience",
            specialization: "Specializes in student mental health, academic stress, identity development, and multicultural issues using a strengths-based approach.",
            tags: ["Student Stress", "Identity","Culture"],
            category: "Counselor",
        }
    ];

    const filters = [
        "All Experts",
        "Psychologists",
        "Psychiatrists",
        "Counselors",
        "Social Workers",
    ];

    const [selected, setSelected] = useState("All Experts");

    return (
        <Box className={"Poppins"} sx={{textAlign: "center", p: "96px 0"}}>
            <Container maxWidth="xl">
                <Box sx={{textAlign: "center", mb: 8, px: 2}}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#012765",
                            fontWeight: 700,
                            mb: 2,
                            fontSize: {xs: "28px", sm: "32px", md: "36px"},
                            lineHeight: "2.5rem",
                        }}
                    >
                        Meet Our Mental Health Experts
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4b5563",
                            maxWidth: "600px",
                            mx: "auto",
                            mb: 4,
                            fontSize: {xs: "16px", sm: "18px"},
                        }}
                    >
                        Our team of licensed therapists and counselors are committed to providing high-quality,
                        evidence-based
                        care tailored to your unique needs.
                    </Typography>
                    {/* Filter Buttons */}
                    <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Grid container spacing={2} justifyContent="center">
                            {filters.map((filter) => (
                                <Grid item key={filter}>
                                    <Button
                                        onClick={() => setSelected(filter)}
                                        sx={{
                                            fontSize: "16px",
                                            px: 3,
                                            py: 1,
                                            backgroundColor: selected === filter ? "#012765" : "#E5E7EB",
                                            color: selected === filter ? "#fff" : "#000",
                                            fontWeight: 500,
                                            borderRadius: "50px",
                                            "&:hover": {
                                                backgroundColor: selected === filter ? "#011a45" : "#D1D5DB",
                                            },
                                        }}
                                    >
                                        {filter}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                {/* Expert Cards */}
                <Grid container spacing={3} justifyContent="center">
                    {experts.map((expert, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{
                                textAlign: "start",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                borderRadius: "13px",
                                height: "100%"
                            }}>
                                <Box sx={{
                                    backgroundColor: "#E7EAEE"
                                }}>
                                    <Box
                                        sx={{
                                            width: 112,
                                            height: 110,
                                            borderRadius: "50%",
                                            bgcolor: "#012765",
                                            color: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "36px",
                                            fontWeight: "bold",
                                            mx: "auto",
                                        }}
                                    >
                                        {expert.initials}
                                    </Box>
                                </Box>
                                <Divider fullWidth={true}/>

                                <Box sx={{
                                    padding: {xs: "16px", sm: "24px"},
                                    width: "100%",
                                    maxWidth: "400px",
                                    margin: "auto"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "wrap"
                                    }}>
                                        <Box sx={{
                                            fontSize: "18px",
                                            color: "#012765",
                                            fontWeight: "700",
                                            lineHeight: "1.75rem",
                                        }}>{expert.name}</Box>
                                        <Box sx={{
                                            fontSize: "12px",
                                            color: "#fe6a00",
                                            backgroundColor: "#fe6a001a",
                                            padding: "4px 8px",
                                            lineHeight: "1rem",
                                            fontWeight: "500",
                                            borderRadius: "10px",
                                            mt: {xs: 1, sm: 0}
                                        }}>
                                            {expert.category}
                                        </Box>
                                    </Box>

                                    <Box sx={{
                                        fontSize: "14px",
                                        color: "#4b5563",
                                        lineHeight: "1.25rem",
                                        mb: 1
                                    }}>{expert.title}</Box>

                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}>
                                        <Box sx={{display: "flex"}}>
                                            {[...Array(5)].map((_, index) => (
                                                <StarIcon key={index} sx={{color: "#f65a06",fontSize:"17px"}}/>
                                            ))}
                                        </Box>
                                        <Box sx={{
                                            fontSize: "12px",
                                            color: "#6b7280",
                                            marginLeft: "4px",
                                            lineHeight: "1rem",
                                        }}>
                                            {expert.rating}
                                        </Box>
                                    </Box>

                                    <Box sx={{
                                        fontSize: "12px",
                                        color: "#6b7280",
                                        lineHeight: "1rem",
                                        mb: 2
                                    }}>{expert.experience}</Box>

                                    <Box sx={{marginBottom: "16px"}}>
                                        <Box sx={{
                                            fontSize: "14px",
                                            color: "#374151",
                                            lineHeight: "1.25rem",
                                        }}>{expert.specialization}</Box>
                                        <Box sx={{marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "4px"}}>
                                            {expert.tags.map((tag, i) => (
                                                <Chip key={i} label={tag} sx={{
                                                    padding: "4px 8px",
                                                    fontSize: "12px",
                                                    backgroundColor: "#f3f4f6",
                                                    color: "#1f2937"
                                                }}/>
                                            ))}
                                        </Box>
                                    </Box>

                                    <Divider fullWidth={true}/>

                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingTop: "12px"
                                    }}>
                                        <Box sx={{
                                            fontSize: "14px",
                                            color: "#012765",
                                        }}>View Profile</Box>
                                        <Button sx={{
                                            padding: "8px 16px",
                                            backgroundColor: "#fe6a00",
                                            color: "#fff",
                                            fontSize: "12px",
                                            borderRadius: "10px",
                                        }}>
                                            Book Session
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Button sx={{
                    padding: "12px 32px",
                    backgroundColor: "#012765",
                    color: "#fff",
                    fontSize: "16px",
                    mt: 8,
                    borderRadius: "10px"
                }}>
                    View All Experts
                </Button>
            </Container>
        </Box>
    );
}

export default Worker;
