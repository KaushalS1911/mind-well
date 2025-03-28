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
                <Route path="/assessments/general-stress" element={<GeneralStressAssessment/>}/>
                <Route path="/assessments/general-stress/questions" element={<GeneralStressQuestions/>}/>
            </Routes>

            <Footer/>
        </>
    )


}

export default App
