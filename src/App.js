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
import Login from "../src/landing_page/components/login/LoginSide";
import PrivateRoutes from "./landing_page/components/PrivateRoutes";
import Dashboard from "./components/mui_dashboard/Dashboard";
import Blog from "./components/mui_dashboard/news/blog/Blog";
import Video from "./components/mui_dashboard/news/video/Video";
import Galeries from "./components/mui_dashboard/galery/Galeries";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<LandingHome />} />
          <Route exact path="/about-me" element={<LandingBackground />} />
          <Route
            exact
            path="/about-me/background"
            element={<LandingBackground />}
          />
          <Route
            exact
            path="/about-me/vimi"
            element={<LandingVisionMission />}
          />
          <Route exact path="/about-me/goals" element={<LandingGoal />} />
          <Route exact path="/major" element={<LandingPharmacy />} />
          <Route exact path="/major/pharmacy" element={<LandingPharmacy />} />
          <Route exact path="/major/chemical" element={<LandingChemical />} />
          <Route exact path="/major/nurses" element={<LandingNurse />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news/news-paper" element={<News />} />
          <Route exact path="/news/news-video" element={<NewsVideo />} />
          <Route exact path="/galery" element={<Galery />} />
          <Route exact path="/ppdb" element={<NewStudents />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard/main-dashboard" element={<Dashboard />} />
            <Route path="/dashboard/blog" element={<Blog />} />
            <Route path="/dashboard/video" element={<Video />} />
            <Route path="/dashboard/galery" element={<Galeries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
