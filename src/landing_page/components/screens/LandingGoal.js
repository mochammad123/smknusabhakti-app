import React from "react";
import Goal from "../about_me/goals/Goal";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const LandingGoal = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <Goal />
      </div>
      <Footer />
    </>
  );
};

export default LandingGoal;
