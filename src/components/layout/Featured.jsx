import React from "react";
import FeaturedSlider from "../slider/FeaturedSlider";
import Link from "next/link";

const Featured = () => {
  return (
    <>
      <section className="combo ">
        <div className="text-center">
          <h3 >Featured Packages</h3>
        </div>
        <div className="container">
          <FeaturedSlider />
        </div>
        <div className="flex-center mt-12 mt-sm-24">
          <Link href="/deals/featured" className="btn btn-secondary btn-bubble">
            View All
          </Link>
        </div>
      </section>
    </>
  );
};

export default Featured;
