import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FeaturedCard = (props) => {
  return (
    <>
      <div className="card-featured rounded-12">
        <div className="position-relative">
          <div className="img-portrait-02 rounded-12 position-relative">
            <Image src={props.image} fill alt="featured" />
          </div>
          <div className="gradient-overlay"></div>
          {props.type ? (
            <div className="tag-overlay">
              <div className="btn btn-primary btn-sm text-white">
                Combo Offer
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="title-overlay text-white">
            <div className="h5">{props.name}</div>
            <div className="flex-between mt-4">
              <div>
                <div className="small">{props.duration}</div>
                <div className="d-flex gap-4 text-yellow500 x-small">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="p align-self-end">Rs. {props.price}</div>
            </div>
          </div>
          <Link
            href={`/packages/${props.slug}`}
             className="stretched-link"
          ></Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
