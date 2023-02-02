import React from "react";
import Chemical from "../major/chemical/Chemical";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const LandingChemical = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <Chemical />
      </div>
      <Footer />
    </>
  );
};

export default LandingChemical;
