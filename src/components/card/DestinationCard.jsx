import React from "react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = (props) => {
  return (
    <>
      <div className="card-destination">
        <div className="img-portrait-03 rounded-8">
          <Image
            src={props.image}
            width={0}
            height={0}
            sizes="100vh"
            alt={props.name}
          />
          <div className="content text-white">
            <h5>{props.name}</h5>
            {props.activities ? <p>{props.activities} Activities</p> : <></>}
          </div>
          <Link
            href={`/destinations/${props.slug}`}
            className="stretched-link"
          ></Link>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
