import React, { useState, useEffect } from "react";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { Providers } from "../../frontend/services/providers";
import OverlayLoader from "@/components/layout/OverlayLoader";
import Head from "next/head";

import { useRouter } from "next/router";
import {
  useCreateInquiriesMutation,
  useGetSettingsQuery,
} from "../../frontend/services/api";

const Contact = () => {
  const router = useRouter();
  const { data: settings, isLoading } = useGetSettingsQuery();
  const [createInquiry, { isError, isSuccess }] = useCreateInquiriesMutation();
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { first_name, last_name, email, phone, message } = contactData;

  useEffect(() => {
    if (isError) {
      toast.failed("failed");
    }
    if (isSuccess) {
      toast.success("Submitted Successfully");
      setTimeout(() => {
        router.reload();
      }, 1000);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name,
      last_name,
      email,
      phone,
      message,
    };

    createInquiry(data);
  };

  const onChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <OverlayLoader />;
  }
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

      <Head>
        <title>{settings?.data?.contactpage_seo_title}</title>
        <meta
          name="description"
          content={settings?.data?.contactpage_seo_description}
        />
        <meta name="keywords" content={settings?.data?.contactpage_seo_keywords} />
      </Head>
      <section className="contact">
        <div className="container">
          <div className="contact-intro text-center py-32 ">
            <h1 className="h2 ">Contact Us</h1>
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
                    <h5>Call us</h5>
                    <h6 className="fw-regular">
                      {settings?.data.site_contact}
                    </h6>
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
                    <h5>Send us an email</h5>
                    <h6 className="fw-regular">{settings?.data.site_email}</h6>
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
                    <h5>Location</h5>
                    <h6 className="fw-regular">
                      {settings?.data.site_location}
                    </h6>
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
                    src={settings?.data.contact_page_image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="contact"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-sm-12">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row gap-16-row">
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="first_name" className="p  text-cGray700">
                        Full Name <span className="text-accent">*</span>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={first_name}
                        name="first_name"
                        // id="full_name"
                        placeholder="Your First Name"
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="last_name" className="p  text-cGray700">
                        Full Name <span className="text-accent">*</span>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={last_name}
                        name="last_name"
                        // id="full_name"
                        placeholder="Your Last Name"
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="email" className="p  text-cGray700">
                        Email Address <span className="text-accent">*</span>
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        id="email"
                        placeholder="Your Email"
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="phone" className="p  text-cGray700">
                        Phone Number <span className="text-accent">*</span>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={phone}
                        name="phone"
                        id="phone"
                        placeholder="Your Phone Number"
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <label htmlFor="message" className="p  text-cGray700">
                        Your Message
                      </label>
                      <textarea
                        value={message}
                        className="form-control"
                        name="message"
                        rows="10"
                        onChange={onChange}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-4">
                      <button className="btn btn-primary btn-slide">
                        <span>Submit</span>
                      </button>
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
      <Providers>
        <NavigationBar />
        {page}
        <Footer />
      </Providers>
    </>
  );
};
