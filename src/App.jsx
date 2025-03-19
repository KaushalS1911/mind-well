import './App.css'
import Footer from "./components/global/footer.jsx";
import Navigation from "./components/global/navigation.jsx";
import HowItworks from "./pages/homepage/howItworks.jsx";
import Herosection from "./pages/homepage/herosection.jsx";
import MindWell from "./pages/homepage/mind-well.jsx";
import Offering from "./pages/homepage/offering.jsx";
import Touch from "./pages/homepage/touch.jsx";
import Crisis from "./pages/homepage/crisis.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <HowItworks/>
            <Herosection/>
            <MindWell/>
            <Offering/>
            <Crisis/>
            <Touch/>
            <Footer/>

        </>
    )





}

export default App
