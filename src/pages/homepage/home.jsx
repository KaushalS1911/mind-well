import React from 'react';
import WorksTable from "../../components/Home/worksTable.jsx";
import EngagementFramework from "../../components/Home/EngagementFramework.jsx";
import Herosection from "../../components/Home/herosection.jsx";
import Offerings from "../../components/Home/offerings.jsx";
import Challenges from "../../components/Home/challenges.jsx";
import LookingFor from "../../components/Home/lookingfor.jsx";
import Therapists from "../../components/Home/therapists.jsx";
import Wetreat from "../../components/Home/wetreat.jsx";
import MentalHealth from "../../components/Home/mentalHealth.jsx";
import Plans from "../../components/Home/plans.jsx";
import Clientsreview from "../../components/Home/clientsreview.jsx";
import Expertselection from "../../components/Home/expertselection.jsx";
import Mindwell from "../../components/Home/mindwell.jsx";
import HowSchoolWorks from "../../components/Home/HowSchoolWorks.jsx";
import MentalHealthResources from "../../components/Home/MentalHealthResources.jsx";
import EmployeeMentalHealth from "../../components/Home/EmployeeMentalHealth.jsx";
import CaseStudy from "../../components/Home/CaseStudy.jsx";
import CorporateWellness from "../../components/Home/CorporateWellness.jsx";
import Struggling from "../../components/Home/struggling.jsx";
import Partners from "../../components/Home/Partners.jsx";
import Assessments from "../../components/resources/assessments.jsx";
import HowEmotionallyYoursinSchools from "../../components/Home/howEmotionallyYoursinSchools.jsx";
import HowEmotionallyYoursWorksInHigherEducation
    from "../../components/Home/howEmotionallyYoursWorksInHigherEducation.jsx";
import HowEmotionallyYoursinCoachingInstitute from "../../components/Home/howEmotionallyYoursinCoachingInstitute.jsx";
import HowEmotionallyYoursinWorkplaces from "../../components/Home/HowEmotionallyYoursinWorkplaces.jsx";
import {Box, Container, Grid, Typography} from "@mui/material";
import WhyChooseUs from "../../components/Home/whyChooseUs.jsx";
import Challenging from "../../components/Home/challenging.jsx";
import MileStones from "../../components/Home/MileStones.jsx";

function Home() {
    return (
        <>
            <Herosection/>
            <HowEmotionallyYoursinSchools/>
            <HowEmotionallyYoursWorksInHigherEducation/>
            <HowEmotionallyYoursinCoachingInstitute/>
            <HowEmotionallyYoursinWorkplaces/>
            <Challenging/>
            <WhyChooseUs/>
            {/*<HowSchoolWorks/>*/}
            <MileStones/>

            <WorksTable/>

            {/*<Mindwell/>*/}
            <Assessments/>
            <Struggling/>
            {/*<CaseStudy/>*/}

            <EmployeeMentalHealth/>

            {/*<Challenges/>*/}
            {/*<CorporateWellness/>*/}
            {/*<MentalHealthResources/>*/}
            {/*<EngagementFramework/>*/}
            {/*<Clientsreview/>*/}
            {/*<Offerings/>*/}
            {/*<Therapists/>*/}
            {/*<Partners/>*/}
            {/*<LookingFor/>*/}
            {/*<Wetreat/>*/}
            {/*<MentalHealth/>*/}
            {/*<Plans/>*/}
            {/*<Expertselection/>*/}
        </>
    );
}

export default Home;