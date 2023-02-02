import React from "react";
import Pharmacy from "../major/pharmacy/Pharmacy";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const LandingPharmacy = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <Pharmacy />
      </div>
      <Footer />
    </>
  );
};

export default LandingPharmacy;
