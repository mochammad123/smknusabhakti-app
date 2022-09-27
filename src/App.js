import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/nav/NavbarMenu";
import LandingHome from "./components/screens/LandingHome";
import LandingBackground from "./components/screens/LandingBackground";
import LandingVisionMission from "./components/screens/LandingVisionMission";
import Footer from "./components/footer/Footer";
import LandingGoal from "./components/screens/LandingGoal";

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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
