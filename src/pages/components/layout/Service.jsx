import React from "react";
import ServiceCard from "../card/ServiceCard";

const Service = () => {
  return (
    <>
      <section className="service mt-24 mt-sm-64">
        <div className="container">
          <div className="row align-items-cente gap-12-row">
            <div className="col-lg-4 col-sm-12 text-center d-grid align-self-stretch">
              <div className="service-title flex-center-center flex-column p-24 rounded-4 text-white">
                <h3>Our Services</h3>
                <div className="p mt-16">
                  We provide the best services at a reasonable price here at Paradise Destination.
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="row gap-24-row">
                <div className="col-lg-4 col-sm-6 d-grid align-self-stretch">
                  <ServiceCard
                    title="International Tour Packages"
                    image="/assets/icon/tour.png"
                    description="We are outbound specialist in Nepal. With various special offers."
                  />
                </div>
                <div className="col-lg-4 col-sm-6 d-grid align-self-stretch">
                  <ServiceCard
                    title="Cheap Air Tickets"
                    image="/assets/icon/flight.png"
                    description="Traveling might be any time. It may be the last minute or it might be..."
                  />
                </div>
                <div className="col-lg-4 col-sm-6 d-grid align-self-stretch">
                  <ServiceCard
                    title="Trekking / Hiking"
                    image="/assets/icon/trekking.png"
                    description="Mount Everest, the highest peak in the world, now its time to climb."
                  />
                </div>
                <div className="col-lg-4 col-sm-6 d-grid align-self-stretch">
                  <ServiceCard
                    title="Vehicle Rental Service"
                    image="/assets/icon/vehicle.png"
                    description="At Paradise Destination, we arrange all kind of vehicle for your convenient."
                  />
                </div>
                <div className="col-lg-4 col-sm-6 d-grid align-self-stretch">
                  <ServiceCard
                    title="Global Visa Service"
                    image="/assets/icon/visa.png"
                    description="Paradise destinaiton is more expertise in applying visit visa."
                  />
                </div>
                <div className="col-lg-4 col-sm-6 d-grid align-self-stretch">
                  <ServiceCard
                    title="Nepal Tour"
                    image="/assets/icon/nepal.png"
                    description="Nepal, country with lots of natural diversities."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
