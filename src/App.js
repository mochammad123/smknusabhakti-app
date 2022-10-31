import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/nav/NavbarMenu";
import LandingHome from "./components/screens/LandingHome";
import LandingBackground from "./components/screens/LandingBackground";
import LandingVisionMission from "./components/screens/LandingVisionMission";
import LandingGoal from "./components/screens/LandingGoal";
import LandingPharmacy from "./components/screens/LandingPharmacy";
import LandingChemical from "./components/screens/LandingChemical";
import LandingNurse from "./components/screens/LandingNurse";
import News from "./components/news/News";
import NewsVideo from "./components/news/NewsVideo";
import Galery from "./components/galery/Galery";
import NewStudents from "./components/ppdb/NewStudents";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<LandingHome />} />
          <Route exact path="/background" element={<LandingBackground />} />
          <Route exact path="/vimi" element={<LandingVisionMission />} />
          <Route exact path="/goals" element={<LandingGoal />} />
          <Route exact path="/pharmacy" element={<LandingPharmacy />} />
          <Route exact path="/chemical" element={<LandingChemical />} />
          <Route exact path="/nurses" element={<LandingNurse />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news_video" element={<NewsVideo />} />
          <Route exact path="/gallery" element={<Galery />} />
          <Route exact path="/ppdb" element={<NewStudents />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
