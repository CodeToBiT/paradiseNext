import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer py-56">
        <div className="container">
          <div className="footer-top px-40 py-24">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <Image
                  src="/assets/image/logo.png"
                  width="150"
                  height="70"
                  alt="logo"
                />

                <div className="contacts mt-12 mt-sm-16">
                  <p className="small fw-medium py-4">
                    Phone: +977 1 4543023 / 4543024
                  </p>
                  <p className="small fw-medium py-4">
                    Email: sales@pdes.com.np
                  </p>
                  <p className="small fw-medium py-4">
                    Address: Thamel Marg, Kathmandu Nepal
                  </p>
                </div>

                <p className="mt-12 fw-bold">STAY CONNECTED WITH US</p>
                <div className="socials d-flex mt-8 gap-12">
                  <a href="#">
                    <Image
                      src="/assets/icon/facebook.png"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/icon/instagram.png"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/icon/linkedin.png"
                      width={30}
                      height={30}
                    />
                  </a>

                  <a href="#">
                    <Image
                      src="/assets/icon/twitter.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <h5>Company</h5>

                    <ul className="mt-12">
                      <li>
                        <a href="#" className="nav-links">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-links">
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Payment and Booking
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Terms and Conditions
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <h5>Useful Links</h5>
                    <ul className="mt-12 d-flex flex-wrap">
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="" className="nav-links">
                          Demo
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
