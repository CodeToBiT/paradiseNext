import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import SingleCard from "@/components/card/SingleCard";
import Link from "next/link";
import DestinationCard from "@/components/card/DestinationCard";

import { Skeleton } from "antd";

import {
  useGetDestinationDetailQuery,
  useGetTourTypeQuery,
} from "../../../frontend/services/api";
import Head from "next/head";

const SingleDestination = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: destination } = useGetDestinationDetailQuery(id);
  const { data: tour, isLoading } = useGetTourTypeQuery(id);

  const transformText = (text) => {
    if (text && text.includes("-")) {
      return text.split("-")[0];
    } else {
      return text;
    }
  };

  const transformedText = transformText(id);

  return (
    <>
      <Head>
        <title>{destination?.data?.seo_title}</title>
        <meta
          name="description"
          content={destination?.data?.meta_description}
        />
        <meta name="keywords" content={destination?.data?.meta_keywords} />
      </Head>
      <section className="single-banner">
        <div className="img-wide">
          <Image
            src={destination?.data.image}
            width={0}
            height={0}
            sizes="100vw"
            alt="about"
          />
          <div className="single-banner-content">
            <h1 className="text-white">{destination?.data.name}</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/destinations">Packages</Link>
              </li>
              <Breadcrumb.Item active>{destination?.data.name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section className="destination--listing mt-12 mt-sm-40">
        <div className="intro text-center">
          <div className="text-primary text-center small">UNCOVER PLACES</div>
          <h3>POPULAR PACKAGES</h3>

          {isLoading ? (
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
          )}
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
                        <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                          <SingleCard
                            image={data.image}
                            description={data.short_description}
                            name={data.name}
                            duration={data.duration}
                            price={data.adult_price}
                            slug={data.slug}
                            size={data.activity.group_size}
                            destination={transformedText}
                            currency={data.currency}
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
      {console.log(tour)}

      {destination?.data.children.length >= 1 ? (
        <section className="destination--activities mt-12 mt-sm-40">
          <div className="intro text-center">
            <div className="text-primary text-center small">EXPLORE MORE</div>
            <h3>ACTIVITIES</h3>
            <div className="container">
              <div className="row gap-16-row mt-12 mt-sm-40">
                {destination?.data.children.map((data, i) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                      <DestinationCard
                        name={data.name}
                        image={data.image}
                        slug={data.slug}
                        // activities={data.children.length}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <> </>
      )}
    </>
  );
};

export default SingleDestination;
