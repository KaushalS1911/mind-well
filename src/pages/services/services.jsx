import React from 'react';
import MentalHealth from "../../components/services/mentalHealth.jsx";
import Plans from "../../components/services/plans.jsx";
import Partners from "../../components/services/partners.jsx";
import Struggling from "../../components/services/struggling.jsx";
import Therapists from "../../components/services/therapists.jsx";
import Wetreat from "../../components/services/wetreat.jsx";
import LookingFor from "../../components/services/lookingfor.jsx";
import Offerings from "../../components/services/offerings.jsx";

function Services() {
    return (
        <>
            <Offerings/>
            <Struggling/>
            <LookingFor/>
            <Therapists/>
            {/*<Wetreat/>*/}
            {/*<MentalHealth/>*/}
            {/*<Plans/>*/}
            {/*<Partners/>*/}
        </>
    );
}

export default Services;