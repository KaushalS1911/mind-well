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
        <Container maxWidth={"xl"}>
            <Box sx={{p: "48px", backgroundColor: "#F8FAFD", textAlign: "center", borderRadius: "20px"}}>
                <Typography className={"Montserrat"} variant="h5"
                            sx={{fontWeight: 800, mb: 3, mt: 2, color: "#012765"}}>
                    Our Rigorous Expert Selection Process
                </Typography>
                <Box className={"Montserrat"} sx={{mb: 4, opacity: 0.8}}>
                    We maintain the highest standards when selecting our mental health professionals. Here's how <br/>
                    we ensure you receive care from only the best qualified experts:
                </Box>

                <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2.5}}>
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
                            <Typography sx={{opacity: 0.8, mt: 1, fontSize: 14}}>
                                {item.description}
                            </Typography>
                        </Paper>
                    ))}
                </Box>

            </Box>
            <Box sx={{mt: 10, textAlign: "center"}}>
                <Typography variant="h5" sx={{fontWeight: 700, mb: 1, color: "#012765"}}>
                    Find Your Perfect Match
                </Typography>
                <Typography sx={{opacity: 0.7, mb: 3}}>
                    Take our brief assessment and we'll match you with therapists who specialize in <br/>
                    your specific needs and preferences.
                </Typography>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF7F1E",
                            color: "#fff",
                            fontWeight: 600,
                            textTransform: "none",
                            px: 4,
                            fontSize: 15,
                            py: 1.4,
                            mb: 10,
                            '&:hover': {backgroundColor: "#E56F1A"}
                        }}
                    >
                        Get Matched Today
                    </Button>
                </Box>
            </Box>

        </Container>
    );
}

export default Expertselection;
