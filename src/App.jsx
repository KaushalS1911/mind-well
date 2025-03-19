import './App.css'
import Footer from "./components/global/footer.jsx";
import Navigation from "./components/global/navigation.jsx";
import HowItworks from "./pages/homepage/howItworks.jsx";
import Herosection from "./pages/homepage/herosection.jsx";
import MindWell from "./pages/homepage/mind-well.jsx";
import Offering from "./pages/homepage/offering.jsx";
import Lookingfor from "./components/Home-page/lookingfor.jsx";
import Lookingfors from "./pages/homepage/lookingfors.jsx";
import Strugglings from "./pages/homepage/strugglings.jsx";
import Wetreat from "./components/Home-page/wetreat.jsx";
import Wetreats from "./pages/homepage/wetreats.jsx";
import Expertselection from "./components/Home-page/expertselection.jsx";
import Expertselections from "./pages/homepage/expertselections.jsx";
import Clientsreview from "./components/Home-page/clientsreview.jsx";
import Clientsreviews from "./pages/homepage/clientsreviews.jsx";
import Featuredlatesthelp from "./components/resources/featuredlatesthelp.jsx";
import Resource from "./pages/resource/resource.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <HowItworks/>
            <Herosection/>
            <MindWell/>
            <Offering/>
            <Lookingfors/>
            <Strugglings/>
            <Wetreats/>
            <Expertselections/>
            <Clientsreviews/>
            <Resource/>
            <Footer/>
        </>
    )





}

export default App
