import React from 'react';
import {Box} from "@mui/material";
import SessionSeminar from "../../components/Session/sessionSeminar.jsx";
import Struggling from "../../components/Home/struggling/struggling.jsx";

function SeminarPage() {
    return (
        <Box>
            <Struggling/>
            <SessionSeminar/>
        </Box>
    );
}

export default SeminarPage;