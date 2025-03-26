import React from 'react';
import HeroSection from "../../components/Home/herosection.jsx";
import Mindwell from "../../components/Home/mindwell.jsx";
import WorksTable from "../../components/Home/worksTable.jsx";
import EngagementFramework from "../../components/Home/EngagementFramework.jsx";
import VisionMission from "../../components/Home/VisionMission.jsx";
import Goals from "../../components/Home/Goals.jsx";
import Founders from '../../components/Home/Founders';

function Home() {
    return (
        <>
            <HeroSection/>
            <VisionMission/>
            <Goals/>
            <Founders />
            <Mindwell/>
            <WorksTable/>
            <EngagementFramework />
        </>
    );
}

export default Home;