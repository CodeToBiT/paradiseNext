import React from "react";
import Image from "next/image";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Ourteams from "@/components/layout/Ourteams";

import Testimonials from "@/components/layout/Testimonials";

import { useGetWhychooseusQuery } from "../../frontend/services/api";

const about = () => {
  const { data: whychooseus } = useGetWhychooseusQuery();
  return (
    <>
      <section className="about-banner">
        <div className="img-wide">
          <Image
            src="/assets/image/about.webp"
            width={0}
            height={0}
            sizes="100vw"
            alt="about"
          />
          <div className="about-banner-content">
            <h1 className="text-white">About Us</h1>
            <Breadcrumb>
              <li class="breadcrumb-item">
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
                <h1 className="h3 text-primary">About Us</h1>
                <p className="text-primary">The best travel agencey for you</p>
                <div className="p fw-regular text-cGray600 mt-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  rerum quod consectetur molestias dolorum quaerat mollitia
                  ullam animi eaque exercitationem, excepturi nulla fugiat
                  aperiam cumque laborum velit maxime nam eius. A in quod odio
                  reprehenderit est, quam quas porro voluptatem tenetur
                  recusandae nobis optio perspiciatis repudiandae temporibus
                  vitae quisquam maxime voluptatum nihil quae voluptate?
                  Voluptatum beatae sequi exercitationem tenetur natus libero
                  quaerat repudiandae repellendus asperiores quasi distinctio
                  expedita, quia dolorem ipsam omnis sed cupiditate nesciunt.
                  Odit dolor maiores consectetur consequuntur? vitae quisquam
                  maxime voluptatum nihil quae voluptate? Voluptatum beatae
                  sequi exercitationem tenetur natus libero quaerat repudiandae
                  repellendus asperiores quasi distinctio expedita, quia dolorem
                  ipsam omnis sed cupiditate nesciunt. Odit dolor maiores
                  consectetur consequuntur?
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="img-portrait">
                <Image
                  src="/assets/image/about.jpeg"
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
                    src="/assets/image/about.jpeg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="about"
                  />
                </div>
                <div className="bubble-big">
                  <Image
                    src="/assets/image/about.jpeg"
                    width={260}
                    height={260}
                    alt="about"
                  />
                </div>
                <div className="bubble-small">
                  <Image
                    src="/assets/image/about.jpeg"
                    width={190}
                    height={190}
                    alt="about"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="small text-primary">Why Choose Us</p>
              <h4 className="mt-8 text-primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h4>

              <div className="p mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium aliquam eaque minima dolores omnis illum amet optio,
                in exercitationem fuga!
              </div>
              <div className="row gap-16-row mt-16">
                {whychooseus?.data.map((data, i) => {
                  return (
                    <div className="col-lg-6 col-sm12">
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
                        src="/assets/image/japan.jpeg"
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
                    <h3 className="text-primary">Message from CEO</h3>
                    <p className="text-cGray600 mt-12">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium ipsa, maxime amet voluptates quis velit soluta
                      dicta quaerat magnam ducimus asperiores ut eos eum optio
                      facere nobis quos delectus est cumque aperiam saepe
                      repudiandae, rerum, error repellat? Minus et est eum
                      incidunt quam a laudantium perspiciatis sequi fugiat.
                      Nemo, amet?
                    </p>
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

export default about;
