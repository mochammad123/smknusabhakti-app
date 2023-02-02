import React from "react";
import Background from "../about_me/background/Background";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const LandingBackground = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <Background />
      </div>
      <Footer />
    </>
  );
};

export default LandingBackground;
