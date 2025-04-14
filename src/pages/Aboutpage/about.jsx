import React from 'react';
import Worker from "../../components/About/worker.jsx";
import VisionMission from "../../components/About/VisionMission.jsx";
import Goals from "../../components/About/Goals.jsx";
import Founders from "../../components/About/Founders.jsx";
import AdvisoryCouncil from "../../components/About/advisoryCouncil.jsx";
import MajorClients from "../../components/About/majorClients.jsx";
import AboutHeader from "../../components/About/aboutHeader.jsx";


const About = () => {
    return (
        <>

            <AboutHeader/>
            <VisionMission/>
            {/*<Goals/>*/}
            <Founders/>
            {/*<AdvisoryCouncil/>*/}
            {/*<Worker/>*/}
            <MajorClients/>

        </>
    );
};

export default About;