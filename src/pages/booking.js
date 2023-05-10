import React, { useState } from "react";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Providers } from "../../frontend/services/providers";
import Link from "next/link";

import { RxPlus, RxMinus } from "react-icons/rx";

const Booking = () => {
  const [tripDate, setTripDate] = useState(null);

  const adultValue = 100000;
  const childValue = 50000;

  const [currentValue, setCurrentValue] = useState(1);
  const [currentValue2, setCurrentValue2] = useState(0);
  const [basePrice, setBasePrice] = useState(adultValue);
  const [basePrice2, setBasePrice2] = useState(childValue);

  const handleMinusClick = (event) => {
    event.preventDefault();
    const newValue = Math.max(currentValue - 1, 1);
    setCurrentValue(newValue);
  };

  const handlePlusClick = (event) => {
    event.preventDefault();
    const newValue = Math.min(currentValue + 1, 20);
    setCurrentValue(newValue);
  };

  const handleMinusClick2 = (event) => {
    event.preventDefault();
    const newValue = Math.max(currentValue2 - 1, 0);
    setCurrentValue2(newValue);
  };

  const handlePlusClick2 = (event) => {
    event.preventDefault();
    const newValue = Math.min(currentValue2 + 1, 10);
    setCurrentValue2(newValue);
  };

  const handleDateChange = (event) => {
    setTripDate(event.target.value);
  };

  const totalValue = basePrice * currentValue + basePrice2 * currentValue2;
  return (
    <>
      <div className="bg-primary pt-16 pb-4">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Destinations</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Nepal</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Tour</Breadcrumb.Item>

            <Breadcrumb.Item active>About</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <section className="booking mt-12 mt-sm-32">
        <div className="container">
          <h4 className=" fw-bolder heading--underline">Booking</h4>
          <div className="x-small text-cGray600 mt-16">
            * Denotes required field
          </div>

          <div className="row gap-16-row">
            <div className="col-lg-8 col-sm-12">
              <form>
                <div className="shadow-4 px-32 py-24">
                  <h5>Date & Traveler's</h5>
                  <div className="row gap-16-row ">
                    <div className="col-lg-3">
                      <label
                        htmlFor="trip_date"
                        className="small text-cGray700"
                      >
                        Trip Date <span className="text-accent">*</span>
                      </label>
                      <input
                        type="date"
                        name="tripdate"
                        className="border border-1 border-gray300 "
                        onChange={handleDateChange}
                      />
                    </div>

                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-6">
                          <label
                            htmlFor="travellers"
                            className="small text-cGray700"
                          >
                            No. of Adults ( Rs. {adultValue} / person )
                            <span className="text-accent">*</span>
                          </label>

                          <div className="people d-flex align-stretch overflow-hidden border border-1 border-gray300 rounded-4">
                            <button
                              className="people-decrement px-12 bg-gray100 align-center rounded-0"
                              onClick={handleMinusClick}
                              type="button"
                            >
                              <RxMinus />
                            </button>
                            <input
                              className="border-0 text-center"
                              type="number"
                              value={currentValue}
                              min={1}
                              max={20}
                              onChange={() => {}}
                            />
                            <button
                              className="people-increment bg-gray100 px-12 align-center rounded-0"
                              onClick={handlePlusClick}
                              type="button"
                            >
                              <RxPlus />
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label
                            htmlFor="travellers"
                            className="small text-cGray700"
                          >
                            No. of Children ( Rs. {childValue} / person )
                          </label>

                          <div className="people d-flex align-stretch overflow-hidden border border-1 border-gray300 rounded-4">
                            <button
                              className="people-decrement px-12 bg-gray100 align-center rounded-0"
                              onClick={handleMinusClick2}
                              type="button"
                            >
                              <RxMinus />
                            </button>
                            <input
                              className="border-0 text-center"
                              type="number"
                              value={currentValue2}
                              min={0}
                              max={10}
                              onChange={() => {}}
                            />
                            <button
                              className="people-increment bg-gray100 px-12 align-center rounded-0"
                              onClick={handlePlusClick2}
                              type="button"
                            >
                              <RxPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-4 px-32 py-24 mt-8">
                  <h5>Lead Travellers Detail</h5>
                  <div className="row gap-16-row">
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="fname" className="small text-cGray700">
                        First Name <span className="text-accent">*</span>
                      </label>

                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="lname" className="small text-cGray700">
                        Last Name <span className="text-accent">*</span>
                      </label>

                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <label htmlFor="lname" className="small text-cGray700">
                        Email Address <span className="text-accent">*</span>
                      </label>

                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="phone" className="small text-cGray700">
                        Country Code + Phone Number
                        <span className="text-accent">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Country Code + Phone Number"
                      />
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="country" className="small text-cGray700">
                        Select Your Country
                        <span className="text-accente">*</span>
                      </label>

                      <select name="country" id="" className="form-select">
                        <option selected>---- Select Your Country ----</option>
                        <option value="">Nepal</option>
                        <option value="">Nepal</option>
                        <option value="">Nepal</option>
                        <option value="">Nepal</option>
                        <option value="">Nepal</option>
                        <option value="">Nepal</option>
                        <option value="">Nepal</option>
                      </select>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <label
                        htmlFor="requirements"
                        className="small text-cGray700"
                      >
                        Requirements
                      </label>
                      <textarea
                        name="requirements"
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>

                    <div className="col-lg-12 col-sm-12"></div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="order-details px-16 shadow-4 py-24">
                <h5>Review Order Details</h5>
                <div className="bg-blue50 rounded-8 px-16 py-24">
                  <h5 className="fw-bolder p text-primary">9 Days Adventure</h5>
                  <p className="small text-cGray600">
                    <span className="fw-medium">Duration: </span> 9 Days
                  </p>
                  <p className="small text-cGray600">
                    <span className="fw-medium">Trip Start: {tripDate}</span>
                  </p>
                  <p className="small text-cGray600">
                    <span className="fw-medium">No. of Travellers: </span>
                    {currentValue} &nbsp; Person(s)
                  </p>
                </div>

                <div className="extra mt-12">
                  <p className="fw-bolder">Extra prices:</p>
                  <div className="extra-item">
                    <div className="form-check flex-between">
                      <div className="d-flex gap-12">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                          Safari World + Mari
                        </label>
                      </div>
                      <p>Rs. 50000</p>
                    </div>
                  </div>
                  <div className="extra-item">
                    <div className="form-check flex-between flex-wrap">
                      <div className="d-flex gap-12">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                          Safari World + Mari asdf dsfg
                        </label>
                      </div>
                      <p>Rs. 50000</p>
                    </div>
                  </div>
                  <div className="extra-item">
                    <div className="form-check flex-between">
                      <div className="d-flex gap-12">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                          Safari World + Mari asdf dsa
                        </label>
                      </div>
                      <p>Rs. 50000</p>
                    </div>
                  </div>
                </div>

                <div className="total mt-12 flex-center-between">
                  <h5 className="text-cGray600 p">Total Price:</h5>
                  <h5 className="text-primary p">Rs. {totalValue}</h5>
                </div>
                <div className="form-check mt-12">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">
                    I accept the &nbsp;
                    <Link href="#" className="text-primary" target="_blank">
                      terms and conditions*
                    </Link>
                  </label>
                </div>
                <button className="btn btn-primary fw-medium rounded-24 mt-12">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;

Booking.getLayout = function PageLayout(page) {
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
