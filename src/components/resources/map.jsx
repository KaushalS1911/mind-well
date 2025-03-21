import React from "react";
import {Box, Button, Typography, Container, Alert} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

function Map() {
    return (
        <Container maxWidth="xl" sx={{p:"0 0 96px 0"}}>
            <Box
                sx={{
                    backgroundColor: "#f2f2f5",
                    height: { xs: "auto", md: 320 },
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: { xs: 2, md: 4 },
                }}
            >
                <Box
                    sx={{
                        padding: { xs: 2, md: "24px" },
                        margin: { xs: "0 auto", xl: "0 528px" },
                        maxWidth: "90%",
                    }}
                >
                    <LocationOnIcon
                        sx={{ fontSize: { xs: 30, md: 40 }, color: "#003366", mb: 2 }}
                    />
                    <Box fontWeight={700} sx={{
                        fontSize: { xs: "16px", md: "18px" },
                        color: "#012765",
                        marginBottom: "8px",
                        lineHeight: "1.75rem"
                    }}>
                        Find Us on the Map
                    </Box>
                    <Box sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        marginBottom: "16px",
                        color: "#4b5563",
                    }}>
                        Interactive map would be displayed here showing our office locations
                    </Box>
                    <Box
                        sx={{
                            padding: "8px 16px",
                            backgroundColor: "#012765",
                            color: "#fff",
                            fontSize: { xs: "14px", md: "16px" },
                            borderRadius: "0.375rem",
                            cursor: "pointer",
                            display: "inline-block",
                            textAlign: "center",
                        }}
                    >
                        Get Directions
                    </Box>
                </Box>
            </Box>

            <Box sx={{backgroundColor: "#fef2f2",display:"flex", mt: "48px", padding: "16px", borderRadius: 2,borderLeft:"4px solid red"}}>
                <Box>
                    <ReportProblemIcon sx={{color:"red",mr:1.5,fontSize:20}}/>
                </Box>
                <Box>
                    <Box sx={{
                        fontSize: "14px",
                        color: "#991b1b",
                        fontWeight: "500",
                        lineHeight: "1.25rem",
                    }}>Emergency Notice</Box>
                    <Box sx={{
                        fontSize: "14px",
                        color: "#B91C1C",
                        margin: "4px 0 0",
                        lineHeight: "1.25rem",
                    }}>
                        MindWell is not an emergency service. If you are experiencing a mental
                        health crisis or having thoughts of harming yourself or others,
                        please call the Suicide Prevention Lifeline at <strong>988</strong> or
                        go to your nearest emergency room.
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Map;
