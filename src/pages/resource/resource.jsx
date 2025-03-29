import React from 'react';
import Featuredlatesthelp from "../../components/resources/featuredlatesthelp.jsx";
import Assessments from "../../components/resources/assessments.jsx";
import Podcastsndblog from "../../components/resources/podcastsndblog.jsx";
import CrisisResources from "../../components/resources/crisisresources.jsx";
import SelfHelpTools from "../../components/resources/selfHelpTools.jsx";
import Blogs from "../../components/resources/blogs.jsx";
import {Box} from "@mui/material";
import WorkLifeBalanceQuestions from "../../components/resources/WorkLifeBalanceQuestions.jsx";

function Resource() {
    return (
        <>
            <Box id="featured-latest-help">
                <Featuredlatesthelp/>
            </Box>
            <Box id="assessments">
                <Assessments/>
            </Box>
            <Box id="self-help-tools">
                <SelfHelpTools/>
            </Box>
            <Box id="podcasts-and-blog">
                <Podcastsndblog/>
            </Box>
            <Box id="crisis-resources">
                <CrisisResources/>
            </Box>
            <Box id="blogs">
                <Blogs/>
            </Box>
        </>
    );
}

export default Resource;
