import React from 'react';
import {Box} from "@mui/material";
import Seminar from "../../components/seminar/seminar.jsx";
import Feedback from "../../components/seminar/feedback.jsx";

function SeminarPage() {
    return (
        <Box>
            <Seminar/>
            <Feedback/>
        </Box>
    );
}

export default SeminarPage;