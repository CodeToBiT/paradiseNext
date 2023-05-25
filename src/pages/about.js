import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Ourteams from "@/components/layout/Ourteams";

import Testimonials from "@/components/layout/Testimonials";

import {
  useGetWhychooseusQuery,
  useGetSettingsQuery,
  useGetPageDetailsQuery,
} from "../../frontend/services/api";
import OverlayLoader from "@/components/layout/OverlayLoader";

const About = () => {
  const { data: whychooseus } = useGetWhychooseusQuery();
  const { data: settings, isLoading } = useGetSettingsQuery();
  const { data: ceo } = useGetPageDetailsQuery("message-from-ceo");
  const { data: why } = useGetPageDetailsQuery("why-choose-us");
  const { data: about } = useGetPageDetailsQuery("about-us");

  if (isLoading) {
    return <OverlayLoader />;
  }
  return (
    <>
      <Head>
        <title>{settings?.data?.aboutpage_seo_title}</title>
        <meta
          name="description"
          content={settings?.data?.aboutpage_seo_description}
        />
        <meta name="keywords" content={settings?.data?.aboutpage_seo_keywords} />
      </Head>
      <section className="about-banner">
        <div className="img-wide">
          <Image
            src={settings?.data.about_page_image}
            width={0}
            height={0}
            sizes="100vw"
            alt="about"
          />
          <div className="about-banner-content">
            <h1 className="text-white">About Us</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>

              <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section className="about-info mt-12 mt-sm-32">
        <div className="container">
          <div className="row gap-16-row borders align-center ps-24 py-24 pe-12 px-sm-56 py-sm-40">
            <div className="col-lg-6">
              <div className="about-info-content">
                <h2 className="h3 text-primary">About Us</h2>
                <p className="text-primary">The best travel agencey for you</p>
                <div
                  className="p fw-regular text-cGray600 mt-12"
                  dangerouslySetInnerHTML={{ __html: about?.data.description }}
                ></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="img-portrait">
                <Image
                  src={about?.data.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why mt-12 mt-sm-32 bg-gray50 pt-40 pb-24">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="fix mx-auto">
                <div className="img-portrait">
                  <Image
                    src={why?.data.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="about"
                  />
                </div>
                <div className="bubble-big">
                  <Image
                    src={why?.data.image}
                    width={260}
                    height={260}
                    alt="about"
                  />
                </div>
                <div className="bubble-small">
                  <Image
                    src={why?.data.image}
                    width={190}
                    height={190}
                    alt="about"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="small text-primary">
                The reason why choose the best
              </p>
              <h4 className="mt-8 text-primary">{why?.data.title}</h4>

              <div
                className="p mt-12"
                dangerouslySetInnerHTML={{ __html: why?.data.description }}
              ></div>
              <div className="row gap-16-row mt-16">
                {whychooseus?.data.map((data, i) => {
                  return (
                    <div className="col-lg-6 col-sm-12" key={i}>
                      <div className="align-center gap-8">
                        <Image
                          src={data.image}
                          width={60}
                          height={60}
                          alt="whyus"
                        />

                        <div>
                          <h6>{data.title}</h6>
                          <div
                            className="clamp-2 x-small"
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-ceo mt-12 mt-sm-32">
        <div className="container">
          <div className="row flex-center">
            <div className="col-lg-10 col-sm-12">
              <div className="row gap-16-row gap-32">
                <div className="col-lg-6 col-sm-12">
                  <div className="image">
                    <div className="img-portrait">
                      <Image
                        src={ceo?.data.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ceo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-12">
                  <div className="about-ceo-content">
                    <h3 className="text-primary">{ceo?.data.title}</h3>
                    <p
                      className="text-cGray600 mt-12"
                      dangerouslySetInnerHTML={{
                        __html: ceo?.data.description,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Ourteams />
    </>
  );
};

export default About;
