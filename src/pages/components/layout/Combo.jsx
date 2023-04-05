import React from "react";
import ComboSlider from "../slider/ComboSlider";

const Combo = () => {
  return (
    <>
      <section className="combo ">
        <div className="text-center">
          <div className=" h3">Combo Packages</div>
        </div>
        <div className="container">
          <ComboSlider />
        </div>
      </section>
    </>
  );
};

export default Combo;
