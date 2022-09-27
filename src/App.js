import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/nav/NavbarMenu";
import LandingHome from "./components/screens/LandingHome";
import LandingBackground from "./components/screens/LandingBackground";
import LandingVisionMission from "./components/screens/LandingVisionMission";
import Footer from "./components/footer/Footer";
import LandingGoal from "./components/screens/LandingGoal";
import LandingPharmacy from "./components/screens/LandingPharmacy";
import LandingChemical from "./components/screens/LandingChemical";
import LandingNurse from "./components/screens/LandingNurse";

function App() {
  return (
    <div>
      <Router basename="/">
        <NavbarMenu />

        <Routes>
          <Route exact path="/" element={<LandingHome />} />
          <Route exact path="/background" element={<LandingBackground />} />
          <Route exact path="/vimi" element={<LandingVisionMission />} />
          <Route exact path="/goals" element={<LandingGoal />} />
          <Route exact path="/pharmacy" element={<LandingPharmacy />} />
          <Route exact path="/chemical" element={<LandingChemical />} />
          <Route exact path="/nurses" element={<LandingNurse />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
