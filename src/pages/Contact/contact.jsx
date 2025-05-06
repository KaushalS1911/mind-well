import React from 'react';
import Getintouch from "../../components/Contact/getintouch.jsx";
import Map from "../../components/Contact/map.jsx";
import {Box} from "@mui/material";

function Contact() {
    return (
        <Box>
            <Getintouch/>
            <Map/>
        </Box>
    );
}

export default Contact;