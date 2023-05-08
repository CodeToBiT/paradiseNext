import React from "react";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { FaRoute, FaStar } from "react-icons/fa";
import { SlDirections, SlCup } from "react-icons/sl";
import { BiLandscape, BiUserPlus } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { TbCompass } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
import Link from "next/link";
import NavigationBar from "@/components/header/Bottomnav";

import Accordion from "react-bootstrap/Accordion";

const Single = () => {
  return (
    <>
      <section className="single mt-16">
        <div className="container">
          <div className="row gap-12-row">
            <div className="col-lg-9 col-sm-12">
              <h1 className="h4 fw-bold">
                This is a demo title for single page
              </h1>

              <div className="mt-12 img-landscape">
                <Image
                  src="/assets/image/single.webp"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>

              <h6 className="mt-12 fw-bold mt-24">Trip Information</h6>
              <div className="trip-info d-flex flex-wrap mt-16">
                <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                  <FiClock />
                  <div>
                    <p className="small">Trip Duration</p>
                    <p className="fw-bold small">9 Days</p>
                  </div>
                </div>
                <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                  <SlDirections />
                  <div>
                    <p className="small">Destination</p>
                    <p className="fw-bold small">Nepal</p>
                  </div>
                </div>
                <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                  <BiLandscape />
                  <div>
                    <p className="small">Trip Grade</p>
                    <p className="fw-bold small">Easy</p>
                  </div>
                </div>
                <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                  <BiUserPlus />
                  <div>
                    <p className="small">Trip Type</p>
                    <p className="fw-bold small">Tour</p>
                  </div>
                </div>
                <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                  <IoBedOutline />
                  <div>
                    <p className="small">Accomodation</p>
                    <p className="fw-bold small">As Per Itinerary</p>
                  </div>
                </div>
                <div className="trip-info-item d-flex align-center gap-12 px-4 py-8">
                  <FaRoute />
                  <div>
                    <p className="small">Transport</p>
                    <p className="fw-bold small">As Per Itinerary</p>
                  </div>
                </div>
              </div>

              <div className="highlights mt-12 mt-sm-24">
                <h5 className="fw-bold">Highlights</h5>
                <ul className="mt-12 p text-cGray700 ps-40">
                  <li>Panoramic shots of mountains</li>
                  <li>
                    Visit to Dhampus- a heavenly village in Kaski District
                  </li>
                  <li>
                    Trip to Seti Gorge where you get to see the water of Seti
                    flowing
                  </li>
                  <li>
                    Sightseeing around Pashupatinath Temple and Monkey Temple
                  </li>
                </ul>
              </div>

              <div className="trip-description p mt-12 mt-sm-32">
                <div className="fw-bold">
                  9 Days Nepal Luxury Adventure Tour
                </div>
                <br />
                <div className="fw-bold">
                  Place covered: Kathmandu- Chitwan- Pokhara & Dhampus
                  (Australian camp)
                </div>
                <br />
                Nepal is a country full of temples, trekking destinations and
                beautiful places to be explored. Everyone wants to visit Nepal
                and go on a mind-blowing journey in Nepal. The 9 Days Luxury
                Nepal Tour Package allows you to come on a magnificent journey
                around Kathmandu, Chitwan, Pokhara, and Dhampus. Ever wanted
                trying rafting in Trishuli River? Well, its your chance to try
                it. You get to visit Royal Chitwan National Park, the home of
                the one-horned rhino. Rafting in Trishuli River is another
                highlight of this 9 Days Luxury Nepal Tour Package. <br />
                <br /> Dive deep into the Tharu culture enjoying the ethnic
                Tharu dance program in Chitwan. The best part about the tour is
                when you get to visit Pokhara, the city of lakes. You will get a
                variety of options to choose from of what to do. Visit
                Bindabasini Temple or Go on boating in Fewa Lake or Go to
                Regional Museum everything you do in Pokhara is exceptional to
                every extent. The view of the Machhapuchhre from Pokhara and the
                sunrise view from Sarangkot are what people actually want to
                experience and they get it via 9 Days Luxury Nepal Tour Package.
                Dhampus is a village that is reached walking through parse
                villages, farm terraces, and forests. If you visit Dhampus, then
                you will definitely know the local vibes of a Nepali village.
                Whatever you do in Nepal, it is made sure that you get full
                enjoyment and luxury in your tour.
              </div>

              <div className="itinerary mt-12 mt-sm-32">
                <div className="align-center gap-8">
                  <SlDirections className="h4 text-primary" />
                  <h4 className="fw-bold">Itinerary</h4>
                </div>

                <div className="bg-blue50 px-32 py-16 h6 mt-12 ">
                  9 Days Nepal Luxury Adventure Tour Package Itinerary
                </div>

                <Accordion className="mt-12 mt-sm-16" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className="text-primary ">Day 1: </span>
                      Arrival in Kathmandu
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="text-primary ">Day 2: </span>
                      Kathmandu city Sightseeing
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="text-primary ">Day 3: </span>
                      Kathmand - Chitwan on the way rafting in trishuli river.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className="text-primary ">Day 4: </span>
                      Chitwan jungle safari activities
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <span className="text-primary ">Day 5: </span>
                      Drive from Chitwan to Pokhara.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <span className="text-primary ">Day 6: </span>
                      Pokhara to Australian camp.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <span className="text-primary ">Day 7: </span>
                      Australian Camp to Pokhara and Pokhara City SIghtseeing
                      Tour
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      <span className="text-primary ">Day 8: </span>
                      Pokhara to Kathmandu by drive or fly.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      <span className="text-primary ">Day 9: </span>
                      Departure day.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="cost-details mt-12 mt-sm-32">
                <div className="align-baseline gap-8">
                  <SlCup className="h4 text-primary" />
                  <h4 className="fw-bold">Cost Details</h4>
                </div>
                <div className="includes ps-40 mt-12">
                  <h6>Cost Includes</h6>
                  <ul className="mt-12 p text-cGray700 ps-24">
                    <li>
                      5 star Accommodation in all the hotels as per the list
                      above.
                    </li>
                    <li>Breakfast on all days.</li>
                    <li>Rafting with Lunch</li>
                    <li>
                      Full board Meals (Breakfast, Lunch & Dinner) and all
                      Jungle activity in Chitwan including elephant safari
                    </li>
                  </ul>
                </div>
                <div className="excludes ps-40 mt-12">
                  <h6>Cost Excludes</h6>
                  <ul className="mt-12 p text-cGray700 ps-24">
                    <li>
                      5 star Accommodation in all the hotels as per the list
                      above.
                    </li>
                    <li>Breakfast on all days.</li>
                    <li>Rafting with Lunch</li>
                  </ul>
                </div>
              </div>

              <div className="essential mt-12 mt-sm-32">
                <div className="align-center gap-8">
                  <TbCompass className="h3 text-primary" />
                  <h4 className="fw-bold">Essential Information</h4>
                </div>

                <div className="p mt-12">
                  Nepal is a country where you can visit any time of the year
                  and enjoy your holidays. The 9 days Nepal luxury adventure
                  tour is available in all seasons of the year. Different
                  seasons have different weather, festivals, and different
                  experience. You can do this luxury adventure Nepal tour in any
                  season and get the best tour experience. However spring and
                  autumn season are considered as the best season for Nepal
                  luxury tour.
                </div>
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
                    1 review
                  </Link>
                </div>
                <div className="mt-8 d-flex price-tag gap-8 text-white">
                  <GiPriceTag className="h2" />
                  <div className="price">
                    <div className="x-small">Start from </div>
                    <h6>
                      Rs 99999 <strike>Rs 150000</strike>
                    </h6>
                  </div>
                </div>
                <div className="group-price bg-white px-8 py-12 rounded-4 mt-12">
                  <p className="fw-bold">WE OFFER GROUP PRICE</p>
                  <ul className=" mt-8">
                    <li>
                      <div className="flex-center-between">
                        <p className="small fw-medium">1px </p>
                        <p className="fw-bold small">Rs 100000</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex-center-between">
                        <p className="small fw-medium">2px </p>
                        <p className="fw-bold small">Rs 100000</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex-center-between">
                        <p className="small fw-medium">3px - 15px </p>
                        <p className="fw-bold small">Rs 100000</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="why-us text-white mt-12">
                  <h6>WHY BOOK WITH US?</h6>
                  <ul className="mt-8">
                    <li>Best Price Offer</li>
                    <li>Instant Onlne Booking Confirmation</li>
                    <li>Extend and Customize Trip Itineraries</li>
                  </ul>
                </div>

                <Link
                  href="#"
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
                    <p className=" fw-medium mt-4">+977 9876543210 (Gabish)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single;

Single.getLayout = function PageLayout(page) {
  return (
    <>
      <NavigationBar />

      {page}
    </>
  );
};
