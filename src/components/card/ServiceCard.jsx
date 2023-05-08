import React from "react";
import Image from "next/image";

const ServiceCard = (props) => {
  return (
    <>
      <div className="card-service p-16 rounded-8">
        <div className="card-service-pattern"></div>

        <Image src={props.image} width={80} height={80} alt="service" />

        <h5 className="text-cGray700 mt-12">{props.title}</h5>
        <div
          className="p text-cGray600 mt-8"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
      </div>
    </>
  );
};

export default ServiceCard;
