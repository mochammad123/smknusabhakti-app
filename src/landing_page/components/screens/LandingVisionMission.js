import React from "react";
import VisionMission from "../about_me/vision_mission/VisionMission";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const LandingVisionMission = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <VisionMission />
      </div>
      <Footer />
    </>
  );
};

export default LandingVisionMission;
