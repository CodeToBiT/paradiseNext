import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import SingleCard from "@/components/card/SingleCard";
import Link from "next/link";
import {
  useGetCategoryPackageQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

import { Skeleton } from "antd";

const Offers = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: tour, isLoading } = useGetCategoryPackageQuery(id);
  const { data: settings } = useGetSettingsQuery();
  const transformText = (text) => {
    if (text && text.includes("-")) {
      return text.replace("-", " ");
    } else {
      return text;
    }
  };

  const transformedText = transformText(id);
  return (
    <>
      {isLoading == false && tour?.data == null ? (
        <>
          <div className="single-notfound flex-column mt-32 mt-sm-80">
            <div className="container">
              <div className="row flex-center-center">
                <div className="col-md-7 col-sm-12 ">
                  <div className="img-portrait">
                    <Image
                      src="/assets/image/404.png"
                      width={0}
                      height={0}
                      sizes="100vh"
                      alt="Paradise Destination"
                    />
                  </div>

                  <div className="flex-center-center flex-column">
                    <h2>Not Found</h2>
                    <p className="text-cGray600">
                      The page you requested is cannot be found or does not
                      exist
                    </p>
                    <Link href="/" className="btn btn-primary rounded-8 mt-16">
                      Go Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Head>
            <title>Our Deals | Paradise Destination</title>
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
                <h1 className="text-white text-capitalize">
                  {transformedText}
                </h1>
                <Breadcrumb>
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/destinations">Deals</Link>
                  </li>
                  <Breadcrumb.Item active className="text-capitalize">
                    {transformedText}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </section>

          <section className="destination--listing mt-12 mt-sm-40">
            <div className="intro text-center">
              <div className="text-primary text-center small">
                UNCOVER PLACES
              </div>
              <h3 className="text-uppercase">{id} PACKAGES</h3>

              {/* {isLoading ? (
            <Skeleton
              active={true}
              paragraph={{ rows: 0 }}
              title={{ width: "100%" }}
              size="large"
              className="mt-12 mx-auto w-100"
            />
          ) : (
            <div
              className="p text-cGray600 mt-12"
              dangerouslySetInnerHTML={{
                __html: destination?.data.description,
              }}
            ></div>
          )} */}
            </div>
            <div className="container">
              <div className="row gap-16-row mt-12 mt-sm-40">
                {isLoading ? (
                  <>
                    <div className="col-lg-4 col-sm-12">
                      <Skeleton.Image active={true} />
                      <Skeleton
                        active={true}
                        title={{ width: 150 }}
                        paragraph={{ width: [300, 300, 200] }}
                        className="mt-12"
                      />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <Skeleton.Image active={true} />
                      <Skeleton
                        active={true}
                        title={{ width: 150 }}
                        paragraph={{ width: [300, 300, 200] }}
                        className="mt-12"
                      />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <Skeleton.Image active={true} />
                      <Skeleton
                        active={true}
                        title={{ width: 150 }}
                        paragraph={{ width: [300, 300, 200] }}
                        className="mt-12"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {tour?.data.length >= 1 ? (
                      <>
                        {tour?.data.map((data, i) => {
                          return (
                            <div className="col-lg-4 col-sm-12" key={i}>
                              <SingleCard
                                image={data.image}
                                description={data.short_description}
                                name={data.name}
                                duration={data.duration}
                                price={data.adult_price}
                                slug={data.slug}
                                destination={transformedText}
                              />
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className="p text-center">
                          <i>No packages available yet</i>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Offers;
