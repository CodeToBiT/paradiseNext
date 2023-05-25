import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetDestinationsQuery } from "../../../frontend/services/api";

const Destination = () => {
  const { data: destinations } = useGetDestinationsQuery();
  return (
    <>
      <section className="destinations mt-16 mt-sm-40">
        <div className="text-center">
          <h3 className=" h3">Top Destinations</h3>
        </div>
        <div className="container">
          <div className="row mt-24 mt-sm-32 align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="img-portrait rounded-12 position-relative">
                <Image
                  src="/assets/image/destination.jpeg"
                  fill
                  alt="destination"
                />
                <div className="overlay text-white">
                  <h2>Up to</h2>
                  <div className="align-center gap-8 px-4">
                    <h2 className="h1">50</h2>
                    <div className="h3">
                      <span>%</span>
                      <span>off</span>
                    </div>
                  </div>
                  <div className="h2">Holiday packages</div>
                  <Link
                    href="/destinations"
                    className="btn btn-primary mt-8 btn-slide"
                  >
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="wrapper">
                <div className="gallery">
                  {destinations?.data.slice(0, 8).map((data, i) => {
                    return (
                      <div className="gallery__item" key={i}>
                        <Link href={`/destinations/${data.slug}`} className="gallery__link">
                          <Image
                            src={data.image}
                            fill
                            alt="destination"
                            className="gallery__image"
                          />

                          <div className="gallery__overlay">
                            <span>{data.name}</span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}

                  <div className="gallery__item">
                    <Link href="/destinations" className="gallery__link">
                      <Image
                        src="/assets/image/viewall.png"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>View All</span>
                      </div>
                    </Link>
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

export default Destination;
