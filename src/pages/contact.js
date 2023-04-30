import React from "react";
import NavigationBar from "./components/header/Bottomnav";
import Footer from "./components/footer/Footer";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-intro text-center py-32 ">
            <h1 className="h2 fw-bolder">Contact Us</h1>
            <h5 className="fw-regular p text-cGray600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur iure ad dolorem saepe ratione ipsam modi,
            </h5>
          </div>

          <div className="contact-social border-top border-2 py-32 py-sm-64">
            <div className="row gap-12-row">
              <div className="col-lg-4 col-sm-12">
                <div className="phone align-center gap-12">
                  <Image
                    src="/assets/icon/phone.png"
                    width="60"
                    height="60"
                    alt="phone"
                  />
                  <div>
                    <h5 className="fw-bold">Call us</h5>
                    <h5 className="fw-regular">+977 14543023</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mail align-center gap-12">
                  <Image
                    src="/assets/icon/mail.png"
                    width="60"
                    height="60"
                    alt="mail"
                  />
                  <div>
                    <h5 className="fw-bold">Send us an email</h5>
                    <h5 className="fw-regular">sales@pdes.com.np</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mail align-center gap-12">
                  <Image
                    src="/assets/icon/location.png"
                    width="60"
                    height="60"
                    alt="mail"
                  />
                  <div>
                    <h5 className="fw-bold">Location</h5>
                    <h5 className="fw-regular">
                      2nd Floor, Shukra Bhawan, Thamel
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-form">
        <div className="container">
          <div className="rounded-16 shadow-4 px-24 px-sm-40 py-32">
            <div className="row gap-16-row align-center">
              <div className="col-lg-5 col-sm-12">
                <h4>Write us</h4>
                <p className="text-cGray600 mt-8 fw-regular">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem fugiat enim in, quod doloribu
                </p>

                <div className="img-portrait mt-16 rounded-12">
                  <Image
                    src="/assets/image/contact.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-sm-12">
                <form>
                  <div className="row gap-16-row">
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="fname"
                        className="p fw-bold text-cGray700"
                      >
                        First Name <span className="text-accent">*</span>
                      </label>

                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="lname"
                        className="p fw-bold text-cGray700"
                      >
                        Last Name <span className="text-accent">*</span>
                      </label>

                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="email"
                        className="p fw-bold text-cGray700"
                      >
                        Email Address <span className="text-accent">*</span>
                      </label>

                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="phone"
                        className="p fw-bold text-cGray700"
                      >
                        Phone Number <span className="text-accent">*</span>
                      </label>

                      <input type="phone" placeholder="Phone Number" />
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <label
                        htmlFor="message"
                        className="p fwbold text-cGray700"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="col-lg-4">
                      <button className="btn btn-primary"> Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

Contact.getLayout = function PageLayout(page) {
  return (
    <>
      <NavigationBar />
      {page}
      <Footer />
    </>
  );
};
