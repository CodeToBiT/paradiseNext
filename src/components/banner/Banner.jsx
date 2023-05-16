import React from "react";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { BsFillPlayFill } from "react-icons/bs";

import { useGetSettingsQuery } from "../../../frontend/services/api";

const Banner = () => {
  const { data: settings } = useGetSettingsQuery();
  return (
    <>
      <section className="landing">
        <div className="container">
          <div className=" align-center">
            <div>
              <h1 className="h3 text-white landing-title">
                {settings?.data.banner_title}
              </h1>
              <div className="h6 fw-regular text-white landing-description mt-12 mt-sm-16 ">
                {settings?.data.banner_description}
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </section>
      
    </>
  );
};

export default Banner;
