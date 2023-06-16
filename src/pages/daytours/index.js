import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import SingleCard from "@/components/card/SingleCard";
import Link from "next/link";
import Head from "next/head";

import {
  useGetDestinationDetailQuery,
  useGetTourTypeQuery,
} from "../../../frontend/services/api";

const Daytours = () => {
  const { data: tour } = useGetTourTypeQuery("nepal-day-tours");
  const { data: destination } = useGetDestinationDetailQuery("nepal-day-tours");
  return (
    <>
      <Head>
        <title>Day Tours | Paradise Destination</title>
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
            <h1 className="text-white">Day Tours</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <Breadcrumb.Item active>Day Tours</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section className="destination--listing mt-12 mt-sm-40">
        <div className="intro text-center">
          <div className="text-primary text-center small">UNCOVER PLACES</div>
          <h3>POPULAR PACKAGES</h3>
          <div
            className="p text-cGray600 mt-12"
            dangerouslySetInnerHTML={{ __html: destination?.data.description }}
          ></div>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-12 mt-sm-40">
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
                        currency={data.currency}
                        destination="Nepal"
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="p">
                  <i>No packages available yet</i>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Daytours;
