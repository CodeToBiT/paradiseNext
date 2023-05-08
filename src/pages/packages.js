import React, { useState } from "react";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Package from "@/components/card/Package";

import Accordion from "react-bootstrap/Accordion";

// import MultiRangeSlider from "multi-range-slider-react";

const Packages = () => {
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(0);
  // const [minValue2, setMinValue2] = useState(0);
  // const [maxValue2, setMaxValue2] = useState(0);
  return (
    <>
      <section className="packages-banner">
        <div className="img-wide">
          <Image
            src="/assets/image/about.webp"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="packages-banner-content">
            <h1 className="text-white">Our Packages</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

              <Breadcrumb.Item active>Packages</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section className="packages-search mt-12 mt-sm-32">
        <div className="container">
          <div className=" d-flex flex-center align-center gap-16">
            <Image src="/assets/icon/map.png" width={50} height={50} />
            <div className="packages-search-dropdown">
              <h6>Destination</h6>
              <select name="package" id="">
                <option>Select Your Destination</option>
                <option>Nepal</option>
                <option>Singapore</option>
                <option>Japan</option>
              </select>
            </div>
            <button className="btn btn-sm btn-primary mt-auto px-24 py-16">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="packages mt-12 mt-sm-32">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="filter">
                <h6>FILTER BY:</h6>
                {/* <MultiRangeSlider
                  onInput={(e) => {
                    setMinValue(e.minValue);
                    setMaxValue(e.maxValue);
                  }}
                  onChange={(e) => {
                    setMinValue2(e.minValue);
                    setMaxValue2(e.maxValue);
                  }}
                  label={false}
                  ruler={false}
                  style={{
                    border: "none",
                    boxShadow: "none",
                    padding: "15px 10px",
                  }}
                ></MultiRangeSlider> */}
              </div>
              <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
                <Accordion.Item eventKey="0" activeKey="true">
                  <Accordion.Header>Filter Price</Accordion.Header>
                  <Accordion.Body>demo fill</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Tour Type</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="combopackages"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="combopackages"
                      >
                        Combo Packages
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="irregularpackages"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="irregularpackages"
                      >
                        Irregular Packages
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="regularpackages"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="regularpackages"
                      >
                        Regular Packages
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="specialoffers"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="specialoffers"
                      >
                        Special Offers
                      </label>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Duration</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="threedays"
                      />
                      <label className="form-check-label" htmlFor="threedays">
                        2 - 3 days
                      </label>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="col-lg-9 col-sm-12">
              <div className="row gap-24-row">
                <div className="col-lg-4 col-sm-12">
                  <Package />
                </div>
                <div className="col-lg-4 col-sm-12">
                  <Package />
                </div>
                <div className="col-lg-4 col-sm-12">
                  <Package />
                </div>
                <div className="col-lg-4 col-sm-12">
                  <Package />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;

// Packages.getLayout = function PageLayout(page) {
//   return (
//     <>
//       <NavigationBar />
//       {page}

//       <Footer />
//     </>
//   );
// };
