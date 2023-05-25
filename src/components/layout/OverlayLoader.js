import Image from "next/image";
import React from "react";

const OverlayLoader = () => { 
  return (
    <div className="loader_overlay">
      <span className="loader-img">
        <Image
          src="/assets/icon/favicon.png"
          width={50}
          height={50}
          alt="paradise"
        />
      </span>
      <div
        className="lds-roller"
        style={{
          top: "50vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default OverlayLoader;
