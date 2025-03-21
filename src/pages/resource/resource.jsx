import React from 'react';
import Featuredlatesthelp from "../../components/resources/featuredlatesthelp.jsx";
import Getintouch from "../../components/resources/getintouch.jsx";
import Map from "../../components/resources/map.jsx";
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
            <Getintouch/>
            <Map/>
        </>
    );
}

export default Resource;