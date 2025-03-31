import './App.css'
import Navigation from "./components/global/navigation.jsx";
import Home from "./pages/homepage/home.jsx";
import Footer from "./components/global/footer.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import About from "./pages/Aboutpage/about.jsx";
import Engagement from "./pages/Engagement/Engagement.jsx";
import Resource from "./pages/resource/resource.jsx";
import Contact from "./pages/Contact/contact.jsx";
import GeneralStressAssessment from "./components/resources/GeneralStressAssessment.jsx";
import GeneralStressQuestions from './components/resources/GeneralStressQuestions';
import {useEffect} from "react";
import EmotionalAwarenessAssessment from "./components/resources/EmotionalAwarenessAssessment.jsx";
import AcademicStressAssessment from "./components/resources/AcademicStressAssessment.jsx";
import AcademicStressQuestions from "./components/resources/AcademicStressQuestions.jsx";
import SelfEsteemScaleAssessment from "./components/resources/SelfEsteemScaleAssessment.jsx";
import SelfEsteemScaleQuestions from "./components/resources/SelfEsteemScaleQuestions.jsx";
import WorkLifeBalanceAssessment from "./components/resources/WorkLifeBalanceAssessment.jsx";
import WorkLifeBalanceQuestions from "./components/resources/WorkLifeBalanceQuestions.jsx";
import ExamStressGaugeAssessments from "./components/resources/ExamStressGaugeAssessments.jsx";
import ExamStressGaugeQuestions from "./components/resources/ExamStressGaugeQuestions.jsx";
import ShapeK12Assessment from "./components/resources/ShapeK12Assessment.jsx";
import ShapeK12Questions from "./components/resources/ShapeK12Questions.jsx";
import ExamStressAssessmentForm from "./components/resources/ExamStressAssessmentForm.jsx";
import ShapeK12ChildForm from "./components/resources/ShapeK12ChildForm.jsx";
import ShapeK12FamilyForm from "./components/resources/ShapeK12FamilyForm.jsx";
import EmotionalAwarenessQuestions from "./components/resources/EmotionalAwarenessQuestions.jsx";

function App() {

    function ScrollToTop() {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    return (
        <>
            <Navigation/>
            <ScrollToTop/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/engagement" element={<Engagement/>}/>
                {/*<Route path="/partner" element={ <Partner/> }/>*/}
                {/*<Route path="/careers" element={ <Careers/> }/>*/}
                <Route path="/resources" element={<Resource/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/assessments/exam-stress" element={<ExamStressGaugeAssessments/>}/>
                <Route path="/assessments/exam-stress/questions" element={<ExamStressGaugeQuestions/>}/>
                <Route path="/assessments/exam-stress/assessment-form" element={<ExamStressAssessmentForm/>}/>
                <Route path="/assessments/shape-k12" element={<ShapeK12Assessment/>}/>
                <Route path="/assessments/shape-k12/questions" element={<ShapeK12Questions/>}/>
                <Route path="/assessments/shape-k12/shape-child-form" element={<ShapeK12ChildForm/>}/>
                <Route path="/assessments/shape-k12/shape-family-form" element={<ShapeK12FamilyForm/>}/>
                <Route path="/assessments/general-stress" element={<GeneralStressAssessment/>}/>
                <Route path="/assessments/general-stress/questions" element={<GeneralStressQuestions/>}/>
                <Route path="/assessments/emotional-awareness" element={<EmotionalAwarenessAssessment/>}/>
                <Route path="/assessments/emotional-awareness/questions" element={<EmotionalAwarenessQuestions/>}/>
                <Route path="/assessments/academic-stress" element={<AcademicStressAssessment/>}/>
                <Route path="/assessments/academic-stress/questions" element={<AcademicStressQuestions/>}/>
                <Route path="/assessments/self-esteem-scale" element={<SelfEsteemScaleAssessment/>}/>
                <Route path="/assessments/self-esteem-scale/questions" element={<SelfEsteemScaleQuestions/>}/>
                <Route path="/assessments/work-life-balance" element={<WorkLifeBalanceAssessment/>}/>
                <Route path="/assessments/work-life-balance/questions" element={<WorkLifeBalanceQuestions/>}/>
            </Routes>

            <Footer/>
        </>
    )


}

export default App
