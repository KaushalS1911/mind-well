import React from 'react';
import HeroSection from "../../components/Home/herosection.jsx";
import Mindwell from "../../components/Home/mindwell.jsx";
import WorksTable from "../../components/Home/worksTable.jsx";
import EngagementFramework from "../../components/Home/EngagementFramework.jsx";

function Home() {
    return (
        <>
            <HeroSection/>
            <Mindwell/>
            <WorksTable/>
            <EngagementFramework />
        </>
    );
}

export default Home;