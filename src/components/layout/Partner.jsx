import React from "react";
import PartnerSlider from "../slider/PartnerSlider";

const Partner = () => {
  return (
    <>
      <section className="partners mt-24 mt-sm-40">
        <div className="text-center">
          <h3>Our Partners</h3>
        </div>
        <div className="container mt-16 mt-sm-24">
          <PartnerSlider />
        </div>
      </section>
    </>
  );
};

export default Partner;
