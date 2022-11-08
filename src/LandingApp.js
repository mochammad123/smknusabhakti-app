import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingHome from "../src/landing_page/components/screens/LandingHome";
import LandingBackground from "../src/landing_page/components/screens/LandingBackground";
import LandingVisionMission from "../src/landing_page/components/screens/LandingVisionMission";
import LandingGoal from "../src/landing_page/components/screens/LandingGoal";
import LandingPharmacy from "../src/landing_page/components/screens/LandingPharmacy";
import LandingChemical from "../src/landing_page/components/screens/LandingChemical";
import LandingNurse from "../src/landing_page/components/screens/LandingNurse";
import News from "../src/landing_page/components/news/News";
import NewsVideo from "../src/landing_page/components/news/NewsVideo";
import Galery from "../src/landing_page/components/galery/Galery";
import NewStudents from "../src/landing_page/components/ppdb/NewStudents";
import Login from "../src/landing_page/components/login/Login3";

// ==============================|| APP ||============================== //

const LandingApp = () => {
  return (
    <BrowserRouter basename="/">
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
    </BrowserRouter>
  );
};

export default LandingApp;
