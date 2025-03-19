import './App.css'
import Navigation from "./components/global/navigation.jsx";
import ExpertsWorker from "./pages/experts/expertsWorker.jsx";
import Resource from "./pages/resource/resource.jsx";
import Services from "./pages/services/services.jsx";
import Home from "./pages/homepage/home.jsx";
import Footer from "./components/global/footer.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <Home/>
            <Services/>
            <ExpertsWorker/>
            <Resource/>
            <Footer/>
        </>
    )


}

export default App
