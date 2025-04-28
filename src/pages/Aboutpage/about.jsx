import React from 'react';
import Worker from "../../components/About/worker.jsx";
import VisionMission from "../../components/About/VisionMission.jsx";
import Goals from "../../components/About/Goals.jsx";
import Founders from "../../components/About/Founders.jsx";
import AdvisoryCouncil from "../../components/About/advisoryCouncil.jsx";
import MajorClients from "../../components/About/majorClients.jsx";
import AboutHeader from "../../components/About/aboutHeader.jsx";
import Psychologist from "../../components/About/psychologist.jsx";
import Mindwell from "../../components/Home/mindwell.jsx";
import {Box} from "@mui/material";


const About = () => {
    return (
        <>
            <AboutHeader/>
            <Box sx={{px: {sm: "30px ", xs: "0", xl: "0"}}}>
                <VisionMission/>
                <Mindwell/>
                {/*<Goals/>*/}
                <Founders/>
                <Psychologist/>
                {/*<AdvisoryCouncil/>*/}
                {/*<Worker/>*/}
                <MajorClients/>

            </Box>
        </>
    );
};

export default About;