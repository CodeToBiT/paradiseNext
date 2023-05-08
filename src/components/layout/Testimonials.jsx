import React from "react";
import TestimonialCard from "../card/TestimonialCard";
import TestimonialSlider from "../slider/TestimonialSlider";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials py-80">
        <div className="text-center">
          <h3 className=" h3">Testimonials</h3>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-24">
            <div className="col-lg-10">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};

export default Testimonials;
