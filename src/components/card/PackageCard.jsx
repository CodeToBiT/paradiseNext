import React from "react";
import Image from "next/image";
import Link from "next/link";

const Package = (props) => {
  return (
    <>
      <div className="card-packages shadow-4">
        <div className="position-relative">
          <div className="img-portrait">
            <Image
              src={props.image}
              width={0}
              height={0}
              sizes="100vh"
              alt="packages"
            />
            <div className="card-packages-content">
              <div className="flex-between gap-4">
                <p className="card-packages-title">{props.name}</p>
                <p className="text-secondary price fw-medium">Rs. {props.price}</p>
              </div>
              <div className="small mt-12 clamp-3 text-cGray600">{props.description}</div>
            </div>
          </div>

          {props.type ? (
            <div className="combo px-8 py-8 fw-medium x-small">Combo Offer</div>
          ) : (
            <></>
          )}

          <Link href={`/packages/${props.slug}`} className="stretched-link"></Link>
        </div>
      </div>
    </>
  );
};

export default Package;
