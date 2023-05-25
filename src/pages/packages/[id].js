import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import { FiClock } from "react-icons/fi";
import { FaRoute, FaStar, FaRegSnowflake } from "react-icons/fa";
import { SlDirections, SlCup } from "react-icons/sl";
import { BiLandscape, BiUserPlus } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { TbCompass } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";

import OverlayLoader from "@/components/layout/OverlayLoader";

import Link from "next/link";
import NavigationBar from "@/components/header/Bottomnav";
import { Providers } from "../../../frontend/services/providers";
import Footer from "@/components/footer/Footer";

import {
  useGetPackageDetailsQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

import Accordion from "react-bootstrap/Accordion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper";

const SinglePackage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: packages, isLoading } = useGetPackageDetailsQuery(id);
  const { data: settings } = useGetSettingsQuery();

  if (isLoading) {
    return <OverlayLoader />;
  }

  return (
    <>
      <Head>
        <title>{packages?.data?.seo_title}</title>
        <meta name="description" content={packages?.data?.meta_description} />
        <meta name="keywords" content={packages?.data?.meta_keywords} />
      </Head>
      <section className="single mt-16">
        <div className="container">
          <div className="row gap-12-row">
            <div className="col-lg-9 col-sm-12">
              <h1 className="h4 ">{packages?.data.name}</h1>

              <div className="mt-12 img-landscape">
                <Image
                  src={packages?.data.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt={packages?.data.name}
                />
              </div>

              <h6 className="mt-12 mt-24">Trip Information</h6>
              <div className="trip-info d-flex flex-wrap mt-16">
                {packages?.data.activity.activities ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <FiClock />
                    <div>
                      <p className="small">Trip Duration</p>
                      <p className=" small">
                        {packages?.data.activity.activities}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {packages?.data.activity.trip_duration ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <FiClock />
                    <div>
                      <p className="small">Trip Duration</p>
                      <p className=" small">
                        {packages?.data.activity.trip_duration}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {packages?.data.activity.trip_mode ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <SlDirections />
                    <div>
                      <p className="small">Trip Mode</p>
                      <p className=" small">
                        {packages?.data.activity.trip_mode}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {packages?.data.activity.trip_grade ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <BiLandscape />
                    <div>
                      <p className="small">Trip Grade</p>
                      <p className=" small">
                        {packages?.data.activity.trip_grade}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {packages?.data.activity.trip_type ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <BiUserPlus />
                    <div>
                      <p className="small">Trip Type</p>
                      <p className=" small">
                        {packages?.data.activity.trip_type}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {packages?.data.activity.accomodation ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <IoBedOutline />
                    <div>
                      <p className="small">Accomodation</p>
                      <p className=" small">
                        {packages?.data.activity.accomodation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {packages?.data.activity.transportation ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <FaRoute />
                    <div>
                      <p className="small">Transport</p>
                      <p className=" small">
                        {packages?.data.activity.transportation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {packages?.data.activity.best_season ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <FaRegSnowflake />
                    <div>
                      <p className="small">Best Season</p>
                      <p className=" small">
                        {packages?.data.activity.best_season}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {packages?.data.activity.group_size ? (
                  <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                    <HiUserGroup />
                    <div>
                      <p className="small">Group Size</p>
                      <p className=" small">
                        {packages?.data.activity.group_size}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="highlights mt-12 mt-sm-24">
                <h5 className="">Highlights</h5>
              </div>

              <div
                className="trip-description p mt-12 mt-sm-32"
                dangerouslySetInnerHTML={{ __html: packages?.data.description }}
              ></div>

              <div className="itinerary mt-12 mt-sm-32">
                <div className="align-center gap-8">
                  <SlDirections className="h4 text-primary" />
                  <h4 className="">Itinerary</h4>
                </div>

                {packages?.data.activity.trip_duration ? (
                  <div className="bg-blue50 px-32 py-16 h6 mt-12 ">
                    {packages?.data.activity.trip_duration} &nbsp;
                    {packages?.data.name} Itinerary
                  </div>
                ) : (
                  <div className="bg-blue50 px-32 py-16 h6 mt-12 ">
                    {packages?.data.name} Itinerary
                  </div>
                )}

                <Accordion className="mt-12 mt-sm-16" defaultActiveKey="0">
                  {packages?.data.itenaries.map((data, i) => {
                    return (
                      <Accordion.Item eventKey={i} key={i}>
                        <Accordion.Header>
                          <span className="text-primary day">Day {i + 1}:</span>
                          <p className="fw-medium">{data.title}</p>
                        </Accordion.Header>
                        <Accordion.Body>{data.description}</Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>

              <div className="cost-details mt-12 mt-sm-32">
                <div className="align-baseline gap-8">
                  <SlCup className="h4 text-primary" />
                  <h4>Cost Details</h4>
                </div>
                {packages?.data.inclusion ? (
                  <div className="includes ps-40 mt-12">
                    <h6 className="p">Cost Includes</h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: packages?.data.inclusion,
                      }}
                    ></div>
                  </div>
                ) : (
                  <></>
                )}
                {packages?.data.exclusion ? (
                  <div className="excludes ps-40 mt-12">
                    <h6 className="p">Cost Excludes</h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: packages?.data.exclusion,
                      }}
                    ></div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="essential mt-12 mt-sm-32">
                <div className="align-center gap-8">
                  <TbCompass className="h3 text-primary" />
                  <h4 className="">Visa Information</h4>
                </div>

                <div
                  className="p mt-12"
                  dangerouslySetInnerHTML={{
                    __html: packages?.data.visa_process,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="book-trip px-12 py-12 bg-primary rounded-4 position-sticky">
                <div className="d-flex align-center gap-8 flex-center bg-blue50 py-8 rounded-4 mt-n32">
                  <div className="rating d-flex gap-4 text-yellow500 align-center ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="small fw-medium">based on</div>
                  <Link href="#review" className="small text-primary">
                    reviews
                  </Link>
                </div>
                <div className="mt-8 d-flex price-tag gap-8 text-white">
                  <GiPriceTag className="h2" />
                  <div className="price">
                    <div className="x-small">Start from </div>
                    <h6>
                      {packages?.data.currency} {packages?.data.adult_price}
                      {/* <strike>Rs 150000</strike> */}
                    </h6>
                  </div>
                </div>
                <div className="group-price bg-white px-8 py-12 rounded-4 mt-12">
                  <p className="">WE OFFER GROUP PRICE</p>
                  <ul className=" mt-8">
                    <li>
                      <div className="flex-center-between">
                        <p className="small fw-medium">1px </p>
                        <p className="small">
                          {" "}
                          {packages?.data.currency} {packages?.data.adult_price}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex-center-between">
                        <p className="small fw-medium">2px </p>
                        <p className=" small">
                          {" "}
                          {packages?.data.currency}{" "}
                          {packages?.data.adult_price * 2}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex-center-between">
                        <p className="small fw-medium">3px </p>
                        <p className="small">
                          {" "}
                          {packages?.data.currency}{" "}
                          {packages?.data.adult_price * 3}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="why-us text-white mt-12">
                  <h6>WHY BOOK WITH US?</h6>

                  <div
                   className="mt-8"
                    dangerouslySetInnerHTML={{
                      __html: settings?.data.why_book_with_us,
                    }}
                  ></div>
                  {/* <ul className="mt-8">
                    <li>Best Price Offer</li>
                    <li>Instant Onlne Booking Confirmation</li>
                    <li>Extend and Customize Trip Itineraries</li>
                  </ul> */}
                </div>

                <Link
                  href={`/packages/booking/${packages?.data.slug}`}
                  className="mt-8 btn btn-white text-primary w-100 text-center"
                >
                  BOOK THIS TRIP
                </Link>

                <div className="mt-12 call-us align-center gap-8 text-white">
                  <Image
                    src="/assets/icon/whatsapp.png"
                    width="40"
                    height="40"
                    alt="whatsapp"
                  />
                  <div>
                    <div className="x-small">
                      Neep Help? Call us on WhatsApp
                    </div>
                    <p className="small mt-4">+977 9876543210 (Gabish)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-gallery w-100 mt-12 mt-sm-32">
          <div className="text-center text-white pt-24">
            <h3>Gallery</h3>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {packages?.data.galleries.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="img-landscape">
                    <Image
                      src={data.image}
                      width={0}
                      height={0}
                      sizes="100vh"
                      alt="gallery"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SinglePackage;

SinglePackage.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <NavigationBar />
        {page}
        <Footer />
      </Providers>
    </>
  );
};
