import React from "react";
import Image from "next/image";
import Link from "next/link";

const DealCard = (props) => {
  return (
    <>
      <div className="card-deals p-8 pb-12 bg-white">
        <div className="position-relative">
          <div className="img-landscape position-relative">
            <Image src={props.image} fill alt="deals" />
          </div>

          <div className="card-deals-content mt-24 text-center">
            <div className="h5">{props.name}</div>
            <div className="p mt-16 text-cGray600">{props.description}</div>
          </div>
          <div className="flex-center mt-24">
            <Link
              href={`/packages/${props.slug}`}
              className="btn btn-secondary text-white rounded-0 btn-bubble            btn-sm stretched-link"
            >
              <span>
              View More Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealCard;
