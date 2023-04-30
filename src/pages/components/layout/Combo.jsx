import React from "react";
import ComboSlider from "../slider/ComboSlider";

const Combo = () => {
  return (
    <>
      <section className="combo mt-12 mt-sm-40">
        <div className="text-center">
          <h3>Combo Packages</h3>
        </div>
        <div className="container">
          <ComboSlider />
        </div>
      </section>
    </>
  );
};

export default Combo;
