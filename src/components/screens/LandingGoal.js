import React from "react";
import Goal from "../about_me/goals/Goal";
import Footer from "../footer/Footer";
import NavbarMenu from "../nav/NavbarMenu";

const LandingGoal = () => {
  return (
    <>
      <NavbarMenu />
      <Goal />
      <Footer />
    </>
  );
};

export default LandingGoal;
