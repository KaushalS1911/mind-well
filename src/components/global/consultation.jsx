import React from 'react';
import {Box, Button, Container} from "@mui/material";

function Consultation({title, Description, Btn}) {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    padding: {xs: "24px", md: "48px"},
                    backgroundColor: "#012765",
                    mt: 8,
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    borderRadius: "10px"
                }}
            >
                <Box sx={{textAlign: {xs: "center", md: "left"}}}>
                    <Box
                        sx={{
                            fontSize: {xs: "20px", md: "24px"},
                            color: "#fff",
                            marginBottom: "12px",
                            fontWeight: "bold"
                        }}
                    >
                        {title}
                    </Box>
                    <Box
                        sx={{
                            fontSize: "16px",
                            color: "#fff",
                            width: {xs: "100%", md: "90%"},
                        }}
                    >
                        {Description}
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: "12px 32px",
                        backgroundColor: "#fe6a00",
                        color: "#fff",
                        borderRadius: "0.375rem",
                        cursor: "pointer",
                        "&:hover": {backgroundColor: "#e65a00"},
                    }}
                >
                    {Btn}
                </Box>
            </Box>
        </Container>
    );
}

export default Consultation;