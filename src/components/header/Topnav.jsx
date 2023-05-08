import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaTiktokSquare,
  FaWhatsappSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import {
  useGetSocialmediaQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

function getIcon(iconName) {
  switch (iconName) {
    case "facebook":
      return <FaFacebookSquare />;
    case "twitter":
      return <FaTwitterSquare />;
    case "instagram":
      return <FaInstagramSquare />;
    case "tiktok":
      return <FaTiktokSquare />;
    case "instagram":
      return <FaWhatsappSquare />;
    case "linkedin":
      return <FaLinkedin />;
    default:
      return <FaFacebookSquare />;
  }
}

const Topnav = (props) => {
  const { icon } = props;

  const { data: social } = useGetSocialmediaQuery();
  const { data: settings } = useGetSettingsQuery();
  return (
    <>
      <div className="top-nav py-12">
        <div className="container">
          <div className="flex-between">
            <div className="align-center text-white h5 gap-8">
              {social?.data.map((data, i) => {
                return (
                  <a href={data.link} key={i}>
                    {getIcon(data.icon)}
                  </a>
                );
              })}
            </div>
            <div className="d-flex gap-32 p">
              <div className="phone align-center gap-4 text-white">
                <FaPhoneAlt />
                {settings?.data.site_contact}
              </div>
              <div className="mail align-center gap-4 text-white">
                <FaEnvelope />
                {settings?.data.site_email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
