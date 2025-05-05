import React from 'react';
import Getintouch from "../../components/Contact/getintouch.jsx";
import Map from "../../components/Contact/map.jsx";
import {Box} from "@mui/material";

function Contact() {
    return (
        <Box sx={{
            px: {sm:"30px ",xs:"0",xl:"0"},
            mx: 10
        }}>
            <Getintouch/>
            <Map/>
        </Box>
    );
}

export default Contact;