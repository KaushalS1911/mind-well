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
        <>
            <Journaling/>
            <Assessments/>
            <SelfHelpTools/>
            <Podcastsndblog/>
            <CrisisResources/>
            <Blogs/>
        </>
    );
}

export default Resource;
