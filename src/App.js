import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/nav/NavbarMenu";
import LandingHome from "./components/screens/LandingHome";

function App() {
  return (
    <div>
      <Router basename="/">
        <NavbarMenu />

        <Routes>
          <Route exact path="/" element={<LandingHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
