import React from "react";
import Head from "next/head";
import TeamsCard from "@/components/card/TeamsCard";
import { Providers } from "../../frontend/services/providers";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import { useGetOurteamsQuery } from "../../frontend/services/api";

const Teams = () => {
  const { data: ourteams } = useGetOurteamsQuery();
  return (
    <>
      <Head>
        <title>Our Teams | Paradise Destination</title>
      </Head>
      <section className="ourteams mt-12 mt-sm-32">
        <div className="text-center">
          <h3 className=" h3">Our Teams</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-32">
            {ourteams?.data.map((data, i) => {
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

export default Teams;

Teams.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <NavigationBar />
        {page}
        <Footer />
      </Providers>
    </>
  );
};
