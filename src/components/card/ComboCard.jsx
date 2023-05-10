import React from "react";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import Link from "next/link";

const ComboCard = () => {
  return (
    <>
      <div className="card-combo rounded-8">
        <div className="img-wide">
          <Image
            src="/assets/image/about.webp"
            width={0}
            height={0}
            sizes="100vh"
            alt="combo"
          />

          <div className="tag small bg-white">Rs. 99999</div>
          <div className="card-combo-content">
            <h5 >Nepal, Russia, Japan</h5>
            <p className="small">Visit at a discounted rate to Nepal, Russia, Japan.</p>
          </div>

          <div className="next bg-white flex-center-center">
            <GrNext />
          </div>
        </div>
        <div className="gradient-overlay rounded-8"></div>
        <Link href="#" className="stretched-link"></Link>
      </div>
    </>
  );
};

export default ComboCard;
