import './App.css'
import Navigation from "./components/global/navigation.jsx";
import ExpertsWorker from "./pages/experts/expertsWorker.jsx";
import Services from "./pages/services/services.jsx";
import Home from "./pages/homepage/home.jsx";
import Footer from "./components/global/footer.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/Aboutpage/about.jsx";
import Engagement from "./pages/Engagement/Engagement.jsx";
import Resource from "./pages/resource/resource.jsx";
import Contact from "./pages/Contact/contact.jsx";

function App() {

    return (
        <>
            <Navigation/>

            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/about"  element={ <About/> }/>
                <Route path="/engagement" element={ <Engagement/> }/>
                {/*<Route path="/partner" element={ <Partner/> }/>*/}
                {/*<Route path="/careers" element={ <Careers/> }/>*/}
                <Route path="/resources" element={ <Resource/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="/expertsWorker" element={ <ExpertsWorker/> }/>
            </Routes>


            {/*<Home/>*/}
            {/*<Services/>*/}
            {/*<ExpertsWorker/>*/}
            {/*<Resource/>*/}
            <Footer/>
        </>
    )


}

export default App
