import React, { useState, useEffect } from "react";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Providers } from "../../../../frontend/services/providers";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

import { useRouter } from "next/router";

import { RxPlus, RxMinus } from "react-icons/rx";
import {
  useGetPackageDetailsQuery,
  useCreateBookingsMutation,
} from "../../../../frontend/services/api";

const Booking = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: packages } = useGetPackageDetailsQuery(id);
  const [createBooking, { isError, isLoading, isSuccess }] =
    useCreateBookingsMutation();

  const [bookingData, setBookingData] = useState({
    trip_date: "",
    first_name: "",
    last_name: "",
    email: "",

    phone: "",
    comments: "",
    total_price: 0,
  });

  const { first_name, last_name, email, phone, comments } = bookingData;

  useEffect(() => {
    if (isError) {
      toast.failed("failed");
    }
    if (isSuccess) {
      toast.success("Submitted Successfully");

      setTimeout(() => {
        router.push("/packages");
      }, 2000);
    }
  });

  const [package_id, setPackageId] = useState();
  useEffect(() => {
    setPackageId(packages?.data.id);
  }, [packages?.data.id]);

  const [tripDate, setTripDate] = useState(null);

  const adultValue = 100000;
  const childValue = 50000;

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [basePrice, setBasePrice] = useState(adultValue);
  const [basePrice2, setBasePrice2] = useState(childValue);

  const [country, setCountry] = useState("");

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleMinusClick = (event) => {
    event.preventDefault();
    const newValue = Math.max(adultCount - 1, 1);
    setAdultCount(newValue);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const handlePlusClick = (event) => {
    event.preventDefault();
    const newValue = Math.min(adultCount + 1, 20);
    setAdultCount(newValue);
  };

  const handleMinusClick2 = (event) => {
    event.preventDefault();
    const newValue = Math.max(childCount - 1, 0);
    setChildCount(newValue);
  };

  const handlePlusClick2 = (event) => {
    event.preventDefault();
    const newValue = Math.min(childCount + 1, 10);
    setChildCount(newValue);
  };

  const handleDateChange = (event) => {
    setTripDate(event.target.value);
  };

  const totalValue = basePrice * adultCount + basePrice2 * childCount;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      package_id,
      trip_date: tripDate,
      no_of_adults: adultCount,
      no_of_children: childCount,
      first_name,
      last_name,
      email,
      country,
      phone,
      comments,
      total_price: totalValue,
    };
    createBooking(data);
    // console.log(data);
  };

  const onChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #d60d45",
            padding: "16px",
            color: "#005294",
          },
        }}
      />
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
                              value={adultCount}
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
                              value={childCount}
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
                      <label
                        htmlFor="first_name"
                        className="small text-cGray700"
                      >
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
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="last_name"
                        className="small text-cGray700"
                      >
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
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <label htmlFor="email" className="small text-cGray700">
                        Email Address <span className="text-accent">*</span>
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={onChange}
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="phone" className="small text-cGray700">
                        Country Code + Phone Number
                        <span className="text-accent">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Country Code + Phone Number"
                        className="form-control"
                        value={phone}
                        name="phone"
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="country" className="small text-cGray700">
                        Select Your Country
                        <span className="text-accente">*</span>
                      </label>

                      <select
                        name="country"
                        value={country}
                        onChange={handleCountry}
                        className="form-select"
                      >
                        <option selected>---- Select Your Country ----</option>
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
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
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
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
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
                        <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curacao">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
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
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
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
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
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
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
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
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
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
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Barthelemy">
                          Saint Barthelemy
                        </option>
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
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <label htmlFor="comments" className="small text-cGray700">
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

                    {/* <div className="col-lg-12 col-sm-12"></div> */}
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
                    <span className="fw-medium">
                      Trip Start: {formatDate(tripDate)}
                    </span>
                  </p>
                  <p className="small text-cGray600">
                    <span className="fw-medium">No. of Travellers: </span>
                    {adultCount} &nbsp; Adult(s) &nbsp; {childCount} &nbsp;
                    Children
                  </p>
                </div>

                <div className="extra mt-12">
                  <p className="fw-bolder">Extra prices:</p>
                  {/* <div className="extra-item">
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
                  </div> */}
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
                <button
                  className="btn btn-primary fw-medium rounded-24 mt-12"
                  onClick={handleSubmit}
                >
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
