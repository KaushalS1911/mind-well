import React from 'react';
import WorksTable from "../../components/Home/worksTable.jsx";
import Herosection from "../../components/Home/herosection.jsx";
import Clientsreview from "../../components/Home/clientsreview.jsx";
import EmployeeMentalHealth from "../../components/Home/EmployeeMentalHealth.jsx";
import HowEmotionallyYoursinSchools from "../../components/Home/howEmotionallyYoursinSchools.jsx";
import Struggling from "../../components/Home/struggling.jsx";
import Assessments from "../../components/resources/assessments.jsx";
import HowEmotionallyYoursWorksInHigherEducation
    from "../../components/Home/howEmotionallyYoursWorksInHigherEducation.jsx";
import HowEmotionallyYoursinCoachingInstitute from "../../components/Home/howEmotionallyYoursinCoachingInstitute.jsx";
import HowEmotionallyYoursinWorkplaces from "../../components/Home/HowEmotionallyYoursinWorkplaces.jsx";
import WhyChooseUs from "../../components/Home/whyChooseUs.jsx";
import WellbeingJourney from "../../components/Home/wellbeingJourney.jsx";
import MileStones from "../../components/Home/MileStones.jsx";
import MajorClients from "../../components/About/majorClients.jsx";
import Overview from "../../components/Home/overview.jsx";
import EngagementFramework from "../../components/Home/EngagementFramework.jsx";
import Offerings from "../../components/Home/offerings.jsx";
import Challenges from "../../components/Home/challenges.jsx";
import LookingFor from "../../components/Home/lookingfor.jsx";
import Therapists from "../../components/Home/therapists.jsx";
import Wetreat from "../../components/Home/wetreat.jsx";
import MentalHealth from "../../components/Home/mentalHealth.jsx";
import Plans from "../../components/Home/plans.jsx";
import Expertselection from "../../components/Home/expertselection.jsx";
import Mindwell from "../../components/Home/mindwell.jsx";
import HowSchoolWorks from "../../components/Home/HowSchoolWorks.jsx";
import MentalHealthResources from "../../components/Home/MentalHealthResources.jsx";
import CaseStudy from "../../components/Home/CaseStudy.jsx";
import CorporateWellness from "../../components/Home/CorporateWellness.jsx";
import {Box, Container, Grid, Typography} from "@mui/material";
import Partners from "../../components/Home/Partners.jsx";
import WorkPlaceHeroSection from "../../components/Home/workPlaceHeroSection.jsx";
import GallerySection from "../../components/Home/GallerySection.jsx";

function Home() {
    return (
        <Box >
            <WorkPlaceHeroSection/>
            {/*<Herosection/>*/}
            <Overview/>
            <WellbeingJourney/>
            <WorksTable/>
            <WhyChooseUs/>
            <MileStones/>
            <HowEmotionallyYoursinSchools/>
            <HowEmotionallyYoursWorksInHigherEducation/>
            <HowEmotionallyYoursinCoachingInstitute/>
            <HowEmotionallyYoursinWorkplaces/>
            <Assessments/>
            <Struggling/>
            {/*<EmployeeMentalHealth/>*/}
            <GallerySection/>
            <MajorClients/>
            <Clientsreview/>

            {/*<HowSchoolWorks/>*/}
            {/*<CaseStudy/>*/}
            {/*<Challenges/>*/}
            {/*<CorporateWellness/>*/}
            {/*<MentalHealthResources/>*/}
            {/*<EngagementFramework/>*/}
            {/*<Offerings/>*/}
            {/*<Therapists/>*/}
            {/*<Partners/>*/}
            {/*<LookingFor/>*/}
            {/*<Wetreat/>*/}
            {/*<MentalHealth/>*/}
            {/*<Plans/>*/}
            {/*<Expertselection/>*/}
        </Box>
    );
}

export default Home;