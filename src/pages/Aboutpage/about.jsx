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
import FoundersMessage from "../../components/About/FoundersMessage.jsx";
import {Box} from "@mui/material";
import OurTeam from "../../components/About/ourTeam.jsx";


const About = () => {
    return (
        <>
            <AboutHeader/>
            <Box component="section" sx={{mx: { xs: '20px', sm: '30px', md: '50px', xl: 'auto' }}}>
                <VisionMission/>
                <Mindwell/>
                <FoundersMessage/>
                {/*<Goals/>*/}
                <Founders/>
                <OurTeam/>
                <Psychologist/>
                {/*<AdvisoryCouncil/>*/}
                {/*<Worker/>*/}

            </Box>
                <MajorClients/>
        </>
    );
};

export default About;