import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { toast, Toaster } from "react-hot-toast";

import { FiClock } from "react-icons/fi";
import { FaRoute, FaStar, FaRegSnowflake, FaRunning } from "react-icons/fa";
import { SlDirections, SlCup } from "react-icons/sl";
import { BiLandscape, BiUserPlus } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { TbCompass } from "react-icons/tb";
import { GiPriceTag, GiShare } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { RxPlus, RxMinus, RxCross2 } from "react-icons/rx";
import { AiOutlinePrinter } from "react-icons/ai";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "next-share";

import OverlayLoader from "@/components/layout/OverlayLoader";

import Link from "next/link";
import SingleNav from "@/components/header/Singlenav";
import { Providers } from "../../../frontend/services/providers";
import Footer from "@/components/footer/Footer";

import {
  useGetPackageDetailsQuery,
  useGetSettingsQuery,
  useCreateBookingsMutation,
} from "../../../frontend/services/api";

import Accordion from "react-bootstrap/Accordion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper";
import { Anchor, DatePicker } from "antd";
import dayjs from "dayjs";

const SinglePackage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: packages, isLoading } = useGetPackageDetailsQuery(id);
  const { data: settings } = useGetSettingsQuery();
  const [createBooking, { isError, isSuccess }] = useCreateBookingsMutation();
  const [currentUrl, setCurrentUrl] = useState("");
  const [targetOffset, setTargetOffset] = useState();
  const currentDate = new Date();
  const [tripDate, setTripDate] = useState(currentDate);
  const [adultValue, setAdultValue] = useState();
  const [childValue, setChildValue] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [bookingData, setBookingData] = useState({
    trip_date: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    comments: "",
    total_price: "",
    services: "",
  });
  const { first_name, last_name, email, phone, comments } = bookingData;

  useEffect(() => {
    if (isError) {
      toast.failed("Failed to Submit Your Booking");
    }
    if (isSuccess) {
      toast.success("Booking Submitted Successfully");

      setTimeout(() => {
        router.push("/packages");
      }, 2000);
    }
  });

  // Form States
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [package_id, setPackageId] = useState();
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  // const adultValue = packages?.data.adult_price;
  // const childValue = packages?.data.child_price;

  useEffect(() => {
    if (packages) {
      setAdultValue(packages.data.adult_price);
      setChildValue(packages.data.child_price);
      setPackageId(packages.data.id);
    }
  }, [packages]);

  const [adultCount, setAdultCount] = useState(2);
  // const [childCount, setChildCount] = useState(0);

  // const [basePrice, setBasePrice] = useState(adultValue);
  // const [basePrice2, setBasePrice2] = useState(childValue);
  const [selectedServices, setSelectedServices] = useState([]);

  const totalCount = adultCount;

  const [windowChange, setWindowChange] = useState(false);
  if (typeof window != "undefined") {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 154) {
        setWindowChange(true);
      } else {
        setWindowChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarPosition);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
    setTargetOffset(64);
  }, []);

  if (isLoading) {
    return <OverlayLoader />;
  }

  const handleDateChange = (date, dateString) => {
    console.log(dateString, "dateString");
    setTripDate(dateString);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const handleMinusClick = (event) => {
    event.preventDefault();
    const newValue = Math.max(adultCount - 1, 2);
    setAdultCount(newValue);
  };

  const handlePlusClick = (event) => {
    event.preventDefault();
    const newValue = Math.min(adultCount + 1, 20);
    setAdultCount(newValue);
  };

  const handleServiceCheckboxChange = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.filter((id) => id !== serviceId)
      );
    } else {
      setSelectedServices((prevSelectedServices) => [
        ...prevSelectedServices,
        serviceId,
      ]);
    }
  };

  const calculateTotalValue = () => {
    let total = adultValue * adultCount;

    selectedServices.forEach((serviceId) => {
      const selectedService = packages?.data.services.find(
        (service) => service.id === serviceId
      );
      if (selectedService) {
        total =
          Number(total) + Number(selectedService.price) * Number(totalCount);
      }
    });

    return total;
  };

  const totalValue = calculateTotalValue();

  const toggleModal = () => {
    document.body.classList.toggle("open");
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    if (e.target.name === "acceptedTerms") {
      setAcceptedTerms(e.target.checked);
    } else {
      setFormData({
        ...setBookingData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const onChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };
  const finalTotal = packages?.data.currency + " " + totalValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const data = {
        package_id,
        trip_date: tripDate,
        no_of_adults: adultCount,
        no_of_children: 0,
        first_name,
        last_name,
        email,
        country,
        phone,
        comments,
        total_price: finalTotal,
        services: selectedServices.map((serviceId) => {
          const selectedService = packages?.data.services.find(
            (service) => service.id === serviceId
          );
          return selectedService ? selectedService.service : "";
        }),
      };

      // console.log(data);
      createBooking(data);
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const formErrors = {};
    if (!first_name) {
      formErrors.first_name = "*First Name is required.*";
    }

    if (!last_name) {
      formErrors.last_name = "*Last Name is required.*";
    }
    if (!email) {
      formErrors.email = "*Email is required.*";
    }
    if (!country) {
      formErrors.country = "*Country is required.*";
    }
    if (!phone) {
      formErrors.phone = "*Phone is required.*";
    }
    if (acceptedTerms === false) {
      formErrors.terms = "*Please Accept the terms and conditions.*";
    }
    return formErrors;
  };
  return (
    <>
    <Toaster />
      <Head>
        <title>{packages?.data?.seo_title}</title>
        <meta name="description" content={packages?.data?.meta_description} />
        <meta name="keywords" content={packages?.data?.meta_keywords} />
        <meta property="og:image" content={packages?.data.image} />

        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content={packages?.data?.seo_title} />
        <meta
          property="og:description"
          content={packages?.data?.meta_description}
        />
      </Head>

      <main>
        <div className="bg-primary pt-16 pb-4">
          <div className="container">
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/destinations">Destinations</Link>
              </li>
              <Breadcrumb.Item href="/packages">Packages</Breadcrumb.Item>
              <Breadcrumb.Item active>{packages?.data.name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <section className="single mt-16">
          <div className={windowChange ? "anchor-navigation" : " hidden"}>
            <Anchor targetOffset={targetOffset}>
              <div className="container d-flex gap-4 py-12">
                <Anchor.Link href="#highlights" title="Highlights" />
                <Anchor.Link href="#itinerary" title="Itinerary" />
                <Anchor.Link href="#cost" title="Cost Details" />
                <Anchor.Link href="#visa" title="Visa Information" />
                <Anchor.Link href="#gallery" title="Gallery" />
              </div>
            </Anchor>
          </div>
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

                <div className="print">
                  <h6 className="mt-12 mt-24">Trip Information</h6>

                  <Link
                    href={`https://admin.pdes.com.np/api/print/${packages?.data.id}`}
                    target="__blank"
                  >
                    <AiOutlinePrinter />
                  </Link>
                </div>
                <div className="trip-info d-flex flex-wrap mt-16 mb-12">
                  {packages?.data.activity.activities ? (
                    <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                      <FaRunning />
                      <div>
                        <p className="small">Trip Activity</p>
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

                <div id="scrollContainer">
                  <div className="highlights mt-12 mt-sm-24" id="highlights">
                    <h5 className="">Highlights</h5>

                    <div
                      className="trip-description p mt-12"
                      dangerouslySetInnerHTML={{
                        __html: packages?.data.description,
                      }}
                    ></div>
                  </div>

                  <div className="itinerary mt-12 mt-sm-32" id="itinerary">
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
                              <span className="text-primary day">
                                Day {i + 1}:
                              </span>
                              <p className="fw-medium">{data.title}</p>
                            </Accordion.Header>
                            <Accordion.Body>{data.description}</Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                  </div>

                  <div className="cost-details mt-12 mt-sm-32" id="cost">
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

                  <div className="essential mt-12 mt-sm-32" id="visa">
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
              </div>
              <div className="col-lg-3 col-sm-12">
                {/* <div className="book-trip px-12 py-12 bg-primary rounded-4 position-sticky">
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
                       
                      </h6>
                    </div>
                  </div>
                  <div className="group-price bg-white px-8 py-12 rounded-4 mt-12">
                    <p className="">Share This Trip</p>
                    <ul className=" mt-8">

                      <li>
                        <FacebookShareButton
                          url={currentUrl}
                          style={{ width: "100%" }}
                        >
                          <div className="flex-center-between">
                            <div className="align-center gap-8">
                              <FacebookIcon size={32} round />
                              <p className="small fw-medium">Facebook </p>
                            </div>

                            <GiShare className="h5 text-primary" />
                          </div>
                        </FacebookShareButton>
                      </li>
                      <li>
                        <TwitterShareButton
                          url={currentUrl}
                          style={{ width: "100%" }}
                        >
                          <div className="flex-center-between">
                            <div className="align-center gap-8">
                              <TwitterIcon size={32} round />
                              <p className="small fw-medium">Twitter </p>
                            </div>

                            <GiShare className="h5 text-primary" />
                          </div>
                        </TwitterShareButton>
                      </li>
                      <li>
                        <LinkedinShareButton
                          url={currentUrl}
                          style={{ width: "100%" }}
                        >
                          <div className="flex-center-between">
                            <div className="align-center gap-8">
                              <LinkedinIcon size={32} round />
                              <p className="small fw-medium">Linked In </p>
                            </div>
                            <div>
                              <GiShare className="h5 text-primary" />
                            </div>
                          </div>
                        </LinkedinShareButton>
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
                </div> */}
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
                      </h6>
                    </div>
                  </div>

                  <div className="group-price bg-white px-8 py-12 rounded-4 mt-8">
                    <div className="flex-center-between">
                      <div>
                        <h6 className="small fw-bold">Start Date:</h6>
                        <p className="x-small">{formatDate(tripDate)}</p>
                      </div>
                      <DatePicker
                        onChange={handleDateChange}
                        disabledDate={disabledDate}
                        format="YYYY-MM-DD"
                      />
                    </div>

                    <div className="adult-number mt-12">
                      <label
                        htmlFor="travellers"
                        className="small fw-bold text-cGray700"
                      >
                        No. of Adults <br /> ( {packages?.data.currency}
                        {adultValue} / person )
                        <span className="text-accent">*</span>
                      </label>

                      <div className="people d-flex mt-8 align-stretch overflow-hidden">
                        <button
                          className="people-decrement px-12 align-center"
                          onClick={handleMinusClick}
                          type="button"
                        >
                          <RxMinus />
                        </button>
                        <input
                          className="border-0 text-center"
                          type="number"
                          value={adultCount}
                          min={1}
                          max={20}
                          onChange={() => {}}
                        />
                        <button
                          className="people-increment px-12 align-center"
                          onClick={handlePlusClick}
                          type="button"
                        >
                          <RxPlus />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="serives bg-white px-8 py-12 rounded-4 mt-8">
                    <h6 className="small fw-bolder">Additional Services:</h6>
                    {packages?.data.services.map((data, i) => {
                      return (
                        <div className="extra-item" key={i}>
                          <div className="form-check flex-between">
                            <div className="d-flex gap-12">
                              <input
                                type="checkbox"
                                checked={selectedServices.includes(data.id)}
                                onChange={() =>
                                  handleServiceCheckboxChange(data.id)
                                }
                                className="form-check-input"
                              />
                              <label className="form-check-label ">
                                <span className="small">{data.service}</span>
                              </label>
                            </div>
                            <p className="small">
                              {packages?.data.currency} &nbsp;
                              {totalCount * data.price}
                              {/* {data.price} */}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-white px-8 py-8 rounded-4 mt-8 flex-between">
                    <h5 className="text-cGray600 p">Total Price:</h5>
                    <h5 className="text-primary p">
                      {packages?.data.currency} {totalValue}
                    </h5>
                  </div>

                  <div className="mod">
                    <div className="page-content">
                      <button
                        className="mt-8 btn-sm btn-white text-primary w-100 text-center fw-bold"
                        type="button"
                        onClick={toggleModal}
                      >
                        BOOK THIS TRIP
                      </button>
                    </div>
                    <div className="background" onClick={toggleModal}></div>
                  </div>

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

          <div className="single-gallery w-100 mt-12 mt-sm-32" id="gallery">
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

        <div className="modal">
          <div className="modal-content">
            <h4>Enter Your Information</h4>

            <div className="row gap-8-row mt-8">
              <div className="col-lg-6 col-sm-12">
                <label htmlFor="first_name" className="small">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={first_name}
                  name="first_name"
                  onChange={onChange}
                  placeholder="Your First Name"
                  required
                />
                {errors.first_name && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                    }}
                  >
                    {errors.first_name}
                  </span>
                )}
              </div>
              <div className="col-lg-6 col-sm-12">
                <label htmlFor="last_name" className="small ">
                  Last Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={last_name}
                  name="last_name"
                  onChange={onChange}
                  placeholder="Last Name"
                />
                {errors.last_name && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                    }}
                  >
                    {errors.last_name}
                  </span>
                )}
              </div>
              <div className="col-lg-12 col-sm-12">
                <label htmlFor="email" className="small ">
                  Email Address
                  <span className="text-accent">*</span>
                </label>

                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={onChange}
                  placeholder="Email Address"
                />
                {errors.email && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                    }}
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label htmlFor="phone" className="small ">
                  Phone Number
                  <span className="text-secondary">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                  value={phone}
                  name="phone"
                  onChange={onChange}
                  required
                />
                {errors.phone && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                    }}
                  >
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label htmlFor="country" className="small ">
                  Select Your Country
                </label>

                <select
                  name="country"
                  value={country}
                  onChange={handleCountry}
                  className="form-select"
                >
                  <option value="country">Select Your Country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Aland Islands">Aland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire, Sint Eustatius and Saba">
                    Bonaire, Sint Eustatius and Saba
                  </option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, Democratic Republic of the Congo">
                    Congo, Democratic Republic of the Congo
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'Ivoire">Cote D&apos;Ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curacao">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">
                    Heard Island and Mcdonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People&apos;s Republic of
                  </option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kosovo">Kosovo</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People&apos;s Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, the Former Yugoslav Republic of">
                    Macedonia, the Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Barthelemy">Saint Barthelemy</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Martin">Saint Martin</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and the Grenadines">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Serbia and Montenegro">
                    Serbia and Montenegro
                  </option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Sint Maarten">Sint Maarten</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and the South Sandwich Islands">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan, Province of China">
                    Taiwan, Province of China
                  </option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">
                    Tanzania, United Republic of
                  </option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.s.">
                    Virgin Islands, U.s.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                {errors.country && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                    }}
                  >
                    {errors.country}
                  </span>
                )}
              </div>

              <div className="col-lg-12 col-sm-12">
                <label htmlFor="comments" className="small ">
                  Requirements
                </label>
                <textarea
                  name="comments"
                  className="form-control"
                  value={comments}
                  onChange={onChange}
                  placeholder="Your Requirements"
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div className="col-lg-12 col-sm-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="acceptedTerms"
                    checked={acceptedTerms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">
                    I accept the &nbsp;
                    <Link
                      href={`/terms-and-conditions`}
                      className="text-secondary"
                      target="_blank"
                    >
                      terms and conditions*
                    </Link>
                  </label>
                  <br />
                  {errors.terms && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "2px",
                      }}
                    >
                      {errors.terms}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <button
                  className="btn btn-primary btn-sm w-100 fw-bold"
                  // disabled={!acceptedTerms}
                  onClick={handleSubmit}
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="cross" onClick={toggleModal}>
              <RxCross2 />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePackage;

SinglePackage.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <SingleNav />
        {page}
        <Footer />
      </Providers>
    </>
  );
};
