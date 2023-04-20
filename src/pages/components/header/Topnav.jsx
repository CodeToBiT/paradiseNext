import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Topnav = () => {
  return (
    <>
      <div className="top-nav py-12">
        <div className="container">
          <div className="flex-between">
            <div className="align-center text-white h5 gap-8">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>

              <a href="#">
                <FaTwitterSquare />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
            <div className="d-flex gap-32 p">
              <div className="phone align-center gap-4 text-white">
                <FaPhoneAlt />
                +977 9876543210
              </div>
              <div className="mail align-center gap-4 text-white">
                <FaEnvelope />
                example@example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
