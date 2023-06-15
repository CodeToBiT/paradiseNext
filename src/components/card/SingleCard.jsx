import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillClockFill } from "react-icons/bs";
import { MdGroup, MdLocationPin } from "react-icons/md";

const SingleCard = (props) => {
  return (
    <>
      <div className="card-single rounded-12 overflow-hidden position-relative">
        <div className="row">
          <div className=" col-sm-12">
            <div className="img-landscape position-relative">
              <Image
                src={props.image}
                width={0}
                height={0}
                sizes="100vh"
                alt={props.name}
              />
              <div className="price align-center gap-4">
                <p className="x-small">Rs {props.price}</p>
                <p className="x-small"> / person</p>
              </div>
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
                  {props.size}
                </div>
                <div className="location info-item text-capitalize">
                  <MdLocationPin />
                  {props.destination}
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-12">
            <div className="bg-primary text-white w-100 h-100 flex-center-center flex-column py-8">
              {/* <div className="price">
                <h5>
                  Rs {props.price}
                  <span className="p"> / person</span>
                </h5>
              </div> */}
              <Link
                href={`/packages/${props.slug}`}
                className="btn btn-xs btn-outline-white rounded-12 mt-4 stretched-link"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
