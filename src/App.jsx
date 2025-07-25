import "./App.css";
import Navigation from "./components/global/navigation.jsx";
import Home from "./pages/homepage/home.jsx";
import Footer from "./components/global/footer.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import About from "./pages/Aboutpage/about.jsx";
import Services from "./pages/ServicesShap/Services.jsx";
import Resource from "./pages/resource/resource.jsx";
import Contact from "./pages/Contact/contact.jsx";
import React, {useEffect} from "react";
import Gallery from "./pages/Gallery/gallery.jsx";
import SingleBlog from "./components/resources/SingleBlog.jsx";
import StrugglingDetail from "./components/Home/StrugglingDetail.jsx";

import AcademicStressAssessment from "./components/resources/Academic-Stress/AcademicStressAssessment.jsx";
import AcademicStressQuestions from "./components/resources/Academic-Stress/AcademicStressQuestions.jsx";
import AcademicStressAssessmentForm from "./components/resources/Academic-Stress/AcademicStressAssessmentForm.jsx";
import ExamStressGaugeAssessments from "./components/resources/Exam-Stress-Gauge/ExamStressGaugeAssessments.jsx";
import ExamStressGaugeQuestions from "./components/resources/Exam-Stress-Gauge/ExamStressGaugeQuestions.jsx";
import ExamStressAssessmentForm from "./components/resources/Exam-Stress-Gauge/ExamStressAssessmentForm.jsx";
import ShapeK12Assessment from "./components/resources/Shape-K12/ShapeK12Assessment.jsx";
import ShapeK12Questions from "./components/resources/Shape-K12/ShapeK12Questions.jsx";
import ShapeK12ChildForm from "./components/resources/Shape-K12/ShapeK12ChildForm.jsx";
import ShapeK12FamilyForm from "./components/resources/Shape-K12/ShapeK12FamilyForm.jsx";
import GeneralStressAssessmentForm from "./components/resources/General-Stress_Anxiety/GeneralStressAssessmentForm.jsx";
import EmotionalAwarenessAssessment
    from "./components/resources/Emotional-Awareness-Regulation/EmotionalAwarenessAssessment.jsx";
import EmotionalAwarenessQuestions
    from "./components/resources/Emotional-Awareness-Regulation/EmotionalAwarenessQuestions.jsx";
import EmotionalAwarenessAssessmentsForm
    from "./components/resources/Emotional-Awareness-Regulation/EmotionalAwarenessAssessmentsForm.jsx";
import SelfEsteemScaleAssessment
    from "./components/resources/Self-Esteem-Scale-For-Pre-Adolescents/SelfEsteemScaleAssessment.jsx";
import SelfEsteemScaleQuestions
    from "./components/resources/Self-Esteem-Scale-For-Pre-Adolescents/SelfEsteemScaleQuestions.jsx";
import SelfEsteemScaleAssessmentForm
    from "./components/resources/Self-Esteem-Scale-For-Pre-Adolescents/SelfEsteemScaleAssessmentForm.jsx";
import WorkLifeBalanceAssessment from "./components/resources/Work-Life-Balance/WorkLifeBalanceAssessment.jsx";
import WorkLifeBalanceQuestions from "./components/resources/Work-Life-Balance/WorkLifeBalanceQuestions.jsx";
import WorkLifeBalanceAssessmentForm from "./components/resources/Work-Life-Balance/WorkLifeBalanceAssessmentForm.jsx";
import GeneralStressAssessment from "./components/resources/General-Stress_Anxiety/GeneralStressAssessment.jsx";
import GeneralStressQuestions from "./components/resources/General-Stress_Anxiety/GeneralStressQuestions.jsx";
import Journaling from "./components/resources/journaling.jsx";
import Assessments from "./components/resources/assessments.jsx";
import SelfHelpTools from "./components/resources/selfHelpTools.jsx";
import Podcastsndblog from "./components/resources/podcastsndblog.jsx";
import CrisisResources from "./components/resources/crisisresources.jsx";
import Blogs from "./components/resources/blogs.jsx";
import Shape from "./components/Services/shape.jsx";
import Esop from "./components/Services/esop.jsx";
import ShapeDesigne from "./components/Services/shapeDesigne.jsx";
import Pep from "./components/Services/pep.jsx";
import Careers from "./components/Careers/careers.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorkPlaceHeroSection from "./components/Home/workPlaceHeroSection.jsx";
import SessionPage from "./pages/session/sessionPage.jsx";
import StressAnxiety from "./components/Home/struggling/StrugglingPage/stressAnxiety.jsx";
import Relationship from "./components/Home/struggling/StrugglingPage/relationship.jsx";
import GriefTrauma from "./components/Home/struggling/StrugglingPage/grief-Trauma.jsx";
import Addiction from "./components/Home/struggling/StrugglingPage/addiction.jsx";
import SelfEsteem from "./components/Home/struggling/StrugglingPage/selfEsteem.jsx";
import Bullying from "./components/Home/struggling/StrugglingPage/bullying.jsx";
import Overthinking from "./components/Home/struggling/StrugglingPage/overthinking.jsx";
import Struggling from "./components/Home/struggling/struggling.jsx";
import CareerUncertainty from "./components/Home/struggling/StrugglingPage/careerUncertainty.jsx";
import SingleSession from "./components/Session/singleSession.jsx";
import ChildLearningAbilityAssessment
    from "./components/resources/Child-Learning-Ability/ChildLearningAbilityAssessment.jsx";
import ChildLearningAbilityQuestions
    from "./components/resources/Child-Learning-Ability/ChildLearningAbilityQuestions.jsx";
import ChildLearningAbilityAssessmentForm
    from "./components/resources/Child-Learning-Ability/ChildLearningAbilityAssessmentForm.jsx";
import BookAppointmentPage from "./pages/BookAppointmentPage.jsx";
import BookAppointment from "./components/BookAppointment/BookAppointment.jsx";

function App() {
    function ScrollToTop() {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
        });

        AOS.refresh();
    }, []);

    return (
        <>
            <Navigation/>
            <ScrollToTop/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home1" element={<SessionPage/>}/>
                <Route path="/home2" element={<BookAppointment/>}/>
                {/*<Route path="/home1" element={<Struggling/>}/>*/}
                <Route path="/about" element={<About/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/services/shape" element={<Shape/>}/>
                <Route path="/services/shape-plus" element={<ShapeDesigne/>}/>
                <Route path="/services/esop" element={<Esop/>}/>
                <Route path="/services/pep" element={<Pep/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/careers" element={<Careers/>}/>
                <Route path={"/resources/journaling"} element={<Journaling/>}/>
                <Route path={"/resources/assessments"}
                       element={<Assessments sx={{p: {sm: "96px 0 0 0", xs: "50px 0 0 0"}, mt: {md: 5, xs: 0}}}/>}/>
                <Route path={"/resources/selfHelpTools"} element={<SelfHelpTools sx={{
                    padding: {md: "156px 0 0 0", xs: "66px 0 30px 0"},
                    mx: {xs: '30px', sm: '50px', md: '90px', xl: 'auto'}
                }}/>}/>
                <Route path={"/resources/podCastsndblog"} element={<Podcastsndblog/>}/>
                <Route path={"/resources/crisisResources"} element={<CrisisResources/>}/>
                <Route path="/blogs" element={<Blogs
                    sx={{pt: {xs: 6, md: 20}, mx: {xs: '30px', sm: '50px', md: '90px', xl: 'auto'}}}/>}/>
                <Route path="/blogs/:id" element={<SingleBlog/>}/>
                <Route path={"/resources/blogs"} element={<Blogs
                    sx={{pt: {xs: 6, md: 20}, mx: {xs: '30px', sm: '50px', md: '90px', xl: 'auto'}}}/>}/>
                <Route path={"/resources/blogs/:id"} element={<SingleBlog/>}/>
                <Route path="/resources" element={<Resource/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/struggling/:topic" element={<StrugglingDetail/>}/>
                <Route path="/struggling/stress-anxiety" element={<StressAnxiety/>}/>
                <Route path="/struggling/relationship" element={<Relationship/>}/>
                <Route path="/struggling/grief-trauma" element={<GriefTrauma/>}/>
                <Route path="/struggling/addiction" element={<Addiction/>}/>
                <Route path="/struggling/self-esteem" element={<SelfEsteem/>}/>
                <Route path="/struggling/bullying" element={<Bullying/>}/>
                <Route path="/struggling/overthinking" element={<Overthinking/>}/>
                <Route path="/struggling/careerUncertainty" element={<CareerUncertainty/>}/>
                <Route path="/book-appointment" element={<BookAppointmentPage/>}/>
                <Route path="/:id/session" element={<SingleSession/>}/>
                <Route
                    path="/assessments/exam-stress"
                    element={<ExamStressGaugeAssessments/>}
                />
                <Route
                    path="/assessments/exam-stress/questions"
                    element={<ExamStressGaugeQuestions/>}
                />
                <Route
                    path="/assessments/exam-stress/exam-assessment-form"
                    element={<ExamStressAssessmentForm/>}
                />
                <Route path="/assessments/shape-k12" element={<ShapeK12Assessment/>}/>
                <Route
                    path="/assessments/shape-k12/questions"
                    element={<ShapeK12Questions/>}
                />
                <Route
                    path="/assessments/shape-k12/shape-child-form"
                    element={<ShapeK12ChildForm/>}
                />
                <Route
                    path="/assessments/shape-k12/shape-family-form"
                    element={<ShapeK12FamilyForm/>}
                />
                <Route
                    path="/assessments/general-stress"
                    element={<GeneralStressAssessment/>}
                />
                <Route
                    path="/assessments/general-stress/questions"
                    element={<GeneralStressQuestions/>}
                />
                <Route
                    path="/assessments/general-stress/general-assessment-form"
                    element={<GeneralStressAssessmentForm/>}
                />
                <Route
                    path="/assessments/child-learning-ability"
                    element={<ChildLearningAbilityAssessment/>}
                />
                <Route
                    path="/assessments/child-learning-ability/questions"
                    element={<ChildLearningAbilityQuestions/>}
                />
                <Route
                    path="/assessments/child-learning-ability/assessment-form"
                    element={<ChildLearningAbilityAssessmentForm/>}
                />
                <Route
                    path="/assessments/emotional-awareness"
                    element={<EmotionalAwarenessAssessment/>}
                />
                <Route
                    path="/assessments/emotional-awareness/questions"
                    element={<EmotionalAwarenessQuestions/>}
                />
                <Route
                    path="/assessments/emotional-awareness/emotional-assessment-form"
                    element={<EmotionalAwarenessAssessmentsForm/>}
                />
                <Route
                    path="/assessments/academic-stress"
                    element={<AcademicStressAssessment/>}
                />
                <Route
                    path="/assessments/academic-stress/questions"
                    element={<AcademicStressQuestions/>}
                />
                <Route
                    path="/assessments/academic-stress/academic-assessment-form"
                    element={<AcademicStressAssessmentForm/>}
                />
                <Route
                    path="/assessments/self-esteem-scale"
                    element={<SelfEsteemScaleAssessment/>}
                />
                <Route
                    path="/assessments/self-esteem-scale/questions"
                    element={<SelfEsteemScaleQuestions/>}
                />
                <Route
                    path="/assessments/self-esteem-scale/self-assessment-form"
                    element={<SelfEsteemScaleAssessmentForm/>}
                />
                <Route
                    path="/assessments/work-life-balance"
                    element={<WorkLifeBalanceAssessment/>}
                />
                <Route
                    path="/assessments/work-life-balance/questions"
                    element={<WorkLifeBalanceQuestions/>}
                />
                <Route
                    path="/assessments/work-life-balance/work-assessment-form"
                    element={<WorkLifeBalanceAssessmentForm/>}
                />
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
