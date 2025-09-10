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
import FoundersMessage2 from "../../components/About/FoundersMessage2.jsx";
import {advisoryBoard, supportGroup, teamMembers} from "../../data/about-us.js";


const About = () => {
    return (
        <>
            <AboutHeader/>
            <Box component="section" sx={{mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }}}>
                <VisionMission/>
                <Mindwell/>
                <FoundersMessage2/>
                <FoundersMessage/>
                {/*<Goals/>*/}
                <Founders/>
                <OurTeam/>
                <Psychologist title={'Advisory Board'} data={advisoryBoard}/>
                <Psychologist title={'Support Group'} data={supportGroup}/>
                <Psychologist title={'Team'} data={teamMembers}/>
                {/*<AdvisoryCouncil/>*/}
                {/*<Worker/>*/}

            </Box>
                <MajorClients/>
        </>
    );
};

export default About;