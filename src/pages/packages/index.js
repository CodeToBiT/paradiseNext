import React, { useState } from "react";
import Head from "next/head";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import PackageCard from "@/components/card/PackageCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Link from "next/link";

import Accordion from "react-bootstrap/Accordion";

import {
  useGetPackagesQuery,
  useGetBlogsQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

const Packages = () => {
  const { data: packages } = useGetPackagesQuery();
  const { data: blogs } = useGetBlogsQuery();
  const { data: settings } = useGetSettingsQuery();
  const [value, setValue] = useState(0);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const handleChange = (num) => setValue(num);
  return (
    <>
      <Head>
        <title>Packages | Paradise Destination</title>
      </Head>
      <section className="single-banner">
        <div className="img-wide">
          <Image
            src={settings?.data.destination_page_image}
            width={0}
            height={0}
            sizes="100vw"
            alt="about"
          />
          <div className="single-banner-content">
            <h1 className="text-white">Our Packages</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>

              <Breadcrumb.Item active>Packages</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
      {/* <section className="packages-search mt-12 mt-sm-32">
        <div className="container">
          <div className=" d-flex flex-center align-center gap-16">
            <Image
              src="/assets/icon/map.png"
              width={50}
              height={50}
              alt="map"
            />
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
      </section> */}

      <section className="packages mt-12 mt-sm-32">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 col-sm-12">
              <div className="filter">
                <h6>FILTER BY:</h6>
              </div>
              <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
                <Accordion.Item eventKey="0" activekey="true">
                  <Accordion.Header>Filter Price</Accordion.Header>
                  <Accordion.Body>
                    <h6>Estimated Price</h6>
                    <h6 className="fw-regular py-8">
                      <abbr className="text-cGray600">Rs. </abbr>
                      {value.toLocaleString("en-Us")}
                    </h6>
                    <Slider
                      step={25}
                      max={1000000}
                      value={value}
                      onChange={handleChange}
                    />
                  </Accordion.Body>
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
            </div> */}

            <div className="col-lg-9 col-sm-12">
              <div className="row gap-24-row">
                {packages?.data.map((data, i) => {
                  if (data.destinations.length >= 2) {
                    return (
                      <div className="col-lg-4 col-sm-12" key={i}>
                        <PackageCard
                          image={data.image}
                          name={data.name}
                          price={data.adult_price}
                          description={data.short_description}
                          slug={data.slug}
                          type="combo"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="col-lg-4 col-sm-12" key={i}>
                        <PackageCard
                          image={data.image}
                          name={data.name}
                          price={data.adult_price}
                          description={data.short_description}
                          slug={data.slug}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="more-sidebar">
                <h5>Popular blogs</h5>

                <div className="more">
            
                  {blogs?.data.map((data, i) => {
                    return (
                      <div
                        className="card-more mt-12 mt-sm-16 position-relative"
                        key={i}
                      >
                        <div className="row">
                          <div className="col-4">
                            <div className="img-portrait">
                              <Image
                                src={data.image}
                                width={0}
                                height={0}
                                sizes="100vh"
                                alt={data.slug}
                              />
                            </div>
                          </div>
                          <div className="col-8">
                            <h6 className="small clamp-3">{data.title}</h6>
                       
                            <p className="mt-8 text-cGray600">
                              {formatDate(data.date)}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/blogs/${data.slug}`}
                          className="stretched-link"
                        ></Link>
                      </div>
                    );
                  })}
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
