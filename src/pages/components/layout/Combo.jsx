import React from "react";
import ComboSlider from "../slider/ComboSlider";
import Link from "next/link";

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
        <div className="flex-center mt-12 mt-sm-24">
          <Link href="#" className="btn btn-secondary">
            View All
          </Link>
        </div>
      </section>
    </>
  );
};

export default Combo;
