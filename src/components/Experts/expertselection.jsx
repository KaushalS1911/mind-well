import React from 'react';
import {Box, Typography, Paper, Button, Container} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const expertCriteria = [
    {
        icon: <VerifiedUserIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Credential Verification",
        description: "We verify all licenses, degrees, and certifications with the relevant authorities."
    },
    {
        icon: <EventNoteIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Experience Requirements",
        description: "All our therapists have a minimum of 3 years clinical experience in their areas of specialization."
    },
    {
        icon: <AssignmentTurnedInIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Rigorous Interviews",
        description: "Multiple interview rounds assess clinical skills, therapeutic approach, and cultural competence."
    },
    {
        icon: <CheckCircleIcon sx={{fontSize: 30, color: "#012765"}}/>,
        title: "Ongoing Quality Assurance",
        description: "Regular performance reviews, client feedback evaluation, and continuing education requirements."
    }
];

function Expertselection() {
    return (
        <Box sx={{padding: "0 0 96px 0"}}>
            <Container maxWidth={"xl"}>
                <Box sx={{p: "48px", backgroundColor: "#F8FAFD", textAlign: "center", borderRadius: "20px"}}>
                    <Typography className={"Montserrat"} variant="h5"
                                sx={{fontWeight: 800, mb: 3, mt: 2, color: "#012765"}}>
                        Our Rigorous Expert Selection Process
                    </Typography>
                    <Box sx={{mb: 4, opacity: 0.8, fontSize: "16px", color: "#4b5563"}}>
                        We maintain the highest standards when selecting our mental health professionals. Here's
                        how <br/>
                        we ensure you receive care from only the best qualified experts:
                    </Box>

                    <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2}}>
                        {expertCriteria.map((item, index) => (
                            <Paper
                                key={index}
                                sx={{
                                    width: {xs: '100%', sm: '48%', md: '22%'},
                                    p: 3,
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    boxShadow: 3,
                                }}
                            >
                                <Box sx={{mb: 2, display: 'flex', justifyContent: 'center'}}>
                                    <Box
                                        sx={{
                                            width: 65,
                                            height: 65,
                                            backgroundColor: "#F1F5F9",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                </Box>
                                <Box sx={{fontWeight: 700, color: "#012765", fontSize: 16}}>
                                    {item.title}
                                </Box>
                                <Box sx={{opacity: 0.8, mt: 1, fontSize: "14px"}}>
                                    {item.description}
                                </Box>
                            </Paper>
                        ))}
                    </Box>

                </Box>
                <Box sx={{mt: 10, textAlign: "center"}}>
                    <Box sx={{fontWeight: 700, mb: "16px", color: "#012765", fontSize: "24px"}}>
                        Find Your Perfect Match
                    </Box>
                    <Box sx={{opacity: 0.7, mb: "32px", fontSize: "16px", color: "#4b5563"}}>
                        Take our brief assessment and we'll match you with therapists who specialize in <br/>
                        your specific needs and preferences.
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Box
                            sx={{
                                padding: "12px 32px",
                                backgroundColor: "#FE6A00",
                                color: "#fff",
                                fontWeight: 600,
                                textTransform: "none",
                                fontSize: 15,
                                transition: "0.3s",
                                cursor: "pointer",
                                borderRadius: "0.375rem",
                                '&:hover': {backgroundColor: "#E56F1A"}
                            }}
                        >
                            Get Matched Today
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Expertselection;
