import React from "react";
import Image from "next/image";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="card-testimonial shadow-4 p-24">
        <div className="tname h4 text-center text-primary">{props.name}</div>
        <div className="row mt-16 gap-16 flex-center">
          <div className="col-lg-4 col-sm-12">
            <div className="img-portrait">
              <Image
                src={props.image}
                height="0"
                width="0"
                sizes="100vw"
                alt="testimonial profile"
              />
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="h4 py-16 fw-medium mt-12 border-top">
              {props.position}
            </div>
            <div
              className="h6 fw-regular text-cGray600 card-testimonial-desc"
              dangerouslySetInnerHTML={{ __html: props.description }}
            ></div>
          </div>
        </div>
        <Image
          className="quotation"
          src="/assets/icon/quotation-mark.png"
          width={120}
          height={120}
          alt="quotation"
        />
      </div>
    </>
  );
};

export default TestimonialCard;
