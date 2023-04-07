import React from "react";
import Image from "next/image";

const Destination = () => {
  return (
    <>
      <section className="destinations mt-16 mt-sm-40">
        <div className="text-center">
          <div className=" h3">Top Destinations</div>
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
                  <div className="h2">Up to</div>
                  <div className="align-center gap-8 px-4">
                    <div className="h1">50</div>
                    <div className="h2">
                      <span>%</span>
                      <span>off</span>
                    </div>
                  </div>
                  <div className="h2">Holiday packages</div>
                  <a href="#" className="btn btn-primary mt-8">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="wrapper">
                <div className="gallery">
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/japan2.jpeg"
                        fill
                        alt="destination"
                        className="gallery__image"
                      />

                      <div className="gallery__overlay">
                        <span>Japan</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/thailand.jpeg"
                        fill
                        className="gallery__image"
                        alt="destination"
                      />

                      <div className="gallery__overlay">
                        <span>Thailand</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/maldives.jpeg"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>Maldives</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/russia.jpeg"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>Russia</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/dubai.jpeg"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>Dubai</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/philippines.jpeg"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>Philippines</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/korea.jpeg"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>Korea</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/london.jpeg"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>London</span>
                      </div>
                    </a>
                  </div>
                  <div className="gallery__item">
                    <a href="#" className="gallery__link">
                      <Image
                        src="/assets/image/viewall.png"
                        className="gallery__image"
                        alt="destination"
                        fill
                      />

                      <div className="gallery__overlay">
                        <span>View All</span>
                      </div>
                    </a>
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
