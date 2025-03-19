import React from 'react';
import Featuredlatesthelp from "../../components/resources/featuredlatesthelp.jsx";
import Assessments from "../../components/resources/assessments.jsx";
import Podcastsndblog from "../../components/resources/podcastsndblog.jsx";

function Resource() {
    return (
        <>
        <Featuredlatesthelp />
            <Assessments/>
            <Podcastsndblog/>
        </>
    );
}

export default Resource;