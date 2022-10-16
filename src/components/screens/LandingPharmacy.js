import React from "react";
import Pharmacy from "../major/pharmacy/Pharmacy";
import Footer from "../footer/Footer";
import NavbarMenu from "../nav/NavbarMenu";

const LandingPharmacy = () => {
  return (
    <>
      <NavbarMenu />
      <Pharmacy />
      <Footer />
    </>
  );
};

export default LandingPharmacy;
