import React from 'react';
import Featuredlatesthelp from "../../components/resources/featuredlatesthelp.jsx";
import Assessments from "../../components/resources/assessments.jsx";
import Podcastsndblog from "../../components/resources/podcastsndblog.jsx";
import Crisisresources from "../../components/resources/crisisresources.jsx";
import Getintouch from "../../components/Home/getintouch.jsx";

function Resource() {
    return (
        <>
            <Featuredlatesthelp/>
            <Assessments/>
            <Podcastsndblog/>
            <Crisisresources/>
            <Getintouch/>
        </>
    );
}

export default Resource;