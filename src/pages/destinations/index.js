import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import DestinationCard from "@/components/card/DestinationCard";
import Link from "next/link";

import { Skeleton } from "antd";

import { useGetDestinationsQuery } from "../../../frontend/services/api";




const Destinations = () => {
  const { data: destination, isLoading } = useGetDestinationsQuery();
  return (
    <>
      <section className="single-banner">
        <div className="img-wide">
          <Image
            src="/assets/image/about.webp"
            width={0}
            height={0}
            sizes="100vw"
            alt="about"
          />
          <div className="single-banner-content">
            <h1 className="text-white">Our Destinations</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <Breadcrumb.Item active>Destinations</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section className="countries mt-12 mt-sm-32">
        <div className="text-center">
          <h3 className=" h3">Top Destinations</h3>
        </div>
        <div className="container">
          <div className="row gap-24-row mt-24 mt-sm-40">
            
            {isLoading ? (
              <>
                <div className="col-lg-3 col-sm-12">
                  <Skeleton.Image active={true} />
                  <Skeleton
                    active={true}
                    title={{ width: 100 }}
                    paragraph={{ width: [250, 250, 150] }}
                    className="mt-12"
                  />
                </div>
                <div className="col-lg-3 col-sm-12">
                  <Skeleton.Image active={true} />
                  <Skeleton
                    active={true}
                    title={{ width: 100 }}
                    paragraph={{ width: [250, 250, 150] }}
                    className="mt-12"
                  />
                </div>
                <div className="col-lg-3 col-sm-12">
                  <Skeleton.Image active={true} />
                  <Skeleton
                    active={true}
                    title={{ width: 100 }}
                    paragraph={{ width: [250, 250, 150] }}
                    className="mt-12"
                  />
                </div>
                <div className="col-lg-3 col-sm-12">
                  <Skeleton.Image active={true} />
                  <Skeleton
                    active={true}
                    title={{ width: 100 }}
                    paragraph={{ width: [250, 250, 150] }}
                    className="mt-12"
                  />
                </div>
              
              </>
            ) : (
              <>
                {destination?.data.map((data, i) => {
                  return (
                    <div className="col-lg-3" key={i}>
                      <DestinationCard
                        name={data.name}
                        image={data.image}
                        slug={data.slug}
                        activities={data.children.length}
                        
                      />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
