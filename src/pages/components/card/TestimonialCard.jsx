import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <>
      <div className="card-testimonial shadow p-24">
        <div className="tname h4 text-center text-primary">
          Christian Nguyen
        </div>
        <div className="row mt-16 gap-16 flex-center">
          <div className="col-lg-4 col-sm-12">
            <div className="img-portrait">
              <Image
                src="/assets/image/profile.webp"
                height="0"
                width="0"
                sizes="100vw"
                alt="testimonial profile"
              />
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="h4 py-16 fw-medium mt-12 border-top">
              Frontend Developer
            </div>
            <div className="h6 fw-regular text-cGray600 card-testimonial-desc">
              &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Modi ex maiores adipisci, sint mollitia saepe, hic obcaecati
              inventore repellendus itaque cupiditate numquam vero ipsum dolore?
              Minima quam necessitatibus, officia similique asperiores atque
              dicta ad, voluptatibus, vero adipisci debitis id dolor
              reprehenderit nesciunt itaque neque velit.&quot;     
              
            </div>
          </div>
        </div>

        <Image className="quotation" src="/assets/icon/quotation-mark.png" width={120} height={120} alt="" />
      </div>
    </>
  );
};

export default TestimonialCard;
