import React from "react";
import {Box, Button, Typography, Container, Alert, Paper} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

// Constants for reusability
const COLORS = {
    primary: "#012765",
    lightBg: "#f2f2f5",
    warningBg: "#fef2f2",
    warningText: "#991b1b",
    warningBorder: "#B91C1C",
};

// Map location component
const MapLocation = () => (
    <Paper
        elevation={0}
        sx={{
            backgroundColor: COLORS.lightBg,
            height: {xs: "auto", md: 320},
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: {xs: 2, md: 4},
        }}
    >
        <Box
            sx={{
                padding: {xs: 2, md: 3},
                margin: {xs: "0 auto", xl: "0 500px"},
                maxWidth: "90%",
            }}
        >
            <LocationOnIcon
                sx={{fontSize: {xs: 30, md: 40}, color: "#003366", mb: 2}}
            />
            <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                    fontSize: {xs: "16px", md: "18px"},
                    color: COLORS.primary,
                    mb: 1,
                    lineHeight: "1.75rem"
                }}
            >
                Find Us on the Map
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    fontSize: {xs: "12px", sm: "14px", md: "16px"},
                    mb: 2,
                    color: "#4b5563",
                }}
            >
                Interactive map would be displayed here showing our office locations
            </Typography>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: COLORS.primary,
                    fontSize: {xs: "14px", md: "16px"},
                    borderRadius: "0.375rem",
                    py: 1,
                    px: 2,
                    textTransform: "none",
                    '&:hover': {
                        backgroundColor: "#001a4d"
                    }
                }}
            >
                Get Directions
            </Button>
        </Box>
    </Paper>
);

// Emergency notice component
const EmergencyNotice = () => (
    <Alert
        severity="error"
        icon={<ReportProblemIcon/>}
        sx={{
            mt: 6,
            backgroundColor: COLORS.warningBg,
            borderRadius: 2,
            borderLeft: `4px solid ${COLORS.warningBorder}`,
            padding: "16px",
            '& .MuiAlert-icon': {
                color: COLORS.warningBorder
            },
        }}
    >
        <Typography
            variant="subtitle2"
            sx={{
                fontSize: "14px",
                color: COLORS.warningText,
                fontWeight: "500",
                lineHeight: "1.25rem",
            }}
        >
            Emergency Notice
        </Typography>

        <Typography
            variant="body2"
            sx={{
                fontSize: "14px",
                color: COLORS.warningBorder,
                mt: 0.5,
                lineHeight: "1.25rem",
            }}
        >
            "Emotionally Yours" is not an emergency service. If you are experiencing a mental
            health crisis or having thoughts of harming yourself or others,
            please call the Suicide Prevention Lifeline at <strong>988</strong> or
            go to your nearest emergency room.
        </Typography>
    </Alert>
);

// Main component
function Map() {
    return (
        <Box sx={{
            mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }

        }}>
            <Container maxWidth="xl">
                <MapLocation/>
                <EmergencyNotice/>
            </Container>
        </Box>
    );
}

export default Map;