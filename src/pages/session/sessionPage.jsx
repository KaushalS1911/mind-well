import React from 'react';
import {Box} from "@mui/material";
import Struggling from "../../components/Home/struggling/struggling.jsx";
import SessionSeminar from "../../components/Session/sessionSeminar.jsx";

function SessionPage() {
    return (
        <Box>
            {/*<Struggling/>*/}
            <SessionSeminar/>
        </Box>
    );
}

export default SessionPage;