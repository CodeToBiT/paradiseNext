import React from "react";
import Image from "next/image";
import Link from "next/link";

const DealCard = () => {
  return (
    <>
      <div className="card-deals p-8 pb-12 bg-white">
        <div className="position-relative">
          <div className="img-landscape position-relative">
            <Image src="/assets/image/japan.jpeg" fill alt="deals" />
          </div>

          <div className="card-deals-content mt-24 text-center">
            <div className="h5">Tokyo Japan</div>
            <div className="p mt-16 text-cGray600">
              Japan is truly timeless, a pplace where ancient traditions are
              fused with mordern life as if it were the most natural thing in
              the world.
            </div>
          </div>
          <div className="flex-center mt-24">
            <Link
              href="#"
              className="btn btn-secondary text-white rounded-0 btn-sm stretched-link"
            >
              View More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealCard;
