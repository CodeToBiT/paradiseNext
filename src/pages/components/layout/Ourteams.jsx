import React from "react";
import TeamsCard from "../card/TeamsCard";

const Ourteams = () => {
  return (
    <>
      <section className="ourteams">
        <div className="text-center">
          <h3 className=" h3">Our Teams</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-32">
            <div className="col-lg-4 col-sm-12">
              <TeamsCard />
            </div>
            <div className="col-lg-4 col-sm-12">
              <TeamsCard />
            </div>
            <div className="col-lg-4 col-sm-12">
              <TeamsCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteams;
