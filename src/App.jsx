import './App.css'
import Footer from "./components/global/footer.jsx";
import Navigation from "./components/global/navigation.jsx";
import HowItworks from "./pages/homepage/howItworks.jsx";
import Herosection from "./pages/homepage/herosection.jsx";
import MindWell from "./pages/homepage/mind-well.jsx";
import Offering from "./pages/homepage/offering.jsx";
import HealthStruggling from "./pages/homepage/healthStruggling.jsx";
import Health from "./pages/services/health.jsx";
import Organization from "./pages/services/organization.jsx";
import CorporatePartners from "./pages/services/corporatePartners.jsx";
import Consultation from "./components/global/consultation.jsx";
import ExpertsWorker from "./pages/experts/expertsWorker.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <Herosection/>
            <MindWell/>
            <HowItworks/>
            <Offering/>
            <HealthStruggling/>
            <Health/>
            <Organization/>
            <CorporatePartners/>
            <ExpertsWorker/>
            <Footer/>
        </>
    )





}

export default App
