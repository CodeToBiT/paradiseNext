import React from "react";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import Link from "next/link";

const ComboCard = (props) => {
  return (
    <>
      <div className="card-combo rounded-8">
        <div className="img-wide">
          <Image
            src={props.image}
            width={0}
            height={0}
            sizes="100vh"
            alt={props.slug}
          />

          <div className="tag small bg-white">Rs. {props.price}</div>
          <div className="card-combo-content">
            <h5 >{props.title}</h5>
            <p className="small clamp-2">{props.description}</p>
          </div>

          <div className="next bg-white flex-center-center">
            <GrNext />
          </div>
        </div>
        <div className="gradient-overlay rounded-8"></div>
        <Link href={`/packages/${props.slug}`} className="stretched-link"></Link>
      </div>
    </>
  );
};

export default ComboCard;
