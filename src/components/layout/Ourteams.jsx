import React from "react";
import TeamsCard from "../card/TeamsCard";
import { useGetOurteamsQuery } from "../../../frontend/services/api";

const Ourteams = () => {
  const { data: ourteams } = useGetOurteamsQuery();
  return (
    <>
      <section className="ourteams mt-12 mt-sm-32">
        <div className="text-center">
          <h3 className=" h3">Our Teams</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-32">
            {ourteams?.data.slice(0, 3).map((data, i) => {
              return (
                <div className="col-lg-4 col-sm-12" key={i}>
                  <TeamsCard
                    image={data.image}
                    name={data.name}
                    position={data.position}
                    description={data.description}
                    facebook={data.facebook_link}
                    linkedin={data.linkedin_link}
                    twitter={data.twitter_link}
                    instagram={data.instagram_link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteams;
