import React from "react";
import ServiceCard from "../card/ServiceCard";

import {
  useGetServicesQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

const Service = () => {
  const { data: service, isLoading } = useGetServicesQuery();
  const { data: settings } = useGetSettingsQuery();
  return (
    <>
      <section className="service mt-24 mt-sm-64">
        <div className="container">
          <div className="row align-items-center gap-12-row">
            <div className="col-lg-4 col-sm-12 text-center d-grid align-self-stretch">
              <div
                className="service-title flex-center-center flex-column p-24 rounded-4 text-white"
                style={{
                  backgroundImage: `url(${settings?.data.service_image})`,
                }}
              >
                <h3>{settings?.data.service_title}</h3>
                <div className="p mt-16">
                  {settings?.data.service_description}
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="row gap-24-row">
                {service?.data.slice(0,6).map((data, i) => {
                  return (
                    <div className="col-lg-4 col-sm-6 d-grid align-self-stretch" key={i}>
                      <ServiceCard
                        title={data.title}
                        image={data.image}
                        description={data.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
