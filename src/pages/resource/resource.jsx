import React from 'react';
import Podcastsndblog from "../../components/resources/podcastsndblog.jsx";
import CrisisResources from "../../components/resources/crisisresources.jsx";
import SelfHelpTools from "../../components/resources/selfHelpTools.jsx";
import Blogs from "../../components/resources/blogs.jsx";
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Journaling from "../../components/resources/journaling.jsx";
import Assessments from "../../components/resources/assessments.jsx";

function Resource() {
    return (
        <Box>
            <Journaling/>
            <Assessments sx={{ p: "50px 0"}}/>`
            <SelfHelpTools sx={{ padding: {sm:"20px 0 0 0",xs:"20px 0 30px 0"},mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' }}}/>
            {/*<Podcastsndblog/>*/}
            <CrisisResources/>
            <Blogs sx={{mx: { xs: '30px', sm: '50px', md: '90px', xl: 'auto' },pt:3 }}/>
        </Box>
    );
}

export default Resource;
