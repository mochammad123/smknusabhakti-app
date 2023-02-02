import React from "react";
import Nurse from "../major/nurse/Nurse";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const LandingNurse = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <Nurse />
      </div>
      <Footer />
    </>
  );
};

export default LandingNurse;
