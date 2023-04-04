import React from "react";

const Destination = () => {
  return (
    <>
      <section className="destinations">
        <div className="text-center">
          <div className=" h3">Top Destinations</div>
        </div>
        <div className="container">
          <div className="row mt-24 mt-sm-32">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="img-portrait h-100 rounded-12">
                <img src="/assets/image/destination.jpeg" alt="destination" />
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
              <div class="wrapper">
                <div class="gallery">
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/japan2.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Japan</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/thailand.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Thailand</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/maldives.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Maldives</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/russia.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Russia</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/dubai.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Dubai</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/philippines.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Philippines</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/korea.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>Korea</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      <img
                        src="/assets/image/london.jpeg"
                        class="gallery__image"
                      />
                      <div class="gallery__overlay">
                        <span>London</span>
                      </div>
                    </a>
                  </div>
                  <div class="gallery__item">
                    <a href="#" class="gallery__link">
                      {/* <img
                        src="/assets/image/london.jpeg"
                        class="gallery__image"
                      /> */}
                      <div class="gallery__overlay">
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
