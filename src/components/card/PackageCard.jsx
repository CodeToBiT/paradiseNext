import React from "react";
import Image from "next/image";
import Link from "next/link";

const Package = () => {
  return (
    <>
      <div className="card-packages shadow-4">
        <div className="position-relative">
          <div className="img-portrait">
            <Image
              src="/assets/image/dubai.webp"
              width={0}
              height={0}
              sizes="100vh"
              alt="packages"
            />
            <div className="card-packages-content">
              <div className="flex-center-between">
                <h6 className="card-packages-title">Dubai</h6>
                <h6 className="text-secondary">Rs. 99999</h6>
              </div>
              <div className="small mt-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus voluptatum consequatur eligendi ab eos nam!
              </div>
            </div>
          </div>

          <div className="combo px-8 py-8 fw-bold">Combo Offer</div>

          <Link href="#" className="stretched-link"></Link>
        </div>
      </div>
    </>
  );
};

export default Package;
