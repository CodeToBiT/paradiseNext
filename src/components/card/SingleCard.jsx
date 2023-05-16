import React from "react";
import Image from "next/image";
import { BsFillClockFill } from "react-icons/bs";
import { MdGroup, MdLocationPin } from "react-icons/md";

const SingleCard = () => {
  return (
    <>
      <div className="card-single rounded-24 overflow-hidden mt-16 mt-sm-40">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="img-landscape-02">
              <Image
                src="/assets/image/tour.jpg"
                width={0}
                height={0}
                sizes="100vh"
              />
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="content px-32 bg-cGray200 h-100 d-flex flex-column justify-content-center">
              <h5 className="fw-bold">EXPERIENCE THE GREAT HOLIDAY ON BEACH</h5>
              <p className="clamp-3 text-cGray600 fw-regular mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quod qui blanditiis? Et ipsam quaerat veniam facilis
                quo aliquid tenetur saepe odio. Ipsam eligendi accusamus sequi
                tenetur ipsum eaque dolorem?
              </p>

              <div className="info flex-wrap flex-center shadow-4 mt-24">
                <div className="time info-item item1">
                  <BsFillClockFill />
                  7D/6N
                </div>
                <div className="pax info-item">
                  <MdGroup />
                  7D/6N
                </div>
                <div className="location info-item">
                  <MdLocationPin />
                  Nepal
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="bg-primary text-white w-100 h-100 flex-center-center flex-column py-16">
              <div className="price">
                <h3>Rs 99999</h3>
              </div>
              <div className="p"> / person</div>
              <a className="btn btn-outline-white rounded-12 mt-12">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
