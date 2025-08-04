import React from "react";
import {Box, Typography} from "@mui/material";
import {InfoCardBox, styles} from "./styles";
import {BUSINESS_HOURS} from "./constants";

const BusinessHours = () => (
    <InfoCardBox>
        <Typography sx={styles.sectionTitle}>
            Business Hours
        </Typography>
        {BUSINESS_HOURS.map((entry, index) => (
            <Box key={index} sx={{display: "flex", mt: 1}}>
                <Typography sx={{mr:0.5}}>{entry.day} :</Typography>
                <Typography>{entry.time}</Typography>
            </Box>
        ))}
    </InfoCardBox>
);

export default BusinessHours;
