import React from "react";
import Image from "next/image";
import { BsFillClockFill } from "react-icons/bs";
import { MdGroup, MdLocationPin } from "react-icons/md";

const SingleCard = (props) => {
  return (
    <>
      <div className="card-single rounded-24 overflow-hidden position-relative">
        <div className="row">
          <div className=" col-sm-12">
            <div className="img-landscape">
              <Image
                src={props.image}
                width={0}
                height={0}
                sizes="100vh"
                alt={props.name}
              />
            </div>
          </div>

          <div className=" col-sm-12">
            <div className="content px-32 py-12 bg-cGray200 h-100 d-flex flex-column justify-content-center">
              <h6 className="fw-bold">{props.name}</h6>
              <p className="clamp-3 small text-cGray600 fw-regular mt-12">
                {props.description}
              </p>

              <div className="info flex-wrap flex-center shadow-4 mt-24">
                <div className="time info-item item1">
                  <BsFillClockFill />
                  {props.duration}
                </div>
                <div className="pax info-item">
                  <MdGroup />
                  20
                </div>
                <div className="location info-item">
                  <MdLocationPin />
                  Nepal
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-12">
            <div className="bg-primary text-white w-100 h-100 flex-center-center flex-column py-16">
              <div className="price">
                <h5>
                  Rs {props.price}
                  <span className="p"> / person</span>
                </h5>
              </div>
              <a
                href={`/packages/${props.slug}`}
                className="btn btn-sm btn-outline-white rounded-12 mt-12"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
