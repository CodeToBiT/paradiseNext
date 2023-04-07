import React from "react";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { BsFillPlayFill } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      {/* <section className="landing mt-16 mt-sm-24">
        <div className="container">
          <div className="row gap-16-row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <h1 className="h2 text-cGray800">
                <span className="text-secondary"> Explore</span> the{" "}
                <span className="text-secondary"> world</span> with Paradise
                Destinations
              </h1>

              <div className="h5 fw-regular text-cGray700 mt-12 mt-sm-16 ">
                Enjoy every step of the journey and record stories of the
                world's most beautiful landscapes with us.
              </div>
              <div className="find-form mt-12 mt-sm-24 rounded-8 shadow-2 position-relative z-2">
                <div className="align-center flex-wrap">
                  <div className="bg-primary text-white px-24 py-12 flex-fill text-center text-sm-start flex-sm-grow-0">
                    <p className="h6">Find Your</p>
                    <h3>Holiday</h3>
                  </div>
                  <div className="px-24 py-12 flex-fill bg-white">
                    <div className="flex-center-between gap-12">
                      <Form.Select>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <Button className="btn btn-sm btn-secondary">
                        Search Now
                      </Button>
                    </div>
                    <div className="h6 mt-12 fw-bold">
                      Love where you're going now
                    </div>
                  </div>
                </div>
              </div>
              <div className="align-center gap-8 mt-12 mt-sm-24">
                <div>Play Video</div>

                <div className="play bg-accent circle">
                  <BsFillPlayFill className="text-white h4" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="img-portrait rounded-8 rounded-sm-16">
                <Image
                  src="/assets/image/japan.jpeg"
                  width={500}
                  height={500}
                  alt="banner img"
                  priority="true"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="landing">
        <div className="container">
          <div className="row align-center">
            <div>
              <h1 className="h3 text-white">
                <span className="text-white "> Explore</span> the
                <span className="text-white"> world</span> with
                <br />
                <span className=" h2"> Paradise Destination</span>
              </h1>

              <div className="h5 fw-regular text-white mt-12 mt-sm-16 ">
                Enjoy every step of the journey and record stories of the <br />
                world's most beautiful landscapes with us.
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
