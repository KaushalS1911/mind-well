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

function Home() {
    return (
        <>
            <Herosection/>
            <HowSchoolWorks/>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        backgroundColor: "#002F6C",
                        borderRadius: "16px",
                        color: "white",
                        mt: 7,
                        py: 6,
                        px: 4,
                    }}
                >
                    <Typography
                        className="Montserrat"
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 5 }}
                    >
                        Our Impact
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={6} sm={3}>
                            <Typography
                                variant="h4"
                                sx={{ color: "#FF7F1E", fontWeight: "700",ml:7 }}
                            >
                                150K+
                            </Typography>
                            <Box
                                sx={{
                                    fontSize: "14px",
                                    color: "#D1E1FF",
                                   ml:7
                                }}
                            >
                                Lives Impacted
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Typography
                                variant="h4"
                                sx={{ color: "#FF7F1E", fontWeight: "700",ml:7 }}
                            >
                                5000+
                            </Typography>
                            <Box
                                sx={{
                                    fontSize: "14px",
                                    color: "#D1E1FF",
                                   ml:7
                                }}
                            >
                                Sessions
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Typography
                                variant="h4"
                                sx={{ color: "#FF7F1E", fontWeight: "700",ml:7 }}
                            >
                                100+
                            </Typography>
                            <Box
                                sx={{
                                    fontSize: "14px",
                                    color: "#D1E1FF",
                                   ml:7
                                }}
                            >
                                Suicides Prevented
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Typography
                                variant="h4"
                                sx={{ color: "#FF7F1E", fontWeight: "700",ml:7 }}
                            >
                                86%
                            </Typography>
                            <Box
                                sx={{
                                    fontSize: "14px",
                                    color: "#D1E1FF",
                                   ml:7
                                }}
                            >
                                Improved Behavior Reported
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <WorksTable/>

            <Mindwell/>
            <Assessments/>
            <Struggling/>
            <CaseStudy/>
            <HowEmotionallyYoursinSchools/>
            <HowEmotionallyYoursWorksInHigherEducation/>
            <HowEmotionallyYoursinCoachingInstitute/>
            <HowEmotionallyYoursinWorkplaces/>
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