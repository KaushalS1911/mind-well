import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

function MileStones() {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    backgroundColor: "#002F6C",
                    borderRadius: "16px",
                    color: "white",
                    mt: 7,
                    py: 6,
                    px: 4,
                    textAlign: "center",
                }}
            >
                <Typography
                    className="Montserrat"
                    variant="h4"
                    fontWeight="bold"
                    sx={{ mb: 5 ,textAlign: "start",ml:5 }}
                >
                    Our Impact
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h3"
                            sx={{ color: "#FF7F1E", fontWeight: "700" }}
                        >
                            150K+
                        </Typography>
                        <Box
                            sx={{
                                fontSize: "18px",
                                color: "#D1E1FF",
                            }}
                        >
                            Lives Impacted
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h3"
                            sx={{ color: "#FF7F1E", fontWeight: "700" }}
                        >
                            5000+
                        </Typography>
                        <Box
                            sx={{
                                fontSize: "18px",
                                color: "#D1E1FF",
                            }}
                        >
                            Sessions
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h3"
                            sx={{ color: "#FF7F1E", fontWeight: "700" }}
                        >
                            100+
                        </Typography>
                        <Box
                            sx={{
                                fontSize: "18px",
                                color: "#D1E1FF",
                            }}
                        >
                            Suicides Prevented
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h3"
                            sx={{ color: "#FF7F1E", fontWeight: "700" }}
                        >
                            86%
                        </Typography>
                        <Box
                            sx={{
                                fontSize: "18px",
                                color: "#D1E1FF",
                            }}
                        >
                            Improved Behavior Reported
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default MileStones;