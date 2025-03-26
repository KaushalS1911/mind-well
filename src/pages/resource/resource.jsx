import React from 'react';
import Featuredlatesthelp from "../../components/resources/featuredlatesthelp.jsx";
import Assessments from "../../components/resources/assessments.jsx";
import Podcastsndblog from "../../components/resources/podcastsndblog.jsx";
import CrisisResources from "../../components/resources/crisisresources.jsx";

function Resource() {
    return (
        <>
            <Featuredlatesthelp/>
            <Assessments/>
            <Podcastsndblog/>
            <CrisisResources/>
        </>
    );
}

export default Resource;