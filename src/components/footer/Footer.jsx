import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  useGetSettingsQuery,
  useGetSocialmediaQuery,
  useGetMenusQuery,
} from "../../../frontend/services/api";

const Footer = () => {
  const { data: settings } = useGetSettingsQuery();
  const { data: social } = useGetSocialmediaQuery();
  const { data: menuOne } = useGetMenusQuery("2");
  const { data: menuTwo } = useGetMenusQuery("3");

  function getIcon(iconName) {
    switch (iconName) {
      case "facebook":
        return (
          <Image
            src="/assets/icon/facebook.png"
            width={30}
            height={30}
            alt="facebook"
          />
        );
      case "twitter":
        return (
          <Image
            src="/assets/icon/twitter.png"
            width={30}
            height={30}
            alt="twitter"
          />
        );
      case "instagram":
        return (
          <Image
            src="/assets/icon/instagram.png"
            width={30}
            height={30}
            alt="instagram"
          />
        );
      case "linkedin":
        return (
          <Image
            src="/assets/icon/linkedin.png"
            width={30}
            height={30}
            alt="linkedin"
          />
        );
      default:
        return (
          <Image
            src="/assets/icon/facebook.png"
            width={30}
            height={30}
            alt="facebook"
          />
        );
    }
  }

  return (
    <>
      <footer className="footer mt-12 mt-sm-40">
        <div className="container py-56">
          <div className="footer-top px-40 py-24 ">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <Link href="/">
                  {settings?.data.site_footer_logo ? (
                    <Image
                      src={settings?.data.site_footer_logo}
                      width="150"
                      height="70"
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/assets/image/logo.png"
                      width="150"
                      height="70"
                      alt="logo"
                    />
                  )}
                </Link>

                <div className="contacts mt-12 mt-sm-16">
                  <p className="small fw-medium py-4">
                    Phone: {settings?.data.site_contact}
                  </p>
                  <p className="small fw-medium py-4">
                    Email: {settings?.data.site_email}
                  </p>
                  <p className="small fw-medium py-4">
                    Address: {settings?.data.site_location}
                  </p>
                </div>

                <p className="mt-12 fw-medium ">STAY CONNECTED WITH US</p>
                <div className="socials d-flex mt-8 gap-12">
                  {social?.data.map((data, i) => {
                    return (
                      <Link href={data.link} key={i}>
                        {getIcon(data.icon)}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="col-lg-3 col-sm-12">
                <h5>COMPANY</h5>

                <ul className="mt-12">
                  {menuOne?.data.map((data, i) => {
                    return (
                      <li key={i}>
                        <Link href={data.slug} className="nav-links">
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3 col-sm-12">
                <h5>TRAVELERS INFO</h5>

                <ul className="mt-12">
                  {menuTwo?.data.map((data, i) => {
                    return (
                      <li key={i}>
                        <Link href={data.slug} className="nav-links">
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3 col-sm-12">
                {settings?.data.affiliated_image ? (
                  <>
                    <h5>AFFILIATED WITH</h5>

                    <div className="img-landscape mt-12">
                      <Image
                        src={settings?.data.affiliated_image}
                        width={0}
                        height={0}
                        sizes="100vh"
                        alt="affiliated"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {settings?.data.coe_image ? (
                  <>
                    <p className="mt-16 fw-medium">CERTIFICATE OF EXELLENCE</p>

                    <div className="img-wide mt-12">
                      <Image
                        src={settings?.data.coe_image}
                        width={0}
                        height={0}
                        sizes="100vh"
                        alt="certified"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-16 py-sm-56 z-3">
          <div className="container">
            <div className="flex-center-between flex-column gap-16">
              <div className="align-center gap-16  flex-wrap">
                <div className="h6 fw-medium text-white d-sm-block d-none ">
                  We Accept:
                </div>
                <Image
                  src="/assets/icon/paypal.png"
                  width={80}
                  height={50}
                  alt="paypal"
                />
                <Image
                  src="/assets/icon/visapayment.png"
                  width={70}
                  height={60}
                  alt="visa"
                />
                <Image
                  src="/assets/icon/mastercard.png"
                  width={80}
                  height={50}
                  alt="mastercard"
                />
                <Image
                  src="/assets/icon/maestro.png"
                  width={80}
                  height={50}
                  alt="maestro"
                />
              </div>
              <div className="p copyright text-white">
                Copyright &copy; 2023 by Paradise Destination
              </div>

              <Link href="https://paradiseit.com.np/">
                <Image
                  src="/assets/image/paradise.png"
                  width={165}
                  height={40}
                  alt="paradise"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-background z-1">
          <div className="img-wrapper">
            <Image
              src="/assets/image/footer.jpg"
              width={1920}
              height={500}
              quality={100}
              unoptimized
              alt="footerbg"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
