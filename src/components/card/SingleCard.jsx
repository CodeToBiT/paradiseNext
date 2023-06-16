import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillClockFill, BsCalendar4 } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdGroup, MdLocationPin } from "react-icons/md";

const SingleCard = (props) => {
  return (
    <>
      <div className="card-single position-relative rounded-4 ">
        <div className="img-landscape position-relative overflow-visible">
          <Image
            src={props.image}
            width={0}
            height={0}
            sizes="100vh"
            alt={props.name}
          />
          <div className="overlay align-center gap-4">
            <p className="x-small">Rs {props.price}</p>
            <p className="x-small"> / person</p>
          </div>
        </div>
        <div className="content p-16">
          <div className="location align-center text-capitalize text-cGray600 p">
            <MdLocationPin className="text-primary h6" />
            {props.destination}
          </div>
          <Link
            href={`/packages/${props.slug}`}
            className="stretched-link h6 mt-8 fw-bolder"
          >
            {props.name}
          </Link>

          <div className="time small gap-8 mt-8 align-baseline">
            <BsCalendar4 className="h5" />

            <p className="small">Duration: {props.duration}</p>
          </div>

          <div className="flex-between mt-8">
            <div>
              <div className="price align-baseline gap-8">
                <AiOutlineTag className="h5" />
                <p className="small">Price from</p>
              </div>
              <p className="fw-bolder">
                {props.currency} <span> </span>
                {props.price}
              </p>
            </div>
            <div className="reviews">
              <div className="d-flex gap-4 text-yellow500 x-small">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="small mt-8">based on reviews</p>
            </div>
          </div>
        </div>

        {/* <div className="content px-32 py-12 bg-cGray200 h-100 d-flex flex-column justify-content-center">
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
          </div>
        </div> */}
      </div>
      {/* <div className=" col-sm-12">
            <div className="bg-primary text-white w-100 h-100 flex-center-center flex-column py-8">
              <Link
                href={`/packages/${props.slug}`}
                className="btn btn-xs btn-outline-white rounded-12 mt-4 stretched-link"
              >
                Book Now
              </Link>
            </div>
          </div> */}
    </>
  );
};

export default SingleCard;
