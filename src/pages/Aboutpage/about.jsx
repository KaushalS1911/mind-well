import React from 'react';
import Worker from "../../components/About/worker.jsx";
import VisionMission from "../../components/About/VisionMission.jsx";
import Goals from "../../components/About/Goals.jsx";
import Founders from "../../components/About/Founders.jsx";

function About() {
    return (
        <>
            <VisionMission/>
            <Goals/>
            <Founders/>
            <Worker/>
        </>
    );
}

export default About;