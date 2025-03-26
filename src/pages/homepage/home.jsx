import React from 'react';
import HeroSection from "../../components/Home/herosection.jsx";
import WorksTable from "../../components/Home/worksTable.jsx";
import EngagementFramework from "../../components/Home/EngagementFramework.jsx";
import Partners from "../../components/Home/partners.jsx";
import Offerings from "../../components/Home/offerings.jsx";
import Struggling from "../../components/Home/struggling.jsx";
import LookingFor from "../../components/Home/lookingfor.jsx";
import Therapists from "../../components/Home/therapists.jsx";
import Wetreat from "../../components/Home/wetreat.jsx";
import MentalHealth from "../../components/Home/mentalHealth.jsx";
import Plans from "../../components/Home/plans.jsx";
import Clientsreview from "../../components/Home/clientsreview.jsx";
import Expertselection from "../../components/Home/expertselection.jsx";
import Mindwell from "../../components/Home/mindwell.jsx";

function Home() {
    return (
        <>
            <HeroSection/>
            <WorksTable/>
            <Mindwell/>
            <EngagementFramework/>
            <Clientsreview/>
            {/*<Partners/>*/}
            {/*<Offerings/>*/}
            {/*<Struggling/>*/}
            {/*<LookingFor/>*/}
            {/*<Therapists/>*/}
            {/*<Wetreat/>*/}
            {/*<MentalHealth/>*/}
            {/*<Plans/>*/}
            {/*<Expertselection/>*/}
        </>
    );
}

export default Home;