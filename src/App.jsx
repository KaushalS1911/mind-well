import './App.css'
import Footer from "./components/global/footer.jsx";
import Navigation from "./components/global/navigation.jsx";
import HowItworks from "./pages/homepage/howItworks.jsx";
import Herosection from "./pages/homepage/herosection.jsx";
import MindWell from "./pages/homepage/mind-well.jsx";
import Offering from "./pages/homepage/offering.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <HowItworks/>
            <Herosection/>
            <MindWell/>
            <Offering/>
            <Footer/>
        </>
    )





}

export default App
