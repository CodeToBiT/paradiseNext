import React from "react";
import DealsSlider from "../slider/DealsSlider";



const Deals = () => {
  return (
    <>
      <section className="deals mt-16 mt-sm-64 pt-80 pb-24">
        <div className="text-center text-white">
          <div className=" h3">Feel Something Different</div>
        </div>
        <div className="container">
          <DealsSlider />
        </div>
      </section>
    </>
  );
};

export default Deals;
